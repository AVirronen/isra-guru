import './App.css';
import {Component} from "react";
import ViewEvent from "./components/view_event/ViewEvent";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     activePage: listEvents // обращается тут к константам
  //   }
  // }

  render() {
    return (
        <div>
          <ViewEvent/>
        </div>
    );
  }
}

export default App;
