import React from 'react';
import './App.css';
import { Header } from './components/header';
import {Balance} from './components/balance';
import {IncomeExpenses} from './components/income Expenses';
import {TransactionList} from './components/TransactionList';
import {AddTransaction} from './components/addTransaction';
//import {notificationConfigure} from './firebaseService';


import {GlobalProvider} from './context/GlobalState';
function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
      </div>
     
      </GlobalProvider>
    

     
  );
}

export default App;
