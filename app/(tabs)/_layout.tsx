import { AntDesign, Entypo } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

import Colors from '@/constants/Colors';

const TabLayout: React.FC = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarInactiveTintColor: Colors.light.tabIconDefault,
        tabBarActiveTintColor: Colors.light.tabIconSelected,
        tabBarStyle: { backgroundColor: Colors.light.tint },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <AntDesign name="home" color={color} size={28} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="favourite"
        options={{
          title: 'Favourite',
          tabBarIcon: ({ color }) => <AntDesign name="hearto" color={color} size={28} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => <AntDesign name="search1" color={color} size={28} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="list"
        options={{
          title: 'List',
          tabBarIcon: ({ color }) => <Entypo name="list" color={color} size={28} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <AntDesign name="user" color={color} size={28} />,
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
