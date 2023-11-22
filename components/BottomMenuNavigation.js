import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { BottomNavigation, Text } from 'react-native-paper';
import HomeScreen from '../screens/HomeScreen';
import HomePage from '../screens/HomePage';
import QRScanPage from '../screens/QRScanPage';

const MusicRoute = () => <HomePage/>

const AlbumsRoute = () => <QRScanPage />

const RecentsRoute = () => <Text>Recents</Text>;

const NotificationsRoute = () => <Text>Notifications</Text>;

const BottomMenuNavigation = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'music', title: 'Favorites', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'albums', title: 'Albums', focusedIcon: 'album' },
    { key: 'recents', title: 'Recents', focusedIcon: 'history' },
    { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
    notifications: NotificationsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default BottomMenuNavigation;
