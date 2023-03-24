import './App.css';
import React, {Component} from "react";
import {Link, Route, Routes} from "react-router-dom";
import {
    eventCreate,
    eventList,
    filterLevel,
    filterPlace,
    guideInfo,
    payment,
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
import Card from "./components/project_1/card/Card";
import Level from "./components/project_1/search/Level";
import Place from "./components/project_1/search/Place";
import EventList from "./components/project_2/event_list/EventList";
import EventCreat from "./components/project_2/event_creat/EventCreat";

class App extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route path={`/`} element=
                        {<div className={style.mainListEvents}>
                            <div className={style.navigation}>
                                <Navigation/>
                            </div>
                            <div className={style.filters}>
                                <div className={style.cards}>
                                    <Card/>
                                    <Card/>
                                    <Card/>
                                    <h2>
                                        <Link to={`/${eventList}`}>Авторизация гида</Link>
                                    </h2>
                                </div>
                            </div>
                        </div>}/>
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
                    <Route path={`${viewEvent}`} element={<ViewEvent/>}/>
                    <Route path={`${singUp}`} element={<SignUp/>}/>
                    <Route path={`${payment}`} element={<Payment/>}/>
                    <Route path={`${thankYou}`} element={<ThankYou/>}/>
                    <Route path={`${guideInfo}`} element={<GuideInfo/>}/>
                    <Route path={`${eventList}`} element={<EventList/>}/>
                    <Route path={`${eventCreate}`} element={<EventCreat/>}/>
                </Routes>
            </div>
        );
    }
}

export default App;
