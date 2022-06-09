import React, { Children } from 'react';
import style from './Button.module.scss';

function Button (props: any){
    return (
        <button className={style.button}>
            {props.children}
        </button>
    )
}

export default Button;