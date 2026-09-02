import { ServiceItem, BeforeAfterCase, PackageItem, Testimonial } from '../types';

export const BUSINESS_INFO = {
  name: "The Pounds Saloon",
  tagline: "Premier Ladies Beauty, Hair & Bridal Sanctuary",
  phone: "+92 313 5434169",
  phoneRaw: "+923135434169",
  whatsappUrl: "https://wa.me/923135434169?text=Hello%20The%20Pounds%20Saloon,%20I%20would%20like%20to%20inquire%20about%20booking%20an%20appointment.",
  address: "Barrier No. 2, near UBL Bank, Main GT Road, Wah Cantt, Pakistan",
  googleMapsLink: "https://share.google/Lky5hW9U3sjyyCEla",
  workingHours: "Monday to Saturday (10:00 AM – 8:00 PM)",
  workingHoursShort: "Mon - Sat: 10:00 AM – 8:00 PM",
  sundayStatus: "Sunday Closed",
  email: "contact@thepoundssaloon.com",
  established: "2024",
  stats: {
    clientsServed: "4,500+",
    satisfactionRate: "99.4%",
    beautyExperts: "12+",
    googleRating: "4.9"
  }
};

export const HERO_SLIDES = [
  {
    id: 1,
    title: "Unveil Your Inner Beauty at The Pounds Saloon",
    subtitle: "Wah Cantt's premier destination for haute couture bridal makeup, advanced hair treatments, and clinical skincare pampering.",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1920&auto=format&fit=crop", // Luxury salon atmosphere & stylist working with client
    badge: "Wah Cantt's Premier Ladies Salon",
    highlight: "Signature Bridal & Hair Mastery"
  },
  {
    id: 2,
    title: "Signature Bridal & Party Makeup Artistry",
    subtitle: "Turn your special day into a royal fairytale with our long-lasting HD & airbrush bridal artistry tailored to your unique elegance.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1920&auto=format&fit=crop", // High-glamour makeup application
    badge: "Flawless HD & Airbrush Glow",
    highlight: "Barat, Walima & Mehndi Looks"
  },
  {
    id: 3,
    title: "Keratin, Botox & Glass Hair Rebonding",
    subtitle: "Revive dull, frizzy locks with genuine imported protein infusions, Brazilian keratin therapy, and radiant color transformations.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1920&auto=format&fit=crop", // Silky smooth shiny long hair styling
    badge: "100% Genuine Imported Formulas",
    highlight: "Zero Frizz • Intense Gloss"
  },
  {
    id: 4,
    title: "Advanced Medical-Grade HydraFacials",
    subtitle: "Experience profound rejuvenation with multi-step oxygenation, deep pore detox, and luxury 24K gold brightening facials.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1920&auto=format&fit=crop", // Spa facial therapy treatment
    badge: "Clinical Skin Rejuvenation",
    highlight: "Radiant Glass-Skin Finish"
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'hair-styling-cuts',
    title: 'Hair Styling, Cutting & Blowdry',
    category: 'hair',
    categoryLabel: 'Hair Styling',
    shortDesc: 'Precision haircuts tailored to face shape, volume blowouts, signature waves, and trendy Korean bangs.',
    fullDesc: 'Our senior hair stylists craft customized layered cuts, butterfly haircuts, bob styles, and luscious volume blowdries using premium thermal protectants to keep your locks bouncy and radiant.',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1000&auto=format&fit=crop', // Stylist cutting hair with scissors & comb
    duration: '45 - 60 Mins',
    startingPrice: 'Rs. 1,500',
    popular: true,
    features: [
      'Personalized Face-Shape Consultation',
      'Layered & Butterfly Cuts',
      'Wash & Deep Conditioning Treatment',
      'Silk Press & Signature Curls Blowout'
    ]
  },
  {
    id: 'bridal-party-makeup',
    title: 'Bridal & Party Makeup',
    category: 'makeup',
    categoryLabel: 'Makeup Artistry',
    shortDesc: 'Signature HD & Airbrush bridal looks for Barat, Walima, Mehndi, and party glamour with flawless staying power.',
    fullDesc: 'Designed to photograph majestically under all lighting. We use high-end international cosmetics (Huda Beauty, Charlotte Tilbury, NARS, MAC) for a weightless, radiant finish with complimentary eyelash & jewelry setting.',
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1000&auto=format&fit=crop', // Makeup artist actively applying makeup to client
    duration: '2 - 3 Hours',
    startingPrice: 'Rs. 6,000',
    popular: true,
    features: [
      'High-Definition (HD) Airbrush Finish',
      'Dupatta, Jewelry & Hair Crown Setting',
      'Mink Lashes & Long-Wear Setting Spray',
      'Exclusive Bridal Suite with Full Privacy'
    ]
  },
  {
    id: 'skincare-facials',
    title: 'Clinical Skincare & HydraFacials',
    category: 'skin',
    categoryLabel: 'Skincare',
    shortDesc: '7-step HydraFacial, Janssen whitening facial, Dermalogica deep pore extraction, and 24K gold glow therapy.',
    fullDesc: 'Banish dullness, acne, and pigmentation. Our clinical facials combine ultrasonic exfoliation, vacuum extraction, hyaluronic acid infusion, and LED light therapy to unveil supple, youthful, and spotless skin.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop', // Aesthetic clinical facial treatment in progress
    duration: '60 - 90 Mins',
    startingPrice: 'Rs. 3,500',
    popular: true,
    features: [
      '7-Step Deep Hydro-Dermabrasion',
      'Janssen Cosmeceutical Skin Brightening',
      'Ultrasonic Blackhead & Pore Detox',
      'Cryo-Calming & Collagen Sheet Mask'
    ]
  },
  {
    id: 'keratin-rebonding',
    title: 'Keratin, Hair Botox & Rebonding',
    category: 'treatments',
    categoryLabel: 'Hair Treatments',
    shortDesc: 'Transform frizzy, unmanageable tresses into mirror-smooth, resilient, and silky straight hair lasting up to 6 months.',
    fullDesc: 'We use genuine formaldehyde-safe Brazilian Keratin, Hair Botox protein restoration, and L’Oréal Extenso rebonding to heal split ends and seal in mirror-like shine while preserving natural hair strength.',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop', // Hairdresser applying keratin/straightening hair treatment in salon
    duration: '3 - 4 Hours',
    startingPrice: 'Rs. 8,000',
    popular: true,
    features: [
      'Formaldehyde-Free Organic Keratin Option',
      'Intensive Olaplex Bond Repairing',
      'Frizz Elimination for up to 6 Months',
      'Includes Post-Treatment Hair Mask'
    ]
  },
  {
    id: 'hair-coloring-highlights',
    title: 'Hair Coloring, Balayage & Highlights',
    category: 'hair',
    categoryLabel: 'Hair Color',
    shortDesc: 'Custom hand-painted Balayage, ash blonde highlights, rich caramel melts, and ammonia-free global shades.',
    fullDesc: 'Transform your look with dimensional color tailored to your undertone. We utilize nourishing gloss formulas from L’Oréal Professionnel and Schwarzkopf that protect hair fiber integrity while delivering vibrant, fade-resistant color.',
    image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=1000&auto=format&fit=crop', // Hair coloring and balayage highlights
    duration: '2 - 3.5 Hours',
    startingPrice: 'Rs. 4,500',
    popular: false,
    features: [
      'Seamless Ash, Honey & Mocha Balayage',
      'Ammonia-Free Root Touch-Ups',
      'Foil Highlights & Baby-lights',
      'Olaplex Integrated Color Protection'
    ]
  },
  {
    id: 'manicure-pedicure-nails',
    title: 'Spa Manicure, Pedicure & Nail Art',
    category: 'nails',
    categoryLabel: 'Nails & Spa',
    shortDesc: 'Rose-petal paraffin foot baths, Russian dry manicure, gel polish, acrylic extensions, and trendy nail art.',
    fullDesc: 'Pamper tired hands and feet with our aromatherapy soak, dead sea salt scrub, cuticle rejuvenation, relaxing reflexology massage, and chip-free gel nail polish with exquisite stone & chrome detailing.',
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=1000&auto=format&fit=crop', // Manicure and luxury nail care
    duration: '45 - 75 Mins',
    startingPrice: 'Rs. 2,000',
    popular: false,
    features: [
      'Aromatherapy Herbal Soak & Sea Salt Scrub',
      'Paraffin Wax Intense Moisture Therapy',
      'Long-Lasting UV Gel Polish',
      'Custom Acrylics & Polygel Extensions'
    ]
  },
  {
    id: 'waxing-body-care',
    title: 'Waxing, Body Polishing & Threading',
    category: 'spa',
    categoryLabel: 'Body Care',
    shortDesc: 'Gentle Italian Rica fruit waxing, organic herbal wax, full-body polishing, and precision facial threading.',
    fullDesc: 'Achieve satin-smooth skin with hypoallergenic Italian Rica wax suitable for sensitive skin. Experience our full body fruit polish and deep exfoliation designed for brides and self-care lovers.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000&auto=format&fit=crop', // Spa aesthetician body polish and waxing treatment
    duration: '30 - 90 Mins',
    startingPrice: 'Rs. 1,000',
    popular: false,
    features: [
      '100% Pain-Minimizing Rica Fruit Wax',
      'Full Arms, Legs & Bikini Waxing',
      'Herbal Body Brightening Polish',
      'Eyebrow & Upper Lip Threading Sculpt'
    ]
  },
  {
    id: 'mehndi-artistry',
    title: 'Pakistani Bridal & Festive Mehndi',
    category: 'makeup',
    categoryLabel: 'Henna Art',
    shortDesc: 'Intricate traditional Pakistani bridal henna, Arabic floral vine motifs, and organic dark-stain henna cones.',
    fullDesc: 'Our mehndi artists handcraft exquisite symmetrical bridal patterns across arms and feet using 100% chemical-free organic henna that guarantees an alluring deep mahogany-maroon stain for wedding ceremonies.',
    image: 'https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?q=80&w=1000&auto=format&fit=crop', // Traditional Pakistani / Desi bride portrait with bridal jewelry
    duration: '1 - 3 Hours',
    startingPrice: 'Rs. 1,500',
    popular: false,
    features: [
      '100% Pure Organic Dark-Staining Henna',
      'Traditional Mughal & Arabic Fusion Motifs',
      'Full Bridal Arms & Feet Coverage',
      'Fast-Drying & Skin Safe Formulation'
    ]
  }
];

