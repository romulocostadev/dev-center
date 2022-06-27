import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { api as solutionApi, SolutionsResponse } from '../../services/solution';
import type { RootState } from '../store';

interface SolutionProps {
  solutions: SolutionsResponse[];
}

const initialState: SolutionProps = {
  solutions: [],
};

export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setSolutions: (state, action: PayloadAction<any>) => {
      state.solutions = action.payload.solutions;
    },
  },
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
    builder.addMatcher(
      solutionApi.endpoints.deleteSolution.matchFulfilled,
      (state, action) => {
        state.solutions = state.solutions.filter(
          x => x.Id !== action.meta.arg.originalArgs.Uid,
        );
      },
    );
  },
});

export const { setSolutions } = counterSlice.actions;

export const solutionsSortByName = (state: RootState) => {
  return state.solution.solutions
    ?.slice()
    .sort((a, b) => a.Name.localeCompare(b.Name));
};

export const solutionsSortByDate = (state: RootState) => {
  return state.solution.solutions
    ?.slice()
    .sort((a, b) => a.Name.localeCompare(b.Name));
};

export default counterSlice.reducer;
