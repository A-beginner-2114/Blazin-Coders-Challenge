import location from './location.svg';
import phn from './phn_icon.svg';
import NavigationBar from './NavigationBar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import News from './pages/News';
import Services from './pages/Services';
import * as React from 'react';
import Flexbox from "flexbox-react";

function Part0() {
    let component
    switch (window.location.pathname) {
        case '/':
            component = <Home />
            break
        case '/pages/AboutUs':
            component = <AboutUs />
            break
        case '/pages/ContactUs':
            component = <ContactUs />
            break
        case '/pages/News':
            component = <News />
            break
        case '/pages/Services':
            component = <Services />
            break
    }
    const icon = {
        fontSize: '10px',
        marginLeft: '1000px',
        height: '1rem',
        width: '1rem'
    }
    const footer = {
        backgroundColor: '#1b1b1b',
    }

    const text1 = {
        width: '350px',
        color: 'white',
        marginLeft: '135px',
        fontSize: '16px',
        lineHeight: '24px',
        fontWeight: '200'
    }
    const text2 = {
        width: '80px',
        color: 'white',
        marginLeft: '125px',
        fontSize: '16px',
        lineHeight: '24px',
        fontWeight: '200'
    }
    const text3 = {
        width: '240px',
        color: 'white',
        marginLeft: '125px',
        fontSize: '16px',
        lineHeight: '24px',
        fontWeight: '200'
    }
    return (
        <>
            <div>
                <br></br>
                <Flexbox >
                    <Flexbox flexDirection='row'>
                        <img src={location} style={icon}></img>
                        <img src={phn} style={{ marginLeft: '250px' }}></img>
                    </Flexbox>
                    <p style={{ position: 'absolute', top: '10px', marginLeft: '67%', fontSize: '11px' }}>Company Address</p>
                    <p style={{ position: 'absolute', top: '10px', marginLeft: '84.5%', fontSize: '11px' }}>+91 00000 00000</p>
                </Flexbox>
            </div>
            <NavigationBar />
            {component}
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <div style={footer}>
                <Flexbox>
                    <Flexbox flexDirection='column'>
                        <div style={text1}>
                            <br></br><br></br>
                            <h2>LOGO</h2><br></br>
                            < div>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                            <br></br>
                            <p>@Company.com</p>
                            <br></br>
                        </div>
                    </Flexbox>
                    <Flexbox>
                        <div style={text2}>
                            <br></br>
                            <br></br>
                            <h4 style={{ fontWeight: '400' }}>About Us</h4>
                            <p>Company Portfolio Careers Contact Us<br></br></p>
                        </div>
                    </Flexbox>
                    <Flexbox>
                        <div style={text3}>
                            <br></br>
                            <br></br>
                            <h4 style={{ fontWeight: '400' }}>Contact Us</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br></br></p>
                        </div>
                    </Flexbox>
                    <Flexbox>

                    </Flexbox>
                </Flexbox>
            </div>
        </>
    )
}

export default Part0;
