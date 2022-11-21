import  styles from './ItemBox.module.css'
import Clock from '../assets/Clock.svg'
import Heart from '../assets/Heart.svg'
import UnfilledHeart from '../assets/HeartUnfilled.svg'

export function ItemBox ({
    bannerUrl = "", 
    title = "", 
    time = "", 
    ethValue = "", 
    peopleBinding = "", 
    likesNumber = "",
    liked = false
}) {
    return (
            <div className = { styles.wrapper }>
                <section className = { styles.content }>
                    <img className = { styles.banner } src = { bannerUrl } alt = "Banner"/>
                    <div className = { styles.description }>
                        <div className = { styles.titleAndEth }>
                            <div className = { styles.boxTitle }>
                                <span className = { styles.boxTitle }>{ title }</span>  
                            </div>
                            <span className = { styles.ethValue }> {ethValue} ETH</span>                        
                        </div>
                        <span className = { styles.clockTimeEth }>
                            <div className = { styles.clockAndTime } >
                                <img className = { styles.clock } src= { Clock }/> 
                                <span>&nbsp;&nbsp;{ time } left </span>                           
                            </div>

                        </span>
                    </div>

                    <footer>
                        <div className = { styles.avatarSection }> </div>
                            <span>{ peopleBinding } people are bidding</span>
                        <div>
                            <span className = { styles.clockAndTime } > <img className = { styles.heart } src= { liked ? Heart : UnfilledHeart }/>&nbsp;&nbsp; { likesNumber }</span> 
                        </div>
                    </footer>
                </section>
            </div>   
    );
}