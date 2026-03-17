import { IconData } from "@/app/data/iconMap";
import { SkillLists } from "@/app/types/resume-data";
import { SectionVisibilityState } from "@/app/types/styles";
import { toTitleCase } from "@/lib/utils";
import { DynamicDiv } from "../dynamicPdfWebComponents/dynamicDiv/DynamicDiv";
import { DynamicIcon } from "../dynamicPdfWebComponents/dynamicIcon/DynamicIcon";
import { Typography } from "../dynamicPdfWebComponents/typography/Typography";

interface SkillProps {
  globalVariant: string;
  title: string;
  icon: IconData;
  skillData: SkillLists[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  skillStyle: any;
  ratingIcons?: IconData[];
  visibility?: SectionVisibilityState;
}

export const SkillsThree = ({
  globalVariant,
  skillData,
  title,
  icon,
  skillStyle,
  ratingIcons,
  visibility,
}: SkillProps) => {
  const groupedSkills = skillData.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof skillData>);
  return (
    <DynamicDiv variant={globalVariant} style={skillStyle.container}>
      <DynamicDiv variant={globalVariant} style={skillStyle.heading}>
        <Typography variant={globalVariant} style={skillStyle.title}>
          {title.toUpperCase()}
        </Typography>
      </DynamicDiv>
      <DynamicDiv variant={globalVariant} style={skillStyle.contentContainer}>
        {Object.entries(groupedSkills).map(([category, skills]) => (
          <DynamicDiv
            variant={globalVariant}
            key={category}
            style={skillStyle.skillItems}
          >
            <Typography
              variant={globalVariant}
              style={skillStyle.skillCategory}
            >
              {toTitleCase(category)}:
            </Typography>
            <DynamicDiv variant={globalVariant} style={skillStyle.skillList}>
              {skills.map(({ skill }, index) => (
                <Typography
                  variant={globalVariant}
                  key={skill}
                  style={{ display: "inline" }}
                >
                  {index < skills.length - 1 ? `${skill}, ` : skill}
                </Typography>
              ))}
            </DynamicDiv>
          </DynamicDiv>
        ))}
      </DynamicDiv>
    </DynamicDiv>
  );
};

export const rating_map = (
  num: number,
  variant: string,
  ratingIcons: IconData[]
) => {
  // Ensure the input number is valid (0 to 7)
  const rating = Math.min(7, Math.max(0, num));

  // Use Array.from to create an array of length 5 to loop over
  return Array.from({ length: 7 }, (_, i) => {
    // The index 'i' is 0-indexed (0, 1, 2, 3, 4, 5, 6).
    // We check if the current index (i) is less than the rating (num).
    // If num=3:
    //   i=0: 0 < 3 (true -> Filled)
    //   i=1: 1 < 3 (true -> Filled)
    //   i=2: 2 < 3 (true -> Filled)
    //   i=3: 3 < 3 (false -> Outlined)
    //   i=4: 4 < 3 (false -> Outlined)
    const isFilled = i < rating;
    // Select the correct style map based on the condition
    const ratingIconData = isFilled ? ratingIcons[0] : ratingIcons[1];

    return (
      <DynamicIcon
        variant={variant}
        key={i}
        icon={ratingIconData}
        style={{
          fontSize: 6, // Sets the icon size
          //   marginTop: 1,
          //   marginRight: 4,
          width: 6,
          color: "#004F7A",
        }}
      />
    );
  });
};
