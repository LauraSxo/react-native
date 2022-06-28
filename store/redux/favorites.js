import {createSlice} from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        ids: []
    },
    reducers: {
        addFavourite: (state, action) => {
            state.ids.push(action.payload.id)
            // return [...state.ids, action.payload.id]
        },
        removeFavourite: (state, action) => {
            state.ids.splice(state.ids.indexOf(action.payload.id), 1);
        }
    }
});

export const addFavourite = favoritesSlice.actions.addFavourite;
export const removeFavourite = favoritesSlice.actions.removeFavourite;
export default favoritesSlice.reducer;
