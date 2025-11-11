import React from "react"
import styled, { keyframes } from "styled-components"
import ReactPlayer from "react-player"
import { Tooltip } from "react-tooltip"
import "react-tooltip/dist/react-tooltip.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Header"
import Footer from "../components/Footer"
import TextContainer from "../components/TextContainer"
import BenefitCard from "../components/BenefitCard"

// Benefit Icons
import Shirt from "../images/icons/shirt.svg"
import Robot from "../images/icons/robot.svg"
import Money from "../images/icons/money.svg"
import Building from "../images/icons/building.svg"
import Website from "../images/icons/website.svg"
import Social from "../images/icons/social.svg"
import Resources from "../images/icons/resources.svg"
import Mentors from "../images/icons/mentors.svg"

const SponsorPage = () => (
  <Layout>
    {/* SEO */}
    <SEO title="Sponsor" />

    {/* Header */}
    <Header />

    {/* Hero */}
    <Hero>
      <h1>Sponsor</h1>
      <p>Interested in sponsoring? Learn more here!</p>
      <Button
        href="https://sites.google.com/site/bruincommunityparents/donate"
        target="_blank"
        data-tooltip-id="sponsor-cta"
        data-tooltip-content='Please specify "For CHS Robotics Team"'
        onClick={e => window.alert('Please specify "For CHS Robotics Team"')}
      >
        Become a sponsor
      </Button>
      <Tooltip id="sponsor-cta" place="bottom" />
    </Hero>

    {/* Introduction Video */}
    <TitledVideo>
      <TextContainer
        caption="Introduction Video"
        title="Building a brighter future"
        paragraph='Combining the excitement of sport with the rigors of science and technology. We call FIRST Robotics Competition the ultimate Sport for the Mind.
                High-school student participants call it “the hardest fun you’ll ever have."'
      />

      <VideoContainer>
        <ReactPlayer
          src="https://www.youtube-nocookie.com/embed/6R0nl--VB6g"
          controls={true}
          width="100%"
          height="54vmin"
        />
      </VideoContainer>
    </TitledVideo>

    {/* Benefits Cards */}
    <TitledCards>
      <TextContainer
        caption="Perks"
        title="Benefits of sponsoring"
        paragraph="We want to support our sponsors as much as they support us-- here are some ways we can return the favor!"
      />

      <CardContainer>
        <BenefitCard
          img={Shirt}
          alt="Apparel"
          title="Branding Promotion"
          text="Get your brand logo displayed on our robot and banners."
        />
        <BenefitCard
          img={Robot}
          alt="Robot"
          title="Robot Demonstrations"
          text="Invite us to showcase and drive our robots at your company."
        />
        <BenefitCard
          img={Money}
          alt="Money"
          title="Tax Deductible"
          text="As a 501(c)(3) organization, FirstWA allows sponsorships to be tax deductible."
        />
        <BenefitCard
          img={Building}
          alt="Building"
          title="Helping the community"
          text="Create the community you aspire to build."
        />
        <BenefitCard
          img={Website}
          alt="Website"
          title="Website Promotion"
          text="Get your brand logo promoted on our website home page."
        />
        <BenefitCard
          img={Social}
          alt="Instagram"
          title="Social Media Promotion"
          text="Get your brand logo promoted through our social media posts."
        />
      </CardContainer>
    </TitledCards>

    {/* What we need */}
    <TitledCards>
      <TextContainer
        caption="Needs"
        title="What we are looking for"
        paragraph="We need many resources for our upcoming season to be possible-- here are some of the major needs."
      />

      <CardContainer>
        <BenefitCard
          img={Money}
          alt="Money"
          title="Money"
          text="Our major need is money to pay for parts, travel, apparel, and much more to maintain the team."
        />
        <BenefitCard
          img={Mentors}
          alt="Mentors"
          title="Mentors"
          text="Having knowledgable people from industry to help our students is a huge asset."
        />
        <BenefitCard
          img={Resources}
          alt="Resources"
          title="Resources"
          text="We also look for spare parts, tools, and other resources in order to enable our students to build."
        />
      </CardContainer>
    </TitledCards>

    {/* Footer */}
    <Footer />
  </Layout>
)

export default SponsorPage

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
  margin: 10vmin auto;
  max-width: 83vmin;
  text-align: center;
  animation: ${EnterAnimation} 3s forwards cubic-bezier(0.2, 0.8, 0.2, 1);

  h1 {
    margin-top: 10px;
    margin-bottom: 10px;
    animation: ${EnterAnimation} 1s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  p {
    max-width: 90%;
    margin: 0 auto calc(10px + 2.2vmin);
    animation: ${EnterAnimation} 3s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  }
`

const VideoContainer = styled.div`
  margin: 0 25%;

  @media (max-width: 1400px) {
    margin: 0 15%;
  }
`

const CardContainer = styled.div`
  margin: 2vh auto;
  max-width: 50%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1400px) {
    max-width: 70%;
    grid-template-columns: repeat(2, 1fr);
  }
`

const TitledVideo = styled.div`
  opacity: 0;
  animation: ${EnterAnimation} 3s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  animation-delay: 0.5s;
`
const TitledCards = styled.div`
  opacity: 0;
  animation: ${EnterAnimation} 3s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  animation-delay: 0.5s;
`

const Button = styled.a`
  border-radius: 4px;
  font-size: 1em;
  background: var(--main-blue-dark);
  font-weight: 700;
  padding: calc(6px + 0.7vmin) calc(8px + 0.87vmin);
  color: white;
`
