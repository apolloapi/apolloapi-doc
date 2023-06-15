# Integrations

## APIs

APIs represent any action you can perform on content, data or users. Some common examples include Delete, Ban, Mute, Escalate, Approve, etc.

When you start building Workflows, they'll help you (1) find harmful content, (2) take action on that content, (3) automate data preprocessing, and (4) model validation as well. In order for to take action on content on your behalf, we need to know what types of actions we can take, and how to take them. For example, if you want to create workflows that automatically escalate fraudulent transactions, Apollo needs to be able to invoke your Escalate action automatically (i.e. through a POST request).

For every Action you define in, you have to expose the action through a public-facing API endpoint (by "public-facing", we mean an endpoint that can receive requests from our servers). Whenever your workflows determine that some content or data should receive an Action, we will send a POST request to the API endpoint. When your server receives that POST request, your code should actually perform the corresponding action.

### How to Create an Integration

To create a new integration via rest api:

1. Navigate to the integrations tab
2. Toggle "Rest API" in the top right corner
3. Fill out your api criteria
4. Click create

**You can also use rest api integrations for calling/syncing data and other items as well**

<!-- ## Connecting a Database

Integrations with external databases can be synced into the platform. Once connected your data is syncing in real-time. You can use your database integrations to perform analytics, trigger workflows or workflows and manually review whats being updated in your database in real-time.

To create a new database connection:

1. Navigate to the integrations tab
2. Fill out your database uri
3. Click create -->
