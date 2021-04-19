import React from 'react'
import profileImg from '../images/Ankit Somani.jpg'

export default function About() {
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
            licenses & credits for content use.</p>
            <br></br>
            <p>I consider myself a perfectionist who is ambitious to gain knowledge that will result in a great
            performance. My determination has allowed me to work with many different filmmakers, musicians, creative
            and business personnel; this has always been vital in my constant growth. I believe I would be a great
            asset to your team with my set of skills, precision, and professionalism.</p>
            <br></br>
            <p>I hope to connect with you hear you in the near future. Thank you for your time!</p>
            <br></br>
            <p>Sincerely, </p>
            <p>Ankit Somani</p>
            <br />
            <div className="text-center">
                <img src={profileImg} width="100px" height="400px" alt="Ankit Somani" />
            </div>

        </section>
    )
}
