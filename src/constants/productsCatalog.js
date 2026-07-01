import { productImg } from "./images";

export const productCategories = [
  { id: "all", label: "All Products" },
  { id: "flexible", label: "Flexible Couplings" },
  { id: "servo", label: "Servo & Bellow" },
  { id: "gear", label: "Gear & Flange" },
  { id: "locking", label: "Locking & Handling" },
];

export const productCatalog = [
  {
    id: "rotex-gr",
    title: "Flexible Jaw Couplings — ROTEX® GR Series (KTR)",
    description:
      "The ROTEX® GR is KTR's flagship flexible jaw coupling, a three piece design used across the widest range of general industrial drives. The elastomer spider (available in multiple Shore hardness grades) absorbs vibration, compensates misalignment and electrically insulates the drive train.",
    image: productImg(50),
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
    title: "Backlash-Free Jaw Couplings — ROTEX® GS Series (KTR)",
    description:
      "The ROTEX® GS is the servo-grade variant of the ROTEX family engineered for zero backlash. The preloaded Hytrel® elastomer spider ensures precision positioning in CNC, servo and motion control applications.",
    image: productImg(51),
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
    title: "Metal Bellow Couplings — TOOLFLEX® Series (KTR)",
    description:
      "TOOLFLEX® is KTR's all-metal bellow coupling for the most demanding servo and precision drive applications. The stainless steel multi-layer bellow delivers zero backlash, high torsional stiffness and low mass moment of inertia with no elastomer element.",
    image: productImg(52),
    downloadFile: "Toolflex Coupling Catalog.pdf",
    category: "servo",
    tag: "KTR · TOOLFLEX®",
    features: [
      "Sizes 5 to 65, torque range from 0.1 Nm to 600 Nm",
      "Bellow types: S (4-layer, compact, higher stiffness) and M (6-layer, longer shaft distances)",
      "Hub options: setscrew, clamping, taper KN, flange, shell, axial plug-in (PI), intermediate shaft (ZR)",
      "Maximum speed up to 47,700 rpm (size 5)",
      "Temperature range: up to 200°C. Fatigue-resistant, media-resistant metal coupling",
      "Hub materials: aluminium (standard); steel (sizes 55/65 welded to bellow)",
    ],
  },
  {
    id: "radex-nc",
    title: "Servo Laminae Couplings — RADEX®-NC Series (KTR)",
    description:
      "RADEX®-NC is KTR's all metal laminae coupling for servo technology, torsionally rigid with stainless steel laminas that remain soft in bending. It compensates shaft displacements while maintaining zero backlash and is ATEX certified.",
    image: productImg(53),
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
    id: "bowex-gearex",
    title: "Gear Couplings — BoWex® & GEARex® Series (KTR)",
    description:
      "KTR's gear coupling range covers torsionally stiff, misalignment-compensating couplings from medium industrial to ultra-heavy-duty applications. BoWex® uses curved-tooth technology; GEARex® is the all-steel high-torque variant for the heaviest drives.",
    image: productImg(54),
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
    title: "Flange Couplings — BoWex® Flange Series (KTR)",
    description:
      "KTR's flange coupling programme covers torsionally stiff through highly flexible flange-mounted couplings for pumps, motors and drive trains requiring flange connections.",
    image: productImg(55),
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
    title: "Flexible Pin & Bush Couplings — POLY-NORM® & REVOLEX® (KTR)",
    description:
      "General purpose flexible couplings for standard industrial drives. POLY-NORM® covers light to medium industrial applications; REVOLEX® handles heavier drives with higher torque capacity.",
    image: productImg(56),
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
    title: "Precision Joints — Series G, H & X (KTR)",
    description:
      "KTR's precision universal joints per DIN 808 available with plain bearings (Series G), needle bearings (Series H) and fully stainless steel construction (Series X) for corrosion-resistant applications.",
    image: productImg(57),
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
    title: "Keyless Locking Assemblies — AutoLock DS Series",
    description:
      "AutoLock is an Indian brand of keyless locking assemblies, a cost-effective, zero-backlash shaft hub connection system that eliminates traditional feather keyways. Available in 13 model variants (DS-100 through DS-700) covering internal and external clamping elements, hollow shafts and multi-shaft configurations.",
    image: productImg(58),
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
    title: "Ball Transfer Units — Alwayse Engineering",
    description:
      "Alwayse Engineering (est. 1939, Birmingham, UK) is the originator of the ball transfer unit, a multi-directional material handling system enabling heavy loads to be moved with minimal effort in any direction. Used in assembly lines, air cargo, press shops and specialist handling systems.",
    image: productImg(59),
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

export function getProductById(id) {
  return productCatalog.find((p) => p.id === id) ?? null;
}

export function getRelatedProducts(currentId, limit = 6) {
  return productCatalog.filter((p) => p.id !== currentId).slice(0, limit);
}
