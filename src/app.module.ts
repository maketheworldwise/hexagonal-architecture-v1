import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MembersModule } from './members/members.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { addTransactionalDataSource } from 'typeorm-transactional';
import { DataSource } from 'typeorm';
import {MembersEntity} from "./members/adapter/out/persistence/entity/members.entity";
import {MemberAddressesEntity} from "./members/adapter/out/persistence/entity/member-addresses.entity";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      name: 'default',
      useFactory() {
        return {
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: 'password',
          database: 'test',
          synchronize: false,
          entities: [
              MembersEntity,
              MemberAddressesEntity,
          ],
          logging: true,
        };
      },
      async dataSourceFactory(option) {
        if (!option) {
          throw new Error('Invalid options passed');
        }
        const dataSource = new DataSource(option);
        await dataSource.initialize();
        return addTransactionalDataSource({
          name: 'default',
          dataSource: dataSource,
        });
      },
    }),
    MembersModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
