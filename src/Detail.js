import React from 'react';
import Navbar from "./Navbar.js";
import Frame26 from './Content.js';

export const Details = ({
    ...props
}) => {
    return (
        <div style={{ backgroundColor: 'rgba(229, 229, 229, 1)' }}>
            <Navbar></Navbar>
            <Frame26></Frame26>
        </div>
    )
}
export default Details;