import React, { Component as Comp } from 'react'
import TransactionField from './component/TransactionField'
import axios from 'axios'
import './App.css'

export default class App extends Comp {
  constructor() {
    super()
    this.state = {
      transactions: []
    }
  }
  getTransactions = () => {
    axios.get('/api/transactions').then(res => {
      this.setState({
        transactions: res.data
      })
    })
  }

  componentDidMount() {
    this.getTransactions()
  }

  render() {
    const { transactions } = this.state
    return (
      <div className='App'>
        <TransactionField
          transactions={transactions}
          getTransactions={this.getTransactions}
        />
      </div>
    )
  }
}
