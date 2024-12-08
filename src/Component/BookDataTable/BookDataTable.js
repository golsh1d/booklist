import React, { Component } from 'react'

export default class BookDataTable extends Component {
  render() {
    let {name , author , year} = this.props
    return (
      <tr>
        <td>{name}</td>
        <td>{author}</td>
        <td>{year}</td>
      </tr>
    )
  }
}