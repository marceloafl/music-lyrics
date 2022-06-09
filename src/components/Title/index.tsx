import style from './Title.module.scss';

function Title(props: any){
    return(
        <h1 className={style.mainTitle}>
            {props.children}
        </h1>
    )
}

export default Title;