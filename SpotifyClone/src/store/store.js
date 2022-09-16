import { configureStore, createSlice, combineReducers } from "@reduxjs/toolkit";
import darkTheme from '../../src/constants/dark';
import lightTheme from '../../src/constants/light';

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

const genreMusicListSlice = createSlice({
    name: 'genreMusicList',
    initialState: {
        genreMusicList: [],
    },
    reducers: {
        setGenreMusicList: (state, action) => {
            return {
                genreMusicList: action.payload,
            };
        },
    },
});

const genreMusicImageSlice = createSlice({
    name: 'genreMusicImage',
    initialState: {
        genreMusicImage: [],
    },
    reducers: {
        setGenreMusicImage: (state, action) => {
            return {
                genreMusicImage: action.payload,
            };
        },
    },
});

const likeMusicSlice = createSlice({
    name: 'likeMusic',
    initialState: {
        likeMusic: [],
    },
    reducers: {
        setLikeMusic: (state, action) => {
            return {
                ...state,
                likeMusic: [...state.likeMusic, action.payload],
            };
        },
    },
});

const searchMusicSlice = createSlice({
    name: 'searchMusic',
    initialState: {
        searchMusic: [],
    },
    reducers: {
        setSearchMusic: (state, action) => {
            return {
                searchMusic: action.payload,
            };
        },
    },
});

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
      theme: lightTheme,
    },
    reducers: {
      handleLightTheme: state => {
        return {
          theme: state.theme === lightTheme ? darkTheme : lightTheme,
        };
      },
      handleDarkTheme: state => {
        return {
          theme: state.theme === darkTheme ? lightTheme : darkTheme,
        };
      },
    },
  });

export const {setUser} = userSlice.actions;
export const {setMusicList} = musicListSlice.actions;
export const {setGenreMusicList} = genreMusicListSlice.actions;
export const {setGenreMusicImage} = genreMusicImageSlice.actions;
export const {setLikeMusic} = likeMusicSlice.actions;
export const {setSearchMusic} = searchMusicSlice.actions;
export const {handleLightTheme} = themeSlice.actions;
export const {handleDarkTheme} = themeSlice.actions;

export const store = configureStore({
    reducer: combineReducers({
        user: userSlice.reducer,
        musicList: musicListSlice.reducer,
        genreMusicList: genreMusicListSlice.reducer,
        genreMusicImage: genreMusicImageSlice.reducer,
        likeMusic: likeMusicSlice.reducer,
        searchMusic: searchMusicSlice.reducer,
        theme: themeSlice.reducer,
    }),
});