import sanityClient from '@sanity/client';

//When production or making repository public in github replace values with environement variables
export const client = sanityClient({
  projectId: '3rz1zvql',
  dataset: 'production',
  apiVersion: '1.0',
  useCdn: true,
  token:
    'skIfUqqNLBqLJo0aytnwGkssjQKxIJhc1R6tSnSpI8WhVhQ90STrntJ1t7CB6JywYnxrJATXO10jY1I09v4G92U20fiJ5WzyX0GC1ArZVhBvIPjjzxqnmxUYRLtnoL76znxhx37rnJme0oRXeL7RNSTwTP8yClPRuTV4QQFF77qzHmR1l8jA',
});
