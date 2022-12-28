import {useState} from 'react';
import styles from './App.module.css';
import taca from './assets/taca.png';
import {importancy, teamImportancy, Level} from './helpers/score';
import {Grid} from './components/GridItem/GridIndex';
import leftArrowImg from './assets/leftarrow.png';


const App = () => {
  const [titles, setTitles] = useState<number>(0);
  const [years, setYears] = useState<number>(0);
  const [showResults, setCalc] = useState<Level | null>(null);
  
  const handleScore = () => {
    if (titles && years) {
      setCalc(teamImportancy(titles, years));
    } else {
      alert('Preencha todos os campos.');
    }
  }

  const handleBackButton = () => {
    setCalc(null);
    setYears(0);
    setTitles(0);
  }

  
  return (
    <div className= {styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img className={styles.headerImg} src={taca} alt="" width={150}/>
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Qual o tamanho do teu time?</h1>
          <p>
            Baseado em estudo nenhum e com âmparo de instituição nenhuma,
            um clube TEM  que ter muitos títulos nacionais para impor respeito
            no seu país, entre os possíveis títulos, destaque para o Brasileirão.
          </p>
          
          <input 
            type="number" 
            placeholder='N° de títulos (Brasileirão)'
            value={titles > 0 ? titles: ''}
            onChange={e => setTitles(parseFloat(e.target.value))}
            disabled={showResults ? true : false}
          /> <br />
          
          <input 
            type="number" 
            placeholder='Idade do clube (em anos)'
            value={years > 0 ? years : ''}
            onChange={e => setYears(parseFloat(e.target.value))}
            disabled={showResults ? true : false}
          /> <br />

          <button onClick={handleScore} disabled={showResults ? true : false}>Calcular</button>
        </div>


        <div className={styles.rightSide}>
          {!showResults &&
            <div className={styles.grid}>
              {importancy.map((item, key) => (
                <Grid key={key} data={item}/>
              ))}
            </div>
          }
          {showResults &&
            <div className={styles.rightResults}>
              <div className={styles.backArrow} onClick={handleBackButton}>
                <img src={leftArrowImg} alt="" width={25}/>
              </div>
              <Grid data={showResults}/>

            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
