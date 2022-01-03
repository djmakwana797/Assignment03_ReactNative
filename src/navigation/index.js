import React, { useState, useMemo, useEffect } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SignInScreen from '../screens/SignInScreen'
import SignUpScreen from '../screens/SignUpScreen'
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen'
import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import SettingsScreen from '../screens/SettingsScreen'
import ProductsScreen from '../screens/ProductsScreen'
import OrdersScreen from '../screens/OrdersScreen'
import CartScreen from '../screens/CartScreen'
import EditProfileScreen from '../screens/EditProfileScreen'
import AboutScreen from '../screens/AboutScreen'
import PrivacyPolicyScreen from '../screens/PrivacyPolicyScreen'
import { AuthContext } from '../components/Context/Context'

const Tab = createMaterialBottomTabNavigator()
const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

const Navigation = () => {
    const [isLoading, setisLoading] = useState(true)
    const [userToken, setuserToken] = useState(null)

    const authContext = useMemo(() => ({
        signIn: () => {
            setuserToken('asdf')
            setisLoading(false)
        },
        signOut: () => {
            setuserToken(null)
            setisLoading(false)
        },
        signUp: () => {
            setuserToken('asdf')
            setisLoading(false)
        }
    }))

    useEffect(() => {
        setTimeout(() => {
            setisLoading(false)
        }, 1000)
    }, [])

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        )
    }
    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                {userToken == null ? (
                    <Stack.Navigator screenOptions={{ headerShown: false }}>
                        <Stack.Screen name='SignIn' component={SignInScreen} />
                        <Stack.Screen name='SignUp' component={SignUpScreen} />
                        <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen} />
                    </Stack.Navigator>
                ) : (
                    <Drawer.Navigator screenOptions={{ headerShown: false }}>
                        <Drawer.Screen name='Home' component={createTabNavigator}/>
                        <Drawer.Screen name='Product' component={ProductsScreen}/>
                        <Drawer.Screen name='Cart' component={CartScreen}/>
                        <Drawer.Screen name='Order' component={OrdersScreen}/>
                    </Drawer.Navigator>
                )}
            </NavigationContainer>
        </AuthContext.Provider>
    )
}
const createTabNavigator = () => (
    <Tab.Navigator activeColor="#ffffff"
    inactiveColor="#C6C6C9"
    barStyle={{ backgroundColor: '#00639A' }}
    >
        <Tab.Screen name='HomeScreens' component={HomeScreen}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen name='ProfileScreens' component={createProfileStackNavigator}
            options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="account" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen name='SettingsScreens' component={createSettingsStackNavigator}
            options={{
                tabBarLabel: 'Settings',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="cog" color={color} size={26} />
                ),
            }}
        />
    </Tab.Navigator>
)

const ProfileStack = createNativeStackNavigator()
const createProfileStackNavigator = () => (
    <ProfileStack.Navigator screenOptions={{headerShown:false}}>
        <ProfileStack.Screen name='Profile' component={ProfileScreen}/>
        <ProfileStack.Screen name='Edit Profile' component={EditProfileScreen}/>
    </ProfileStack.Navigator>
)

const SettingsStack = createNativeStackNavigator()
const createSettingsStackNavigator = () => (
    <SettingsStack.Navigator screenOptions={{headerShown:false}}>
        <SettingsStack.Screen name='Settings' component={SettingsScreen}/>
        <SettingsStack.Screen name='Privacy policy' component={PrivacyPolicyScreen}/>
        <SettingsStack.Screen name='About' component={AboutScreen}/>
    </SettingsStack.Navigator>
)
export default Navigation
