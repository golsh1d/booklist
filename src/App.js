import './App.css';
import React, { Component } from 'react'
import Header from './Component/Header/Header';
import BookDataTable from './Component/BookDataTable/BookDataTable';

export default class App extends Component {
  constructor(props) {
    super (props)

    this.state = {
      nameInput : '' ,
      authorInput : '' ,
      yearInput : '' ,
      booksData : [] ,
    }

    this.nameHandler = this.nameHandler.bind(this)
    this.authorHandler = this.authorHandler.bind(this)
    this.yearHandler = this.yearHandler.bind(this)    
    this.formSubmitHandler = this.formSubmitHandler.bind(this)    
  }

  nameHandler(event) {
    this.setState({
      nameInput : event.nativeEvent.target.value
    })
  }

  authorHandler(event) {
    this.setState({
      authorInput : event.nativeEvent.target.value
    })
  }

  yearHandler(event) {
    this.setState({
      yearInput : event.nativeEvent.target.value
    })
  }  

  formSubmitHandler(event) {
    event.preventDefault()

    let newBookData = {
      id : this.state.booksData.length + 1 ,
      name : this.state.nameInput ,
      author : this.state.authorInput ,
      year : this.state.yearInput ,
    }

    if (this.state.nameInput && this.state.authorInput && this.state.yearInput) {
      this.setState(prevState => {
        return {booksData : [...prevState.booksData, newBookData]}
      })
    }

    this.setState({
      nameInput : '' ,
      authorInput : '' ,
      yearInput : '' ,
    })
  }

  render() {
    return (
      <div>
        <Header />
        <form action="" onSubmit={(event) => this.formSubmitHandler(event)}>
          <div className='input-wrapper'>
            <input type="text" placeholder='Book Name' value={this.state.nameInput} onChange={(event) => this.nameHandler(event)}/>
          </div>
          <div className='input-wrapper'>
            <input type="text" placeholder='Author' value={this.state.authorInput} onChange={(event) => this.authorHandler(event)}/>
          </div>
          <div className='input-wrapper'>
            <input type="text" placeholder='Year Of Publication' value={this.state.yearInput} onChange={(event) => this.yearHandler(event)}/>
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
            {this.state.booksData.map(bookData => (
              <BookDataTable key={bookData.id} {...bookData}/>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}