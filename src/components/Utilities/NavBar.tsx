import React from "react"
import { Link, NavLink } from "react-router-dom"
import styled from "styled-components"
import { device } from "../../theme/breakPoints"
import { NavRoute } from "../../lib/data"
import { StyledDrawer } from "../StylesComponents"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { GiHamburgerMenu } from "react-icons/gi"

import { mobileNavEnabled, toggleMobileNav } from "../../app/slices/uxSlice"
import { mobile } from "../../theme/fontSize"

function NavBar() {
  const [isHidden, setIsHidden] = React.useState(false)
  const [prevScrollPos, setPrevScrollPos] = React.useState(window.pageYOffset)

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset
    //     setIsHidden(prevScrollPos < currentScrollPos && currentScrollPos > 0);

    setIsHidden(prevScrollPos < currentScrollPos)
    setPrevScrollPos(currentScrollPos)
  }

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [prevScrollPos])

  const route = NavRoute?.map((dt, idx) => {
    return (
      <NavbarLink
        className={({ isActive }) => (isActive ? "active" : "")}
        to={dt.to}
      >
        {dt.navName}
      </NavbarLink>
    )
  })
  const dispatch = useAppDispatch()
  const drawerSelector = useAppSelector(mobileNavEnabled)
  const handleCloseDrawer = () => {
    dispatch(toggleMobileNav(false))
  }
  const handleOpenDrawer = () => {
    dispatch(toggleMobileNav(true))
  }
  return (
    <>
      <HamburgerContainer isHidden={isHidden} onClick={handleOpenDrawer}>
        <StyledHamburger />
      </HamburgerContainer>
      <LocalTopNavigation isHidden={isHidden}>{route}</LocalTopNavigation>
      <StyledDrawer
        bodyStyle={{ padding: "0px", background: "#00000094" }}
        width={320}
        closable={true}
        onClose={handleCloseDrawer}
        visible={drawerSelector}
        placement="left"
        key="left"
      >
        <DrawerContainer>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {route}
          </div>
        </DrawerContainer>
      </StyledDrawer>
    </>
  )
}

export default NavBar
type TopNavigationProp = {
  isHidden: boolean
}
const LocalTopNavigation = styled.nav<TopNavigationProp>`
  display: none;
  @media ${device.laptop} {
    display: flex;
    margin: 0 auto;
    position: sticky;
    top: 0;
    padding: 3rem 10rem;
    background-color: transparent;
    width: "100%";
    justify-content: space-between;
    z-index: 999;
    transition: transform 0.3s ease;
    transform: ${({ isHidden }) =>
      isHidden ? "translateY(-100%)" : "translateY(0)"};
    a.active {
      color: ${(props) => props.theme.background};
      text-decoration: underline;
      text-underline-offset: 8px;
      text-decoration-color: ${(props) => props.theme.background};
      text-decoration-thickness: 2px;
    }
  }
`
export const NavbarLink = styled(NavLink)`
  margin-bottom: 15px;
  text-decoration-thickness: 2px;
  padding-bottom: 10px;
  color: ${(props) => props.theme.background};
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  &:hover {
    color: ${(props) => props.theme.accentPrimary};
    text-decoration: none;
    transform: scale(1.05);
    transition: transform 0.3s ease;
  }
  @media ${device.laptop} {
    margin-bottom: 0;
  }
`
const DrawerContainer = styled.div`
  height: 100vh;
  width: 90%;
  padding: 10px;
  display: block;
  a.active {
    color: ${(props) => props.theme.background};
    text-decoration: underline;
    text-underline-offset: 8px;
    text-decoration-color: ${(props) => props.theme.background};
    text-decoration-thickness: 2px;
  }
`
const StyledHamburger = styled(GiHamburgerMenu)`
  font-size: ${mobile.large};
  cursor: pointer;
  color: ${(props) => props.theme.background};
`
const HamburgerContainer = styled.div<TopNavigationProp>`
  transform: ${({ isHidden }) =>
    isHidden ? "translateY(-100%)" : "translateY(0)"};
  position: sticky;
  padding: 1rem;
  transition: transform 0.3s ease;

  z-index: 10;
  @media ${device.laptop} {
    display: none;
  }
`
