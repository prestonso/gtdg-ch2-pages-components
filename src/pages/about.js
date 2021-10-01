import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Layout from "../components/layout"

export default function About() {
  return (
    <Layout>
      <h1>About us</h1>
      <p>Welcome to our about page! Here is some info about us.</p>
      <p><Link to="/">Home</Link></p>
      <Footer copyrightYear="2020" />
    </Layout>
  )
}
