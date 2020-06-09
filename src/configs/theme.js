const Default = {
    fonts: [
      [
        "SignikaNegative-Bold",
        "SignikaNegative-Light",
        "SignikaNegative-Regular",
        "SignikaNegative-SemiBold",
      ],
      [
        "JosefinSans-Bold",
        "JosefinSans-BoldItalic",
        "JosefinSans-Italic",
        "JosefinSans-Light",
        "JosefinSans-LightItalic",
        "JosefinSans-Regular",
        "JosefinSans-SemiBold",
        "JosefinSans-SemiBoldItalic",
        "JosefinSans-Thin",
        "JosefinSans-ThinItalic",
      ],
    ],
    colors: {
      primary: "#212244",
      secondary: "#8835F4"
    },
    gradients: {
      btn: {
        colors: ["#8835F4", "#5B0EC0"],
        start: { x: 0, y: 1 },
        end: { x: 1, y: 1 },
      },
    }
}

export const Theme = {...Default};