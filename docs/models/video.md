# Video analysis

Apollo connects to a large number of Video analysis technologies from the best providers.

Video Analysis is a feature that allows you to extract information and insights from video files. It is designed to be asynchronous and synchronous, meaning that the analysis process happens in the background and you can get access to the result when it's ready.

With Apollo, you can access to multiple Video analysis models. For each of those models, different providers are available. Here is the complete list of technologies available on Apollo:

### Subfeatures

- `Label detection` : identify the objects, people, and other entities present in a video. It returns a list of labels, along with confidence scores indicating the likelihood that the label is accurate and the timestamps of each detected label.
<!-- - Face detection : identify the faces present in a video. It returns the location and coordinates of each face, as well as any available metadata such as landmarks and poses if available. -->
- `Text detection` : extract any text present in a video. It returns the location, size, and content of each piece of text.
- `Logo detection` : identify logos present in a video. It returns the location and coordinates of each logo, along with the associated brand name if available.
- `Explicit content detection` : detect whether a video contains explicit or inappropriate content. It returns a label indicating the category, along with a confidence score.
- `Object tracking` : track specific objects as they move throughout a video. It returns the location and size of the tracked object at each frame.
- `Person tracking` : track specific people as they move throughout a video. It returns the location and size of the tracked person at each frame with the timestamp.

## Pricing

By default the video features pricing is calculated per units of 1 minute. Some exceptions exist for google which is priced per units of 1 second.

Here is an example for a pricing per units of 1 minute:

Per default : a request of 50 seconds will cost the price of 1 minute and a video of 2:01 minutes will cost 3 minutes.

Google : a video of 1:23 minute will cost the price of 1 minute and 23 seconds.

You can use all those technologies through the platform or SDK. Do not hesitate to check our Getting Started With your API to use the SDK.
