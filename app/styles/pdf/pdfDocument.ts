import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    paddingTop: 16,
    paddingBottom: 8,
    paddingLeft: 12,
    paddingRight: 12,
    fontFamily: "Inter",
    fontWeight: 400,
    color: "#212121",

    // borders
    borderTop: "8px solid #B0BEC5",
    borderBottom: "10px solid #B0BEC5",
    borderTopLeftRadius: "50px",
    borderBottomRightRadius: "50px",

    overflow: "hidden",
  },
});
