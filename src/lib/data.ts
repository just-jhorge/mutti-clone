import { MedicationCategory, SubCategories } from "../../types";

export const categories: SubCategories = {
    "Baby & Child Health": {
        categoryLink: "baby-and-child-health",
        subCategories: [
            { label: "Allergy and Hayfever", subCategoryLink: "/allergy-and-hayfever" },
            { label: "Colic Management", subCategoryLink: "/colic-management" },
            { label: "Fever and Pain", subCategoryLink: "/fever-and-pain" },
            { label: "First Aid", subCategoryLink: "/first-aid" },
            { label: "Teething", subCategoryLink: "/teething" },
        ],
    },
    "Electrical Health and Diagnostics": {
        categoryLink: "electrical-health-and-diagnostics",
        subCategories: [
            { label: "Diabetes", subCategoryLink: "/diabetes" },
            { label: "Heart Health", subCategoryLink: "/heart-health" },
        ],
    },
    "Medicines & Treatments": {
        categoryLink: "medicines-and-treatments",
        subCategories: [
            { label: "Allergy and Hayfever", subCategoryLink: "/allergy-and-hayfever" },
            { label: "Cough Cold & Flu", subCategoryLink: "/cough-cold-and-flu" },
            { label: "Eye Care", subCategoryLink: "/eye-care" },
            { label: "First Aid", subCategoryLink: "/first-aid" },
            { label: "Pain", subCategoryLink: "/pain" },
            { label: "Skincare", subCategoryLink: "/skincare" },
            { label: "Stomach and Bowel", subCategoryLink: "/stomach-and-bowel" },
        ],
    },
    "Men's Health": {
        categoryLink: "men's-health",
        subCategories: [
            { label: "Men's Health Supplements", subCategoryLink: "/men's-health-supplements" },
            { label: "Men's Sexual Health", subCategoryLink: "/men's-sexual-health" },
        ],
    },
    "Sexual Health": {
        categoryLink: "sexual-pleasure-and-wellbeing",
        subCategories: [
            { label: "Condoms", subCategoryLink: "/condoms" },
            { label: "Feminine Hygiene and Health", subCategoryLink: "/feminine-hygiene-and-health" },
            { label: "Lubricants and Gels", subCategoryLink: "/lubricants-and-gels" },
        ],
    },
    "Travel Health": {
        categoryLink: "travel-health",
        subCategories: [
            { label: "Antimalarials", subCategoryLink: "/antimalarials" },
            { label: "Children's Travel Health", subCategoryLink: "/children's-travel-health" },
            { label: "First Aid", subCategoryLink: "/first-aid" },
            { label: "Travel Sickness", subCategoryLink: "/travel-sickness" },
        ],
    },
    "Vitamins and Supplements": {
        categoryLink: "vitamins-and-supplements",
        subCategories: [
            { label: "Bone Health", subCategoryLink: "/bone-health" },
            { label: "Digestive Health", subCategoryLink: "/digestive-health" },
            { label: "Immune Health", subCategoryLink: "/immune-health" },
            { label: "Men's Health Supplements", subCategoryLink: "/men's-health-supplements" },
            { label: "Multivitamins", subCategoryLink: "/multivitamins" },
            { label: "Women's Health Supplements", subCategoryLink: "/women's-health-supplements" },
        ],
    },
    "Women's Health": {
        categoryLink: "women's-health",
        subCategories: [
            { label: "Menstrual Health", subCategoryLink: "/menstrual-health" },
            { label: "Morning After Pill", subCategoryLink: "/morning-after-pill" },
            { label: "Thrush", subCategoryLink: "/thrush" },
            { label: "Women's Health Supplements", subCategoryLink: "/women's-health-supplements" },
        ],
    },
};

