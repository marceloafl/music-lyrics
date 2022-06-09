import React from 'react';
import Formulario from '../Formulario';
import style from './MainBannerWrapper.module.scss';

function MainBannerWrapper(){
    return(
        <div className={style.mainBannerWrapper}>
            <div className={style.imageWrapper}></div>
            <div className={style.formWrapper}>
                <Formulario />
            </div>
        </div>
    )
}

export default MainBannerWrapper;