import React from 'react'
import profileImg from '../images/Ankit Somani.jpg'
import { Link } from 'react-router-dom'
export default function Intro() {
    return (
        <section id="my-bio">
            <h2>My Bio</h2>
            <br></br>
            <p>Welcome! My name is Ankit Somani and I'm currently enrolled in the Rutgers Coding Bootcamp.</p>
            <br></br>
            <p>In the beginnings of my professional career, I held the position of Production Engineer & Associate
            Producer at JSM Music, a commercial music company in New York City. I had the pleasure of working with
            an interactive team to provide quality content to high-end clients in the advertising industry. I then
            continued my growth in the field as a Music Operations Coordinator with TouchTunes, a product &
            app-based company that corroborates with performing rights organizations and societies for earnings,
            licenses & credits for content use.
        </p>
            <br />
            <Link className="body-link" to={'/about'}>Read more..</Link>


        </section>
    )
}
