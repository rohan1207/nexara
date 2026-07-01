import { partnerBrands } from "./partners";
import { productImg } from "./images";

const partnerBrandNames = partnerBrands.map((b) => b.name);

export const aboutPage = {
  hero: {
    badge: "About Us",
    title: "Why Choose Nexara Traders?",
    description:
      "Pune's trusted B2B source for high-performance couplings, locking assemblies and precision power transmission components.",
  },
  stats: [
    { value: "KTR", label: "Authorised dealer" },
    { value: "Pune", label: "Industrial hub" },
    { value: "B2B", label: "Technical focus" },
    { value: "Genuine", label: "Warranty backed" },
  ],
  story: [
    "Nexara Traders is Pune's trusted B2B source for high-performance couplings, locking assemblies and precision power transmission components. We are authorised distributors for KTR Systems (Germany) and channel partners for Zimmer Group, Alwayse Engineering and HiKOKI.",
    "Our team provides technical consultation helping engineers select the right coupling, locking assembly or transmission component for specific torque, speed and mounting conditions. From backlash free servo couplings to ultra-heavy gear couplings our catalogue covers the complete power transmission spectrum.",
    "We supply timing pulleys, gears, sprockets and shafts as per customer drawings alongside our authorised coupling and locking assembly range.",
  ],
  motto: "Genuine products, technical depth and responsive supply for Maharashtra's industrial ecosystem.",
  authorizedBrands: partnerBrandNames,
  customSupply: [
    "Guide for Coupling Selection",
    "Customized Coupling Manufacturer",
    "Machining Services",
    "Timing Pulleys (as per Drawing)",
    "Gears (as per Drawing)",
    "Sprockets (as per Drawing)",
    "Shafts (as per Drawing)",
  ],
  values: [
    {
      title: "Genuine Products, Manufacturer Warranty",
      description:
        "Every component is 100% genuine, carries the manufacturer's warranty and is fully traceable to its origin.",
    },
    {
      title: "Technical Consultation",
      description:
        "Selection, cross-referencing, application-specific sizing and technical queries handled by knowledgeable staff.",
    },
    {
      title: "Long-Term Partnership",
      description:
        "We build relationships, not transactions. Regular customers receive ongoing technical consultation and application support.",
    },
  ],
  documents: [
    { id: "flyer", title: "Nexara Traders Flyer", description: "Company overview and product range.", href: "/downloads/nexara-flyer.pdf", type: "download" },
    { id: "vendor", title: "Vendor Registration", description: "Vendor onboarding documentation.", href: "/downloads/vendor-registration.pdf", type: "download" },
    { id: "gst", title: "GST Certificate", description: "GST registration certificate.", image: productImg(41), type: "certificate" },
    { id: "msme", title: "MSME Certificate", description: "MSME registration certificate.", image: productImg(42), type: "certificate" },
  ],
};

export const aboutStats = aboutPage.stats;
export const aboutTabs = [{ id: "introduction", label: "Introduction", shortLabel: "Introduction" }];
export const introductionContent = {
  lead: aboutPage.story[0],
  highlights: [],
  storyBlocks: [],
  qualityPolicy: aboutPage.motto,
  products: aboutPage.customSupply,
  clients: partnerBrandNames,
  directors: [],
};
export const factoryContent = { title: "Operations", images: [], description: aboutPage.story[0] };
export const manufacturingContent = {
  lead: aboutPage.story[1],
  capabilities: aboutPage.values.map((v) => ({ title: v.title, description: v.description })),
  processSteps: aboutPage.customSupply,
};
export const qualityContent = {
  industries: [
    "Industrial Automation",
    "Pumps & Compressors",
    "Machine Tools & SPM",
    "Packaging & Material Handling",
    "Pharma & Food Processing",
    "Mining, Cement & Heavy Industry",
    "Renewable Energy",
    "Textiles & General Engineering",
  ],
  policy: aboutPage.motto,
};
export const certificatesGallery = aboutPage.documents.filter((d) => d.type === "certificate").map((d) => d.image);
export const vendorCertificates = aboutPage.documents.filter((d) => d.type === "download");
