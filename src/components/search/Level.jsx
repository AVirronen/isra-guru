import React, {useState} from 'react';
import style from './search.module.css'

const Level = () => {
    const [level, setLevel] = useState(0)
    return (
        <div className={style.levelF}>
            <div className={style.filters}>
                <div className={style.levelBox1}>
                    <h2 className={style.levelTitle}>Уровень сложности материала</h2>
                </div>
                <div className={style.variantsBox}>
                    <button>Показать <b>все</b></button>
                    <button>
                        <b>Турист</b> (Обзорная экскурсия)
                    </button>
                    <button>
                        <b>Местный</b> (Тематическая экскурсия)
                    </button>
                    <button>
                        <b>Гуру</b> (Специальная экскурсия)
                    </button>
                </div>
            </div>
            <div className={style.triangle}></div>
        </div>
    );
};

export default Level;