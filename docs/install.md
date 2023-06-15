---
sidebar_position: 1
---

# Getting started

Before Apollo, testing model quality and automating workloads was time-consuming, with Apollo, you can simplify, accelerate and backtest the entire process. This makes it easier to train classifiers, handle real-time changes and make data driven decisions.

#### What you'll need

- [Python](https://www.python.org/downloads/) version 3 or above:

```bash
pip install apollo-sdk
```

To get started, run the following command:

```
apollo-sdk init
```

This will create some templates in your current directory: `prompts.txt`, `vars.csv`, and `config.json`.

After editing the prompts and variables to your desired state, `apollo-sdk` command to kick off an prompt evaluation test:

```
apollo-sdk -p ./prompts.txt -v ./vars.csv -r openai:completion
```

If you're looking to customize your usage, you have a wide set of parameters at your disposal. See the [Configuration docs](https://docs.apolloapi.io/docs/cli/configuration) for more detail

![Prompt eval](https://github.com/apolloapi/apolloapi/assets/72639210/c65b4565-5d17-4b32-971c-d4a51d9d137e)
**Here's an example of a side-by-side comparison of multiple prompts and inputs. You can manually review outputs:**

_set up for "expectations" that automatically flag bad outputs coming soon_

![Prompt eval](https://uploads-ssl.webflow.com/640ca38ad086fde245b76c9d/647411b456031b5145019909_Screenshot%202023-05-28%20at%2010.44.48%20PM.png)

### Building Automated Pipelines w/ Python Library

In your code you can write:

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

Apollo has built in support for custom API calls via rest using `call_api` method.

We are building the following:

- Graphql
- gRPC
- XML formats

You can find more on the implementation [here!](https://github.com/apolloapi/apolloapi/blob/main/apollo/service/)
