import React from "react";
import {
  IconLookup,
  IconDefinition,
  findIconDefinition,
  IconName,
} from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FontIcon = ({ iconName }: { iconName: IconName }) => {
  const iconLookUp: IconLookup = { prefix: "fas", iconName };
  const iconDefinition: IconDefinition = findIconDefinition(iconLookUp);

  return <FontAwesomeIcon icon={iconDefinition} />;
};

export default FontIcon;
