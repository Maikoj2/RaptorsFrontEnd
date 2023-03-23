import { TypesSnackbar } from '@/components/SnackBAr/SnackBAr.Notitask'
import { type VariantType, enqueueSnackbar, type SnackbarMessage } from 'notistack'

export const SnackbarUtilities = {
  enqueueSnackbar (message: SnackbarMessage, variant: VariantType = 'default', Type: string) {
    enqueueSnackbar(message, { variant:variant , Type, persist: false })
  },
  customErrorMsg (message: SnackbarMessage, Type: string) {
    this.enqueueSnackbar(message, 'customErrorMsg', Type)
  }
}
