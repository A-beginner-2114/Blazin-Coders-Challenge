import React from 'react';
import arrow from './Vector1.svg';
import pic1 from './Rectangle 15.svg';
import pic2 from './Rectangle 16.svg';
import pic3 from './Rectangle 17.svg';
import pic4 from './Rectangle 18.svg';
import pic5 from './Rectangle 19.svg';
import pic6 from './Rectangle 20.svg';
import Flexbox from 'flexbox-react';

class Part3 extends React.Component {
    render() {
        const ScrollBar = {
            display: 'flex',
            overflow: 'scroll',
            backgroundColor: '#e5e5e5',
        }
        const text1 = {
            textAlign: 'left',
            fontWeight: '700',
            marginLeft: '9%'
        }

        const text2 = {
            textAlign: 'left',
            fontWeight: '200',
            marginLeft: '9%',
            fontSize: '1rem',
            lineheight: '0.9rem'

        }
        const card = {
            width: '15rem',
            height: '15rem',
            backgroundColor: '#ffffff',
            borderRadius: '1rem',
            textAlign: 'left',
            marginLeft: '3rem',

            marginBottom: '3rem',
            paddingLeft: '1.7rem',
            paddingRight: '1.7rem',
            paddingTop: '1.7rem',
            paddingBottom: '1.7rem'
        }

        const readmore = {
            textAlign: 'right',
            color: '#E87D0E',
            fontSize: '0.7rem',
            fontWeight: '600',

        }

        const arrows = {
            width: '0.7rem',
            height: '0.7rem',
            marginLeft: '14rem'
        }
        const pics = {
            paddingRight: '1rem',
            paddingLeft: '0.5rem',
            paddingTop: '0.5rem',
        }

        return (
            <div>
                <div style={{ backgroundColor: '#e5e5e5' }}>
                    <br></br><br></br>
                    <h2 style={text1}>Lorem Ipsum</h2>
                    <br></br>
                    <div style={text2}>Lorem Ipsum is simply dummy text of the printing and typesetting</div> <div style={text2}>industry. </div>
                    <br></br><br></br>
                </div>
                <div style={ScrollBar}>
                    <div style={card}>

                        <div><span style={{
                            fontSize: '0.5rem',
                            borderRadius: '0.5rem',
                            backgroundColor: "#c5efff",
                            color: "#3bcaff",
                            paddingLeft: '0.5rem',
                            paddingRight: '0.5rem',
                            paddingTop: '0.2rem',
                            paddingBottom: '0.2rem'
                        }}>Lorem Ipsum</span></div>
                        <br></br>
                        <h3>Lorem Ipsum</h3>
                        <div style={{ justifyContent: 'center', fontSize: '0.7rem' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
                        <br></br>
                        <div style={readmore}>Read More</div>
                        <div><img src={arrow} alt='arrow' style={arrows}></img></div>

                    </div>
                    <div style={card}>

                        <div><span style={{
                            fontSize: '0.5rem',
                            borderRadius: '0.5rem',
                            backgroundColor: "#ffdbdb",
                            color: "#DC0000",
                            paddingLeft: '0.5rem',
                            paddingRight: '0.5rem',
                            paddingTop: '0.2rem',
                            paddingBottom: '0.2rem'
                        }}>Lorem Ipsum</span></div>
                        <br></br>
                        <h3>Lorem Ipsum</h3>
                        <div style={{ justifyContent: 'center', fontSize: '0.7rem' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
                        <br></br>
                        <div style={readmore}>Read More</div>
                        <div><img src={arrow} alt='arrow' style={arrows}></img></div>

                    </div>

                    <div style={card}>

                        <div><span style={{
                            fontSize: '0.5rem',
                            borderRadius: '0.5rem',
                            backgroundColor: "#e0ffd3",
                            color: "#8ecf72",
                            paddingLeft: '0.5rem',
                            paddingRight: '0.5rem',
                            paddingTop: '0.2rem',
                            paddingBottom: '0.2rem'
                        }}>Lorem Ipsum</span></div>
                        <br></br>
                        <h3>Lorem Ipsum</h3>
                        <div style={{ justifyContent: 'center', fontSize: '0.7rem' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
                        <br></br>
                        <div style={readmore}>Read More</div>
                        <div><img src={arrow} alt='arrow' style={arrows}></img></div>

                    </div>

                    <div style={card}>

                        <div><span style={{
                            fontSize: '0.5rem',
                            borderRadius: '0.5rem',
                            backgroundColor: "#ffe7f5",
                            color: "#c90076",
                            paddingLeft: '0.5rem',
                            paddingRight: '0.5rem',
                            paddingTop: '0.2rem',
                            paddingBottom: '0.2rem'
                        }}>Lorem Ipsum</span></div>
                        <br></br>
                        <h3>Lorem Ipsum</h3>
                        <div style={{ justifyContent: 'center', fontSize: '0.7rem' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
                        <br></br>
                        <div style={readmore}>Read More</div>
                        <div><img src={arrow} alt='arrow' style={arrows}></img></div>

                    </div>

                    <div style={card}>

                        <div><span style={{
                            fontSize: '0.5rem',
                            borderRadius: '0.5rem',
                            backgroundColor: "#ffddb9",
                            color: "#783f04",
                            paddingLeft: '0.5rem',
                            paddingRight: '0.5rem',
                            paddingTop: '0.2rem',
                            paddingBottom: '0.2rem'
                        }}>Lorem Ipsum</span></div>
                        <br></br>
                        <h3>Lorem Ipsum</h3>
                        <div style={{ justifyContent: 'center', fontSize: '0.7rem' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
                        <br></br>
                        <div style={readmore}>Read More</div>
                        <div><img src={arrow} alt='arrow' style={arrows}></img></div>

                    </div>

                    <div style={card}>

                        <div><span style={{
                            fontSize: '0.5rem',
                            borderRadius: '0.5rem',
                            backgroundColor: "#e7cdff",
                            color: "#6a329f",
                            paddingLeft: '0.5rem',
                            paddingRight: '0.5rem',
                            paddingTop: '0.2rem',
                            paddingBottom: '0.2rem'
                        }}>Lorem Ipsum</span></div>
                        <br></br>
                        <h3>Lorem Ipsum</h3>
                        <div style={{ justifyContent: 'center', fontSize: '0.7rem' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
                        <br></br>
                        <div style={readmore}>Read More</div>
                        <div><img src={arrow} alt='arrow' style={arrows}></img></div>

                    </div>
                </div >
                <br></br><br></br>
                <div>
                    <h2>Our Recent Projects</h2>
                    <div><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p></div>
                </div>
                <div >
                    <Flexbox flexDirection='column' justifyContent='center' >
                        <Flexbox flexDirection="row" justifyContent='center' >
                            <Flexbox element="header" height="15rem">
                                <img src={pic1} alt='phone' style={pics}></img>
                            </Flexbox>

                            <Flexbox height="15rem" >
                                <img src={pic2} alt='phone' style={pics}></img>
                            </Flexbox>

                            <Flexbox height="15rem">
                                <img src={pic3} alt='arrow' style={pics}></img>
                            </Flexbox>
                        </Flexbox>
                        <br></br>
                        <Flexbox flexDirection="row" justifyContent='center' >
                            <Flexbox element="header" height="15rem">
                                <img src={pic4} alt='phone' style={pics}></img>
                            </Flexbox>

                            <Flexbox height="15rem" >
                                <img src={pic6} alt='phone' style={pics}></img>
                            </Flexbox>

                            <Flexbox height="15rem">
                                <img src={pic5} alt='arrow' style={pics}></img>
                            </Flexbox>
                        </Flexbox>
                    </Flexbox>
                </div>
            </div >
        );
    }
}


export default Part3;