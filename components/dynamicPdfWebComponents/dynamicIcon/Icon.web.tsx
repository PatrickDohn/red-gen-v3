/* eslint-disable @typescript-eslint/no-explicit-any */
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const IconWeb = ({
  icon,
  style,
}: {
  icon: IconDefinition;
  style?: any;
}) => {
  return <FontAwesomeIcon icon={icon} style={style} />;
};
