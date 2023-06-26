---
sidebar_position: 2
---

# API Integrations

APIs represent any action you can perform during workflow runs. Some common examples include Delete, Ban, Mute, Escalate, Approve, Train, Validate, Ingest, Process etc.

In order to trigger a workflow run on a workflow on your behalf, we need to know what types of APIs we can call and how to call them. For example, if you want to create workflows that automatically delete sexual content, Apollo AI needs to be able to invoke your Delete API automatically (i.e., through a POST request).

## How to Build an API Endpoint

For every API you define in Compose, you have to expose the action through a public-facing API endpoint. Whenever a Workflow (or you) determines that some data should trigger a workflow, we will send a POST request to the API endpoint. When your server receives that POST request, your code should actually perform the corresponding action.

Here's an example of the body of a POST request that we'd send to your API during a workflow run:

```json
{
  "content": {
    "id": "035e66eaf79", // uuid for the content itself
    "content_type": "0d45dc11733393648" // uuid for the content type
  },
  "custom": {
    // ... any custom parameters that you configured in the Integrations dashboard
  }
}
```

### Workflow schema

| Property | Type   | Always Present?    | Description                                                                                                                                      |
| -------- | ------ | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| content  | dict   | Always Present     | The data that should trigger this workflow                                                                                                       |
| custom   | Object | Not Always Present | If you would like us to include any custom parameters in the request we send to your endpoints, you can add those custom parameters to each API. |

### Authentication and Custom Parameters

We strongly recommend that you authenticate every HTTP request that your endpoints receive. Without proper authentication, any developer could send arbitrary requests and mutate your data.

In order to authenticate that a POST request is indeed coming from Apollo, we allow you to add custom HTTP headers
