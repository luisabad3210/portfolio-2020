import React from 'react';
import './contact.css';
import ContactImg from '../images/contact-icon.webp'

const Contact = ({profile}) => {

    const openContactModal = () => {
        let modal = document.getElementById("ContactModal");
        modal.style.display = "block";
    }

    const closeContactModal = () => {
        let modal = document.getElementById("ContactModal");
        modal.style.display = "none";
    }

    return (
        <div>
            <button className='contactBtn' onClick={()=>{openContactModal()}}>
                <svg viewBox="0 0 28 28" alt="" height="20" width="20"><path d="M14 2.042c6.76 0 12 4.952 12 11.64S20.76 25.322 14 25.322a13.091 13.091 0 0 1-3.474-.461.956 .956 0 0 0-.641.047L7.5 25.959a.961.961 0 0 1-1.348-.849l-.065-2.134a.957.957 0 0 0-.322-.684A11.389 11.389 0 0 1 2 13.682C2 6.994 7.24 2.042 14 2.042ZM6.794 17.086a.57.57 0 0 0 .827.758l3.786-2.874a.722.722 0 0 1 .868 0l2.8 2.1a1.8 1.8 0 0 0 2.6-.481l3.525-5.592a.57.57 0 0 0-.827-.758l-3.786 2.874a.722.722 0 0 1-.868 0l-2.8-2.1a1.8 1.8 0 0 0-2.6.481Z"></path></svg>
            </button>

            <div id="ContactModal" className="modal">
                <div className="modal-content">
                    <div className='modal-content-top'>
                        <img src={ContactImg} width='200px' height='200px' alt='' title=''/>
                    </div>
                    <div className='modal-content-bottom'>
                        <h2>Lets get in touch!</h2>
                        <a href={'tel:' + profile.contact.phone}>Call: {profile.contact.phone}</a>
                        <a href={'mailto:' + profile.contact.email}>Email: {profile.contact.email}</a>
                        <div><a href={profile.contact.linkedin}  target="_blank" rel="noreferrer">LinkedIn Profile</a></div>
                        <button className='ModalClose' onClick={()=>{closeContactModal()}}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;