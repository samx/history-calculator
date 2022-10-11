import { createSelector } from 'reselect';

const selectCalcReducer = (state) => state.calc;

export const selectCalcResultNumbers = createSelector(
  [selectCalcReducer],
  (calc) => calc.calcDisplayResultNumbers
);

export const selectCalcResultString = createSelector(
    [selectCalcReducer],
    (calc) =>{
        console.log("---->",calc)
        return calc.calcDisplayResultString
    } 
  );
