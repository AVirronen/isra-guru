import React, {useEffect, useState} from 'react';
import style from "./search.module.css";
import 'firebase/database';
import {ref, query, orderByChild, equalTo, onValue} from 'firebase/database';
import {db} from "../../../firebase/firebase-config";
import {idsContentView} from "../../../utils/constants";


const Place = (props) => {
    const [cityItems, setCityItems] = useState({});

function onButtonClick(event) {
    const cityFilter = event.target.textContent;
    const eventsRef = ref(db, 'guide/1/event');
        const cityQuery = query(
            eventsRef,
            orderByChild('city'),
            equalTo(cityFilter)
        )

        const items = [];
        cityQuery.on('child_added', (snapshot) => {
            const id = snapshot.key;
            const data = snapshot.val();
            if (data.city === cityFilter) {
                items.push({id, ...data});
                setCityItems(prevState => ({
                    ...prevState,
                    [cityFilter]: items
                }));
            }
        }, (error) => {
            console.log("Ошибка при получении данных:", error);
        })
    }




    return (
        <div>
            <div className={style.levelP}>
                <div className={style.filters}>
                    <div className={style.levelBox1}>
                        <h2 className={style.levelTitle}>Топ популярных направлений</h2>
                    </div>
                    <div className={style.variantsBox}>
                        <div className={style.cites}>
                            <button>Иерусалим</button>
                            <button>Тель Авив</button>
                            <button>Кейсарий</button>
                            <button>Хайфа</button>
                            <button>Назарет</button>
                            <button>Яффо</button>
                            <button>Цфат</button>
                            <button>Эйлат</button>
                            <button>Акко</button>
                        </div>
                        <div className={style.cityDescription}>
                            <p>Jerusalem</p>
                            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                                velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam
                                aliquam quaerat voluptatem. Ut enim ad minima veniam</p>
                        </div>
                    </div>
                </div>
                <div className={style.triangle}></div>
            </div>
            {Object.entries(cityItems).map(([city, items]) => (
                <div key={city}>
                    <h2>{city}</h2>
                    <ul>
                        {items.map((item) => (
                            <li key={item.id}>{`${item.name} (${item.city})`}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Place;


//==========================================

// function onButtonClick(event) {
//     const cityFilter = event.target.textContent;
//     const eventsRef = ref(db, 'guide/1/event');
//         const cityQuery = query(
//             eventsRef,
//             orderByChild('city'),
//             equalTo(cityFilter)
//         )
//
//         const items = [];
//         cityQuery.on('child_added', (snapshot) => {
//             const id = snapshot.key;
//             const data = snapshot.val();
//             if (data.city === cityFilter) {
//                 items.push({id, ...data});
//                 setCityItems(prevState => ({
//                     ...prevState,
//                     [cityFilter]: items
//                 }));
//             }
//         }, (error) => {
//             console.log("Ошибка при получении данных:", error);
//         })
//     }
//}
// //========================================
// return cityQuery()
// const eventsRef = firebase.db().ref('guide/event')
// const eventsRef = db.ref('guide/event') //error
// const eventsRef = ref(getDatabase(), 'guide/event');
// const cityQuery = query(orderByChild('city'), equalTo(cityFilter), ref(getDatabase(), 'guide/event'));
// const cityQuery = query(eventsRef, orderByChild('city'), equalTo(cityFilter));
// const cityQuery = eventsRef.orderByChild('city').equalTo(cityFilter);
// cityQuery.once('value', (snapshot) => {
//     const items = [];
//     snapshot.forEach((childSnapshot) => {
//         items.push({id: childSnapshot.key, ...childSnapshot.val()});
//     });
//     setCityItems(prevState => ({
//         ...prevState,
//         [cityFilter]: items
//     }));
// }, (error) => {
//     console.log("Ошибка при получении данных:", error);
// }).then(e => {console.log("Ошибка при получении данных:")} );
// }
//
// <button onClick={onButtonClick}>Иерусалим</button>
// <button onClick={onButtonClick}>Тель Авив</button>
// <button onClick={onButtonClick}>Кейсарий</button>
// <button onClick={onButtonClick}>Хайфа</button>
// <button onClick={onButtonClick}>Назарет</button>
// <button onClick={onButtonClick}>Яффо</button>
// <button onClick={onButtonClick}>Цфат</button>
// <button onClick={onButtonClick}>Эйлат</button>
// <button onClick={onButtonClick}>Акко</button>