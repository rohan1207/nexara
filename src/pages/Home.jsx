import Hero from "../components/home/Hero";
import WhyChooseSection from "../components/home/WhyChooseSection";
import AboutPreview from "../components/home/AboutPreview";
import ProductShowcase from "../components/home/ProductShowcase";
import ManufacturingGallery from "../components/home/ManufacturingGallery";
import ApplicationsSection from "../components/home/ApplicationsSection";
import ClientsStrip from "../components/home/ClientsStrip";
import GlobalReachSection from "../components/home/GlobalReachSection";
import ContactCta from "../components/home/ContactCta";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseSection />
      <AboutPreview />
      <ProductShowcase />
      <ManufacturingGallery />
      <ApplicationsSection />
      <ClientsStrip />
      <GlobalReachSection />
      <ContactCta />
    </>
  );
}
