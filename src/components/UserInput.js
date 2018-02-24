import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props){
    super(props)

    this.state = {
      username: '',
      hometown: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // here i believe is where the dispatch function should get called - once the form has been submited
    this.props.store.dispatch({
      type: "ADD_USER",
      user: this.state
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="username" onChange={this.handleChange}/>
          <input type="text" name="hometown" onChange={this.handleChange}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;


// 1) has an text input for the username field
// 2) has an initial state with username key set to empty string
// 3) has an initial state with hometown key set to empty string
// 4) has changes the state of username on change of the username input
// 5) has changes the state of hometown on change of the hometown input
// 6) updates the store when the form is submitted
