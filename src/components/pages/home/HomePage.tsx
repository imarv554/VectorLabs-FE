import { Body, Hero } from "./layout";

const HomePage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Affidex Lab",
    url: "https://affidexlab.netlify.app/",
    logo: "https://affidexlab.netlify.app/vl-light.webp",
    description:
      "Incubation laboratory for core utility projects. Formerly CreedTech Group, we've evolved into an incubation laboratory focused on building the next generation of blockchain and AI-powered solutions.",
  };

  return (
    <div className="bg-black xl:p-8 lg:px-5 p-5">
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <Hero />
      <Body />
    </div>
  );
};

export default HomePage;
