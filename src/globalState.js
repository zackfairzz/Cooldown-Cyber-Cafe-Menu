import { create } from "zustand";

export const useGlobalStates = create((set) => ({
  page: "",
  arPageName: "",
  entertainmentPage: "Cinema",
  productPage: "",
  lang: "",
  setLang: (lang) => set({ lang }),
  setProductPage: (productPage) => set({ productPage }),
  setEntertainmentPage: (entertainmentPage) => set({ entertainmentPage }),
  setPage: (page) => set({ page }),
  setArPageName: (arPageName) => set({ arPageName }),
}));
