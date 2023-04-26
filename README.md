# Holaplex Hub Starter

A template repository to help you build NFT based applications using the Holaplex Hub.

Includes:

- [NextJS](https://nextjs.org/) 13 web framework (app directory enabled)
- Postgres database management using [Prisma ORM](https://www.prisma.io/docs)
- User management with social based login through [next-auth](https://next-auth.js.org/)
- Style application using Tailwind
- Holaplex Hub SDK

## Folder Structure

```
/prisma
  schema.prisma # prisma schema file
  /migrations # prisma auto-generated migration files
/src
 /app # next js app directory
  Home.tsx # customize your mint page here
  /login # social sign up or login
 /pages
   /api # next js api routes
    graphql.ts # apps graphql server
    /webhooks
      holaplex.ts # incoming webhooks from Holaplex
 /modules # utility clients and functions
   db.ts # prisma db client
   holaplex.ts # configured holaplex client
 /queries # holaplex and app api queries
 /mutations # holaplex and app api mutations
 tailwind.config.js # color theme
```

## Google Authentication

In your exampleLocal.env and exampleRender.env you will need google auth credentials (ClientID and Secret). In [Google Cloud Platform](https://console.cloud.google.com/): Search for 'Api Credentials' -> create credentials for OAuth2.0.

Later when you generate your site using render and have the URL, you will need to add the following to your Oauth:

- Javascript Origins:
  - https://PUT-YOUR-SITE-URL-HERE.com
- Redirect URLs:
  - https://PUT-YOUR-SITE-URL-HERE.com/api/auth/callback/google

## Local Machine Setup

Ensure you have nodejs and docker installed on your workstation. Refer to `exampleLocal.env` for the required variables.

```
# start postgres in a docker container
docker compose up -d

# install dependencies
npm install

# setup database
npm run db

# setup prisma client
npm run generate

# boot up the app
npm run dev
```

See your app at [http://localhost:3000](http://localhost:3000)

## Site Deployment Setup on Render

The starter is designed to be deployed to [Render](https://render.com) using their Infrastructure as Code (IaC) configuration file [render.yaml](/render.yaml). The IaC manifest will set up a web server for the mint page and a database for storing users, sessions, and wallets. Note: you must have a paid subscription to Render to deploy a Blueprint as described below.

On [render.com](https://render.com) navigate to the `BluePrint` Tab.

- New Blueprint Instance
- Connect your repo, define your Blueprint name and branch.
- Refer to the exampleRender.env file for the environment variables required. Place them into the: Dashboard -> web-service -> Environment page
- To generate the NEXTAUTH_SECRET environment variable, in Render: dashboard -> myWebService -> shell:

```
openssl rand -base64 32
```

### Database

After deploying the environment, we need to seed the database. Run the following command in Render -> dashboard -> myWebService -> shell:

```
npm run db
```
