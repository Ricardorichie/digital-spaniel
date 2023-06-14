import React from "react"
import styled from "styled-components"
import { ProjectsDataType } from "../../types/dummyDataTypes"
import ImageProjector from "./ImageProjector"
type GridGalleryProps = {
  data: ProjectsDataType[]
}
const GridGallery = (props: GridGalleryProps) => {
  const { data } = props
  const itemCount = data?.length
  const columnsPerRow = Math.min(itemCount, 3)

  const renderRows = () => {
    const rows = []
    let rowIndex = 0

    while (rowIndex < itemCount) {
      const rowData = data.slice(rowIndex, rowIndex + columnsPerRow)
      const rowItems = rowData.map((item, index) => (
        <GridItem
          key={index}
          spanAllColumns={rowData.length === 1}
          spanFirstTwoColumns={rowData.length === 2 && index === 0}
          spanSecondColumn={rowData.length === 2 && index === 1}
        >
          {/* {Array.isArray(item) ? item.join(", ") : item} */}
          {/* {item.title} */}
          {/* {item.description} */}
          <ImageProjector data={item} />
        </GridItem>
      ))
      rows.push(
        <GridRow key={rowIndex} columns={columnsPerRow}>
          {rowItems}
        </GridRow>,
      )

      rowIndex += columnsPerRow
    }

    return rows
  }

  return <GridContainer>{renderRows()}</GridContainer>
}

export default GridGallery
type GridItemProps = {
  spanAllColumns?: boolean
  spanFirstTwoColumns?: boolean
  spanSecondColumn?: boolean
}
const GridContainer = styled.div`
  display: grid;
  grid-gap: 1.5rem;
`

const GridRow = styled.div<{ columns: number }>`
  display: grid;
  grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
  gap: 1.5rem;
`

const GridItem = styled.div<GridItemProps>`
  overflow: hidden;
  border-radius: 10px;
  height: 26.212rem;
  display: inline-block;

  ${({ spanAllColumns }) =>
    spanAllColumns &&
    `
    grid-column: 1 / span 3;
  `}

  ${({ spanFirstTwoColumns }) =>
    spanFirstTwoColumns &&
    `
    grid-column: 1 / span 2;
  `}

  ${({ spanSecondColumn }) =>
    spanSecondColumn &&
    `
    grid-column: 3;
  `}
`
/* grid-column: ${({ spanAll }) => */
// spanAll === 1 ? "1 / span 3" : spanAll === 2 ? "2 / span 3" : "auto"};
