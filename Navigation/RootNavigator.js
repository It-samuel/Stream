import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../Screens/WelcomeScreen";
import LoginScreen from "../Screens/LoginScreen";
import SignupScreen from "../Screens/SignupScreen"





const Stack = createNativeStackNavigator();



export default function RootNavigator(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}  options={{headerShown: false}}/>
                <Stack.Screen name="LoginScreen" component={LoginScreen}  options={{headerShown: false}}/> 
                <Stack.Screen name="SignupScreen" component={SignupScreen} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}