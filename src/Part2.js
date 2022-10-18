import React from 'react';
import img from './pic1.svg';
import dots from './dots.svg';
import phn from './phn.png';
import pc from './pc.png';
import arvr from './arvr.png';
import Vector1 from './Vector1.png';
import ps4 from './ps4.png';
import desktop from './desktop.png';
import arrow from './Vector1.svg';
import Flexbox from 'flexbox-react';

class Part2 extends React.Component {
    render() {
        const text1 = {
            textAlign: 'center',
            fontSize: '25px',
            fontWeight: '700',
            lineHeight: '46.88px',
        }

        const text2 = {
            textAlign: 'center',
            fontSize: '25px',
            fontWeight: '700',
            lineHeight: '46.88px',
        }

        const text3 = {
            textAlign: 'left',
            fontWeight: '400',
            fontSize: '16px',
            lineHeight: '187.5%',
            marginLeft: '9%'

        }
        const text4 = {
            textAlign: 'left',
            fontWeight: '700',
            marginLeft: '9%'
        }

        const text5 = {
            fontWeight: '400',
            fontSize: '16px',
            lineHeight: '187.5%',
            textAlign: 'center'
        }
        const image = {
            position: 'absolute',
            width: '934px',
            height: '462px',
            left: '135px',
            top: '1300px'
        }

        const dotStyle = {
            position: 'absolute',
            width: '196px',
            height: '154px',
            left: '960px',
            top: '1233px'
        }

        const icons = {
            width: '50px',
            height: '50px',
        }

        const arrows = {
            width: '20px',
            height: '20px',
        }

        return (
            <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div style={text2}>Lorem Ipsum is simply dummy text of the printing and</div>
                <div style={text2}>typesetting industry.</div>
                <br></br>
                <br></br>
                <h1 style={text4}>Lorem Ipsum</h1>
                <br></br>
                <div style={text3}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div >
                <div style={text3}> Lorem Ipsum has been the industry's standard dummy text ever since the</div>
                <div style={text3}>1500s,</div>
                <img src={dots} style={dotStyle} alt='dots'></img>
                <img src={img} style={image} alt='pic1'></img>

                <br></br><br></br><br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br><br></br><br></br>

                <div style={text1}>Lorem Ipsum is simply dummy text of the printing and</div><div style={text1}> typesetting industry.</div><br></br>
                <div style={text5}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </div><div style={text5}> standard dummy text ever since the 1500s,</div>
                <br></br><br></br><br></br><br></br><br></br>
                <Flexbox flexDirection='row' marginleft='9%' justifyContent='center'>

                    <Flexbox flexDirection="column" width='300px'>
                        <Flexbox element="header" height="60px" justifyContent='center'>
                            <img src={phn} alt='phone' style={icons}></img>
                        </Flexbox>

                        <Flexbox height="50px" justifyContent='center'>
                            <div style={{ fontSize: '16px', fontWeight: '600' }}>Mobile App Development</div>
                        </Flexbox>

                        <Flexbox height="50px" justifyContent='center'>
                            <img src={arrow} alt='arrow' style={arrows}></img>
                        </Flexbox>
                    </Flexbox>


                    <Flexbox flexDirection="column" width='300px'>
                        <Flexbox element="header" height="60px" justifyContent='center'>
                            <img src={pc} alt='phone' style={icons}></img>
                        </Flexbox>

                        <Flexbox height="50px" justifyContent='center'>
                            <div style={{ fontSize: '16px', fontWeight: '600' }}>PC Game Development</div>
                        </Flexbox>

                        <Flexbox height="50px" justifyContent='center'>
                            <img src={arrow} alt='arrow' style={arrows}></img>
                        </Flexbox>
                    </Flexbox>


                    <Flexbox flexDirection="column" width='300px'>
                        <Flexbox element="header" height="60px" justifyContent='center'>
                            <img src={ps4} alt='phone' style={icons}></img>
                        </Flexbox>

                        <Flexbox height="50px" justifyContent='center'>
                            <div style={{ fontSize: '16px', fontWeight: '600' }}>PS4 Game Development</div>
                        </Flexbox>

                        <Flexbox height="50px" justifyContent='center'>
                            <img src={arrow} alt='arrow' style={arrows}></img>
                        </Flexbox>
                    </Flexbox>


                    <Flexbox flexDirection="column" width='300px'>
                        <Flexbox element="header" height="60px" justifyContent='center'>
                            <img src={arvr} alt='phone' style={icons}></img>
                        </Flexbox>

                        <Flexbox height="50px" justifyContent='center'>
                            <div style={{ fontSize: '16px', fontWeight: '600' }}>AR/VR Solutions</div>
                        </Flexbox>

                        <Flexbox height="50px" justifyContent='center'>
                            <img src={arrow} alt='arrow' style={arrows}></img>
                        </Flexbox>
                    </Flexbox>

                </Flexbox>

                <br></br><br></br>

                <Flexbox flexDirection='row' marginleft='9%' justifyContent='center'>

                    <Flexbox flexDirection="column" width='300px'>
                        <Flexbox height="60px" justifyContent='center'>
                            <img src={desktop} alt='phone' style={icons}></img>
                        </Flexbox>

                        <Flexbox height="50px" justifyContent='center'>
                            <div style={{ fontSize: '16px', fontWeight: '600' }}>AR/VR Design</div>
                        </Flexbox>

                        <Flexbox element="footer" height="50px" justifyContent='center'>
                            <img src={arrow} alt='arrow' style={arrows}></img>
                        </Flexbox>
                    </Flexbox>

                    <Flexbox flexDirection="column" width='300px'>
                        <Flexbox height="60px" justifyContent='center'>
                            <img src={Vector1} alt='phone' style={icons}></img>
                        </Flexbox>

                        <Flexbox height="50px" justifyContent='center'>
                            <div style={{ fontSize: '16px', fontWeight: '600' }}>3D Modellings</div>
                        </Flexbox>

                        <Flexbox element="footer" height="50px" justifyContent='center'>
                            <img src={arrow} alt='arrow' style={arrows}></img>
                        </Flexbox>
                    </Flexbox>


                </Flexbox>
            </div >
        );
    }
}
export default Part2;
/*
<Flexbox>
    <Flexbox flexDirection='row' minHeight='100vh'>
        <img src={phn} alt='phone' style={icons}></img>
    </Flexbox>
    <Flexbox>
        Mobile App Development
    </Flexbox>
    <Flexbox>
        <img src={arrow} alt='arrow' style={arrows}></img>
    </Flexbox>
</Flexbox>
*/