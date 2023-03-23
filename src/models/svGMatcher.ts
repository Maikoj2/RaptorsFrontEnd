import { Error, Info, Success, warnning } from './svgUrl'
import { type typeWithKey } from './type-with-key'

export const svgMatcher = (matchesCode: any) => {
  const svgImage: typeWithKey<string> = {
    Success,
    Error,
    Warnning: warnning,
    Info
  }
  return svgImage[matchesCode]
}
export const bodercolorMatcher = (matchesCode: any) => {
  const colorImage: typeWithKey<string> = {
    Success: 'hsl(120, 67%, 74%)',
    Error: 'hsl(0, 67%, 74%)',
    Warnning: 'hsl(54, 67%, 74%)',
    Info: '#90dee9'
  }
  return colorImage[matchesCode]
}
