import React from 'react';
import Button from '../Button';
import style from './Formulario.module.scss';

function Formulario(props: any){
    return (
        <form className={style.formulario}>
            <div className={style.formWrapper}>
                <label htmlFor="musica">
                    Qual o nome da música?
                </label>
                <input
                type="text"
                name="musica"
                id="musica"
                placeholder="Digite o nome da música"
                required
                />
            </div>
            <div className={style.formWrapper}>
                <label htmlFor="artista">
                    Qual é o artista ou banda?
                </label>
                <input
                type="text"
                name="artista"
                id="artista"
                placeholder="Digite o nome do artista ou da banda"
                required
                />
            </div>
            <Button>Buscar letra</Button>
        </form>
    )
}

export default Formulario;