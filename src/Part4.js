import React from "react";
import team from './team.svg';
import Flexbox from "flexbox-react";


class Part4 extends React.Component {
    render() {
        const teamimg = {
            width: '55rem',
            height: '37rem',
            marginLeft: '6%'
        }

        const heading = {
            fontSize: '2rem',
            fontWeight: '500',
            marginRight: '15%',
            textAlign: 'left'
        }

        const text = {
            lineHeight: '1.7rem',
            marginRight: '15%',
            textAlign: 'left'

        }
        const btn = {
            border: 'transparent',
            background: '#E87D0E',
            color: 'white',
            textAlign: 'left',
            paddingRight: '15px',
            paddingLeft: '15px',
            paddingTop: '15px',
            paddingBottom: '15px',
            fontSize: '16px'
        }

        const stayinloop = {
            backgroundColor: '#1b1b1b',
            marginLeft: '9%',
            marginRight: '9%',
            borderRadius: '1rem'
        }

        const text1 = {

            fontSize: '1.5rem',
            textAlign: 'left',
            fontWeight: '500',
            color: '#ffffff',
            marginLeft: '9%',
            lineHeight: '0.5rem'
        }
        const text2 = {
            color: '#ffffff',
            textAlign: 'left',
            marginLeft: '9%',
        }
        const inputbox = {
            borderRadius: '0.5rem',
            height: '3rem',
            width: '21rem',
            border: 'none',
            position: 'absolute'
        }

        const btn2 = {
            position: 'relative',
            height: '2rem',
            width: '5rem',
            marginLeft: '15rem',
            marginTop: '0.5rem',
            border: 'none',
            borderRadius: '0.5rem',
            backgroundColor: '#E87D0E',
            color: '#ffffff'
        }
        return (
            <div>

                <Flexbox flexDirection="row">
                    <Flexbox element="header" height="15rem">
                        <img src={team} alt='team' style={teamimg}></img>
                    </Flexbox>

                    <Flexbox >
                        <div style={{ textAlign: 'left' }}>
                            <br></br><br></br><br></br>
                            <p style={heading}>Lorem Ipsum is simply dummy text dummy text </p>
                            <p style={text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                            <br></br>
                            <p style={text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            <br></br>
                            <button style={btn}>Read More</button>
                        </div>
                    </Flexbox>
                </Flexbox>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <div>
                    <div style={{ marginLeft: '9%' }}><p style={heading}>Lorem Ipsum</p></div>
                    <div style={{ marginLeft: '9%' }}><p style={text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p></div>
                    <br></br><br></br><br></br>
                    <div style={stayinloop}>
                        <Flexbox flexDirection="row">
                            <Flexbox flexDirection="column">
                                <p style={text1}> Stay in loop </p>
                                <p style={text2}>Subscribe to receive the latest news and updates about TDA. We promise not to spam you!</p>
                            </Flexbox>
                            <Flexbox paddingTop="2.5rem" paddingLeft='9rem'>
                                <input type={text} placeholder='    Enter email address' style={inputbox}></input>
                                <button style={btn2}> Continue</button>
                            </Flexbox>
                        </Flexbox>
                    </div>
                </div>

            </div>
        );
    }
}
export default Part4;