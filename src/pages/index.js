import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"

export default function Home() {
  return (
    <div>
      <p>Hello world!</p>
      <p><Link to="/about/">About</Link></p>
      <Footer copyrightYear="2020" />
    </div>
  )
}
