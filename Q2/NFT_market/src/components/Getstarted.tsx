import style from '../components/Getstarted.module.css'
import Bucket from '../assets/Bucket.png'

export function Getstarted () {
    return (
        <div>
            <div>
                <span>OVERLINE</span>
                <p>Sapien ipsum <br/>
                scelerisque <br/>
                convallis fisce
                </p>

                <p>Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.</p>

                <div className = { style.Buttons }>
                    <a className = { style.getStarted } href="#">Get started</a>
                    <a className = { style.learnMore } href="#">Learn More</a>
                </div>
            </div>
            <img src={ Bucket } />
        </div>
    );
}