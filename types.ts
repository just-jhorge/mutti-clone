export interface Category {
    category_label: string;
    category_image: string;
    category_link: string;
}

interface SubCategoryItem {
    label: string;
}

interface SubCategory {
    categoryLink: string;
    subCategories: SubCategoryItem[];
}

export interface SubCategories {
    [category: string]: SubCategory;
}
