import { createTheme } from 'anoa-react-native-theme'

export const BaseTheme = createTheme(
  {
    // define theme variables
    spacing:{
      normal: 24
    },
    colors:{
      background: "#FCB07E",
      text: "#fff"
    }
  },
  vars => ({
    // define theme styles
    screenContainer:{
      flex:1,
      padding: vars.spacing.normal // ini ambil dari atas spacing
    },
    background:{
      flex :1,
      backgroundColor: vars.colors.background, // ini ambil dari background
    }
  })
)
