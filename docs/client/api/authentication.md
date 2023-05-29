---
sidebar_position: 1
---

# Authenticating

## Getting your API Key

### Apollo API token

Apollo API requires a Bearer authentication (also called token authentication) when interacting with the SDK or sending us content at `content/`. You can access to your API token on the [settings page](https://app.apolloapi.io).

![settings](https://uploads-ssl.webflow.com/640ca38ad086fde245b76c9d/6452b1456257dc496c179599_Screenshot%202023-05-03%20at%203.08.40%20PM.png)

You need to write the API key in headers in this format:

```Python
{
    'Authorization':'Bearer YourApiToken'
}
```

🚧
**Tokens carry many privileges, so be sure to keep them secure! Do not store your secret tokens in an .env file or share them in publicly accessible areas such as GitHub, client-side code, etc.**

### Sandbox API token

You can also use a Sandbox API token that allows you to make free calls and get dummy responses in order to implement and debug Apollo API without consuming credits.
