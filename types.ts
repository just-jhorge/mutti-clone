export interface Category {
    category_label: string;
    category_image: string;
    category_link: string;
}

interface SubCategoryItem {
    label: string;
    subCategoryLink: string;
}

interface SubCategory {
    categoryLink: string;
    subCategories: SubCategoryItem[];
}

export interface SubCategories {
    [category: string]: SubCategory;
}

export type Medication = {
    name: string;
    discount?: number;
    price: number;
    category: string;
};

export type MedicationCategory = {
    [category: string]: Medication[];
};
