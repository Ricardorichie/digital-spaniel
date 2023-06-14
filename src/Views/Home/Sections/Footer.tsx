import React from "react"
import {
  ContentContainer,
  HeaderText,
  StyledFacebookIcon,
  StyledInstagramIcon,
  StyledLeftCol,
  StyledLink,
  StyledLinkedInIcon,
  StyledRightCol,
  StyledRow,
  StyledTwitterIcon,
  Title,
} from "../../../components/StylesComponents"

function Footer() {
  return (
    <section title="footer">
      <StyledRow isPaddingVerticalAllowed justify={"start"}>
        <ContentContainer
          allowLeftMargin
          allowRightMargin
          style={{ width: "100%" }}
        >
          <StyledRow isBackgroundTransparent justify={"start"}>
            <StyledLeftCol xs={{ span: 24 }} lg={{ span: 12 }}>
              <div
                style={{
                  height: "100%",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <HeaderText>We're a brands</HeaderText>
                    <HeaderText fadedColor>best friend</HeaderText>
                  </div>
                  <br />
                  <StyledLink to={"/process"}>Let's talk</StyledLink>
                </div>
              </div>
              <br />
            </StyledLeftCol>
            <StyledRightCol xs={{ span: 24 }} lg={{ span: 12 }}>
              <StyledRow justify={"space-between"}>
                <StyledLeftCol xs={{ span: 12 }} md={{ span: 7 }}>
                  <Title>EXPLORE</Title>
                  <Title className="subtitle footerTitle ">Services </Title>
                  <Title className="subtitle footerTitle ">Work </Title>
                  <Title className="subtitle footerTitle ">About </Title>
                  <Title className="subtitle footerTitle ">Blog </Title>
                  <Title className="subtitle footerTitle ">Careers </Title>
                </StyledLeftCol>
                <StyledRightCol xs={{ span: 12 }} md={{ span: 7 }}>
                  <Title>SERVICES</Title>
                  <Title className="subtitle footerTitle ">Brand </Title>
                  <Title className="subtitle footerTitle ">Development </Title>
                  <Title className="subtitle footerTitle ">Marketing </Title>
                </StyledRightCol>
                <StyledRightCol xs={{ span: 12 }} md={{ span: 7 }} security="">
                  <Title>QUESTIONS?</Title>
                  <Title style={{ marginBottom: "5px" }} className="subtitle ">
                    Call Us{" "}
                  </Title>
                  <Title className="subtitle footerTitle">0121 345 678 </Title>
                  <Title style={{ marginBottom: "5px" }}>Email Us</Title>
                  <Title className="subtitle ">info@digitalspaniel.co.uk</Title>
                </StyledRightCol>
              </StyledRow>
            </StyledRightCol>
          </StyledRow>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              marginTop: "7rem",
            }}
          >
            <p className="copyRight">
              Copyright © Digital Spaniel 2019. All rights reserved.
            </p>
            <div style={{ display: "flex" }}>
              <StyledFacebookIcon />
              <StyledTwitterIcon />
              <StyledInstagramIcon />
              <StyledLinkedInIcon />
            </div>
          </div>
        </ContentContainer>
      </StyledRow>
    </section>
  )
}

export default Footer
