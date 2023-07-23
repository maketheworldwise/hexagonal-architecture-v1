# Welcome to hexagonal-architecture-v1 👋

> For the purpose of representing architectural structure rather than verifying functionality, this project may not actually be executable.

> I have designed a structure for a simple API that allows user registration and retrieval of members.

## Table

![](./docs/images/table.png)

## Structure

```
.
├── adapter
│   ├── in
│   │   └── web
│   │       ├── dto
│   │       │   └── join-member.dto.ts
│   │       ├── join-member.controller.ts
│   │       └── my-page.controller.ts
│   └── out
│       └── persistence
│           ├── adapter
│           │   ├── create-member-address.adapter.ts
│           │   ├── create-member.adapter.ts
│           │   └── read-member.adapter.ts
│           ├── entity
│           │   ├── member-addresses.entity.ts
│           │   └── members.entity.ts
│           ├── mapper
│           │   ├── member-addresses.mapper.ts
│           │   └── members.mapper.ts
│           └── repository
│               ├── member-addresses.repository.ts
│               └── members.repository.ts
├── application
│   ├── port
│   │   ├── in
│   │   │   ├── command
│   │   │   │   ├── join-member-address.command.ts
│   │   │   │   └── join-member.command.ts
│   │   │   ├── query
│   │   │   │   └── i.get-member-info.query.ts
│   │   │   └── usecase
│   │   │       └── i.join-member.usecase.ts
│   │   └── out
│   │       ├── i.create-member-address.port.ts
│   │       └── i.create-member.port.ts
│   └── service
│       ├── get-member-info.service.ts
│       └── join-member.service.ts
├── domain
│   ├── member-addresses.ts
│   └── members.ts
└── members.module.ts
```

## The process of operation or functioning.

![](./docs/images/1.jpg)
![](./docs/images/2.jpg)
![](./docs/images/3.jpg)

## Result

```
POST http://127.0.0.1/join
{
    "name": "hello",
    "email": "hello@example.com",
    "gender": "man",
    "age": 26,
    "zipcode": "00000",
    "address1": "hello address1",
    "address2": "hello address2"
}

GET http://127.0.0.1/me/2
{
    "name": "world",
    "email": "world@example.com",
    "gender": "woman",
    "age": 26,
    "zipcode": "11111",
    "address1": "world address1",
    "address2": "world address2"
}
```

![](./docs/images/result.jpg)

## Author

👤 **Kevin Ahn**

* Github: [@maketheworldwise](https://github.com/maketheworldwise)

## References

- [Clean architecture](https://github.com/wikibook/clean-architecture)