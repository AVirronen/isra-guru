import React, {useEffect, useState} from 'react';
import style from './events.module.css'
import Delete from "../../../icons/Delete";
import Copy from "../../../icons/Copy";
import Edit from "../../../icons/Edit";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import PopUp from "../popUp/PopUp";
import {off, onValue, ref} from "firebase/database";
import {db} from "../../../firebase/firebase-config";


const Event = (props) => {
    const [modal, changeModal] = React.useState('')
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    // 1) взять кол-во из countEvent и для всех [1, countEvent] выдавать значение
    // const countAbb = [1, count]
    // count.Abb.forEach(
    const idEvent = 1;
    // const idEvent = props.key


    useEffect(() => {
        async function add() {
            const idsEvent = ["data/number", "data/month", "data/year", "title", "price/amount", "price/currency",
                "count/countsGo", "count/countsPlan"]
            idsEvent.forEach((item) => {
                onValue(ref(db, `/guide/1/event/${idEvent}/${item}`), (snapshot) => {
                    document.getElementById(`${item}`).innerHTML = snapshot.val()
                })
            })
        }

        add()
    }, [])


    return (
        <div>
            <div className={style.events}>
                <div className={style.dateEvents}>
                    <p id={"data/number"}></p>
                    &nbsp;
                    <p id={"data/month"}></p>
                    &nbsp;
                    <p id={"data/year"}></p>
                </div>
                <p className={style.dateDesc} id={"title"}></p>
                <div className={style.dateCost}>
                    <p id={"price/amount"}></p>
                    &nbsp;
                    <p id={"price/currency"}></p>
                </div>
                <div className={style.datePeople}>
                    <p id={"count/countsGo"}></p>
                    <p>/</p>
                    <p id={"count/countsPlan"}></p>
                </div>
                <div className={style.iconsEvents}>
                    <div onClick={() => {
                        handleOpen()
                        changeModal('duplicate')
                    }}><Copy/></div>
                    <div onClick={() => {
                        handleOpen()
                        changeModal('save')
                    }}><Edit/></div>
                    <div onClick={() => {
                        handleOpen()
                        changeModal('delete')
                    }
                    }><Delete/></div>
                </div>
            </div>
            <Modal
                open={open}
                // onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box>
                    <PopUp modal={modal} close={handleClose} idEvent={idEvent}/>
                </Box>
            </Modal>
        </div>
    );
}

export default Event;

