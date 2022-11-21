import './global.css';
import { Header } from './components/Header'
import { LatestAuctions } from './components/LatestAuctions'
import { Getstarted } from './components/Getstarted'
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.wrapper}>
      <Header/>
      <LatestAuctions/>
      <Getstarted/>
    </div>
  )
}

export default App
