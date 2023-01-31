import React, { createContext, useCallback, useMemo, useState } from "react";

type FavoriteContextType = {
  ids: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
};

export const FavoriteContext = createContext<FavoriteContextType | null>(null);

type Props = {
  children: React.ReactNode;
};

const FavoriteContextProvider = ({ children }: Props) => {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  const addFavorite = useCallback((id: string) => {
    setFavoriteIds((prev) => [...prev, id]);
  }, []);

  const removeFavorite = useCallback((id: string) => {
    setFavoriteIds((prev) => prev.filter((mealId) => mealId !== id));
  }, []);

  const contextValue: FavoriteContextType = useMemo(() => {
    return {
      ids: favoriteIds,
      addFavorite,
      removeFavorite,
    };
  }, [favoriteIds, removeFavorite, addFavorite]);

  return (
    <FavoriteContext.Provider value={contextValue}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContextProvider;
