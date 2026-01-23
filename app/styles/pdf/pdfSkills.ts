import { StyleSheet } from '@react-pdf/renderer';

export const skillStyleTwo = StyleSheet.create({
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
  container: {
    marginBottom: 7.5,
    padding: 0,
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

  // REPLACEMENT FOR GRID:
  skillGrid: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap", // Allows items to move to the next line
    width: "100%",
  },

  skillItem: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "33.3%", // Forces exactly 3 items per row
    marginBottom: 3.75, // Vertical gap replacement
  },

  skillRating: {
    flexDirection: "row",
    fontSize: 8,
  },

  skillText: {
    fontSize: 7.5, // 10 * 0.75
    color: "#004F7A",
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


export const pdfSkillStyles = StyleSheet.create({
  section: {
    width: "40%",
    // Web 10px -> PDF 7.5pt
    margin: 7.5,
    marginTop: 0,
    padding: 7.5,
    paddingTop: 0,
    paddingBottom: 0,
    marginBottom: 7.5,
  },

  container: {
    marginBottom: 7.5,
    padding: 0,
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