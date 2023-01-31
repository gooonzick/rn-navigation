import { useContext } from "react";
import { FavoriteContext } from "./provider";

export const useFavoriteIdsContext = () => useContext(FavoriteContext);
