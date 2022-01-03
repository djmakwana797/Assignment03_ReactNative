import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview';
const html = '<p style="font-size:40px;color:##735A42;padding:50px">This is demo application to understand navigation and authentication flow</p>'
const AboutScreen = () => {
    return (
        <WebView
                source={{ html: html }}
                style={styles.web}
            />
    )
}

const styles = StyleSheet.create({
    web: { height: '100%', width: '100%' }
})

export default AboutScreen
