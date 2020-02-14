import React, { Component as Comp } from 'react'
import axios from 'axios'

export default class TransactionField extends Comp {
  constructor() {
    super()
    this.state = {
      userInput: ''
    }
  }

  handleInput = event => {
    this.setState({
      userInput: +event.target.value
    })
  }

  handleSubmit = () => {
    const { userInput } = this.state
    const { getTransactions } = this.props
    axios
      .post('/api/transactions', { amount: userInput })
      .then(() => getTransactions())
      .catch(err => console.log(err))
    this.setState({
      userInput: ''
    })
  }

  render() {
    const { userInput } = this.state
    const { transactions } = this.props
    let arr = transactions.map((elm, index) => {
      return (
        <li key={index}>
          <p>Date: {elm.t_date}</p>
          {elm.t_amount < 0 ? (
            <p style={{ color: 'red' }}>Amt: {elm.t_amount}</p>
          ) : (
            <p>{elm.t_amount}</p>
          )}
        </li>
      )
    })
    return (
      <section>
        <header>Bank Website</header>
        <label for='amount'> transaction amount</label>
        <input
          id='amount'
          type='number'
          value={userInput}
          onChange={this.handleInput}
          placeholder={0}
        ></input>
        <button onClick={this.handleSubmit}>Submit</button>
        <ul>{arr}</ul>
      </section>
    )
  }
}
