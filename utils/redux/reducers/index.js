import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  initialData: [],
  savedData: [],
};

export const dataSlice = createSlice({
  name: "saveData",
  initialState,
  reducers: {
    setInitialData: (state, action) => {
      state.initialData = action.payload;
    },
    saveData: (state, action) => {
      state.savedData = action.payload;
    },
    filterData: (state, action) => {
      state.savedData = state.initialData.filter((a) => {
        return (
          a.actionType === action.payload.actionType ||
          a.applicationType === action.payload.applicationType ||
          a.logId == action.payload.applicationId ||
          a.creationTimestamp === action.payload.fromDate
        );
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveData, filterData, setInitialData } = dataSlice.actions;

export default dataSlice.reducer;
