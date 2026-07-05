export const productImages = [
  "/product1.png",
  "/product2.png",
  "/product3.png",
  "/product4.png",
  "/product5.png",
];

const SHUFFLE = [
  3, 0, 4, 1, 2, 4, 0, 3, 2, 1, 0, 4, 3, 2, 1, 0, 4, 3, 1, 2,
  0, 3, 4, 2, 1, 3, 0, 4, 2, 1, 4, 0, 3, 2, 1, 4, 0, 3, 1, 2,
  4, 3, 0, 1, 2, 0, 4, 3, 1, 2, 4, 0, 3, 2, 1, 3, 4, 0, 2, 1,
];

export const productImg = (seed = 0) => productImages[SHUFFLE[Math.abs(seed) % SHUFFLE.length]];

/** Encode public folder paths (handles spaces in folder/file names). */
export function publicImage(relativePath) {
  if (!relativePath) return productImages[0];
  const normalized = relativePath.startsWith("/") ? relativePath : `/${relativePath}`;
  return normalized
    .split("/")
    .map((segment, index) => (index === 0 && segment === "" ? "" : encodeURIComponent(segment)))
    .join("/");
}

/** Client product photos in public/Product Images and public/Locking Assemblies */
export const productPhotos = {
  "rotex-gr": "Product Images/Rotex GR.png",
  "rotex-gs": "Product Images/Rotex GS.png",
  "toolflex": "Product Images/Toolflex Image .png",
  "radex-nc": "Product Images/Radex NC DK.png",
  "bowex-gearex": "Product Images/Bowex.png",
  "bowex-flange": "Product Images/Bowex Flange Couplings.png",
  "polynorm-revolex": "Product Images/Polynorm .png",
  "precision-joints": "Product Images/Precision Joints.png",
  "autolock-ds": "Locking Assemblies/Clampex KTR 400.png",
  "alwayse-btu": "Product Images/Alwayse Ball Transfer unit.png",
};

export const productGalleries = {
  "rotex-gs": ["Product Images/Rotex GS Compact.png"],
  "toolflex": ["Product Images/Toolflex Mini.png"],
  "radex-nc": [
    "Product Images/RADEX NC EK.png",
    "Product Images/Radex NNZ.png",
    "Product Images/Radex N.png",
  ],
  "bowex-gearex": ["Product Images/Gearex.png"],
  "polynorm-revolex": ["Product Images/Revolex.png"],
  "autolock-ds": [
    "Locking Assemblies/Clampex KTR 100.png",
    "Locking Assemblies/Clampex KTR 105.png",
    "Locking Assemblies/Clampex KTR 150.png",
    "Locking Assemblies/Clampex KTR 200.png",
    "Locking Assemblies/Clampex KTR 201.png",
    "Locking Assemblies/Clampex KTR 203.png",
    "Locking Assemblies/Clampex KTR 206.png",
    "Locking Assemblies/Clampex KTR 225.png",
    "Locking Assemblies/Clampex KTR 250.png",
    "Locking Assemblies/Clampex KTR 400.png",
    "Locking Assemblies/Clampex KTR 603.png",
    "Locking Assemblies/Clampex KTR 620.png",
    "Locking Assemblies/Clampex KTR 700.png",
  ],
};

export function getProductPhoto(productId) {
  return publicImage(productPhotos[productId] ?? productImages[0]);
}

export function getProductGallery(productId) {
  const main = productPhotos[productId];
  return (productGalleries[productId] ?? [])
    .filter((path) => path !== main)
    .map(publicImage);
}

export const images = {
  logo: "/logo.png",
  products: {
    topLoading: productImg(1),
    bottomLoading: productImg(2),
    testAiders: productImg(3),
    ptfe: productImg(4),
    floating: productImg(5),
    prover: productImg(6),
  },
  factory: [7, 8, 9, 10, 11].map(productImg),
  clients: [12, 13, 14, 15, 16, 17, 18].map(productImg),
  featuredClients: [
    { name: "HPCL", image: productImg(19) },
    { name: "Indian Oil", image: productImg(20) },
    { name: "Deepak Fertilisers", image: productImg(21) },
    { name: "Reliance Industries", image: productImg(22) },
    { name: "RCF", image: productImg(23) },
    { name: "SI Group", image: productImg(24) },
    { name: "Ministry of Defence", image: productImg(25) },
  ],
  about: productImg(26),
  specs: productImg(27),
  contact: productImg(28),
  productsHero: publicImage("Product Images/Rotex GR.png"),
};

export function getProductImage(productId) {
  return getProductPhoto(productId) || images.products.topLoading;
}
