import { Box } from '@mui/material'
import styled, { css, keyframes } from 'styled-components'

const AnimationSwin = css`
  @-moz-keyframes swing {
    0% {
      --swing-x: -100;
      --swing-y: -100;
    }
    50% {
      --swing-y: 0;
    }
    100% {
      --swing-y: -100;
      --swing-x: 100;
    }
  }
  @-webkit-keyframes swing {
    0% {
      --swing-x: -100;
      --swing-y: -100;
    }
    50% {
      --swing-y: 0;
    }
    100% {
      --swing-y: -100;
      --swing-x: 100;
    }
  }
  @-o-keyframes swing {
    0% {
      --swing-x: -100;
      --swing-y: -100;
    }
    50% {
      --swing-y: 0;
    }
    100% {
      --swing-y: -100;
      --swing-x: 100;
    }
  }
  @keyframes swing {
    0% {
      --swing-x: -100;
      --swing-y: -100;
    }
    50% {
      --swing-y: 0;
    }
    100% {
      --swing-y: -100;
      --swing-x: 100;
    }
  }
`

export const Box404 = styled(Box)`
    min-height: 100vh;
    display: flex;
    font-family: 'Roboto', sans-serif;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--bg);
    color: var(--color);
    perspective: 1200px;
`
export const Title404 = styled.h1`

    animation: ${AnimationSwin} var(--speed) infinite alternate ease-in-out;
    font-size: clamp(5rem, 40vmin, 20rem);
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    margin-bottom: 1rem;
    letter-spacing: 1rem;
    transform: translate3d(0, 0, 0vmin);
    --x: calc(50% + (var(--swing-x) * 0.5) * 1%);
    background: radial-gradient(var(--lit-header), var(--header) 45%) var(--x) 100%/200% 200%;
    -webkit-background-clip: text;
    color: transparent;
    transform-style: preserve-3d;
    
    &:after{
        animation: swing var(--speed) infinite alternate ease-in-out;
        content: "404";
        position: absolute;
        top: 0;
        left: 0;
        color: var(--shadow);
        filter: blur(1.5vmin);
        transform: scale(1.05) translate3d(0, 12%, -10vmin) translate(calc((var(--swing-x, 0) * 0.05) * 1%), calc((var(--swing-y) * 0.05) * 1%));
    }
    
`
export const CloakWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
    transform-style: preserve-3d;
`
export const CloakContainer = styled.div`
    height: 250vmax;
    width: 250vmax;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
`
export const Cloack = styled.div`
    animation: swing var(--speed) infinite alternate-reverse ease-in-out;
    height: 100%;
    width: 100%;
    transform-origin: 50% 30%;
    transform: rotate(calc(var(--swing-x) * -0.25deg));
    background: radial-gradient(40% 40% at 50% 42%, transparent, #000 35%);
    transform-style: preserve-3d;
`
export const BoxInfo = styled(Box)`
    text-align: center;
    line-height: 1.5;
    max-width: clamp(16rem, 90vmin, 25rem);
    transform-style: preserve-3d;

`
