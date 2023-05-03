# Content Types

Content Types are the first things you create when you sign up for Apollo. Each content type represents a different form of content that users can create on your platform.

Apollo needs to know exactly what pieces of data comprise each of your Content Types. For example, a Profile on your platform might contain a username, a profile picture, a short bio and more, all of which can be used to evaluate whether that content violates your platform's policies. When you create a Content Type in Apollo, you'll be able to specify the fields it contains.

### How to create a content type?

1. Navigate to the Content Types tab
2. Click "Create" in the top right corner
3. Enter a name, and optionally a description
4. Create your Content Type's schema. Schemas are lists of typed fields that represent all of the data in your Content Type. Using the previous example of a 'Profile' Content Type, the fields in the schema might look like:

- { name: Transaction, type: int }
- { name: Post, type: image }
- { name: Bio, type: string }

5. Click "Create"
