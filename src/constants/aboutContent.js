import { partnerBrands } from "./partners";
import { productImg } from "./images";

const partnerBrandNames = partnerBrands.map((b) => b.name);

export const aboutPage = {
  hero: {
    badge: "About Us",
    title: "We always deliver",
    description:
      "Nexara Traders — Pune's trusted B2B partner for precision power transmission components, authorised brand partnerships, and technical expertise.",
  },
  stats: [
    { value: "KTR", label: "Authorised dealer" },
    { value: "Pune", label: "Industrial hub" },
    { value: "B2B", label: "Technical focus" },
    { value: "Genuine", label: "Warranty backed" },
  ],
  story: [
    "Nexara Traders is Pune's trusted B2B source for high-performance couplings, locking assemblies, and precision power transmission components. We are authorised distributors for KTR Systems (Germany) and channel partners for Zimmer Group, Alwayse Engineering, and HiKOKI.",
    "Our team provides technical consultation — helping engineers select the right coupling, locking assembly, or transmission component for specific torque, speed, and mounting conditions. From backlash-free servo couplings to ultra-heavy gear couplings, our catalogue covers the complete power transmission spectrum.",
    "We also supply rack, pinion, gears, timing pulleys, sprockets, and shafts as per customer drawings. Exact supply and prompt service is our commitment to every OEM, machine builder, and plant engineering team we serve.",
  ],
  motto: "Exact supply and prompt service — backed by technical consultation.",
  authorizedBrands: partnerBrandNames,
  customSupply: [
    "Timing pulleys (as per drawing)",
    "Gears (as per drawing)",
    "Sprockets (as per drawing)",
    "Shafts (as per drawing)",
    "Custom coupling solutions",
    "Machining services",
  ],
  values: [
    { title: "Authorised partnerships", description: "Genuine KTR and global brand products with full manufacturer warranty." },
    { title: "Technical consultation", description: "Application sizing, cross-referencing, and engineering support on every enquiry." },
    { title: "Customer-first service", description: "Responsive supply and long-term relationships built on trust." },
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
  industries: ["Automation", "Pumps & Compressors", "Machine Tools", "Packaging", "Pharma & Food", "Heavy Industry"],
  policy: aboutPage.motto,
};
export const certificatesGallery = aboutPage.documents.filter((d) => d.type === "certificate").map((d) => d.image);
export const vendorCertificates = aboutPage.documents.filter((d) => d.type === "download");
