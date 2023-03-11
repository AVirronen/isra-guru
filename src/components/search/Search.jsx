import React from 'react';
import Navigation from "../list_events/navigation/Navigation";
import Data from "./Data";
import ListEvents from "../list_events/ListEvents";
import Level from "./Level";
import Place from "./Place";

const Search = () => {
    return (
        <div>
            <Navigation/>
            <Data/>
            <Level/>
            <Place/>
        </div>
    );
};

export default Search;