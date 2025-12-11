import { COMPANY } from "@/lib/constants";

export default function JsonLdLocalBusiness() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": COMPANY.name,
    "image": "https://mundialchurrasqueiras.com.br/images/logo.png",
    "telephone": "+5532999029461",
    "url": "https://mundialchurrasqueiras.com.br",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua José Lourenço Kelmer, 665",
      "addressLocality": "Juiz de Fora",
      "addressRegion": "MG",
      "postalCode": "36036-330",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -21.7642, 
      "longitude": -43.3503
    },
    "openingHoursSpecification": [
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], "opens": "07:00", "closes": "18:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "07:00", "closes": "12:00" }
    ],
    "sameAs": Object.values(COMPANY.social)
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}