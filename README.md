# AltSchool of Backend Engineering (NodeJs) Tinyuka 2023 Capstone Project
**Name:** Trimr-(Scissor Capstone) <br>
**Live URL**: https://www.davemeritus.tech <br>
**Live Api Docs**: https://www.davemeritus.tech//api-docs

## Tools Used
- [Nextjs](https://nextjs.org/)
- [Next auth v5](https://authjs.dev/getting-started/migrating-to-v5)
- [Prisma ORM](https://www.prisma.io/nextjs)
- [Postgresql](https://www.postgresql.org/)
- [Node.js v20.15.1 ](https://nodejs.org/en)
- [Socket.io](https://socket.io)
- [Redis](https://redis.io)


## Getting Started
1. Clone repo locally.

    ```sh
    git clone https://github.com/davemeritus/trimr.git
    ```

2. create a .env file using the .env.sample.

    ```sh
    cp .env.sample .env
    ```

3. Run locally.

    ```sh
    npm install
    npx prisma generate
    npx prisma migrate dev
    npm run dev
    ```
  
4. Run test locally
   ```sh
   npm run test:coverage
   ```

## Test Results
| File                                 | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s            |
|--------------------------------------|---------|----------|---------|---------|------------------------------|
| All files                            |   95.92 |    83.05 |   94.44 |   95.87 |                              |
| alt-school-capstone                  |     100 |      100 |     100 |     100 |                              |
| ├─ routes.ts                         |     100 |      100 |     100 |     100 |                              |
| ...one/app/api/auth/login            |     100 |    85.71 |     100 |     100 |                              |
| ├─ route.ts                          |     100 |    85.71 |     100 |     100 | 91                           |
| .../app/api/auth/register            |     100 |      100 |     100 |     100 |                              |
| ├─ route.ts                          |     100 |      100 |     100 |     100 |                              |
| ...-capstone/app/api/link            |   94.28 |      100 |     100 |   94.28 |                              |
| ├─ route.ts                          |   94.28 |      100 |     100 |   94.28 | 32,62                        |
| .../app/api/link/[linkId]            |     100 |      100 |     100 |     100 |                              |
| ├─ route.ts                          |     100 |      100 |     100 |     100 |                              |
| ...one/app/api/link/click            |     100 |      100 |     100 |     100 |                              |
| ├─ route.ts                          |     100 |      100 |     100 |     100 |                              |
| .../public/[customSuffix]            |     100 |      100 |     100 |     100 |                              |
| ├─ route.ts                          |     100 |      100 |     100 |     100 |                              |
| ...api/link/top-countries            |     100 |      100 |     100 |     100 |                              |
| ├─ route.ts                          |     100 |      100 |     100 |     100 |                              |
| ...one/app/api/user/stats            |     100 |      100 |     100 |     100 |                              |
| ├─ route.ts                          |     100 |      100 |     100 |     100 |                              |
| ...ool-capstone/constants            |     100 |      100 |     100 |     100 |                              |
| ├─ data.ts                           |     100 |      100 |     100 |     100 |                              |
| ...ool-capstone/exception            |     100 |      100 |     100 |     100 |                              |
| ├─ custom-error.ts                   |     100 |      100 |     100 |     100 |                              |
| alt-school-capstone/lib              |     100 |       80 |     100 |     100 |                              |
| ├─ db.ts                             |     100 |      100 |     100 |     100 |                              |
| ├─ logger.ts                         |     100 |       50 |     100 |     100 | 4                            |
| ...chool-capstone/schemas            |   85.71 |      100 |       0 |   85.71 |                              |
| ├─ index.ts                          |   85.71 |      100 |       0 |   85.71 | 18                           |
| ...hool-capstone/services            |    95.2 |    83.33 |     100 |   94.26 |                              |
| ├─ link-service.ts                   |   93.33 |       80 |     100 |   91.95 | ...75-176,224-225             |
| ├─ user-service.ts                   |     100 |      100 |     100 |     100 |                              |
| alt-school-capstone/utils            |   88.88 |    44.44 |      75 |   89.83 |                              |
| ├─ check-custom-suffix.ts            |     100 |      100 |     100 |     100 |                              |
| ├─ generate-suffix.ts                |     100 |      100 |     100 |     100 |                              |
| ├─ rate-limit.ts                     |   53.33 |        0 |       0 |   57.14 | 14-20                        |
| ├─ validate-request.ts               |     100 |      100 |     100 |     100 |                              |

**Test Summary:**
- **Test Suites:** 13 passed, 13 total
- **Tests:** 73 passed, 73 total
- **Snapshots:** 0 total
- **Time:** 47.489 s
- **Ran all test suites.**


## Key Frontend Routes

### Unprotected Routes
- **/** - Sign In/Register page, also allowing unauthorized users to create short links.
- **/api-docs** - Displays the Stoplight element page based on OpenAPI 3.1.0 specifications, enabling users to test the API using the development or production server.
- **/[custom suffix]** - Redirects to the saved link URL.

### Protected Routes (/dashboard/*)
- **/dashboard** - General analytics overview for the user.
- **/dashboard/link** - List of all links created by the user.
- **/dashboard/link/[custom suffix]** - Analytics page for a specific link.

## Features

- Creation of short links, with or without a custom suffix.
- Comprehensive user analytics for all created links.
- Detailed analytics for individual links.
- Direct social media sharing, currently supporting X (formerly Twitter), Facebook, and Reddit.
- QR code generation and download for individual links.
- Downloadable analytics reports for individual links (CSV format only).

## Upcoming Features

### Enhanced Authentication
- OAuth implementation for user authentication.
- Email verification during the registration process.
- Password reset functionality.

### User Experience Improvements
- Additional routes utilizing WebSocket implementation for real-time data fetching.
- Enhanced caching, particularly on the **/dashboard/link** route.
- Improved search functionality to allow users to find links without loading all pages.

## Acknowledgements

- **[@Kiranism](https://github.com/Kiranism):** For the expertly crafted Shadcn frontend UI. View the dashboard repository [here](https://github.com/Kiranism/next-shadcn-dashboard-starter).
- **[Shadcn/ui](https://ui.shadcn.com/):** For providing highly customizable components.
- **[Upstash](https://upstash.com/):** For offering a free Redis instance.






