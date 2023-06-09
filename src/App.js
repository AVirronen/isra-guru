import './App.css';
import React from "react";
import {Route, Routes} from "react-router-dom";
import {
    authorization, error, eventCreate,
    eventList,
    filterLevel,
    filterPlace,
    guideInfo,
    payment, register,
    singUp,
    thankYou,
    viewEvent
} from "./utils/constants";
import ViewEvent from "./components/project_1/view_event/ViewEvent";
import SignUp from "./components/project_1/singup_event/SignUp";
import Payment from "./components/project_1/payment/Payment";
import ThankYou from "./components/project_1/thank_you_page/ThankYou";
import GuideInfo from "./components/project_1/guide_info/GuideInfo";
import style from "./components/project_1/list_events/listEvents.module.css";
import Navigation from "./components/project_1/list_events/navigation/Navigation";
import Level from "./components/project_1/search/Level";
import Place from "./components/project_1/search/Place";
import EventList from "./components/project_2/event_list/EventList";
import ListEvents from "./components/project_1/list_events/ListEvents";
import Authorization from "./components/authorization/Authorization";
import ErrorPage from "./components/authorization/ErrorPage";
import Register from "./components/authorization/Register";
import EventCreat from "./components/project_2/event_creat/EventCreat";

const App = (props) => {

    return (
        <div>
            <Routes>
                <Route path={`/`} element=<ListEvents/>/>

                <Route path={`${filterLevel}`} element={
                    <div className={style.mainListEvents}>
                        <div className={style.navigation}>
                            <Navigation/>
                        </div>
                        <div className={style.filters}>
                            <Level/>
                        </div>
                    </div>}/>
                <Route path={`${filterPlace}`} element={
                    <div className={style.mainListEvents}>
                        <div className={style.navigation}>
                            <Navigation/>
                        </div>
                        <div className={style.filters}>
                            <Place/>
                        </div>
                    </div>}/>

                <Route path={`${viewEvent}`} element={<ViewEvent prop1={props.prop1}/>}/>

                <Route path={`${singUp}`} element={<SignUp prop1={props.prop1}/>}/>
                <Route path={`${payment}`} element={<Payment prop1={props.prop1} prop2={props.count}/>}/>
                <Route path={`${thankYou}`} element={<ThankYou prop1={props.prop1} prop2={props.count}/>}/>
                <Route path={`${guideInfo}`} element={<GuideInfo/>}/>
                <Route path={`${eventList}`} element={<EventList/>}/>
                <Route path={`${eventCreate}`} element={<EventCreat/>}/>

                <Route path={`${authorization}`} element={<Authorization/>}/>
                <Route path={`${error}`} element={<ErrorPage/>}/>
                <Route path={`${register}`} element={<Register/>}/>
            </Routes>
        </div>
    );

}

export default App;