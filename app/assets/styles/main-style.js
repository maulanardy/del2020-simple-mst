import { StyleSheet } from 'react-native';

export const main = StyleSheet.create({
  content: {
    backgroundColor: '#fafafa',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
});

export const button = StyleSheet.create({
  default: {
    backgroundColor: '#ae3333',
    padding: 10,
    borderRadius: 5,
    margin: 20,
    alignContent: 'center',
    alignSelf: 'stretch',
  },
  textDefault: {
    color: '#FFF',
    textAlign: 'center',
  },
});
