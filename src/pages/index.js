import React from "react"
import styled, { keyframes } from "styled-components"
import VideoPlayer from "../components/VideoPlayer"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Header"
import TextContainer from "../components/TextContainer"
import Footer from "../components/Footer"

import LogoBox from "../images/logos/otterchaos-box.png"
import SponsorBox from "../images/logos/sponsor-tiers.png"
import ForeWave from "../images/logos/WaveFront.png"
import MidWave from "../images/logos/WaveMid.png"
import BackWave from "../images/logos/WaveBack.png"
import ChevronDownIcon from "../images/icons/chevron-down.svg"

const IndexPage = () => (
  <Layout>
    {/* SEO */}
    <SEO title="Home" />

    {/* Header */}
    <Header />

    {/* Hero */}
    <Hero>
      <span>INTRODUCING OTTER CHAOS</span>
      <h1>Learning and striving for better STEM</h1>
      <p>Otter Chaos is a team for students, by students.</p>
      <p>
        We hope to inspire the community by getting more involved with FIRST
        Robotics.
      </p>
    </Hero>

    {/* Logo Art */}
    <Ocean>
      <WaveTertiary />
      <WaveSecondary />
      <WavePrimary />
      <SponsorPanel></SponsorPanel>
      <LogoSplash />
      <Fade />
    </Ocean>

    <DownChevron>
      <img src={ChevronDownIcon} alt="Down Chevron" />
    </DownChevron>

    {/* About */}
    <AboutSection>
      <TextContainer
        caption="About"
        title="Meet Otter Chaos"
        paragraph="We strive for learning and improving STEM through our students by building robots! We are comprised of students from Cascade High School."
      />
      <VideoContainer>
        <VideoPlayer
          src="https://www.youtube-nocookie.com/embed/LCvg0CeXCv4A"
          controls={true}
          width="100%"
          height="54vmin"
        />
      </VideoContainer>
    </AboutSection>

    {/* Footer */}
    <Footer />
  </Layout>
)

export default IndexPage

const EnterAnimation = keyframes`
    from {
        opacity: 0;
        transform: translateY(100%);
    }
    to {
        opacity: 1;
        transform: translateY(0px);
    }
`

const WaveHeroAnimation = keyframes`
    from {
        opacity: 0;
        transform: translateY(300vh);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`

const WaveScrollAnimation = keyframes`
    0% {
        background-position: 0;
    }
    100% {
        background-position: -100vw;
    }
`

const WaveSwellAnimation = keyframes`
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-2.5vmin);
    }
    100% {
        transform: translateY(0);
    }
`

const ChevronAnimation = keyframes`
    0%{
        transform: translateY(-20vh);
        opacity: 0;
    }
    20%{
        transform: translateY(0);
        opacity: 0.4;
    }
    30%{
        transform: translateY(0);
    }
    40%{
        transform: translateY(3vh);
    }
    50%{
        transform: translateY(0);
    }
    60%{
        transform: translateY(3vh);
        opacity: 0.4;
    }
    70%{
        transform: translateY(0);
    }
    100%{
        opacity: 0;
    }
`

const Hero = styled.div`
  margin: 5vmin auto;
  max-width: 83vmin;
  text-align: center;
  animation: ${EnterAnimation} 3s forwards cubic-bezier(0.2, 0.8, 0.2, 1);

  span {
    font-family: "Inter", sans-serif;
    font-weight: bold;
    color: var(--main-grey-dark);
    letter-spacing: 0.5em;
    animation: ${EnterAnimation} 0.8s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  h1 {
    margin: 10px 0 15px;
    animation: ${EnterAnimation} 1s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  p {
    max-width: 76vmin;
    margin: 0 auto;
    animation: ${EnterAnimation} 3s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  }
`
const Ocean = styled.div`
  height: 35vmin;
  width: 100%;
  margin: calc(20vh + 25vmin) 0 calc(45vmin + 20vh);
  background: var(--main-blue-dark);
  animation: ${WaveHeroAnimation} 4s cubic-bezier(0.2, 0.8, 0.2, 1) 1;
`

const SponsorPanel = styled.div`
  background: url(${SponsorBox}) no-repeat;
  background-position: center;
  background-size: contain;
  margin: 0 auto;
  position: relative;
  width: 100%;
  height: 22vmin;
  top: calc(-3 * 12vmin);
  max-width: 60%;

  @media (max-width: 1260px) {
    max-width: 95%;
  }
`

const LogoSplash = styled.div`
  background: url(${LogoBox}) no-repeat;
  background-position: center;
  background-size: contain;
  margin: 0 auto;
  position: relative;
  width: 100%;
  height: 12vmin;
  top: calc(-7 * 12vmin - 7vmin);
  max-width: 60%;

  @media (max-width: 1260px) {
    max-width: 95%;
  }
`

const WavePrimary = styled.div`
  background: url(${ForeWave}) repeat-x;
  background-size: 100% 100%;
  position: relative;
  width: 100%;
  height: 12vmin;
  top: calc(-3 * 11vmin);
  animation: ${WaveScrollAnimation} 7s cubic-bezier(0.36, 0.45, 0.63, 0.53)
      infinite,
    ${WaveSwellAnimation} 5s ease-in-out 2.2s infinite;
`

const WaveSecondary = styled.div`
  background: url(${MidWave}) repeat-x;
  background-size: 100% 100%;
  position: relative;
  width: 100%;
  height: 12vmin;
  top: calc(-2 * 11vmin - 2.5vmin);
  animation: ${WaveScrollAnimation} 11s cubic-bezier(0.36, 0.45, 0.63, 0.53)
      infinite,
    ${WaveSwellAnimation} 6s ease-in-out 1.1s infinite;
`

const WaveTertiary = styled.div`
  background: url(${BackWave}) repeat-x;
  background-size: 100% 100%;
  position: relative;
  width: 100%;
  top: calc(-1 * 11vmin - 5vmin);
  height: 12vmin;
  animation: ${WaveScrollAnimation} 14s cubic-bezier(0.36, 0.45, 0.63, 0.53)
      infinite,
    ${WaveSwellAnimation} 7s ease-in-out infinite;
`

const DownChevron = styled.div`
  width: 10%;
  max-width: 10vmin;
  opacity: 0;
  margin: 0 auto;
  position: absolute;
  bottom: 8vh;
  left: calc(85vw);
  animation: ${ChevronAnimation} 3.5s ease-in-out 4s 2;

  /*
    @media(max-width: 1060px){
        left: calc(-48vmin + 50vw);
    }*/
`

const Fade = styled.div`
  background: linear-gradient(
    var(--main-blue-dark),
    #287eff,
    #62a1ff 45%,
    var(--main-white)
  );
  margin: -35.2vmin 0 11vmin;
  width: 100%;
  height: 60vmin;
`

const AboutSection = styled.div`
  opacity: 0;
  animation: ${EnterAnimation} 3s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  animation-delay: 1s;
`

const VideoContainer = styled.div`
  margin: 0 25%;

  @media (max-width: 1300px) {
    margin: 0 15%;
  }
`
