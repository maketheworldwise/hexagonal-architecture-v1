export class JoinMemberCommand {
  private readonly id: number;

  private readonly name: string;

  private readonly email: string;

  private readonly gender: 'man' | 'woman';

  private readonly age: number;

  private readonly status: 'active' | 'deleted';

  private readonly createdAt: Date;

  private readonly updatedAt: Date;

  constructor(param: {
    name: string;
    email: string;
    gender: 'man' | 'woman';
    age: number;
  }) {
    // application state change
    // ex) input validation
    this.id = null;
    this.name = param.name;
    this.email = param.email;
    this.gender = param.gender;
    this.age = param.age;
    this.status = 'active';
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  getId() {
    return this.id
  }

  getName() {
    return this.name
  }

  getEmail() {
    return this.email
  }

  getGender() {
    return this.gender
  }

  getAge() {
    return this.age
  }

  getStatus() {
    return this.status
  }

  getCreatedAt() {
    return this.createdAt
  }

  getUpdatedAt() {
    return this.updatedAt
  }


}
