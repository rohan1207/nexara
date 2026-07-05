import { publicImage } from "./images";

export const productCategories = [
  { id: "all", label: "All Products" },
  { id: "flexible", label: "Flexible Couplings" },
  { id: "servo", label: "Servo & Bellow" },
  { id: "gear", label: "Gear & Flange" },
  { id: "locking", label: "Locking & Handling" },
];

const AUTOLOCK_MORE_MODELS = [
  "Locking Assemblies/Clampex KTR 100.png",
  "Locking Assemblies/Clampex KTR 105.png",
  "Locking Assemblies/Clampex KTR 150.png",
  "Locking Assemblies/Clampex KTR 200.png",
  "Locking Assemblies/Clampex KTR 201.png",
  "Locking Assemblies/Clampex KTR 203.png",
  "Locking Assemblies/Clampex KTR 206.png",
  "Locking Assemblies/Clampex KTR 225.png",
  "Locking Assemblies/Clampex KTR 603.png",
  "Locking Assemblies/Clampex KTR 620.png",
  "Locking Assemblies/Clampex KTR 700.png",
].map(publicImage);

export const productCatalog = [
  {
    id: "rotex-gr",
    navLabel: "ROTEX® GR",
    title: "Flexible Jaw Couplings — ROTEX® GR Series (KTR)",
    description:
      "The ROTEX® GR is KTR's flagship flexible jaw coupling, a three piece design used across the widest range of general industrial drives. The elastomer spider absorbs vibration, compensates misalignment and electrically insulates the drive train.",
    image: publicImage("Product Images/Rotex GR.png"),
    downloadFile: "Rotex Flexible Coupling GR Catalogue.pdf",
    category: "flexible",
    tag: "KTR · ROTEX® GR",
    features: [
      "Sizes 14 to 180, torque range up to 34,000 Nm",
      "Spider options: 80 Shore A, 92 Shore A T-PUR®, 98 Shore A T-PUR®, 64 Shore D",
      "Temperature range: -40°C to +120°C (T-PUR® spider, continuous)",
      "Wide hub type selection: keyway, clamping, spline bore, taper, flanged and split hub types",
      "ATEX approved (category 2G/2D) suitable for potentially explosive atmospheres",
      "Spider replacement without disturbing hub alignment for reduced downtime",
    ],
  },
  {
    id: "rotex-gs",
    navLabel: "ROTEX® GS",
    title: "Backlash-Free Jaw Couplings — ROTEX® GS Series (KTR)",
    description:
      "The ROTEX® GS is the servo-grade variant of the ROTEX family engineered for zero backlash. The preloaded Hytrel® elastomer spider ensures precision positioning in CNC, servo and motion control applications.",
    defaultVariant: "gs",
    variants: [
      { id: "gs", label: "GS", image: publicImage("Product Images/Rotex GS.png") },
      { id: "gs-mini", label: "GS Mini", image: publicImage("Product Images/Rotex GS Compact.png") },
    ],
    image: publicImage("Product Images/Rotex GS.png"),
    downloadFile: "ROTEX GS.pdf",
    category: "servo",
    tag: "KTR · ROTEX® GS",
    features: [
      "Sizes 5 to 90, torque range up to 8,000 Nm",
      "Hytrel® (polyester elastomer) spider preloaded for zero backlash operation",
      "High torsional stiffness ideal for positioning drives and indexing tables",
      "Temperature range: -40°C to +100°C",
      "Hub types: keyway (1.0), setscrew (1.1), plain bore (1.2), clamping ring (6.0/6.5)",
      "Spider replaceability without shaft disassembly",
    ],
  },
  {
    id: "toolflex",
    navLabel: "TOOLFLEX®",
    title: "Metal Bellow Couplings — TOOLFLEX® Series (KTR)",
    description:
      "TOOLFLEX® is KTR's all-metal bellow coupling for the most demanding servo and precision drive applications. The stainless steel multi-layer bellow delivers zero backlash, high torsional stiffness and low mass moment of inertia.",
    defaultVariant: "toolflex",
    variants: [
      { id: "toolflex", label: "Toolflex", image: publicImage("Product Images/Toolflex Image .png") },
      { id: "toolflex-mini", label: "Toolflex Mini", image: publicImage("Product Images/Toolflex Mini.png") },
    ],
    image: publicImage("Product Images/Toolflex Image .png"),
    downloadFile: "Toolflex Coupling Catalog.pdf",
    category: "servo",
    tag: "KTR · TOOLFLEX®",
    features: [
      "Sizes 5 to 65, torque range from 0.1 Nm to 600 Nm",
      "Bellow types: S (4-layer, compact) and M (6-layer, longer shaft distances)",
      "Hub options: setscrew, clamping, taper KN, flange, shell, axial plug-in (PI), intermediate shaft (ZR)",
      "Maximum speed up to 47,700 rpm (size 5)",
      "Temperature range: up to 200°C. Fatigue-resistant, media-resistant metal coupling",
      "Hub materials: aluminium (standard); steel (sizes 55/65 welded to bellow)",
    ],
  },
  {
    id: "radex-nc",
    navLabel: "RADEX®-NC",
    title: "Servo Laminae Couplings — RADEX®-NC Series (KTR)",
    description:
      "RADEX®-NC is KTR's all metal laminae coupling for servo technology, torsionally rigid with stainless steel laminas that remain soft in bending. It compensates shaft displacements while maintaining zero backlash and is ATEX certified.",
    defaultVariant: "radex-nc-dk",
    variants: [
      { id: "radex-nc-dk", label: "Radex NC DK", image: publicImage("Product Images/Radex NC DK.png") },
      { id: "radex-nc-ek", label: "Radex NC EK", image: publicImage("Product Images/RADEX NC EK.png") },
    ],
    image: publicImage("Product Images/Radex NC DK.png"),
    downloadFile: "Radex NC & Countex Product Catalog.pdf",
    category: "servo",
    tag: "KTR · RADEX®-NC",
    features: [
      "Sizes 5 to 36 (standard range), torque up to 510 Nm (expandable range available)",
      "Types: DK (double-cardanic) and EK (single-cardanic)",
      "Torsion spring stiffness: up to 280,000 Nm/rad (size 36 DK)",
      "ATEX certified: EU Directive 2014/34/EU, Category 2G/2D Zone 1, 2, 21, 22",
      "Temperature range: up to 200°C. No elastomer, fully all-metal",
      "Recommended for worm gear pairs with gear ratios below i = 8",
    ],
  },
  {
    id: "radex-n-rigiflex",
    navLabel: "RADEX®-N / RIGIFLEX®",
    title: "Steel Laminae Couplings — RADEX®-N / RIGIFLEX®-N / RIGIFLEX®-HP Series (KTR)",
    description:
      "KTR's steel laminae coupling range covers torsionally stiff all-metal designs for general industrial and heavy-duty drives. RADEX®-N and RIGIFLEX® variants offer high torque capacity with excellent misalignment compensation.",
    defaultVariant: "radex-n",
    variants: [
      { id: "radex-n", label: "Radex N", image: publicImage("Product Images/Radex N.png") },
      { id: "rigiflex", label: "Rigiflex", image: publicImage("Product Images/Rigiflex.png") },
    ],
    image: publicImage("Product Images/Radex N.png"),
    gallery: [publicImage("Product Images/Radex NNZ.png")],
    galleryTitle: "Related models",
    downloadFile: "Radex NC & Countex Product Catalog.pdf",
    category: "servo",
    tag: "KTR · RADEX®-N / RIGIFLEX®",
    features: [
      "All-metal laminae construction for torsionally stiff power transmission",
      "RADEX®-N series for standard industrial shaft connections",
      "RIGIFLEX®-N and RIGIFLEX®-HP for higher torque and demanding applications",
      "Compensates angular, radial and axial shaft misalignment",
      "Maintenance-free operation with no elastomer wear elements",
      "Suitable for pumps, compressors, mixers and general drive engineering",
    ],
  },
  {
    id: "bowex-gearex",
    navLabel: "BoWex® & GEARex®",
    title: "Gear Couplings — BoWex® & GEARex® Series (KTR)",
    description:
      "KTR's gear coupling range covers torsionally stiff, misalignment-compensating couplings from medium industrial to ultra-heavy-duty applications. BoWex® uses curved-tooth technology; GEARex® is the all-steel high-torque variant.",
    defaultVariant: "bowex",
    variants: [
      { id: "bowex", label: "BoWex", image: publicImage("Product Images/Bowex.png") },
      { id: "gearex", label: "GEARex", image: publicImage("Product Images/Gearex.png") },
    ],
    image: publicImage("Product Images/Bowex.png"),
    downloadFile: "Bowex and Gear Product Catalog.pdf",
    category: "gear",
    tag: "KTR · BoWex® & GEARex®",
    features: [
      "BoWex®: up to 2,500 Nm. AGMA rated, maintenance-free, axial plug-in",
      "Suitable for pump drives, general engineering and food industry",
      "GEARex®: up to 2,750,000 Nm. All steel construction for heavy engineering, cement, transport and logistics",
      "Multiple configurations: shaft-to-shaft, flange-to-shaft, intermediate shaft, cardan shaft connections",
      "ATEX approval available for BoWex® range",
    ],
  },
  {
    id: "bowex-flange",
    navLabel: "BoWex® Flange",
    title: "Flange Couplings — BoWex® Flange Series (KTR)",
    description:
      "KTR's flange coupling programme covers torsionally stiff through highly flexible flange-mounted couplings for pumps, motors and drive trains requiring flange connections.",
    defaultVariant: "bowex-flange",
    variants: [
      {
        id: "bowex-flange",
        label: "BoWex Flange",
        image: publicImage("Product Images/Bowex Flange Couplings.png"),
      },
    ],
    image: publicImage("Product Images/Bowex Flange Couplings.png"),
    downloadFile: "Bowex Flange Coupling Product Catalog.pdf",
    category: "gear",
    tag: "KTR · Flange",
    features: [
      "BoWex® FLE-PA/FLE-PAC: torsionally stiff, extremely short design shaft dia. 20–125 mm",
      "MONOLASTIC®: flexible flange coupling max. radial displacement 1 mm, shaft dia. 20–60 mm",
      "BoWex-ELASTIC®: highly flexible up to 9.5 mm radial displacement, shaft dia. 21–275 mm",
      "Suitable for pump mounting flange combinations and cardan shaft configurations",
    ],
  },
  {
    id: "polynorm-revolex",
    navLabel: "POLY-NORM® & REVOLEX®",
    title: "Flexible Pin & Bush Couplings — POLY-NORM® & REVOLEX® (KTR)",
    description:
      "General purpose flexible couplings for standard industrial drives. POLY-NORM® covers light to medium industrial applications; REVOLEX® handles heavier drives with higher torque capacity.",
    defaultVariant: "polynorm",
    variants: [
      { id: "polynorm", label: "Polynorm", image: publicImage("Product Images/Polynorm .png") },
      { id: "revolex", label: "Revolex", image: publicImage("Product Images/Revolex.png") },
    ],
    image: publicImage("Product Images/Polynorm .png"),
    downloadFile: "PolyNorm & Revolex Product Catalog.pdf",
    category: "flexible",
    tag: "KTR · POLY-NORM®",
    features: [
      "POLY-NORM® sizes 28 to 150 for general drives: pumps, compressors, fans",
      "Torsionally flexible effective damping of shock and torsional vibrations",
      "Easy interchangeability with many market standard flexible couplings",
    ],
  },
  {
    id: "precision-joints",
    navLabel: "Precision Joints",
    title: "Precision Joints — Series G, H & X (KTR)",
    description:
      "KTR's precision universal joints per DIN 808 available with plain bearings (Series G), needle bearings (Series H) and fully stainless steel construction (Series X) for corrosion-resistant applications.",
    defaultVariant: "precision-joint",
    variants: [
      {
        id: "precision-joint",
        label: "Precision Joint",
        image: publicImage("Product Images/Precision Joints.png"),
      },
    ],
    image: publicImage("Product Images/Precision Joints.png"),
    downloadFile: "KTR Precision Joints.pdf",
    category: "flexible",
    tag: "KTR · DIN 808",
    features: [
      "Series G: plain bearings max. 1,000 rpm, absorbs shock loads, high torque capacity at low speeds",
      "Series H: needle bearings max. 4,000 rpm, maintenance-free (permanently lubricated), reversing operation",
      "Series X: fully stainless steel AISI 1.4301 max. 300 rpm for corrosive and food-industry environments",
      "Max. diffraction angle: 45° (single joint), 90° (double joint)",
    ],
  },
  {
    id: "autolock-ds",
    navLabel: "AutoLock DS",
    title: "Keyless Locking Assemblies — AutoLock DS Series",
    description:
      "AutoLock is an Indian brand of keyless locking assemblies, a cost-effective, zero-backlash shaft hub connection system that eliminates traditional feather keyways. DS-250 and DS-400 are the most commonly specified models.",
    defaultVariant: "ds-400",
    variants: [
      { id: "ds-250", label: "DS 250", image: publicImage("Locking Assemblies/Clampex KTR 250.png") },
      { id: "ds-400", label: "DS 400", image: publicImage("Locking Assemblies/Clampex KTR 400.png") },
    ],
    image: publicImage("Locking Assemblies/Clampex KTR 400.png"),
    gallery: AUTOLOCK_MORE_MODELS,
    galleryTitle: "More DS series models",
    downloadFile: "AutoLock Locking Assemblies_Himalaya Traders.pdf",
    category: "locking",
    tag: "AutoLock · DS Series",
    features: [
      "Model range: DS-100, DS-105, DS-150, DS-200, DS-201, DS-203, DS-206, DS-225, DS-250, DS-400, DS-603, DS-620, DS-700",
      "Internal diameter range: 5 mm to 1,000 mm (model-dependent)",
      "Zero backlash cone ring or internal/external clamping element designs",
      "Direct equivalent to Ringfeder, Ringspann, Ecoloc, Sitlock, B-Loc, Clampex, Climax, MAV",
      "Custom-made locking assemblies available on request",
      "Reusable long-term investment with easy assembly and disassembly",
    ],
  },
  {
    id: "alwayse-btu",
    navLabel: "Alwayse BTU",
    title: "Ball Transfer Units — Alwayse Engineering",
    description:
      "Alwayse Engineering is the originator of the ball transfer unit, a multi-directional material handling system enabling heavy loads to be moved with minimal effort in any direction.",
    defaultVariant: "ball-transfer-units",
    variants: [
      {
        id: "ball-transfer-units",
        label: "Ball Transfer Units",
        image: publicImage("Product Images/Alwayse Ball Transfer unit.png"),
      },
    ],
    image: publicImage("Product Images/Alwayse Ball Transfer unit.png"),
    downloadFile: "Alwayse Ball Transfer Units Catalog.pdf",
    category: "locking",
    tag: "Alwayse · BTU",
    features: [
      "Material types: Type 13 (carbon steel), Type 14 (nylon load ball), Type 15 (fully stainless steel, wash-down/food-safe), Type 16 (stainless balls, zinc-plated housing)",
      "Breakaway friction: 1–1.5% of load (steel, without seals) minimal effort for heavy loads",
      "Max. conveying speed: 1 m/s (steel), 0.25 m/s (nylon)",
      "Pre-lubricated and maintenance-free in standard conditions",
      "Woollen felt seals standard; resists ingress of dirt and swarf",
      "Ball table configurations: square pitch, diamond pitch, elongated pitch, elongated diagonal",
    ],
  },
];

export function getProductNavLabel(product) {
  return product.navLabel ?? product.title.split("—")[0].trim();
}

export function getProductVariant(product, variantId) {
  if (!product.variants?.length) return null;
  if (variantId) {
    return product.variants.find((v) => v.id === variantId) ?? product.variants[0];
  }
  return product.variants.find((v) => v.id === product.defaultVariant) ?? product.variants[0];
}

export function getProductDisplayImage(product, variantId) {
  return getProductVariant(product, variantId)?.image ?? product.image;
}

export function getProductById(id) {
  return productCatalog.find((p) => p.id === id) ?? null;
}

export function getRelatedProducts(currentId, limit = 6) {
  return productCatalog.filter((p) => p.id !== currentId).slice(0, limit);
}

export function buildProductHref(productId, variantId) {
  if (!variantId) return `/products/${productId}`;
  return `/products/${productId}?variant=${variantId}`;
}
