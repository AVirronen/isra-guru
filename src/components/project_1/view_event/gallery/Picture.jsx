import React from 'react';
import {gallery} from "../../../../utils/constants";

const Picture = () => {
    return (
        <section>
            <img src={gallery} alt={'gallery photo'}/>
        </section>
    );
};

export default Picture;