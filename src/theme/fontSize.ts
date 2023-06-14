import "styled-components"

interface Fontsize {
  xSmall?: string
  small: string
  normal: string
  medium: string
  large: string
  veryLarge?: string
  extraLarge?: string
}

export const mobile: Fontsize = {
  extraLarge: "3.25rem",
  veryLarge: "2.25rem",
  large: "2rem",
  medium: "1.25rem",
  normal: "1rem",
  small: "0.75rem",
  xSmall: "0.625rem",
}

export const desktop: Fontsize = {
  extraLarge: "clamp(4.25rem, 5.05vw, 4.75rem)",
  veryLarge: "clamp(3.5rem, 4vw, 3.75rem)",
  large: "clamp(2rem, 2.5vw, 3rem)",
  medium: "clamp(1.25rem, 1.5vw, 1.5rem)",
  normal: "clamp(0.935rem, 1.2vw, 1.125rem)",
  small: "clamp(0.75rem, 1.0vw, 0.935rem)",
  xSmall: "clamp(0.625rem, 1.1vw, 0.85rem)",
}
