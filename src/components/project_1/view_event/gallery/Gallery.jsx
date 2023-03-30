

import React, { useEffect, useState } from 'react';
import Picture from "./Picture";
import style from './gallery.module.css'
import { gallery } from "../../../../utils/constants";
import { getDownloadURL, ref as storageRef } from "firebase/storage";
import { db, storage } from "../../../../firebase/firebase-config";
import { onValue, ref } from "firebase/database";

const Gallery = () => {
    const [images, setImages] = useState([]);

    const imagePaths = [
        '/images/1/image_1_main',
        '/images/1/image_1_1',
        '/images/1/image_1_2',
        '/images/1/image_1_3',
        '/images/1/image_1_4'
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