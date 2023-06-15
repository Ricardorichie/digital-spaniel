import React from "react"
import {
  ContentContainer,
  HeaderText,
  MasonryImageGrid,
  StyledLeftCol,
  StyledLink,
  StyledRightCol,
  StyledRow,
} from "../../../components/StylesComponents"

function AboutUs() {
  return (
    <section title="about us">
      <StyledRow
        isBackgroundTransparent
        // isPaddingVerticalAllowed
        justify={"start"}
      >
        <ContentContainer allowLeftMargin allowRightMargin>
          <div>
            <HeaderText>What are</HeaderText>
            <HeaderText fadedColor>we all about?</HeaderText>
          </div>
        </ContentContainer>
      </StyledRow>
      <br />
      <br />
      <StyledRow isPaddingVerticalAllowed>
        <ContentContainer
          allowLeftMargin
          allowRightMargin
          style={{ width: "100%" }}
        >
          <StyledRow justify={"space-between"}>
            <StyledLeftCol xs={{ span: 24 }} lg={{ span: 12 }}>
              <img
                style={{
                  margin: 0,
                  padding: 0,
                  width: "100%",
                  backgroundRepeat: "no-repeat",
                }}
                src="/src/assets/office01.png"
                alt="office01"
              />
              <br />
              <br />
              <div style={{ display: "flex" }}>
                <StyledLink to={"/process"}>About</StyledLink>
                <StyledLink style={{ marginLeft: "3rem" }} to={"/process"}>
                  Careers
                </StyledLink>
              </div>
            </StyledLeftCol>
            <StyledRightCol style={{}} xs={{ span: 24 }} lg={{ span: 12 }}>
              <MasonryImageGrid>
                <img
                  className="image"
                  src="/src/assets/office03.png"
                  alt="office03"
                />

                <img
                  className="image"
                  src="/src/assets/office04.png"
                  alt="office04"
                />
                <img
                  className="image"
                  src="/src/assets/office02.png"
                  alt="office02"
                />
              </MasonryImageGrid>
            </StyledRightCol>
          </StyledRow>
        </ContentContainer>
      </StyledRow>
    </section>
  )
}

export default AboutUs
