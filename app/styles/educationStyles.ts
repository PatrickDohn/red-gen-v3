export const educationStyles: Record<string, React.CSSProperties> = {
  educationSection: {
    width: "100%",
    margin: 10,
    marginTop: 0,
    padding: 10,
    paddingTop: 0,
    paddingBottom: 0,
    marginBottom: 10,
  },

  heading: {
    display: "flex",
    flexDirection: "row",
    borderBottom: "2px solid",
    borderColor: "#B0BEC5",
    marginBottom: 5,
  },
  iconText: {
    fontSize: 15, // Sets the icon size
    // marginBottom: 4,
    paddingTop: 2.8, // Spaces the icon from the text
    marginRight: 5,
    width: 15, // Give it an explicit width for clean alignment
    color: "#004F7A",
  },

  title: {
    fontSize: 16.1,
    fontFamily: "JetBrains Mono",
    fontWeight: 800,
    lineHeight: 1.5,
  },

  educationContainer: {
    marginBottom: 3,
  },

  titleRow: {
    marginBottom: 2,
  },

  schoolTitleText: {
    fontSize: 10,
    fontWeight: 700,
    color: "#212121",
  },

  text: {
    fontSize: 10,
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
    color: "#004F7A",
  },
};

export const educationStylesTwo: Record<string, React.CSSProperties> = {
  educationSection: {
    width: "100%",
    margin: 10,
    marginTop: 0,
    padding: 10,
    paddingTop: 0,
    paddingBottom: 0,
    marginBottom: 10,
  },

  heading: {
    display: "flex",
    flexDirection: "row",
    borderBottom: "2px solid",
    borderColor: "#B0BEC5",
    marginBottom: 5,
  },
  iconText: {
    fontSize: 15, // Sets the icon size
    // marginBottom: 4,
    paddingTop: 2.8, // Spaces the icon from the text
    marginRight: 5,
    width: 15, // Give it an explicit width for clean alignment
    color: "#004F7A",
  },

  title: {
    fontSize: 16.1,
    fontFamily: "JetBrains Mono",
    fontWeight: 800,
    lineHeight: 1.5,
  },

  educationContainer: {
    marginBottom: 3,
  },

  titleRow: {
    marginBottom: 2,
  },

  schoolTitleText: {
    fontSize: 10,
    fontWeight: 700,
    color: "#212121",
  },

  text: {
    fontSize: 10,
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
    marginRight: "5px",
    minWidth: "3px", // Width of the dot
    height: "3px", // Height must match width
    backgroundColor: "#004F7A",
    borderRadius: "50%", // Makes it perfectly round
    marginTop: "5px", // Centers it vertically with the first line of text
    flexShrink: 0,
  },
};
