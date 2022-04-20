<p align="center">
  <img style="width:150px;" src="assets/bot.png" />
</p>

# Opel Bot

Simple Discord bot that handles webhooks for the Opel-Vauxhall server.

New Reddit posts on certain subreddits and new RSS feed articles from Opel Post are submitted to a news channel.

## Env variables

Create an .env file in the root of the folder to spin up the bot with the following variables:

```env
# Serving Port
PORT=<Express Serving Port>

# Discord
TOKEN=<Discord App Token>
CLIENT_ID=<Discord App Client ID>
GUILD_ID=<Discord Server ID>

# Channels
NEWS_CHANNEL=<Discord Server Channel ID>

# Docker Compose
HOST=<Express Hosting Domain>
EMAIL=<Your Email Address>
```
