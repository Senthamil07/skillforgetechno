/**
 * Helper utility to dynamically update page SEO metadata
 * for standard web crawler simulation and browser bookmark sharing.
 */
export function updateSEOMetadata(options: {
  title?: string;
  description?: string;
  keywords?: string;
  ogType?: string;
  imageUrl?: string;
  canonicalUrl?: string;
}) {
  if (typeof window === "undefined") return;

  const {
title = "Skill Forge Technologies | Premium Online IT Training Institute",

description = "Skill Forge Technologies offers industry-focused online training in Data Science, Data Analytics, AWS & DevOps, and CCNA Networking. Learn through live classes, real-world projects, expert mentors, placement assistance, and career guidance. Forge Your Future.",

keywords = "Skill Forge Technologies, Data Science Course, Data Analytics Course, AWS DevOps Training, CCNA Training, Online IT Training, Live Classes, Placement Assistance, Career Training, Python, Machine Learning, Artificial Intelligence, Power BI, SQL, Cloud Computing, Networking",

imageUrl = "https://www.skillforgetechnology.co.in/og-image.jpg"
    canonicalUrl = window.location.href,
  } = options;

  // 1. Title
  document.title = title;

  // Helper to find or create a meta tag
  const setMetaTag = (attrName: string, attrValue: string, contentValue: string) => {
    let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
    if (!element) {
      element = document.createElement("meta");
      element.setAttribute(attrName, attrValue);
      document.head.appendChild(element);
    }
    element.setAttribute("content", contentValue);
  };

  // Helper to find or create a link tag
  const setLinkTag = (relValue: string, hrefValue: string) => {
    let element = document.querySelector(`link[rel="${relValue}"]`);
    if (!element) {
      element = document.createElement("link");
      element.setAttribute("rel", relValue);
      document.head.appendChild(element);
    }
    element.setAttribute("href", hrefValue);
  };

  // 2. Head Description
  setMetaTag("name", "description", description);
  setMetaTag("name", "keywords", keywords);

  // 3. Open Graph Tags
  setMetaTag("property", "og:title", title);
  setMetaTag("property", "og:description", description);
  setMetaTag("property", "og:type", ogType);
  setMetaTag("property", "og:image", imageUrl);
  setMetaTag("property", "og:url", canonicalUrl);
  setMetaTag("property", "og:site_name", "Skill Forge Technology");

  // 4. Twitter Card Tags
  setMetaTag("name", "twitter:card", "summary_large_image");
  setMetaTag("name", "twitter:title", title);
  setMetaTag("name", "twitter:description", description);
  setMetaTag("name", "twitter:image", imageUrl);

  // 5. Canonical Url
  setLinkTag("canonical", canonicalUrl);
}
