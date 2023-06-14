import React from "react"
import {
  AccentText,
  CenterContainer,
  ContentContainer,
  HeaderText,
  LogoContainer,
  Paragraph,
  StyledLeftCol,
  StyledLink,
  StyledRightCol,
  StyledRow,
} from "../../../components/StylesComponents"
import DigitalSpanielLogo from "../../../assets/logo.png"
import NavBar from "../../../components/Utilities/NavBar"
function Header() {
  return (
    <section title="header section">
      <StyledRow
        style={{ height: "100%" }}
        justify={"start"}
        isBackgroundTransparent={true}
      >
        <StyledLeftCol
          style={{ height: "100vh" }}
          xs={{ span: 24, order: 2 }}
          lg={{ span: 12, order: 1 }}
        >
          <LogoContainer src={DigitalSpanielLogo} alt="Digital-spaniel-logo" />
          <ContentContainer
            allowLeftMargin
            allowRightMargin
            isCustomizedRightMargin
          >
            <CenterContainer>
              <React.Fragment>
                <AccentText>BRAND, DEV, ECOM, MARKETING</AccentText>
                <br />
                <br />
                <br />
                <HeaderText>We unleash</HeaderText>
                <HeaderText fadedColor>business potential</HeaderText>
                <br />
                <br />
                <br />
                <Paragraph>
                  We create brand experiences which are memorable and distinct.
                  Our experienced team create and develop brands with
                  personality and resonance.
                </Paragraph>
                <br />
                <br />
                <br />
                <StyledLink to={"/home"}>Let's talk</StyledLink>
              </React.Fragment>
            </CenterContainer>
          </ContentContainer>
        </StyledLeftCol>
        <StyledRightCol
          xs={{ span: 24, order: 1 }}
          //   md={{ span: 24, order: 2 }}
          isBackgroundImage={true}
          style={{ height: "100vh" }}
          lg={{ span: 12, order: 2 }}
        ></StyledRightCol>
      </StyledRow>
    </section>
  )
}

export default Header
