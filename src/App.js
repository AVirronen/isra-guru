import './App.css';
import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import Layout from "./components/layout/Layout";
import SignUp from "./components/singup_event/SignUp";
import ThankYou from "./components/thank_you_page/ThankYou";
import ListEvents from "./components/list_events/ListEvents";

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
            <ListEvents/>
        </div>
        // <>
        //     <Routes>
        //         <Route path={'/'} element={<Layout />}>
        //             <Route index element={<SignUp />} />
        //             <Route path={'/thankyou'} element={<ThankYou />} />
        //         </Route>
        //     </Routes>
        // </>
    );
  }
}

export default App;
