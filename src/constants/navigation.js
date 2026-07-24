import { productCatalog, getProductNavLabel, buildProductHref } from "./productsCatalog";

export const productLinks = productCatalog.map((product) => ({
  label: getProductNavLabel(product),
  href: `/products/${product.id}`,
  variants:
    product.variants?.length > 1
      ? product.variants.map((variant) => ({
          label: variant.label,
          href: buildProductHref(product.id, variant.id),
        }))
      : [],
}));

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products", children: productLinks },
  { label: "Technical Specs", href: "/specifications" },
  // { label: "Clients", href: "/clients" },
  { label: "Contact", href: "/contact" },
];

export const ctaItem = { label: "Send Enquiry", href: "/contact#enquiry" };
