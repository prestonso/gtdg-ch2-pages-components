import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <p>Hello world!</p>
      <p><Link to="/about/">About</Link></p>
      <Footer copyrightYear="2020" />
    </Layout>
  )
}
