import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {

    const [clockState, setClockState] = useState();
    const normalDate = new Date();

    setInterval(() => {

        const date = new Date();
        setClockState(date.toLocaleTimeString());
        
      }, 1000);

    return (
        <div className="Footer">
            <div className="Footer__card">
                <FontAwesomeIcon className="Footer__icon" icon={faFacebook} />
                <FontAwesomeIcon className="Footer__icon" icon={faInstagram} />
                <FontAwesomeIcon className="Footer__icon" icon={faGithub} />
            </div> 
            <div className="Footer__card">
                <a className="Footer__link" href="www.google.es">Info</a>
                <a className="Footer__link" href="www.google.es">Support</a>
                <a className="Footer__link" href="www.google.es">Code</a>
            </div>
            <div className="Footer__card">
                <p className="Footer__date">{clockState} {` `} © {` `} {normalDate.getDate() + "/" + (normalDate.getMonth() +1) + "/" + normalDate.getFullYear()}</p>
            </div>
        </div>
    )
}

export default Footer

//{clockState}

//{date.getDate() + "/" + (date.getMonth() +1) + "/" + date.getFullYear()}