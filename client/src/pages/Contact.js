import React from "react"
import Hero from "../components/Hero";
import Banner from "../components/Banner"
import { Link } from "react-router-dom"

export default function Contact() {
    return <Hero>
        <Banner title="Rajnil Prasad" subtitle="Ph: 916-694-3310">
            <Link to='./' className="btn-primary">
            Email: rajnilprasad.rp@gmail.com
            </Link>
        </Banner>
    </Hero> 
}


