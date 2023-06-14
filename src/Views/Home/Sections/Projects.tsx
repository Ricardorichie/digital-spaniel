import React, { useState } from "react"
import {
  ContentContainer,
  HeaderText,
  IconContainer,
  StyledLeftCol,
  StyledLeftIcon,
  StyledLink,
  StyledRightIcon,
  StyledRow,
  StyledTabs,
  StyledTapPane,
} from "../../../components/StylesComponents"
import AllProjects from "../../../components/Tabs/AllProjects"
import { useGetProjectsQuery } from "../../../app/slices/apiSlices"

function Projects() {
  const [activeKey, setActiveKey] = React.useState(1)
  const handlePrevKey = () => {
    if (activeKey === 1) {
      return
    }
    setActiveKey(activeKey - 1)
  }
  const handleNextKey = () => {
    if (activeKey === 4) {
      return
    }
    setActiveKey(activeKey + 1)
  }
  return (
    <section title="projects section">
      <StyledRow
        isBackgroundTransparent={true}
        isPaddingVerticalAllowed={true}
        justify={"start"}
      >
        <StyledLeftCol span={24}>
          <ContentContainer allowLeftMargin allowRightMargin>
            <HeaderText>Some of our</HeaderText>
            <HeaderText fadedColor>recent projects</HeaderText>
            <br />
            <br />
            <br />

            <StyledTabs
              activeKey={String(activeKey)}
              defaultActiveKey="1"
              onChange={(id) => {
                setActiveKey(+id)
              }}
            >
              <StyledTapPane tab="All" key="1">
                <AllProjects />
              </StyledTapPane>
              <StyledTapPane tab="Branding" key="2">
                <div>Branding</div>
              </StyledTapPane>
              <StyledTapPane tab="Web Design" key="3">
                <div>Web design</div>
              </StyledTapPane>
              <StyledTapPane tab="Digital Marketing" key="4">
                <div>Digital marketing</div>
              </StyledTapPane>
            </StyledTabs>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <StyledLink to={"/process"}>See all work</StyledLink>
              <div style={{ display: "flex", alignItems: "center" }}>
                <IconContainer
                  onClick={() => handlePrevKey()}
                  active={activeKey > 1}
                >
                  <StyledLeftIcon active={activeKey > 1} />
                </IconContainer>
                <IconContainer
                  onClick={handleNextKey}
                  style={{ marginLeft: "10px" }}
                  active={activeKey < 4}
                >
                  <StyledRightIcon active={activeKey < 4 ? true : false} />
                </IconContainer>
              </div>
            </div>
          </ContentContainer>
        </StyledLeftCol>
      </StyledRow>
    </section>
  )
}

export default Projects
