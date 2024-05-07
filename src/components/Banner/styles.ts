import { StyleSheet } from "react-native";
import appStyles from "../../styles/appStyles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  image: {
    width: appStyles.screen.width,
    height: 200,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

export default styles;
