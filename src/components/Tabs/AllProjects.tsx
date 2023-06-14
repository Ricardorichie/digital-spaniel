import React from "react"
import { ProjectsDataType } from "../../types/dummyDataTypes"
import GridGallery from "../Utilities/GridGallery"
import { StyledLink } from "../StylesComponents"
import { useGetProjectsQuery } from "../../app/slices/apiSlices"
import { AiOutlineLoading } from "react-icons/ai"
type AllProjectsProps = {
  data?: ProjectsDataType[]
}
function AllProjects(props: AllProjectsProps) {
  const {
    isLoading: loadingData,
    error: dataError,
    data: projectsData,
  } = useGetProjectsQuery()
  console.log("data", projectsData)
  return (
    <div>
      {loadingData ? (
        <AiOutlineLoading />
      ) : (
        <GridGallery data={projectsData?.length ? projectsData : []} />
      )}
      <br />
      <br />
      <br />
    </div>
  )
}

export default AllProjects
