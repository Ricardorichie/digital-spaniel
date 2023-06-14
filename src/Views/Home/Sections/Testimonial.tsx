import React from "react"
import { useGetTestimonialsQuery } from "../../../app/slices/apiSlices"

function Testimonial() {
  const {
    isLoading: loadingData,
    error: dataError,
    data: projectsData,
  } = useGetTestimonialsQuery()
  return <div>Testimonial</div>
}

export default Testimonial
