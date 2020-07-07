import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import * as mainStyle from '../assets/styles/main-style';

const Regular = (props) => {
  const { onPress, style, textStyle, text } = props;

  return (
    <TouchableOpacity onPress={onPress} style={{ ...mainStyle.button.default, ...style }}>
      <Text style={{ ...mainStyle.button.textDefault, ...textStyle }}>{text}</Text>
    </TouchableOpacity>
  );
};

const Dark = (props) => {
  const { onPress, style, textStyle, text } = props;

  return (
    <TouchableOpacity onPress={onPress} style={{ ...mainStyle.button.default, ...style }}>
      <Text style={{ ...mainStyle.button.textDefault, ...textStyle }}>{text}</Text>
    </TouchableOpacity>
  );
};

export { Regular, Dark };
