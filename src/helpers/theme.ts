import { theme } from "antd";

export const lightTheme = {
  algorithm: theme.defaultAlgorithm,
  token: {
    colorPrimary: "#FF2149FF",
    wireframe: true,
  },
  components: {
    Slider: {
      colorFillContentHover: "rgba(0, 0, 0, 0.15)",
      colorPrimary: "#FF2149FF",
      colorPrimaryBorder: "#FF2149FF",
      colorPrimaryBorderHover: "#FF2149FF",
      colorFillTertiary: "rgba(0, 0, 0, 0.04)",
      colorBgElevated: "#FF2149FF",
      colorBorderSecondary: "#FF2149FF",
    },
    Button: {
      colorPrimary: "#3caefd",
      borderRadius: 8,
      controlHeightLG: 40,
      controlHeight: 50,
    },
    Message: {
      borderRadiusLG: 10,
      colorBgElevated: "#F5F5F5",
    },
  },
};
export const darkTheme = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: "#FF2149FF",
    wireframe: true,
  },
  components: {
    Slider: {
      colorFillContentHover: "rgba(0, 0, 0, 0.15)",
      colorPrimary: "#FF2149FF",
      colorPrimaryBorder: "#FF2149FF",
      colorPrimaryBorderHover: "#FF2149FF",
      colorFillTertiary: "rgba(0, 0, 0, 0.04)",
      colorBgElevated: "#FF2149FF",
      colorBorderSecondary: "#FF2149FF",
    },
    Button: {
      colorPrimary: "#3caefd",
      borderRadius: 8,
      controlHeightLG: 40,
      controlHeight: 50,
    },
    Message: {
      borderRadiusLG: 10,
      colorBgElevated: "#F5F5F5",
    },
  },
};
