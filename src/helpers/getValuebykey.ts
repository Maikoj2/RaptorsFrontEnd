import { ComponentOnpenOnDialog } from '@/pages/private/models/NamesTableToOpenDialog'

export const searchByKey = (atOpenedDialog: string) => {
  return ComponentOnpenOnDialog.find((res: any) => {
    console.log(res);
    
    if (res.key === atOpenedDialog) { return res }
  })
}
