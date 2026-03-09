import * as contentful from 'contentful';

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  environment: import.meta.env.CONTENTFUL_ENVIRONMENT,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? 'preview.contentful.com' : 'cdn.contentful.com',
});

export const handleContentfulPageDestination = (destination: ContentfulPage) => {
  const contentType = destination?.sys?.contentType?.sys.id;

  if (contentType === 'pageExternal') return (destination.fields as IPageExternalFields).url;
  if (contentType === 'pageProject')
    return `/experiences/${(destination.fields as IPageProjectFields).slug}`;
  if (contentType === 'pageStatic') return `/${(destination.fields as IPageStaticFields).slug}`;
  if (contentType === 'pageContent') return `/${(destination.fields as IPageContentFields).slug}`;

  return '/';
};
