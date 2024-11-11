import { ComponentOnpenOnDialog } from '@/pages/private/models/NamesTableToOpenDialog'

export const searchByKey = (atOpenedDialog: string) => {
  return ComponentOnpenOnDialog.find((res: any) => {
    if (res.key === atOpenedDialog) { return res }
  })
}
