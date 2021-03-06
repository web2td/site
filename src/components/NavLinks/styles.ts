import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.ul`
  list-style: none;
`

export const NavItem = styled.li`
  ${({ theme }) => css`
    margin: ${theme.sizes.medium};
    padding: ${theme.sizes.xxsmall} ${theme.sizes.tiny};

    display: block;

    position: relative;

    text-align: center;

    ${media.greaterThan('large')`
      margin: ${theme.sizes.xsmall} ${theme.sizes.large};

      display: inline-block;
    `}
  `}
`

export const NavLink = styled.a`
  ${({ theme }) => css`
    display: block;

    font-size: ${theme.sizes.large};
    font-weight: ${theme.font.weight.weight3};
    text-decoration: none;
    text-transform: uppercase;
    color: ${theme.colors.secondary};

    cursor: pointer;

    ::after {
      content: '';
      width: 100%;
      height: 0.4rem;

      position: absolute;
      bottom: 0;
      left: 0;

      transform: scaleX(0);

      background-color: ${theme.colors.primary};

      transition: 0.5s ease-in-out;
    }

    :hover,
    &.active {
      ::after {
        transform: scaleX(1);
      }
    }

    ${media.greaterThan('large')`
      font-size: ${theme.sizes.small};

      ::after {
        height: 0.2rem;
      }
    `}
  `}
`
