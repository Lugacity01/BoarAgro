export interface ProductData {
    slug: string;
    name: string;
    image: string;
    descriptionPhase1: string;
    descriptionPhase2: string;
    keyCharacteristics: string[];
    exportSpecifications: string[];
    endUses: string;
}

export const productsData: ProductData[] = [
    {
        slug: "cocoa-beans",
        name: "Cocoa Beans (Fermented & Dried)",
        image: "/images/cocoa_image.jpg",
        descriptionPhase1: "Our cocoa beans are sourced from managed cocoa plantations and selected partner farmers in Nigeria's cocoa-producing regions. The beans are carefully fermented and sun-dried to preserve flavor, aroma, and consistency, making them suitable for industrial chocolate manufacturing and cocoa derivative processing.",
        descriptionPhase2: "We emphasize traceability, uniform fermentation, and moisture control to meet the standards of European and Asian processors.",
        keyCharacteristics: [
            "Well-fermented beans with consistent brown coloration",
            "Low moisture for extended shelf-life",
            "Clean and free from contaminants",
            "Traceable to the farm and the aggregation point"
        ],
        exportSpecifications: [
            "Moisture Content: Max 7.5%",
            "Foreign Matter: Max 0.5%",
            "Slaty Beans: Max 3%",
            "Mouldy Beans: Max 3%",
            "Bean Count: 90-100 beans per 100g",
            "Packaging: 40kg PP bags / Jute bags",
            "Loading: Containerized or bulk"
        ],
        endUses: "Chocolate manufacturing, cocoa liquor, cocoa powder, cocoa butter, food & beverage applications."
    },
    {
        slug: "soybeans",
        name: "Soybeans",
        image: "/images/soya_beans_agro.jpg",
        descriptionPhase1: "Sourced directly from our farming networks across Nigeria's middle belt, our soybeans are cultivated using sustainable agricultural practices. They are prized for their high protein output and oil content, making them a premium choice for global oil processors and feed manufacturers.",
        descriptionPhase2: "We ensure strict grading and cleaning processes to deliver consistent, export-grade soybeans that meet international industrial standards.",
        keyCharacteristics: [
            "High protein and oil content",
            "Non-GMO varieties available upon request",
            "Carefully cleaned and graded",
            "Sustainable farming origins"
        ],
        exportSpecifications: [
            "Moisture Content: Max 12%",
            "Protein Content: Min 38%",
            "Oil Content: Min 18%",
            "Foreign Matter: Max 2%",
            "Splits/Broken: Max 10%",
            "Packaging: 50kg PP bags",
            "Loading: Containerized"
        ],
        endUses: "Soybean oil extraction, animal feed production, soy protein isolates, food processing."
    },
    {
        slug: "raw-cashew-nuts",
        name: "Raw Cashew Nuts (RCN)",
        image: "/images/raw_cashew_nuts.jpg",
        descriptionPhase1: "Our Raw Cashew Nuts are carefully harvested and sun-dried from selected partner orchards. Measured for their exceptional kernel out-turn (KOR) and nut count, these premium nuts are ready for industrial shelling and processing.",
        descriptionPhase2: "We maintain direct relationships with farmers to ensure early harvesting and proper drying techniques, yielding a higher quality raw product.",
        keyCharacteristics: [
            "High Kernel Out-turn Ratio (KOR)",
            "Excellent nut size and count per kg",
            "Properly sun-dried to prevent spoilage",
            "Sourced from premium producing regions"
        ],
        exportSpecifications: [
            "KOR (Kernel Out-turn Ratio): 48-52 lbs",
            "Nut Count: 170-200 per kg",
            "Moisture Content: Max 8%",
            "Defective Nuts: Max 5%",
            "Packaging: 80kg Jute bags",
            "Loading: Containerized"
        ],
        endUses: "Cashew processing (shelling/roasting), cashew nut shell liquid (CNSL) extraction, snack manufacturing."
    },
    {
        slug: "sesame-seeds",
        name: "Sesame Seeds",
        image: "/images/sesame_seed.webp",
        descriptionPhase1: "BOAR Agro supplies premium Nigerian sesame seeds, renowned globally for their high oil content and purity. Our seeds are meticulously cleaned and sorted to secure a place in top-tier culinary and industrial applications.",
        descriptionPhase2: "We utilize advanced cleaning technology to achieve high purity levels, catering directly to the exact specifications of international buyers.",
        keyCharacteristics: [
            "Exceptional oil yield",
            "Distinct nutty flavor profile",
            "Machine cleaned for maximum purity",
            "Natural / unhulled options available"
        ],
        exportSpecifications: [
            "Purity: 99% Min",
            "Oil Content: Min 50%",
            "Moisture Content: Max 6%",
            "FFA (Free Fatty Acid): Max 2%",
            "Admixture: Max 1%",
            "Packaging: 50kg PP bags",
            "Loading: Containerized"
        ],
        endUses: "Sesame oil extraction, tahini paste production, bakery and confectionery, culinary garnishes."
    },
    {
        slug: "dried-split-ginger",
        name: "Dried Split Ginger",
        image: "/images/dried_split_ginger.jpg",
        descriptionPhase1: "Harvested from regions known for the spiciest ginger varieties, our roots are naturally sun-dried and split to maximize flavor retention and shelf-life. This ensures a highly pungent, aromatic product perfect for spice extraction.",
        descriptionPhase2: "Our processing methods prioritize cleanliness to avoid mold development and preserve the natural essential oils and oleoresins.",
        keyCharacteristics: [
            "High pungency and strong aroma",
            "Rich in gingerol and essential oils",
            "Carefully split for uniform drying",
            "Free from artificial chemical treatments"
        ],
        exportSpecifications: [
            "Moisture Content: Max 9%",
            "Total Ash: Max 8%",
            "Acid Insoluble Ash: Max 2%",
            "Volatile Oil: Min 1.5%",
            "Packaging: 40kg PP bags",
            "Loading: Containerized"
        ],
        endUses: "Spice blending, food & beverage flavoring, ginger oleoresin extraction, pharmaceutical processing."
    },
    {
        slug: "dried-split-hibiscus",
        name: "Dried Split Hibiscus",
        image: "/images/dried_split_hibiscus.jpg",
        descriptionPhase1: "Our dried hibiscus flowers (Roselle) are hand-picked and naturally dried to maintain their vibrant red color and tart flavor. We source from sustainable farms focusing on natural cultivation techniques.",
        descriptionPhase2: "Rigorous sorting ensures our hibiscus is free of impurities, delivering a pure product required by premium tea and beverage manufacturers.",
        keyCharacteristics: [
            "Vibrant, deep red coloration",
            "Strong tart and fruity flavor profile",
            "Hand-picked and sorted",
            "Rich in anthocyanins and antioxidants"
        ],
        exportSpecifications: [
            "Moisture Content: Max 12%",
            "Total Ash: Max 10%",
            "Acid Insoluble Ash: Max 1.5%",
            "Color Extract value: Standard",
            "Packaging: 25kg / 50kg PP bags",
            "Loading: Containerized"
        ],
        endUses: "Herbal tea blending, beverage manufacturing, natural food coloring, cosmetic extracts."
    },
    {
        slug: "dried-chilli-pepper",
        name: "Dried Chilli Pepper",
        image: "/images/dried_chilli_pepper.jpg",
        descriptionPhase1: "We supply intensely hot, vividly colored dried chilli peppers sourced from expert farmers. Sun-dried to perfection, these peppers are ideal for adding heat and color to culinary creations worldwide.",
        descriptionPhase2: "Our quality control strictly monitors capsaicin levels and moisture, preventing contamination and ensuring a stable, export-ready commodity.",
        keyCharacteristics: [
            "High capsaicin (heat) levels",
            "Vivid natural red color",
            "Uniformly sun-dried for preservation",
            "Carefully handled to prevent breakage"
        ],
        exportSpecifications: [
            "Moisture Content: Max 10%",
            "Pungency (SHU): Variable by variety requested",
            "Total Ash: Max 8%",
            "Aflatoxin levels: Within EU/US strict limits",
            "Packaging: 25kg PP bags or Cartons",
            "Loading: Containerized"
        ],
        endUses: "Spice manufacturing, hot sauce production, culinary seasonings, oleoresin extraction."
    },
];

export function getProductBySlug(slug: string): ProductData | undefined {
    return productsData.find(p => p.slug === slug);
}
