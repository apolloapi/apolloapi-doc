# Image API (Alpha)

*Our image api is in alpha, if you wish to get early access please let us know, adrian@apolloapi.io.* 

## Sending Content to Apollo

Every time you send us a piece of content, we run it through all your Apollo rules. So whenever you want a piece of content to run through your Rules (e.g. when it gets uploaded, edited, reported, shared, etc.), you can easily send it to us through our REST API.

To send us a piece of content as an image, simply make a POST request to https://api.apolloapi.com/api/v1/image/. You'll have to authenticate the request and add parameters to the body of the request, as shown in our code examples below.

## Synchronous vs. Asynchronous Requests

When you send us content, you can decide whether you'd like us to run your Rules synchronously or asynchronously. Here are the differences:

1. **Asynchronous Requests** (Note: this is not released): if you send us a piece of content for asynchronous processing, we'll return a status: 204 response immediately. Then, we'll add the content to an asynchronous queue for subsequent processing. If one of your Rules determines that an Action should be taken (e.g. the content should be deleted), we'll trigger that Action by sending a POST request to your Action's callback URL. Asynchronous requests are cheaper, and they should be used for all long-form audio and video content.

You can expect a p99 latency of 3 seconds between when we receive a piece of content and when we send POST requests to your Action callback URLs. The latency is higher for long-form audio and video content.

2. **Synchronous Requests** (Note: this is the default behavior) if you need to receive a response immediately (i.e. as part of the response to your initial POST request), we can process your content synchronously for a slightly higher price. This option is perfect for use cases in which it wouldn't make sense to invoke Actions asynchronously. For example, if you want to ensure that new users aren't creating harmful accounts or uploading malicious profile pictures during the sign up flow, you can request that those usernames and profile pictures be processed synchronously. That way, you can immediately block the account from being created and prompt the user to change their inputs - without exiting the sign up flow.

To send us a piece of content for synchronous processing, simply add sync: true as a parameter in the body of the request. You can see exactly where to add this in the code examples below.
You can expect a p99 latency of 1.5 seconds for synchronous requests.

## REST API Examples

Below are some code snippets that you can paste directly into your code. You'll notice a couple things:

1. We're authenticating the request using your organization's API key in the HTTP headers.
2. In the HTTP request body, we've specified the content's type under contentType. This should correspond to one of the Content Types we defined earlier in the Apollo dashboard.
3. In the content field, you must include all of the required fields listed in that content type, as Apollo expects all fields marked as required to be present.

#### Example Request

```python
import requests

headers = {
  'Authorization': 'TOKEN <APIKEY>',
  'Content-Type': 'application/json'
}
data = {
  'content_id': 'abc123',
  'user_id': 'def456',
  'contenttype': 'Image',
  'content': {'url': <public_url>},
  'sync': True # NOTE: only include this if you want the content processed synchronously [default]
}
response = requests.post(
  'https://api.apolloapi.com/api/v1/image/',
  headers=headers,
  json=data
)
response_dict = response.json()
```

These are the fields that we expect in the body of the request:

| Property    | Type   | Description                                                                                                                                                                                                                                                                                                                                                           |
| :---------- | :----- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| content_id  | String | Your unique identifier for this piece of content. Every time we send you an HTTP request to trigger an Action, we'll include this `content_id` as a parameter so you know on which content you should execute the Workflow Run.                                                                                                                                              |
| user_id     | String | Your unique identifier for the user who created this content. Every time we send you an HTTP request to trigger an Action, we'll include this `user_id` as a parameter so you know on which user you should execute the Workflow Run.                                                                                                                                        |
| contenttype | String | The name of the Content Type that corresponds to the content you're sending. This should exactly match one of the Content Type names that you defined in the Content Types Dashboard.                                                                                                                                                                                 |
| content     | JSON   | This is a JSON containing the content itself. In the Items Dashboard, you defined a schema for each Content Type. This content JSON must contain the fields you defined in the corresponding `contenttype`'s schema. We'll return an error if any of the required fields are missing, if any of the types mismatch, or if any additional fields are included. |

## Example Response

```python
{
    "content_id": "dbkrYd",
    # The `data` object is only returned in synchronous requests
    "data": {
        "workflowsRuns": [
            {
                "id": "4b179456-8282-418f-93a5-d986d8631342",
                "run": "FLAGGED"
            }
        ]
    }
}
```

These fields will be returned in every response:

| Property           | Type   | Description                                                                                                                                                                                                                                           |
| ------------------ | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| status             | Number | `status` indicates whether the request was successful: - `200` indicates that an asynchronous request was successful - `204` indicates that a synchronous request was successful - If an error occurs, `status` will contain the relevant error code. |
| data.workflowsRuns | Array  | This is a list of all the actions that Apollo triggered on this piece of content, based on the rules you've created in Apollo. If no action was triggered, this array will be empty.                                                                  |

Note: This object is only returned for synchronous requests. To send a synchronous requests, simply add sync = true as a parameter in the body of your POST request.
Action schema:

| Property | Type   | Description                                                                                                                                                                                                                                                                                                                       |
| -------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id       | String | Our internal ID representing the action, which can be found at the end of the URL if you attempt to edit any action in the Actions dashboard. This will stay constant, even if the name of the action is changed.                                                                                                                 |
| run     | String | The name of the action. This is human-readable, and can be useful for debugging, but shouldn't be relied upon to stay constant. For example, if a user in your organization decides to change a "Ban" action to "Ban User", the `id` will remain unchanged because the underlying action is the same, but the `name` has changed. |
