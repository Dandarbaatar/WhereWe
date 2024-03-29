import * as Location from 'expo-location';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, ActivityIndicator, Linking } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
// import openMap from 'react-native-open-maps';

interface Coordinates {
  latitude: number;
  longitude: number;
}
interface MapProps {
  name?: string;
  description?: string;
}

export default function Map(props: MapProps): React.ReactNode {
  const [status, requestPermission] = Location.useForegroundPermissions();
  const [location, setLocation] = useState<Coordinates | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchLocation = async (): Promise<Location.LocationObject | null> => {
    try {
      if (status && status.granted) {
        const currentLocation = await Location.getCurrentPositionAsync({});
        return currentLocation;
      }
    } catch (error) {
      console.error('Error fetching location:', error);
    } finally {
      setLoading(false);
    }
    return null;
  };

  const getLocation = async (): Promise<void> => {
    const currentLocation = await fetchLocation();
    if (currentLocation) {
      setLocation({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
      });
    }
  };

  useEffect(() => {
    getLocation();
  }, [status]);

  if (!status || !status.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          You haven't enabled location permissions. Please enable to view the map.
        </Text>
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <Button title="Grant location access" onPress={requestPermission} />
      </View>
    );
  }

  const goToMap = async (): Promise<void> => {
    const latitude = 47.99600907846616;
    const longitude = 107.46207759631241;
    //? SHUUD NAVIGATE HIIH URL const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}&travelmode=driving&dir_action=navigate`;
    const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`; //? JUST DIRECTION

    Linking.openURL(url).catch((err) => console.error('An error occurred', err));
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#41B7FB" />
        </View>
      ) : location ? (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          // eslint-disable-next-line react/jsx-boolean-value
          zoomEnabled={true}
          provider={PROVIDER_GOOGLE}>
          {/* <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title="Me"
            description="My Location"
          /> */}
          <Marker
            coordinate={{
              latitude: 47.99600907846616,
              longitude: 107.46207759631241,
            }}
            title={props.name}
            description={props.description}
          />
        </MapView>
      ) : null}
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <Button onPress={goToMap} title="Go to Map" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  map: {
    flex: 1,
    width: '100%',
  },
});
