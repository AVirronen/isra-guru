import {db} from "./firebase-config";
import {ref, set} from "firebase/database";
import {aboutMe, name, contact, guideId, iCan} from "../utils/constants";


export function writeGuideData(guideId, name, aboutMe, iCan, contact) {
    set(ref(db, 'guide/' + guideId), {
        guideId: guideId,
        name: name,
        aboutMe: aboutMe,
        iCan: iCan,
        contact: contact
    });
}

writeGuideData(guideId, name,  aboutMe, iCan, contact)
export function writeEventData(guideId, eventId, data, timeFrom, timeTo, title, smallDescription,
                               bigDescription, whereMeet, additionallyText, city,
                               complexity, counts, amount, currency, place, picture1, picture2,
                               picture3, picture4, picture5) {
    set(ref(db, 'guide/' + guideId + '/event/' + eventId), {
        eventId: eventId,
        data: data,
        timeFrom: timeFrom,
        timeTo: timeTo,
        title: title,
        smallDescription: smallDescription,
        bigDescription: bigDescription,
        whereMeet: whereMeet,
        additionallyText: additionallyText,
        city: city,
        complexity: complexity,
        counts: counts,
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
}


