import {Helmet} from 'react-helmet'
import React from "react";

export const HelmetComponent = ({assets, page}) => {
	let pageTitle = page;
	const titleRoot = assets.Page_Title_Root;
	if (titleRoot) pageTitle = `${titleRoot} | ${page}`;
	return <Helmet>
        <title>{pageTitle}</title>
        <link rel="icon" sizes="16x16 24x24 32x32 48x48 64x64" href={assets.Favicon} />
	    <meta property="og:title" content={assets.Name} />
	    <meta property="og:description" content={assets.Social_Description} />
	    <meta property="og:image" content={assets.Social_Image} />
	    <meta name="twitter:site" content={assets.Twitter_Handle} />
	    <meta name="twitter:title" content={assets.Name} />
	    <meta name="twitter:image" content={assets.Social_Image} />
	    <meta name="twitter:description" content={assets.Social_Description} />
	    <meta name="application-name" content={assets.Name} />
    </Helmet>
}