import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview';
import CustomMessage from '../../components/CustomMessage'

const PrivacyPolicyScreen = () => {
    const [isLoading, setisLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setisLoading(false)
        }, 3000)
    }, [])
    return (
        <>
            <WebView
                source={{ uri: 'https://reactnative.dev/' }}
                style={styles.web}
            />
            <CustomMessage message="Loading.." visible={isLoading}/>
        </>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    web: { height: '100%', width: '100%' }
})

export default PrivacyPolicyScreen
