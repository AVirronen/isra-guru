import React from 'react';
import listEvents from '../list_events'
import Navigation from "./navigation/Navigation";
import Main from "./main/Main";

const ListEvents = () => {
    return (
        <div>
           <Navigation/>
            <Main/>
        </div>
    );
};

export default ListEvents;