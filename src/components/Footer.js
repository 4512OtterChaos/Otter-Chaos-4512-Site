import React from "react"
import styled, { keyframes } from "styled-components"
import Layout from "./layout"

// Social Icons
import Instagram from "../images/icons/instagram.svg"
import Youtube from "../images/icons/youtube.svg"
import Email from "../images/icons/email.svg"
import Github from "../images/icons/github.svg"

const Header = () => {
  return (
    <Layout>
      <Footer>
        <a
          href="https://www.instagram.com/otterchaos4512/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>
            <img src={Instagram} alt="Instagram" />
          </Button>
        </a>
        <a
          href="https://www.youtube.com/user/Bearbots"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>
            <img src={Youtube} alt="Youtube" />
          </Button>
        </a>
        <a
          href="https://github.com/4512OtterChaos/Otter-Chaos-4512-Site"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>
            <img src={Github} alt="Github" />
          </Button>
        </a>
        <a
          href="mailto:otterchaos4512@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>
            <img src={Email} alt="Email Envelope" />
          </Button>
        </a>
      </Footer>
    </Layout>
  )
}

export default Header

const EnterAnimation = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`

const Footer = styled.div`
  opacity: 0;
  margin: 21.6vmin auto 8vmin;
  display: flex;
  max-width: calc(4 * calc(24px + 2.6vmin + 3vw));
  animation: ${EnterAnimation} 3s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  animation-delay: 0.25s;
`

const Button = styled.div`
  width: calc(96px + 10.4vmin);
  height: calc(96px + 10.4vmin);
  background: var(--main-grey-light);
  border-radius: 100%;
  margin: 0 1.5vw;

  img {
    display: block;
    margin: 0 auto;
    width: 50%;
    height: 95%;
  }
`
