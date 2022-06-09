import React from 'react';
import Formulario from '../Formulario';
import Title from '../Title';
import style from './MainBannerWrapper.module.scss';

function MainBannerWrapper(){
    return(
        <div className={style.mainBannerWrapper}>
            <div className={style.imageWrapper}></div>
            <div className={style.formWrapper}>
                <Title>Escontre as letras das suas músicas preferidas</Title>
                <Formulario>Música</Formulario>
            </div>
        </div>
    )
}

export default MainBannerWrapper;