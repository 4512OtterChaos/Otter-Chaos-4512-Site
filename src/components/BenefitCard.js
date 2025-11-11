import React from "react"
import styled from "styled-components"
import Layout from "./layout"

const Header = ({ title, text, img, alt }) => {
  return (
    <Layout>
      <Card>
        <Content>
          <img src={img} alt={alt} />
          <h3>{title}</h3>
          <p>{text}</p>
        </Content>
      </Card>
    </Layout>
  )
}

export default Header

const Card = styled.div`
  background: var(--main-grey-light);
  height: 19.5vmin;
  width: 35.75vmin;
  border-radius: 8px;
  margin: 0.5em 0.5em;

  @media (max-width: 1124px) {
    width: 90%;
    margin: 1.3vmin auto;
  }

  img {
    position: relative;
    margin-top: -10%;

    @media (max-width: 1124px) {
      height: 3vmin;
    }
  }
`

const Content = styled.div`
  padding: 3.57vmin 2.17vmin;

  h3 {
    margin: calc(4px + 0.5vmin) 0 0;
  }

  p {
    font-size: 1.75vmin;
    padding: 0;
    margin: 0 0;
    line-height: 2.5vmin;
  }
`
