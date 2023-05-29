---
sidebar_position: 0
---

# Introduction

Let's discover **Apollo SDK in less than 2 minutes**.

## Regression tests vs Automated pipelines

Our library allows you to do three things:

- Test model quality using our CLI tool
- Build automated tasks or back-test existing ones
- Detect real-time changes in data

Apollo helps you tune LLM prompts systematically across many relevant test cases. By evaluating and comparing LLM outputs to build decision making workflows. Users can test prompt quality and catch regressions faster.

We give you access to a native user interface (UI) for super charging your experience, create automated workflows, develop data driven insights from real-time changes and test your models.

### Evaluating prompt quality

**With Apollo python library and CLI toolkit, you can:**

- **Detecting real-time changes** in your data
- Automating tasks against **image, video, audio or text**
- Simplifying the process of **back-testing quality** for your AI models
- Making sure your integration is robust, so you **never again have to worry about stuck/stale data or false-positives**
- **Test multiple prompts** against predefined test cases
- **Evaluate quality and catch regressions** by comparing LLM outputs side-by-side
- **Speed up evaluations** with caching and concurrent tests
- **Flag bad outputs automatically** by setting "expectations"
- Use as a **command line tool, or integrate into your workflow with our library**
- **Use any** AI provider, API or database under one API

`apollo-sdk` produces table views that allow you to quickly review prompt outputs across many inputs. The goal: tune prompts systematically across all relevant test cases, instead of testing prompts by trial and error.

#### Usage (command line)

_Support for user interface as output type coming soon_

**It works on the command line, you can output to [`json`, `csv`, `yaml`]:**

![Prompt eval](https://github.com/apolloapi/apolloapi/assets/72639210/c65b4565-5d17-4b32-971c-d4a51d9d137e)
To get started, run the following command:

```
apollo-sdk init
```

This will create some templates in your current directory: `prompts.txt`, `vars.csv`, and `config.json`.

After editing the prompts and variables to your desired state, `apollo-sdk` command to kick off an prompt evaluation test:

```
apollo-sdk -p ./prompts.txt -v ./vars.csv -r openai:completion
```

If you're looking to customize your usage, you have a wide set of parameters at your disposal. See the [Configuration docs](https://docs.apolloapi.io/docs/cli/configuration) for more detail

**Here's an example of a side-by-side comparison of multiple prompts and inputs. You can manually review outputs:**

_set up for "expectations" that automatically flag bad outputs coming soon_

![Prompt eval](https://uploads-ssl.webflow.com/640ca38ad086fde245b76c9d/647411b456031b5145019909_Screenshot%202023-05-28%20at%2010.44.48%20PM.png)

### Building Automated Pipelines w/ Python Library

In your code you can write:

```python
Apollo.connect('postgres://username:password@hostnam...', ...) # Starts syncing content forever!

Apollo.use('OpenAI', "moderation", ...) # Connect to existing providers!

Apollo.rule('Phrase1', '>=', '0.8') # Create custom rules!

Apollo.use('Apollo', "violence", ...) # Connect with our internal models!

# Detect bad actors at scale!
Apollo.detectImage('Image1', 'contains', 'VERY_LIKELY') # Image Analysis/OCR
Apollo.detectSpeech('Audio1', 'contains', 'UNLIKELY') # Audio Processing
Apollo.detectVideo('Video1', 'contains', 'POSSIBLE') # Video Analysis
Apollo.detectText('Phrase1', 'contains', 'UNKNOWN') # Text Analysis

```

### Cool, what can I build with it?

- Apollo can help you **quickly automate tasks** for model management, performance, labeling, object detection and more.
- Teams can use Apollo to **build native in-app connections** related to active response, content moderation, risk management, fraud detection, etc.
- Some **automate their personal lives** with Apollo by integrating against discord communities or their personal lives

[Let's try the SDK I want to build automation pipelines on my own!](https://docs.apolloapi.io/docs/client/quickstart)

You probably want to experience our no-code user interface (UI) beta. We're building other tools as well, want to self-host? Reach out to adrian@apolloapi.io

![selfhosted](https://uploads-ssl.webflow.com/640ca38ad086fde245b76c9d/6452c0d5028530251de7b764_Screenshot%202023-05-03%20at%204.15.01%20PM.png)

I want to use your [no-code UI!](https://app.apolloapi.io)

## Neat, I would like to learn more

⭐ Follow our development by starring us here on GitHub ⭐

- Share feedback or ask questions on the [Discord community](https://discord.gg/ZUH7f7AzUY)
- [Chat with a member of the team](https://apolloapi.io) 👋
- [Report Bug](https://github.com/apolloapi/apolloapi/issues)
- Join the [Waitlist](https://www.apolloapi.io/)
- Check our [blog on Trust & Safety](https://www.thebriefnewsletter.com)
