import React, {useState} from 'react';
import styles from './cardPost.module.css';
import {eventList, viewEvent} from "../../../utils/constants";
import {useNavigate} from "react-router-dom";
import Copy from "../../../icons/Copy";
import Eye from "../../../icons/Eye";

const CardPost = (props) => {
    // const [count, setCount] = useState(0)
    const navigate = useNavigate()

    return (
            <section>
                <div className={styles.preview_info_all}>
                    <div className={styles.preview_info_allDescription}>
                        <i><Eye/></i>
                        {/*<p onClick={()=>{navigate(`/${viewEvent}`)}}>Предпросмотр</p>*/}
                        <p onClick={()=>{
                            props.handleWrite('draft')
                            navigate(`/${viewEvent}?event=${props.id}`)}}
                        >Предпросмотр</p>
                    </div>
                    <div className={styles.preview_info_allDescription}>
                        <i><Copy/></i>
                        <p onClick={()=>{
                            props.handleWrite('draft')
                            navigate(`/${eventList}`)
                        }}>Сохранить</p>
                    </div>
                </div>
                <div>
                    <button className={styles.button__orange} type={"submit"}
                            onClick={() => {
                                props.handleWrite('active')
                                navigate(`/${eventList}`)
                            }}
                    >Опубликовать
                    </button>
                </div>
            </section>
    );
};

export default CardPost;