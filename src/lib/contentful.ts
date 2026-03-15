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

type ProjectTechnologyEntry = { sys?: { id?: string } };

type PageProjectEntry = {
  sys: { id: string; createdAt?: string };
  fields: {
    title?: string;
    slug?: string;
    project?: {
      fields?: {
        technologies?: ProjectTechnologyEntry[];
      };
    };
  };
};

export const getProjectTechnologyIds = (entry: PageProjectEntry): string[] =>
  entry.fields.project?.fields?.technologies
    ?.map((technology) => technology?.sys?.id)
    .filter((id): id is string => Boolean(id)) ?? [];

export const getProjectRecommendations = (
  currentEntry: PageProjectEntry,
  allEntries: PageProjectEntry[]
) => {
  const currentTechIds = getProjectTechnologyIds(currentEntry);
  const candidates = allEntries.filter((candidate) => candidate.sys.id !== currentEntry.sys.id);

  const relatedPage =
    candidates
      .map((candidate) => {
        const overlapCount = getProjectTechnologyIds(candidate).filter((id) =>
          currentTechIds.includes(id)
        ).length;
        return { candidate, overlapCount };
      })
      .filter(({ overlapCount }) => overlapCount > 0)
      .sort((a, b) => {
        if (b.overlapCount !== a.overlapCount) return b.overlapCount - a.overlapCount;
        return (a.candidate.fields.title ?? '').localeCompare(b.candidate.fields.title ?? '');
      })[0]?.candidate ?? null;

  const usedIds = new Set<string>([currentEntry.sys.id]);
  if (relatedPage?.sys.id) usedIds.add(relatedPage.sys.id);

  const latestPage =
    candidates
      .filter((candidate) => !usedIds.has(candidate.sys.id))
      .sort(
        (a, b) =>
          new Date(b.sys.createdAt ?? 0).getTime() - new Date(a.sys.createdAt ?? 0).getTime()
      )[0] ?? null;

  if (latestPage?.sys.id) usedIds.add(latestPage.sys.id);

  const favouritePage =
    candidates
      .filter((candidate) => !usedIds.has(candidate.sys.id))
      .sort((a, b) => {
        const techDiff = getProjectTechnologyIds(b).length - getProjectTechnologyIds(a).length;
        if (techDiff !== 0) return techDiff;
        return (a.fields.title ?? '').localeCompare(b.fields.title ?? '');
      })[0] ?? null;

  return [
    { label: 'Related', page: relatedPage },
    { label: 'Latest', page: latestPage },
    { label: 'Favourite', page: favouritePage },
  ].filter((entry) => Boolean(entry.page?.fields?.slug && entry.page?.fields?.project?.fields));
};
