import React from 'react';
import { Text } from 'react-native';

const Light = (props) => {
  const { children, style } = props;

  return <Text style={{ fontWeight: '100', fontFamily: 'Arial', ...style }}>{children}</Text>;
};

const Regular = (props) => {
  const { children, style } = props;

  return <Text style={{ fontWeight: 'normal', fontFamily: 'Arial', ...style }}>{children}</Text>;
};

const Bold = (props) => {
  const { children, style } = props;

  return <Text style={{ fontWeight: 'bold', fontFamily: 'Arial', ...style }}>{children}</Text>;
};

export { Light, Regular, Bold };
