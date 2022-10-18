import React from "react"

class NavigationBar extends React.Component {
    render() {
        const nav = {
            backgroundColor: '#E47500',
            color: '#ffffff',


        }
        const listItems = {
            color: '#ffffff',
            textDecoration: 'none',
            textAlign: 'right',
            fontSize: '12px',
            fontWeight: '600'

        }

        const ul = {
            listStyle: 'none',
            display: 'flex',
            gap: '6rem',
            padding: '1rem',
            alignItems: 'right',
            marginLeft: '50%'

        }

        const btn = {
            color: '#E47500',
            backgroundColor: '#ffffff',
            borderRadius: '0.5rem',
            padding: '0.6rem',
            textDecoration: 'none',
            textAlign: 'right',
            fontSize: '12px',
            fontWeight: '600'
        }
        return (
            <nav style={nav}>
                <ul style={ul}>
                    <li><a style={listItems} href='/'> Home </a></li>
                    <li><a style={listItems} href='/pages/AboutUs'> About Us </a></li>
                    <li><a style={listItems} href='/pages/Services'> Services </a></li>
                    <li><a style={listItems} href='/pages/News'> News </a></li>
                    <li><a style={btn} href='/pages/ContactUs'> Contact Us </a></li>
                </ul>
            </nav>
        )
    }
}

export default NavigationBar