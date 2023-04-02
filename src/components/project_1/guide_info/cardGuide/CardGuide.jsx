import React, { useEffect, useState } from 'react';
import styles from './Styles.module.scss';
import { useNavigate } from 'react-router-dom';
import {
    idsContentView,
    viewEvent,
} from '../../../../utils/constants';
import { onValue, ref } from 'firebase/database';
import { db } from '../../../../firebase/firebase-config';

const CardGuide = (props) => {
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [smallDescription, setSmallDescription] = useState('');
    const [number, setNumber] = useState('');
    const [month, setMonth] = useState('');
    const [weekDay, setWeekDay] = useState('');

    useEffect(() => {
        async function add() {
            idsContentView.forEach((item) => {
                onValue(ref(db, `/guide/1/event/${props.id}/${item}`), (snapshot) => {
                    switch (item) {
                        case 'title':
                            setTitle(snapshot.val());
                            break;
                        case 'smallDescription':
                            setSmallDescription(snapshot.val());
                            break;
                        case 'data/number':
                            setNumber(snapshot.val());
                            break;
                        case 'data/month':
                            setMonth(snapshot.val());
                            break;
                        case 'data/weekDay':
                            setWeekDay(snapshot.val());
                            break;
                        default:
                            break;
                    }
                });
            });
        }
        add();
    }, [props.id]);

    return (
        <div className={styles.card__container}>
            <div className={styles.content}>
                <div className={styles.question__container}>
                    <h2 className={styles.question__container_title}>{title}</h2>
                    <p className={styles.question__container_description}>{smallDescription}</p>
                </div>

                <div className={styles.day__container}>
                    <div className={styles.info__container}>
                        <i className={styles.info__container_number}>{number}</i>
                        <p className={styles.info__container_description}>
                            <span>{month}</span>
                            <span>{weekDay}</span>
                        </p>
                    </div>

                    <button className={styles.price__container_btn} onClick={
                        () => navigate(`/${viewEvent}?event=${props.id}`)}>
                        Подробнее
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardGuide;
