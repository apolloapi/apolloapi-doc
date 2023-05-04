# Connections

Apollo gives you a way to extend your integrations beyond rest and database by integrating in with common platforms.

**Note: if you'd like to connect with stripe using our Beta please contact adrian@apolloapi.io or open a github [issue](https://github.com/apolloapi/apolloapi/issues).**

Currently we only support Stripe integrations for our Beta. To connect to stripe review the following:

### 1. Create your webhook

Go here to create your [webhook](https://dashboard.stripe.com/test/webhooks/create) - be sure to set your events to `charge.pending` and `charge.dispute.created`.

![webhooks](https://uploads-ssl.webflow.com/640ca38ad086fde245b76c9d/64529f4167f1101686259b77_Screenshot%202023-05-03%20at%201.49.33%20PM.png)

### 2. You'll need to authenticate with stripe

To Authenticate your request from stripe to Apollo you'll need to grab your `acc_..` Account key and API Token `secret_key` from the developer dashboard and profile settings.

#### Grabbing your account key

1. Click your profile icon in the top right
2. Hit profile
3. Scroll all the way to the bottom where it says `Accounts`

#### Grabbing your secret key

1. Go to the developer [dashboard](https://dashboard.stripe.com/developers)
2. Navigate to API Keys beside `Overview`
3. Copy your secret key

![secret](https://uploads-ssl.webflow.com/640ca38ad086fde245b76c9d/6452c9b30c3257f89d90561b_Screenshot%202023-05-03%20at%204.52.54%20PM.png)
