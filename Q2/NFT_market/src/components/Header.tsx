import styles from './Header.module.css'
import { TopBar } from './TopBar'
import LogoCyanPart from '../assets/logoCyanPart.svg'
import LogoBluePinkPart from '../assets/logoBluePinkPart.svg'
import Adidas from "../assets/Adidas.svg"
import NewHolland from "../assets/NewHolland.svg"
import RitterSport from "../assets/RitterSport.svg"
import Nike from "../assets/Nike.svg"

export function Header () {
    return (
        <header>
           <TopBar/>
           <div className = { styles.headerBody }>
                <span className = { styles.upperText }>non fungible tokens</span>

                <div className = { styles.centerWrapper }>
                    <div className = { styles.aNewNft }>
                        <strong className = { styles.strongText }>A new NFT</strong>
                        <img src={ LogoCyanPart } />                        
                    </div>
                    <div className = { styles.experience }>
                        <img className = { styles.logoParts } src={ LogoBluePinkPart } />
                        <strong className = { styles.strongText }>Experience</strong>                           
                    </div>
                </div>
                
                <span className = { styles.discoverCollect }>Discover, collect and sell</span>

                <div className = { styles.brandLogos }>
                    <img src= { RitterSport } />
                    <img src= { Nike } />
                    <img src= { Adidas } />
                    <img src= { NewHolland } />
                </div>
            </div>
        </header>
    );
}