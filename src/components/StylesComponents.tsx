import { Col, Drawer, Row, Tabs } from "antd"
import styled, { Keyframes, keyframes } from "styled-components"
import { device } from "../theme/breakPoints"
import HomeImage from "../assets/spanielGradient.png"
import { desktop, mobile } from "../theme/fontSize"
import { Link } from "react-router-dom"
import TabPane from "antd/es/tabs/TabPane"
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa"

import {
  AiOutlineInstagram,
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineTwitter,
} from "react-icons/ai"
type StyledRowProp = {
  isBackgroundTransparent?: boolean
  isPaddingVerticalAllowed?: boolean
}
type StyledRightProp = {
  isBackgroundImage?: boolean
}
type ContentContainerProp = {
  allowLeftMargin?: boolean
  allowRightMargin?: boolean
  isCustomizedRightMargin?: boolean
  isCustomizedLeftMargin?: boolean
}
type HeaderTextProp = {
  fadedColor?: boolean
}

export const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
`
export const StyledLeftCol = styled(Col)`
  position: relative;
  /* display: flex;
  height: 100%;
  padding: 10px;
  position: relative;
  align-items: center;
  z-index: 5;
  background: ${(props) => props.theme.primaryColor};

  @media ${device.laptop} {
    padding: 5% 0 0 10%;
    height: 100%;
    align-items: baseline;
  } */
`
export const StyledRightCol = styled(Col)<StyledRightProp>`
  background: ${(props) =>
    props.isBackgroundImage ? `url(${HomeImage})` : "transparent"};

  background-position: center;
  background-size: cover;
  position: relative;
  /* background: ${(props) => props.theme.accentPrimary}; */

  /* display: flex;
  height: 100%;
  padding: 10px;
  position: relative;
  align-items: center;
  z-index: 5;
  background: ${(props) => props.theme.primaryColor};

  @media ${device.laptop} {
    padding: 5% 0 0 10%;
    height: 100%;
    align-items: baseline;
  } */
`
export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const StyledRow = styled(Row)<StyledRowProp>`
  padding-top: ${(props) => (props.isPaddingVerticalAllowed ? "7rem" : 0)};
  padding-bottom: ${(props) => (props.isPaddingVerticalAllowed ? "7rem" : 0)};
  position: relative;
  background-color: ${(props) =>
    props.isBackgroundTransparent
      ? "transparent"
      : props.theme.mutedColorPrimary1};
  .fadeInAnimation {
    animation: ${fadeIn} 0.7s ease-in;
  }
`
export const LogoContainer = styled.img`
  position: absolute;
  height: 2rem;
  top: 2rem;
  left: 2rem;
  @media ${device.laptop} {
    height: 5rem;
    top: 2rem;
    left: 9rem;
  }
`
export const AccentText = styled.h3`
  color: ${(props) => props.theme.accentPrimary};
  text-decoration: Capitalize;
  font-size: ${mobile.normal};
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  letter-spacing: 1px;
  @media ${device.laptop} {
    font-size: ${desktop.xSmall};
    margin: 0;
  }
`
export const HeaderText = styled.h1<HeaderTextProp>`
  color: ${(props) => props.theme.accentPrimary};
  text-decoration: Uppercase;
  font-size: ${mobile.large};
  font-family: "ITC-Medium", sans-serif;
  font-weight: 500;
  letter-spacing: 0px;
  color: ${(props) =>
    props.fadedColor
      ? props.theme.mutedColorSecondary7
      : props.theme.primaryColor};

  @media ${device.laptop} {
    font-size: ${desktop.large};
    margin: 0;
  }
`
export const Title = styled.h3<HeaderTextProp>`
  color: ${(props) => props.theme.accentPrimary};
  font-size: ${mobile.small};
  font-family: "ITC-Medium", sans-serif;
  font-weight: 400;
  letter-spacing: 2.1px;
  color: ${(props) =>
    props.fadedColor
      ? props.theme.mutedColorSecondary7
      : props.theme.primaryColor};
  margin-bottom: 16px;

  @media ${device.laptop} {
    font-size: ${desktop.small};
  }
`
export const Paragraph = styled.h3<HeaderTextProp>`
  color: ${(props) => props.theme.accentPrimary};
  text-decoration: Uppercase;
  font-size: ${mobile.normal};
  font-family: "ITC-Ce-Book", sans-serif;
  font-weight: 300;
  color: ${(props) => props.theme.mutedColorSecondary7};
  line-height: 1.5rem;
  @media ${device.laptop} {
    font-size: ${desktop.normal};
    margin: 0;
    line-height: 2rem;
  }
