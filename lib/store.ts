import { create } from "zustand";

interface IsOpenMenu {
  open: boolean;
  setIsOpenMenu: (value: boolean) => void;
  isDropdownFooterOpen: boolean;
  setDropdownFooterOpen: (value: boolean) => void;
}

const useStore = create<IsOpenMenu>((set) => ({
  open: false,
  setIsOpenMenu: (value) => set({ open: value }),
  isDropdownFooterOpen: false,
  setDropdownFooterOpen: (value) => set({ isDropdownFooterOpen: value }),
}));

export default useStore;
