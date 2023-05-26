import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Icon from "@expo/vector-icons/Feather";
import * as SecureStore from "expo-secure-store";

import NLWLogo from "../src/assets/nlw-spacetime-logo.svg";
import { Link, useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function NewMemory() {
  const { bottom, top } = useSafeAreaInsets();
  const router = useRouter();

  async function signOut() {
    await SecureStore.deleteItemAsync("token");

    router.push("/");
  }

  return (
    <ScrollView
      className="flex-1"
      contentContainerStyle={{ paddingBottom: bottom, paddingTop: top }}
    >
      <View className="mt-4 flex-row items-center justify-between px-8">
        <NLWLogo />

        <View className="flex-row gap-2">
          <TouchableOpacity
            onPress={signOut}
            className="h-10 w-10 items-center justify-center rounded-full bg-red-500"
          >
            <Icon name="log-out" size={16} color="#000" />
          </TouchableOpacity>

          <Link href="/new" asChild>
            <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full bg-green-500">
              <Icon name="plus" size={16} color="#000" />
            </TouchableOpacity>
          </Link>
        </View>
      </View>

      <View className="mt-6 space-y-10">
        <View className="space-y-4">
          <View className="flex-row items-center gap-2">
            <View className="h-px w-5 bg-gray-50" />
            <Text className="font-body text-xs text-gray-100">
              26 de maio, 2023
            </Text>
          </View>
          <View className="space-y-4 px-8">
            <Image
              source={{
                uri: "http://192.168.0.116:3333/uploads/b66dc0ad-df8d-4a5c-9669-78d285a478dc.jpg",
              }}
              className="aspect-video w-full rounded-lg"
              alt=""
            />
            <Text className="font-body text-base leading-relaxed text-gray-100">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
              culpa dolorum unde, voluptas minima deserunt atque. Maxime enim
              soluta repudiandae at vel. Repellendus voluptatem veniam doloribus
              iusto fugiat, sint corporis?
            </Text>
            <Link href="/memories/id" asChild>
              <TouchableOpacity className="flex-row items-center gap-2">
                <Text className="font-body text-sm text-gray-200">
                  Ler mais
                </Text>
                <Icon name="arrow-right" size={16} color="#9e9ea0" />
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
