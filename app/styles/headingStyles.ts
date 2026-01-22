export const headingStyle: Record<string, React.CSSProperties> = {
    headingSection: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      marginBottom: 10,
      marginTop: 0
      // border: "2px solid red",
    },
  
    headingName: {
      display: "flex",
      flexDirection: "column",
      width: "60%",
      margin: 10,
      marginTop: 0,
      padding: 10,
      paddingTop: 0,
      paddingBottom: 0,
      marginBottom: 0,
      // border: "2px solid red"
    },
    headerTitle: {
      fontSize: 36, // -1 or -2 px to visually match PDF size
      fontFamily: "JetBrains Mono",
      fontWeight: 800, // PDF "700" ≈ web "800"
      lineHeight: 1.15, // PDF text is tighter by default
      marginBottom: 6, // slightly larger to match PDF spacing
      textAlign: "start",
      letterSpacing: "-0.2px", // PDF tends to render tighter kerning
    },
  
    headerSubTitle: {
      fontSize: 12, // visually aligns with PDF medium size
      fontFamily: "JetBrains Mono",
      fontWeight: 300,  // PDF 'light' looks heavier than browser
      lineHeight: 1.15,
      marginBottom: 3,
      color: "#9FA6AC", // slightly darker to match PDF rendering
      textAlign: "start",
      letterSpacing: "-0.1px",
    },
    contactSection: {
      display: "flex",
      flexDirection: "column",
      width: "40%",
      margin: 10,
      marginTop: 0,
      padding: 10,
      paddingTop: 0,
      paddingBottom: 0,
      marginBottom: 0,
      justifyContent: "space-around",
      // border: "2px solid red"
    },
  
    contactRow: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 5,
    },
  
    textContainer: {
      flexDirection: "column",
      borderBottom: "1px solid #B0BEC5",
      marginLeft: 10,
      // border: "2px solid blue",
    },
  
    iconText: {
      fontSize: 15, // Sets the icon size
      marginBottom: 5, // Spaces the icon from the text
      marginRight: 5,
      width: 15,
      color: "#004F7A",
      // border: "2px solid blue"
    },
  
    link: {
      fontSize: 10, // +1px to compensate for PDF thickness
      marginBottom: 2,
      textDecoration: "none",
      color: "#004F7A",
      lineHeight: 1.1,
    },
  
    contactText: {
      fontSize: 10,
      lineHeight: 1.1,
    },
  };

  export const headingStyleTwo: Record<string, React.CSSProperties> = {
    headingSection: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      marginBottom: 10,
      marginTop: 0,
      // border: "2px solid red",
    
    },
  
    headingName: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      margin: 10,
      marginTop: 0,
      padding: 10,
      paddingTop: 0,
      paddingBottom: 0,
      marginBottom: 0,
      // border: "2px solid red"
    },
    headerTitle: {
      fontSize: 36, // -1 or -2 px to visually match PDF size
      fontFamily: "JetBrains Mono",
      fontWeight: 800, // PDF "700" ≈ web "800"
      lineHeight: 1.15, // PDF text is tighter by default
      marginBottom: 6, // slightly larger to match PDF spacing
      textAlign: "start",
      letterSpacing: "-0.2px", // PDF tends to render tighter kerning
    },
  
    headerSubTitle: {
      fontSize: 12, // visually aligns with PDF medium size
      fontFamily: "JetBrains Mono",
      fontWeight: 300,  // PDF 'light' looks heavier than browser
      lineHeight: 1.15,
      marginBottom: 10,
      color: "#9FA6AC", // slightly darker to match PDF rendering
      textAlign: "start",
      letterSpacing: "-0.1px",
    },
    contactSection: {
      display: "flex",
      flexDirection: "row",
      // width: "50%",
      // margin: 10,
      marginTop: 0,
      // padding: 10,
      paddingTop: 0,
      paddingBottom: 0,
      marginBottom: 0,
      // justifyContent: "space-around",
      // border: "2px solid red"
    },
  
    contactRow: {
      display: "flex",
      flexDirection: "row",
      // alignItems: "center",
      marginBottom: 5,
      //  border: "2px solid blue",
    },
  
    textContainer: {
      flexDirection: "row",
      borderBottom: "1px solid #B0BEC5",
      marginRight: 10
      // border: "2px solid blue",
    },
  
    iconText: {
      fontSize: 15, // Sets the icon size
      marginBottom: 5, // Spaces the icon from the text
      marginRight: 5,
      width: 15,
      color: "#004F7A",
      // border: "2px solid blue"
    },
  
    link: {
      fontSize: 8, // +1px to compensate for PDF thickness
      marginBottom: 2,
      textDecoration: "none",
      color: "#004F7A",
      lineHeight: 1.1,
    },
  
    contactText: {
      fontSize: 8,
      lineHeight: 1.1,
    },
  };