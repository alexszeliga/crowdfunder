// /client/App.js
import React, { Component } from "react";
// import axios from "axios";
import Nav from "./components/nav";
import Hero from "./components/body/hero";
import ThreeUp from "./components/body/threeUp";
import FormTest from "./components/formTest/formTest";
import { library } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faSchool,
  faQuidditch,
  faFlask
} from "@fortawesome/free-solid-svg-icons";
import { StyleSheet, css } from "aphrodite";

library.add(faSearch);
library.add(faSchool);
library.add(faQuidditch);
library.add(faFlask);

const styles = StyleSheet.create({
  body: {
    overflowX: "hidden"
  }
});
class App extends Component {
  // initialize our state
  state = {
    clientWidth: 0
  };

  updateDimension = () => {
    this.setState({ clientWidth: window.innerWidth });
  };

  // when component mounts, first thing it does is fetch all existing data in our db

  // then we incorporate a polling logic so that we can easily see if our db has
  // changed and implement those changes into our UI
  componentDidMount() {
    window.addEventListener("resize", this.updateDimension);
    this.updateDimension();
    // this.getDataFromDb();
    // if (!this.state.intervalIsSet) {
    //   let interval = setInterval(this.getDataFromDb, 10000);
    //   this.setState({ intervalIsSet: interval });
    // }
  }

  // never let a process live forever
  // always kill a process everytime we are done using it
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimension);
    // if (this.state.intervalIsSet) {
    //   clearInterval(this.state.intervalIsSet);
    //   this.setState({ intervalIsSet: null });
    // }
  }

  // just a note, here, in the front end, we use the id key of our data object
  // in order to identify which we want to Update or delete.
  // for our back end, we use the object id assigned by MongoDB to modify
  // data base entries

  // our first get method that uses our backend api to
  // fetch data from our data base
  getDataFromDb = () => {
    // fetch("/api/getData")
    //   .then(data => data.json())
    //   .then(res => this.setState({ data: res.data }));
  };

  // our put method that uses our backend api
  // to create new query into our data base
  putDataToDB = message => {
    // let currentIds = this.state.data.map(data => data.id);
    // let idToBeAdded = 0;
    // while (currentIds.includes(idToBeAdded)) {
    //   ++idToBeAdded;
    // }
    // axios.post("/api/putData", {
    //   id: idToBeAdded,
    //   message: message
    // });
  };

  // our delete method that uses our backend api
  // to remove existing database information
  deleteFromDB = idTodelete => {
    // let objIdToDelete = null;
    // this.state.data.forEach(dat => {
    //   if (dat.id === idTodelete) {
    //     objIdToDelete = dat._id;
    //   }
    // });
    // axios.delete("/api/deleteData", {
    //   data: {
    //     id: objIdToDelete
    //   }
    // });
  };

  // our update method that uses our backend api
  // to overwrite existing data base information
  updateDB = (idToUpdate, updateToApply) => {
    // let objIdToUpdate = null;
    // this.state.data.forEach(dat => {
    //   if (dat.id === idToUpdate) {
    //     objIdToUpdate = dat._id;
    //   }
    // });
    // axios.post("/api/updateData", {
    //   id: objIdToUpdate,
    //   update: { message: updateToApply }
    // });
  };

  // here is our UI
  // it is easy to understand their functions when you
  // see them render into our screen
  render() {
    return (
      <div className={css(styles.body)}>
        <Nav clientWidth={this.state.clientWidth} />
        <Hero clientWidth={this.state.clientWidth} />
        <ThreeUp clientWidth={this.state.clientWidth} />
        <FormTest />
      </div>
    );
  }
}

export default App;
