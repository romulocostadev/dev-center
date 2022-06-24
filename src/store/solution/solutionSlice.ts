import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { api as solutionApi, SolutionsResponse } from '../../services/solution';
import type { RootState } from '../store';

// Define a type for the slice state
interface SolutionProps {
  solutions: SolutionsResponse[];
}

// Define the initial state using that type
const initialState: SolutionProps = {
  solutions: [],
};

export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(
      solutionApi.endpoints.getSolutions.matchFulfilled,
      (state, { payload }) => {
        state.solutions = payload;
      },
    );
    builder.addMatcher(
      solutionApi.endpoints.addSolution.matchFulfilled,
      (state, { payload }) => {
        state.solutions.push(payload);
      },
    );
  },
});

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.solution.value;

export default counterSlice.reducer;
