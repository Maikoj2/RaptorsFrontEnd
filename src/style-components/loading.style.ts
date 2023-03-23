import styled, { keyframes } from 'styled-components'
const animate = keyframes`
0% {
    -moz-box-shadow: #EB7029 0 -30px 0 7px, #F8C814 0 -30px 0 7px, #F8C814 26px -15px 0 7px, #F8C814 26px 15px 0 7px, #F8C814 0 30px 0 7px, #F8C814 -26px 15px 0 7px, #F8C814 -26px -15px 0 7px;
    -webkit-box-shadow: #EB7029 0 -30px 0 7px, #F8C814 0 -30px 0 7px, #F8C814 26px -15px 0 7px, #F8C814 26px 15px 0 7px, #F8C814 0 30px 0 7px, #F8C814 -26px 15px 0 7px, #F8C814 -26px -15px 0 7px;
    box-shadow: #EB7029 0 -30px 0 7px, #F8C814 0 -30px 0 7px, #F8C814 26px -15px 0 7px, #F8C814 26px 15px 0 7px, #F8C814 0 30px 0 7px, #F8C814 -26px 15px 0 7px, #F8C814 -26px -15px 0 7px;
  }
  8.33% {
    -moz-box-shadow: #EB7029 26px -15px 0 7px, #F8C814 26px -15px 0 7px, #F8C814 26px -15px 0 7px, #F8C814 26px 15px 0 7px, #F8C814 0 30px 0 7px, #F8C814 -26px 15px 0 7px, #F8C814 -26px -15px 0 7px;
    -webkit-box-shadow: #EB7029 26px -15px 0 7px, #F8C814 26px -15px 0 7px, #F8C814 26px -15px 0 7px, #F8C814 26px 15px 0 7px, #F8C814 0 30px 0 7px, #F8C814 -26px 15px 0 7px, #F8C814 -26px -15px 0 7px;
    box-shadow: #EB7029 26px -15px 0 7px, #F8C814 26px -15px 0 7px, #F8C814 26px -15px 0 7px, #F8C814 26px 15px 0 7px, #F8C814 0 30px 0 7px, #F8C814 -26px 15px 0 7px, #F8C814 -26px -15px 0 7px;
  }
  16.67% {
    -moz-box-shadow: #EB7029 26px 15px 0 7px, #F8C814 26px 15px 0 7px, #F8C814 26px 15px 0 7px, #F8C814 26px 15px 0 7px, #F8C814 0 30px 0 7px, #F8C814 -26px 15px 0 7px, #F8C814 -26px -15px 0 7px;
    -webkit-box-shadow: #EB7029 26px 15px 0 7px, #F8C814 26px 15px 0 7px, #F8C814 26px 15px 0 7px, #F8C814 26px 15px 0 7px, #F8C814 0 30px 0 7px, #F8C814 -26px 15px 0 7px, #F8C814 -26px -15px 0 7px;
    box-shadow: #EB7029 26px 15px 0 7px, #F8C814 26px 15px 0 7px, #F8C814 26px 15px 0 7px, #F8C814 26px 15px 0 7px, #F8C814 0 30px 0 7px, #F8C814 -26px 15px 0 7px, #F8C814 -26px -15px 0 7px;
  }
  25% {
    -moz-box-shadow: #EB7029 0 30px 0 7px, #F8C814 0 30px 0 7px, #F8C814 0 30px 0 7px, #F8C814 0 30px 0 7px, #F8C814 0 30px 0 7px, #F8C814 -26px 15px 0 7px, #F8C814 -26px -15px 0 7px;
    -webkit-box-shadow: #EB7029 0 30px 0 7px, #F8C814 0 30px 0 7px, #F8C814 0 30px 0 7px, #F8C814 0 30px 0 7px, #F8C814 0 30px 0 7px, #F8C814 -26px 15px 0 7px, #F8C814 -26px -15px 0 7px;
    box-shadow: #EB7029 0 30px 0 7px, #F8C814 0 30px 0 7px, #F8C814 0 30px 0 7px, #F8C814 0 30px 0 7px, #F8C814 0 30px 0 7px, #F8C814 -26px 15px 0 7px, #F8C814 -26px -15px 0 7px;
  }
  33.33% {
    -moz-box-shadow: #EB7029 -26px 15px 0 7px, #F8C814 -26px 15px 0 7px, #F8C814 -26px 15px 0 7px, #F8C814 -26px 15px 0 7px, #F8C814 -26px 15px 0 7px, #F8C814 -26px 15px 0 7px, #F8C814 -26px -15px 0 7px;
    -webkit-box-shadow: #EB7029 -26px 15px 0 7px, #F8C814 -26px 15px 0 7px, #F8C814 -26px 15px 0 7px, #F8C814 -26px 15px 0 7px, #F8C814 -26px 15px 0 7px, #F8C814 -26px 15px 0 7px, #F8C814 -26px -15px 0 7px;
    box-shadow: #EB7029 -26px 15px 0 7px, #F8C814 -26px 15px 0 7px, #F8C814 -26px 15px 0 7px, #F8C814 -26px 15px 0 7px, #F8C814 -26px 15px 0 7px, #F8C814 -26px 15px 0 7px, #F8C814 -26px -15px 0 7px;
  }
  41.67% {
    -moz-box-shadow: #EB7029 -26px -15px 0 7px, #F8C814 -26px -15px 0 7px, #F8C814 -26px -15px 0 7px, #F8C814 -26px -15px 0 7px, #F8C814 -26px -15px 0 7px, #F8C814 -26px -15px 0 7px, #F8C814 -26px -15px 0 7px;
    -webkit-box-shadow: #EB7029 -26px -15px 0 7px, #F8C814 -26px -15px 0 7px, #F8C814 -26px -15px 0 7px, #F8C814 -26px -15px 0 7px, #F8C814 -26px -15px 0 7px, #F8C814 -26px -15px 0 7px, #F8C814 -26px -15px 0 7px;
    box-shadow: #EB7029 -26px -15px 0 7px, #F8C814 -26px -15px 0 7px, #F8C814 -26px -15px 0 7px, #F8C814 -26px -15px 0 7px, #F8C814 -26px -15px 0 7px, #F8C814 -26px -15px 0 7px, #F8C814 -26px -15px 0 7px;
  }
  50% {
    -moz-box-shadow: #EB7029 0 -30px 0 7px, #F8C814 0 -30px 0 7px, #F8C814 0 -30px 0 7px, #F8C814 0 -30px 0 7px, #F8C814 0 -30px 0 7px, #F8C814 0 -30px 0 7px, #F8C814 0 -30px 0 7px;
    -webkit-box-shadow: #EB7029 0 -30px 0 7px, #F8C814 0 -30px 0 7px, #F8C814 0 -30px 0 7px, #F8C814 0 -30px 0 7px, #F8C814 0 -30px 0 7px, #F8C814 0 -30px 0 7px, #F8C814 0 -30px 0 7px;
    box-shadow: #EB7029 0 -30px 0 7px, #F8C814 0 -30px 0 7px, #F8C814 0 -30px 0 7px, #F8C814 0 -30px 0 7px, #F8C814 0 -30px 0 7px, #F8C814 0 -30px 0 7px, #F8C814 0 -30px 0 7px;
  }
  58.33% {
    -moz-box-shadow: #EB7029 26px -15px 0 7px, #F8C814 0 -30px 0 7px, #F8C814 26px -15px 0 7px, #F8C814 26px -15px 0 7px, #F8C814 26px -15px 0 7px, #F8C814 26px -15px 0 7px, #F8C814 26px -15px 0 7px;
    -webkit-box-shadow: #EB7029 26px -15px 0 7px, #F8C814 0 -30px 0 7px, #F8C814 26px -15px 0 7px, #F8C814 26px -15px 0 7px, #F8C814 26px -15px 0 7px, #F8C814 26px -15px 0 7px, #F8C814 26px -15px 0 7px;
    box-shadow: #EB7029 26px -15px 0 7px, #F8C814 0 -30px 0 7px, #F8C814 26px -15px 0 7px, #F8C814 26px -15px 0 7px, #F8C814 26px -15px 0 7px, #F8C814 26px -15px 0 7px, #F8C814 26px -15px 0 7px;
  }
  66.67% {
    -moz-box-shadow: #EB7029 26px 15px 0 7px, #F8C814 0 -30px 0 7px, #F8C814 26px -15px 0 7px, #F8C814 26px 15px 0 7px, #F8C814 26px 15px 0 7px, #F8C814 26px 15px 0 7px, #F8C814 26px 15px 0 7px;
    -webkit-box-shadow: #EB7029 26px 15px 0 7px, #F8C814 0 -30px 0 7px, #F8C814 26px -15px 0 7px, #F8C814 26px 15px 0 7px, #F8C814 26px 15px 0 7px, #F8C814 26px 15px 0 7px, #F8C814 26px 15px 0 7px;
    box-shadow: #EB7029 26px 15px 0 7px, #F8C814 0 -30px 0 7px, #F8C814 26px -15px 0 7px, #F8C814 26px 15px 0 7px, #F8C814 26px 15px 0 7px, #F8C814 26px 15px 0 7px, #F8C814 26px 15px 0 7px;
  }
  75% {
    -moz-box-shadow: #EB7029 0 30px 0 7px, #F8C814 0 -30px 0 7px, #F8C814 26px -15px 0 7px, #F8C814 26px 15px 0 7px, #F8C814 0 30px 0 7px, #F8C814 0 30px 0 7px, #F8C814 0 30px 0 7px;
    -webkit-box-shadow: #EB7029 0 30px 0 7px, #F8C814 0 -30px 0 7px, #F8C814 26px -15px 0 7px, #F8C814 26px 15px 0 7px, #F8C814 0 30px 0 7px, #F8C814 0 30px 0 7px, #F8C814 0 30px 0 7px;
    box-shadow: #EB7029 0 30px 0 7px, #F8C814 0 -30px 0 7px, #F8C814 26px -15px 0 7px, #F8C814 26px 15px 0 7px, #F8C814 0 30px 0 7px, #F8C814 0 30px 0 7px, #F8C814 0 30px 0 7px;
  }
  83.33% {
    -moz-box-shadow: #EB7029 -26px 15px 0 7px, #F8C814 0 -30px 0 7px, #F8C814 26px -15px 0 7px, #F8C814 26px 15px 0 7px, #F8C814 0 30px 0 7px, #F8C814 -26px 15px 0 7px, #F8C814 -26px 15px 0 7px;
    -webkit-box-shadow: #EB7029 -26px 15px 0 7px, #F8C814 0 -30px 0 7px, #F8C814 26px -15px 0 7px, #F8C814 26px 15px 0 7px, #F8C814 0 30px 0 7px, #F8C814 -26px 15px 0 7px, #F8C814 -26px 15px 0 7px;
    box-shadow: #EB7029 -26px 15px 0 7px, #F8C814 0 -30px 0 7px, #F8C814 26px -15px 0 7px, #F8C814 26px 15px 0 7px, #F8C814 0 30px 0 7px, #F8C814 -26px 15px 0 7px, #F8C814 -26px 15px 0 7px;
  }
  91.67% {
    -moz-box-shadow: #EB7029 -26px -15px 0 7px, #F8C814 0 -30px 0 7px, #F8C814 26px -15px 0 7px, #F8C814 26px 15px 0 7px, #F8C814 0 30px 0 7px, #F8C814 -26px 15px 0 7px, #F8C814 -26px -15px 0 7px;
    -webkit-box-shadow: #EB7029 -26px -15px 0 7px, #F8C814 0 -30px 0 7px, #F8C814 26px -15px 0 7px, #F8C814 26px 15px 0 7px, #F8C814 0 30px 0 7px, #F8C814 -26px 15px 0 7px, #F8C814 -26px -15px 0 7px;
    box-shadow: #EB7029 -26px -15px 0 7px, #F8C814 0 -30px 0 7px, #F8C814 26px -15px 0 7px, #F8C814 26px 15px 0 7px, #F8C814 0 30px 0 7px, #F8C814 -26px 15px 0 7px, #F8C814 -26px -15px 0 7px;
  }
  100% {
    -moz-box-shadow: #EB7029 0 -30px 0 7px, #F8C814 0 -30px 0 7px, #F8C814 26px -15px 0 7px, #F8C814 26px 15px 0 7px, #F8C814 0 30px 0 7px, #F8C814 -26px 15px 0 7px, #F8C814 -26px -15px 0 7px;
    -webkit-box-shadow: #EB7029 0 -30px 0 7px, #F8C814 0 -30px 0 7px, #F8C814 26px -15px 0 7px, #F8C814 26px 15px 0 7px, #F8C814 0 30px 0 7px, #F8C814 -26px 15px 0 7px, #F8C814 -26px -15px 0 7px;
    box-shadow: #EB7029 0 -30px 0 7px, #F8C814 0 -30px 0 7px, #F8C814 26px -15px 0 7px, #F8C814 26px 15px 0 7px, #F8C814 0 30px 0 7px, #F8C814 -26px 15px 0 7px, #F8C814 -26px -15px 0 7px;
  }
`

