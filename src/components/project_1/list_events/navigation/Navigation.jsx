import React from 'react';
import style from './navigation.module.css'
import SearchIcon from "../../../../icons/SearchIcon";
import {Link, useNavigate} from "react-router-dom";
import {filterLevel, filterPlace, singUp} from "../../../../utils/constants";


const Navigation = (props) => {
    //получаем даты, место, уровень из Search
    const [dateFrom, setDateFrom] = React.useState('2023-03-13')
    const [dateTo, setDateTo] = React.useState('2023-03-14')
    const [place, setPlace] = React.useState('Тель Авив Яффо')
    const [level, setLevel] = React.useState('Местный')

    const [countP, setCountP] = React.useState(1)
    const [countL, setCountL] = React.useState(1)

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
                        <input type={'search'} placeholder={'Название, гид, другое'}/>
                    </div>
                </div>
                <div className={style.dateFilter}>
                    <p>Дата</p>
                    <div className={style.dates}>
                        <input type={"date"} id={"startDate"}
                            // value={dateFrom}
                               onChange={(value) => setDateFrom(value)}/>
                        {/*почему мин не работает??*/}
                        <input type={"date"} min={dateFrom} id={"startDate"}
                            // value={dateTo}
                               onChange={(value) => setDateTo(value)}/>
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
                        <button value={"all"}>Все</button>
                        <button value={"rus"}>RU</button>
                        <button value={"en"}>EN</button>
                        <button value={"fr"}>FR</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Navigation;