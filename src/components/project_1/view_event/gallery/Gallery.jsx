import React from 'react';
import Picture from "./Picture";
import style from './gallery.module.css'
import {gallery} from "../../../../utils/constants";


const Gallery = () => {
    return (
        <div className={style.mainPhoto}>
            {gallery.map((item, index) => {
                if (index === 0)
                    return <Picture className={style.mainPhoto} picture={item} key={index}/>
                else if (index === 1)
                    return <Picture picture={item} key={index} style={style.smallPhoto}/>
                else if (index === 2)
                    return <Picture picture={item} key={index} style={style.smallPhoto}/>
                else if (index === 3)
                    return <Picture picture={item} key={index} style={style.smallPhoto}/>
                else if (index === 4)
                    return <Picture picture={item} key={index} style={style.smallPhoto}/>
            })}
        </div>
    );
};

export default Gallery;