import { create } from "zustand";

interface CategoriesModal {
    activeCategory: string;
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    setActiveCategory: (arg0: string) => void;
}

const useSidebarModal = create<CategoriesModal>((set) => ({
    activeCategory: "Baby & Child Health",
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
    setActiveCategory: (category) => set({ activeCategory: category }),
}));

export default useSidebarModal;
