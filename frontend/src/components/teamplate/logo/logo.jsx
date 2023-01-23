import './logo.css';
import React from 'react';

import Logo from '../../../assets/img/logo.png'

export default props=>
    <aside className="Logo">
        <a href="/" className="Logo">
            <img src="{Logo}" alt="iconLogo" />
        </a>
    </aside>