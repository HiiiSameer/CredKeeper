import React from "react";
import { TextInput, KeyboardTypeOptions } from "react-native";

export type Props = {
  style?: any;
  numberOfLines?: number;
  isMultiline?: boolean;
  placeHolder?: string;
  inputValue?: string;
  editable?: boolean;
  secureTextEntry?: boolean;
  onChangeText?: (value: string) => void;
  keyboardType?: KeyboardTypeOptions;
};

const RNTextInput: React.FC<Props> = (props) => {
  const {
    numberOfLines,
    isMultiline,
    placeHolder,
    inputValue,
    onChangeText,
    editable,
    secureTextEntry,
    keyboardType,
    style,
  } = props;

  return (
    <TextInput
      editable={editable}
      keyboardType={keyboardType}
      placeholder={placeHolder}
      value={inputValue}
      onChangeText={onChangeText}
      multiline={isMultiline}
      secureTextEntry={secureTextEntry}
      style={style}
      {...props}
    />
  );
};

RNTextInput.defaultProps = {
  editable: true,
  secureTextEntry: false,
  keyboardType: "default",
};

export default RNTextInput;
