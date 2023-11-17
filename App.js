import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import FavoritesContextProvider from './store/context/favorites-context';

// const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

// function DrawerNavigator() {
//   return <Drawer.Navigator
//     screenOptions={{
//       headerStyle: { backgroundColor: '#351401'},
//       headerTintColor: '#fff',
//       sceneContainerStyle: { backgroundColor: '#3f2f25' },
//       drawerContentStyle: { backgroundColor: '#351401'},
//       drawerInactiveTintColor: 'white',
//       drawerActiveTintColor: '#351401',
//       drawerActiveBackgroundColor: '#e4baa1',
//     }}
//   >
//       <Drawer.Screen 
//         name="Categories" 
//         component={CategoriesScreen} 
//         options={{
//           title: 'All Categories',
//           drawerIcon: ({ color, size }) => <Ionicons name="list" color={color} size={size} />
//         }}  
//       />
//       <Drawer.Screen 
//         name="Favorites" 
//         component={FavoriteScreen}
//         options={{
//           drawerIcon: ({ color, size }) => <Ionicons name="star" color={color} size={size} />
//         }} 
//       />
//     </Drawer.Navigator>
  
// }

// export default function App() {
//   return (
//     <>
//       <StatusBar style='light' />
//       <NavigationContainer>
//         <Stack.Navigator 
//           // initialRouteName="CategoriesScreen"
//           // screenOptions={{
//           //   headerStyle: { backgroundColor: 'red' },
//           //   headerTintColor: '#fff',
//           //   contentStyle: { backgroundColor: '#ccc' },
//           // }}
//         >
//           <Stack.Screen 
//             // name='MealsCategories' 
//             name="DrawerScreen" 
//             // component={CategoriesScreen} 
//             component={DrawerNavigator} 
//             options={{
//               title: 'All Categories',
//               // headerStyle: { backgroundColor: 'red' },
//               // headerTintColor: '#fff',
//               // contentStyle: { backgroundColor: 'yellow' },
//               headerShown: false,
//             }}
//           />
//           <Stack.Screen name='MealsOverview' component={MealsOverviewScreen} />
//           <Stack.Screen name='MealDetail' component={MealDetailScreen} options={{title: 'About the meal'}} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </>
//   );
// }

// const styles = StyleSheet.create({

// });


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return <Drawer.Navigator>
      <Drawer.Screen name="MealsCategories" component={CategoriesScreen} />
      <Drawer.Screen name="Favorites" component={FavoriteScreen} />
    </Drawer.Navigator>
  
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator 
            // initialRouteName="CategoriesScreen"
            screenOptions={{
              headerStyle: { backgroundColor: 'red' },
              headerTintColor: '#fff',
              contentStyle: { backgroundColor: '#ccc' },
            }}
          >
            <Stack.Screen 
              // name='MealsCategories' 
              name="DrawerScreen" 
              // component={CategoriesScreen} 
              component={DrawerNavigator} 
              options={{
                // title: 'All Categories',
                // headerStyle: { backgroundColor: 'red' },
                // headerTintColor: '#fff',
                // contentStyle: { backgroundColor: 'yellow' },
              }}
            />
            <Stack.Screen name='MealsOverview' component={MealsOverviewScreen} />
            <Stack.Screen name='MealDetail' component={MealDetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({

});