export const BEFORE_AFTER_CASES: BeforeAfterCase[] = [
  {
    id: 'hydrafacial-glow',
    title: 'Clinical Facial Treatment → Radiant HydraFacial Glass Skin',
    category: 'Clinical HydraFacial',
    description: 'Witness the direct transformation: from active in-salon deep pore vacuum exfoliation, lactic acid peeling, and collagen infusion to an instant luminous glass-skin radiance with tightened pores.',
    beforeImage: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop', // Aesthetician in salon actively doing facial treatment on client
    afterImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop', // Beautiful post-treatment glowing hydrated radiant skin
    serviceUsed: '7-Step Clinical HydraFacial + 24K Gold Collagen Infusion',
    timeTaken: '75 Minutes',
    stylistNote: 'Immediate pore tightening, deep hydration boost, and translucent glass skin glow.'
  },
  {
    id: 'bridal-transformation',
    title: 'Active Makeup Artistry Session → Royal HD Bridal Glamour',
    category: 'Royal Bridal Artistry',
    description: 'From precision in-chair cosmetic application by our master makeup artist to the final regal Barat bridal look complete with HD airbrush finish, jewelry pinning, and veil setting.',
    beforeImage: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1000&auto=format&fit=crop', // Professional makeup artist actively applying makeup with brushes
    afterImage: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1000&auto=format&fit=crop', // Finished high-glamour Pakistani royal bridal look
    serviceUsed: 'Signature HD Bridal Package (Airbrush + Mink Lashes + Jewelry Setting)',
    timeTaken: '2.5 Hours',
    stylistNote: '16-hour sweat-resistant, tear-proof camera-ready bridal finish for Wah Cantt brides.'
  },
  {
    id: 'keratin-treatment',
    title: 'Severe Frizz & Heat Damage → Liquid Keratin Glass Hair',
    category: 'Keratin Hair Treatment',
    description: 'Client presented heat-damaged, coarse, frizzy, and unruly curls. Our multi-phase Brazilian Keratin protein restoration and Olaplex sealant transformed the tresses into 100% frizz-free, mirror-reflective straight hair with lasting strength.',
    beforeImage: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1000&auto=format&fit=crop', // Untreated frizzy, damaged unruly coarse hair
    afterImage: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1000&auto=format&fit=crop', // Liquid glass ultra-glossy straight Brazilian Keratin repaired hair
    serviceUsed: 'Brazilian Keratin Protein Therapy + Olaplex Bond Builder',
    timeTaken: '3.5 Hours',
    stylistNote: 'Complete structural cuticle repair with mirror shine and zero styling effort required.'
  },
  {
    id: 'balayage-makeover',
    title: 'In-Salon Color Processing → Seamless Honey Balayage & Gloss',
    category: 'Balayage Color & Gloss',
    description: 'From precision hand-painting and root blending in the stylist chair to a radiant, multidimensional warm honey caramel and ash blonde balayage with high-gloss mirror shine.',
    beforeImage: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1000&auto=format&fit=crop', // Stylist actively styling and treating hair in salon
    afterImage: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=1000&auto=format&fit=crop', // Gorgeous multi-dimensional blonde balayage highlights
    serviceUsed: 'Custom Hand-Painted Balayage + Acidic Color Gloss Toner',
    timeTaken: '3 Hours',
    stylistNote: 'Maintained 100% hair strength through lightening using Olaplex bond multiplier.'
  }
];

