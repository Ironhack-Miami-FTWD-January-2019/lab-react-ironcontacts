import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'

class App extends Component {

  state={
    contacts: contacts.splice(0,5),
    otherContacts:contacts
  }

  showCelebrities = () => {
    let listOfCelebs = this.state.contacts.map((eachCelebrity, i)=>{
      return <div className="flex row" key={i}>{eachCelebrity.name} {eachCelebrity.popularity}
              <img width="100px" src={eachCelebrity.pictureUrl}/>
              <button onClick={()=>{
                this.deleteCeleb(i)
                }}>Delete</button>
             </div>
    })
    return listOfCelebs;
  }

  deleteCeleb = (i) => {
    let listOfCelebsCopy = [...this.state.contacts]
    listOfCelebsCopy.splice(i,1)
    this.setState({
      contacts:listOfCelebsCopy
    })

  }
  addAContact = () => {
    let newContacts = [ ...this.state.contacts ]
    let otherContacts = [ ...this.state.otherContacts ] 
    let randomContact = otherContacts[Math.floor(Math.random()*otherContacts.length-1)]    
    newContacts.push(randomContact)
    this.setState({
        contacts:newContacts
    })
  }

  sortByName = (something) => {

    let sortedContacts = [ ...this.state.contacts ]
    sortedContacts.sort(function(a, b){
      if(a[something] < b[something]) { return -1; }
      if(a[something] > b[something]) { return 1; }
      return 0;
    })

    this.setState({
      contacts:sortedContacts
    })

  }

  render() {

    console.log(contacts)

    return (
      <div className="App">
        <h1>Iron Contacts</h1>
        <header>
          
        </header>
          <button onClick={this.addAContact}>Add Contact</button>
          <button onClick={()=>{this.sortByName('name')}}>Sort By Name</button>
          <button onClick={()=>{this.sortByName('popularity')}}>Sort By Popularity</button>
          {this.showCelebrities()}
      </div>
    );
  }
}

export default App;
