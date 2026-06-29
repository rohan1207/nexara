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
      "KTR's flagship flexible jaw coupling — three-piece design with elastomer spider for vibration damping, misalignment compensation, and electrical insulation.",
    image: productImg(50),
    download: "/downloads/rotex-gr.pdf",
    category: "flexible",
    tag: "KTR · ROTEX® GR",
    features: ["Sizes 14–180, up to 34,000 Nm", "Multiple Shore hardness spiders", "ATEX approved", "Spider replaceable without hub disturbance"],
  },
  {
    id: "rotex-gs",
    title: "Backlash-Free Jaw Couplings — ROTEX® GS Series (KTR)",
    description:
      "Servo-grade ROTEX with preloaded Hytrel® spider for zero backlash in CNC, servo, and motion control applications.",
    image: productImg(51),
    download: "/downloads/rotex-gs.pdf",
    category: "servo",
    tag: "KTR · ROTEX® GS",
    features: ["Sizes 5–90, up to 8,000 Nm", "Zero backlash Hytrel® spider", "High torsional stiffness", "Up to 30,000 rpm"],
  },
  {
    id: "toolflex",
    title: "Metal Bellow Couplings — TOOLFLEX® Series (KTR)",
    description:
      "All-metal stainless steel bellow coupling for demanding servo drives — zero backlash, high stiffness, no elastomer element.",
    image: productImg(52),
    download: "/downloads/toolflex.pdf",
    category: "servo",
    tag: "KTR · TOOLFLEX®",
    features: ["0.1–600 Nm torque range", "Up to 47,700 rpm", "Up to 200°C", "S & M bellow types"],
  },
  {
    id: "radex-nc",
    title: "Servo Laminae Couplings — RADEX®-NC Series (KTR)",
    description:
      "All-metal laminae coupling for servo technology — torsionally rigid, zero backlash, ATEX certified.",
    image: productImg(53),
    download: "/downloads/radex-nc.pdf",
    category: "servo",
    tag: "KTR · RADEX®-NC",
    features: ["2.5–510 Nm", "DK & EK types", "Up to 280,000 Nm/rad stiffness", "All-metal, no elastomer"],
  },
  {
    id: "bowex-gearex",
    title: "Gear Couplings — BoWex® & GEARex® Series (KTR)",
    description:
      "Torsionally stiff gear couplings from medium industrial to ultra-heavy-duty — curved-tooth BoWex® and all-steel GEARex®.",
    image: productImg(54),
    download: "/downloads/bowex-gearex.pdf",
    category: "gear",
    tag: "KTR · BoWex® & GEARex®",
    features: ["BoWex® up to 2,500 Nm", "GEARex® up to 2,750,000 Nm", "Maintenance-free options", "ATEX available"],
  },
  {
    id: "bowex-flange",
    title: "Flange Couplings — BoWex® Flange Series (KTR)",
    description:
      "Flange-mounted couplings for pumps, motors, and drives — torsionally stiff to highly flexible configurations.",
    image: productImg(55),
    download: "/downloads/bowex-flange.pdf",
    category: "gear",
    tag: "KTR · Flange",
    features: ["BoWex® FLE-PA/PAC", "MONOLASTIC® flexible flange", "BoWex-ELASTIC® high flexibility", "Pump mounting combinations"],
  },
  {
    id: "polynorm-revolex",
    title: "Flexible Pin & Bush — POLY-NORM® & REVOLEX® (KTR)",
    description:
      "General-purpose flexible couplings for pumps, compressors, fans, and standard industrial drives.",
    image: productImg(56),
    download: "/downloads/polynorm-revolex.pdf",
    category: "flexible",
    tag: "KTR · POLY-NORM®",
    features: ["POLY-NORM® sizes 28–150", "Shock & vibration damping", "Easy interchangeability", "REVOLEX® for heavier drives"],
  },
  {
    id: "precision-joints",
    title: "Precision Joints — Series G, H & X (KTR)",
    description:
      "Universal joints per DIN 808 — plain bearing (G), needle bearing (H), and stainless steel (X) for corrosive environments.",
    image: productImg(57),
    download: "/downloads/precision-joints.pdf",
    category: "flexible",
    tag: "KTR · DIN 808",
    features: ["Series G: up to 1,000 rpm", "Series H: up to 4,000 rpm", "Series X: stainless AISI 1.4301", "45°/90° deflection angles"],
  },
  {
    id: "autolock-ds",
    title: "Keyless Locking Assemblies — AutoLock DS Series",
    description:
      "Indian-made keyless locking assemblies — zero-backlash shaft-hub connections in 13 model variants, 5 mm to 1,000 mm bore.",
    image: productImg(58),
    download: "/downloads/autolock-ds.pdf",
    category: "locking",
    tag: "AutoLock · DS Series",
    features: ["DS-100 to DS-700 models", "Zero backlash", "Ringfeder equivalent", "Custom assemblies available"],
  },
  {
    id: "alwayse-btu",
    title: "Ball Transfer Units — Alwayse Engineering",
    description:
      "Multi-directional ball transfer units for material handling — carbon steel, nylon, and stainless types since 1939.",
    image: productImg(59),
    download: "/downloads/alwayse-btu.pdf",
    category: "locking",
    tag: "Alwayse · BTU",
    features: ["Types 13, 14, 15, 16", "1–1.5% breakaway friction", "Pre-lubricated", "Food-safe stainless options"],
  },
];
