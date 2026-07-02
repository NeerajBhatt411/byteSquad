import { SITE } from "@/data/site";

export function absoluteUrl(path = "/") {
  const base = SITE.url.replace(/\/$/, "");
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

// Build a per-page Metadata object with canonical + OpenGraph + Twitter.
export function pageMetadata({
  title,
  description = SITE.description,
  path = "/",
  image = "/images/hero-bg.jpg",
  type = "website",
}) {
  const url = absoluteUrl(path);
  // Full title used for OG/Twitter; falls back to the brand + tagline on pages
  // (like Home) that don't set their own title.
  const fullTitle = title ? `${title} | ${SITE.name}` : `${SITE.name} — ${SITE.tagline}`;

  const meta = {
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE.name,
      type,
      images: [{ url: absoluteUrl(image), width: 1200, height: 630, alt: SITE.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [absoluteUrl(image)],
    },
  };

  // Only set `title` when provided, so pages without one inherit the root
  // layout's `title.default` (avoids a blank <title>).
  if (title) meta.title = title;

  return meta;
}

export function organizationJsonLd() {
  const social = Object.values(SITE.social).filter(Boolean);
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: absoluteUrl("/images/bytesquad-logo.svg"),
    description: SITE.description,
    email: SITE.contact.email,
    telephone: SITE.contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.contact.address,
      addressCountry: "IN",
    },
    sameAs: social,
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE.url.replace(/\/$/, "")}/resources?s={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function articleJsonLd(post) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: absoluteUrl(post.cover),
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: post.author?.name || SITE.name },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: { "@type": "ImageObject", url: absoluteUrl("/images/bytesquad-logo.svg") },
    },
    mainEntityOfPage: absoluteUrl(`/resources/${post.slug}`),
  };
}

export function breadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.path),
    })),
  };
}
