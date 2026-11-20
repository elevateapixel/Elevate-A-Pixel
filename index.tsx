import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { AboutStudio } from "@/components/sections/AboutStudio";
import { Audience } from "@/components/sections/Audience";

import { Challenge } from "@/components/sections/Challenge";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Faq } from "@/components/sections/Faq";
import { HowWeHelp } from "@/components/sections/HowWeHelp";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Process } from "@/components/sections/Process";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { PortfolioCategories } from "@/components/sections/PortfolioCategories";
import { StoriesInMotion } from "@/components/sections/StoriesInMotion";
import { Testimonials } from "@/components/sections/Testimonials";

const TITLE = "Elevate A Pixel: Cinematic Visual Storytelling Studio";
const DESCRIPTION =
  "We help authors and brands become unforgettable through cinematic visual storytelling: book trailers, 3D animation, short drama and commercial films.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Elevate A Pixel",
          description: DESCRIPTION,
          email: "info@elevatepixel.org",
          sameAs: [
            "https://youtube.com/@elevatepixel-r8e",
            "https://www.tiktok.com/@elevatepixel2",
          ],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <>
      <SiteNav />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background: "var(--color-background)",
        }}
      />
      <main className="relative z-10">
        <Hero />
        <StoriesInMotion />
        <Marquee />
        <Challenge />
        <HowWeHelp />
        <Audience
          id="authors"
          eyebrow="For Authors"
          headline={["Your Story Already Exists.", "Our Job Is Helping More People Discover It."]}
          copy="Book trailers, animated covers and cinematic scenes that give readers a way into your world, built for launches, backlist revivals and series momentum."
          points={[
            "Cinematic book trailers",
            "Animated cover reveals",
            "Character & world scenes",
            "Reader engagement clips",
          ]}
          audience="Authors"
        />
        <Audience
          id="brands"
          eyebrow="For Brands"
          headline={["People Remember Experiences.", "Not Products."]}
          copy="Luxury, fashion, jewelry, technology, packaging and lifestyle films that place your product inside a feeling customers carry with them."
          points={["Luxury & jewelry films", "Fashion campaigns", "Packaging & product", "Lifestyle storytelling"]}
          audience="Brands"
          flip
        />
        <PortfolioCategories />
        <Process />
        <AboutStudio />
        <Testimonials />

        <Faq />
        <FinalCTA />
      </main>
      <SiteFooter />
    </>
  );
}
