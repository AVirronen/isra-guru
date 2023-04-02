import React, {useEffect, useState} from 'react';
import style from './search.module.css'
import {equalTo, onValue, orderByChild, query, ref} from "firebase/database";
import {db} from "../../../firebase/firebase-config";
import Card from "../card/Card";
import {useNavigate} from "react-router-dom";

const Level = () => {
        const [levelArray, setLevelArray] = useState([])

    const navigate=useNavigate()

        function onButtonClick(event) {

            const levelFilter = event.target.textContent;
            setLevelArray([]); // Сбросить предыдущий результат фильтрации

            const eventsLevelRef = ref(db, 'guide/1/event');
            const levelQuery = query(
                eventsLevelRef,
                orderByChild('complexity'),
                equalTo(levelFilter)
            )

            onValue(levelQuery, (snapshot) => {

                const items = [];
                snapshot.forEach((childSnapshot) => {
                    const id = childSnapshot.key;
                    const data = childSnapshot.val();
                    if (data.complexity === levelFilter) {
                        const card = <Card key={id} id={id} {...data} />;
                        items.push(card);
                        // console.log(levelArray)
                        console.log(items)

                    }
                });
                const index = levelArray.findIndex(item => item.complexity === levelFilter);
                if (index === -1) {
                    // Оборачиваем setLevelArray() в setTimeout()
                    // setTimeout(() => {
                        setLevelArray(prevState => [...prevState, {complexity: levelFilter, items}]);
                    // });
                } else {
                    const updatedArray = [...levelArray];
                    updatedArray[index] = {complexity: levelFilter, items};
                    setLevelArray(updatedArray);
                }
            }, (error) => {
                console.log("Ошибка при получении данных:", error);
            });
        }

    useEffect(()=>{
        console.log("levelArray changed: ", levelArray);
    }, [levelArray])

        return (
            <div>
                {/*<Navigation/>*/}
                <div className={style.levelF}>
                    <div className={style.filters}>
                        <div className={style.levelBox1}>
                            <h2 className={style.levelTitle}>Уровень сложности материала</h2>
                        </div>
                        <div className={style.variantsBox}>
                            <button onClick={()=>{navigate(`/`)}}>Показать <b>все</b></button>
                            <button onClick={onButtonClick}>
                                Турист (Обзорная экскурсия)
                            </button>
                            <button onClick={onButtonClick}>
                                Местный (Тематическая экскурсия)
                            </button>
                            <button onClick={onButtonClick}>
                                Гуру (Специальная экскурсия)
                            </button>
                        </div>
                    </div>
                    <div className={style.triangle}></div>
                </div>
                <div className={style.arrayCities}>
                    {levelArray.map(({complexity, items}) => (
                        <div key={complexity}>
                            <h2>{complexity}</h2>
                            <ul>
                                {items.map((item) => (
                                    // <li key={item.id}>{item}</li>
                                    <li key={item.props.id}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
;

export default Level;