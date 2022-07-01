import axios from 'axios'

const url = 'https://test-inst-22230-default-rtdb.europe-west1.firebasedatabase.app/';
const expenseDir = 'expenses.json';

export async function storeExpense(expenseData) {
    const response = await axios.post(url + expenseDir, expenseData);
    const id = response.data.name;
    return id;
}

export async function fetchExpenses() {
    let result = await axios.get(url + expenseDir)

    const expenses = []
    for (const key in result.data) {
        let item = result.data[key]
        const expense = {
            id: key,
            amount: item.amount,
            date: new Date(item.date),
            description: item.description,
        }
        expenses.push(expense)
    }

    return expenses;
}

export async function updateExpense(id, expenseData) {
    return axios.put(url + `/expenses/${id}.json`, expenseData);
}

export async function deleteExpense(id) {
    return axios.delete(url + `/expenses/${id}.json`);
}
