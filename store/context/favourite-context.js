import React, {createContext, useState} from 'react';

export const FavouritesContext = createContext({
    ids: [],
    addFavourite: (id) => {},
    removeFavourite: (id) => {}
});

function FavoritesContextProvider({children}) {
    const [favoriteIds, setFavouritesId] = useState([]);

    function addFavourite(id) {
        setFavouritesId((prev) => {
            return [...prev, id]
        });
    }

    function removeFavourite(id) {
        setFavouritesId((prev) => prev.filter((cId) => cId !== id));
    }

    const value = {
        ids: favoriteIds,
        addFavourite: addFavourite,
        removeFavourite: removeFavourite,
    }

    return <FavouritesContext.Provider value={value}>{children}</FavouritesContext.Provider>;
}

export default FavoritesContextProvider;
