import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const SettingsScreen = () => {

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <Pressable style={styles.btn} onPress={()=>navigation.navigate('Privacy policy')}>
                <Text style={styles.btnTxt}>Privacy and Policy</Text>
            </Pressable>
            <Pressable style={styles.btn} onPress={()=>navigation.navigate('About')}>
                <Text style={styles.btnTxt}>About</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex:1, backgroundColor: '#fdfbff', paddingHorizontal: 16},
    btn:{width: '100%', height: 50, backgroundColor:'#e0e2eb', justifyContent:'center', marginTop: 20},
    btnTxt:{
        color: '#1b1b1d',
        marginHorizontal: 20,
        fontSize: 20,
    }
})

export default SettingsScreen