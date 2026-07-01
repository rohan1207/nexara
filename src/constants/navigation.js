import { productCatalog } from "./productsCatalog";

export const productLinks = productCatalog.map((p) => ({
  label: p.title.split("—")[0].trim(),
  href: `/products/${p.id}`,
}));

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/#products", children: productLinks },
  { label: "Technical Specs", href: "/specifications" },
  { label: "Clients", href: "/clients" },
  { label: "Contact", href: "/contact" },
];

export const ctaItem = { label: "Send Enquiry", href: "/contact#enquiry" };
