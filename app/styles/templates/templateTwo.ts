// styles/templates/modern.ts

import { ThemeConfig } from "@/app/context/test";

export const getTemplateTwoStyles = (theme: ThemeConfig ) => {
    
    return {
      heading: {
        section: {
            display: "flex",
            flexDirection: "row",
            // width: "100%",
            
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
          name: {
            display: "flex",
            flexDirection: "column",
            width: "100%",
            
        

            // border: "2px solid red"
          },
          title: {
            fontSize: theme.fontSizeName, // -1 or -2 px to visually match PDF size
            fontFamily: "JetBrains Mono",
            fontWeight: 800, // PDF "700" ≈ web "800"
            lineHeight: 1.15, // PDF text is tighter by default
            marginBottom: 6, // slightly larger to match PDF spacing
            textAlign: "start",
            letterSpacing: "-0.2px", // PDF tends to render tighter kerning
            color: theme.primaryColor
          }, 
          subTitle: {
            fontSize: theme.fontSizeSubName, // visually aligns with PDF medium size
            fontFamily: "JetBrains Mono",
            fontWeight: 300,  // PDF 'light' looks heavier than browser
            lineHeight: 1.15,
            marginBottom: 10,
            color: theme.secondaryColor, // slightly darker to match PDF rendering
            textAlign: "start",
            letterSpacing: "-0.1px",
          },
          contactSection: {
            display: "flex",
            flexDirection: "row",
            // width: "50%",
            // margin: 10,
            // marginTop: 0,
            // padding: 10,
            // paddingTop: 0,
            // paddingBottom: 0,
            // marginBottom: 0,

          
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
            borderBottom: "1px solid",
            borderColor: theme.borderColor,
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
            fontSize: theme.fontSizeContactText, // +1px to compensate for PDF thickness
            marginBottom: 2,
            textDecoration: "none",
            color: theme.primaryColor,
            lineHeight: 1.1,
          },
        
          contactText: {
            fontSize: theme.fontSizeContactText,
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
            fontFamily: "JetBrains Mono",
            fontWeight: 800,
            lineHeight: 1.5,
            color: theme.primaryColor,
            textAlign: "center",
          },
          experienceContainer: {
            marginBottom: 3,
          },
        
          positionTitleRow: {
            marginBottom: 2,
          },
          positionTitleText: {
            fontSize: theme.fontSizeContent,
            fontWeight: 700,
            color: theme.textColor,
          },
          positionCompanyAccent: {
            fontSize: theme.fontSizeContent,
            fontWeight: 700,
            color: theme.primaryColor, // Your accent color
          },
        
          text: {
            fontSize: theme.fontSizeContent,
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

            marginLeft:10,
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
            fontFamily: "JetBrains Mono",
            fontWeight: 800,
            lineHeight: 1.5,
            color: theme.primaryColor
            
          },
          ratingHeader: {
            display: "flex",
            flexDirection: "row",
            fontSize: 6,
            marginTop: 3,
            justifyContent: "flex-end",
          },
          blankSpace: {
            width: "50%",
          },
          ratingScale: {
            display: "flex",
            width: "50%",
            fontSize: 9,
            flexDirection: "row",
            justifyContent: "space-between",
          },
        
          skillGrid: {
            display: "grid",
            alignContent: "center",
            gridTemplateColumns: "repeat(3, 1fr)", // Creates 3 equal columns
            gap: "10px", // Space between items
            width: "100%",
          },
        
          skillItem: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            // border: "3px solid red",
            // margin: 3,
            // padding: 3,
            // alignContent: "center",
          },
        
          skillRating: {
            display: "flex",
            flexDirection: "row",
            fontSize: 8,
          },
        
          skillText: {
            fontSize: theme.fontSizeContent,
            fontWeight: 700,
            color: theme.textColor,
        
            marginTop: 5,
            paddingLeft: 0,
          },
        
          ratingIcon: {
            display: "flex",
            alignContent: "center",
            alignItems: "center",
            flexDirection: "row",
            marginTop: 5,
            width: "50%",
            justifyContent: "space-between",
          },
          skillIcon: {
            fontSize: 6, // Sets the icon size
            // Spaces the icon from the text
            width: 6,
          },
      },
      education: {
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
            // border: "2px solid red"
          },
        
          heading: {
            display: "flex",
            flexDirection: "row",
            borderBottom: "2px solid",
            borderColor: theme.borderColor,
            marginBottom: 5,
          },
          iconText: {
            fontSize: 15, // Sets the icon size
            // marginBottom: 4,
            paddingTop: 2.8, // Spaces the icon from the text
            marginRight: 5,
            width: 15, // Give it an explicit width for clean alignment
            color: theme.primaryColor,
          },
        
          title: {
            fontSize: theme.fontSizeTitle,
            color: theme.primaryColor,
            fontFamily: "JetBrains Mono",
            fontWeight: 800,
            lineHeight: 1.5,
          },
        
          container: {
            marginBottom: 3,
          },
        
          titleRow: {
            marginBottom: 2,
          },
        
          schoolTitleText: {
            fontSize: theme.fontSizeContent,
            fontWeight: 700,
            color: theme.textColor,
          },
        
          text: {
            fontSize: theme.fontSizeContent,
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
            fontSize: theme.fontSizeContent,
          },
        
          textBullet: {
            marginRight: "5px",
            minWidth: "3px", // Width of the dot
            height: "3px", // Height must match width
            backgroundColor: theme.primaryColor,
            borderRadius: "50%", // Makes it perfectly round
            marginTop: "5px", // Centers it vertically with the first line of text
            flexShrink: 0,
          },
      }
    };
  };