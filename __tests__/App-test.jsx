/**
 * @format
 */

import 'react-native';
import renderer from 'react-test-renderer';
import React from 'react';
import App from '../app/app';

it('renders correctly', () => {
  renderer.create(<App />);
});
