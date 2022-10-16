import { createSelector } from 'reselect';

const selectHistoryReducer = (state) => state.history;

export const selectListOfHistoryResults = createSelector(
  [selectHistoryReducer],
  (history) => history.savedResultAndFormulaList
) 
