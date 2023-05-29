# Text analysis

Apollo gives access to a large number of text analysis and natural language processing engines from the best providers.

With Apollo, you can access to many NLP engines. For each of those engines, different providers are available. Here is the complete list of all text technologies on Apollo:

## Subfeatures

- `Sentiment analysis`: To extract sentiment in a given string of text. Sentiment analysis, also called "opinion mining", uses natural language processing, text analysis and computational linguistics to identify and detect subjective information from the input text.
- `Keyword extraction`: (also known as keyword detection or keyword analysis) is a text analysis technique that consists of automatically extracting the most important words and expressions in a text.
- `Named Entity Recognition`: (also called entity identification or entity extraction) is an information extraction technique that automatically identifies named entities in a text and classifies them into predefined categories.
- `Question answering`: Given a question, a set of documents, and some examples, the API generates an answer to the question based on the information in the set of documents. This is useful for question-answering applications on sources of truth, like company documentation or a knowledge base.
- `Search`: allows you to do a semantic search over a set of documents. This means that you can provide a query, such as a natural language question or a statement, and the provided documents will be scored and ranked based on how semantically related they are to the input query.
- `Summarization`: is the process of reducing a text to a shorter form while keeping the most important information.
- `Syntax analysis`: consists principally in highlighting the structure of a text.
- `Topic extraction`: Topic analysis is a Natural Language Processing (NLP) technique that allows us to automatically extract meaning from text by identifying recurrent themes or topics.
- `Text generation`: is a subfield of Natural Language Processing (NLP). It leverages knowledge in computational linguistics and artificial intelligence to automatically generate natural language texts, which can satisfy certain communicative requirements.
- `Anonymization`: intent is privacy protection. It is the process of removing personally identifiable information from text so that the people described by the data remain anonymous.

## Pricing

By default the Text features pricing is calculated per units of 1000 characters. Some exceptions exist for Cohere and Emvista which is priced per units of 1 character, IBM per 10000 and Amazon per 300.

Here is an example for a pricing per units of 1000 characters: a request of 500 characters will cost the price of 1000 characters and a request of 1001 characters will cost 2000 characters.

For Cohere and Emvista: a request of 500 characters will cost the price of 500 characters and a request of 1001 characters will cost 1001 characters.

For IBM: a request of 500 characters will cost the price of 10000 characters and a request of 10000 characters will cost 2000 characters.

## Connections

Apollo connects the most relevant fields returned by the called providers by comparing the confidence scores.

Currently only keyword extraction, named entity recognition and sentiment analysis have Apollo connections;

You can use all those technologies through the platform or SDK. Do not hesitate to check our Getting Started With your API to use the SDK.
