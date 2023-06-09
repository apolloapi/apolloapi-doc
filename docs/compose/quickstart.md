---
sidebar_position: 0
---

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

_Note: you can use our sandbox api and skip providing a token or obtain a Auth token [here](https://docs.apolloapi.io/docs/compose/api/authentication), sign up today on our [Site](https://use.apolloapi.io/admin/)_

```python
# import the package
from apollo.client import Apollo

# Use any provider
Apollo.use("google_perspective:<model name>", secret="YOUR_API_TOKEN_HERE")

# Lets check to see if a phrase contains threats
Apollo.detectText(prompt="Phrase1", content_id="content-id", community_id="user-id")
```

**Example response**:

```json
{
  "attributeScores": {
    "THREAT": {
      "spanScores": [
        {
          "begin": 0,
          "end": 12,
          "score": { "value": 0.008090926, "type": "PROBABILITY" }
        }
      ],
      "summaryScore": { "value": 0.008090926, "type": "PROBABILITY" }
    },
    "INSULT": {
      "spanScores": [
        {
          "begin": 0,
          "end": 12,
          "score": { "value": 0.008804884, "type": "PROBABILITY" }
        }
      ],
      "summaryScore": { "value": 0.008804884, "type": "PROBABILITY" }
    },
    "SPAM" // ...
  },
  "languages": ["en"],
  "clientToken": "content_123",
  "detectedLanguages": ["en", "fil"]
}
```

_Experimental inputs_:

```python
# Create custom rules which creates a task!
Apollo.rule('Phrase1', '>=', '0.8')

# https://docs.apolloapi.io/docs/features
Apollo.detectImage('Image1', 'contains', 'VERY_LIKELY') # Image Analysis/OCR
Apollo.detectSpeech('Audio1', 'contains', 'UNLIKELY') # Audio Processing
Apollo.detectVideo('Video1', 'contains', 'POSSIBLE') # Video Analysis
Apollo.detectText('Phrase1', 'contains', 'UNKNOWN') # Text Analysis
Apollo.test('prompt', 'expected_output') # ML Validation
```

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
