# Google

_Blurb & notes pulled from google perspective that will be useful for your integration into Apollo below_

### Overview

The Perspective Comment Analyzer API provides information about the potential impact of a comment on a conversation (e.g. it can provide a score for the "toxicity" of a comment). Users can leverage the "SuggestCommentScore" method to submit corrections to improve Perspective over time. Users can set the "doNotStore" flag to ensure that all submitted comments are automatically deleted after scores are returned.

### How it Works

Perspective uses machine learning models to identify abusive comments. The models score a phrase based on the perceived impact the text may have in a conversation. Developers and publishers can use this score to give feedback to commenters, help moderators more easily review comments, or help readers filter out “” language.

Perspective models provide scores for several different attributes. In addition to the flagship Toxicity attribute, here are some of the other attributes Perspective can provide scores for:

`Severe Toxicity`
`Insult`
`Profanity`
`Identity attack`
`Threat`
`Sexually explicit`

### Instructions to setup

To begin, you need a Google Cloud project to authenticate your API requests.

- In Google Cloud Console, use an existing project.
- If necessary, follow these steps to create a new project:
- Sign in with your Google Account.
- Open Cloud Console.
- Click Create Project or open the Select a Project menu and then click New Project in the dialog.
- Name your project and then click Create.

![Alt text](https://developers.google.com/static/codelabs/setup-perspective-api/img/ba7a5088d7d0047e_1920.png)

The project now appears in the drop-down menu.

Request API access
To request API access, complete this [form](https://docs.google.com/forms/d/e/1FAIpQLSdhBBnVVVbXSElby-jhNnEj-Zwpt5toQSCFsJerGfpXW66CuQ/viewform).

#### Enable the API

- In the Cloud Console, navigate to the Perspective API overview page and then click Enable.

#### Generate the API Key

1. In the navigation menu, click APIs & Services > Credentials > Create credentials > API Key.
   ![Alt text](https://developers.google.com/static/codelabs/setup-perspective-api/img/8ab64b6d9822c219_1920.png)

   **Note: If you make requests from a client-side language like JavaScript, your API key is exposed to all visitors. It's strongly recommended that you proxy the request through a server and apply key restrictions so that the key is hidden from browsers and only your server can use that key. For more information, see an example of how to proxy the request through a server and more API key security recommendations.**

Your API key should work in a few minutes, but it can take up to an hour. Until then, you may receive an error message.

2. Copy the API key.
   ![Alt text](https://developers.google.com/static/codelabs/setup-perspective-api/img/43fb6b1cf99a4e16_1920.png)

#### Sample requests using Bloom: MLOps Framework

- You can generate API client libraries using google perspective, but we've done that for you [here](http://docs.apolloapi.io/docs/compose/quickstart#-interesting-how-can-i-try-it)
- The Perspective API [website](https://www.perspectiveapi.com/) contains more information about the API, including case studies.

### Language availability

Perspective API is free and available to use in Arabic, Chinese, Czech, Dutch, English, French, German, Hindi, Hinglish, Indonesian, Italian, Japanese, Korean, Polish, Portuguese, Russian, Spanish, and Swedish. The team is constantly developing models to support new languages.

To learn more about international publishers and platforms using Perspective API, check out our case studies. To learn more about languages in development, visit the Developers site.

### Applying the model

Perspective in Action
One of Perspective API’s most common uses is content moderation. Developers at platforms like DISQUS and publications like The Wall Street Journal augment their existing content moderation systems with Perspective, creating custom combinations of attributes to suit the needs of their platforms.

Perspective API is meant to make content moderation less of a burden on individuals and organizations, but is not meant to completely replace the work of human decision-makers. Perspective API helps developers and moderators make better decisions at scale, allowing healthy dialogue to flourish.

### What is under the hood

- The Perspective API predicts the perceived impact a comment may have on a conversation by evaluating that comment across a range of emotional concepts, called attributes.
- Context (coming soon)
  - Context is a representation of the conversation context for the comment. This can include text, a URL, or an image, such as the article that is being commented on or another comment that is being replied to. In the future, we hope to use this to improve the analysis of the comment. Currently, our attributes are not making use of context, so sending context won’t change an attribute’s scores.

#### Supporting human moderators

When using Perspective to support human moderators, the decision on thresholds may depend on available capacity to perform manual reviews, and whether moderation decisions happen before or after the comment is published. For example, an online platform with only a few human moderators might choose to publish all comments scored below 0.9 and hold all comments scored as 0.9 or higher for moderator review, focusing their attention on comments that are most likely to be considered toxic by readers (9 out of 10 people would consider this comment toxic). On the other hand, a large publisher with a large team of moderators might be able to review every comment, but spend additional time reviewing comments with scores between 0.3 and 0.7, comments about which the model is uncertain.

#### Span and summary scores

For longer comments, the API can return a score for each individual sentence of the comment sent with the request. This can help moderators to identify the specific part of a longer comment that contains toxicity. This score is only available for some attributes.

The summary score is the overall score for a particular attribute for the entire comment.

### Training data

We train each model on millions of comments from a variety of sources, including comments from online forums such as Wikipedia (CC-BY-SA3 license) and The New York Times. For languages where less forum data is available, we use machine translation to translate labeled English-language comments into the target language.

### Labeling

Each comment is tagged by 3-10 crowdsourced raters from Figure Eight, Appen and internal platforms. The raters tag whether or not a comment contains an attribute (e.g. TOXICITY). We then post-process the tags to obtain labels corresponding to the ratio of raters who tagged a comment as toxic. For example, we label a comment as 0.6 for TOXICITY if 6 out of 10 raters tagged a comment as toxic.

#### Research

Researchers should consider which application of Perspective best matches their intent. For social science researchers using Perspective to study harassment, we recommend experimenting with thresholds of 0.7 or 0.9, similar to typical moderation use cases. By comparison, machine learning researchers using Perspective to filter potentially toxic content from their data should use higher thresholds, like 0.9 or 0.95, as low thresholds increase the potential for bias. Another researcher might analyze all comments with scores 0.7 or higher when researching false positives in machine learning models (see here for an example of such research).

## Uses to Avoid

**Fully automated moderation**
Perspective is not intended for fully automated moderation. Machine learning models will always make some mistakes, so it’s essential to build in mechanisms for humans to catch and correct accordingly.

**Character judgement**
In order to maintain user privacy, the models operate only on individual comments. The models are not intended to detect anything about the individual who made the comment. In addition, Perspective does not collect or use prior information about an individual to inform predictions.

## Limitations

**Models contain unintended bias**
Machine learning models learn from the data they’re trained with, so any biases in the data can creep into the predictions the models make. For example, our models sometimes predict higher toxicity scores for comments with terms for more frequently targeted groups (e.g. words like “black”, “muslim”, “feminist”, “woman”, or “gay”) because comments about those groups are over-represented in abusive and toxic comments in the training data.

[Workarounds](https://medium.com/jigsaw/unintended-bias-and-names-of-frequently-targeted-groups-8e0b81f80a23)
