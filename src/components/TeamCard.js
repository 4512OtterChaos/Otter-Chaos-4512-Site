import React from "react"
import styled from "styled-components"
import Layout from "./layout"

const Header = ({ name, title }) => {
  return (
    <Layout>
      <Card>
        <Content>
          <h3>{name}</h3>
          <p>{title}</p>
        </Content>
      </Card>
    </Layout>
  )
}

export default Header

const Card = styled.div`
  background: var(--main-grey-light);
  border-radius: 8px;
  margin: 0.5em 0.5em;
`

const Content = styled.div`
  padding: 5% 10%;

  h3 {
    margin: 2% auto;
  }

  p {
    font-size: 1.75vmin;
    margin: 2% auto;
  }
`
