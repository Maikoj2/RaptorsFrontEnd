import { ComponenOnpenOnDialog } from '@/pages/private/models/NamesTableToOpenDialog'

export const searchByKey = (atOpenedDialog: string) => {
  return ComponenOnpenOnDialog.find((res: any) => {
    if (res.key === atOpenedDialog) { return res }
  })
}
