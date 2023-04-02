import React, {useState} from 'react';
import style from "./search.module.css";
import 'firebase/database';
import {ref, query, orderByChild, equalTo, onValue} from 'firebase/database';
import {db} from "../../../firebase/firebase-config";
import Card from "../card/Card";


const Place = () => {
    // const [cityItems, setCityItems] = useState({});
    const [cityItemsArray, setCityItemsArray] = useState([]);


    function onButtonClick(event) {
        const cityFilter = event.target.textContent;
        setCityItemsArray([]); // Сбросить предыдущий результат фильтрации

        const eventsRef = ref(db, 'guide/1/event');
        const cityQuery = query(
            eventsRef,
            orderByChild('city'),
            equalTo(cityFilter)
        )

        onValue(cityQuery, (snapshot) => {
            const items = [];
            snapshot.forEach((childSnapshot) => {
                const id = childSnapshot.key;
                const data = childSnapshot.val();
                if (data.city === cityFilter) {
                    const card = <Card key={id} id={id} {...data} />;
                    items.push(card);
                    // items.push({id, ...data});
                    console.log(cityItemsArray)
                }
            });

            const index = cityItemsArray.findIndex(item => item.city === cityFilter);
            if (index === -1) {
                setCityItemsArray(prevState => [...prevState, {city: cityFilter, items}]);
            } else {
                const updatedArray = [...cityItemsArray];
                updatedArray[index] = {city: cityFilter, items};
                setCityItemsArray(updatedArray);
            }
        }, (error) => {
            console.log("Ошибка при получении данных:", error);
        });

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
                            <button onClick={onButtonClick}>Иерусалим</button>
                            <button onClick={onButtonClick}>Тель Авив</button>
                            <button onClick={onButtonClick}>Кейсария</button>
                            <button onClick={onButtonClick}>Хайфа</button>
                            <button onClick={onButtonClick}>Назарет</button>
                            <button onClick={onButtonClick}>Яффо</button>
                            <button onClick={onButtonClick}>Цфат</button>
                            <button onClick={onButtonClick}>Эйлат</button>
                            <button onClick={onButtonClick}>Акко</button>
                        </div>
                        <div className={style.cityDescription}>
                            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                                adipisci
                                velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam
                                aliquam quaerat voluptatem. Ut enim ad minima veniam</p>
                        </div>
                    </div>
                </div>
                <div className={style.triangle}></div>
            </div>
            <div className={style.arrayCities}>
                {cityItemsArray.map(({city, items}) => (
                    <div key={city}>
                        <h2>{city}</h2>
                        <ul>
                            {items.map((item) => (
                                <li key={item.id}>{item}</li>
                                // <li key={item.id}>{`${item.name} (${item.city})`}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>)
}


export default Place;