// Here we create a component that will rotate everything we pass in over two seconds
export const LoadingStyle = styled.div`
  overflow: hidden;
    position: absolute;
    text-indent: -F8C8149px;
    top: 50%;
    left: 50%;
    margin: 0 auto;
    width: 7px;
    height: 7px;
    color: blue;
    background: transparent;
    border-radius: 100%;
    -moz-box-shadow: #EB7029 0 -30px 0 7px, #F8C814 26px -15px 0 7px, #F8C814 26px 15px 0 7px, #F8C814 0 30px 0 7px, #F8C814 0 30px 0 7px, #F8C814 0 30px 0 7px;
    -webkit-box-shadow: #EB7029 0 -30px 0 7px, #F8C814 26px -15px 0 7px, #F8C814 26px 15px 0 7px, #F8C814 0 30px 0 7px, #F8C814 0 30px 0 7px, #F8C814 0 30px 0 7px;
    box-shadow: #EB7029 0 -30px 0 7px, #F8C814 26px -15px 0 7px, #F8C814 26px 15px 0 7px, #F8C814 0 30px 0 7px, #F8C814 0 30px 0 7px, #F8C814 0 30px 0 7px;
    -moz-animation: ${animate} 5s infinite ease-in-out;
    -webkit-animation: ${animate} 5s infinite ease-in-out;
    animation: ${animate} 5s infinite ease-in-out;
    -moz-transform-origin: 50% 50%;
    -ms-transform-origin: 50% 50%;
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
`
