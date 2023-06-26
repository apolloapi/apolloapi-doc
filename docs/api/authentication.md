---
sidebar_position: 1
---

# Authenticating

## Getting your API Key

### Apollo API token

Apollo API requires a Bearer authentication (also called token authentication) when interacting with the SDK or sending us content at `content/`. You can access to your API token on the [settings page](https://use.apolloapi.io/admin).

<img width="1438" alt="Screenshot 2023-06-26 at 12 34 27 AM" src="https://github.com/apolloapi/apolloapi-doc/assets/72639210/c3dfcba8-c743-495f-b5d8-ac9f0ab1731c">

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
