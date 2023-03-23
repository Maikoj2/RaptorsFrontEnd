import styled, { css } from 'styled-components'

export const Card = styled.div`
position: relative;
display: flex;
flex-direction: column;
min-width: 0;
color: black;
word-wrap: break-word;
background-clip: border-box;
border: 0 solid rgba(0, 0, 0, 0.125);
padding: 1.5rem;
margin: 0;
border-radius: 1.5rem;
${(props) => {
  switch (props.id) {
    case 'CardPlane':
      return css`
        background-color: transparent;
        box-shadow: none;
        margin-top: 8rem`
    case 'CardPdialog':
      return css`
        background-color: transparent;
        box-shadow: none;
        margin-top: 1rem;
        padding: 0.5rem`
    case 'CardError':
      return css`
        background-color: #fff;
      `
    default:
      return css`
      background-color: #fff;
      box-shadow: 0 20px 27px 0 rgba(0, 0, 0, 0.05);
      margin-top: 8rem
      `
  }
}
}
`
export const CardHeader = styled.div`
  padding: 1.5rem;
  padding-bottom: 0;
  margin-bottom: 0;
  background-color: transparet;
  border-bottom: 0 solid rgba(0, 0, 0, 0.125);
  &:first-child{
    border-radius: 1rem 1rem 0 0;
  }
`
export const CardBody = styled.div`
flex: 1 1 auto;
padding: 1rem 1rem;
`
export const CardFooter = styled.div`
padding: 0.5rem 1rem;
background-color: #fff;
border-top: 0 solid rgba(0, 0, 0, 0.125);
`

export const CartTitle = styled.h3`
font-weight: 700 !important;
color: #17c1e8;
background-image: linear-gradient(310deg,#154294,#0090D6);
background-clip: text;
 -webkit-background-clip: text; 
-webkit-text-fill-color: transparent;
position: relative;
z-index: 1;
`
