import React from 'react';
import style from "./viewEvent.module.css"
import {gallery} from "../../utils/constants";

const Picture = () => {
    return (
        <section>
            <img className={style.rectangle12} src={gallery} alt={'gallery photo'}/>
        </section>
    );
};

export default Picture;