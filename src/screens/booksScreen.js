import React, {useState} from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View, Alert } from "react-native";
import { books } from "../utilities/Data";

import { useSelector, useDispatch } from "react-redux";

import { ADD_TO_CART } from "../redux/CartItem";
import { useNavigation } from "@react-navigation/native";

import RazorpayCheckout from "react-native-razorpay";


function Separator() {
    return <View style={{ borderBottomWidth: 1, borderBottomColor: '#a9a9a9' }} />
  }

function BooksScreen(){

    const dispatch =useDispatch()
    const addItemToCart = item => dispatch({type:ADD_TO_CART, payload:item})
    const navigation = useNavigation()
    // const [razorpayPrice, setRazorpayPrice]=useState()

    const PaymentHandle=()=>{
        console.log('Buy')
        var options={
            name: 'Books',
            description:'Test',
            currency:'INR',
            amount:50000,
            key:'rzp_test_e2WYBalOt3gHHE',
            prefill:{
                email:'as@gmail.com',
                contact:'15646545454',
                name:'Customer'
            },
            theme: {color: '#f37251'}
            
        }
        RazorpayCheckout.open(options).then((data)=>{
            console.log('data', data)
            Alert.alert('Success')
        })
        .catch((error)=>{
            Alert.alert(`Error: ${error.code}| ${error.description}`)
        })
    }

    return(
        <View style={styles.container}>
            <FlatList style={styles.itemView}
            data={books}
            keyExtractor={item => item.id.toString()}
            ItemSeparatorComponent={()=>Separator()}
            renderItem={({item})=>(
                <View style={styles.itemContainer}>
                    <Image source={{uri:item.imageLink}} style={styles.itemImh}></Image>
                    <View style={styles.textView}>
                        <Text style={styles.nameText}>{item.name}</Text>
                        <Text style={styles.authorText}>{item.author}</Text>
                        <Text style={styles.nameText}>Rs: {item.price}</Text>
                        <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={()=> addItemToCart(item)}>
                            <Text style={styles.buttonTxt}>Add</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={()=>PaymentHandle()}>
                            <Text style={styles.buttonTxt}>Buy</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )}
            />

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
        borderRadius:5,
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
        borderRadius:6,
        margin:5,
        width:100
    },
    buttonContainer:{
        alignItems:"center",
        marginTop:10,
        flexDirection:"row"
    },
    buttonTxt:{
        color:'#ffffff',
        fontSize:20,
        fontWeight:'bold',
        padding:8
    }
})

export default BooksScreen

