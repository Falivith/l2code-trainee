import styles from './TopBar.module.css'
import nftLogo from '../assets/Sygnet.svg'

export function TopBar () {
    return (
            <header className = { styles.topBar }>

                <img className = { styles.nftLogo } src= { nftLogo } alt="nftLogo"/>

                <div className = { styles.middleAnchors }>
                    <a href="#">Auctions</a>
                    <a href="#">Roadmap</a>
                    <a href="#">Discover</a>
                    <a href="#">Community</a>  
                </div>

                <div className = { styles.endAnchors }>
                    <a className = { styles.contact } href="#">Contact</a>
                    <a className = { styles.myAccount } href="#">My Account</a>
                </div>

            </header>
    );
}