import React, {useState} from 'react';
import styles from '../EventCreat.module.scss'
import {db, storage} from '../../../../firebase/firebase-config';
import {ref, uploadBytes} from 'firebase/storage';

const PicAdd = () => {
    const [selectedFile1, setSelectedFile1] = useState(null);
    const [selectedFiles, setSelectedFiles] = useState([]);

    const [counter, setCounter] = useState(1)

    async function handleFileSelect(event) {
        const files = event.target.files;
        setSelectedFiles([...selectedFiles, ...files]);
        setCounter(counter+1)

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const imageRef = ref(storage, `images/1/image_1_${counter}`);
            await uploadBytes(imageRef, file);
        }
    }

    async function handleFileSelect1(event) {
        const file = event.target.files[0];
        setSelectedFile1(file);
        setCounter(1)

        const imageRef = ref(storage, `images/1/image_1_main`);
        await uploadBytes(imageRef, file);
    }

    return (
        <div>
            <section className={styles.inputPictures}>
                <label htmlFor="picture1" className={styles.bigBox}>
                    {selectedFile1 ? (
                        <div>
                            <img className={styles.bigBoxSpan} src={URL.createObjectURL(selectedFile1)}
                                 alt="Выбранное изображение"/>
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


// const [selectedFile, setSelectedFile] = useState(null);
// const [selectedFile2, setSelectedFile2] = useState(null);
// const [selectedFile3, setSelectedFile3] = useState(null);
// const [selectedFile4, setSelectedFile4] = useState(null);
// const [selectedFile5, setSelectedFile5] = useState(null);
//
// function handleFileSelect(event) {
//     setSelectedFile(event.target.files[0]);
// }
// function handleFileSelect2(event) {
//     setSelectedFile2(event.target.files[0]);
// }
// function handleFileSelect3(event) {
//     setSelectedFile3(event.target.files[0]);
// }
// function handleFileSelect4(event) {
//     setSelectedFile4(event.target.files[0]);
// }
// function handleFileSelect5(event) {
//     setSelectedFile5(event.target.files[0]);
// }

// const [selectedFiles, setSelectedFiles] = useState([]);

// function handleFileSelect(event) {
//     setSelectedFiles([...selectedFiles, event.target.files[0]]);
// }
// async function handleUpload() {
//     const storageRef = ref(db.storage(), 'images');
//
//     for (let i = 0; i < selectedFiles.length; i++) {
//         const file = selectedFiles[i];
//
//         // Create a new FileReader instance to read the image file as a blob
//         const reader = new FileReader();
//
//         reader.onload = async (event) => {
//             // Upload the blob to Firebase Storage
//             const blob = new Blob([event.target.result]);
//             await uploadBytes(storageRef.child(file.name), blob);
//         };
//
//         reader.readAsArrayBuffer(file);
//     }
// }

{/*/!*<label className={styles.formName} htmlFor="uname">Загрузка фото:</label>*!/*/
}
{/*<section className={styles.inputPictures}>*/
}
{/*    /!*<span className={styles.bigBox}>+</span>*!/*/
}
{/*    <label htmlFor="picture1" className={styles.bigBox}>*/
}
{/*        {selectedFile ? (*/
}
{/*            <div>*/
}
{/*                /!*<p>Выбранный файл: {selectedFile.name}</p>*!/*/
}
{/*                <img className={styles.bigBoxSpan} src={URL.createObjectURL(selectedFile)} alt="Выбранное изображение" />*/
}
{/*            </div>*/
}
{/*        ) : (*/
}
{/*            <span className={styles.bigBoxSpan}>+</span>*/
}
{/*        )}*/
}
{/*        <input*/
}
{/*            type="file"*/
}
{/*            name="picture1"*/
}
{/*            id="picture1"*/
}
{/*            accept="image/*"*/
}
{/*            onChange={handleFileSelect}*/
}
{/*        />*/
}
{/*    </label>*/
}

{/*    <label htmlFor="picture2" className={styles.box}>*/
}
{/*        {selectedFile2 ? (*/
}
{/*            <div>*/
}
{/*                <img className={styles.boxSpan} src={URL.createObjectURL(selectedFile2)} alt="Выбранное изображение" />*/
}
{/*            </div>*/
}
{/*        ) : (*/
}
{/*            <span className={styles.boxSpan}>+</span>*/
}
{/*        )}*/
}
{/*        <input*/
}
{/*            type="file"*/
}
{/*            name="picture2"*/
}
{/*            id="picture2"*/
}
{/*            accept="image/*"*/
}
{/*            onChange={handleFileSelect2}*/
}
{/*        />*/
}
{/*    </label>*/
}

{/*    <label htmlFor="picture3" className={styles.box}>*/
}
{/*        {selectedFile3 ? (*/
}
{/*            <div>*/
}
{/*                <img className={styles.boxSpan} src={URL.createObjectURL(selectedFile3)} alt="Выбранное изображение" />*/
}
{/*            </div>*/
}
{/*        ) : (*/
}
{/*            <span className={styles.boxSpan}>+</span>*/
}
{/*        )}*/
}
{/*        <input*/
}
{/*            type="file"*/
}
{/*            name="picture3"*/
}
{/*            id="picture3"*/
}
{/*            accept="image/*"*/
}
{/*            onChange={handleFileSelect3}*/
}
{/*        />*/
}
{/*    </label>*/
}

{/*    <label htmlFor="picture4" className={styles.box}>*/
}
{/*        {selectedFile4 ? (*/
}
{/*            <div>*/
}
{/*                <img className={styles.boxSpan} src={URL.createObjectURL(selectedFile4)} alt="Выбранное изображение" />*/
}
{/*            </div>*/
}
{/*        ) : (*/
}
{/*            <span className={styles.boxSpan}>+</span>*/
}
{/*        )}*/
}
{/*        <input*/
}
{/*            type="file"*/
}
{/*            name="picture4"*/
}
{/*            id="picture4"*/
}
{/*            accept="image/*"*/
}
{/*            onChange={handleFileSelect4}*/
}
{/*        />*/
}
{/*    </label>*/
}

{/*    <label htmlFor="picture5" className={styles.box}>*/
}
{/*        {selectedFile5 ? (*/
}
{/*            <div>*/
}
{/*                <img className={styles.boxSpan} src={URL.createObjectURL(selectedFile5)} alt="Выбранное изображение" />*/
}
{/*            </div>*/
}
{/*        ) : (*/
}
{/*            <span className={styles.boxSpan}>+</span>*/
}
{/*        )}*/
}
{/*        <input*/
}
{/*            type="file"*/
}
{/*            name="picture5"*/
}
{/*            id="picture5"*/
}
{/*            accept="image/*"*/
}
{/*            onChange={handleFileSelect5}*/
}
{/*        />*/
}
{/*    </label>*/
}
{/*</section>*/
}
