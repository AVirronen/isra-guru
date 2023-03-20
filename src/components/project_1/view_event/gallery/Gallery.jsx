import React from 'react';
import Picture from "./Picture";
import style from './gallery.module.css'
import {gallery} from "../../../../utils/constants";


const Gallery = () => {
    return (
        <div className={style.allgallery}>
            {gallery.map((item, index) => {
                if (index == 0)
                    return <Picture className={style.mainPhoto} photo={item} key={index}/>
                else if (index == 1)
                    return <Picture photo={item} key={index} style={style.smallPhoto1}/>
                else if (index == 2)
                    return <Picture photo={item} key={index} style={style.smallPhoto2}/>
                else if (index == 3)
                    return <Picture photo={item} key={index} style={style.smallPhoto3}/>
                else if (index == 4)
                    return <Picture photo={item} key={index} style={style.smallPhoto4}/>
            })}
            <Picture/>
        </div>
    );
};

export default Gallery;