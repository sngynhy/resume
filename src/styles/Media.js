import { css } from "styled-components";

export const breakpoints = {
    small: '@media (max-width: 639px)',
    // medium: '@media (min-width: 640px and max-width: 1047px)',
    medium: '@media (max-width: 1047px)',
    large: '@media (min-width: 1048px)'
}

export const media = Object.entries(breakpoints).reduce((acc, [key, value]) => {
    return {
        ...acc,
        [key]: (first, ...interpolations) => {
            return css`
            ${value} {
                ${css(first, ...interpolations)}
            }`
        }
    }
}, {})