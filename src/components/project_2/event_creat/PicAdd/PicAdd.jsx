import React, {useState} from 'react';
import styles from '../EventCreat.module.scss'
import {storage} from '../../../../firebase/firebase-config';
import {ref, uploadBytes} from 'firebase/storage';

const PicAdd = (props) => {

    const [selectedFile1, setSelectedFile1] = useState(null);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [counter, setCounter] = useState(1);

    async function handleFileSelect(event) {
        const files = event.target.files;
        setSelectedFiles([...selectedFiles, ...files]);
        setCounter(counter+1)

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const imageRef = ref(storage, `images/${props.id}/image_${props.id}_${counter}`);

            await uploadBytes(imageRef, file);
        }
    }

    async function handleFileSelect1(event) {
        const file = event.target.files[0];
        setSelectedFile1(file);

        const imageRef = ref(storage, `images/${props.id}/image_${props.id}_main`);

        await uploadBytes(imageRef, file);
    }

    return (
        <div>
            <section className={styles.inputPictures}>
                <label htmlFor="picture1" className={styles.bigBox}>
                    {selectedFile1 ? (
                        <div>
                            <img
                                className={styles.bigBoxSpan}
                                src={URL.createObjectURL(selectedFile1)}
                                alt="Выбранное изображение"
                            />
                        </div>
                    ) : (
                        <span className={styles.bigBoxSpan}>+</span>
                    )}
                    <input
                        type="file"
                        name="picture1"
                        id="picture1"
                        accept="image/*"
                        onChange={handleFileSelect1}
                    />
                </label>
                {Array.from({length: 4}).map((_, index) => (
                    <label htmlFor={`picture${index + 2}`} className={styles.box} key={index}>
                        {selectedFiles[index] ? (
                            <div>
                                <img
                                    className={styles.boxSpan}
                                    src={URL.createObjectURL(selectedFiles[index])}
                                    alt="Выбранное изображение"
                                />
                            </div>
                        ) : (
                            <span className={styles.boxSpan}>+</span>
                        )}
                        <input
                            type="file"
                            name={`picture${index + 2}`}
                            id={`picture${index + 2}`}
                            accept="image/*"
                            onChange={handleFileSelect}
                        />
                    </label>
                ))}
            </section>
        </div>
    );

};

export default PicAdd;
