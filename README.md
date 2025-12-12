# MoneyPot experience template (React)

> [!NOTE]
> This template makes real bets (with worthless "HOUSE" currency) against a real game server.
>
> If you can get your game working from this template, it will work in production with minimal change.

A React template for building a Moneypot experience optimized for immediate productivity.

## Vibe coding a game

This template comes with LLM instructions in [AGENTS.md](./AGENTS.md) and two working game examples.

See if you can get an LLM agent to implement a basic version of your game idea!

## Quick start (online code editor)

Try it instantly in your browser:

- **StackBlitz**: https://stackblitz.com/github/moneypot/experience-react-template
- **CodeSandbox**: https://codesandbox.io/p/sandbox/github/moneypot/experience-react-template/tree/master

## Batteries included

- Two working game examples for reference
- React + Typescript
- [Twitter Bootstrap](https://getbootstrap.com/)
- [MobX](https://mobx.js.org/) for state management
- Authenticates with userToken on app load
- Subscribes to user balance updates
- Generates GraphQL types
- Ready to be iframed on [MoneyPot.com][mpcom].

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
