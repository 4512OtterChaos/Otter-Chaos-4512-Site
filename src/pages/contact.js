import React from "react"
import styled, { keyframes } from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Header"
import Footer from "../components/Footer"

const ContactPage = () => (
  <Layout>
    {/* SEO */}
    <SEO title="Contact" />

    {/* Header */}
    <Header />

    {/* Hero */}
    <Hero>
      <h1>Contact</h1>
      <p>
        Have any questions, or just want to talk? Send us an{" "}
        <a href="mailto:npalachuk@everettsd.org">email!</a>
      </p>
    </Hero>

    {/* Footer */}
    <Footer />
  </Layout>
)

export default ContactPage

const HeroAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
`

const Hero = styled.div`
  margin: 10vmin auto;
  max-width: 768px;
  text-align: center;
  animation: ${HeroAnimation} 3s forwards cubic-bezier(0.2, 0.8, 0.2, 1);

  h1 {
    margin: 1.1vmin auto;
    animation: ${HeroAnimation} 1s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  p {
    max-width: 700px;
    margin: 0 auto;
    animation: ${HeroAnimation} 3s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  }
`
