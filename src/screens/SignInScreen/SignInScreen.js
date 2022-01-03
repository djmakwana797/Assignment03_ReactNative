import React, {useState, useContext} from 'react'
import { View, Text, Image, StyleSheet, ToastAndroid, TextInput } from 'react-native'
import Logo from '../../../assets/images/d.png'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../../components/Context/Context'
import CustomError from '../../components/CustomError'
import CustomMessage from '../../components/CustomMessage'

export default function SignInScreen() {

    const navigation = useNavigation()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [usernameError, setusernameError] = useState('')
    const [passwordError, setpasswordError] = useState('')
    const [isSignInSuccess, setisSignInSuccess] = useState(false)

    const {signIn} = useContext(AuthContext)

    const onSignInPressed = () => {
        if(username=='') setusernameError('Username is requierd')
        if(password == '') setpasswordError('Password is requierd')
        if(username!='' && password!=''){
            if(username=='admin'&&password=='admin@123'){
                setisSignInSuccess(true)
                setTimeout(() => {
                    setisSignInSuccess(false)
                    signIn()
                }, 500)
            }
            else ToastAndroid.show('Invalid username or password..', ToastAndroid.SHORT)
        }
    }

    const onForgotPasswordPressed = () =>{
        navigation.navigate('ForgotPassword')
    }

    const onSignUpPressed = () =>{
        navigation.navigate('SignUp')
    }

    const validateUname = (uname) =>{
        setUsername(uname)
        if(uname.trim().length > 0 ) setusernameError("")
        else setusernameError("Username is required")
    }

    const validatePass = (pass) => {
        setPassword(pass)
        if(pass.length > 0 ) setpasswordError("")
        else setpasswordError("Password is required")
    }

    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.logo}/>
            <CustomInput placeholder="Username" setValue={(uname)=>validateUname(uname)}/>
            {usernameError=='' ? <></>:<CustomError message={usernameError}/>}
            <CustomInput placeholder="Password" value={password} setValue={(pass) => validatePass(pass)} secureTextEntry={true}/>
            {passwordError==''? <></>:<CustomError message={passwordError}/>}
            <CustomButton text="Sign In" onPress={onSignInPressed}/>
            <CustomButton text="Forgot Password?" onPress={onForgotPasswordPressed} type="TERTIARY"/>
            <CustomButton text="Don't have an account? Create here" onPress={onSignUpPressed} type="TERTIARY"/>
            <CustomMessage message="Signing In" visible={isSignInSuccess}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 20
    },
    logo:{
        alignSelf: 'center',
        height: 100,
        width: 100
    }
})