import { getHomeGoodPriceData, getHomeHighScoreData } from "@/services";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchHomeDataAction = createAsyncThunk(
  "fetchdata",
   (payload, {dispatch}) => {
     getHomeGoodPriceData().then(res => {
        dispatch(changeGoodPriceInfoAction(res))
     })
    // return res;
    getHomeHighScoreData().then(res => {
        dispatch(changeHighScoreInfoAction(res))
    })

  });

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {}
  },

  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },

    changeHighScoreInfoAction(state, {payload}) {
      state.highScoreInfo = payload
    }
  },

  // extraReducers:(builder) => {
  //   builder.addCase(fetchHomeDataAction.fulfilled, (state, { payload }) => {
  //     state.goodPriceInfo = payload;
  //   });
  // },
});

export const { changeGoodPriceInfoAction, changeHighScoreInfoAction } = homeSlice.actions;

export default homeSlice.reducer;
