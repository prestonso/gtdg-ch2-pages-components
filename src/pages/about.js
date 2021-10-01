import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"

export default function About() {
  return (
    <div>
      <h1>About us</h1>
      <p>Welcome to our about page! Here is some info about us.</p>
      <p><Link to="/">Home</Link></p>
      <Footer copyrightYear="2020" />
    </div>
  )
}