export const PACKAGES_DATA: PackageItem[] = [
  {
    id: 'signature-bridal',
    name: 'The Royal Bridal Affair',
    tagline: 'The complete luxury wedding experience for Barat or Walima',
    price: 'Rs. 25,000',
    originalPrice: 'Rs. 32,000',
    popular: true,
    duration: 'Full Day Pamper',
    idealFor: 'Brides seeking unmatched royalty, flawless HD cameras, and complete privacy',
    includes: [
      'High-Definition (HD) or Airbrush Bridal Makeup',
      'Exclusive Hair Crown Styling & Dupatta Draping',
      'Mink 3D Eyelashes & Luxury Jewelry Setting',
      'Pre-Bridal Janssen Whitening Facial & Hydra-Glow',
      'Luxury Rose Petal Pedicure & Spa Manicure',
      'Full Arms & Legs Rica Fruit Waxing',
      'Complimentary Bridal Refreshments & Private Suite'
    ]
  },
  {
    id: 'party-glam',
    name: 'Party Ready Glamour',
    tagline: 'Turn heads at weddings, engagements, and evening events',
    price: 'Rs. 7,500',
    originalPrice: 'Rs. 9,500',
    popular: false,
    duration: '2 Hours',
    idealFor: 'Bridesmaids, family members, and party attendees',
    includes: [
      'Full Signature Party Glam Makeup',
      'Choice of Hollywood Waves, Textured Updo, or Ironing',
      'Silk Eyelash Application',
      'Classic Manicure & Express Hand Polish',
      'Jewelry & Dupatta Styling Support'
    ]
  },
  {
    id: 'hair-revival',
    name: 'Total Hair Revival & Gloss',
    tagline: 'Heal damaged hair and lock in mirror-like smoothness',
    price: 'Rs. 12,000',
    originalPrice: 'Rs. 16,000',
    popular: false,
    duration: '3.5 Hours',
    idealFor: 'Frizzy, color-treated, chemically treated, or heat-damaged hair',
    includes: [
      'Complete Brazilian Keratin or Hair Botox Therapy',
      'Olaplex Bond Rebuilding Deep Spa',
      'Precision Split-End Trimming & Layering',
      'Scalp Rejuvenating Detox Massage',
      'Post-Care Maintenance Guidance'
    ]
  },
  {
    id: 'glow-pamper-day',
    name: 'The Pounds Signature Pamper Day',
    tagline: 'Head-to-toe relaxation and radiant skin glow',
    price: 'Rs. 8,500',
    originalPrice: 'Rs. 11,000',
    popular: false,
    duration: '2.5 Hours',
    idealFor: 'Monthly self-care, birthdays, and post-stress unwinding',
    includes: [
      '7-Step Deep HydraFacial Treatment',
      'Luxury Herbal Foot Spa & Spa Manicure',
      'Full Arms & Half Legs Fruit Waxing',
      'Soothing Shoulder & Head Scalp Massage',
      'Herbal Tea & Aromatherapy Lounge'
    ]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    name: 'Ayesha Malik',
    role: 'Barat Bride',
    location: 'Wah Cantt',
    rating: 5,
    date: '2 weeks ago',
    comment: 'The Pounds Saloon made my wedding day unforgettable! My HD bridal makeup stayed completely flawless from morning till midnight. The private ladies atmosphere and courteous staff in Wah Cantt are truly unmatched.',
    service: 'Signature Bridal Package',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Dr. Fatima Tariq',
    role: 'Resident Physician',
    location: 'Main GT Road, Wah',
    rating: 5,
    date: '1 month ago',
    comment: 'I got the Brazilian Keratin and HydraFacial done. My frizzy hair is now completely silky and manageable! Super hygienic, genuine branded products, and the location near Barrier 2 is very convenient.',
    service: 'Keratin Therapy & HydraFacial',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'Sana Rehman',
    role: 'Corporate Executive',
    location: 'Wah Cantt',
    rating: 5,
    date: '3 weeks ago',
    comment: 'The balayage highlights they gave me were beyond expectation. Soft, blended caramel tones without any damage to my hair. Highly recommend to all ladies in Wah Cantt looking for premium salon care.',
    service: 'Balayage & Hair Spa',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: '4',
    name: 'Zainab Bibi',
    role: 'University Student',
    location: 'Wah Cantt',
    rating: 5,
    date: 'Just recently',
    comment: 'Best nail art and pedicure experience in Wah! The rose petal foot bath was heavenly and the gel nails lasted over 4 weeks without chipping. Love the gold aesthetics and friendly team.',
    service: 'Gel Nails & Spa Pedicure',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=200&auto=format&fit=crop'
  }
];

