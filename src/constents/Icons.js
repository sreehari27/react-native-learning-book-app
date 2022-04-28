import { NavigationContainer, useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View,StyleSheet,Text } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from "react-redux";


function CartIcon(){
    const navigation = useNavigation()
    const cartItem = useSelector(state => state)

    return(
        <TouchableOpacity 
        onPress={()=> navigation.navigate("Cart")}>
            <View style={styles.buttonContainer}>
                <Text style={styles.cartText}>{cartItem.length}</Text>
            </View>
            <Icon name="shopping-cart"  size={32} color='#101010'/>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    buttonContainer:{
    position: 'absolute',
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: '#196ce0',
    right: 22,
    bottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2000
    },
    cartText:{
        color:'white'
    }
})


export default CartIcon