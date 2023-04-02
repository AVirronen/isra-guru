import React, {useEffect, useState} from 'react';
import style from './mainEventList.module.css';
import Event from '../../event/Event';
import {equalTo, off, onValue, orderByChild, query, ref} from 'firebase/database';
import {db} from '../../../../firebase/firebase-config';

const MainEventList = (props) => {
    const [count, setCount] = useState(0);
    const [activeEvents, setActiveEvents] = useState([]);
    const [activeButton, setActiveButton] = useState('active');


    useEffect(() => {
        const countRef = ref(db, '/guide/1/countEvents');
        onValue(countRef, (snapshot) => {
            const countValue = snapshot.val();
            setCount(countValue);
        });
    }, [db]);

    const handleActiveClick = (status) => {
        setActiveButton(status);

        const eventsRef = ref(db, '/guide/1/event');
        const activeEventsQuery = query(eventsRef, orderByChild('status'), equalTo(status));

        onValue(activeEventsQuery, (snapshot) => {
            const events = snapshot.val();
            if (events) {
                const activeEvents = Object.keys(events)
                    .map((id) => ({
                        id: id,
                        ...events[id],
                    }))
                    .filter((event) => {
                        if (event.status === 'active' && (props.dateStartFilter || props.dateEndFilter)) {
                            if(props.dateStartFilter && props.dateEndFilter) {
                                return event.data.dataFull >= props.dateStartFilter
                                    && event.data.dataFull <= props.dateEndFilter
                            }
                            else if (props.dateStartFilter){
                                return event.data.dataFull >= props.dateStartFilter
                            }
                            else if (props.dateEndFilter){
                                return event.data.dataFull <= props.dateEndFilter
                            }
                            // console.log(event.title, event.status, event.data.dataFull, isInDateRange);
                            // return isInDateRange;
                        } else {
                            const isInSearch = event.title.toLowerCase().includes(props.searchFilter.toLowerCase());
                            return isInSearch;
                        }
                    });
                setActiveEvents(activeEvents);
            } else {
                setActiveEvents([]);
            }
        });
    };


    return (
        <div className={style.mainEventList}>
            <div className={style.top}>
                <div className={style.topL}>
                    <button
                        onClick={() => {
                            handleActiveClick('active');
                        }}
                        className={activeButton === 'active' ? style.activeButton : ''}
                    >
                        Активные
                    </button>
                    <button
                        onClick={() => {
                            handleActiveClick('delete');
                        }}
                        className={activeButton === 'delete' ? style.activeButton : ''}
                    >
                        Прошедшие
                    </button>
                    <button
                        onClick={() => {
                            handleActiveClick('draft');
                        }}
                        className={activeButton === 'draft' ? style.activeButton : ''}
                    >
                        Черновики
                    </button>
                </div>
                <div className={style.topR}>
                    <p>1-1 из 1</p>
                    <button className={style.prev}>&#x27E8;</button>
                    <button className={style.next}>&#x27E9;</button>
                </div>
            </div>

            <div className={style.content}>
                {/*{[...Array(count)].map((_, i) => <Event id={i+1}/>)}*/}
                {activeEvents.length > 0
                    ? activeEvents.map((event) => <Event key={event.id} {...event}
                                                         handleActiveClick={handleActiveClick}/>) : <p></p>}
                {/*// : [...Array(count)].map((_, i) => <Event key={i} id={i + 1} handleActiveClick={handleActiveClick}/>)}*/}
            </div>
        </div>
    );
};

export default MainEventList;
