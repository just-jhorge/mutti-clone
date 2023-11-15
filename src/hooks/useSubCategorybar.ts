import { create } from "zustand";

interface CategoriesModal {
    subIsOpen: boolean;
    subOnOpen: () => void;
    subOnClose: () => void;
}

const useSubCategorybar = create<CategoriesModal>((set) => ({
    subIsOpen: false,
    subOnOpen: () => set({ subIsOpen: true }),
    subOnClose: () => set({ subIsOpen: false }),
}));

export default useSubCategorybar;
