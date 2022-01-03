import React from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import CustomButton from '../../components/CustomButton'

const OrdersScreen = () => {
    const data = [
        { name: 'Tracfone Samsung Galaxy A11', price: 90000, image: require('../../../assets/images/samsung1.jpg'), key: '0' },
        { name: 'TCL 20', price: 20000, image: require('../../../assets/images/oppo.jpg'), key: '1' },
        { name: 'Tracfone Samsung Galaxy A11', price: 32000, image: require('../../../assets/images/samsung.jpg'), key: '2' },
        { name: 'BLU VIVO', price: 12000, image: require('../../../assets/images/vivo.jpg'), key: '3' },
    ]

    const renderItem = ({ item, index }) => {
        return <View style={styles.item}>
            <Image
                style={styles.image}
                resizeMode="contain"
                source={item.image}
            />
            <View style={styles.detail}>
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.text}>{"₹ " + item.price}</Text>
            </View>
        </View>
    }

    return (
        <View style={styles.container}>
            <View style={styles.total}>
                    <View style={styles.label}>
                        <Text style={styles.text}>Subtotal</Text>
                        <Text style={styles.text}>Tax</Text>
                        <Text style={styles.text}>Delivery</Text>
                        <Text style={styles.text}>Total</Text>
                    </View>
                    <View style={styles.label}>
                        <Text style={styles.text}>754645</Text>
                        <Text style={styles.text}>345</Text>
                        <Text style={styles.text}>534</Text>
                        <Text style={styles.text}>942534</Text>
                    </View>
                {/* </View> */}
            </View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.key}
                showsVerticalScrollIndicator={false}
            />
            <CustomButton text="Checkout" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    item: {
        padding: 4,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: 10,
        marginHorizontal: 5,
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
        width: 100,
        height: 100
    },
    text: {
        color: '#001D32',
        fontWeight: '800',
        textTransform: 'capitalize',
        padding: 4
    },
    total: {
        padding: 10,
        paddingHorizontal:80,
        marginHorizontal: 4,
        backgroundColor: '#C6C6C9',
        flexDirection:'row',
        justifyContent:'space-around'
    },
    totaltxt: {
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center'
    }
})

export default OrdersScreen
