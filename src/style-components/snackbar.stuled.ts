import { MaterialDesignContent } from 'notistack'
import styled from 'styled-components'

export const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
  '&.notistack-MuiContent-success': {
    backgroundColor: '#2D7738'
  },
  '&.notistack-MuiContent-error': {
    backgroundColor: 'blue'
  }
}))
