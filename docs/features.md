# Feature List

<details><summary>ocr</summary>

| Subfeatures                       | Providers   |
| --------------------------------- | ----------- |
| **invoice_parser**                | affinda     |
|                                   | amazon      |
|                                   | base64      |
|                                   | dataleon    |
|                                   | google      |
|                                   | klippa      |
|                                   | microsoft   |
|                                   | mindee      |
|                                   | rossum      |
|                                   | veryfi      |
| **resume_parser**                 | affinda     |
|                                   | hireability |
| **custom_document_parsing_async** | amazon      |
| **identity_parser**               | amazon      |
|                                   | base64      |
|                                   | microsoft   |
|                                   | mindee      |
| **ocr**                           | amazon      |
|                                   | api4ai      |
|                                   | base64      |
|                                   | clarifai    |
|                                   | google      |
|                                   | microsoft   |
|                                   | sentisight  |
| **ocr_tables_async**              | amazon      |
|                                   | google      |
|                                   | microsoft   |
| **receipt_parser**                | amazon      |
|                                   | base64      |
|                                   | dataleon    |
|                                   | google      |
|                                   | klippa      |
|                                   | microsoft   |
|                                   | mindee      |
|                                   | tabscanner  |
|                                   | veryfi      |

</details>
<details><summary>audio</summary>

| Subfeatures              | Providers    |
| ------------------------ | ------------ |
| **speech_to_text_async** | amazon       |
|                          | assembly     |
|                          | deepgram     |
|                          | google       |
|                          | ibm          |
|                          | microsoft    |
|                          | neuralspace  |
|                          | oneai        |
|                          | openai       |
|                          | revai        |
|                          | speechmatics |
|                          | symbl        |
|                          | voci         |
|                          | voxist       |
| **text_to_speech**       | amazon       |
|                          | google       |
|                          | ibm          |
|                          | lovoai       |
|                          | microsoft    |

</details>
<details><summary>image</summary>

| Subfeatures            | Providers   |
| ---------------------- | ----------- |
| **explicit_content**   | amazon      |
|                        | api4ai      |
|                        | clarifai    |
|                        | google      |
|                        | microsoft   |
|                        | picpurify   |
|                        | sentisight  |
| **face_detection**     | amazon      |
|                        | api4ai      |
|                        | clarifai    |
|                        | google      |
|                        | microsoft   |
|                        | picpurify   |
|                        | skybiometry |
| **face_recognition**   | amazon      |
|                        | microsoft   |
| **object_detection**   | amazon      |
|                        | api4ai      |
|                        | clarifai    |
|                        | google      |
|                        | microsoft   |
|                        | sentisight  |
| **anonymization**      | api4ai      |
| **logo_detection**     | api4ai      |
|                        | clarifai    |
|                        | google      |
|                        | microsoft   |
|                        | smartclick  |
| **generation**         | deepai      |
|                        | openai      |
|                        | stabilityai |
| **landmark_detection** | google      |
|                        | microsoft   |
| **search**             | sentisight  |

</details>
<details><summary>text</summary>

| Subfeatures                         | Providers     |
| ----------------------------------- | ------------- |
| **anonymization**                   | amazon        |
|                                     | emvista       |
|                                     | microsoft     |
|                                     | oneai         |
|                                     | openai        |
| **keyword_extraction**              | amazon        |
|                                     | emvista       |
|                                     | ibm           |
|                                     | microsoft     |
|                                     | oneai         |
|                                     | openai        |
| **named_entity_recognition**        | amazon        |
|                                     | google        |
|                                     | ibm           |
|                                     | lettria       |
|                                     | microsoft     |
|                                     | neuralspace   |
|                                     | oneai         |
|                                     | openai        |
| **sentiment_analysis**              | amazon        |
|                                     | connexun      |
|                                     | emvista       |
|                                     | google        |
|                                     | ibm           |
|                                     | lettria       |
|                                     | microsoft     |
|                                     | oneai         |
|                                     | openai        |
| **syntax_analysis**                 | amazon        |
|                                     | emvista       |
|                                     | google        |
|                                     | ibm           |
|                                     | lettria       |
| **custom_classification**           | cohere        |
|                                     | openai        |
| **custom_named_entity_recognition** | cohere        |
|                                     | openai        |
| **generation**                      | cohere        |
|                                     | openai        |
| **summarize**                       | cohere        |
|                                     | connexun      |
|                                     | emvista       |
|                                     | huggingface   |
|                                     | meaningcloud  |
|                                     | microsoft     |
|                                     | oneai         |
|                                     | openai        |
|                                     | writesonic    |
| **topic_extraction**                | google        |
|                                     | ibm           |
|                                     | openai        |
| **question_answer**                 | huggingface   |
|                                     | openai        |
| **moderation**                      | microsoft     |
|                                     | openai        |
| **spell_check**                     | microsoft     |
|                                     | openai        |
|                                     | prowritingaid |
| **code_generation**                 | openai        |
| **embeddings**                      | openai        |
| **search**                          | openai        |

</details>
<details><summary>translation</summary>

| Subfeatures               | Providers   |
| ------------------------- | ----------- |
| **automatic_translation** | amazon      |
|                           | deepl       |
|                           | google      |
|                           | huggingface |
|                           | ibm         |
|                           | microsoft   |
|                           | modernmt    |
|                           | neuralspace |
|                           | openai      |
|                           | phedone     |
| **language_detection**    | amazon      |
|                           | google      |
|                           | ibm         |
|                           | microsoft   |
|                           | modernmt    |
|                           | neuralspace |
|                           | oneai       |
|                           | openai      |
| **document_translation**  | deepl       |
|                           | google      |

</details>
<details><summary>video</summary>

| Subfeatures                          | Providers |
| ------------------------------------ | --------- |
| **explicit_content_detection_async** | amazon    |
|                                      | google    |
| **face_detection_async**             | amazon    |
|                                      | google    |
| **label_detection_async**            | amazon    |
|                                      | google    |
| **person_tracking_async**            | amazon    |
|                                      | google    |
| **text_detection_async**             | amazon    |
|                                      | google    |
| **logo_detection_async**             | google    |
| **object_tracking_async**            | google    |

</details>

<details><summary>testing</summary>

| Type           | Providers                  |
| -------------- | -------------------------- |
| **completion** | openai                     |
| **chat**       | openai (coming soon)       |
| **custom**     | custom model (coming soon) |

</details>
