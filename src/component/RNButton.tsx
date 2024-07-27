import React from "react";
import { TouchableOpacity } from "react-native";

export type Props = {
  children: any;
  style?: any;
  numberOfLines?: number;
  onPress?: () => void;
};

const RNButton: React.FC<Props> = (props: Props) => {
  const { children, numberOfLines, style, onPress } = props;

  return (
    <TouchableOpacity
      activeOpacity={0.4}
      onPress={onPress}
      {...props}
      style={style}
    >
      {children}
    </TouchableOpacity>
  );
};

export default RNButton;
