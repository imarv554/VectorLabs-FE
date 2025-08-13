import { Body, Hero } from "./layout";

const HomePage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Vetor Labs",
    url: "https://vetorlabs.com/",
    logo: "https://vetorlabs.com/vl-light.webp",
    description:
      "Empowering Web2 and Web3 entrepreneurs with AI, blockchain, and advanced business tools.",
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
