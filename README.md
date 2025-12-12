# Moneypot experience template (React)

(This is a version of experience-react-template that uses @moneypot/experience-react-sdk in an attempt to extract all boilerplate and leave only unique game logic. Will replace moneypot/experience-react-template which could be moved to moneypot/experience-react-template-boilerplate since inline boilerplate can also be useful.)

A React template for building a Moneypot experience optimized for becoming instantly productive.

Batteries included:

- React + Typescript
- Twitter Bootstrap (feel free to swap it for something else)
- MobX for state management
- Authenticates with userToken on app load
- Subscribes to user balance updates
- Generates GraphQL types
- Ready to be iframed on [MoneyPot.com][mpcom].

## Quick start (online code editor)

Try it instantly in your browser:

- **CodeSandbox**: https://codesandbox.io/p/sandbox/github/moneypot/experience-react-template/tree/master

## Quick start (local development)

- `git clone https://github.com/moneypot/experience-react-template.git`
- `cd experience-react-template`
- `pnpm install`
- `pnpm dev`
- Open `http://localhost:5173` in your browser

By default, it makes bets against our `https://hub1.moneypot.com/graphql` hub server which is configured in the `.env` file.

Try using [Claude Code](https://claude.com/product/claude-code) to vibe-code a new game based on the existing

## Playground mode

Normally, MoneyPot experiences run inside an iframe on [MoneyPot.com][mpcom] where they are passed information about the current user.

However, to make development easier, this project detects when it's not running in an iframe and automatically switches to creating a "playground session": a fake user and balance are created so that you can test your game logic outside of the MoneyPot platform.

## Testing experience in MoneyPot.com iframe

TODO: Not sure if we want to allow/encourage this, but it is possible at the moment.

You can test your experience running in an iframe on MoneyPot.com by following these steps:

1. Run `pnpm dev` to host the frontend locally. Take note of the port it's running on or customize it in package.json.
2. Create an experience: <https://moneypot.com/me/experiences>
3. Set the iframe url to `http://localhost:<port>`
4. In the experiences list, click "Test" next to your experience iframe url

However, remember that other players won't be able to load your experience since it points to localhost rather than a public URL.

## Publishing experience to public URL

TODO: Demonstrate https://surge.sh/ or something equally easy to get project published.

## Registering experience with MoneyPot

TODO: Perhaps move the iframe localhost testing section here.

[mpcom]: https://moneypot.com/
