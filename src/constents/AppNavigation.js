import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import BooksScreen from '../screens/booksScreen'
import CartScreen from '../screens/cart'
import CartIcon from './Icons'
import Payment from '../screens/Payment'

const Stack = createStackNavigator()


function NewStackNavigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Books' component={BooksScreen} 
                options={{headerRight:props => <CartIcon {...props}/>}}/>
                
                <Stack.Screen name='Cart' component={CartScreen} />
                <Stack.Screen name='Payment' component={Payment}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NewStackNavigation