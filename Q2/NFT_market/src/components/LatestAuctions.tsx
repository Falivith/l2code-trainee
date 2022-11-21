import styles from './LatestAuctions.module.css'
import { ItemBox } from './ItemBox'
import Banner1 from '../assets/Banner(1).svg'
import Banner2 from '../assets/Banner(2).svg'
import Banner3 from '../assets/Banner(3).svg'
import Banner4 from '../assets/Banner(4).svg'
import Banner5 from '../assets/Banner(5).svg'

export function LatestAuctions () {
    return (
        <div className = { styles.auctions } >
            <span className = { styles.span } >Latest Live Auctions</span>
            <div className = { styles.wrapper }>
                <ItemBox 
                    bannerUrl = {Banner1}
                    title = 'Tristique diam a, enim, eros tellus. Viverra etiam'
                    time = '2:43'
                    ethValue = '2.55'
                    peopleBinding = '100'
                    likesNumber = '54'
                    />
                    
                <ItemBox
                    bannerUrl = {Banner2}
                    title = 'Vulputate felis purus viverra morbi facilisi eget'
                    time = '2:41'
                    ethValue = '3.19'
                    peopleBinding = '35'
                    likesNumber = '120'
                    liked
                    />
                <ItemBox
                    bannerUrl = {Banner3}
                    title = 'Dui accumsan leo vestibulum ornare eu'
                    time = '22:59'
                    ethValue = '1.11'
                    peopleBinding = '101'
                    likesNumber = '570'
                    liked
                    />
                <ItemBox
                    bannerUrl = {Banner4}
                    title = 'Senectus adipiscing nascetur accumsan etiam'
                    time = '37:01'
                    ethValue = '1.63'
                    peopleBinding = '12'
                    likesNumber = '98'
                    />
                <ItemBox
                    bannerUrl = {Banner5} 
                    title = 'Mattis at diam lorem nisl nam sed sociis'
                    time = '12:15'
                    ethValue='0.12'
                    peopleBinding='19'
                    likesNumber='10'
                    />
            </div>    
        </div>
        
    );
}