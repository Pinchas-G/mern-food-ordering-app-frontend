import metaTagsConfig from "@/config/meta-tags-config";
import { Helmet, HelmetProvider } from "react-helmet-async";

type Props = {
  page: keyof typeof metaTagsConfig;
  dynamicProps?: { [key: string]: string };
};

const MetaTags = ({ page, dynamicProps }: Props) => {
  const meta = metaTagsConfig[page];

  const replacePlaceholders = (
    text: string,
    props: { [key: string]: string }
  ) => {
    return text.replace(/{{(.*?)}}/g, (_, key) => props[key.trim()] || "");
  };

  return (
    <HelmetProvider>
      <Helmet defaultTitle="FoodFood.com" titleTemplate="%s | FoodFood">
        <title>{replacePlaceholders(meta.title, dynamicProps || {})}</title>
        {meta.description && (
          <meta
            name="description"
            content={replacePlaceholders(meta.description, dynamicProps || {})}
          />
        )}
        {meta.keywords && (
          <meta
            name="keywords"
            content={replacePlaceholders(meta.keywords, dynamicProps || {})}
          />
        )}
        <link rel="canonical" href={window.location.href} />

        {/* Open Graph */}
        {meta.ogTitle && (
          <meta
            property="og:title"
            content={replacePlaceholders(meta.ogTitle, dynamicProps || {})}
          />
        )}
        {meta.ogDescription && (
          <meta
            property="og:description"
            content={replacePlaceholders(
              meta.ogDescription,
              dynamicProps || {}
            )}
          />
        )}
        {meta.ogImage && <meta property="og:image" content={meta.ogImage} />}
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="website" />

        {/* Twitter Cards */}
        {meta.twitterTitle && (
          <meta
            name="twitter:title"
            content={replacePlaceholders(meta.twitterTitle, dynamicProps || {})}
          />
        )}
        {meta.twitterDescription && (
          <meta
            name="twitter:description"
            content={replacePlaceholders(
              meta.twitterDescription,
              dynamicProps || {}
            )}
          />
        )}
        {meta.twitterImage && (
          <meta name="twitter:image" content={meta.twitterImage} />
        )}
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
    </HelmetProvider>
  );
};

export default MetaTags;
