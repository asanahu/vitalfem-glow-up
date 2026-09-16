import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

interface SEOProps {
    title: string;
    description: string;
    url?: string;
    image?: string;
}

const SEO = ({
    title,
    description,
    url,
    image = "/og-image.png"
}: SEOProps) => {
    const location = useLocation();
    const path = location.pathname === "/" ? "/" : `${location.pathname.replace(/\/+$/, "")}/`;
    const canonicalUrl = url
        ? `${url.replace(/\/+$/, "")}/`
        : `https://www.vitalfem.es${path}`;
    const fullTitle = `${title} | VitalFem`;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={canonicalUrl} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    );
};

export default SEO;
