import React, {createContext, useReducer} from 'react';

export const ExpenseContext = createContext({
    expenses: [],
    setExpenses: () => {},
    addExpense: ({description, amount, date}) => {},
    deleteExpense: (id) => {},
    updateExpense: (id, {description, amount, date}) => {}
});

function expensesReducer(state, action) {
    switch (action.type) {
        case 'SET':
            const inverted = action.payload.reverse();
            return inverted;
        case 'ADD':
            return [action.payload, ...state];
        case 'UPDATE':
            const itemIndex = state.findIndex((i) => i.id === action.payload.id);
            const updatableItem = state[itemIndex];
            const updatedItem = {...updatableItem, ...action.payload.data};
            const expenses = [...state];
            expenses[itemIndex] = updatedItem;
            return expenses;
        case 'DELETE':
            return state.filter((i) => i.id !== action.payload.id)
        default:
            return state;
    }
}

function ExpensesContextProvider({children}) {
    const [expensesState, dispatch] = useReducer(expensesReducer, []);

    function setExpenses(expenses) {
        dispatch({type: 'SET', payload: expenses})
    }

    function addExpense(expenseData) {
        dispatch({type: 'ADD', payload: expenseData});
    }
    function deleteExpense(id) {
        dispatch({type: 'DELETE', payload: {id: id}});
    }
    function updateExpense(id, expenseData) {
        dispatch({type: 'UPDATE', payload: {id : id, expenseData: expenseData}});
    }

    const value = {
        expenses: expensesState,
        setExpenses: setExpenses,
        addExpense: addExpense,
        deleteExpense: deleteExpense,
        updateExpense: updateExpense,
    };

    return <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
}

export default ExpensesContextProvider;