`
export const ContentContainer = styled.div<ContentContainerProp>`
  height: 100%;
  margin-left: ${(props) => (props.allowLeftMargin ? `16px` : 0)};
  margin-right: ${(props) => (props.allowRightMargin ? `16px` : 0)};
  @media ${device.laptop} {
    margin-left: ${(props) =>
      props.allowLeftMargin && props.isCustomizedLeftMargin
        ? `5rem`
        : props.allowLeftMargin && !props.isCustomizedLeftMargin
        ? `16rem`
        : 0};
    margin-right: ${(props) =>
      props.allowRightMargin && props.isCustomizedRightMargin
        ? `13rem`
        : props.allowRightMargin && !props.isCustomizedRightMargin
        ? `16rem`
        : 0};
  }
  .subtitle {
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    letter-spacing: 0.53px;
  }
  .footerTitle {
    margin-bottom: 25px;
  }
  .title-pressable {
    cursor: pointer;
  }
  .copyRight{
 color: ${(props) => props.theme.mutedColorSecondary1};
  font-family: "Open Sans", sans-serif;
  font-weight: 500;
  }
  .
`
export const CenterContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`
export const StyledLink = styled(Link)`
  display: inline-block;
  position: relative;
  text-decoration: underline;
  text-underline-offset: 8px;
  text-decoration-color: ${(props) => props.theme.accentPrimary};
  text-decoration-thickness: 2px;
  padding-bottom: 10px;
  color: ${(props) => props.theme.primaryColor};
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  &:hover,
  &:active {
    color: ${(props) => props.theme.accentTertiary};
    text-decoration: underline;
    text-underline-offset: 8px;
    text-decoration-color: ${(props) => props.theme.accentPrimary};
    text-decoration-thickness: 2px;
  }
  &:hover {
    transform: scale(1.01);
    transition: transform 0.3s ease;
  }

  &:visited {
    color: ${(props) => props.theme.mutedColorSecondary4};
  }
`
export const StyledTabs = styled(Tabs)`
  color: ${(props) => props.theme.primaryColor} !important;
  /* color: red !important; */
  font-size: ${mobile.normal} !important;
  font-weight: 400;
  font-family: "Open Sans", sans-serif;

  @media ${device.laptop} {
    font-size: ${desktop.xSmall} !important;

    .ant-tabs-tab {
      padding: 0 ${desktop.large};
    }
    .ant-tabs-nav {
      position: block;
      width: fit-content;
    }
    .ant-tabs-nav-wrap {
      position: block;
    }
  }

  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: ${(props) => props.theme.primaryColor} !important;

    font-weight: 600;
  }
  .ant-tabs-tab {
    :hover {
      color: ${(props) => props.theme.primaryColor} !important;
    }
  }
  .ant-tabs-ink-bar {
    position: absolute;

    background: ${(props) => props.theme.secondaryColor} !important;
    pointer-events: none;
  }
  .ant-tabs-nav-wrap {
    border-bottom: ${(props) => `1px solid ${props.theme.mutedColorPrimary4}`};
  }
`
export const StyledTapPane = styled(TabPane)``
export const StyledRightIcon = styled(AiOutlineRight)<{ active: boolean }>`
  color: ${(props) =>
    props.active ? props.theme.background : props.theme.primaryColor};
  /* font-size: ${desktop.normal}; */
`
export const StyledLeftIcon = styled(AiOutlineLeft)<{ active: boolean }>`
  color: ${(props) =>
    props.active ? props.theme.background : props.theme.primaryColor};
  font-size: ${desktop.normal};
`

export const StyledInstagramIcon = styled(AiOutlineInstagram)`
  font-size: ${desktop.medium};
  cursor: pointer;
  color: ${(props) => props.theme.mutedColorSecondary4};
  margin-left: 15px;
`
export const StyledFacebookIcon = styled(FaFacebookF)`
  font-size: ${desktop.medium};
  cursor: pointer;
  color: ${(props) => props.theme.mutedColorSecondary4};
  margin-left: 15px;
`
export const StyledTwitterIcon = styled(AiOutlineTwitter)`
  font-size: ${desktop.medium};
  cursor: pointer;
  color: ${(props) => props.theme.mutedColorSecondary4};
  margin-left: 15px;
`
export const StyledLinkedInIcon = styled(FaLinkedinIn)`
  font-size: ${desktop.medium};
  cursor: pointer;
  color: ${(props) => props.theme.mutedColorSecondary4};
  margin-left: 15px;
`

export const IconContainer = styled.div<{ active: boolean }>`
  cursor: pointer;
  background: ${(props) =>
    props.active ? props.theme.primaryColor : props.theme.mutedColorPrimary2};
  font-size: ${desktop.normal};
  padding: 1.5rem;
`
export const StyledDrawer = styled(Drawer)`
  border: none;

  @media ${device.laptop} {
    display: none;
  }
`
