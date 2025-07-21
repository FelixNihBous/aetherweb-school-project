import React from 'react';
import '../../css/LandingPageBody.css'; // Pastikan path ini benar

function LandingPageBody() {
    return (
        <div className='landingPage-body'>
            <div className='landingPage-content'>
                <div className='landingPage-content-text'>
                    <h2>Aether: Web Development Services</h2>
                    <p>
                        Crafting intuitive interfaces, responsive designs,
                        and seamless user experiences for your business.
                    </p>
                    <button className="cta-button">Get a Free Consultation</button>
                </div>
                {/* <img src="/Device.png" alt="Digital Devices" className="landingPage-image" /> */}
            </div>
        </div>
    );
}

export default LandingPageBody;
