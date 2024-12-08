import './App.css';
import React, { Component } from 'react'
import Header from './Component/Header/Header';
import BookDataTable from './Component/BookDataTable/BookDataTable';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <form action="">
          <div className='input-wrapper'>
            <input type="text" placeholder='Book Name'/>
          </div>
          <div className='input-wrapper'>
            <input type="text" placeholder='Author'/>
          </div>
          <div className='input-wrapper'>
            <input type="text" placeholder='Year Of Publication'/>
          </div>
          <div className='button-wrapper'>
            <button>Add Book</button>
          </div>
        </form>
        <table>
          <thead>
              <tr>
                <th>Name</th>
                <th>Author</th>
                <th>Year</th>
              </tr>
          </thead>
          <tbody>
            <BookDataTable />
          </tbody>
        </table>
      </div>
    )
  }
}