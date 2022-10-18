import React from 'react';

import Part1 from '../Part1';
import Part2 from '../Part2';
import Part3 from '../Part3';
import Part4 from '../Part4';
import { BrowserRouter as Router } from 'react-router-dom';


function Home() {
    return (
        <div>

            <Part1 />
            <Part2 />
            <Part3 />
            <Part4 />
        </div>
    );
}

export default Home;