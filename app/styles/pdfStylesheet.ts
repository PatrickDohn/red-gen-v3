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

export const headingStyle = StyleSheet.create({
  headingSection: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 7.5,
    // border: "2px solid red",
  },

  headingName: {
    flexDirection: "column",
    width: "60%",
    margin: 8,
    marginTop: 0,
    padding: 8,
    paddingTop: 0,
    paddingBottom: 0,
    marginBottom: 0,
    // border: "2px solid red",
  },
  headerTitle: {
    fontSize: 34, // -1 or -2 px to visually match PDF size
    fontFamily: "JetBrains Mono",
    fontWeight: 700, // PDF "700" ≈ web "800"
    lineHeight: 1.15, // PDF text is tighter by default
    marginBottom: 4, // slightly larger to match PDF spacing
    textAlign: "left",
    letterSpacing: "-0.2px", // PDF tends to render tighter kerning
  },

  headerSubTitle: {
    fontSize: 10, // visually aligns with PDF medium size
    fontFamily: "JetBrains Mono",
    fontWeight: 100,
    lineHeight: 1.15,
    marginBottom: 1,
    color: "#9FA6AC", // slightly darker to match PDF rendering
    textAlign: "left",
    letterSpacing: "-0.1px",
  },
  contactSection: {
    flexDirection: "column",
    width: "40%",
    margin: 8,
    marginTop: 0,
    padding: 8,
    paddingTop: 0,
    paddingBottom: 0,
    marginBottom: 0,
    justifyContent: "space-around",
  },

  contactRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 3,
    // border: "2px solid red",
  },

  textContainer: {
    flexDirection: "column",
    borderBottomWidth: 1,
    borderBottomColor: "#B0BEC5",
    borderBottomStyle: "solid",

    marginLeft: 8,
    // border: "2px solid blue",
  },

  iconText: {
    fontSize: 12, // Sets the icon size
    marginBottom: 3, // Spaces the icon from the text
    marginRight: 3,
    width: 12,
    // border: "2px solid blue"
  },

  link: {
    fontSize: 8, // +1px to compensate for PDF thickness
    marginBottom: 2,
    textDecoration: "none",
    color: "#004F7A",
  },

  contactText: {
    fontSize: 8,
    marginBottom: 4,
  },
});

export const pdfExperienceStyles = StyleSheet.create({
  experienceSection: {
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

export const pdfSkillStyles = StyleSheet.create({
  skillSection: {
    width: "40%",
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
    marginBottom: 3.75, // 4 * 0.75
    marginRight: 3.75, // 5 * 0.75
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
  ratingHeader: {
    flexDirection: "row",
    fontSize: 4.5, // 6 * 0.75
    marginTop: 2.25, // 3 * 0.75
    justifyContent: "flex-end",
  },
  blankSpace: {
    width: "50%",
  },
  ratingScale: {
    width: "50%",
    fontSize: 6.75, // 9 * 0.75
    flexDirection: "row",
    justifyContent: "space-between",
  },
  skillItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  skillRating: {
    flexDirection: "row",
    fontSize: 6, // 8 * 0.75
  },
  skillText: {
    fontSize: 7.5, // 10 * 0.75
    color: "#212121",
    width: "50%",
    marginTop: 3.75, // 5 * 0.75
    // lineHeight: 1.125, // Matched to title scale
  },
  ratingIcon: {
    alignItems: "flex-start",
    flexDirection: "row",
    marginTop: 3.75, // 5 * 0.75
    width: "50%",
    justifyContent: "space-between",
  },
  skillIcon: {
    fontSize: 4.5, // 6 * 0.75
    width: 4.5,
  },
});
