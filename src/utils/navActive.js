export function isNavActive(pathname, href) {
  if (pathname === href) return true;
  if (href === "/products" && pathname.startsWith("/products")) return true;
  if (href === "/contact" && pathname.startsWith("/contact")) return true;
  return false;
}
