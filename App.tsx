import { StyleSheet, StatusBar, Platform, Text, Button } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";

import CategoriesScreen from "./src/screens/CategoriesScreen";
import MealsOverviewScreen from "./src/screens/MealsOverviewScreen";
import MealDetailsScreen from "./src/screens/MealDetailsScreen";
import FavoriteScreen from "./src/screens/FavoriteScreen";

import { RootStackParamList } from "./src/types";
import {
  createDrawerNavigator,
  DrawerNavigationOptions,
} from "@react-navigation/drawer";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

const screenOptions: NativeStackNavigationOptions = {
  headerStyle: {
    backgroundColor: "#351401",
  },
  headerTintColor: "white",
  contentStyle: {
    backgroundColor: "#3f2f25",
  },
};
const screenOptionDrawer: DrawerNavigationOptions = {
  headerStyle: {
    backgroundColor: "#351401",
  },
  headerTintColor: "white",
  sceneContainerStyle: { backgroundColor: "#3f2f25" },
  drawerContentStyle: {
    backgroundColor: "#351401",
  },
  drawerActiveTintColor: "white",
  drawerActiveBackgroundColor: "#e4baa1",
  drawerInactiveTintColor: "white",
};

const DrawerNav = () => {
  return (
    <Drawer.Navigator screenOptions={screenOptionDrawer}>
      <Drawer.Screen
        name="CategoriesDrawer"
        component={CategoriesScreen}
        options={{
          title: "Categories",
        }}
      />
      <Drawer.Screen name="FavoriteDrawer" component={FavoriteScreen} />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <ExpoStatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen
            name="Categories"
            component={DrawerNav}
            options={{
              title: "All Categories",
              headerShown: false,
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen
            name="MealDetails"
            component={MealDetailsScreen}
            options={({ navigation, route }) => {
              return {
                // title: route.params.title,
              };
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: Platform.select({ android: StatusBar.currentHeight }),
  },
});
