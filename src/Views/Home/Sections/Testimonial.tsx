import React from "react"
import { useGetTestimonialsQuery } from "../../../app/slices/apiSlices"
import {
  ContentContainer,
  HeaderText,
  StyledLeftCol,
  StyledRow,
} from "../../../components/StylesComponents"
import CarouselView from "../../../components/Utilities/Carousel"
import { Spin } from "antd"

function Testimonial() {
  const {
    isLoading: loadingData,
    error: dataError,
    data: testimonialsData,
  } = useGetTestimonialsQuery()
  console.log("Error", dataError)
  return (
    <section title="testimonials section">
      <StyledRow
        isBackgroundTransparent
        isPaddingVerticalAllowed
        justify={"start"}
      >
        <ContentContainer
          allowLeftMargin
          allowRightMargin
          style={{ width: "100%" }}
        >
          <div style={{ paddingLeft: "3rem" }}>
            <HeaderText>Kind words</HeaderText>
            <HeaderText fadedColor>from our client</HeaderText>
          </div>
          <StyledLeftCol sm={{ span: 24 }} style={{}}>
            <br />
            <br />
            {loadingData ? (
              <Spin />
            ) : (
              <CarouselView items={testimonialsData!} />
            )}
          </StyledLeftCol>
        </ContentContainer>
      </StyledRow>
    </section>
  )
}

export default Testimonial
