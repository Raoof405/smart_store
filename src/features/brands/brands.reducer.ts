import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BrandItem } from "@/api/Brand/dto";
export type BrandsState = {
  brands: BrandItem[];
};
const initialState: BrandsState = {
  brands: [],
};

// ASYNC THUNKS

const brandSlice = createSlice({
  name: "brand",
  initialState,
  reducers: {
    SetCars: (state: BrandsState, action: PayloadAction<BrandItem[]>) => {
      state.brands = [...action.payload];
    },
  },
});

export const BrandsActions = brandSlice.actions;
export const BrandReducer = brandSlice.reducer;
