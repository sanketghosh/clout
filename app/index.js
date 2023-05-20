import { FlatList, StyleSheet, View } from "react-native";
import users from "../assets/data/users";
import { UserCard } from "../src/components";

export default function Page() {
  function renderCard({ item }) {
    return <UserCard user={item} key={item.id} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={renderCard}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 75,
    backgroundColor: "#fff",
  },
});
