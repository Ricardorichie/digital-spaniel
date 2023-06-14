import React from "react"
import {
  StyledLeftCol,
  StyledRightCol,
  StyledRow,
  Wrapper,
} from "../../components/StylesComponents"
import Header from "./Sections/Header"
import Capable from "./Sections/Capable"
import Projects from "./Sections/Projects"
import Casestudies from "./Sections/Casestudies"
import Footer from "./Sections/Footer"
import NavBar from "../../components/Utilities/NavBar"
import Testimonial from "./Sections/Testimonial"

function Home() {
  return (
    <Wrapper>
      <StyledRow
        style={{
          position: "fixed",
          zIndex: 10,
          top: "0",
          width: "100%",
        }}
        isBackgroundTransparent={true}
      >
        <StyledLeftCol lg={{ span: 12, order: 1 }}></StyledLeftCol>
        <StyledRightCol lg={{ span: 12, order: 1 }}>
          <NavBar />
        </StyledRightCol>
      </StyledRow>
      <Header />
      <Capable />
      <Projects />
      <Casestudies />
      <Testimonial />
      <Footer />
    </Wrapper>
  )
}

export default Home
