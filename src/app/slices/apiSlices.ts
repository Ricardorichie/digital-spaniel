import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { ProjectsDataType } from "../../types/dummyDataTypes"
const apiUrl = "http://localhost:3010"
const noAuthHeaders = (headers) => {
  headers.set("Content-type", "application/json")
  return headers
}
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: apiUrl,
    prepareHeaders: noAuthHeaders, //iin case of bearer authirisatioin
  }),
  tagTypes: [],
  endpoints: (build) => ({
    getProjects: build.query<ProjectsDataType[], void>({
      query: () => "/projects",
    }),
    getTestimonials: build.query<ProjectsDataType[], void>({
      query: () => "/testimonials",
    }),
  }),
})
export const { useGetProjectsQuery, useGetTestimonialsQuery } = api
