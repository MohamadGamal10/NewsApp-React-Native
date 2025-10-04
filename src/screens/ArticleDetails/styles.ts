import {StyleSheet} from 'react-native';



export default StyleSheet.create({
  safeContainer: {
    backgroundColor: '#fff',
    flex: 1,
  },
  container: {},
  header: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  backBtn: {
    backgroundColor: 'gold',
    alignSelf: 'flex-start',
    padding: 10,
    borderRadius: 10,
  },
  goBackText: {
    color: '#333',
  },
  coverImg: {
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  dataCont: {
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    // fontFamily: fonts.CairoBold,
    fontFamily: "CairoBold",
  },
  description: {
    // fontFamily: fonts.CairoLigh,
  },
  addTofavBtn: {
    backgroundColor: 'gold',
    padding: 10,
    marginTop: 10,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addToFavText: {
    color: '#000',
    // fontFamily: fonts.CairoBold,
  },
});