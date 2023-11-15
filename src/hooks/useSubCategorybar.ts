import { create } from "zustand";

interface CategoriesModal {
    subIsOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useSubCategorybar = create<CategoriesModal>((set) => ({
    subIsOpen: false,
    onOpen: () => set({ subIsOpen: true }),
    onClose: () => set({ subIsOpen: false }),
}));

export default useSubCategorybar;
