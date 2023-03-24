import styled, { css } from 'styled-components'

export const Layout = styled.div`
overflow: hidden ;
overflow-anchor: none;
-ms-overflow-style: none;
touch-action: auto;
-ms-touch-action: auto;
margin-top: 0;
transition: all 0.2s ease-in-out;

`

export const Row = styled.div`
--bs-gutter-x: 1.5rem;
--bs-gutter-y: 0;
display: flex;
flex-wrap: wrap;
margin-top: calc(-1 * var(--bs-gutter-y));
margin-right: calc(-.5 * var(--bs-gutter-x));
margin-left: calc(-.5 * var(--bs-gutter-x));

`

interface CartLayoutprops{
    width$: string;
}
export const CartLayout = styled.div<CartLayoutprops>`
display: flex;
margin-right: auto ;
margin-left: auto ;
flex-direction: column;
@media (min-width: 1200px) {
    flex: 0 0 auto;
    width: 33.333333%;
}
@media (min-width: 992px) {
    flex: 0 0 auto;
    width: 41.666667%;
}
@media (min-width: 768px) {
    flex: 0 0 auto;
    width: ${(props: any) => props.width$|| '50%'} ;
}
`

export const Container = styled.div`
z-index: 1;
  width: 100%;
  padding-right: var(--bs-gutter-x, 1.5rem);
  padding-left: var(--bs-gutter-x, 1.5rem);
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 2rem;

  @media (min-width: 576px) {
      max-width: 540px;
  }
  @media (min-width: 768px) {  
      max-width: 720px;
  }
  @media (min-width: 992px) {
      max-width: 960px;
  }
  @media (min-width: 1200px) {
      max-width: 1140px;
  }
  @media (min-width: 1400px) {
      max-width: 1320px;
  }

`
export const ContainerFluid = styled.div`
  width: 100%;
  padding-right: var(--bs-gutter-x, 1.5rem);
  padding-left: var(--bs-gutter-x, 1.5rem);
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 576px) {
      max-width: 540px;
  }
  @media (min-width: 768px) {  
      max-width: 720px;
  }
  @media (min-width: 992px) {
      max-width: 960px;
  }
  @media (min-width: 1200px) {
      max-width: 1140px;
  }
  @media (min-width: 1400px) {
      max-width: 1320px;
  }

`
