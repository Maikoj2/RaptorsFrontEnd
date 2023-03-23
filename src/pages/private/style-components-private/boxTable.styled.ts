
import styled from 'styled-components'
import { Box } from '@mui/material'
interface BoxTableProps {
    $background: string
  }
export const BoxTable = styled(Box)<BoxTableProps>`
 backdrop-filter: blur(10px);
 background: ${(props:any) =>`linear-gradient(100deg, ${props.$background},${props.$background})`};
 border-radius: 2rem;
 box-shadow:'0 1rem 1.6rem 0 rgba(0, 0, 0, 0.502)';
`
