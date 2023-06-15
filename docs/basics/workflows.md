---
sidebar_position: 0
---

# Workflows

Once you've created your **Items** and **API Integrations**, you're ready to create your first workflow!

![rule](https://uploads-ssl.webflow.com/640ca38ad086fde245b76c9d/648a8d71388022dcf4eebcb8_Screenshot%202023-06-15%20at%2012.02.41%20AM.png)

Workflows allow you to automate your Trust & Safety, compliance, model tuning, fraud and more. When you send us content, we run it through all of your Rules, and those Rules can trigger Actions.

## How to Create a Workflow

1. Navigate to the Rules tab
2. Click on the workflow you want
3. Enter a name, and optionally a description `If you're using our custom workflows engine`
4. Select which Content Types your Rule should run on - `If you're using our custom workflows engine`. We'll only ever run this Rule if we receive content that fits one of the Content Types you selected. For preset rules create Content Types first.
5. For `If you're using our custom workflows engine` - Construct your Rule's Conditions. Conditions are where the main logic of the Rule lives.
6. Click "Enable"

### Using the python library

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
