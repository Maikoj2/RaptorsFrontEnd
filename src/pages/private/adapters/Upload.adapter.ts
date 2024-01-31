
interface apiUpload {
    ok: boolean, message: string, Data: string
}

export const upLoadAdapter = (resp: apiUpload): string =>  resp.Data

