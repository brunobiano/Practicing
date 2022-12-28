import {Level} from "../../helpers/score";
import styles from './GridItem.module.css';
import thumbDown from '../../assets/down.png';
import thumbUp from '../../assets/up.png';


type Props = {
    data: Level
};

export const Grid = ({data}: Props ) => {
    return (
        <div className={styles.main} style={{backgroundColor: data.color}}>
            <div className={styles.thumbIcon}>
                <img src={data.icon === 'up' ? thumbUp : thumbDown} alt="" width={30}/>
            </div>
            <div className={styles.scoreTitle}>{data.title}</div>

            {data.yourScore &&
                <div className={styles.yourScore}>Indice títulos/anos de clube é de {data.yourScore}</div>
            }

            <div className={styles.scoreInfo}>
                <>
                    A relação título/idade do clube está entre <strong>{data.teamScore[0]}</strong> e <strong>{data.teamScore[1]}</strong>
                </>
            </div>
        </div>
    )
}

//Pegar os valores de titulos e anos e jogar no fragment acima