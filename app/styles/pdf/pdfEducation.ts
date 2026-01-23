import { StyleSheet } from "@react-pdf/renderer";

export const educationStyles = StyleSheet.create({
  section: {
    width: "100%",
    // Web 10px -> PDF 7.5pt
    margin: 7.5,
    marginTop: 0,
    padding: 7.5,
    paddingTop: 0,
    paddingBottom: 0,
    marginBottom: 7.5,
  },

  heading: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 3.75, // 5 * 0.75
    // Split "2px solid" into PDF properties
    borderBottomWidth: 1.5,
    borderBottomColor: "#B0BEC5",
    borderBottomStyle: "solid",
  },
  iconText: {
    fontSize: 12, // Sets the icon size
    marginBottom: 5, // Spaces the icon from the text
    marginRight: 5,
    width: 12, // Give it an explicit width for clean alignment
  },

  title: {
    fontSize: 12.075, // 16.1 * 0.75
    fontFamily: "JetBrains Mono",
    // PDF Weight must be a registered string or specific number
    fontWeight: 700,
    // Web 1.5 -> PDF 1.125 (Scaled and adjusted for PDF leading)
    lineHeight: 1.5,
    textAlign: "center",
  },

  schoolTitleText: {
    fontSize: 7.5, // 10 * 0.75
    fontWeight: 700,
    color: "#212121",
  },

  aboutRow: {
    display: "flex",
    flexDirection: "row", // CRITICAL: Makes bullet and text go side-by-side
    // marginBottom: 3,
    marginLeft: 11.25,
  },
  aboutText: {
    display: "flex",
    flex: 1, // CRITICAL: Takes remaining space, forcing indent
    fontSize: 7.5,
  },

  text: {
    fontSize: 7.5,
  },
  textBullet: {
    width: 6, // 8 * 0.75
    fontSize: 6, // 8 * 0.75
    marginTop: 2, /// Ensures the circle stays a circle // Prevents the dot from squishing if text is long
  },
});


export const educationStylesTwo = StyleSheet.create({
  section: {
    width: "100%",
    // Web 10px -> PDF 7.5pt
    margin: 7.5,
    marginTop: 0,
    padding: 7.5,
    paddingTop: 0,
    paddingBottom: 0,
    marginBottom: 7.5,
  },

  heading: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 3.75, // 5 * 0.75
    // Split "2px solid" into PDF properties
    borderBottomWidth: 1.5,
    borderBottomColor: "#B0BEC5",
    borderBottomStyle: "solid",
  },
  iconText: {
    fontSize: 12, // Sets the icon size
    marginBottom: 5, // Spaces the icon from the text
    marginRight: 5,
    width: 12, // Give it an explicit width for clean alignment
  },

  title: {
    fontSize: 12.075, // 16.1 * 0.75
    fontFamily: "JetBrains Mono",
    // PDF Weight must be a registered string or specific number
    fontWeight: 700,
    // Web 1.5 -> PDF 1.125 (Scaled and adjusted for PDF leading)
    lineHeight: 1.5,
    textAlign: "center",
  },

  schoolTitleText: {
    fontSize: 7.5, // 10 * 0.75
    fontWeight: 700,
    color: "#212121",
  },

  aboutRow: {
    display: "flex",
    flexDirection: "row", // CRITICAL: Makes bullet and text go side-by-side
    // marginBottom: 3,
    marginLeft: 11.25,
  },
  aboutText: {
    display: "flex",
    flex: 1, // CRITICAL: Takes remaining space, forcing indent
    fontSize: 7.5,
  },

  text: {
    fontSize: 7.5,
  },
  textBullet: {
    marginRight: 4,
    width: 3, // minWidth is often treated as width in react-pdf
    height: 3,
    backgroundColor: "#004F7A",
    borderRadius: 1.5, // Half of width/height for a perfect circle
    marginTop: 3, // Align with the first line of text
    flexShrink: 0, // Ensures the circle stays a circle // Prevents the dot from squishing if text is long
  },
});
