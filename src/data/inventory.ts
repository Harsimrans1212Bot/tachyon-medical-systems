// Single source of truth for all inventory data across the site

export interface Machine {
  slug: string;
  name: string;
  category: string;
  manufacturer: string;
  price: string;
  condition: string;
  image: string;
  specifications: Record<string, string>;
  description: string;
  features: string[];
  warranty: string;
}

export interface Category {
  name: string;
  description: string;
  image: string;
  icon: string; // SVG path data only, not full JSX
}

// ─── Categories ──────────────────────────────────────────────────────────────

export const categories: Category[] = [
  {
    name: "CT Scanners",
    description: "Advanced computed tomography systems from leading manufacturers",
    image: "/ct-scanner.jpg",
    icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
  },
  {
    name: "MRI Systems",
    description: "High-field magnetic resonance imaging for precise diagnostics",
    image: "/mri.jpg",
    icon: "M21 12a9 9 0 11-18 0 9 9 0 0118 0z M9 12a3 3 0 116 0 3 3 0 01-6 0z",
  },
  {
    name: "PET-CT",
    description: "Combined PET and CT for advanced molecular imaging",
    image: "/ct-scanner.jpg",
    icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
  },
  {
    name: "Cath Labs",
    description: "Cardiac catheterization laboratories for interventional cardiology",
    image: "/cath-lab.jpg",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    name: "Mammography",
    description: "Advanced breast imaging systems for early detection",
    image: "/mammography.jpg",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    name: "Sonography/Ultrasound",
    description: "Advanced ultrasound imaging systems for diagnostic and obstetric applications",
    image: "/sonography.jpg",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    name: "ECG Systems",
    description: "Electrocardiogram systems for cardiac rhythm monitoring and diagnosis",
    image: "/ecg.jpg",
    icon: "M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    name: "Multi-Parameter Monitors",
    description: "Versatile patient monitoring systems for tracking multiple vital signs in real-time",
    image: "/multi-para-monitor.jpg",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
];

// ─── Machines ────────────────────────────────────────────────────────────────

export const allMachines: Machine[] = [
  // ── CT Scanners ──────────────────────────────────────────────────────────
  {
    slug: "ge-brightspeed-8",
    name: "GE BrightSpeed 8",
    category: "CT Scanners",
    manufacturer: "GE",
    price: "$120,000 - $180,000",
    condition: "Refurbished - Very Good",
    image: "/ct-scanner.jpg",
    specifications: {
      "Slice Count": "8-Slice",
      "Gantry Aperture": "70 cm",
      "Rotation Time": "0.5 - 2 seconds",
      "kVp Range": "80, 100, 120, 140 kVp",
      "Max Scan Length": "1800 mm",
      "Table Weight Capacity": "204 kg (450 lbs)",
    },
    description:
      "The GE BrightSpeed 8 delivers reliable 8-slice CT imaging with excellent image quality. Ideal for routine examinations with proven clinical performance and cost-effective operation.",
    features: [
      "Smart mA dose modulation",
      "HiLight Advantage detector",
      "Fast reconstruction times",
      "Comprehensive protocols library",
      "User-friendly interface",
    ],
    warranty: "12-Month Parts Warranty",
  },
  {
    slug: "ge-brightspeed-16",
    name: "GE BrightSpeed 16",
    category: "CT Scanners",
    manufacturer: "GE",
    price: "$150,000 - $220,000",
    condition: "Refurbished - Excellent",
    image: "/ct-scanner.jpg",
    specifications: {
      "Slice Count": "16-Slice",
      "Gantry Aperture": "70 cm",
      "Rotation Time": "0.5 - 2 seconds",
      "kVp Range": "80, 100, 120, 140 kVp",
      "Max Scan Length": "1800 mm",
      "Table Weight Capacity": "204 kg (450 lbs)",
    },
    description:
      "The GE BrightSpeed 16 provides enhanced 16-slice imaging capability with superior image quality and faster scan times. Perfect for mid-volume imaging centers.",
    features: [
      "Smart mA dose optimization",
      "HiLight Advantage detector technology",
      "Advanced reconstruction algorithms",
      "Comprehensive cardiac capabilities",
      "Streamlined workflow",
    ],
    warranty: "12-Month Parts Warranty",
  },
  {
    slug: "ge-lightspeed-8",
    name: "GE LightSpeed 8",
    category: "CT Scanners",
    manufacturer: "GE",
    price: "$80,000 - $130,000",
    condition: "Refurbished - Good",
    image: "/ct-scanner.jpg",
    specifications: {
      "Slice Count": "8-Slice",
      "Gantry Aperture": "70 cm",
      "Rotation Time": "0.5 - 2 seconds",
      "kVp Range": "80, 120, 140 kVp",
      "Max Scan Length": "1800 mm",
      "Table Weight Capacity": "204 kg (450 lbs)",
    },
    description:
      "The GE LightSpeed 8 is a dependable 8-slice helical CT scanner offering consistent image quality for routine clinical applications. Cost-effective solution for small to mid-size facilities.",
    features: [
      "Helical and axial scanning modes",
      "HiLight detector system",
      "User-friendly operation",
      "Reliable performance",
      "Established clinical protocols",
    ],
    warranty: "6-Month Parts Warranty",
  },
  {
    slug: "ge-lightspeed-16",
    name: "GE LightSpeed 16",
    category: "CT Scanners",
    manufacturer: "GE",
    price: "$100,000 - $160,000",
    condition: "Refurbished - Very Good",
    image: "/ct-scanner.jpg",
    specifications: {
      "Slice Count": "16-Slice",
      "Gantry Aperture": "70 cm",
      "Rotation Time": "0.5 - 2 seconds",
      "kVp Range": "80, 120, 140 kVp",
      "Max Scan Length": "1800 mm",
      "Table Weight Capacity": "204 kg (450 lbs)",
    },
    description:
      "The GE LightSpeed 16 provides enhanced multi-slice imaging with improved scan speed and image quality. Reliable platform for diverse clinical applications.",
    features: [
      "16-slice helical scanning",
      "HiLight detector technology",
      "Cardiac and vascular imaging",
      "Efficient patient workflow",
      "Proven reliability",
    ],
    warranty: "12-Month Parts Warranty",
  },
  {
    slug: "ge-revolution-act",
    name: "GE Revolution ACT",
    category: "CT Scanners",
    manufacturer: "GE",
    price: "Contact for Pricing",
    condition: "Refurbished - Excellent",
    image: "/ct-scanner.jpg",
    specifications: {
      "Slice Count": "256-Slice",
      "Coverage": "160 mm",
      "Rotation Time": "0.28 seconds",
      "kVp Range": "80-140 kVp with GSI",
      "Detector": "Gemstone detector",
      "Table Weight Capacity": "227 kg (500 lbs)",
    },
    description:
      "The GE Revolution ACT represents breakthrough CT technology with ultra-fast scanning and exceptional image quality. Features advanced cardiac and spectral imaging capabilities.",
    features: [
      "Revolution detector technology",
      "ASiR-V iterative reconstruction",
      "Spectral imaging capabilities",
      "Single heartbeat cardiac imaging",
      "Ultra-low dose protocols",
    ],
    warranty: "12-Month Parts Warranty",
  },
  {
    slug: "ge-revolution-evo",
    name: "GE Revolution EVO",
    category: "CT Scanners",
    manufacturer: "GE",
    price: "Contact for Pricing",
    condition: "Refurbished - Excellent",
    image: "/ct-scanner.jpg",
    specifications: {
      "Slice Count": "256-Slice",
      "Coverage": "160 mm",
      "Rotation Time": "0.28 seconds",
      "kVp Range": "80-140 kVp",
      "Detector": "Revolutionary detector",
      "Table Weight Capacity": "227 kg (500 lbs)",
    },
    description:
      "The GE Revolution EVO delivers premium CT imaging with advanced reconstruction and dose optimization. Ideal for high-volume facilities requiring exceptional image quality.",
    features: [
      "Revolutionary detector system",
      "ASiR-V reconstruction",
      "Smart Workflow protocols",
      "Dose optimization technology",
      "Advanced cardiac imaging",
    ],
    warranty: "12-Month Parts Warranty",
  },
  {
    slug: "ge-revolution-gsi",
    name: "GE Revolution GSI",
    category: "CT Scanners",
    manufacturer: "GE",
    price: "Contact for Pricing",
    condition: "Refurbished - Excellent",
    image: "/ct-scanner.jpg",
    specifications: {
      "Slice Count": "256-Slice",
      "Coverage": "160 mm",
      "Rotation Time": "0.28 seconds",
      "Spectral Imaging": "Gemstone Spectral Imaging",
      "Detector": "Gemstone detector",
      "Table Weight Capacity": "227 kg (500 lbs)",
    },
    description:
      "The GE Revolution GSI combines advanced CT technology with Gemstone Spectral Imaging, providing unprecedented tissue characterization and material decomposition capabilities.",
    features: [
      "Gemstone Spectral Imaging (GSI)",
      "Material decomposition",
      "Monochromatic imaging",
      "ASiR-V reconstruction",
      "Advanced spectral applications",
    ],
    warranty: "12-Month Parts Warranty",
  },

  // ── MRI Systems ──────────────────────────────────────────────────────────
  {
    slug: "ge-1-5t-mri",
    name: "GE 1.5T MRI",
    category: "MRI Systems",
    manufacturer: "GE",
    price: "$200,000 - $350,000",
    condition: "Refurbished - Very Good",
    image: "/mri.jpg",
    specifications: {
      "Field Strength": "1.5 Tesla",
      "Bore Size": "60 cm",
      "Gradient Strength": "33 mT/m",
      "Slew Rate": "120 T/m/s",
      "RF System": "Multi-channel",
      "Table Weight Capacity": "250 kg (550 lbs)",
    },
    description:
      "Reliable 1.5T MRI system providing excellent image quality for routine neurological, musculoskeletal, and body imaging applications.",
    features: [
      "High-resolution imaging",
      "Fast scanning protocols",
      "Multiple coil configurations",
      "User-friendly interface",
      "Comprehensive pulse sequences",
    ],
    warranty: "12-Month Parts Warranty",
  },
  {
    slug: "ge-3-0t-mri",
    name: "GE 3.0T MRI",
    category: "MRI Systems",
    manufacturer: "GE",
    price: "$400,000 - $650,000",
    condition: "Refurbished - Excellent",
    image: "/mri.jpg",
    specifications: {
      "Field Strength": "3.0 Tesla",
      "Bore Size": "60 cm",
      "Gradient Strength": "50 mT/m",
      "Slew Rate": "200 T/m/s",
      "RF System": "Multi-channel with parallel imaging",
      "Table Weight Capacity": "250 kg (550 lbs)",
    },
    description:
      "High-field 3.0T MRI system delivering superior image quality and advanced imaging capabilities for research and clinical applications.",
    features: [
      "Superior signal-to-noise ratio",
      "Advanced parallel imaging",
      "Functional and spectroscopy imaging",
      "High-resolution protocols",
      "Research-grade capabilities",
    ],
    warranty: "12-Month Parts Warranty",
  },
  {
    slug: "philips-1-5t-mri",
    name: "Philips 1.5T MRI",
    category: "MRI Systems",
    manufacturer: "Philips",
    price: "$220,000 - $380,000",
    condition: "Refurbished - Very Good",
    image: "/mri.jpg",
    specifications: {
      "Field Strength": "1.5 Tesla",
      "Bore Size": "60 cm",
      "Gradient Strength": "33 mT/m",
      "Slew Rate": "122 T/m/s",
      "RF Channels": "16-channel",
      "Table Weight Capacity": "250 kg (550 lbs)",
    },
    description:
      "The Philips 1.5T MRI delivers outstanding clinical imaging with Philips dStream digital broadband architecture. Excellent image quality for neurological, musculoskeletal, and whole-body applications.",
    features: [
      "dStream digital broadband technology",
      "SmartExam automated planning",
      "FlexStream coil portfolio",
      "Ambient Experience patient comfort",
      "Comprehensive neuro and body protocols",
    ],
    warranty: "12-Month Parts Warranty",
  },
  {
    slug: "philips-3-0t-mri",
    name: "Philips 3.0T MRI",
    category: "MRI Systems",
    manufacturer: "Philips",
    price: "$450,000 - $700,000",
    condition: "Refurbished - Excellent",
    image: "/mri.jpg",
    specifications: {
      "Field Strength": "3.0 Tesla",
      "Bore Size": "60 cm",
      "Gradient Strength": "45 mT/m",
      "Slew Rate": "200 T/m/s",
      "RF Channels": "32-channel",
      "Table Weight Capacity": "250 kg (550 lbs)",
    },
    description:
      "The Philips 3.0T MRI provides premium high-field imaging with exceptional signal-to-noise ratio and advanced research capabilities. Ideal for demanding clinical and academic environments.",
    features: [
      "MultiTransmit RF management",
      "dStream digital broadband architecture",
      "Advanced diffusion and perfusion imaging",
      "Spectroscopy and functional MRI",
      "High-resolution musculoskeletal imaging",
    ],
    warranty: "12-Month Parts Warranty",
  },

  // ── PET-CT ───────────────────────────────────────────────────────────────
  {
    slug: "pet-ct-scanner",
    name: "PET CT Scanner",
    category: "PET-CT",
    manufacturer: "GE",
    price: "Contact for Pricing",
    condition: "Refurbished - Very Good",
    image: "/ct-scanner.jpg",
    specifications: {
      "PET Detector": "BGO / LYSO crystal",
      "CT Slice Count": "16-Slice",
      "Axial FOV": "15.7 cm",
      "Transaxial FOV": "70 cm",
      "Spatial Resolution": "4.5 mm FWHM",
      "Table Weight Capacity": "227 kg (500 lbs)",
    },
    description:
      "Integrated PET/CT system combining functional metabolic imaging with anatomical CT for comprehensive oncology, cardiology, and neurology applications.",
    features: [
      "Integrated PET and CT acquisition",
      "Attenuation correction with CT",
      "Whole-body scanning capability",
      "SUV quantification",
      "Fusion image display",
    ],
    warranty: "12-Month Parts Warranty",
  },
  {
    slug: "ge-discovery-pet-ct",
    name: "GE Discovery PET/CT",
    category: "PET-CT",
    manufacturer: "GE",
    price: "Contact for Pricing",
    condition: "Refurbished - Excellent",
    image: "/ct-scanner.jpg",
    specifications: {
      "PET Detector": "LYSO crystal array",
      "CT Slice Count": "64-Slice",
      "Axial FOV": "15.7 cm",
      "Transaxial FOV": "70 cm",
      "Sensitivity": "7.0 cps/kBq",
      "Table Weight Capacity": "227 kg (500 lbs)",
    },
    description:
      "The GE Discovery PET/CT delivers advanced molecular imaging with exceptional sensitivity and resolution. Features time-of-flight technology for superior lesion detectability.",
    features: [
      "Time-of-flight (TOF) PET imaging",
      "Q.Clear iterative reconstruction",
      "MotionFree respiratory gating",
      "64-slice CT for diagnostic quality",
      "Advanced oncology quantification tools",
    ],
    warranty: "12-Month Parts Warranty",
  },
  {
    slug: "siemens-biograph-pet-ct",
    name: "Siemens Biograph PET/CT",
    category: "PET-CT",
    manufacturer: "Siemens",
    price: "Contact for Pricing",
    condition: "Refurbished - Excellent",
    image: "/ct-scanner.jpg",
    specifications: {
      "PET Detector": "LSO crystal technology",
      "CT Slice Count": "64-Slice",
      "Axial FOV": "21.6 cm",
      "Transaxial FOV": "70 cm",
      "Sensitivity": "9.6 cps/kBq",
      "Table Weight Capacity": "227 kg (500 lbs)",
    },
    description:
      "The Siemens Biograph PET/CT is a premium molecular imaging platform with industry-leading sensitivity and extended axial field of view for fast, high-quality scans.",
    features: [
      "Ultra-HD PET reconstruction",
      "LSO crystal detector technology",
      "Extended axial field of view",
      "FlowMotion continuous bed motion",
      "syngo.via advanced visualization",
    ],
    warranty: "12-Month Parts Warranty",
  },

  // ── Cath Labs ────────────────────────────────────────────────────────────
  {
    slug: "philips-fd-10-10",
    name: "Philips FD 10/10",
    category: "Cath Labs",
    manufacturer: "Philips",
    price: "Contact for Pricing",
    condition: "Refurbished - Excellent",
    image: "/cath-lab.jpg",
    specifications: {
      "Detector Type": "Flat Panel Detector",
      "Image Matrix": "1024 x 1024",
      "C-arm Coverage": "10\" x 10\"",
      "Angular Range": "120\u00b0 + / -60\u00b0",
      "Table Movement": "Longitudinal, lateral, height",
      "Weight Capacity": "250 kg (550 lbs)",
    },
    description:
      "The Philips FD 10/10 is a state-of-the-art cardiac catheterization system providing exceptional image quality for interventional cardiology procedures.",
    features: [
      "Flat panel detector technology",
      "Advanced imaging algorithms",
      "Dose management tools",
      "Flexible positioning",
      "Comprehensive cardiac protocols",
    ],
    warranty: "12-Month Parts Warranty",
  },
  {
    slug: "ge-innova-cath-lab",
    name: "GE Innova Cath Lab",
    category: "Cath Labs",
    manufacturer: "GE",
    price: "Contact for Pricing",
    condition: "Refurbished - Very Good",
    image: "/cath-lab.jpg",
    specifications: {
      "Detector Type": "Flat Panel Digital Detector",
      "Image Matrix": "1024 x 1024",
      "C-arm Coverage": "20\" x 20\"",
      "Rotation Speed": "30\u00b0/sec",
      "Spatial Resolution": "2.5 lp/mm",
      "Weight Capacity": "227 kg (500 lbs)",
    },
    description:
      "The GE Innova delivers advanced cardiac and vascular imaging with a large flat panel detector. Designed for high-throughput interventional labs requiring exceptional hemodynamic performance.",
    features: [
      "Large flat panel detector",
      "Innova 3D rotational angiography",
      "Dose reduction with Assist protocols",
      "StentViz stent visualization",
      "Hemodynamic monitoring integration",
    ],
    warranty: "12-Month Parts Warranty",
  },

  // ── Mammography ──────────────────────────────────────────────────────────
  {
    slug: "hologic-3-dimensions",
    name: "Hologic 3 Dimensions",
    category: "Mammography",
    manufacturer: "Hologic",
    price: "Contact for Pricing",
    condition: "Refurbished - Excellent",
    image: "/mammography.jpg",
    specifications: {
      "Imaging Mode": "2D FFDM + 3D Tomosynthesis",
      "Detector Type": "Amorphous selenium direct-capture",
      "Detector Size": "24 x 29 cm",
      "Pixel Pitch": "70 microns",
      "Tube Target/Filter": "Tungsten / Silver",
      "Compression Force Range": "0-200 N",
    },
    description:
      "The Hologic 3Dimensions is an advanced 3D mammography system with Genius AI detection technology. Clinically proven to increase invasive cancer detection while reducing callbacks.",
    features: [
      "3D tomosynthesis imaging",
      "C-View synthesized 2D images",
      "SmartCurve comfort compression",
      "Clarity HD high-resolution imaging",
      "Intelligent 2D and 3D workflow",
    ],
    warranty: "12-Month Parts Warranty",
  },
  {
    slug: "ge-senographe",
    name: "GE Senographe",
    category: "Mammography",
    manufacturer: "GE",
    price: "Contact for Pricing",
    condition: "Refurbished - Very Good",
    image: "/mammography.jpg",
    specifications: {
      "Imaging Mode": "Full Field Digital Mammography",
      "Detector Type": "Cesium iodide flat panel",
      "Detector Size": "24 x 31 cm",
      "Pixel Pitch": "100 microns",
      "Tube Target/Filter": "Mo/Rh dual target",
      "Compression Force Range": "0-200 N",
    },
    description:
      "The GE Senographe is a proven digital mammography system offering excellent image quality with dose efficiency. Trusted platform for breast screening and diagnostic imaging.",
    features: [
      "Full field digital imaging",
      "Dual-target X-ray tube",
      "Premium image processing",
      "Ergonomic patient positioning",
      "Integrated CAD compatibility",
    ],
    warranty: "12-Month Parts Warranty",
  },
  {
    slug: "siemens-mammomat",
    name: "Siemens Mammomat",
    category: "Mammography",
    manufacturer: "Siemens",
    price: "Contact for Pricing",
    condition: "Refurbished - Very Good",
    image: "/mammography.jpg",
    specifications: {
      "Imaging Mode": "2D FFDM + Tomosynthesis option",
      "Detector Type": "Amorphous selenium",
      "Detector Size": "24 x 30 cm",
      "Pixel Pitch": "85 microns",
      "Tube Target/Filter": "W/Rh combination",
      "Compression Force Range": "0-200 N",
    },
    description:
      "The Siemens Mammomat provides advanced breast imaging with excellent contrast and low dose. Features intelligent workflow automation for efficient high-volume screening programs.",
    features: [
      "High-contrast imaging",
      "OPCOMP intelligent compression",
      "Automated exposure optimization",
      "Tomosynthesis upgrade path",
      "syngo.mammo workflow integration",
    ],
    warranty: "12-Month Parts Warranty",
  },

  // ── Sonography / Ultrasound ──────────────────────────────────────────────
  {
    slug: "ge-voluson-e8",
    name: "GE Voluson E8",
    category: "Sonography/Ultrasound",
    manufacturer: "GE",
    price: "Contact for Pricing",
    condition: "Refurbished - Excellent",
    image: "/sonography.jpg",
    specifications: {
      "Imaging Technology": "4D/3D Real-time Ultrasound",
      "Display": "23\" LCD Monitor",
      "Transducer Ports": "4 active ports",
      "Image Memory": "Up to 10,000 images",
      "Frequency Range": "1-18 MHz",
      "Weight": "110 kg (242 lbs)",
    },
    description:
      "The GE Voluson E8 is an advanced 4D ultrasound system designed for women's health applications. Features exceptional image quality and comprehensive obstetric and gynecologic imaging capabilities.",
    features: [
      "4D real-time imaging",
      "SonoBiometry for automated measurements",
      "VOCAL (Virtual Organ Computer-aided AnaLysis)",
      "HDlive rendering technology",
      "Advanced Doppler capabilities",
    ],
    warranty: "12-Month Parts Warranty",
  },
  {
    slug: "ge-logiq-e9",
    name: "GE LOGIQ E9",
    category: "Sonography/Ultrasound",
    manufacturer: "GE",
    price: "Contact for Pricing",
    condition: "Refurbished - Excellent",
    image: "/sonography.jpg",
    specifications: {
      "Imaging Technology": "Premium Shared-Service Ultrasound",
      "Display": "21.5\" LED Monitor",
      "Transducer Ports": "4 active ports",
      "Beamformer Channels": "Up to 512",
      "Frequency Range": "1-20 MHz",
      "Weight": "118 kg (260 lbs)",
    },
    description:
      "The GE LOGIQ E9 is a premium shared-service ultrasound platform delivering outstanding image quality across radiology, vascular, cardiac, and interventional applications.",
    features: [
      "XDclear transducer technology",
      "Scan Assistant automated workflow",
      "Contrast-enhanced ultrasound (CEUS)",
      "Shear Wave Elastography",
      "Volume navigation fusion imaging",
    ],
    warranty: "12-Month Parts Warranty",
  },
  {
    slug: "philips-epiq-7",
    name: "Philips EPIQ 7",
    category: "Sonography/Ultrasound",
    manufacturer: "Philips",
    price: "Contact for Pricing",
    condition: "Refurbished - Excellent",
    image: "/sonography.jpg",
    specifications: {
      "Imaging Technology": "nSIGHT Imaging Architecture",
      "Display": "23.8\" Touch-enabled Monitor",
      "Transducer Ports": "4 active ports",
      "Beamformer Channels": "Over 2 million",
      "Frequency Range": "1-18 MHz",
      "Weight": "108 kg (238 lbs)",
    },
    description:
      "The Philips EPIQ 7 features breakthrough nSIGHT Imaging architecture delivering extraordinary clinical performance. Premium platform for cardiology, radiology, and OB/GYN applications.",
    features: [
      "nSIGHT Imaging with massive parallel processing",
      "PureWave crystal transducer technology",
      "Anatomical Intelligence adaptive tools",
      "Shear Wave Elastography",
      "3D/4D imaging with xMATRIX probes",
    ],
    warranty: "12-Month Parts Warranty",
  },
  {
    slug: "siemens-acuson-s2000",
    name: "Siemens Acuson S2000",
    category: "Sonography/Ultrasound",
    manufacturer: "Siemens",
    price: "Contact for Pricing",
    condition: "Refurbished - Very Good",
    image: "/sonography.jpg",
    specifications: {
      "Imaging Technology": "Advanced SiemensWave Beamforming",
      "Display": "19\" High-resolution Monitor",
      "Transducer Ports": "4 active ports",
      "Beamformer Channels": "Up to 512",
      "Frequency Range": "1-18 MHz",
      "Weight": "120 kg (265 lbs)",
    },
    description:
      "The Siemens Acuson S2000 is a high-end ultrasound system with multi-specialty capabilities. Offers advanced imaging features for abdominal, vascular, musculoskeletal, and small-parts applications.",
    features: [
      "Cadence contrast pulse sequencing",
      "eSie Touch Elastography",
      "Virtual Touch tissue quantification",
      "Advanced 3D/4D imaging",
      "syngo Ultrasound Workplace integration",
    ],
    warranty: "12-Month Parts Warranty",
  },

  // ── ECG Systems ──────────────────────────────────────────────────────────
  {
    slug: "ge-mac-5500",
    name: "GE MAC 5500",
    category: "ECG Systems",
    manufacturer: "GE",
    price: "Contact for Pricing",
    condition: "Refurbished - Very Good",
    image: "/ecg.jpg",
    specifications: {
      "Lead Configuration": "12-Lead ECG",
      "Display": "8.4\" Color LCD",
      "Sampling Rate": "40,000 SPS",
      "Frequency Response": "0.05-300 Hz",
      "Input Impedance": ">100 M\u03a9",
      "Paper Size": "8.5\" x 11\" (Letter)",
    },
    description:
      "The GE MAC 5500 is a comprehensive 12-lead ECG system offering advanced cardiac rhythm analysis and interpretation. Designed for clinical excellence with user-friendly operation.",
    features: [
      "12SL ECG Analysis Program",
      "Comprehensive arrhythmia detection",
      "HIPAA-compliant connectivity",
      "Automated measurements and interpretation",
      "Built-in thermal printer",
    ],
    warranty: "12-Month Parts Warranty",
  },
  {
    slug: "philips-pagewriter-tc70",
    name: "Philips PageWriter TC70",
    category: "ECG Systems",
    manufacturer: "Philips",
    price: "Contact for Pricing",
    condition: "Refurbished - Very Good",
    image: "/ecg.jpg",
    specifications: {
      "Lead Configuration": "12-Lead ECG",
      "Display": "10.4\" Color Touchscreen",
      "Sampling Rate": "32,000 SPS",
      "Frequency Response": "0.05-300 Hz",
      "Input Impedance": ">100 M\u03a9",
      "Paper Size": "A4 / 8.5\" x 11\"",
    },
    description:
      "The Philips PageWriter TC70 is a full-featured cardiograph with touchscreen interface and advanced ECG analysis. Delivers accurate resting ECG acquisition in hospital and clinic settings.",
    features: [
      "DXL 16-lead ECG algorithm",
      "Touchscreen guided workflow",
      "Wireless data transfer",
      "PDF and XML export",
      "Built-in barcode scanner option",
    ],
    warranty: "12-Month Parts Warranty",
  },
  {
    slug: "nihon-kohden-cardiofax",
    name: "Nihon Kohden Cardiofax",
    category: "ECG Systems",
    manufacturer: "Nihon Kohden",
    price: "Contact for Pricing",
    condition: "Refurbished - Good",
    image: "/ecg.jpg",
    specifications: {
      "Lead Configuration": "12-Lead ECG",
      "Display": "8.0\" Color LCD",
      "Sampling Rate": "32,000 SPS",
      "Frequency Response": "0.05-150 Hz",
      "Input Impedance": ">50 M\u03a9",
      "Paper Size": "A4 / 8.5\" x 11\"",
    },
    description:
      "The Nihon Kohden Cardiofax is a reliable ECG recording system known for signal quality and durability. Compact design ideal for bedside, clinic, and ambulatory use.",
    features: [
      "ECAPS 12C interpretation algorithm",
      "High-resolution thermal printer",
      "Compact portable design",
      "SD card storage",
      "HL7 and DICOM connectivity",
    ],
    warranty: "6-Month Parts Warranty",
  },

  // ── Multi-Parameter Monitors ─────────────────────────────────────────────
  {
    slug: "philips-intellivue-mx800",
    name: "Philips IntelliVue MX800",
    category: "Multi-Parameter Monitors",
    manufacturer: "Philips",
    price: "Contact for Pricing",
    condition: "Refurbished - Excellent",
    image: "/multi-para-monitor.jpg",
    specifications: {
      "Display": "19\" Color TFT LCD",
      "Parameters": "ECG, SpO2, NIBP, IBP, Temp, Resp",
      "Waveform Channels": "Up to 16 waveforms",
      "Trend Storage": "Up to 120 hours",
      "Network Connectivity": "Ethernet, WiFi compatible",
      "Power": "AC/DC with battery backup",
    },
    description:
      "The Philips IntelliVue MX800 is an advanced patient monitoring system providing comprehensive vital signs monitoring for critical care environments. Features intuitive interface and flexible configuration options.",
    features: [
      "Advanced parameter monitoring",
      "Configurable alarm management",
      "Clinical decision support tools",
      "Seamless network integration",
      "Plug-and-play measurement modules",
    ],
    warranty: "12-Month Parts Warranty",
  },
  {
    slug: "ge-carescape-b650",
    name: "GE CARESCAPE B650",
    category: "Multi-Parameter Monitors",
    manufacturer: "GE",
    price: "Contact for Pricing",
    condition: "Refurbished - Very Good",
    image: "/multi-para-monitor.jpg",
    specifications: {
      "Display": "15.6\" Color TFT LCD",
      "Parameters": "ECG, SpO2, NIBP, IBP, Temp, CO2, Resp",
      "Waveform Channels": "Up to 12 waveforms",
      "Trend Storage": "Up to 96 hours",
      "Network Connectivity": "Ethernet, WiFi, HL7",
      "Power": "AC with integrated battery backup",
    },
    description:
      "The GE CARESCAPE B650 is a versatile patient monitor designed for perioperative and critical care environments. Delivers reliable multi-parameter monitoring with advanced connectivity.",
    features: [
      "EK-Pro arrhythmia analysis",
      "Integrated respiratory monitoring",
      "Hemodynamic calculations",
      "Customizable screen layouts",
      "Seamless CARESCAPE network integration",
    ],
    warranty: "12-Month Parts Warranty",
  },
  {
    slug: "mindray-benevision-n22",
    name: "Mindray BeneVision N22",
    category: "Multi-Parameter Monitors",
    manufacturer: "Mindray",
    price: "Contact for Pricing",
    condition: "Refurbished - Very Good",
    image: "/multi-para-monitor.jpg",
    specifications: {
      "Display": "21.5\" Full HD TFT LCD",
      "Parameters": "ECG, SpO2, NIBP, IBP, Temp, CO2, Resp",
      "Waveform Channels": "Up to 16 waveforms",
      "Trend Storage": "Up to 120 hours",
      "Network Connectivity": "Ethernet, WiFi, HL7",
      "Power": "AC with lithium-ion battery backup",
    },
    description:
      "The Mindray BeneVision N22 is a feature-rich multi-parameter monitor with a large high-definition display. Offers comprehensive monitoring for ICU, OR, and step-down care settings.",
    features: [
      "Full HD touchscreen display",
      "Integrated CO2 monitoring (sidestream/mainstream)",
      "Advanced arrhythmia analysis",
      "ST segment monitoring",
      "BeneLink connectivity platform",
    ],
    warranty: "12-Month Parts Warranty",
  },
];

// ─── Derived Data ────────────────────────────────────────────────────────────

export const manufacturers: string[] = [
  ...new Set(allMachines.map((m) => m.manufacturer)),
].sort();

// ─── Helper Functions ────────────────────────────────────────────────────────

export function getCategories(): Category[] {
  return categories;
}

export function getMachinesByCategory(category: string): Machine[] {
  return allMachines.filter((m) => m.category === category);
}

export function getMachineBySlug(slug: string): Machine | undefined {
  return allMachines.find((m) => m.slug === slug);
}

export function getMachinesByManufacturer(manufacturer: string): Machine[] {
  return allMachines.filter((m) => m.manufacturer === manufacturer);
}
