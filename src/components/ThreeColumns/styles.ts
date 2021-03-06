import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 10rem 0;

    background-color: ${theme.colors.bgLight};

    .theContainer {
      padding-top: 0;
      padding-bottom: 0;

      .col {
        margin-bottom: 6rem;
      }

      .icon {
        margin-bottom: 3rem;

        display: flex;
        justify-content: center;
        align-items: center;

        span {
          width: 6rem;
          height: 6rem;

          display: flex;
          justify-content: center;
          align-items: center;

          border-radius: 50%;

          background: ${theme.colors.gradients.primary};

          img {
            width: 4rem;
          }
        }
      }

      .title {
        margin-bottom: 3rem;

        text-align: center;
        color: ${theme.colors.secondary};
      }
    }

    p {
      margin-bottom: 1rem;
    }

    ${media.greaterThan('large')`
      .theContainer {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr;
        grid-gap: 5rem;

        .col {
          margin-bottom: 0;
        }

        .title {
          margin-bottom: 3rem;
        }
      }
    `}
  `}
`
