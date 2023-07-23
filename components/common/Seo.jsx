import Head from "next/head";

const Seo = ({ pageTitle }) => (
  <>
    <Head>
      {pageTitle ? (
        <title>{`${pageTitle} |مساكن عريب العقارية `}</title>
      ) : (
        <title>{` مساكن عريب العقارية`}</title>
      )}

      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="keywords"
        content="مساكن عريب العقارية ,عقارات الرياض ,مشاريع عقارية ,عقارات شمال الرياض ,السوق العقاري "
      />

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta
        name="description"
        content="مساكن عريب العقارية- استثمار ونماء في مجال بناء وتملك الوحدات السكنية، مستمرون من خبراتنا الممتدة منذ عشرات السنوات في السوق العقاري."
      />
      {/* <link rel="canonical" href="https://safainv.sa/" /> */}
      <meta property="og:locale" content="ar_AR" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="حلول ابتكارية للقطاع العقاري والإسكاني والتجاري -  مساكن عريب العقارية"
      />
      <meta
        property="og:description"
        content="مساكن عريب العقارية  - استثمار ونماء في مجال بناء وتملك الوحدات السكنية، مستمرون من خبراتنا الممتدة منذ عشرات السنوات في السوق العقاري."
      />

      <link rel="icon" href="/favicon.ico" />
    </Head>
  </>
);

export default Seo;
