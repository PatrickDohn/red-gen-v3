import { StyleSheet } from "@react-pdf/renderer";

export const experienceStyleTwo = StyleSheet.create({
  experienceSection: {
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
    paddingRight: 4.5
  },
  dutyText: {
    flex: 1,
    fontSize: 7.5,
  },
  bullet: {
    fontSize: 6,
    marginTop: 5, // Manual adjustment to center bullet with first line of text
    marginRight: 4,
    width: 6,
    color: "#004F7A",
  },
});
