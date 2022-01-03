import { useNavigation } from '@react-navigation/native'
import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'

const ForgotPasswordScreen = () => {
    const [username, setUsername] = useState('')
    const navigation = useNavigation()

    const onSignInPressed = () => {
        navigation.goBack()
    }
    const onSend = () => {
        navigation.goBack()
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Reset your password</Text>
            <CustomInput placeholder="Username" value={username} setValue={setUsername}/>
            <CustomButton text="Send" onPress={onSend}/>
            <CustomButton text="Back to Sign in" onPress={onSignInPressed} type="TERTIARY"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        padding: 20
    },
    title:{
        fontSize: 24,
        fontWeight:'bold',
        color: '#051c60',
        margin: 10,
    },
})

export default ForgotPasswordScreen
