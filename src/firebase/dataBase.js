import {db} from "./firebase-config";
import {ref, update} from "firebase/database";
import {aboutMe, name, contact, guideId, iCan} from "../utils/constants";


export function writeGuideData(guideId, name, aboutMe, iCan, contact) {
    update(ref(db, 'guide/' + guideId), {
        guideId: guideId,
        name: name,
        aboutMe: aboutMe,
        iCan: iCan,
        contact: contact,
        countEvents: 0,
        // event:{
        //
        // }
    })
        .then((e) => console.log('Success' + e))
        .catch((error) => console.log(error.message))
}

writeGuideData(guideId, name, aboutMe, iCan, contact)

export function writeEventData(guideId, countEvents, status, number, month, weekDay, year,
                               timeFrom, timeTo, title, smallDescription,
                               bigDescription, whereMeet, additionallyText, city,
                               complexity, countsPlan, countsGo, amount, currency, place, picture1, picture2,
                               picture3, picture4, picture5) {
    update(ref(db, 'guide/' + guideId + '/event/' + countEvents), {
        // set(ref(db, 'guide/' + guideId + '/event/' + countEvents), {
        eventId: countEvents,
        status: status,
        data: {
            number: number,
            month: month,
            weekDay: weekDay,
            year: year
        },
        timeFrom: timeFrom,
        timeTo: timeTo,
        title: title,
        smallDescription: smallDescription,
        bigDescription: bigDescription,
        whereMeet: whereMeet,
        additionallyText: additionallyText,
        city: city,
        complexity: complexity,
        count: {
            countsPlan: countsPlan,
            countsGo: countsGo,
        },
        price: {
            amount: amount,
            currency: currency
        },
        place: place,
        photo: {
            picture1: picture1,
            picture2: picture2,
            picture3: picture3,
            picture4: picture4,
            picture5: picture5
        }
    })
        .then((e) => console.log('Success ' + e))
        .catch((error) => console.log(error.message))
}





