import Rectangle12 from '../img/Rectangle12.png'
import Rectangle17 from '../img/Rectangle12.png'
import Rectangle18 from '../img/Rectangle12.png'
import Rectangle19 from '../img/Rectangle12.png'
import Rectangle20 from '../img/Rectangle12.png'
import Whatsapp from '../img/Whatsapp.svg'
import Facebok from '../img/Facebook.svg'
import {db} from "../firebase/firebase-config";
import {onValue, ref} from "firebase/database";
import {useEffect} from "react";

export const gallery = [Rectangle12, Rectangle17, Rectangle18, Rectangle19, Rectangle20]

export const fb = Facebok
export const wu = Whatsapp


// export const listEvents = 'listEvents'
export const filterLevel = 'filterLevel'
export const filterPlace = 'filterPlace'
export const viewEvent = 'viewEvent'
export const singUp = 'singUp'
export const payment = 'payment'
export const thankYou = 'thankYou'
export const guideInfo = 'guideInfo'


export const eventList = 'eventList'
export const eventCreate = 'eventCreate'

export const deleting = 'filterLevel'
export const dublicating = 'dublicating'
export const saving = 'saving'
export const pop_UP = 'popUP'


export const authorization = 'authorization'
export const error = 'error'
export const register = 'register'


//=============About Guide=====================
export const guideId = '1'
export const name = "Святослав Брестовицкий"
export const aboutMe = "Одессит по рождению и тель-авивец по велению души, он двадцать лет живет в Израиле. Тернистый путь Алии 90-х знает не понаслышке, а опыт своей эмиграции превратил в удачный образовательный «проект». Учился в иешиве, служил в израильской армии. Учился в иешиве, служил в израильской армии. Учился в иешиве, служил в израильской армии. Учился в иешиве, служил в израильской армии. Гид по призванию, Зеев Волк знает Тель-Авив как свои пять пальцев. Его экскурсии это всегда часть драматического действия, где есть захватывающая история , где город – это сцена, а герои мы с вами и люди из прошлого."
export const iCan = "Также в индивидуальном порядке могу провести экскурсии по следующим городам:"
export const contact = "972 55 555 55 55"


// export const guideCollection = [guideNameRef, aboutMeRef, iCanRef, contactRef]
// export const idsContentGuide = ["nameGuide", "aboutMe", "iCan", "contact"]
// export const guideNameRef = ref(db, '/guide/' + guideId + '/name');

// export const guideNameRef = ref(db, 'guide/1/name');
// export const aboutMeRef = ref(db, 'guide/1/aboutMe');
// export const iCanRef = ref(db, 'guide/1/iCan');
// export const contactRef = ref(db, 'guide/1/contact');


// export const guideNameRef = ref(db, '/guide/' + guideId + '/name');
// export const aboutMeRef = ref(db, '/guide/' + guideId + '/aboutMe');
// export const iCanRef = ref(db, '/guide/' + guideId + '/iCan');
// export const contactRef = ref(db, '/guide/' + guideId + '/contact');


export const idsContentView = ["data/month", "data/number", "data/weekDay", "timeFrom", "timeTo", "title", "smallDescription", "bigDescription",
    "whereMeet", "additionallyText", "city", "complexity", "counts",
    "count/countsPlan",
    "price/amount", "price/currency",
    "place", "photo/picture1", "photo/picture2","photo/picture3","photo/picture4","photo/picture5",]



// useEffect(() => {
//     // здесь в idsContentView не все корректно!!!!! + надо добавить вообще id и пр
//     async function add() {
//         idsContentView.forEach((item)=>{
//         onValue(ref(db, `/guide/1/event/12/${item}`), (snapshot) => {
//             document.getElementById(`${item}`).innerHTML = snapshot.val()
//         })
//         })
//     }
//     add()
