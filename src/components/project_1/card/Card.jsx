import React, {useEffect, useState} from 'react';
import styles from './Styles.module.scss'
import HatIcon from "../../../icons/HatIcon";
import GeoIcon from "../../../icons/GeoIcon";
import WatchIcon from "../../../icons/WatchIcon";
import ShekelIcon from "../../../icons/ShekelIcon";
import UsersIcon from "../../../icons/UsersIcon";
import {useNavigate} from "react-router-dom";
import {filterLevel, filterPlace, guideInfo, idsContentView, viewEvent} from "../../../utils/constants";
import {onValue, ref} from "firebase/database";
import {db, storage} from "../../../firebase/firebase-config";
import {getDownloadURL, ref as storageRef, Reference} from "firebase/storage";

const Card = () => {
    const navigate = useNavigate();
    const [image, setImage] = useState('');

    const imageRef: Reference = storageRef(storage, '/images/1/image_1_1');

    useEffect(() => {

        // здесь в idsContentView не все корректно!!!!! + надо добавить вообще id и пр
        async function add() {
            idsContentView.forEach((item) => {
                onValue(ref(db, `/guide/1/event/1/${item}`), (snapshot) => {
                    document.getElementById(`${item}`).innerHTML = snapshot.val()
                })
            })
            onValue(ref(db, `/guide/1/name`), (snapshot) => {
                document.getElementById('name').innerHTML = snapshot.val();
            });
            const url = await getDownloadURL(imageRef);
            setImage(url);
            console.log(image + " success");
            setImage(url);
        }

        add()
    })

    // function diff() {
    //     const countsPlanRef = db.ref('count/countsPlan')
    //     const countsGoRef = db.ref('count/countsGo')

        //
        //
        //
        // Promise.all([countsPlanRef.once('value'), countsGoRef.once('value')])
        //     .then(snapshots => {
        //         // const diffSpan = document.getElementById('diff-span')
        //         const value1 = snapshots[0].val()
        //         const value2 = snapshots[1].val()
        //         const dif = value1 - value2
        //         // console.log("Difference: ", dif)
        //         // diffSpan.textContent = dif
        //         document.getElementById('res').innerHTML = dif;
        //
        //     })
        //     .catch(error => {
        //         console.error('Error:', error)
        //     })

    // }

    return (
        <div className={styles.card__container}>
            <img
                width={250}
                height={250}
                src={image}
                alt="Tel Aviv"
                draggable={false}
            />

            <div className={styles.content}>

                <div className={styles.question__container}>
                    <h2 className={styles.question__container_title} id={"title"}></h2>
                    <p className={styles.question__container_description} id={"smallDescription"}></p>
                    <div className={styles.level__container}>
                        <i className={styles.level__container_icon}><HatIcon/></i>
                        <p className={styles.level__container_description}>Уровень сложности материала: <span
                            id={"complexity"}></span></p>
                    </div>
                </div>

                <div className={styles.day__container}>
                    <div className={styles.info__container}>
                        <i className={styles.info__container_number} id={"data/number"}></i>
                        <p className={styles.info__container_description}>
                            <span id={"data/month"}></span><span id={"data/weekDay"}></span>
                        </p>
                    </div>

                    <div className={styles.guide__container}
                         onClick={() => navigate(`/${guideInfo}`)}>

                        <img className={styles.guide__container_icon}
                             src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhUYGRgaHB4aHBwcGhoaJRwaHhwaHBwfHh4cIS4lISMrHx4YJjgmKy8xNTU1HCQ7QDs0Py40NTEBDAwMBgYGEAYGEDEdFh0xMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMf/AABEIAQkAvgMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xABCEAACAQIEAwUFBgMGBgMBAAABAhEAIQMEEjEFQVEiYXGBkQYTMqGxQlJywdHwI7LhBxRigqLxFTNTc5LSFmPiJP/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDm+YxTra5+I8z1NNjFb7x9TUjiSIMbECatAdwpbTJGoxOkkehqKTQH7xvvH1NGMZvvH1NNijNA575vvH1NH71vvH1NNAc+VANQPe8PU+tGMQ8mPrTU0U0DhxD1PrSfeHqfU0gmioHPenqfWle8PU+tNUJoHhiHqfWjOKep9aZBoTQPe8PU+tGMZup9aZmhqoHTiHqfWiOIep9aaFA0DvvT1ND3h6n1pqaE0DhxT1PrR+8PU+tICmlW8fpQLQsxgEyTG9aX2BeM0+pp/hOLXE68OsxrPWrj2SxtOOx/+sjnzZOnhQV/HMyMTM47iIfEd7CANTEwJ6THlVfS8f4m8T9aboAopekDcz4fmT+XrSVb1/fWioFs8+FJohSgKAA0RapuUwEgO4ZpMIinSXPMlo7KAwCRJNwNO4GYJN/4ST9hIt3SJJ8WYnqaCCDQmnWnr8zQAJ5fvzoGwaOan5PhbvEC3iB49/ynuq5/4blss0ZktiPE+6QkaeY1kFTJEHTK25mgzNJmtficYyQUImRwydp1NN+8628IY1DzPDUcjTgPgnocRVv3riAH0HrQZ2hNWmNwkiZ1COY04g8eyRAtvTf/AAZyjOkOq/EUvp/EphgO+IoK4NejmjZIsaBNAAOtKECmtVGGoHGakk0gtSS1AvVV17J4DPjMq7+7J3AsGQc/EVQzWp/s/bTmnnf3Lb2+3hn9KDOYvxHxP1ps09jDtHxP1poUBgxQEUkU4q0BFbfv99aUi3A76Cjr+4pxU2NAeYJY3iwAjoALDwApqPGpropUEWYTM87iCLdD8qfwMqhgklZO/wBmPKSOn5UFboHMH9+O9PYeVKgORK9bROwB6HnB5A1b5jhZgt9kAwQJv02mZB36cqncO4eDpQE/aLgjfYL5BSTadztQWXs9he7wnzTnU4U6FgWuPhETaRYW63AihyuUfM4khbsWLk9q5BOok7tEksSI5RYVsmyRCYTCQAwcqO8EkHrbV4mDyos+6ohVAFfEXUwUCTqYWjv3MC58qClfCw8sihbkj/mKwU6m3CMRqVQAe1IJ5EbVDOBhKoZsJ3Z+SFwYtIYgkknpv107VpsjwsOql1Ei999QkX3Exbnfvq3wslkkeWwRjYw3ZrqP8IldHkB4UGAzDoUEZNlQ2lWdwI2JVhMxe5HpVfgRq1YDOmIoLQt9QFyUaQdgCUYGRO+1dTzOczDLCYOCii4AV2WBtJgLyBiIrNcTxnYDXl8LswwbDXEUgjmpS2/X50GGx8170ywVW++AAJ/xACAD1UDvB3EDEwyCQRBHKtLmuBI8tgOASNXu3ZTvuqPANr9lgNt6pMxhMDoxFZWTskNYhR437P0oIFJJpbCKaNACaE0DRUChWp9g8Wc0xJn+Cw8g2EB8gB5VlRWm9gmIzLR/0m/nwqCjxh2j4n603FPYo7R8T9aRNAmlLRCaWAOZ/OaBaYZ3Cm3cfyp9UsLyTuAPTx/pSMJ+UT3SBPjU7AwQ3TyMxPkY9aBGGATB5beHTka1nAOFI40FAes23ixt3Hfabd9Nll7QViHHI/Cy9b3v41uuBlljlAtyPgYj8x4UAfgGDhoYQC3ahtp7u6mMhgKDMSVFrfEpABkwJ5x4iavGTU3dO48frTiZQSOwDyMibdPnQV75clQt+zJBj4kk6fQE+lQW4dLaySCQFvyuDEctorW4GQnu7hMD5ztS24cIPLu35UGWxMB1AA3ZpbwGwHl0qBlMR0cEiBcwCOpMs0SSekyZrZjImQAduveDt3VXZ/hhF2CkdR+Y/wBqCCeInEXSyLsdyN/Ewf8Aao78IBFtYPIIUImZ28ybf0o8fhw3meYgkjrYCwqtY4gMowIECCoJHiBuPLnQMcT4M6qSyaluQyqZBkcgCBEXkAVT55HxOyV16J0Yg3UbQ4MykwNyByN4rTrj4rfFF5EqSD3Edn9Kg8RwnwxrZPeoDMrCOjdVcGQYkXsZiTMUHPMxliDpIg7Rznp4/wBOtQGroXGkTM4WtAWsVXE06CGBBCYqfZccm+Fp3EgVgMbcyIPO83oG6FGaFABWj9ho/vLf9pv5sPvrOCtF7Dn/APpbb/lNv+LDoKvHHabxP1pqncY9pvE/U0yTQGBQnrQwz3x6+tScrlS5AJF4jvPhuaB7h2ROK4Uc9okk7dAd+XlV/wATyCYJTAQzimGfog3A/EeXMb2JFTsvxFMphMyBWfZeRYnaIub7wY33qR7PZPS51AvmXMuwMlWO6qdlO+p+Xwjagn8G4EUA1dgkSJEsZ6ACfM1q8pwYiDoab3eB8hUnhmBptqVWO4TtHze5nzFWP93QmWk95ufnNBHThzBZlCf330vDyGJIlhF+f9akjLodlEfhFSEwEH2Qf8tBETBvdlkXMsCafw8uOTC/Rj+R61ICja/d2f6U5tyPpQRRlzuCreP/ALL/AFpjEw43JB5T+TC30qY5Q79k9bqfWozl1vOtehgjyIuPnQU+ZydiSoid1F18hE/veqbM5QauUHY3gxaJ+UWIrS4zKe0hKOL6T057WYRy+lQcbLqyEjrLrOqR95fAxQZ1ssUaVkbAgwbRvPPb51Y4DGReeRjv5c7RS8xh9m+1oaPnB5/1pjKXIBIVjZTaDNxPQnlyNxQZjjXB2wXOLlxrTEEYmFOnWpIkDaD0IupgjpWD9oMnoxLEFX7SmIJFtwNjcEjkTXauI5BXQhgQD8YUkMtviWNiO7uNc747hEYRwsxvgldOIBOpGZ1BsLiyiRPxbb0GEFCncbAK33BmI5xvHXy25wbUzQGKvPZJox2MT/DI/wBSVRir32QMZhv+238yUFfmB22jqfrTBQnkaXmR2m/Efqan8MCIpxcUMwWyJMa3vYnko3J8OtAnAyEgFoQc2dlUEi8CYEwRaedPvhql5DSPssDO/NSYHmajZrNPjNqdixi1oVQBZVUDsgDkOZ6mkYGCWcIsyTHXc0E/LYjO6LMFJYMbhOZc9yKpI3uR1roXBsCUDR7vBsAGMNiE7u//AK7dZrnmFgAZhkjUAVUD7zSoCzfdomtK/tbh4LupRsR1hVaQFEQDHQbwAPnJoOrcOKEAK6kflHpVi2HI+L6Vz3gftxiug15YBPvowa0xJWB5xfnFbrL53WgO88/96B7DYqCJsT41IXEECT3+lVrvbzJ+n607h41j0/f786CxRvD1o8TEjcqPGqHF4mUDME1aR13sTF/Cs/nfa7MoAf7t2SSAS5WYAJNgbX2338KDcF9XJW8CJ+dQcTDGo6Cyubldj1mNjWawv7QUdVjAZ3+0qn4eszVxw7jC5gMVR00RqR1uoNwy/Ix3HnQFjvrYKwhgYkSJ7x0YURw2MwRqEmw+IfuAR3g1JxhJbUe1sYtJ5N5/rTGH8XOQbcvH1n50EN8AxqF1a4vseY8Z/dqjYGX7USI2Ija9ifPzq1zLgSApg7z3jePL5U1w/AGpgYkiNxz6ciRvQOZlCDAAkXUyO0Iupnf9DWD9rMBGBEgK6lUY2F2XsPM6YeBq5XNhMb3iSHRDEgjZp8d4vBNYbii6lfDcwHuGjVDWglbhlOxGxttQcoxkZGKMCGUkMpsQwsQR15UhltI86teIYILMrWcRovbTyW9ysRB5AAXG1VEUCSat/Zj/AJxj7jfzJVQRVnwAD3p/Af5loI2MO23ifrTucJIVQZCA+pJLHzgelN5lu03jPzpBaTtMzy6+FBb8PGi7LI7Tbbssog7gDqJ60vgOCz4w0m9ySenMxzPOKRmM1AAFj29pFpZlO/8AjZfKk8Dxirz1EdbSPzj6UE1UP9/aD8JZgbHtBYFo6kcrR3VpOC+wiRrxdTc9AGyx8TTM2veqP2dUYmdduSg9/OL+sV0zimeXAQqCBpUSTYDaJPeRYXvQJ4Zw1MEaR8Ow8PId9X+TVY0jYch6n51hctx7EZx8LK0Dmpkm14jn1qzOffCGsA6ee8rbmKDaDLatuUVJGUBEGq72e4kuPhK6kdD4g1bviAc6COmWRVgqDYzI9bVCzmQTG7JWBt0ttFj0tUnFx4k/Ws/xbPuh1KyKp5kkX7gASaCwXg2Cg0oiqALDkPAbbc96k4Kabx2vvDePKspg8RzY1HWjDkukra9pmJ8RHhvV/wAC42uOCpBV1ElSCDG1/A/u9AriDaWEc4Xy+JR5EOPAiiyzKIJAvqJPeTUbj57IYRbtDyiR6fSl5VwVv5C1pHL99aBzHliw2nbY9fLrTWRco8G4iYF/GPCZp7FYArJubeMRBn0oYQvJFwe/vEjuM0BceYlbRJ7jfv8AHwrAcWy7jUWw2gXYLfxYrfziDXUm0FTqI2md7R+/nVHxTL6x2IVhsNXzVvtD/DyoOO8TyqOutZOkGStyZEhom+4nmfH4s5m8EqSDEjeLggwQwPQyK3nEclLsyHSxs2GZ3jdAd13kD0qoz2HhMssDht9loJQn7QMXUSTtsZNtiGRFWns+P4pn7h6/eXpUfiGQfCaHAg/CykMrfhYW8vlTnBfjMfdPTqtBGzJ7bfiP1pCml5gdtvxH60nTAnnyH60E7Pkhlmx0J811fnUjg+EWJIPwgMSeQW5/K1ReIP8AxL9FHP7KhOYHJenWjyeaKDEj7SEbdef760Fx7G4hGOx+8IuepDT37VdYmG+dzvu8Rzh4eoSwAmSNQAJkagLTfbas/wCzjIG7bEKWIa0jToMG3Oatc5n8V394qdhiCi7MNNw8Dc3PrQFx/iGBhY74OVw2UYQYM+JjuSxS7BEZtFyCAsSbwBWr4dmn0o7DVh46NALSSiGNQ1XkA3B5ARIkCjyfDcPMYq42Jl3ZjDMJUKWHMgTqm0jY/Wy4rj4WXQ4jqQ6rowEB1BLkgTy6mOQIBoJ/9lzsrZhWJ0riFR4rY+fPzrd5jNdruAMd9qwvsCkZZTPaMs28kkyWJjnNaZm1GD/tyt8qCHmPfn+JFjcTEAEwJ3vtVc/BkbDxMzmi76ELDDR2QkC47SnUJPQjnM1Z5xX93ojUE2B2O8MLfveqtcpilWVJJIKsC0G8yCOm9Bg8r7UY2vDXDc4SYjRoGI+Y0jVpCumM7aRMHs6SRccq6FwjMuHjFVVxMNgrR2g0C4VoGoRMHug7VS5f2Zw0ZWGWh1klziMQp3BAFyZveYi1XWQTEQHVEEzPW3Mcv60GlzOAuIjASIuDJAv59xqJlcMwYIGkDeP8XPwpXC82WkMpEcrkb3pb4gBuLHr0tso50EF2JIBFlMg/K3rVpgNtI3kT4QZvy2tNVmcxVMG8Dl4nn1qXhYq6R5EX3+IEfP5UEzHzSizEifS25FZbPKC8K2hpsR8LRbYbHw609xLGLkaNrW2M7i4/PaqRs5hs3u3aCZAjYxIMX3keY2NqCJxY+/kOG18mXSZjbYapv3nxqnzpQDSRqDSpZiCH3m+ykTANiCTO81eZnLKwsZIsGEq67xI9OZqlx1Z9aYglxqLctaj7e5GoCLjcA2EEKGQzalJAMobX2IGwYdRyO4pvhwhyReQfqKk5lTBRoOiwIIuvLx23qLw8doi+028RQN5mztHU/U0WEkmeQudv3vAilZte2w6Mw/1GkuYGkdZO24kC/MCT6nuoEYrkwfH6mkh4nvEUa3IHKjxo7JHNVnxgA/ME+dBqOBZP3uEyKLwXZttIuqgnpN/KBPLY8LyDHDVX0hQOyGkEgATqjlPSq/8As9wNWDPLUZ8ViPRTPifTX5gaO1pmdIFxYE9qPAGY50EV8J4VUKgSAwA0iD0jn41kvb3BnEwcBLu12O8XAA7gBNbwZgINQUlp7KjrWR9nsu2PmMTMP29LHDXu0nSd+rA35xymKDT8Fwzh4KIsCAAbbwI9dqXhY/aKt1tPL08/WrH+4dmxg/vn6VS8RRsNw28sAe4GB9Y9KDR5IrYfpal53hymCAwM/EvTmT1H6CovB8wmJKzDLsfrI6bVcoCtjvQQWyjEQXnpO9u9YHqKr87kWci5EdoGdQY8gZAjzrRlxF4/fzpsgXBAg/Xc2oKVC6MCVAgGbde8cue1u+oedxG95fSVK9TM/u36VfugIjyHUfu16zPEGuDa7QbwJkCfH9KBnMubGbT9DfwHfUZ80NgwmbDvufT+tB3se60/vbaqDh668zO4Clo79hMjxoLQ61xVVNR+9G4E3kenrTHH+H4DvgaxoIcgwdEjS20i14O/LvrRcI4UqFMYyXdSHkmCQbQOUQYqRxjJguptOliJAMM0ICJ8SfKg5hlM66ucNicVACyOFOvQrG4DfEVEEqI3kGCJvcDBLKmIhUxBUiSCDFwdiD3/ANKbx+DPh5U4jf8APyrDELL9rQQrwSBOrDKNzusXq64Nl1xEfQBoY61C7ANqDgd2tHYdzUGK4/w4K8hYKkN4oxusdQJjuDdBOaxcvpxGUHbbwt/Suj+0mVKYmE5NgAGBG41Ab+JU36Vl/azIhThYiGA+GswOcfoB6UGazB7T/iP1NR2NP5r42/EfqaaRC1gJPQXPkBvQIoiacw8MsdMgHnqMR4/oL0nFTTbn++RuPOg6H/Z1mownUxZoE98Mf5fStc+PrbSL/uP35Vzf2SxdGG7dDv07LD9PI10b2aXUodhuAb+Fv33UD/FcyMtl3xnHasqD/ExAHzPpWe/s5zqhPdMZZCfEgk9rv3+taH2jwEzKe5cHRa4nskdoEEbEQKxv/wAVzOBjLiZcq8bqxCGIHM21G5IgX5XoOvjGQLM8qpc+i4jALyN9vGq7KYWZZQXX3Ui4Z0OnYbIxn1qZgZLCKKzq2JYyxZlFiLhFIAF7c+80DeZyvuWV1NpE33kgGtFls0DCt9q6/mPKqE5MGAX7AMhS8zG3aYkgbWqZiuCpWYiII3U3g2oLp0EWqMXI+Ufn+++oGT4iGEN8Y3HW247v9uVOZjEPKPnzME27qB9zWV48pCtHWfLzPfWibC1ggk7jYwZB1biqL2naEMDrtztP78KCrxG7Fr236m9/rUDIEpiAgTINtyY/3NTWSVUdwJ+W8bX/ADpXBFH96WfhVJ89h86DX5bNQuGhQjsSJjfcix5Xqq4lxI+8GKo1YSNpcxMD73cAxgnrFPe0mfRVQu2kdrUQYtpM35TEVmslxoJcgAuxKoYsg7ABBsJsI5+lBq8/joFtDK4Kn/xIHd3eAFUvsJhaMriWgK2lZvYIsAeAImLTqPOmM5ipBXDbsumkLY6DZez10iB4ae8CVwrG91lQh+NizH/MxIB79OkUFX7ZY+kYTyAPeaWvuoZZkeDWrIcezivlcBv8sd6tiA/lU721zYKlAQxXGYRzEphH9N+prN8Sx1VMPDN4XUe9iSSR3XI76CszXxv+JvqajtUjOfG5/wATfU1HNA42ZcgAuxA27Rt4X7h6U0woUDQav2ZAbLYwvq5R3wB+dbX2dzpGGg5HsntCZJAHyI9a5/7JZgh3S3bUC/UMp+k1rMtlycBHRQdDHsGwuTqk7i0UGxy6kjUbt8MwLbmxn7RA9R4VfOwADRpmLnnNxJPj9K5vw72rTUFZlFg0mO39lRbcxpIJ/wBtKntNghlfsllhX1WYWBUwb8m9bWM0GizOEHUAmxM3gWBn9KeKKBplZM7QZ/W4FZjM+16BLuEMmAzqpYSYIBvAAP8A4kihie0GGVBDAlwAEUxMk9kW6KwmfIbgLpQui4G3h1jfwO9VxwiykqT3CTHlJ5/nsar8zxQwGZCtxpC2uI1DeQB3xEg8xTjcVQ9lmjWCApINplmgDbtHe23M0DmG6qS4sROreGAI+6DcRI/rVoryAQZHjaq7LlXlkAgkkHkVYk/O/wC95+WTsk3HiNyLTItQTcpMHrM1mvafFMRzJ8e6tHgtpXmZP9Ky/tGLEwCSQPWw7uVA2iSsnb6wO/eZFD2bdDi4oYgMyhVEiTpu0eErUjMJowxPQm/yn51zL2kzxXFRkYo+GSQw3DNdt+7SI8aDb+1vEcNFCO4F7Tewhthc8hHWKx2Q4wuI4wiiIjCAyldQ3iS1us87zJmsznM4+K5fEcux5n8gLCmKDoSZhEbS7uSukgORPOCVkTIPQ8rVE/8AlbDMiR2FDLE31MBczHOsemacKFDsFGwBMCd7UyrUF7xTjQZmZEAZ2Z2dzraT2ZWIC2A2E99Ur4zMxZiSTzNNk0BQTM38b/ib6moxFSs18TfiP1NRmFAiiNHFA0FjwHFC4yTaTE9CdvnFdO9koTMPguJRz7xAR8QMagPAn51yBTBkbium8G4j7zLpjqP4mXbUwAMnDjtqI3OgkgdQKC09sfY9WBxMERFyswIHTkImevKs57M8BV1d2BeXZQTB1KkrfuLTN711vSr4JcQdaWbexFh4Vgv7MVD5VgWGrDZw14vq1ASd/iFBJPs5h+6HZKQCQ6uwIIOqF5tczFwZNLy/AESCSx0ptJiTfyglrAfaNXD/AAja0kEkWaIvY8u7nUXMYkwoLdpgGm5mwv6E+lBB4xwtChZhvcjcz8Q32AJnv9awfDlxsfGKYbEYamT9oFARaDbtQLDkekit77XaS+HhKxDOSHuZAO5ImwjVHWPClez+QRSEwwdI5n6nv7qCVkA+Gpd9b6gNLMeixbeL3nffuq4wiVwVmNTAExBv3edP8UwdWGQPsi3l/SouZHZRepUUFhl0GkHu+VZ/i6F8xhIDbVqb8Kf/AK0jzNaOdK+H6Vls9xZMBMbNYnwz7vDG5YrqkL4sSP8AJNBTe3XGhghEBvJJA5gAiJ5S2n0NcozOMzsXYySZNSuLcTfMYjYjm52HJRyA/XnUCgFCjoooBQo4oUBUYoRT+Ch+VBJzidt/xNznmaiMKs+IYcO/4m+pquxBQMmio6KgKtH7E8X9xmVDHsYnYYcpPwk+dvOs7FAig9BezOY0YT4P/RcoOc4e+H/oKec1jvYNhh5nOYECBitpB6anCgeQX5VF9lfabU+HrYanT3TkmJdJZG6dpS4nqtQuOO2V4iMcT7vGhieUwFceRAP+ag6JxJxYaRJYTEEfETv3SKi5SXx1uBDAmfCZMX6czYcuSMbG1rhPq+1YR3R+/wBZlvExRho+IY1NIHyFp57evjQQ83rxsy7WlZQHeCRv+EKP9VaXh+V92mhZ1wO3zk8yfH9xR+z/AAh1TU4Gp+2bXuBy8ALbVdLhgQB4+dAMJCFCm9gCTz5XqtzOFONhLyUFvIDSPr8qsneBPSs9nuMplsPEzOOwWTpQC5YCYVRzY3+tAz7bcdXLYJJPabsqBuSR+QvXGeN8ZfMuGckIg0ogJhFH1Y7luZ7gAD9oeNPm8Y4j25IvJF6ePU8z3QBVigKhRmioBQo4oRQEKFKAp/LYBY0BYGHzNS8LexI8CRabcjUhcuFEEtJA7oPPfoBG2/WaM5ckxB2mBe2w68oiglcUwwXcjbU31tVHjpWizagM8n7bedzEef5VRZkgWmgg0IozQNAVA0KFApMQrsY/UbGtrlswOIZZsFyBjYfaQnr39zCV9DWHqRks0+G4dDBHzHMGg1vAvaQIq4eMIfDJHaJF5i8cx08etbf2bT++OMXT/AQyp5PidAOim5PUR1rPcEzmVzBRnw8Jn/xqpIjkSfLfvreZPiaBAEEAAdkFRHMCBb50GkcWgVCJPpUJOMrMXFrkxta9Yf2z/tCVJwsqQ77M9iqnu+83yHftQXHtf7Wplk0/FiNdUBv4sfsj9wa47xfi+LmX1YrTFlUfCi9FHLx3PMmomYxndi7sWZjJZjJJpqgOjFAUYoDoopQojQChFHFKRCTFAeDhye6rXAwgsdsgSZFpA6xselDJ5QqbiLaZMgAkd4iYv6VPxgqAmJBIU20lQIJMzefMGQelBDHaa4PZAkiSCZEg+o9e+klj1OrYxNosJjrvNPaCBqBExLDvJkzpvHnaq7GxYPOeszQWHG+Iy7om0kEnrN4/WqJzUrO/G/42+pqIwoEigaUKBFAg0BRmgKBWGk1cezfs3iZzGODhkKQuos0wBsJjr+RqBgLAnzH6Vsshxc8NwF92Ac3mVXFYsJGDgkfwwRzdhLRy1X5SGe457K5zJy2LhMFBAGIh1ISdu0LrPLUBVjwPE1qW/wCIrhld1xE2gXvrEjw+tVvE+MY+MWbGx8R5EEMxiN40CFiegqJxniYxzhhcJMNcNFRQiiWgCWd4BZiZPdJ7yQc4nxfEdmVcd3Q2Jgpq69mSQO4m/MVU0dFQCio6KKBQoxRKKWBQHQijC0ZFAQWbDervI8PiAbT8R35kC3jP15GmeE5EO0MYOw8e+9vOr18AIjww0m4F50sd7CGuTHj6g1l8PSFAJMmREz5AqJtpPPeoeYeJBKtqvKyGgGQenaMHad7RU9lAVUDJyBBBB7R0gkRMwG8qg5jDMlxsewpECGBvA3u2rlPzgGMRyVDau5gQJBAO0Dnfziqx3vapOY7LMoEXj0kVEW5NA7nfjf8AE31NRiKl58fxH/G38xqJQFFERSgKSRQJancvgzv+/Giw8OTViEQDfYTexm21vluKBjEdZUP8BKho30yNUd8T509xHPtiYj4zxrxGLkdAbKo7lUBR3AVAxHlpptjJk0Adp3pNChQJNFS4oooCFCKUKVQJC04ooUBQA1LymXJ7RE8lAMGTYG086TlMuXO1hc+FW+EEBQsdP2rQwGm4+0QOndfagssoCqBZ0gLeYkyAY2BHiRAmKPFcMdBg2mSBe2kKdOxCiIuZNLw8RgVljCiLH4vtC28XB8xcRUTDBkyCWPbadQA2JuQJOwt86AszmtyBsQoBUgAgELc2ET15Dao2O4QDth++dySDPce++0daXmXuRZhc2A7wIO9mmxja4qqzWPJ5bXO9/EzeIE0DWM03mmkFJdqTq60D+ezC63uB225i3aNRDjL94eorv2Z+N/xN9TTeH+Y+poOCjGX7w9RQVwbSPUV3vF39PoKA3NBxfLKAJlQBuSR877bjzqHms0pJCssDvFdybajG58PyFBwH3i/eHqKMYi/eHqK74eXhSDQcG96v3h6ii94v3h6iu9GgtBwX3q9R60Na/eHqK7riUpfyFBwjWv3h6ij94v3h613d9vI0F/Sg4R7wfeHqKdwe0YBB9K7Xnth4/kady/2PGg5blcPQL9kxcG2xNxIMxBmLQaLGxIYnWYUjfexB2HKSfSuqYvwP+P8AIUMP4f8AKf56Dlj5sqeyxMmZMSNjaRaTuY+tEMwDYOUBlWOqRAG2nnvFdQzPP/N9DUfPfEPAfy0HKWxluwMAz6fDB+d6inFEzI/rXYcpv/lH8oqKfjfxH0oORNiA0pQTtJPd08q6TmfiPiPzo0+BvxL9HoP/2Q=="
                             alt=""/>
                        <div className={styles.guide__description_block}>
                            <p className={styles.guide__description_block_desc}>Ваш гид:</p>
                            <p className={styles.guide__description_block_desc} id={"name"}></p>
                        </div>
                    </div>
                </div>

                <ul className={styles.price__container}>
                    <li className={styles.price__container_item}>
                        <i className={styles.price__container_icon}><GeoIcon/></i>
                        <p className={styles.price__container_description} id={"city"}></p>
                    </li>
                    <li className={styles.price__container_item}>
                        <i className={styles.price__container_icon}><WatchIcon/></i>
                        <p className={styles.price__container_description}><span id={"timeFrom"}></span> - <span
                            id={"timeTo"}></span></p>
                    </li>
                    <li className={styles.price__container_item}>
                        <i className={styles.price__container_icon}><ShekelIcon/></i>
                        <p className={styles.price__container_description}><span id={"price/amount"}></span> <span
                            id={"price/currency"}></span></p>
                    </li>
                    <li className={styles.price__container_item}>
                        <i className={styles.price__container_icon}><UsersIcon/></i>
                        <p className={styles.price__container_description}>Осталось <span
                            id={"diff-span"}></span> мест</p>
                    </li>
                    <li>
                        <button className={styles.price__container_btn}
                                onClick={() => navigate(`/${viewEvent}`)}>Подробнее
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Card;