import { createClient } from "contentful";

const { REACT_APP_CONTENTFUL_SPACE, REACT_APP_CONTENTFUL_ACCESS_TOKEN } = process.env;

const Client = createClient({
  space: REACT_APP_CONTENTFUL_SPACE,
  accessToken: REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

export default Client;