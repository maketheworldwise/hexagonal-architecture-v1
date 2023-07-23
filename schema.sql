create table members
(
    id         int auto_increment                                                               not null,
    name       varchar(20)                default ''                                            not null,
    email      varchar(255)               default ''                                            not null,
    gender     enum ('man','woman')       default 'man'                                         not null,
    age        int                        default '0'                                           not null,
    status     enum ('active', 'deleted') default 'active'                                      not null,
    created_at datetime                   default current_timestamp                             not null,
    updated_at datetime                   default current_timestamp on update current_timestamp not null,
    primary key (id)
);

create table member_addresses
(
    id        int auto_increment       not null,
    member_id int          default '0' not null,
    zipcode   varchar(5)   default ''  not null,
    address1  varchar(255) default ''  not null,
    address2  varchar(255) default '0' not null,
    primary key (id)
);
