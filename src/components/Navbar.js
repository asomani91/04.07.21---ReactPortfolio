import React, { useState } from 'react'
import { Link } from 'react-router-dom';
export default function Navbar() {



    return (
        <header>
            <Link className="header-link" to={'/'}><h1>Ankit Somani</h1></Link>
            <h2>My Professional Portfolio</h2>
        </header>
    )
}
