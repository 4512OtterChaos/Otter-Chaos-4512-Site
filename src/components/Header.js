import React from "react"
import styled from "styled-components"
import Layout from "./layout"
import { Link } from "gatsby"
import Logo from "../images/logos/logo.svg"

const Header = () => {
  return (
    <Layout>
      <Heading>
        <Container>
          <Link to="/">
            <img src={Logo} alt="Otter Chaos Logo" />
          </Link>
          <Link to="/robots">Robots</Link>
          <Link to="/sponsor">Sponsor</Link>
          <Link to="/team">Team</Link>
        </Container>
      </Heading>
      {checkAlert()}
    </Layout>
  )
}

export default Header

const currDate = new Date() // Viewer's time

//Milliseconds per day:
const msDay = 86400000
//Milliseconds per hour:
const msHour = 3600000
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

//Define events here, because I don't know web dev
var events = [
  //createEvent(dayOfMonth, month, year, text, customLink, customDateNote)
  //customNote is an additional string appended to the time signature. (e.g. "10AM")
  //formatting: "(eventText): (date) + (note) + (link)"
  //e.g. createEvent(4, 1, 2020, "Kickoff", "", "10AM") would be seen as "Kickoff: January 4 2020 - 10AM"
  //note and link are optional
  //Sort this list by earliest to latest dates
  createEvent(
    4,
    1,
    2020,
    1,
    "Season Kickoff",
    "https://www.twitch.tv/firstinspires",
    "7AM"
  ),
  createEvent(
    5,
    3,
    2022,
    2,
    "Glacier Peak",
    "https://www.thebluealliance.com/team/4512/2022"
  ),
  createEvent(
    19,
    3,
    2022,
    2,
    "Sammamish",
    "https://www.thebluealliance.com/team/4512/2022"
  ),
]

function createEvent(
  dayValue,
  monthValue,
  yearValue,
  lengthDays,
  eventText,
  linkString,
  customNote
) {
  const eventDate = new Date(yearValue, monthValue - 1, dayValue)
  const eventEnd = new Date(eventDate.getTime() + (lengthDays - 1) * msDay)
  const text = eventText
  const link = linkString
  const note = customNote
  var data = [eventDate, eventEnd, text, link, note]
  return data
}

function isNearDate(eventDates) {
  var isNear = false
  eventDates.forEach(date => {
    var timeDiff = date.getTime() - currDate.getTime()
    //console.log(timeDiff);
    if (timeDiff <= 4 * msDay && timeDiff >= -msDay) isNear = true
  })
  return isNear
}

function checkAlert() {
  var event
  var eventTime

  for (var i = 0; i < events.length; i++) {
    //console.log(isNearDate([events[i][0], events[i][1]]));
    if (isNearDate([events[i][0], events[i][1]])) {
      event = events[i]
      eventTime =
        "" +
        months[event[0].getMonth()] +
        " " +
        event[0].getDate() +
        ", " +
        event[0].getFullYear()
      break
    }
  }

  if (event) {
    var customText = event[2]
    var customNote = event[4] ? " - " + event[4] + "." : "."
    var customLink = event[3] ? (
      <a href={event[3]}>Click to view matches</a>
    ) : (
      ""
    )
    var message = customText + ": " + eventTime + customNote
    return (
      <StreamAlert>
        <h3>
          <span>! [Event] </span>
          {message}
          {event[3] ? <span>&nbsp;&nbsp;&nbsp;</span> : ""}
          {customLink}
        </h3>
      </StreamAlert>
    )
  } else {
    return undefined
  }
}

const Heading = styled.div`
  width: 100%;
  height: calc(20px + 6vh);
  border-bottom: 0.5vh var(--main-grey-light) solid;
`

const Container = styled.div`
  margin: 0 auto;
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  //grid-template-columns: repeat(2, 1fr);
  align-items: center;
  height: 100%;

  img {
    width: calc(18px + 6vh);
    margin: auto 8vw auto auto;
  }
  a {
    color: var(--main-black);
    font-size: calc(6px + 1vmin);
    text-transform: uppercase;
  }

  @media (max-width: 1300px) {
    width: 75%;
  }
  @media (max-width: 900px) {
    width: 90%;
  }
`

const StreamAlert = styled.div`
  margin: 4px auto 0;
  width: 90%;
  max-width: 1300px;
  height: calc(25px + 3.8vmin);
  border-radius: 6px;
  border: 2px solid var(--main-yellow-dark);
  text-align: center;
  background: var(--main-yellow);
  opacity: 0.75;
  transition: opacity 400ms ease-in-out;

  h3 {
    font-size: calc(2px + 2vmin);
    line-height: calc(25px + 3.8vmin);
    margin: 0;
  }

  a {
    font-size: calc(2px + 2vmin);
    line-height: calc(25px + 3.8vmin);
    margin: 0;
    position: relative;
    top: -1px;
    color: blue;
    text-decoration-line: underline;
    &:hover {
      color: var(--main-blue);
    }
  }

  span {
    color: var(--main-red);
  }

  &:hover {
    opacity: 0.95;
  }
`
