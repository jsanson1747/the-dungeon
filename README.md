# The Dungeon

## About

The Dungeon is a NextJS React Application that is intented to be portal to manage/create D&D Characters. This will allow a player to replace their physical character sheet with a more organized digital editor.

## Running the App

This application uses a variety of NPM scripts to manage startup.

To start the app run `npm run start:dev`

To generate a production build run `npm run build`

To start the production server run `npm run start`

## Hosted Production App

The Dungeon is deployed to a Vercel server at https://the-dungeon.vercel.app. If hosting an instance of this application yourself, you will need to configure a database instance for the app to use. 

## Supabase

This application uses Supabase as it's backend database. Drizzle ORM is utilized as an api layer between the Supabase DB and the app. During development, modify the DATABASE_URL environment variable to point towards your local supabase instance. 

## Authentication
This application utilizes the Auth.js framework as it integrates well with NextJS. Passwords are heavily encrypted and stored securely.

## General Application Flow

Each user will log in with their own set of credentials. This will give them a portal to edit and store D&D related characters and campaign info
