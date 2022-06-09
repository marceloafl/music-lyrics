import React from 'react';
import style from './Formulario.module.scss';

function Formulario(props: any){
    return (
        <form className={style.formulario}>
            <div className={style.formWrapper}>
                <label htmlFor="musica">
                    Música
                </label>
                <input
                type="text"
                name="musica"
                id="musica"
                placeholder="Digite o nome da música"
                required
                />
            </div>
        </form>
    )
}

export default Formulario;