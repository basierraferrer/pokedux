import React from "react";
import {
  IconLookup,
  IconDefinition,
  findIconDefinition,
  IconName,
  IconPrefix,
} from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FontIcon = ({
  iconName,
  prefix = "fas",
  className = "",
}: {
  iconName: IconName;
  prefix?: IconPrefix;
  className?: string;
}) => {
  const iconLookUp: IconLookup = { prefix, iconName };
  const iconDefinition: IconDefinition = findIconDefinition(iconLookUp);

  return <FontAwesomeIcon className={className} icon={iconDefinition} />;
};

export default FontIcon;
