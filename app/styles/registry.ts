

import { getTemplateOneStyles } from "./templates/templateOne";
import { getTemplateTwoStyles } from "./templates/templateTwo";



export const templateRegistry = {
  templateTwo: getTemplateTwoStyles,
  templateOne: getTemplateOneStyles
 
};