import { createSlice } from '@reduxjs/toolkit';
import { QuestGenre, SliceNames } from 'consts';

const initialState = {
  questGenre: QuestGenre.All,
  quests: [],
  isDataLoaded: true,
  serverErrorStatus: false,
  isWrongIdRequest: false,
};

const mainSlice = createSlice({
  name: SliceNames.Main,
  initialState,
  reducers: {
    setQuestGenre: (state, action) => {
      state.questGenre = action.payload;
    },
    setQuests: (state, action) => {
      state.quests = action.payload;
    },
    addQuest: (state, action) => {
      state.quests.push(action.payload);
    },
    setIsDataLoaded: (state, action) => {
      state.isDataLoaded = action.payload;
    },
    setServerErrorStatus: (state) => {
      state.serverErrorStatus = true;
    },
    setWrongIdRequest: (state, action) => {
      state.isWrongIdRequest = action.payload;
    },
  },
});

export const mainReducer = mainSlice.reducer;
export const {
  setQuestGenre,
  setQuests,
  addQuest,
  setIsDataLoaded,
  setServerErrorStatus,
  setWrongIdRequest,
} = mainSlice.actions;
