import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  category: "all",
  status: "all",
  search: "",
  sort: "",
  page: 1,
  pageSize: 10,
};

const testListSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    setSort: (state, action) => {
      state.sort = action.payload
    },
    setSearch: (state, action) => {
      state.search = action.payload
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setPageSize: (state, action) => {
      state.pageSize = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload
    },
    setCategory: (state, action) => {
      state.category = action.payload
    }
  }
});

export const { setSort, setSearch, setPage, setPageSize, setStatus, setCategory } = testListSlice.actions;

export default testListSlice.reducer;