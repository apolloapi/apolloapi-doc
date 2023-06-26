# Sightengine

Moderate user-generated images efficiently and in real-time with our API. Automatically detect unwanted content using our best-in-class models.

## Basics

Sightengine's Image Moderation API is used to moderate Images and detect whether they contain unwanted content (such as adult content, offensive content, commercial text, children, weapons...). The API works both with standard images (such as JPG, PNG, WebP...) and animated multi-frame images such as GIF images.

## How it works

Sightengine Image Moderation is very straightforward to use:

You submit an image to the Sightengine API, along with the list of models and/or image lists you want to check the image against You immediately get a detailed response from the API giving you a description of what was found (if anything), along with moderation scores. All needed data is given in the API response. There are no callbacks, no moderation queues, no need to wait for updates or track state.


### Policy Types 

A Model is a filter that will look for a specific type of content in your Image. For instance, nudity is the name of a model that has been trained to look for any adult content, racy content, suggestive content and specifically flags scenes ranging from explicit to mild nudity. By specifying the list of Models you wish to apply to an image, you tell the API what you would like to detect and filter.

Head to their Model reference to see all the available Models along with their detection capabilities.

**Support for; scams, weapons, drugs, alcohol, porn, hate, doxing**

## Setting up Sightengine
*Refer to the python library providers tab for more information on utilizing the integration* >>> [here](https://docs.apolloapi.io/)
![sightengine_carrd](https://github.com/apolloapi/apolloapi-doc/assets/72639210/627c1fbc-06a3-4984-8f2b-f8fe04535997)
