import { create } from "zustand";
import { ArticleType } from "../components/types/types";

type FavStoreState = {
  favList: ArticleType[];
  addToFavList: (article: ArticleType) => void;
  removeFromFavList: (id: string) => void;
};

const useFavStore = create<FavStoreState>((set) => ({
  favList: [],
  addToFavList: (article) =>
    set((state) => ({ favList: [...state.favList, article] })),
  removeFromFavList: (title: string) =>
    set((state) => ({
      favList: state.favList.filter((item: any) => item.title !== title),
    })),
}));

export default useFavStore;
