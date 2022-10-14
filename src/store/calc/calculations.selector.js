import { createSelector } from 'reselect';

const selectCalcReducer = (state) => state.calc;

export const selectCalcResetDisplayFormulaOnNextNumberClick = createSelector(
  [selectCalcReducer],
  (calc) => calc.calcResetDisplayFormulaOnNextNumberClick
) 

export const selectCalcResetDisplayResultOnNextNumberClick = createSelector(
  [selectCalcReducer],
  (calc) => calc.calcResetDisplayResultOnNextNumberClick
) 

export const selectCalcDisplayFormula = createSelector(
  [selectCalcReducer],
  (calc) => calc.calcDisplayFormula
) 

export const selectCalcResultNumbers = createSelector(
  [selectCalcReducer],
  (calc) => calc.calcDisplayResultNumbers
);

export const selectCalcResultString = createSelector(
    [selectCalcReducer],
    (calc) =>{
        return calc.calcDisplayResultString
    } 
  );