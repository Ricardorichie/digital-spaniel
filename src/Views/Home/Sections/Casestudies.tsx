import React from "react"
import {
  CenterWithPadding,
  HeaderText,
  Paragraph,
} from "../../../components/StylesComponents"

function Casestudies() {
  return (
    <section title="case Studies">
      <HeaderText style={{ textAlign: "center" }}>Case Studies</HeaderText>
      <CenterWithPadding style={{ marginBottom: "4rem" }}>
        <Paragraph style={{ textAlign: "center" }}>
          Every project is different. We like to work collaboratively with our
          clients, tailoring each project to suit the needs of you and your
          business.
        </Paragraph>
      </CenterWithPadding>
    </section>
  )
}

export default Casestudies
