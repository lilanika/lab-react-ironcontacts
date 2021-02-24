import React, { Component } from 'react'
import './App.css';
import contacts from "./contacts.json";


export class App extends Component {
  constructor() {
    super();

    this.state = {
      renderedContacts: contacts.slice(0,5), 
      unrenderedContacts : contacts.slice(5)
      } 
    }

  // add Random Contact 
  addRandomContact = () => {

    const randomIndex = 
    Math.floor(Math.random() * this.state.unrenderedContacts.length);

    const randomContact = this.state.unrenderedContacts[randomIndex]

    const renderedContacts = [...this.state.renderedContacts, randomContact]

    const unrenderedContacts = [...this.state.unrenderedContacts]
    unrenderedContacts.splice(randomIndex , 1);

    this.setState({ 
      renderedContacts: renderedContacts,
      unrenderedContacts : unrenderedContacts
    })     
    }


  render()  {
    //console.log(this.state.contacts )
    return (
      <div  >
      <h1>IronContacts</h1>
      <button className="btn" onClick={this.addRandomContact}>Add Random Contact</button>
        <table >
         { this.state.renderedContacts.map(eachContact => {
          console.log(eachContact)
          return (
    <tbody>  
    <td>
    <img className="tbody" src={eachContact.pictureUrl}  alt="profil" /></td>
    <td>Name :{eachContact.name}</td>
    <td>Popularity:{eachContact.popularity}</td>
</tbody>

          )

        })}
          
       
        </table>
        
      </div>
    )
  }
}

export default App
