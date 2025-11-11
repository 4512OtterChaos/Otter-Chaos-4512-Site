import React from "react"
import styled from "styled-components"
import Layout from "./layout"

const TextContainer = ({ caption, title, paragraph }) => {
  return (
    <Layout>
      <Container>
        <span>{caption}</span>
        <h2>{title}</h2>
        <p>{paragraph}</p>
      </Container>
    </Layout>
  )
}

export default TextContainer

const Container = styled.div`
  margin: calc(5vmin + 5vh) auto calc(1vh + 2vmin);
  max-width: 50%;

  span {
    font-family: "San Francisco", sans-serif;
    color: var(--main-blue-dark);
    font-weight: 700;
  }

  h2 {
    margin: 0.6vh 0 2vh 0;
  }

  p {
    margin-top: -1.4vh;
  }

  @media (max-width: 1400px) {
    max-width: 70%;
  }
`
