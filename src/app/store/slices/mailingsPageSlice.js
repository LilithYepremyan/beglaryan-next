import { getMailings } from "@/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMailings = createAsyncThunk(
  "mailingsPage/fetchMailings",
  async (page) => {
    console.log("🚀 fetchMailings started with page:", page);
    const response = await getMailings(page);
    console.log("✅ API Response:", response);

    return response;
  }
);

const initialState = {
  data: {
    mailings: [null, null, null, null],
    pagesTotal: 0,
    page: 1,
  },
  isLoading: false,
  error: null,
};

export const mailingsPageSlice = createSlice({
  name: "mailingsPage",
  initialState,
  reducers: {
    resetState: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMailings.pending, (state) => {
      state.isLoading = true;
      console.log("reduser pending")
    });
    builder.addCase(fetchMailings.fulfilled, (state, action) => {
      state.isLoading = false;

      state.data = action.payload;
      console.log("✅ fetchMailings SUCCESS:", state.data);
      console.log(state.data, "state.data mailings");
    });
    builder.addCase(fetchMailings.rejected, (state, action) => {
      state.isLoading = false;

      console.log("reducer rejected", action.error)
      state.error = action.error.message;
    });
  },
});

export const { resetState } = mailingsPageSlice.actions;

export default mailingsPageSlice.reducer;
