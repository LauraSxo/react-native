import React, {createContext, useReducer} from 'react';

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'a pair of shoes',
        amount: 59.99,
        date: new Date('2021-12-09')
    },
    {
        id: 'e2',
        description: 'a pair of trousers',
        amount: 82.29,
        date: new Date('2021-12-05')
    },
    {
        id: 'e3',
        description: 'bananas',
        amount: 5.99,
        date: new Date('2021-12-01')
    },
    {
        id: 'e6',
        description: 'bananas',
        amount: 5.99,
        date: new Date('2022-06-28')
    },
    {
        id: 'e4',
        description: 'a book',
        amount: 14.99,
        date: new Date('2021-02-19')
    },
    {
        id: 'e5',
        description: 'another book',
        amount: 18.59,
        date: new Date('2021-02-18')
    },
]

export const ExpenseContext = createContext({
    expenses: [],
    addExpense: ({description, amount, date}) => {},
    deleteExpense: (id) => {},
    updateExpense: (id, {description, amount, date}) => {}
});

function expensesReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            const id = new Date().toString() + Math.random().toString();
            return [{...action.payload, id: id}, ...state];
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
    const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

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
        addExpense: addExpense,
        deleteExpense: deleteExpense,
        updateExpense: updateExpense,
    };

    return <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
}

export default ExpensesContextProvider;
