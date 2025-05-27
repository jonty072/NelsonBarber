import { notFound } from "next/navigation";
import { headers } from "next/headers";
import dynamicImport from "next/dynamic";
import { fetchPageData } from "@/lib/api/siteservice";
import { MOCK_DATA } from "@/lib/mock/mockdata";
import NelsonHero from "@/components/section/NelsonHero";
import ServiceExpectationSection from "@/components/section/ServiceExpectationSection";
import TestimonialsSection from "@/components/section/TestimonialsSection";

// Force dynamic rendering since we're using headers()
export const dynamic = "force-dynamic";
export const runtime = "edge";

// Helper function to get subdomain from host
function getSubdomain(host) {
  console.log("Getting subdomain from host:", host);

  // Always return d2d for localhost for development
  if (host.includes("localhost")) {
    console.log("Localhost detected, returning 'd2d'");
    return "d2d";
  }

  // Extract subdomain from host (e.g., 'mysite.example.com' -> 'mysite')
  const parts = host.split(".");
  // Check if we have a subdomain
  if (parts.length > 2) {
    console.log("Subdomain detected:", parts[0]);
    return parts[0];
  }

  // Default subdomain or handle www
  const subdomain = parts[0] === "www" ? "default" : parts[0];
  console.log("Using subdomain:", subdomain);
  return subdomain;
}

export async function generateMetadata({ params, searchParams }) {
  try {
    const headersList = await headers();
    const host = headersList.get("host") || "localhost:3000";
    console.log("Host in generateMetadata:", host);

    // Get subdomain through our helper function
    const subdomain = getSubdomain(host);
    // Try to fetch real site data
    const { siteMeta } = await fetchPageData(subdomain, params.slug || "home");

    return {
      title: siteMeta.title,
      description: siteMeta.description,
      openGraph: {
        images: siteMeta.og_image ? [siteMeta.og_image] : [],
      },
      keywords: siteMeta.keywords,
      twitter: {
        card: "summary_large_image",
        handle: siteMeta.twitter_handle,
      },
      icons: {
        icon: siteMeta.favicon,
      },
    };
  } catch (error) {
    console.error("siteMeta", error);
    // Fallback to mock data
    const siteMeta = MOCK_DATA.siteMeta;
    return {
      title: siteMeta.title,
      description: siteMeta.description,
      openGraph: {
        images: siteMeta.og_image ? [siteMeta.og_image] : [],
      },
      keywords: siteMeta.keywords,
      twitter: {
        card: "summary_large_image",
        handle: siteMeta.twitter_handle,
      },
      icons: {
        icon: siteMeta.favicon,
      },
    };
  }
}

// Create a client component to apply themes
const PageContent = dynamicImport(() => import("@/components/PageContent"), {
  ssr: true,
});

export default async function SubdomainPage({ params }) {
  const { slug = "home" } = params; // Default to home if no slug provided
  let pageData;
  let isHomePage = slug === "home";

  try {
    const headersList = await headers();
    const host = headersList.get("host") || "localhost:3000";
    const subdomain = getSubdomain(host);
    pageData = await fetchPageData(subdomain, slug);

    if (!pageData.page) {
      return notFound();
    }

    if (isHomePage) {
      return (
        <>
          <NelsonHero />
          <ServiceExpectationSection />
          <TestimonialsSection />
        </>
      );
    }
    // For non-homepage, render PageContent as before
    return (
      <PageContent
        page={pageData.page}
        sections={pageData.sections}
        theme={pageData.theme}
        config={pageData.config}
      />
    );
  } catch (error) {
    console.error("Error rendering page:", error);
    isHomePage = slug === "home"; 

    const mockPage =
      Object.values(MOCK_DATA.pages).find((p) => p.slug === slug) ||
      MOCK_DATA.pages.home;

    if (!mockPage) {
      return notFound();
    }

    const mockSections = MOCK_DATA.sections.map((section) => ({
      ...section,
      type: section.type,
      variant: section.variant,
    }));

    if (isHomePage) {
      return (
        <>
          <NelsonHero />
          <ServiceExpectationSection />
          <TestimonialsSection />
        </>
      );
    }
    // For non-homepage mock data, render PageContent as before
    return (
      <PageContent
        page={mockPage}
        sections={mockSections}
        theme={MOCK_DATA.theme}
        config={MOCK_DATA.config}
      />
    );
  }
}
