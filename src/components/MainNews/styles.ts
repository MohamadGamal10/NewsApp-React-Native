import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginHorizontal: 20,
    borderRadius: 20,
    overflow: 'hidden',
    width: 300,
    height: 250,
  },
  whiteCont: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 10,
    marginTop: 100,
    marginBottom: 20,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  redCont: {
    backgroundColor: 'red',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  deadlineText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  name: {
    color: 'black',
    marginTop: 10,
  },
  listContainer: {
    marginTop: 20,
  },
});