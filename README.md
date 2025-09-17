# Moneypot experience template (React)

(This is a version of experience-react-template that uses @moneypot/experience-react-sdk in an attempt to extract all boilerplate and leave only unique game logic. Will replace moneypot/experience-react-template which could be moved to moneypot/experience-react-template-boilerplate since inline boilerplate can also be useful.)

A React template for building a Moneypot experience optimized for becoming instantly productive.

Batteries included:

- React + Typescript
- Twitter Bootstrap
- MobX for state management
- Authenticates with userToken on app load
- Subscribes to user balance updates
- Generates GraphQL types
- Ready to be iframed on a Moneypot platform like [moneypot.com][mpcom]

Of course, replace these with any of your own preferences.

## Usage

- Run a `@moneypot/hub` server on localhost
- Git clone this project
- Rename `.env.template` to `.env` and set `VITE_GRAPHQL_URL` to point to your hub server.
- Run the frontend: `npm run dev`
- GraphQL types codegen: `npm run codegen`

Use it as a [moneypot.com][mpcom] experience:

1. Run `npm run dev` to host the frontend locally. Take note of the port it's running on or customize it in package.json.
2. Create an experience: <https://moneypot.com/me/experiences>
3. Set the iframe url to `http://localhost:<port>`
4. In the experiences list, click "Test" next to your experience iframe url

[mpcom]: https://moneypot.com/
