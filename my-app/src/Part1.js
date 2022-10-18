import React from 'react';
import arvr from './AR_VR.svg';
import Flexbox from "flexbox-react";
import bg from './bg.svg';

class Part1 extends React.Component {
    render() {

        const btn = {
            height: '2rem',
            width: '10rem',
            border: 'transparent',
            borderRadius: '0.5rem',
            background: '#E87D0E',
            color: 'white',
            paddingRight: '0.5rem',
            paddingLeft: '0.5rem',
            paddingTop: '0.5rem',
            paddingBottom: '0.5rem',
            fontSize: '14px',
            marginLeft: '9%',
            textAlign: 'center',

        }
        const heading = {
            color: '#E87D0E',
            fontWeight: '700',
            fontSize: '16px',
            marginLeft: '9%',
            textAlign: 'left'
        }

        const text1 = {
            fontSize: '16px',
            marginLeft: '9%',
            textAlign: 'left'
        }
        const part1 = {
            marginLeft: '9%',
            width: '675px',
            height: ' 590px'
        }
        const p = {
            marginLeft: '9%',
            textAlign: 'left',
            fontSize: '50px',
            fontWeight: '700'
        }
        const image = {
            zIndex: '-1',
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: '2px',
            top: '250px',

        }

        return (
            <div>
                <div>
                    <img style={image} src={bg}></img>
                </div>
                <br></br><br></br><br></br>
                <Flexbox flexDirection='row'>

                    <Flexbox flexDirection='column' width='473.69px' marginLeft='135px'>
                        <p style={heading}>Digital Marketing</p>
                        <p style={p}>Work that we produce for our clients</p>
                        <p style={text1}>Lorem Ipsum is simply dummy text of the printing and<br></br>typesetting industry. Lorem Ipsum has been the industry's <br></br>standard </p>
                        <br></br>
                        <button style={btn}>Get more Details</button>
                    </Flexbox>
                    <Flexbox>
                        <img src={arvr} style={part1} alt='arvr'></img>
                    </Flexbox>
                </Flexbox>


            </div >
        );

    }
}
/*
 */
export default Part1;
