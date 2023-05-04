# Getting Started

Apollo has supportive integrations against a wide variety of platforms and tools.

## 🚀 Interesting, how can I try it?

Lets install the SDK first...

```bash
pip install apollo-sdk
```

Let's setup your first Integration!

It will pull from your local database (and keep it in sync).

```python
# import the package
from apollo.client import Apollo

# sync data from your database instance
# (we support supabase at the current moment or postgresql via uri format)
Apollo.connect("postgres://username:password@hostname:port/database_name")

# If you want to test out operation on your external connection
Apollo.fetch_tables()
Apollo.query("desc", "table", "column")
```

...and create a workflow with a simple command:

```python
# import the package
from apollo.client import Apollo

# Use our custom model to test building decisions
Apollo.use("apollo", token="YOUR_API_TOKEN_HERE")

# We support video, speech, image and text. Try text!
Apollo.detectText("Phrase1", "contains", "Threats")
```

In practice, you probably want to use our user interface (UI) so you dont have to write code. If so, ping us at [adrian@apolloapi.io!](emailto:adrian@apolloapi.io)

## 🔌 Integrations

We pre-built integrations with providers like:

- Supabase
- Postgresql
- Firebase

...We have a huge need for developing integrations with Mongodb, Mysql and more.

To get involved checkout some of our issues [here!](https://github.com/apolloapi/apolloapi/issues)

## 🧪 Clients

Apollo has built in support for custom API calls via rest using `make_http_requests` & `make_http_request` methods.

We are building the following:

- Graphql
- gRPC
- XML formats

You can find more on the implementation [here!](https://github.com/apolloapi/apolloapi/blob/main/apollo/service/)
