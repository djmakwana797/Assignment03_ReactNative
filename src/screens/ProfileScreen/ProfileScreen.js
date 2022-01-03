import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const ProfileScreen = ({navigation, route}) => {

    const [firstName, setfirstName] = useState('FirstName')
    const [lastName, setlastName] = useState('LastName')
    const [gender, setgender] = useState('male')
    const [about, setabout] = useState('About')
    const [city, setcity] = useState('city')
    const [state, setstate] = useState('state')
    const [imageUri, setimageUri] = useState(null)

    useEffect(() => {
        route.params?.firstName ? setfirstName(route.params?.firstName) : null
        route.params?.lastName ? setlastName(route.params?.lastName) : null
        route.params?.about ? setabout(route.params?.about) : null
        route.params?.city ? setcity(route.params?.city) : null
        route.params?.state ? setstate(route.params?.state) : null
        route.params?.imageUri ? setimageUri(route.params?.imageUri) : null
        route.params?.gender ? setgender(route.params?.gender) : null
    }, [route.params?.firstName, route.params?.lastName, route.params?.about, route.params?.city, route.params?.state, route.params?.gender, route.params?.imageUri])

    return (
        <View style={styles.container}>
            <View style={styles.imageBg}>
                {imageUri==null?
                <Image
                    source={require('../../../assets/images/user.png')}
                    style={styles.image}
                /> : 
                <Image
                    source={{uri:imageUri}}
                    style={styles.image}
                />
                }
                <Text style={styles.user}>{about}</Text>
                <View style={styles.row}>
                    {gender=='male'?
                        <MaterialCommunityIcons name="gender-male" color='#1b1b1d' size={26} />
                    :
                        <MaterialCommunityIcons name="gender-female" color='#1b1b1d' size={26} />
                    }
                    <Text style={styles.user}>{firstName} {" "+lastName}</Text>
                </View>
                <View style={styles.row}>
                    <MaterialCommunityIcons name="map-marker" color='#1b1b1d' size={26} />
                    <Text style={styles.user}>{city} {", "+state}</Text>
                </View>
                <View style={styles.row}>
                    <Pressable style={({pressed})=>[{backgroundColor: pressed? '#ababaf' : '#1b1b1d'},styles.btn]} onPress={()=>navigation.goBack()}><Text style={styles.btnTxt}>Home</Text></Pressable>
                    <Pressable style={({pressed})=>[{backgroundColor: pressed? '#ababaf' : '#1b1b1d'},styles.btn]} onPress={()=>navigation.navigate('Edit Profile', {about: about, firstName : firstName, lastName: lastName, gender: gender, city: city, state: state, imageUri: imageUri})}><Text style={styles.btnTxt}>Edit</Text></Pressable>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    imageBg:{
        padding: 10,
        backgroundColor: '#fdfbff',
        height: '100%',
        justifyContent: 'center'
    },
    image:{
        height:200,
        width:200,
        alignSelf: 'center',
        marginVertical:20,
        borderRadius: 100
    },
    user:{
        marginHorizontal: 10,
        alignSelf: 'center',
        color: '#1b1b1d',
        fontSize: 20
    },
    row:{
        marginTop: 10,
        alignSelf: 'center',
        flexDirection: 'row',
    },
    btn:{
        height:30,
        width:'30%',
        borderRadius: 4,
        marginHorizontal: 6,
        marginVertical: 10
    },
    btnTxt:{
        color: '#fdfbff',
        textAlign: 'center',
        fontSize: 20,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
})

export default ProfileScreen
