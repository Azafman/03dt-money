import 'styled-components'
import { defaultTheme } from '../styles/Themes/default'

type DefaultThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends DefaultThemeType {}
}
