## Image Generator (Ima•gen)

A simple website that generates images using [Replicate](https://replicate.com) to generate images from a text prompt.

### Frontend

The frontend uses:

- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [React Router](https://reactrouter.com/)

It's bootstrapped with [Create React App](https://create-react-app.dev/)

### Backend

The backend uses [Netlify Functions](https://www.netlify.com/products/functions/) to query the [Replicate API](https://replicate.com/docs/reference/http) and generate images and forward the results to the frontend.

The reason we do this is to avoid exposing the `REPLICATE_API_TOKEN` to the frontend (and therefore any evil users).

## Making it work

### Get your API token from Replicate

If you don't have an account with [Replicate](https://replicate.com), create it! It's really fast to do.

Once you have your account, get your API token from the [Account](https://replicate.com/account) page.

### Deploy to Netlify

If you don't have an account at [Netlify](https://netlify.com), create it! You'll love it.

If you already have an account, you can deploy this repository to Netlify using the button below.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/code-jorge/image-generator)

### Adding the API token to Netlify

Once you've deployed to Netlify, you'll need to add the `REPLICATE_API_TOKEN` environment variable to your Netlify site.

To do this, go to your site's settings and click on the `Build & deploy` tab. Scroll down to the **Environment** section and click **Add a variable**.

The variable must be named `REPLICATE_API_TOKEN` and contain the token you got from **Replicate**. Once that's done, you're good to go! Your site should be capable of generating images within the rate limit of your **Replicate** account.