import React, {useState} from 'react';
import styles from '../EventCreat.module.scss'
import {db} from "../../../../firebase/firebase-config";
import {ref, put} from "firebase/database";


const PicAdd = () => {

    // const storageRef = ref(db, '/guide/1/event/3/photo/picture1')
    // const uploadTask = storageRef.put(selectedFile);




    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedFile2, setSelectedFile2] = useState(null);
    const [selectedFile3, setSelectedFile3] = useState(null);
    const [selectedFile4, setSelectedFile4] = useState(null);
    const [selectedFile5, setSelectedFile5] = useState(null);

    function handleFileSelect(event) {
        setSelectedFile(event.target.files[0]);
    }
    function handleFileSelect2(event) {
        setSelectedFile2(event.target.files[0]);
    }
    function handleFileSelect3(event) {
        setSelectedFile3(event.target.files[0]);
    }
    function handleFileSelect4(event) {
        setSelectedFile4(event.target.files[0]);
    }
    function handleFileSelect5(event) {
        setSelectedFile5(event.target.files[0]);
    }

    return (
        <div>
            {/*<label className={styles.formName} htmlFor="uname">Загрузка фото:</label>*/}
            <section className={styles.inputPictures}>
                {/*<span className={styles.bigBox}>+</span>*/}
                <label htmlFor="picture1" className={styles.bigBox}>
                    {selectedFile ? (
                        <div>
                            {/*<p>Выбранный файл: {selectedFile.name}</p>*/}
                            <img className={styles.bigBoxSpan} src={URL.createObjectURL(selectedFile)} alt="Выбранное изображение" />
                        </div>
                    ) : (
                        <span className={styles.bigBoxSpan}>+</span>
                    )}
                    <input
                        type="file"
                        name="picture1"
                        id="picture1"
                        accept="image/*"
                        onChange={handleFileSelect}
                    />
                </label>

                <label htmlFor="picture2" className={styles.box}>
                    {selectedFile2 ? (
                        <div>
                            <img className={styles.boxSpan} src={URL.createObjectURL(selectedFile2)} alt="Выбранное изображение" />
                        </div>
                    ) : (
                        <span className={styles.boxSpan}>+</span>
                    )}
                    <input
                        type="file"
                        name="picture2"
                        id="picture2"
                        accept="image/*"
                        onChange={handleFileSelect2}
                    />
                </label>

                <label htmlFor="picture3" className={styles.box}>
                    {selectedFile3 ? (
                        <div>
                            <img className={styles.boxSpan} src={URL.createObjectURL(selectedFile3)} alt="Выбранное изображение" />
                        </div>
                    ) : (
                        <span className={styles.boxSpan}>+</span>
                    )}
                    <input
                        type="file"
                        name="picture3"
                        id="picture3"
                        accept="image/*"
                        onChange={handleFileSelect3}
                    />
                </label>

                <label htmlFor="picture4" className={styles.box}>
                    {selectedFile4 ? (
                        <div>
                            <img className={styles.boxSpan} src={URL.createObjectURL(selectedFile4)} alt="Выбранное изображение" />
                        </div>
                    ) : (
                        <span className={styles.boxSpan}>+</span>
                    )}
                    <input
                        type="file"
                        name="picture4"
                        id="picture4"
                        accept="image/*"
                        onChange={handleFileSelect4}
                    />
                </label>

                <label htmlFor="picture5" className={styles.box}>
                    {selectedFile5 ? (
                        <div>
                            <img className={styles.boxSpan} src={URL.createObjectURL(selectedFile5)} alt="Выбранное изображение" />
                        </div>
                    ) : (
                        <span className={styles.boxSpan}>+</span>
                    )}
                    <input
                        type="file"
                        name="picture5"
                        id="picture5"
                        accept="image/*"
                        onChange={handleFileSelect5}
                    />
                </label>



                {/*<span className={styles.box} id={"picture2"} onClick={() => {*/}
                {/*}}*/}
                {/*>+</span>*/}
                {/*<span className={styles.box} id={"picture3"} onClick={() => {*/}
                {/*}}>+</span>*/}
                {/*<span className={styles.box} id={"picture4"} onClick={() => {*/}
                {/*}}>+</span>*/}
                {/*<span className={styles.box} id={"picture5"} onClick={() => {*/}
                {/*}}>+</span>*/}
            </section>

        </div>
    );
};

export default PicAdd;