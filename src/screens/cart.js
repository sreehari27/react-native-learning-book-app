import React from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { REMOVE_FROM_CART } from "../redux/CartItem";

import { useSelector, useDispatch } from "react-redux";

function Separator() {
    return <View style={{ borderBottomWidth: 1, borderBottomColor: '#a9a9a9' }} />
  }

function CartScreen(){

    const cartItems = useSelector(state => state)
    const dispatch = useDispatch()
    const removeItemFromCart = item=> dispatch({type:REMOVE_FROM_CART, payload:item})

    return(
        <View style={styles.container}>
            {cartItems.length !==0 ? (
            <FlatList style={styles.itemView}
            data={cartItems}
            keyExtractor={item => item.id.toString()}
            ItemSeparatorComponent={()=>Separator()}
            renderItem={({item})=>(
                <View style={styles.itemContainer}>
                    <Image source={{uri:item.imageLink}} style={styles.itemImh}></Image>
                    <View style={styles.textView}>
                        <Text style={styles.nameText}>{item.name}</Text>
                        <Text style={styles.authorText}>{item.author}</Text>
                        <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={()=>removeItemFromCart(item)} >
                            <Text style={styles.buttonTxt}>Remove</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )}
            />
            ):(
                <View>
                    <Text>Your Cart is Empty</Text>
                </View>
            )}

        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:'#dedbd5',
        alignItems:"center"
    },
    itemView:{
        width:'95%',
        backgroundColor:'#ffffff',
        elevation:5,
        marginTop:5,
        borderRadius:5
    },
    itemContainer:{
       padding:10,
        // backgroundColor:'red',
        flexDirection:"row"
    },
    PrimText:{
        color:'#000000',
        fontSize:20
    },
    itemImh:{
        width:100,
        height:150
    },
    textView:{
        paddingLeft:20,
        width:250,
        justifyContent:"center",

    },
    nameText:{
        fontSize:18,
        fontWeight:"200"
    },
    authorText:{
        fontSize:14,
        fontWeight:"100",
        paddingTop:10
    },
    button:{
        backgroundColor:'#196ce0',
        alignItems:"center",
        borderRadius:6
    },
    buttonContainer:{
        alignItems:"center",
        marginTop:10
    },
    buttonTxt:{
        color:'#ffffff',
        fontSize:20,
        fontWeight:'bold',
        padding:8
    }
})

export default CartScreen

