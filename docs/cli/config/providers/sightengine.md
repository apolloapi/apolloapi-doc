# Sightengine

Your connection to any AI Provider or third party app is called a connector. You can find information on setting up sightengine [here](https://sightengine.com/docs/)

`apollo-sdk` supports a wide range of models out of the box. To use a custom AI provider, create a custom module open an issue and we'll put some code together for you.

### Notes

To use the Sightengine API, set the `SIGHTENGINE_API_KEY` and `SIGHTENGINE_API_USER` environment variable or pass the API key as an argument to the constructor.

Example:

```bash
export SIGHTENGINE_API_KEY=your_api_key_here
export SIGHTENGINE_API_USER=your_api_user_key
```

or

```python
from apollo.client import Apollo

# ex. ['drugs', 'wad', 'nudity'] - list on available models, https://sightengine.com/docs/models
Apollo.use("sightengine:[<list of models>]", sightengine_api_key="api_token", sightengine_api_user="api_user_token")
```

Other Perspective-related environment variables are supported:

- `METHOD` - You can persist settings for the upload type to the api `public` or `private`, default to public. Method updates are not available as of yet. 

The Google provider supports the following model formats:

- `sightengine:['model_type', ...]`


### Setting up your own API

To set up your own API, please follow the instructions provided in the [Sightengine API setup guide](https://sightengine.com/docs/getstarted).

### SightengineProvider Client

The SightengineProvider is a class that allows you to interact with the Sightengine API. Here are some important details about this provider:

- The `api_key` can be set using the environment variable `SIGHTENGINE_API_KEY`. It can also be overridden in code by directly setting the `sightengine_api_key`.
- The `api_user` can be set using the environment variable `SIGHTENGINE_API_USER`. It can also be overridden in code by directly setting the `sightengine_api_user`.
- An array of models to support can be set. There is no default and it is required. [Sightengine model guide](https://sightengine.com/docs/models)
- You can set your model name during the connection using the use method and specifying `sightengine:['model_type', ...]`.
- To use the Google provider, you need to set the following parameters:

```python
Apollo.use("sightengine:['wad']", sightengine_api_key=<API KEY(optional)>, sightengine_api_user=<API USER>)
```

Example Request and Response

Here is an example of the request and response when using the `Analyze` model:
\*Suggest model coming soon.

- Python:
  
```python
Apollo.detectImage("https://sightengine.com/assets/img/examples/example7.jpg")
```

- Request:

```bash
curl -X GET -G 'https://api.sightengine.com/1.0/check.json' \
    -d 'models={model}' \
    -d 'api_user={api_user}&api_secret={api_secret}' \
    --data-urlencode 'url=https://sightengine.com/assets/img/examples/example7.jpg'
```

Response:

```json
{'status': 'success', 'request': {'id': 'req_id', 'timestamp': 1687741008.584207, 'operations': 6}, 'weapon': 0.88, 'alcohol': 0.01, 'drugs': 0.01, 'scam': {'prob': 0.01}, 'faces': [], 'nudity': {'sexual_activity': 0.01, 'sexual_display': 0.01, 'erotica': 0.01, 'suggestive': 0.01, 'suggestive_classes': {'bikini': 0.01, 'cleavage': 0.01, 'male_chest': 0.01, 'lingerie': 0.01, 'miniskirt': 0.01}, 'none': 0.98}, 'offensive': {'prob': 0.01, 'nazi': 0.01, 'confederate': 0.01, 'supremacist': 0.01, 'terrorist': 0.01, 'middle_finger': 0.01}, 'text': {'profanity': [], 'personal': [], 'link': [], 'social': [], 'extremism': [], 'medical': [], 'drug': [], 'weapon': [], 'ignored_text': False}, 'gore': {'prob': 0.01}, 'media': {'id': 'media_id', 'uri': 'https://sightengine.com/assets/img/examples/example-tt-1000.jpg'}}
```

