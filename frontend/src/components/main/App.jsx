import '../main/App.css'

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import Logo from '../teamplate/logo/logo'
import Nav from '../teamplate/nav/nav'
import Main from '../teamplate/main/main'
import Footer from '../teamplate/footer/footer'

export default props =>
    <div className="app">
        <Logo />
        <Nav />
        <Main icon="home" title="Inicio" subtitle="legend home"/>
        <Footer />
    </div>