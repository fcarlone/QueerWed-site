import React, { Component } from "react";
import ToDoItems from "./toDoItems";
import Container from "../../layout/Container.js";
import axios from "axios";
import GuestList from "./GuestList";

// import "/index.css";

// class Planning extends React.Component {
//     render() {
//         return (
//             <h1>Planning Page Test</h1>
//         );
//     }

// }
class Planning extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.addItem = this.addItem.bind(this);
  }

  addItem(e) {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };
      this.setState(prevState => {
        return {
          items: prevState.items.concat(newItem)
        };
      });
    }
    this._inputElement.value = "";
    console.log(this.state.items);
    e.preventDefault();
  }

  //when anything changes in the "enter task" field, this functions updates the DOM and state
  handleChange = event => {
    console.log(event.target);
    const { name, value } = event.target;
    console.log(name, value);

    this.setState({ [name]: value });
  };

  //this part saves the item on the list to the database
  saveTask = event => {
    event.preventDefault();
    const { item } = this.state;
    axios.post("/todos", item).then(res => {
      console.log(res);
    });
  };

  render() {
    return (
      <Container>
        <div className="planningMain">
          <div className="header">
            <form onSubmit={this.addItem}>
              {/* <input ref={(a) => this._inputElement = a} */}
              {/* placeholder="enter task"> */}
              {/* </input> */}
              <input
                name="item"
                onChange={this.handleChange}
                value={this.item}
              />
              <button onClick={this.saveTask} type="submit">
                add
              </button>
            </form>
          </div>
          <ToDoItems entries={this.state.items} />
        </div>

        <GuestList />
      </Container>
    );
  }
}

export default Planning;
