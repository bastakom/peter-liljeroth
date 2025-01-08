import { create } from "zustand";

interface IsOpenMenu {
  open: boolean;
  setIsOpenMenu: (value: boolean) => void;
  isDropdownFooterOpen: boolean;
  setDropdownFooterOpen: (value: boolean) => void;
  isDropdownAboutOpen: boolean;
  setDropdownAboutOpen: (value: boolean) => void;
}

const useStore = create<IsOpenMenu>((set) => ({
  open: false,
  setIsOpenMenu: (value) => set({ open: value }),
  isDropdownFooterOpen: false,
  setDropdownFooterOpen: (value) => set({ isDropdownFooterOpen: value }),
  isDropdownAboutOpen: false,
  setDropdownAboutOpen: (value) => set({ isDropdownAboutOpen: value }),
}));

export default useStore;
