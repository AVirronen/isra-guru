import React, {useEffect, useState} from 'react';
import Card from "../card/Card";
import {Link} from "react-router-dom";
import style from "./listEvents.module.css";
import Navigation from "./navigation/Navigation";
import {authorization, register} from "../../../utils/constants";
import {equalTo, off, onValue, orderByChild, query, ref} from "firebase/database";
import {db} from "../../../firebase/firebase-config";


const ListEvents = () => {
        const [cards, setCards] = useState([]);

        const [dateFrom, setDateFrom] = useState('')
        const [dateTo, setDateTo] = useState('')
        const [searchFilter, setSearchFilter] = useState('')


        useEffect(() => {
            const eventsRef = ref(db, '/guide/1/event');
            const activeEventsQuery = query(eventsRef, orderByChild('status'), equalTo("active"));

            onValue(activeEventsQuery, (snapshot) => {
                const events = snapshot.val();
                if (events) {
                    const activeEvents = Object.keys(events)
                        .map((id) => ({
                            id: id,
                            ...events[id],
                        }))
                        .filter((event) => {
                            if (dateFrom !== '' || dateTo !== '') {
                                if (dateFrom !== '' && dateTo !== '' && event.data.dataFull >= dateFrom &&
                                    event.data.dataFull <= dateTo)
                                    return true;
                                else if ((dateFrom !== '' && event.data.dataFull >= dateFrom) ||
                                    (dateTo !== '' && event.data.dataFull <= dateTo)) {
                                    return true;
                                }
                                else {
                                    return false;
                                }
                            } else if (searchFilter !== '') {
                                console.log(`Filter: search term "${searchFilter}" found in event "${event.title}"`);
                                const isInSearchTitle = event.title.toLowerCase().includes(searchFilter.toLowerCase());
                                // const isInSearchName = event.name && event.name.toLowerCase().includes(searchFilter.toLowerCase());
                                const isInSearchCity = event.city.toLowerCase().includes(searchFilter.toLowerCase());
                                const isInSearchSmallDescription = event.smallDescription.toLowerCase().includes(searchFilter.toLowerCase());
                                return isInSearchTitle || isInSearchCity || isInSearchSmallDescription
                            } else {
                                return true;
                            }
                        });
                    setCards(activeEvents);
                } else {
                    setCards([]);
                }
            });
        }, [dateFrom, dateTo, searchFilter]);


        return (
            <div className={style.mainListEvents}>
                <div className={style.navigation}>
                    <Navigation setDateFrom={setDateFrom} setDateTo={setDateTo} setSearchFilter={setSearchFilter}/>
                </div>
                <div className={style.filters}>
                    <div className={style.cards}>
                        {cards.map((card) => (
                            <Card key={card.id} {...card} />
                        ))}
                        <h2>
                            <Link to={`/${authorization}`}>Login</Link>
                            <div></div>
                            <Link to={`/${register}`}>Register</Link>
                        </h2>
                    </div>
                </div>
            </div>
        )
    }
;

export default ListEvents;