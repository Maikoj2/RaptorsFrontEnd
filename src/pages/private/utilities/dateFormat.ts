export const dateformat = (isoDateString: string) => {
    const date = new Date(isoDateString)
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
  }