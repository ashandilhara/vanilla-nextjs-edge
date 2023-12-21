import { useEffect } from 'react';
import { GetServerSideProps } from 'next';
import NotFound from 'src/NotFound';
//import Layout from 'src/Layout';
import //RenderingType,
//SitecoreContext,
//ComponentPropsContext,
//EditingComponentPlaceholder,
//StaticPath,
'@sitecore-jss/sitecore-jss-nextjs';
import { handleEditorFastRefresh } from '@sitecore-jss/sitecore-jss-nextjs/utils';
import { SitecorePageProps } from 'lib/page-props';
//import { sitecorePagePropsFactory } from 'lib/page-props-factory';
//import { componentBuilder } from 'temp/componentBuilder';
//import { sitemapFetcher } from 'lib/sitemap-fetcher';
export const runtime = 'experimental-edge';
const SitecorePage = ({
  notFound,
  //componentProps,
  layoutData,
}: //headLinks,
SitecorePageProps): JSX.Element => {
  useEffect(() => {
    // Since Sitecore editors do not support Fast Refresh, need to refresh editor chromes after Fast Refresh finished
    handleEditorFastRefresh();
  }, []);

  if (notFound || !layoutData.sitecore.route) {
    // Shouldn't hit this (as long as 'notFound' is being returned below), but just to be safe
    return <NotFound />;
  }

  //const isEditing = layoutData.sitecore.context.pageEditing;
  //const isComponentRendering =
  //layoutData.sitecore.context.renderingType === RenderingType.Component;

  return <div>Hello World</div>;
};

// This function gets called at build and export time to determine
// pages for SSG ("paths", as tokenized array).

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation (or fallback) is enabled and a new request comes in.
export const getServerSideProps: GetServerSideProps = async () => {
  //const props = await sitecorePagePropsFactory.create(context);
  const props = {} as SitecorePageProps;
  return {
    props,
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 5 seconds
    //revalidate: 5, // In seconds
    notFound: props.notFound, // Returns custom 404 page with a status code of 404 when true
  };
};

export default SitecorePage;
