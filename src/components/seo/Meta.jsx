// src/components/seo/Meta.jsx
import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, image, url }) => {
  const siteName = "NetBrains Recruitment";
  const fullTitle = `${title} | ${siteName}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {/* ... other meta tags ... */}
    </Helmet>
  );
};

// ADD THIS LINE AT THE VERY BOTTOM:
export default Meta;