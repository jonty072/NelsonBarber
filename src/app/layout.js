import "./globals.css";
// import { Inter } from "next/font/google"; // Replaced by Montserrat and Playfair Display
import { Montserrat, Playfair_Display } from "next/font/google";
import { AppProvider } from "@/contexts/AppContext";
import ThemeProvider from "@/contexts/ThemeProvider";
import { fetchSiteConfigAndThemes } from "@/lib/api/siteservice";
import { headers } from "next/headers";
import NelsonHeader from "@/components/section/NelsonHeader";
import NelsonFooter from "@/components/section/NelsonFooter";

// const inter = Inter({ subsets: ["latin"] }); // Replaced

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat', // CSS variable for Tailwind
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display', // CSS variable for Tailwind
  weight: ['400', '700'], // Include weights used on reference site
  style: ['normal', 'italic'],
  display: 'swap',
});

// Helper function to get subdomain from host
function getSubdomain(host) {
  console.log("Getting subdomain from host (layout):", host);
  
  // Always return d2d for localhost for development
  if (host.includes("localhost")) {
    console.log("Localhost detected in layout, returning 'd2d'");
    return "d2d";
  }
  
  // Extract subdomain from host (e.g., 'mysite.example.com' -> 'mysite')
  const parts = host.split(".");
  // Check if we have a subdomain
  if (parts.length > 2) {
    console.log("Subdomain detected in layout:", parts[0]);
    return parts[0];
  }
  
  // Default subdomain or handle www
  const subdomain = parts[0] === "www" ? "default" : parts[0];
  console.log("Using subdomain in layout:", subdomain);
  return subdomain;
}

// Force dynamic rendering since we're using headers()
export const dynamic = "force-dynamic";
export const runtime = "edge";

export const metadata = {
  title: 'Nelson Hair Salon',
  description: 'Modern Hair Salon & Barbershop',
}

export default async function RootLayout({ children }) {
  let siteData = {};
  try {
    // Get the host from headers to determine subdomain
    const headersList = await headers();
    const host = headersList.get("host") || "localhost:3000";
    console.log("Host in RootLayout:", host);
    
    // Get subdomain through our helper function
    const subdomain = getSubdomain(host);

    // Fetch site configuration and themes
    const { site, themes } = await fetchSiteConfigAndThemes(subdomain);
    siteData = { site, themes };

    return (
      <html lang="en" className={`dark ${montserrat.variable} ${playfairDisplay.variable}`}>
        <body className="font-sans bg-background text-foreground">
          <AppProvider initialSite={siteData.site} initialThemes={siteData.themes}>
            <ThemeProvider>
              <NelsonHeader />
              <main>{children}</main>
              <NelsonFooter />
            </ThemeProvider>
          </AppProvider>
        </body>
      </html>
    );
  } catch (error) {
    console.error("Error in RootLayout:", error);

    // Fallback to basic layout
    return (
      <html lang="en" className={`dark ${montserrat.variable} ${playfairDisplay.variable}`}>
        <body className="font-sans bg-background text-foreground">
          <NelsonHeader /> 
          <main>{children}</main>
          <NelsonFooter />
        </body>
      </html>
    );
  }
}
