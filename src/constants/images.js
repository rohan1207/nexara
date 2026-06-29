export const productImages = [
  "/product1.jpeg",
  "/product2.jpeg",
  "/product3.jpg",
  "/product4.jpg",
  "/product5.png",
];

const SHUFFLE = [
  3, 0, 4, 1, 2, 4, 0, 3, 2, 1, 0, 4, 3, 2, 1, 0, 4, 3, 1, 2,
  0, 3, 4, 2, 1, 3, 0, 4, 2, 1, 4, 0, 3, 2, 1, 4, 0, 3, 1, 2,
  4, 3, 0, 1, 2, 0, 4, 3, 1, 2, 4, 0, 3, 2, 1, 3, 4, 0, 2, 1,
];

export const productImg = (seed = 0) => productImages[SHUFFLE[Math.abs(seed) % SHUFFLE.length]];

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
  productsHero: productImg(29),
};

export function getProductImage(productId) {
  const map = {
    "top-loading": images.products.topLoading,
    "bottom-loading": images.products.bottomLoading,
    "test-aiders": images.products.testAiders,
    "ptfe-lined": images.products.ptfe,
  };
  return map[productId] || images.products.topLoading;
}
