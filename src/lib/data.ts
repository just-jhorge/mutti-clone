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
            dosage: "10mg",
            discount: 10,
            price: 399.3,
            category: "allergy-and-hayfever",
        },
        {
            name: "Cetirizine 10mg Tablets UK",
            dosage: "10mg",
            discount: 4,
            price: 23.4,
            category: "allergy-and-hayfever",
        },
        { name: "Bell's Baby Gripe Mixture 100ml", dosage: "", price: 17.0, category: "colic-management" },
        { name: "Zirtek 10mg Tablets", dosage: "10mg", discount: 8, price: 71.96, category: "allergy-and-hayfever" },
        {
            name: "Ventolin 100mcg Inhaler",
            dosage: "100mcg",
            discount: 8,
            price: 111.0,
            category: "allergy-and-hayfever",
        },
        { name: "Teething Mixture Ecl 100ml Syrup", dosage: "", discount: 12, price: 25.5, category: "teething" },
        {
            name: "Rhizin 5mg/5ml 30ml Syrup",
            dosage: "5mg/5ml",
            discount: 7,
            price: 7.5,
            category: "allergy-and-hayfever",
        },
        {
            name: "Piriton 2mg/5ml 150ml Syrup",
            dosage: "2mg/5ml",
            discount: 6,
            price: 117.0,
            category: "allergy-and-hayfever",
        },
        { name: "Piriton Original 4mg Tablets", dosage: "4mg", price: 46.2, category: "allergy-and-hayfever" },
        { name: "Nurofen 100mg/5ml Syrup", dosage: "100mg/5ml", price: 103.5, category: "fever-and-pain" },
        {
            name: "L Montus 5mg/10mg Tablets",
            dosage: "5mg/10mg",
            discount: 12,
            price: 97.86,
            category: "allergy-and-hayfever",
        },
        { name: "Histazine 10mg Tablets", dosage: "10mg", price: 14.0, category: "allergy-and-hayfever" },
        { name: "Hayzine 10mg Tablets", dosage: "10mg", discount: 8, price: 12.0, category: "allergy-and-hayfever" },
        { name: "E-Panol 120mg/5ml Syrup", dosage: "120mg/5ml", price: 14.5, category: "fever-and-pain" },
        { name: "Cetrizan 10mg Tablets", dosage: "10mg", price: 15.2, category: "allergy-and-hayfever" },
        { name: "Cetapol Pm 120mg/5ml Syrup", dosage: "120mg/5ml", price: 12.0, category: "fever-and-pain" },
    ],
    "Sexual Health": [
        { name: "Kiss Classic Condom 3 Pieces", dosage: "", price: 6.0, category: "condoms" },
        { name: "Kiss Strawberry Condom 3 Pieces", dosage: "", price: 6.0, category: "condoms" },
        { name: "Unidus Delay Condoms 3 Pieces", dosage: "", price: 21.5, category: "condoms" },
    ],
};
