import { createContext, useState } from 'react';

export const FavoriteContext = createContext({
    ids: [],
    addFavorites: (id) => {},
    removeFavorites: (id) => {}
})

function FavoritesContextProvider({children}) {
    const [favoriteMealIds, setFavoriteMealIds] = useState([]);
    function addFavorites(id) {
        setFavoriteMealIds((currentFavIds) => [...currentFavIds, id])
    }
    function removeFavorites(id) {
        setFavoriteMealIds(currentFavIds => currentFavIds.filter(mealId => mealId !== id))
    }
    const value = {
        ids: favoriteMealIds,
        addFavorites: addFavorites,
        removeFavorites: removeFavorites,
    }
    return (
        <FavoriteContext.Provider value={value}>{children}</FavoriteContext.Provider>
    )
}

export default FavoritesContextProvider;