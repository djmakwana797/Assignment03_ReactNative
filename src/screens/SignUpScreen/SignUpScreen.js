import { useNavigation } from '@react-navigation/native'
import React, {useState} from 'react'
import { View, Text, TouchableWithoutFeedback, Keyboard, StyleSheet } from 'react-native'
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
import CustomError from '../../components/CustomError'
import CustomMessage from '../../components/CustomMessage'

export default function SignUpScreen() {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordRepeat, setPasswordRepeat] = useState('')

    const [usernameError, setUsernameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [passwordReapeatError, setPasswordReapeatError] = useState('')

    const [isSignUpSuccess, setisSignUpSuccess] = useState(false)

    const navigation = useNavigation()

    const onRegisterPressed = () => {
        if(username=='') setUsernameError('Username is required') 
        if(email=='') setEmailError('Email is required') 
        if(password=='') setPasswordError('Password is required')
        if(passwordRepeat=='') setPasswordReapeatError('Password confirmation required')
        if(usernameError=="" && emailError=="" && passwordError=="" && passwordReapeatError==""){
            setisSignUpSuccess(true)
            setTimeout(() => {
                setisSignUpSuccess(false)
                navigation.navigate('SignIn')
            }, 5000)
        }
    }

    const onTermsOfUsePressed = () => {
        console.warn('onTermsOfUsePressed')
    }

    const onPrivacyPolicyPressed = () => {
        console.warn('onPrivacyPolicyPressed')
    }

    const onSignInPressed = () => {
        navigation.goBack()
    }

    const validateUname = (uname) =>{
        setUsername(uname)
        if(uname.trim().length <= 4) setUsernameError("Username must be 4 character long")
        else setUsernameError("")
    }
    const validateEmail = (email) =>{
        setEmail(email)
        const emailRegex = /\S+@\S+\.\S+/
        if(emailRegex.test(email)) setEmailError("")
        else setEmailError("Please enter valid email id")
    }
    const validatePassword = (pass) =>{
        setPassword(pass)
        if(pass.length < 6 ) setPasswordError("Password must be 6 character long")
        else setPasswordError("")
    } 
    const validadeRepeatPassword = (rpass) =>{
        setPasswordRepeat(rpass)
        if(rpass==password) setPasswordReapeatError("")
        else setPasswordReapeatError("Password did not match")
    } 

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
            <Text style={styles.title}>Create an account</Text>
            <CustomInput placeholder="Username" value={username} setValue={(uname)=>validateUname(uname)}/>
            {usernameError!=''? <CustomError message={usernameError}/> : <></> }

            <CustomInput placeholder="Email" value={email} setValue={(email)=>validateEmail(email)}/>
            {emailError!=''? <CustomError message={emailError}/>:<></>}

            <CustomInput placeholder="Password" value={password} setValue={(pass)=>validatePassword(pass)} secureTextEntry={true}/>
            {passwordError!=''? <CustomError message={passwordError}/>:<></>}

            <CustomInput placeholder="Repeat Password" value={passwordRepeat} setValue={(rpass)=>validadeRepeatPassword(rpass)} secureTextEntry={true}/>
            {passwordReapeatError!=''? <CustomError message={passwordReapeatError}/>:<></>}

            <CustomButton text="Register" onPress={onRegisterPressed}/>

            <Text style={styles.text}>
                By Registering, you confirm that you accept our {''}
                <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> and {' '}
                <Text style={styles.link} onPress={onPrivacyPolicyPressed}>Privacy Policy</Text>
            </Text>
            <CustomButton text="Have an account? Sign in" onPress={onSignInPressed} type="TERTIARY"/>
            <CustomMessage message="Registration completed successfully" visible={isSignUpSuccess}/>
        </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 20
    },
    title:{
        fontSize: 24,
        fontWeight:'bold',
        color: '#051c60',
        margin: 10,
        alignSelf: 'center'
    },
    text:{
        color: 'gray',
        marginVertical: 10,
    },
    link:{
        color: '#fdb075'
    }
})