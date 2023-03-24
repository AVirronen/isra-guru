import React from 'react';
import styles from './cardPost.module.css';
import {eventList} from "../../../utils/constants";
import {useNavigate} from "react-router-dom";
import Copy from "../../../icons/Copy";
import Eye from "../../../icons/Eye";

const CardPost = () => {
    const navigate = useNavigate()
    return (
            <section>
                <div className={styles.preview_info_all}>
                    <div className={styles.preview_info_allDescription}>
                        <i><Eye/></i>
                        <p onClick={()=>{}}>Предпросмотр</p>
                    </div>
                    <div className={styles.preview_info_allDescription}>
                        <i><Copy/></i>
                        <p onClick={()=>{}}>Сохранить</p>
                    </div>
                </div>
                <div>
                    <button className={styles.button__orange} type={"submit"}
                            onClick={() => {
                                navigate(`/${eventList}`)
                            }}
                    >Опубликовать
                    </button>
                </div>
            </section>
    );
};

export default CardPost;