// styles/templates/modern.ts

export const getModernStyles = (theme: Record<string, React.CSSProperties> ) => {
    return {
      page: {
        padding: 30,
        fontFamily: theme.fontFamily || "Inter",
        backgroundColor: "#FFFFFF",
        color: theme.textColor || "#212121",
      },
      heading: {
        container: {
          flexDirection: "row", // Modern uses a side-by-side header
          justifyContent: "space-between",
          borderBottom: `2px solid ${theme.primaryColor}`,
          paddingBottom: 10,
          marginBottom: 20,
        },
        name: {
          fontSize: 32,
          fontWeight: 800,
          color: theme.primaryColor,
          textTransform: "uppercase" as const,
        },
        contactItem: {
          fontSize: 9,
          color: theme.secondaryColor || "#666",
        }
      },
      experience: {
        sectionTitle: {
          fontSize: 16,
          fontWeight: 700,
          color: theme.primaryColor,
          marginBottom: 8,
        },
        companyName: {
          fontSize: 11,
          fontWeight: 700,
        },
        bullet: {
          width: 4,
          height: 4,
          borderRadius: 2,
          backgroundColor: theme.primaryColor,
          marginTop: 4,
          marginRight: 6,
        },
        dutyText: {
          fontSize: 10,
          lineHeight: 1.4,
        }
      },
      skills: {
        grid: {
          flexDirection: "row" as const,
          flexWrap: "wrap" as const,
          gap: 10,
        },
        item: {
          padding: "4px 8px",
          borderRadius: 4,
          border: `1px solid ${theme.primaryColor}`,
          fontSize: 9,
        }
      }
    };
  };