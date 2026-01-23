import { StyleSheet } from "@react-pdf/renderer";

export const experienceStyleTwo = StyleSheet.create({
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
    marginRight: 4,
    width: 3, // minWidth is often treated as width in react-pdf
    height: 3,
    backgroundColor: "#004F7A",
    borderRadius: 1.5, // Half of width/height for a perfect circle
    marginTop: 3, // Align with the first line of text
    flexShrink: 0, // Ensures the circle stays a circle // Prevents the dot from squishing if text is long
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
  experienceContainer: {
    marginBottom: 2.25, // 3 * 0.75
  },
  positionTitleRow: {
    flexDirection: "row",
    marginBottom: 1.5, // 2 * 0.75
  },
  positionTitleText: {
    fontSize: 7.5, // 10 * 0.75
    fontWeight: 700,
    color: "#212121",
  },
  positionCompanyAccent: {
    fontSize: 7.5,
    fontWeight: 700,
    color: "#004F7A",
  },
  text: {
    fontSize: 7.5,
  },
  dutyRow: {
    flexDirection: "row",
    width: "100%",
    // Spacing between bullet points
    marginTop: 2,
    paddingLeft: 4.5, // 15 * 0.75
    paddingRight: 4.5,
  },
  dutyText: {
    flex: 1,
    fontSize: 7.5,
  },
  bullet: {
    marginRight: 4,
    width: 3, // minWidth is often treated as width in react-pdf
    height: 3,
    backgroundColor: "#004F7A",
    borderRadius: 1.5, // Half of width/height for a perfect circle
    marginTop: 3, // Align with the first line of text
    flexShrink: 0, // Ensures the circle stays a circle // Prevents the dot from squishing if text is long
  },
});

export const pdfExperienceStyles = StyleSheet.create({
  section: {
    width: "60%",
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
    fontSize: 11.25, // 15 * 0.75
    marginBottom: 3, // 4 * 0.75
    marginRight: 3.75,
    width: 11.25,
    color: "#004F7A",
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
  experienceContainer: {
    marginBottom: 2.25, // 3 * 0.75
  },
  positionTitleRow: {
    flexDirection: "row",
    marginBottom: 1.5, // 2 * 0.75
  },
  positionTitleText: {
    fontSize: 7.5, // 10 * 0.75
    fontWeight: 700,
    color: "#212121",
  },
  positionCompanyAccent: {
    fontSize: 7.5,
    fontWeight: 700,
    color: "#004F7A",
  },
  text: {
    fontSize: 7.5,
  },
  dutyRow: {
    flexDirection: "row",
    width: "100%",
    // Spacing between bullet points
    marginTop: 2,
    paddingLeft: 4.5, // 15 * 0.75
  },
  dutyText: {
    // Yoga requires flex: 1 for text to wrap correctly alongside a fixed-width bullet
    flex: 1,
    fontSize: 7.5,
    // Slightly higher than title for body readability
  },
  bullet: {
    // Fixed width ensures the "column" for the bullet remains constant
    width: 6, // 8 * 0.75
    fontSize: 6, // 8 * 0.75
    marginTop: 2, // Visual alignment adjustment
  },
});
