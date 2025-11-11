import React from "react"
import styled, { keyframes } from "styled-components"
import VideoPlayer from "../components/VideoPlayer"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Header"
import TextContainer from "../components/TextContainer"
import Footer from "../components/Footer"

// Robot Images
import Pneutron from "../images/graphics/pneutron.png"
import Pneutron2 from "../images/graphics/pneutron2.png"
import Dugg from "../images/graphics/dugg.png"
import Dugg2 from "../images/graphics/dugg2.png"
import Riptide from "../images/graphics/riptide.png"
import Riptide2 from "../images/graphics/riptide2.png"

const RobotsPage = () => (
  <Layout>
    {/* SEO */}
    <SEO title="Robots" />

    {/* Header */}
    <Header />

    {/* Title */}
    <Hero>
      <h1>Robots</h1>
      <p>
        Check out what we're up to on
        <a href="https://www.youtube.com/@OtterChaos/featured"> youtube</a>, and see
        our robot code on
        <a href="https://github.com/4512OtterChaos"> github</a>.
      </p>
    </Hero>

    {/* Robot images with description */}
    <TitledRobot>
      <TextContainer
        caption="Infinite Recharge - 2020/2021"
        title="Riptide"
        paragraph="This robot was for the 2020/2021 FIRST Robotics Competition. The game involves two alliances of three
                teams shooting foam dodgeballs into high/low goals for points before attempting to climb and balance a swinging bar."
      />

      <RobotImages>
        <img src={Riptide} alt="Robot Front View" />
        <VideoContainer>
          <VideoPlayer
            src="https://youtu.be/mPWVxLnCw0A"
            controls={true}
            width="100%"
            height="100%"
          />
        </VideoContainer>
        <img src={Riptide2} alt="Robot Back View" />
      </RobotImages>
    </TitledRobot>

    <TitledRobot>
      <TextContainer
        caption="Destination Deep Space - 2019"
        title="Pneutron"
        paragraph="This robot was for the 2019 FIRST Robotics Competition. The game involves two alliances of three teams each competing to place hatch covers and rubber 
                balls or “cargo” on rockets and cargo ships before returning to their hab platform to climb at the end of the match."
      />

      <RobotImages>
        <img src={Pneutron} alt="Robot Front View" />
        <img src={Pneutron2} alt="Robot Back View" />
      </RobotImages>
    </TitledRobot>

    <TitledRobot>
      <TextContainer
        caption="Power Up - 2018"
        title="DUGG"
        paragraph="This robot was for the 2018 FIRST Robotics Competition. The game involves two alliances of three
                teams each competing to place power cubes on large balancing scales to tip the scale to gain ownership or trade them in for powerups in order to win."
      />

      <RobotImages>
        <img src={Dugg} alt="Robot Front View" />
        <img src={Dugg2} alt="Robot Back View" />
      </RobotImages>
    </TitledRobot>

    {/* Footer */}
    <Footer />
  </Layout>
)

export default RobotsPage

const EnterAnimation = keyframes`
    from {
        opacity: 0;
        transform: translateY(3vh);
    }

    to {
        opacity: 1;
        transform: translateY(0px);
    }
`

const Hero = styled.div`
  margin: 6vh auto;
  max-width: 50%;
  text-align: center;
  opacity: 0;
  animation: ${EnterAnimation} 3s forwards cubic-bezier(0.2, 0.8, 0.2, 1);

  h1 {
    margin: 1vh auto;
    animation: ${EnterAnimation} 1s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  p {
    max-width: 80%;
    margin: 0 auto;
    animation: ${EnterAnimation} 3s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  }
`

const TitledRobot = styled.div`
  opacity: 0;
  animation: ${EnterAnimation} 3s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  animation-delay: 0.75s;
`

const RobotImages = styled.div`
  margin: 0 auto 2vh;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 2em;

  img {
    flex: 1 1 0;
    width: 100%;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    max-width: 85%;
  }
`

const VideoContainer = styled.div`
  flex: 1 1 0;
  min-width: 0;
`
