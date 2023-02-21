import { createDrawerNavigator } from '@react-navigation/drawer';
import About from '../screens/About';
import Home from '../screens/Home';
import AboutStack from './aboutStack';
import HomeStack from './homeStack';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
    return (
        <Drawer.Navigator initialRouteName="HomeStack" screenOptions={{ headerShown: false }}>
            <Drawer.Screen name="HomeStack" component={HomeStack} />
            <Drawer.Screen name="About" component={AboutStack} />
        </Drawer.Navigator>
    );
}