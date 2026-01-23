import { IconData } from "@/app/data/iconMap";
import { SectionVisibilityState } from "@/app/types/styles";
import { DynamicDiv } from "../dynamicPdfWebComponents/dynamicDiv/DynamicDiv";
import { DynamicIcon } from "../dynamicPdfWebComponents/dynamicIcon/DynamicIcon";
import { Typography } from "../dynamicPdfWebComponents/typography/Typography";

interface SkillProps {
  globalVariant: string;
  title: string;
  icon: IconData;
  skillData: {
    skill: string;
    rating: number;
  }[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  skillStyle: any;
  ratingIcons?: IconData[];
  visibility?: SectionVisibilityState;
}

export const SkillsTwo = ({
  globalVariant,
  skillData,
  title,
  icon,
  skillStyle,
  ratingIcons,
  visibility,
}: SkillProps) => {
  return (
    <DynamicDiv variant={globalVariant} style={skillStyle.container}>
      <DynamicDiv variant={globalVariant} style={skillStyle.heading}>
        <Typography variant={globalVariant} style={skillStyle.title}>
          {title.toUpperCase()} 
        </Typography>
      </DynamicDiv>
      <DynamicDiv variant={globalVariant} style={skillStyle.skillGrid}>
        {skillData &&
          skillData.map((skill) => {
            if (!skill) return null;
            return (
              <DynamicDiv
                variant={globalVariant}
                key={skill.skill}
                style={skillStyle.skillItem}
              >
                <DynamicDiv
                  variant={globalVariant}
                  style={skillStyle.skillRating}
                >
                  <DynamicDiv
                    variant={globalVariant}
                    style={skillStyle.skillText}
                  >
                    <Typography webTag="h3" variant={globalVariant}>
                      {skill.skill}
                    </Typography>
                  </DynamicDiv>
                </DynamicDiv>
              </DynamicDiv>
            );
          })}
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
