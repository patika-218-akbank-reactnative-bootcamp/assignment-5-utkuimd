import { configureStore, createSlice, combineReducers } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: [],
    },
    reducers: {
        setUser: (state, action) => {
            return {
                user: action.payload,
            };
        },
    },
});

const musicListSlice = createSlice({
    name: 'musicList',
    initialState: {
        musicList: [],
    },
    reducers: {
        setMusicList: (state, action) => {
            return {
                musicList: action.payload,
            };
        },
    },
});

export const {setUser} = userSlice.actions;
export const {setMusicList} = musicListSlice.actions;

export const store = configureStore({
    reducer: combineReducers({
        user: userSlice.reducer,
        musicList: musicListSlice.reducer,
    }),
});