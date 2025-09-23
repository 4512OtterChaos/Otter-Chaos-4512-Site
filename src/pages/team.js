import React from "react"
import ReactTooltip from "react-tooltip"
import styled, { keyframes } from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Header"
import TextContainer from "../components/TextContainer"
import Card from "../components/TeamCard"
import Footer from "../components/Footer"

const TeamPage = () => (
	<Layout>
	{/* SEO */}
	<SEO title="Team" />
	
	{/* Header */}
	<Header />
	
	{/* Hero */}
	<TitleSpan>
		<span>
			<h1>Team</h1>
			<p>Meet the crew!</p>
		</span>
		<Links>
			<h2>Links</h2>
			<Button
				href="https://forms.gle/6mjonUx4DkYvzNPz6"
				target="_blank"
				data-tip="A survey that will help students find which sub-team they are interested in"
			>
				Interest Survey
			</Button>

			<br/>
			<br/>
			<br/>
			<Button
				href="https://forms.gle/mJcZsJMmQUjECLyV9"
				target="_blank"
				data-tip='For CHS students interested in joining'
			>
				Student Registration Form
			</Button>
			<ReactTooltip place="top" type="warning" effect="solid" />
		</Links>
	</TitleSpan>
	
	{/* Coaches */}
	<TitledCard>
		<TextContainer
			title="Coaches"
			paragraph="Our coaches allow us to do our job as students and members of the robotics club."
		/>

		<CardContainer>
			<Card name="Neil Palachuk" title="Head Coach" />
			<Card name="Stephen Knoefler" title="Assistant Coach" />
		</CardContainer>
	</TitledCard>
	
	{/* Mentors */}
	<TitledCard>
		<TextContainer
			title="Mentors"
			paragraph="Our mentors provide knowledge from the industry and help guide student learning."
		/>

		<CardContainer>
			<Card name="Nolan Brown" title="Programming" />
			<Card name="Lissette Wilhelm" />
			<Card name="David Vanderveen" /> 
		</CardContainer>
	</TitledCard>
	
	{/* Footer */}
	<Footer />
	</Layout>
)

export default TeamPage

const EnterAnimation = keyframes`
	from {
		opacity: 0;
		transform: translateY(20px);
	}

	to {
		opacity: 1;
		transform: translateY(0px);
	}
`
const TitleSpan = styled.div`
	margin: 10vmin 25% 10vmin 25%;
	text-align: center;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	animation: ${EnterAnimation} 3s forwards cubic-bezier(0.2, 0.8, 0.2, 1);

	h1 {
		margin: 0.25em auto;
		animation: ${EnterAnimation} 1s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
	}

	p {
		max-width: 700px;
		margin: 0 auto;
		animation: ${EnterAnimation} 3s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
	}

	@media (max-width: 1300px) {
		margin: 8vmin 15% 8vmin 20%;
		grid-template-columns: repeat(3, 1fr);
	}
`

const CardContainer = styled.div`
	margin: 1vh auto 2vh;
	max-width: 50%;
	display: grid;
	grid-template-columns: repeat(2, 1fr);

	@media (max-width: 1400px) {
		max-width: 70%;
	}
`
const TitledCard = styled.div`
	opacity: 0;
	margin: 1vh auto 2vh;
	animation: ${EnterAnimation} 3s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
	animation-delay: 0.85s;
`

const Button = styled.a`
	border-radius: 4px;
	font-size: 2.17vmin;
	background: var(--main-blue-dark);
	font-weight: 700;
	padding: calc(3px + .75vmin) calc(9px + .9vmin);
	color: white;
`

const Links = styled.div`
	opacity: 0;
	//margin: 0 auto 0 18vw;
	animation: ${EnterAnimation} 3s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
	animation-delay: 0.5s;
`
	