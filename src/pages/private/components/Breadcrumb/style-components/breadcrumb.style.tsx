import styled, { css } from 'styled-components'

// Readable Style
const style = css`
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  list-style: none;
  background-color: transparent;
  border-radius: 0.5rem;
  li{
    font-size: 0.875rem
  }
  li + li{
    padding-left: 0.5rem;
  }
  li + li::before {
  float: left;
  padding-right: 0.5rem;
  color: #6c757d;
  content: var(--bs-breadcrumb-divider, "/");
}
`

export const BreadcrumbList = styled(({  children, ...rest }) => (
  <ol {...rest}>
    { children }
  </ol>
))`
  ${style}
`
export const Breadcrumbtitle = styled.h6`
font-weight: 700;
margin-bottom: 0
`