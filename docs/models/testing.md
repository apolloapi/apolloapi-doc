# Regression testing

Apollo gives access to a large number of providers, integrations and libraries to boost accuracy for your AI models.

With Apollo, you can tune LLM prompts systematically across many relevant test cases. By evaluating and comparing LLM outputs to build decision making workflows. Users can test prompt quality and catch regressions faster.

## Subfeatures

- `prompt testing`: You can compare prompt outputs against your models, utilizing this approach to start you can gain insight into model quality.
- `grading`: You can setup automatic evaluation for your model outputs, thus extending testing through visible `pass` or `fail` states.
- `retraining (suggestion)`: Users have the ability to retrain models/update classifiers using suggestive response to grading and prompt testing states.

## Our shared approach

Our tool is inspired from `apollo-sdk`, we've extended the module beyond its existing base to support our developers.

A [blurb](https://www.ianww.com/blog/2023/05/21/prompt-engineering-framework) from Serious LLM development requires a systematic approach to prompt engineering. `apollo-sdk` core purpose is to support performance management, monitoring and evaluation of AI models using a well-structured, repeatable, and customizable process.

The goal: informed, data-driven decisions for prompt tuning and building custom decision making workflows. At a high level, here's how to use `Apollo`:

1. `Define your test cases`: Identify the scenarios and inputs that are relevant to your application. Create a set of prompts and test cases that closely represent these scenarios.
2. `Configure your evaluation`: Set up your evaluation by specifying the prompts, test cases, and API providers you want to use. You can customize the evaluation process by configuring the input and output formats, the level of concurrency, and other options.
3. `Run the evaluation`: Execute the evaluation using the command-line tool or library. Apollo will evaluate your prompts against the specified API providers, generating side-by-side comparisons of their outputs.
4. `Analyze the results`: Review results in a structured format, such as CSV, JSON, YAML, or HTML, to make informed decisions about the best model and prompt choices for your application.

![HowItWorks](https://uploads-ssl.webflow.com/640ca38ad086fde245b76c9d/645e8d8ad611b140135e11bb_GraphicOne.png)
