// Here is where you can declare global theme styles, such as color pallettes.
export interface Theme {
  colors: {
    primary: string
    secondary: string
    highlight: string
    alternate: string
    mellow: string
  }
}

export const theme: Theme = {
  colors: {
    primary: '#FC646A',
    secondary: '#5A5B5C',
    highlight: '#F8C329',
    alternate: '#98D4D7',
    mellow: '#E3EBE3',
  },
}
