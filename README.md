# Moneypot experience template (React)

A React template for building a Moneypot experience optimized for becoming instantly productive.

Batteries included:

- React + Typescript
- Twitter Bootstrap
- MobX for state management
- Authenticates with userToken on app load
- Subscribes to user balance updates
- Generates GraphQL types
- Ready to be iframed on a Moneypot platform like moneypot.dev

Of course, replace these with any of your own preferences.

## Usage

- Run a `@moneypot/caas` server on localhost
- Git clone this project
- Rename `.env.template` to `.env` and set `VITE_GRAPHQL_URL` to point to your caas server.
- Run the frontend: `npm run dev`
- GraphQL types codegen: `npm run codegen`
