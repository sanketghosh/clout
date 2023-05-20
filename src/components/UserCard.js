import {
  ImageBackground,
  View,
  Image,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";
import { Link } from "expo-router";

export default function UserCard({ user }) {
  return (
    <Link asChild href={`/user/${user.handle}`}>
      <Pressable>
        <ImageBackground
          source={{ uri: user.coverImage }}
          style={styles.userCard}
        >
          <View style={styles.overlayContainer}></View>
          {/* images  */}
          <Image src={user.avatar} style={styles.userImage} />
          {/* name and handle  */}
          <View style={styles.userDetails}>
            <Text style={styles.nameOfUser}>{user.name}</Text>
            <Text style={styles.handle}>@{user.handle}</Text>
          </View>
        </ImageBackground>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  userCard: {
    backgroundColor: "#333",
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    overflow: "hidden",
    marginVertical: 7,
    /* borderWidth: 2,
    borderColor: "#fff", */
  },
  overlayContainer: {
    position: "absolute",
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "black",
    opacity: 0.5,
  },
  userImage: {
    width: 100,
    height: 100,
    marginRight: 16,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "white",
  },
  userDetails: {
    marginBottom: 10,
  },
  nameOfUser: {
    maxWidth: 210,
    color: "#fff",
    fontWeight: 800,
    marginBottom: 2,
    fontSize: 17,
  },
  handle: {
    color: "#fff",
    fontSize: 12,
    fontWeight: 500,
  },
});
