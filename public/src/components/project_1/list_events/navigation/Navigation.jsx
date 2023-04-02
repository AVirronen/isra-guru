import React, {useState} from 'react';
import style from './navigation.module.css'
import SearchIcon from "../../../../icons/SearchIcon";
import {Link, useNavigate} from "react-router-dom";
import {filterLevel, filterPlace, singUp} from "../../../../utils/constants";


const Navigation = (props) => {
    const [dateFrom, setDateFrom] = useState('')
    // const [dateTo, setDateTo] = useState('2023-03-14')
    const [place, setPlace] = useState('Тель Авив Яффо')
    const [level, setLevel] = useState('Местный')

    const [countP, setCountP] = useState(1)
    const [countL, setCountL] = useState(1)

    const [selectedLang, setSelectedLang] = useState("all");


    const navigate = useNavigate()


    const changeP = () => {
        if (countP) {
            navigate(`/${filterPlace}`)
            setCountP(0)
        } else {
            navigate(`/`)
            setCountP(1)
        }
    }

    const changeL = () => {
        if (countL) {
            navigate(`/${filterLevel}`)
            setCountL(0)
        } else {
            navigate(`/`)
            setCountL(1)
        }
    }


    return (
        <div>
            {/*className={style.navigation}>*/}
            <div className={style.blackBlack}>
                <div className={style.commonFilter}>
                    <p>Поиск</p>
                    <div className={style.inpSearch}>
                        <div className={style.iconSearch}><SearchIcon/></div>
                        <input type={'search'} placeholder={'Название, другое'}
                               onKeyDown={(e) => {
                                   if (e.key === 'Enter') {
                                       props.setSearchFilter(e.target.value);
                                   }
                               }}
                               onChange={(e)=>{props.setSearchFilter(e.target.value);}}
                        />
                    </div>
                </div>
                <div className={style.dateFilter}>
                    <p>Дата</p>
                    <div className={style.dates}>
                        <input type={"date"} id={"startDate"}
                            // value={dateFrom}
                               onChange={(event) => props.setDateFrom(event.target.value)}/>
                        {/*почему мин не работает??*/}
                        <input type={"date"} min={dateFrom} id={"startDate"}
                            // value={dateTo}
                               onChange={(event) => props.setDateTo(event.target.value)}/>
                    </div>
                </div>
                <div className={style.placeFilter}>
                    <p>Место</p>
                    <button onClick={()=>changeP()}>{place}</button>
                </div>
                <div className={style.levelFilter}>
                    <p>Уровень</p>
                    <button onClick={()=>changeL()}>{level}</button>
                </div>
                <div className={style.langFilter}>
                    <p>Язык</p>
                    <div className={style.lang}>
                        <button
                            value={"all"}
                            onClick={(e) => {
                                props.setSelectedLang(e.target.value);
                                setSelectedLang(e.target.value);
                            }}
                            className={selectedLang === "all" ? style.active : ""}
                        >Все</button>
                        <button
                            value={"RU"}
                            onClick={(e) => {
                                props.setSelectedLang(e.target.value);
                                setSelectedLang(e.target.value);
                            }}
                            className={selectedLang === "RU" ? style.active : ""}
                        >RU</button>
                        <button
                            value={"EN"}
                            onClick={(e) => {
                                props.setSelectedLang(e.target.value);
                                setSelectedLang(e.target.value);
                            }}
                            className={selectedLang === "EN" ? style.active : ""}
                        >EN</button>
                        <button
                            value={"FR"}
                            onClick={(e) => {
                                props.setSelectedLang(e.target.value);
                                setSelectedLang(e.target.value);
                            }}
                            className={selectedLang === "FR" ? style.active : ""}
                        >FR</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Navigation;