# Discord Invite reCAPTCHA

## Overview 
Designed to prevent spam bots from joining your discord server. This Next.js app provides both a reCAPTCHA (V2) and one-time use discord invite upon successful completion of the reCAPTCHA. 

![image](https://user-images.githubusercontent.com/95196612/172742031-3ddb31fa-1dfc-4d5d-ba98-bd71500dc3ed.png)

## Stack
 - Next.js
 - React 18
 - MUI 5
  

## Getting Started

Clone the repo locally and run:

```bash
yarn install 
```
Rename .env.example to .env.local and configure environment variables:


### Configuration Variables

| Environment Variable                  | Description                                           | Required | 
| --------------------------------------| -----------                                           | ---------| 
| NEXT_PUBLIC_RECAPTCHA_SITE_KEY        | Site Key From reCaptcha                               | Y        |
| RECAPTCHA_SECRET_KEY                  | Secret Key From reCaptcha                             | Y        | 
| NEXT_PUBLIC_APP_NAME                  | App Name                                              | N        | 
| DISCORD_BOT_TOKEN                     | Discord Bot Token                                     | Y        |            
| DISCORD_INVITE_MAX_AGE                | Maximum Age of Invite in seconds. Defaults to 1 Day   | N        |
| DISCORD_CHANNEL_ID                    | Channel ID the user should be dropped in              | Y        |

Start the dev sever
```bash
yarn dev
```

## Setting up Recaptcha
1. Register a new reCAPTCHA site here: https://www.google.com/recaptcha/admin/create 
2. reCAPTCHA type should be set to reCAPTCHA v2
3. Copy your Site Key and set ```NEXT_PUBLIC_RECAPTCHA_SITE_KEY```
4. Copy your Secret Key and set ```RECAPTCHA_SECRET_KEY```

## Setting up Discord
1. Create a new app here: https://discord.com/developers/applications
2. From your newly created app, create a 'Bot' in settings
3. Copy the token generated for your newly created bot and set ```DISCORD_BOT_TOKEN```
4. From your Discord Developer App, find your Client ID by visiting Settings > OAuth2.
5. Visit (Replacing {CLIENT_ID} with the id from the previous step): https://discord.com/api/oauth2/authorize?client_id={CLIENT_ID}&permissions=1&scope=bot and add the Bot to your server. 
   1. You must have admin rights to your server to join the bot.
   2. The Bot will join your server but remain offline and will not interact with users. 

6. With developer mode enabled in discord, right click on the channel and select 'Copy ID', Set ```DISCORD_CHANNEL_ID``` to this value. [Discord Support Docs](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-). 

## Configuring Theme
The theme/config.ts provides some basic color config to match your brand. For additional customization see the [MUI Theme Docs](https://mui.com/material-ui/customization/theming/)


## Deploy to Google Cloud Run

[![Run on Google Cloud](https://deploy.cloud.run/button.svg)](https://deploy.cloud.run)
