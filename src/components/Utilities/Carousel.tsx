import React from "react"
import { TestimonialDataType } from "../../types/dummyDataTypes"
import styled from "styled-components"
import { Paragraph } from "../StylesComponents"
import { desktop, mobile } from "../../theme/fontSize"
import { device } from "../../theme/breakPoints"
type CarouselViewProp = {
  items: TestimonialDataType[]
}
const CarouselView = (props: CarouselViewProp) => {
  const { items } = props
  const [activeIndex, setActiveIndex] = React.useState<number>(1)

  const handleClickDot = (index: number) => {
    setActiveIndex(+index)
  }
  const renderCard = (index: number) => {
    const item = items[index]
    return (
      <Card key={index} active={index === activeIndex}>
        <CardContent active={index === activeIndex}>
          <CardDesc active={index === activeIndex}>{item.testimony}</CardDesc>
          <br />
          <br />
          <ImageAvatar
            alt={item.name + item.id}
            src={item.imageUrl}
            active={index === activeIndex}
          />
          <br />
          <br />
          <CardUserName active={index === activeIndex}>
            {item.name}
          </CardUserName>
          <CardDescription active={index === activeIndex}>
            {item.position}
          </CardDescription>
        </CardContent>
      </Card>
    )
  }
  const renderDots = () => {
    return (
      <DotContainer>
        {items.map((_, index) => (
          <Dot
            key={index}
            active={index === activeIndex}
            onClick={() => handleClickDot(index)}
          />
        ))}
      </DotContainer>
    )
  }
  console.log("items", items)
  return (
    <>
      <CarouselContainer>
        <CarouselContent>
          {renderCard((activeIndex - 1 + items?.length) % items?.length)}
          {renderCard(activeIndex)}
          {renderCard((activeIndex + 1) % items?.length)}
        </CarouselContent>
        {renderDots()}
      </CarouselContainer>
    </>
  )
}

export default CarouselView
type CarouselStyleType = {
  active?: boolean
}
const Dot = styled.div<CarouselStyleType>`
  width: ${({ active, theme }) => (active ? "25px" : "16px")};
  height: ${({ active, theme }) => (active ? "25px" : "16px")};
  margin: 0 0.5rem;
  border-radius: 50%;
  background-color: ${({ active, theme }) =>
    active ? theme.primaryColor : theme.mutedColorPrimary4};
  cursor: pointer;
`
const CarouselContainer = styled.div`
  display: block;
  @media ${device.laptop} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* background: red; */
`

const CarouselContent = styled.div`
  /* background: blue; */
  width: 100%;
  @media ${device.laptop} {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
  }
`

const ImageAvatar = styled.img<CarouselStyleType>`
  margin: 0 auto;
  width: ${({ active, theme }) => (active ? "80px" : "50px")};
  height: ${({ active, theme }) => (active ? "80px" : "50px")};
`

const CardContent = styled.div<CarouselStyleType>`
  text-align: center;
  padding: ${({ active, theme }) => (active ? "1.5rem 2rem" : "1rem 2rem")};
`

const CardDesc = styled(Paragraph)<CarouselStyleType>`
  margin-bottom: 0.5rem;
  font-family: "Open Sans", sans-serif;
  font-weight: ${({ active, theme }) => (active ? 600 : 500)};
  letter-spacing: 0;
  color: ${({ active, theme }) =>
    active ? theme.background : theme.primaryColor};
  font-style: italic;
  font-size: ${mobile.normal};
  quotes: "\201C""\201D""\2018""\2019";
  position: relative;
  margin-bottom: 30px;

  @media ${device.laptop} {
    font-size: ${desktop.normal};
    margin: 0;
    margin-bottom: 30px;
  }
  :before {
    content: open-quote;
    position: absolute;
    font-weight: bold;
    font-size: 100px;
    color: ${(props) => props.theme.mutedColorSecondary6};
    font-family: sans-serif;
    font-style: normal;
  }
  :after {
    content: close-quote;
    position: absolute;
    font-weight: bold;
    font-style: normal;
    font-family: sans-serif;
    line-height: 110%;

    font-size: 100px;
    color: ${(props) => props.theme.mutedColorSecondary6};
  }
`

const CardUserName = styled(CardDesc)<CarouselStyleType>`
  font-size: ${mobile.normal};
  font-style: normal;
  font-weight: 600;
  :before {
    content: none;
  }
  :after {
    content: none;
  }
  @media ${device.laptop} {
    font-size: ${desktop.xSmall};
  }
`

const CardDescription = styled(CardUserName)<CarouselStyleType>`
  font-weight: 400;
`

const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Card = styled.div<CarouselStyleType>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${({ active }) => "100%"};
  max-height: ${({ active }) => (active ? "fit-content" : "")};
  min-height: 300px;
  margin: 0;
  padding: 2rem;
  background-color: ${({ active, theme }) =>
    active ? theme.primaryColor : theme.mutedColorPrimary3};
  border-radius: 8px;
  ${({ active }) =>
    !active &&
    `
    transform: scaleY(0.9);
  `}
  box-shadow:${(props) => (props.active ? `0px 0px 20px #19293A80` : "")};
  @media ${device.laptop} {
    width: ${({ active }) => (active ? "60%" : "50%")};
    margin: ${({ active }) => (active ? "0 2rem" : "0rem")};
    padding: ${({ active }) => (active ? "2rem" : "0rem")};
  }
`
