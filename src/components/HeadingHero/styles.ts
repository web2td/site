import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.sizes.xlarge};
    font-weight: ${theme.font.weight.weight3};
    color: ${theme.colors.secondary};
    line-height: ${theme.font.lineHeight.default};

    transition: 0.5s;

    strong {
      font-weight: ${theme.font.weight.weight3};
      color: ${theme.colors.primary};
    }

    p {
      margin: 0;
    }

    ${media.greaterThan('medium')`
      font-size: ${theme.sizes.xxlarge};
    `}

    ${media.greaterThan('large')`
      font-size: ${theme.sizes.xxxlarge};
    `}

    ${media.greaterThan('huge')`
      margin: 1rem 0 3rem;
      font-size: 4rem;
    `}

    @media (min-width: 2500px) {
      margin: 1rem 0 3rem;
      font-size: 5rem;
    }
  `}
`
