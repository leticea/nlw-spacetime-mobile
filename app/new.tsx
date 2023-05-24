import { Text, TouchableOpacity, View } from "react-native";
import Icon from "@expo/vector-icons/Feather";

import NLWLogo from "../src/assets/nlw-spacetime-logo.svg";
import { Link } from "expo-router";

export default function NewMemory() {
  return (
    <View className="flex-1 px-8">
      <View className="flex-row items-center justify-between">
        <NLWLogo />

        <Link href="/memories" asChild>
          <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full bg-purple-500">
            <Icon name="arrow-left" size={16} color="#fff" />
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}
