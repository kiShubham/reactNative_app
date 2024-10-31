import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{ tabBarActiveTintColor: "#f43f5e", headerShown: false }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "ForYou",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Account"
        options={{
          title: "account",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Explore"
        options={{
          title: "explore",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="y-combinator-square" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

/* import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, Slot } from "expo-router";

const _layout = () => (
  <SafeAreaView>
    <View>
      <Slot />
    </View>
    <View style={{ backgroundColor: "blue", display: "flex", gap: 10 }}>
      <Link href={"/"}>
        <Text>ForYou</Text>
      </Link>
      <Link href={"/Account"}>
        <Text>Account</Text>
      </Link>
      <Link href={"/Explore"}>
        <Text>Explore</Text>
      </Link>
    </View>
  </SafeAreaView>
);

export default _layout;

//<Slot/> here represent {children} like of react js
 */
