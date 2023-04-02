import React, { useEffect, useState } from 'react';
import Picture from "./Picture";
import style from './gallery.module.css'
import { getDownloadURL, ref as storageRef } from "firebase/storage";
import {storage } from "../../../../firebase/firebase-config";

const Gallery = (props) => {
    const [images, setImages] = useState([]);

    const imagePaths = [
        `/images/${props.id}/image_${props.id}_main`,
        `/images/${props.id}/image_${props.id}_1`,
        `/images/${props.id}/image_${props.id}_2`,
        `/images/${props.id}/image_${props.id}_3`,
        `/images/${props.id}/image_${props.id}_4`
    ];

    useEffect(() => {
        async function add() {
            for (let i = 0; i < imagePaths.length; i++) {
                const imageRef = storageRef(storage, imagePaths[i]);
                const url = await getDownloadURL(imageRef);
                setImages((prevImages) => [
                    ...prevImages.slice(0, i),
                    url,
                    ...prevImages.slice(i + 1),
                ]);
            }
        }
        add();
    }, []);

    return (
        <div className={style.allgallery}>
            {images.map((item, index) => {
                if (index === 0)
                    return <Picture style={style.mainPhoto} picture={item} key={index} />
                else
                    return <Picture picture={item} key={index} style={style.smallPhoto} />
            })}
        </div>
    );
};

export default Gallery;
