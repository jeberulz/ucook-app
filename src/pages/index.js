import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
 
  <Layout>
      
      <SEO title="Home" keywords={[`John Iseghohi`, `Product Designer`, `Strategistist`]} />
      <h1>John Iseghohi Portfolio</h1>
      <p>Experimenting with ReactJS</p>
  </ Layout>
)

export default IndexPage
