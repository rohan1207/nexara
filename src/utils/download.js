export function productDownloadUrl(product) {
  const file = product.downloadFile ?? product.download?.replace(/^\/downloads\//, "");
  if (!file) return "#";
  if (file.startsWith("/")) return file;
  return `/downloads/${encodeURIComponent(file)}`;
}

export function productDownloadFilename(product) {
  const file = product.downloadFile ?? product.download?.replace(/^\/downloads\//, "");
  if (file && !file.startsWith("/")) return file;
  return `nexara-${product.id}.pdf`;
}
