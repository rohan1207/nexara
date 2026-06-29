import { productImg } from "./images";

export const productsBySlug = {
  "loading-arms": {
    slug: "loading-arms",
    title: "Loading Arms",
    subtitle: "Loading & Unloading Arm Systems",
    tagline: "Precision fluid transfer for terminals, refineries & industrial plants",
    heroImage: productImg(100),
    images: [
      productImg(101),
      productImg(102),
    ],
    intro: [
      "We are leading Manufacturer, Supplier, Exporter of a wide range of Loading Arms, Loading Arm Systems, Unloading Arms, and Unloading Arm Systems for industrial applications. Our setup is situated in Pune, Maharashtra, India. Majorly we serve our products to customers in Saudi Arabia.",
      "These are well-suited for transferring petroleum products, asphalt, LPG, ammonia, solvents, acids, alkalies, hazardous corrosive liquids, milk and edible oils etc. Steelfab System eliminates the expensive, bulky, clumsy use of hose pipe while offering reduced labour cost and user-friendly features.",
      "Steelfab System is equipped with fully adjustable balancing mechanism and 360° swiveling. Swivel joints rotation is smooth and torque free — avoiding operational fatigue.",
    ],
    sections: [
      {
        id: "features",
        title: "Features",
        type: "list",
        items: [
          "Simple trouble free operations",
          "Reduced labour cost",
          "No spillage, hence zero wastage",
          "Available in various materials of construction & sizes",
          "Pantograph style and cantilever style",
          "Repairable in the field",
          "Hazardous liquids can be handled safely",
          "Do not pollute the environment",
          "No recurring cost of hose pipes",
        ],
      },
      {
        id: "specification",
        title: "Specification",
        type: "specs",
        items: [
          { label: "Materials", value: "Carbon Steel, Aluminum, SS316, SS316L, SS304, 304L / SS304L or as per compatibility" },
          { label: "Sizes", value: '1", 1½", 2", 2½", 3", 4" & 6" — other sizes on request' },
          { label: "Balancing", value: "By spring box or by counter weight" },
        ],
      },
      {
        id: "accessories",
        title: "Optional Accessories",
        type: "list",
        items: [
          "Ball Valve, Valve Automation Systems, Drain Valve, Vacuum breaker",
          "Vapour Recovery systems, Bellows Assembly, QRC",
          "Locking device in working position",
          "Overfill protection system to avoid spillage during filling",
          "Sensing device to avoid accidental removal of loading arm from tanker (Junction Box, Annunciator, Hooter, Light Indicator)",
        ],
      },
      {
        id: "elastomers",
        title: "Elastomers",
        type: "text",
        content: "Nitrile, Neoprene, Viton, PTFE, EPDM or as per compatibility.",
      },
      {
        id: "applications",
        title: "Applications",
        type: "tags",
        items: [
          "Oil Terminals / Depots",
          "Tank Farms",
          "Petrochemical / Chemical Complexes",
          "Refineries",
          "Edible Oil Plants",
          "Fertilizer Plants",
          "Milk Dairies & many others",
        ],
      },
    ],
    gallery: Array.from({ length: 6 }, (_, i) => ({
      src: productImg(110 + i),
      title: `Loading Arms ${i + 1}`,
    })),
  },

  "unloading-arms": {
    slug: "unloading-arms",
    title: "Unloading Arms Systems",
    subtitle: "Unloading Arm Systems",
    tagline: "Safe, efficient unloading for bulk liquid transfer",
    heroImage: productImg(120),
    images: [productImg(121), productImg(122)],
    intro: [
      "We are leading Manufacturer, Supplier, Exporter of Unloading Arms and Unloading Arm Systems for industrial applications from Pune, Maharashtra, India — serving customers in Saudi Arabia and worldwide.",
      "Steelfab unloading systems are designed for safe transfer of petroleum products, LPG, chemicals and edible liquids with zero spillage, fully adjustable balancing and smooth 360° swivel operation.",
    ],
    sections: [
      {
        id: "features",
        title: "Features",
        type: "list",
        items: [
          "Simple trouble free operations",
          "Reduced labour cost",
          "No spillage — zero wastage",
          "Field repairable construction",
          "Hazardous liquid handling",
          "Environment friendly — no hose recurring cost",
        ],
      },
      {
        id: "specification",
        title: "Specification",
        type: "specs",
        items: [
          { label: "Materials", value: "Carbon Steel, Aluminum, SS316, SS316L, SS304 or as per compatibility" },
          { label: "Sizes", value: '1" to 6" and custom sizes' },
          { label: "Balancing", value: "Spring box or counter weight" },
        ],
      },
      {
        id: "applications",
        title: "Applications",
        type: "tags",
        items: ["Oil Terminals", "Tank Farms", "Refineries", "Chemical Plants", "LPG Facilities", "Edible Oil Plants"],
      },
    ],
    gallery: Array.from({ length: 4 }, (_, i) => ({
      src: productImg(130 + i),
      title: `Unloading Arms ${i + 1}`,
    })),
  },

  "floating-suction": {
    slug: "floating-suction",
    title: "Floating Suction Assemblies",
    subtitle: "Contamination-free transfer from storage tanks",
    tagline: "Draw clean product from the top surface of stored liquids",
    heroImage: productImg(140),
    images: [productImg(141), productImg(142)],
    intro: [
      "We are leading Manufacturer, Supplier, Exporter of Floating Suction Assemblies for industrial applications from Pune, Maharashtra, India — majorly serving customers in Saudi Arabia.",
      "Steelfab Engineering manufactures Floating Suction Assemblies for horizontal or vertical above-ground storage tanks where little or no contamination can be tolerated. The assembly floats near the top liquid surface for contamination-free transfer. Designed for long, trouble-free life and nearly maintenance free operation.",
      "We also provide on-site installation and commissioning service or assistance for installation and commissioning.",
    ],
    sections: [
      {
        id: "features",
        title: "Features",
        type: "list",
        items: [
          "Single or double swivel joint type — according to tank size",
          "Various sizes available according to tank characteristics",
          "Permanently lubricated swivel joints",
          "Suitable for fixed roof, external floating roof and internal floating roof tanks",
        ],
      },
      {
        id: "specification",
        title: "Specification",
        type: "specs",
        items: [
          { label: "Materials", value: "Carbon Steel, Aluminum, SS316, SS316L, SS304, 304L or as per compatibility" },
        ],
      },
      {
        id: "benefits",
        title: "Benefits",
        type: "list",
        items: [
          "Maintenance free",
          "Long service life",
          "Decrease maintenance of filter and operators",
          "Reliable, secure and uncontaminated transfer",
          "Smooth controlled operations",
        ],
      },
      {
        id: "advantages",
        title: "Advantages",
        type: "list",
        items: [
          "All components pass through a standard tank shell manhole",
          "Arm cannot lock in vertical position — restraining wire rope provided",
          "Air escape provision at highest point during tank filling",
          "Swivel joints designed for submerged service",
          "Rests on supports at low level — avoids sediment contact",
          "Dual float chambers — puncture redundancy",
        ],
      },
      {
        id: "installation",
        title: "Installation Overview",
        type: "steps",
        items: [
          "Open packing & verify items as per packing slip",
          "Take all items inside the tank",
          "Lay items as per General Arrangement drawing",
          "Assemble per drawing (serial numbers marked on components)",
          "Hydro test with blind flange on baffle plate (customer scope)",
          "Position floats for buoyancy as product enters tank",
          "Unit ready for use",
        ],
      },
      {
        id: "applications",
        title: "Applications",
        type: "tags",
        items: [
          "Oil & Gas — Storage Tanks",
          "Chemical Industries",
          "Food Industries — Oil & Beverage Storage",
          "Ground Vertical Storage Tanks",
        ],
      },
    ],
    gallery: Array.from({ length: 6 }, (_, i) => ({
      src: productImg(150 + i),
      title: `Floating Suction ${i + 1}`,
    })),
  },

  "prover-tanks": {
    slug: "prover-tanks",
    title: "Prover Tanks",
    subtitle: "Calibration & measurement accuracy",
    tagline: "Portable prover tanks from 50 L to 5000 L capacity",
    heroImage: productImg(160),
    images: [productImg(161), productImg(162)],
    intro: [
      "We are leading Manufacturer, Supplier, Exporter of Prover Tanks for industrial applications from Pune, Maharashtra, India — serving customers in Saudi Arabia.",
      "Steelfab Engineering offers Prover tanks of capacity 50 Ltrs. to 5000 Ltrs with variety of materials and designs as per Indian and International standards under certification of weights and measures.",
      "We offer stationary as well as mobile prover tanks for checking commercial bulk measures, vehicle tanks, bulk meters etc. Easy to use, reliable and low cost way to measure output accuracy of liquid metering equipment.",
      "For companies concerned with fairness and accuracy when liquids are sold, periodic calibration of measuring devices is essential. Prover tanks are portable and prove accuracy on site.",
    ],
    sections: [
      {
        id: "ordering",
        title: "Ordering Parameters",
        type: "specs",
        items: [
          { label: "Materials", value: "AISI 304, AISI 304L, AISI 316, AISI 316L, IS2062 GR B" },
          { label: "Capacity", value: "50L, 100L, 200L, 500L, 1000L, 1500L, 2000L, 5000L" },
          { label: "Connections", value: 'Inlet 3" & above; Outlet 2", 3", 4" or specified' },
          { label: "Types", value: "T1 Fixed Prover Tanks, T2 Mobile Prover Tanks" },
          { label: "Loading", value: "L1 Top loading (one valve), L2 Bottom loading (two valves)" },
        ],
      },
      {
        id: "accessories",
        title: "Accessories",
        type: "list",
        items: [
          "Decanting pump and motor with control panel",
          "Fixed hose — 3 metres",
          "DOL starter for motor",
          "Temperature gauge (3 locations)",
          "GSM Based Tank Level Indicator & Transmitter (KGTL-M, KGTL-C models)",
        ],
      },
      {
        id: "operating",
        title: "Operating Principle",
        type: "paragraph",
        content:
          "The system works on variable resistance — sensor contains reed switches & resistors forming a potentiometer. As the float travels, resistance changes and output varies in 4–20 mA range. GSM modem transmits tank level via SMS to pre-stored numbers. KGTL-C model interfaces with PC for data logging.",
      },
      {
        id: "applications",
        title: "Typical Applications",
        type: "tags",
        items: [
          "Fuel Pumps",
          "Petrochemical Industry",
          "Pharmaceutical Industry",
          "Food Processing",
          "Chemical Fertilizer Industry",
        ],
      },
    ],
    gallery: Array.from({ length: 6 }, (_, i) => ({
      src: productImg(170 + i),
      title: `Prover Tank ${i + 1}`,
    })),
  },

  "swivel-joints": {
    slug: "swivel-joints",
    title: "Swivel Joints",
    subtitle: "Smooth, torque-free rotation",
    tagline: "Reliable rotary connection for fluid transfer systems",
    heroImage: productImg(180),
    images: [productImg(181), productImg(182)],
    intro: [
      "We are leading Manufacturer, Supplier, Exporter of Swivel Joints from Pune, Maharashtra, India — serving Saudi Arabia and global markets.",
      "Swivel joints rotation is smooth and torque free. This feature avoids operational fatigue. Used for transferring all kinds of liquids and gases from stationary pipe/tube to rotary pipe/tube or vice versa.",
    ],
    sections: [
      {
        id: "features",
        title: "Features",
        type: "list",
        items: [
          "100% penetration welding — meets ASME requirements",
          "Precision ball & ball groove alignment",
          "Double race design for trouble free alignment",
          "Primary and secondary seals prevent product entry into bearing chamber",
          "Atmospheric seal keeps away dirt and contaminants",
          "Three piece construction for easy seal replacement",
          "Hardened ball grooves with leak detection port",
        ],
      },
      {
        id: "specification",
        title: "Specification",
        type: "specs",
        items: [
          { label: "Pressure", value: "Up to 20 kg/cm²" },
          { label: "Temperature", value: "120°C" },
          { label: "Speed", value: "Less than 30 RPM" },
          { label: "Sizes", value: '3/4", 1", 1½", 2", 2½", 3", 4", 6", 8", 12", 16" — others on request' },
          { label: "Materials", value: "Carbon Steel, Aluminum, SS316/316L, SS304/304L, PTFE Lined or as per compatibility" },
        ],
      },
      {
        id: "applications",
        title: "Area of Application",
        type: "tags",
        items: [
          "Floating Roof Tankages",
          "Petroleum Depots / Terminals",
          "Floating Suction Assemblies",
          "Loading / Unloading Arms",
          "LPG Bottling Plants",
          "Aviation Refuellers",
          "Hydraulic Equipment",
          "Roof Drain Systems",
        ],
      },
    ],
    gallery: Array.from({ length: 6 }, (_, i) => ({
      src: productImg(190 + i),
      title: `Swivel Joint ${i + 1}`,
    })),
  },

  "test-aiders": {
    slug: "test-aiders",
    title: "Test Aiders",
    subtitle: "Testing & support equipment",
    tagline: "Precision equipment for loading arm systems",
    heroImage: productImg(200),
    images: [productImg(201), productImg(202)],
    intro: [
      "We are leading Manufacturer, Supplier, Exporter of Test Aiders from Pune, Maharashtra, India — serving customers in Saudi Arabia.",
      "Steelfab Engineering provides Test Aiders designed to support installation, maintenance and performance verification of loading arm and fluid handling systems.",
    ],
    sections: [
      {
        id: "overview",
        title: "Overview",
        type: "list",
        items: [
          "Engineered for industrial fluid handling applications",
          "Supports SEPL loading arm and unloading systems",
          "Built to Steelfab quality and ISO standards",
          "Custom configurations available on request",
        ],
      },
    ],
    gallery: Array.from({ length: 8 }, (_, i) => ({
      src: productImg(210 + i),
      title: `Test Aiders ${i + 1}`,
    })),
  },
};

export const allProducts = Object.values(productsBySlug);

export function getProductBySlug(slug) {
  return productsBySlug[slug] ?? null;
}
