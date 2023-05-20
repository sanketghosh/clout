import { useRouter, useSearchParams } from "expo-router";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import users from "../../assets/data/users";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export default function ProfilePage() {
  const router = useRouter();
  const { handle } = useSearchParams();

  const goBackLinkHandler = () => {
    router.back();
  };

  const user = users.find((usr) => usr.handle === handle);

  if (!user) {
    return <Text>User Not Found</Text>;
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: user.coverImage }}
        style={styles.coverImage}
      >
        <View style={styles.overlay}></View>
        <SafeAreaView style={styles.topMostBar}>
          <Ionicons
            onPress={goBackLinkHandler}
            name="arrow-back-circle"
            size={30}
            color="#fff"
          />
          <View style={styles.topMostBarUserNameAndStats}>
            <Text style={styles.topMostBarUsername}>{user.name}</Text>
            <Text style={styles.topMostBarStats}>
              1.4K Posts • 64.6K Likes • 15.8K Followers
            </Text>
          </View>
          <Entypo name="dots-three-vertical" size={24} color="#fff" />
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  /* container: {
    flex: 1,
    padding: 10,
    paddingTop: 75,
    backgroundColor: "#fff",
  }, */

  coverImage: {
    height: 180,
    width: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#333",
    opacity: 0.5,
  },
  topMostBar: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    padding: 10,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  topMostBarUserNameAndStats: {
    display: "flex",
    gap: 3,
    alignItems: "center",
  },
  topMostBarUsername: {
    color: "#fff",
    fontSize: 20,
    fontWeight: 900,
  },
  topMostBarStats: {
    color: "#fff",
    fontSize: 12,
    fontWeight: 500,
  },
});