export const SALON_FAQS = [
  {
    question: "Do I need to book an appointment in advance?",
    answer: "While we welcome walk-ins based on chair availability, we strongly recommend booking in advance—especially for Bridal Makeup, Keratin Treatments, and HydraFacials—to secure your preferred time and ensure zero waiting time."
  },
  {
    question: "Is The Pounds Saloon strictly for ladies with complete privacy?",
    answer: "Yes, absolutely. The Pounds Saloon is a 100% ladies-only salon managed entirely by professional female staff with discreet private treatment cabins and dedicated bridal dressing suites."
  },
  {
    question: "What brands of cosmetics and hair products do you use?",
    answer: "We only use original, premium international brands including L'Oréal Professionnel, Olaplex, Schwarzkopf, Dermalogica, Janssen Cosmetics, Huda Beauty, Charlotte Tilbury, NARS, and MAC."
  },
  {
    question: "Where is The Pounds Saloon located in Wah Cantt?",
    answer: "We are situated at Barrier No. 2, near UBL Bank, Main GT Road, Wah Cantt, Pakistan. It is easily accessible with ample parking and security."
  },
  {
    question: "What are your operating hours?",
    answer: "We are open Monday through Saturday from 10:00 AM to 8:00 PM. We are closed on Sundays for weekly maintenance and sanitation."
  }
];