export const medications: MedicationCategory = {
    "Baby & Child Health": [
        {
            name: "Claritine 10mg Tablets",
            discount: 10,
            price: 399.3,
            category: "allergy-and-hayfever",
        },
        {
            name: "Cetirizine 10mg Tablets UK",
            discount: 4,
            price: 23.4,
            category: "allergy-and-hayfever",
        },
        {
            name: "Bell's Baby Gripe Mixture 100ml",
            price: 17.0,
            category: "colic-management",
        },
        {
            name: "Zirtek 10mg Tablets",
            discount: 8,
            price: 71.96,
            category: "allergy-and-hayfever",
        },
        {
            name: "Ventolin 100mcg Inhaler",
            discount: 8,
            price: 111.0,
            category: "allergy-and-hayfever",
        },
        {
            name: "Teething Mixture Ecl 100ml Syrup",
            discount: 12,
            price: 25.5,
            category: "teething",
        },
        {
            name: "Rhizin 5mg/5ml 30ml Syrup",
            discount: 7,
            price: 7.5,
            category: "allergy-and-hayfever",
        },
        {
            name: "Piriton 2mg/5ml 150ml Syrup",
            discount: 6,
            price: 117.0,
            category: "allergy-and-hayfever",
        },
        { name: "Piriton Original 4mg Tablets", price: 46.2, category: "allergy-and-hayfever" },
        { name: "Nurofen 100mg/5ml Syrup", price: 103.5, category: "fever-and-pain" },
        {
            name: "L Montus 5mg/10mg Tablets",
            discount: 12,
            price: 97.86,
            category: "allergy-and-hayfever",
        },
        { name: "Histazine 10mg Tablets", price: 14.0, category: "allergy-and-hayfever" },
        { name: "Hayzine 10mg Tablets", discount: 8, price: 12.0, category: "allergy-and-hayfever" },
        { name: "E-Panol 120mg/5ml Syrup", price: 14.5, category: "fever-and-pain" },
        { name: "Cetrizan 10mg Tablets", price: 15.2, category: "allergy-and-hayfever" },
        { name: "Cetapol Pm 120mg/5ml Syrup", price: 12.0, category: "fever-and-pain" },
    ],
    "Medicines & Treatments": [
        { name: "Sudafed Sinus Strength 16 Doses Capsules", price: 36.0, category: "" },
        { name: "Milk of Magnesia Starwin 360ml Suspension", price: 44.5, category: "stomach-and-bowel" },
        { name: "Panadol 125mg/5ml 60ml Syrup", price: 8.5, category: "pain", discount: 6 },
        { name: "Nurofen Migraine Pain 342 12 Doses Tablets", price: 41, category: "pain", discount: 8 },
        { name: "Novamol 1g Suppositories", price: 23.3, category: "pain" },
        { name: "Mucolex Adult Expectorant 125ml Syrup", price: 39, category: "" },
        { name: "Menthox 4 Doses Lozenges", price: 30.5, category: "cough-cold-and-flu" },
        { name: "Hydrogen Peroxide Care 200ml", price: 24.5, category: "first-aid" },
        { name: "Flotac 75mg Capsule", price: 197.6, category: "pain", discount: 17 },
        { name: "Duclolax 5mg Suppositories", price: 16.95, discount: 8, category: "stomach-and-bowel" },
        { name: "Buscopan Original 10mg Tablets", price: 80.64, category: "pain" },
        { name: "Buscopan Cramps 10mg Tablets", price: 111.4, discount: 5, category: "pain" },
        { name: "Benylin Chesty Cough 150ml Syrup", price: 114.5, category: "" },
        { name: "Zubes Expectorant 125ml Syrup", price: 23.5, category: "" },
        { name: "Zentel 100mg/5ml 20ml Suspension", price: 39.0, category: "stomach-and-bowel" },
        { name: "Zentel 200mg 2 Doses Tablets", price: 23.5, category: "stomach-and-bowel" },
        { name: "Xylo Acino 0 1 10ml Nasal Drop", price: 167.5, discount: 4, category: "" },
        { name: "Wormplex 400 Tablet", price: 14.5, category: "stomach-and-bowel" },
        { name: "Wormplex 400 Suspension", price: 17.5, discount: 9, category: "" },
        { name: "Voltfast 50mg Sachet", price: 186.6, discount: 8, category: "pain" },
        { name: "Viscof S Expectorant 100ml Syrup", price: 40, category: "" },
        { name: "Viscof D Dry Cough 100ml Syrup", price: 43.0, category: "" },
        { name: "Vermox 20mg/ml 30ml Suspension", price: 45.0, discount: 6, category: "stomach-and-bowel" },
        { name: "Tcp 200ml", price: 135.0, category: "first-aid" },
        { name: "Tcp 100ml", price: 112.0, category: "first-aid" },
        { name: "Surfaz Sn Triple Action Cream 15g", price: 32, discount: 8, category: "skincare" },
        { name: "Stopkof Cold & Catarrh 100ml Syrup", price: 27.0, category: "" },
        { name: "Stopkof Child 100ml Syrup", price: 28.0, category: "" },
        { name: "Refresh Tears Eye Drops", price: 179.5, discount: 5, category: "eye-care" },
        { name: "Refresh Liquigel Eye Drops", price: 180.5, category: "eye-care" },
        { name: "Pre Meco 75mg/740mg Capsules", price: 102.3, category: "" },
        { name: "Para Denk 250mg Suppositories", price: 59.3, category: "pain" },
        { name: "Para Denk 125mg Suppositories", price: 50.0, category: "pain" },
        { name: "Paracetamol 500mg 10 Doses Tablets", price: 208.0, category: "pain" },
        { name: "Panadol Extra 500mg/65mg 10 Doses Tablets", price: 42.3, category: "pain" },
        { name: "Panadol Advance 500mg 16 Doses Tablets", price: 43.0, category: "pain" },
        { name: "Normo Tears 15ml Eye Drops", price: 44.0, discount: 5, category: "eye-care" },
        { name: "Neo Cort Een 10ml Eye Drop", price: 61.5, discount: 4, category: "eye-care" },
        { name: "Naprosyn Ec 500mg Tablets", price: 1306, discount: 5, category: "pain" },
        { name: "Naklofen Duo 75mg Tablets", price: 89.4, discount: 10, category: "pain" },
        { name: "Mist Senna Co", price: 9.0, category: "" },
        { name: "Menthodex 200ml Syrup", price: 48.0, category: "" },
        { name: "Menthodex 100ml Syrup", price: 37.5, category: "" },
        { name: "Menthodex Lozenges", price: 34.0, category: "" },
    ],
    "Sexual Health": [
        { name: "Kiss Classic Condom 3 Pieces", price: 6.0, category: "condoms" },
        { name: "Kiss Strawberry Condom 3 Pieces", price: 6.0, category: "condoms" },
        { name: "Unidus Delay Condoms 3 Pieces", price: 21.5, category: "condoms" },
        { name: "Rough Rider Condoms 3 Pieces", price: 28.5, category: "condoms" },
        { name: "Ky Jelly 82g", price: 147.0, category: "lubricants-and-gels" },
        { name: "Kiss Condom 3 Pieces", price: 6.0, category: "condoms" },
        { name: "Fiesta Classic Condom 3 Pieces", price: 7.0, category: "condoms" },
        { name: "Fiesta Dotted Condom 3 Pieces", price: 6.0, category: "condoms" },
    ],
};
