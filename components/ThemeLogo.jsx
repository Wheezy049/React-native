import { Image, useColorScheme } from 'react-native'
import DarkLogo from '../assets/img/vobb-dark.png'
import LightLogo from '../assets/img/vobb-light.png'

const ThemeLogo = ({ ...props }) => {
const colorScheme = useColorScheme()

const logo = colorScheme === 'dark' ? LightLogo : DarkLogo


  return (
      <Image source={logo} {...props} />
  )
}

export default ThemeLogo