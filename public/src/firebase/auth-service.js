import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword, signOut
} from "firebase/auth";
import {auth} from "./firebase-config";


// регистрация новых пользователей
// export function registration(email, password) {
//     createUserWithEmailAndPassword(auth, email, password)
//         .then(response => {
//             // JSON.stringify(response)
//             console.log(response)
//         })
//         .then(m => m.user)
//         // .then((userCredential) => {
//         //     const user = userCredential.user;
//         // })
//         .catch(e => console.log(e))
// }
//
//
// // вход существующих пользователей
// export function login(email, password) {
//     signInWithEmailAndPassword(auth, email, password)
//         // .then(response=>response.user)
//         // // .then(res=>console.log(res))
//         // .catch(e=> console.log(e.message))
//
//                 // false))
//     // .catch(() => 0)
//
//         .then (response=>response.user)
//         .then(res => {
//             sessionStorage.setItem('email', res.email)
//             sessionStorage.setItem('accessToken', res.accessToken)
//         })
//         .catch((error)=>{
//             const errorCode = error.code
//             const errorMessage = error.message
//         }
//
// )
// }
//
//
// export function logout() {
//     signOut(auth)
//         .then(response => console.log(response))
//         .catch(e => console.log(e))
// }


export const startSession = (user) => {
    sessionStorage.setItem("email", user.email);
    sessionStorage.setItem("accessToken", user.accessToken);
}

export const getSession = () => {
    return {
        email: sessionStorage.getItem("email"),
        accessToken: sessionStorage.getItem("accessToken"),
    }
}

export const endSession = () => {
    sessionStorage.clear();
}

export const isLoggedIn = () => {
    return getSession().accessToken;
}
