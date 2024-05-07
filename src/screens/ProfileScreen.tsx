import { Text, View } from "react-native";

export const ProfileScreen = ({ route }: any) => {
  return (
    <View>
      <Text>This is {route.params.name}'s profile</Text>
    </View>
  );
};
