import React from "react"
import styled from "styled-components"
import { ProjectsDataType } from "../../types/dummyDataTypes"
import ImageUrl from "../../assets/whellies01.png"
import { HeaderText, Paragraph, StyledLink } from "../StylesComponents"
import { desktop } from "../../theme/fontSize"
type ImageProjectorProps = {
  data: ProjectsDataType
}
const ImageProjector = (props: ImageProjectorProps) => {
  const { data } = props

  return (
    <Container>
      <ImageWrapper>
        <Image src={`${data.imageUrl}`} alt={data?.imageUrl} />
        <Overlay>
          <Content>
            <LocalHeaderText>{data?.title}</LocalHeaderText>
            <LocalParagraph>{data?.description}</LocalParagraph>
            <br />
            <LocalLink to={"/process"}>Full project</LocalLink>
          </Content>
        </Overlay>
      </ImageWrapper>
    </Container>
  )
}

export default ImageProjector

const Container = styled.div`
  width: 100%;
  flex-wrap: wrap;
  height: 100%;
`

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1);
  }
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-size: contain;
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 1.7rem;
  margin-top: auto;

  background: transparent linear-gradient(180deg, #19293a1a 0%, #19293a 100%) 0%
    0% no-repeat padding-box;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${ImageWrapper}:hover & {
    opacity: 1;
  }
`

const Content = styled.div`
  position: absolute;
  bottom:10px;
  z-index: 10;
  color: #fff;
  text-align: left;
  padding:1.5rem:
  opacity: 0;
  transition: opacity 0.3s ease;
  ${ImageWrapper}:hover & {
    opacity: 1;
  }
`
const LocalParagraph = styled(Paragraph)`
  color: ${(props) => props.theme.background};
`
const LocalLink = styled(StyledLink)`
  text-decoration-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.background};
`
const LocalHeaderText = styled(HeaderText)`
  font-size: ${desktop.medium};
  color: ${(props) => props.theme.background};
`
