import { StyleSheet } from "@react-pdf/renderer";

export const headingStyleTwo = StyleSheet.create({
  headingSection: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 7.5,
  },

  headingName: {
    flexDirection: "column",
    width: "100%",
    margin: 10,
    marginTop: 0,
    padding: 10,
    paddingTop: 0,
    paddingBottom: 0,
    marginBottom: 0,
  },

  headerTitle: {
    fontSize: 34, // -1 or -2 px to visually match PDF size
    fontFamily: "JetBrains Mono",
    fontWeight: 700, // PDF "700" ≈ web "800"
    lineHeight: 1.15, // PDF text is tighter by default
    marginBottom: 4, // slightly larger to match PDF spacing
    textAlign: "left",
    letterSpacing: "-0.2px", // Use numbers, not strings for spacing in PDF
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
    flexDirection: "row",
    marginTop: 10,
    paddingTop: 0,
    paddingBottom: 0,
    marginBottom: 0,
  },

  contactRow: {
    flexDirection: "column",
    marginBottom: 5,
  },

  textContainer: {
    flexDirection: "column",
    borderBottomWidth: 1,
    borderBottomColor: "#B0BEC5",
    borderBottomStyle: "solid",
    marginRight: 10,
  },

  iconText: {
    fontSize: 15,
    marginBottom: 5,
    marginRight: 5,
    width: 15,
    color: "#004F7A",
  },

  link: {
    fontSize: 8, // +1px to compensate for PDF thickness
    marginBottom: 2,
    textDecoration: "none",
    color: "#004F7A",
  },

  contactText: {
    fontSize: 8,
    marginBottom: 10,
    lineHeight: 1.1,
  },
});

export const headingStyle = StyleSheet.create({
  headingSection: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 7.5,
    marginTop: 0,
  },

  headingName: {
    flexDirection: "column",
    width: "60%",
    margin: 7.5,
    marginTop: 0,
    padding: 7.5,
    paddingTop: 0,
    paddingBottom: 0,
    marginBottom: 0,
  },

  headerTitle: {
    fontSize: 34, // -1 or -2 px to visually match PDF size
    fontFamily: "JetBrains Mono",
    fontWeight: 700, // PDF "700" ≈ web "800"
    lineHeight: 1.15, // PDF text is tighter by default
    marginBottom: 4, // slightly larger to match PDF spacing
    textAlign: "left",
    letterSpacing: "-0.2px", // Use numbers, not strings for spacing in PDF
  },

  headerSubTitle: {
    fontSize: 7.5, // visually aligns with PDF medium size
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
    marginTop: 7.5,
    padding: 7.5,
    paddingTop: 0,
    paddingBottom: 0,
    marginBottom: 0,
  },

  contactRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },

  textContainer: {
    flexDirection: "column",
    borderBottomWidth: 1,
    borderBottomColor: "#B0BEC5",
    borderBottomStyle: "solid",
    marginRight: 10,
  },

  iconText: {
    fontSize: 11.25,
    marginBottom: 3.75,
    marginRight: 3.75,
    width: 11.25,
    color: "#004F7A",
  },

  link: {
    fontSize: 8, // +1px to compensate for PDF thickness
    marginBottom: 2,
    textDecoration: "none",
    color: "#004F7A",
  },

  contactText: {
    fontSize: 8,
    marginBottom: 10,
    lineHeight: 1.1,
  },


});
