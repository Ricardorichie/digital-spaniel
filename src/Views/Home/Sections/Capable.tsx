import React from "react"
import {
  ContentContainer,
  HeaderText,
  Paragraph,
  StyledLeftCol,
  StyledLink,
  StyledRightCol,
  StyledRow,
  Title,
} from "../../../components/StylesComponents"
import { AiFillRightCircle } from "react-icons/ai"

function Capable() {
  const [isHovered, setIsHovered] = React.useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }
  const CapableContent = () => {
    return (
      <ContentContainer
        allowLeftMargin
        allowRightMargin
        isCustomizedRightMargin
        className="fadeInAnimation"
      >
        <React.Fragment>
          <HeaderText>What are</HeaderText>
          <HeaderText fadedColor>we capable of</HeaderText>
          <br />
          <br />
          <br />
          <Paragraph>
            By focusing on design as an enabler and putting a huge emphasis on
            our clients as co-producers, we create innovative, sustainable
            marketing that enhances brand experience and user engagement.
          </Paragraph>
          <br />
          <br />
          <br />
          <StyledLink to={"/process"}>Our process</StyledLink>
        </React.Fragment>
      </ContentContainer>
    )
  }
  return (
    <section title="capability section">
      <StyledRow isPaddingVerticalAllowed justify={"start"}>
        <StyledLeftCol xs={{ span: 24 }} lg={{ span: 12 }}>
          {isHovered ? <CapableContent /> : <></>} <br />
        </StyledLeftCol>
        <StyledRightCol xs={{ span: 24 }} lg={{ span: 12 }}>
          <ContentContainer
            allowLeftMargin
            allowRightMargin
            isCustomizedLeftMargin
          >
            <StyledRow justify={"space-between"}>
              <StyledLeftCol xs={{ span: 11 }}>
                <Title>BRAND</Title>
                <div style={{ display: "flex" }}>
                  <Title
                    onMouseEnter={handleMouseEnter}
                    // onMouseLeave={handleMouseLeave}
                    className="subtitle title-pressable link"
                  >
                    Brand Strategy{" "}
                  </Title>
                  <h3
                    style={{
                      marginLeft: "0.5rem",
                      fontSize: "16px",
                      marginTop: "2px",
                    }}
                  >
                    <AiFillRightCircle />
                  </h3>
                </div>

                <Title className="subtitle link">Logo & Name </Title>
                <Title className="subtitle link">Identity & collateral </Title>
                <br />
                <br />
                <Title>DEVELOPMENT</Title>
                <Title className="subtitle link">eCommerce </Title>
                <Title className="subtitle link">Web Development </Title>
                <Title className="subtitle link">Mobile Apps </Title>
              </StyledLeftCol>
              <StyledRightCol xs={{ span: 10 }}>
                <Title>MARKETING</Title>
                <Title className="subtitle link">Digital </Title>
                <Title className="subtitle link">Market Research </Title>
              </StyledRightCol>
              <StyledRightCol xs={{ span: 2 }}></StyledRightCol>
            </StyledRow>
          </ContentContainer>
        </StyledRightCol>
      </StyledRow>
    </section>
  )
}

export default Capable
