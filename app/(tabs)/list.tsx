import { StyleSheet, Text, View } from 'react-native';

import Colors from '@/constants/Colors';

export default function TabTwoScreen(): React.ReactNode {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>List</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.light.background,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
