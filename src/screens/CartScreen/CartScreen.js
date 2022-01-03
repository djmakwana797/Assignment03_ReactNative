import React from 'react'
import { View, Text, FlatList, StyleSheet, Image } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import CustomButton from '../../components/CustomButton'

const CartScreen = ({navigation}) => {

    const data = [
        {name:'Tracfone Samsung Galaxy', price: 90000, image:require('../../../assets/images/samsung1.jpg'), quantity: 1, key: '0'},
        {name:'TCL 20', price: 20000, image:require('../../../assets/images/oppo.jpg'), quantity: 2, key: '1'},
        {name:'Tracfone Samsung Galaxy', price: 32000, image:require('../../../assets/images/samsung.jpg'), quantity: 1, key: '2'},
        {name:'BLU VIVO', price: 12000, image:require('../../../assets/images/vivo.jpg'), quantity: 3, key: '3'},
        {name:'Tracfone Samsung Galaxy', price: 90000, image:require('../../../assets/images/samsung1.jpg'), quantity: 1, key: '4'},
    ]

    const renderItem = ({ item, index }) => {
        return <View style={styles.item}>
            <Image
                style={styles.image}
                resizeMode="contain"
                source={item.image}
            />
            <View>
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.text}>{item.price+" ₹"}</Text>
            </View>
            <View style={styles.cart}>
                <MaterialCommunityIcons name="minus-circle-outline" color='#C6C6C9' size={26} />
                <Text style={styles.quantitytxt}>{item.quantity}</Text>
                <MaterialCommunityIcons name="plus-circle-outline" color='#C6C6C9' size={26} />
                <MaterialCommunityIcons name="close-circle-outline" color='#C6C6C9' size={26} style={styles.close}/>
            </View>
        </View>
    }

    return (
        <View style={styles.container}>
            <View style={styles.total}>
                <Text style={styles.totaltxt}>Total: 80765</Text>
            </View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.key}
                showsVerticalScrollIndicator={false}
            />
            <CustomButton text="Place Order" onPress={()=>navigation.navigate('Order')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 10
    },
    item: {
        padding:4,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: 10,
        marginHorizontal: 4,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    
        elevation: 5,
      },
      image: {
        width: 80,
        height: 80
      },
      text: {
        color: '#001D32',
        fontWeight:'bold',
        textTransform: 'capitalize',
        padding: 4
      },
      cart:{flexDirection:'row', flex:1, justifyContent:'flex-end', padding:6},
      quantitytxt:{marginHorizontal:6, marginVertical:4},
      close:{
          marginLeft:8
      },
      total:{
        padding:10,
        marginHorizontal: 4,
        backgroundColor: '#C6C6C9'
      },
      totaltxt:{
          fontSize:18,
          fontWeight:'600',
          textAlign:'center'
      }
})

export default CartScreen
