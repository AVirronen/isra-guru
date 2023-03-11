import React from 'react';
import Gallery from "./Gallery";
import ContentView from "./ContentView";
import style from "./viewEvent.module.css"


const ViewEvent = () => {
    return (
        <div className={style.viewEventBackground}>
            <div className={style.path1}>
            </div>
            <div>
                <div className={style.user}>
                    <div className={style.ellipse1}></div>
                    <p className={style.yourGuide}>Ваш гид</p>
                    <p className={style.guideName}>Зеев Волк</p>
                    <button>Пойду</button>
                </div>
            </div>
            <Gallery/>
            <ContentView/>
        </div>
    );
};

export default ViewEvent;