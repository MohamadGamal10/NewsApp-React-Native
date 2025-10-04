import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
  },
  listCont: {
    marginTop: 10,
    marginHorizontal: 10,
  },
  cardCount: {
    flexDirection: "row",
    // alignItems: "center",
    gap: 10,
    borderWidth: 1,
    borderColor: "red",
    paddingEnd: 10,
    borderRadius: 15,
    overflow: "hidden",
    marginBottom: 10,
  },
  cardArticleName: {
    textAlign: "left",
    flex: 1,
    marginTop: 10,
  },
  cardArticleImage: {
    width: 100,
    height: 100,
  },
});
