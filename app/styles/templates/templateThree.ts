import { ThemeConfig } from "@/app/context/test";

export const getTemplateThreeStyles = (theme: ThemeConfig) => {
  return {
    heading: {
      section: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
       

      },

      name: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        // Specific margins
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 0,
   
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 0,
      },
      title: {
        fontSize: 28, // -1 or -2 px to visually match PDF size
        fontWeight: 700, // PDF "700" ≈ web "800"
        lineHeight: 1.15, // PDF text is tighter by default
        marginBottom: 6, // slightly larger to match PDF spacing
        textAlign: "start",
        letterSpacing: "-0.2px", // PDF tends to render tighter kerning
      },

      subTitle: {
        fontSize: 10, // visually aligns with PDF medium size
        fontWeight: 300, // PDF 'light' looks heavier than browser
        lineHeight: 1.15,
        marginBottom: 3,
        color: theme.secondaryColor, // slightly darker to match PDF rendering
        textAlign: "start",
        letterSpacing: "-0.1px",
      },
      contactSection: {
        display: "flex",
        flexDirection: "row",
      },

      contactRow: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space around",
        alignItems: "center",
        marginBottom: 5,
      },

      textContainer: {
        flexDirection: "column",
        // borderBottom: "1px solid",
        // borderColor: theme.borderColor,
        marginLeft: 10,
        marginRight: 10,
        // border: "2px solid blue",
      },

      iconText: {
        fontSize: 15, // Sets the icon size
        marginBottom: 5, // Spaces the icon from the text
        marginRight: 5,
        width: 15,
        color: theme.primaryColor,
        // border: "2px solid blue"
      },

      link: {
        fontSize: 10, // +1px to compensate for PDF thickness
        marginBottom: 2,
        textDecoration: "none",
        color: theme.primaryColor,
        lineHeight: 1.1,
      },

      contactText: {
        fontSize: 10,
        lineHeight: 1.1,
      },
    },
    experience: {
      section: {
        width: "100%",

        marginLeft:10,
        marginRight: 10,
        marginTop: 0,
        marginBottom: 10,
        // Specific paddings
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 0,
        paddingBottom: 0,
    
        // border: "2px solid red",
      },
      heading: {
        display: "flex",
        flexDirection: "row",
        borderBottom: "2px solid",
        borderColor: theme.borderColor,
        marginBottom: 5,
      },
      iconText: {
        marginRight: "5px",
        minWidth: "3px", // Width of the dot
        height: "3px", // Height must match width
        backgroundColor: theme.primaryColor,
        borderRadius: "50%", // Makes it perfectly round
        marginTop: "5px", // Centers it vertically with the first line of text
        flexShrink: 0, // Prevents the dot from squishing if text is long
      },
      title: {
        fontSize: theme.fontSizeTitle,
      
        fontWeight: 700,
        lineHeight: 1.5,
        color: theme.primaryColor,
        textAlign: "center",
      },
      experienceContainer: {
        marginBottom: 3,
      },
    
      positionTitleRow: {
        marginBottom: 2,
        display: "flex"
      },
      positionTitleText: {
        fontSize: theme.fontSizeContent,
        fontWeight: 700,
        color: theme.textColor,
      },
      positionCompanyAccent: {
        fontSize: theme.fontSizeContent,
        fontWeight: 500,
        color: theme.primaryColor, // Your accent color
      },
    
      text: {
        fontSize: theme.fontSizeContent,
        fontWeight: 400,
        color: theme.secondaryColor
        // marginBottom: 2,
      },
      dutyRow: {
        display: "flex",
        flexDirection: "row", // CRITICAL: Makes bullet and text go side-by-side
        // marginBottom: 3,
        marginLeft: 15,
      },
      dutyText: {
        display: "flex",
        flex: 1, // CRITICAL: Takes remaining space, forcing indent
        fontSize: 10,
      },
      bullet: {
        fontSize: 6, // Sets the icon size
        marginTop: 5,
        marginRight: 4,
        width: 6,
        color: theme.primaryColor,
      },
    },
    skills: {
      section: {
        width: "100%",

        marginLeft: 10,
        marginRight: 10,
        marginTop: 0,
        marginBottom: 10,
        // Specific paddings
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 0,
        paddingBottom: 0,
        // border: "2px solid red"

        // border: "2px solid red",
      },
      container: {
        marginBottom: 10,
        padding: 0,
      },
      heading: {
        display: "flex",
        flexDirection: "row",
        borderBottom: "2px solid",
        // alignItems: "center",
        borderColor: theme.borderColor,
        marginBottom: 5,
        // border: "2px solid red",
      },

      iconText: {
        fontSize: 15, // Sets the icon size
        // marginBottom: 4, // Spaces the icon from the text
        paddingTop: 2.8,
        marginRight: 5,
        width: 15, // Give it an explicit width for clean alignment
        color: theme.primaryColor,
      },
      title: {
        fontSize: theme.fontSizeTitle,
      
        fontWeight: 700,
        lineHeight: 1.5,
        color: theme.primaryColor,
        textAlign: "center",
      },

      contentContainer: {
        
        // border: "2px solid red"
      },

      skillItems: {
        display: "flex",
       

      
      },

      skillCategory: {
        display: "flex",
        fontSize: theme.fontSizeContent,
        fontWeight: 700,
        color: theme.textColor,
        
      },
      skillList: {
   
        marginLeft: 5,
        fontSize: theme.fontSizeContent,
        fontWeight: 400,
        color: theme.textColor
    
      }

    },
    education: {
      section: {
        width: "100%",


        marginLeft: 10,
        marginRight: 10,
        marginTop: 0,
        marginBottom: 0,
        // Specific paddings
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 0,
        paddingBottom: 0,
      },

      heading: {
        display: "flex",
        flexDirection: "row",
        borderBottom: "2px solid",
        borderColor: theme.borderColor,
        marginBottom: 5,
      },


      title: {
        fontSize: theme.fontSizeTitle,
      
        fontWeight: 700,
        lineHeight: 1.5,
        color: theme.primaryColor,
        textAlign: "center",
      },

      educationContainer: {
        marginBottom: 3,
      },

      titleRow: {
        marginBottom: 2,
        display: "flex"
      },

      schoolTitleText: {
        fontSize: 10,
        fontWeight: 700,
        color: theme.textColor,
        display: "inline"
      },

      text: {
        fontSize: 10,
        display: "inline",
        marginLeft: 4
        // marginBottom: 2,
      },

      aboutRow: {
        display: "flex",
        flexDirection: "row", // CRITICAL: Makes bullet and text go side-by-side
        // marginBottom: 3,
        marginLeft: 15,
      },
      aboutText: {
        display: "flex",
        flex: 1, // CRITICAL: Takes remaining space, forcing indent
        fontSize: 10,
      },

      textBullet: {
        fontSize: 6, // Sets the icon size
        marginTop: 5,
        marginRight: 4,
        width: 6,
        color: theme.primaryColor,
      },
    },
  };
};
