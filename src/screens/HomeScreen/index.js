import React, { useContext, useState, useEffect } from 'react'
import { View, Text, SafeAreaView, StyleSheet, Image, Dimensions } from 'react-native'
import CustomButton from '../../components/CustomButton'
import { AuthContext } from '../../components/Context/Context'
import { FlatList, ScrollView } from 'react-native-gesture-handler'

const images = [
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/98/f7/df/charminar.jpg?w=700&h=500&s=1',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/d3/67/e4/sas-bahu.jpg?w=700&h=500&s=1',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/4d/47/32/rishikesh.jpg?w=700&h=500&s=1',
]

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

const Home = () => {

    // const {signOut} = useContext(AuthContext)
    const [imageActive, setimageActive] = useState(0)

    const data = [
        {club: 'Chess', imageSource: require('../../../assets/images/chess.png'), key: '0'},
        {club: 'Cricket', imageSource: require('../../../assets/images/cricket.png'), key: '1'}, 
        {club: 'Dance', imageSource: require('../../../assets/images/dance.png'), key: '2'}, 
        {club: 'Football', imageSource: require('../../../assets/images/football.png'), key: '3'},
        {club: 'Singing', imageSource: require('../../../assets/images/singing.png'), key: '4'},
        {club: 'Speed-skating', imageSource: require('../../../assets/images/speed-skating.png'), key: '5'},
        {club: 'iOS', imageSource: require('../../../assets/images/ios.png'), key: '6'}, 
        {club: 'Android', imageSource: require('../../../assets/images/android.png'), key: '7'},
        {club: 'problem-solvig', imageSource: require('../../../assets/images/problem-solving.png'), key: '8'},
      ]

    const onchange = (nativeEvent) => {
        if (nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
            if (slide != imageActive) {
                setimageActive(slide)
            }
        }
    }

    const renderItem = ({ item, index }) => {
        let src = item.imageSource;
        return <View style={styles.item}>
            <Image
                style={styles.image}
                resizeMode="contain"
                source={src}
            />
            <Text style={styles.text}>{item.club}</Text>
        </View>
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrap}>
                <ScrollView
                    onScroll={({ nativeEvent }) => onchange(nativeEvent)}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    horizontal
                    style={styles.wrap}>
                    {
                        images.map((e, index) =>
                            <Image
                                key={e}
                                resizeMode='stretch'
                                style={styles.wrap}
                                source={{ uri: e }}
                            />
                        )
                    }
                </ScrollView>
                <View style={styles.wrapDot}>
                    {
                        images.map((e, index) =>
                            <Text
                                key={e}
                                style={imageActive == index ? styles.dotActive : styles.dot}>
                                ⬤
                            </Text>
                        )
                    }
                </View>
            </View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.key}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>

        // <CustomButton text="Sign out" onPress={()=>signOut()}/>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrap: {
        width: WIDTH,
        height: HEIGHT * 0.30,
    },
    wrapDot: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignSelf: 'center'
    },
    dotActive: {
        margin: 3,
        color: 'black'
    },
    dot: {
        margin: 3,
        color: 'white'
    },
    // grid: {
    //     padding: 14,
    //     flex: 1
    // },
    item: {
        padding:4,
        flex: 1,
        justifyContent: 'center',
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
        color: 'orange',
        fontWeight:'bold',
        textTransform: 'capitalize'
      },
})

export default Home
