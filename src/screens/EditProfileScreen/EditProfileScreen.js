import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, Pressable, TouchableOpacity, Modal } from 'react-native'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton';
import RadioForm from 'react-native-simple-radio-button'
import ImagePicker from 'react-native-image-crop-picker';

const EditProfileScreen = ({ navigation, route }) => {

    const [firstName, setFirstName] = useState(route.params.firstName)
    const [lastName, setlastName] = useState(route.params.lastName)
    const [gender, setgender] = useState(route.params.gender)
    const [about, setabout] = useState(route.params.about)
    const [city, setcity] = useState(route.params.city)
    const [state, setstate] = useState(route.params.state)
    const [imageUri, setimageUri] = useState(route.params.imageUri)

    const [imageOptions, setImageOptions] = useState(false)

    const radio_props = [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' }
    ];

    const takePhotoFromCamera = () => {
        setImageOptions(false)
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
          }).then(image => {
            setimageUri(image.path)
            navigation.setParams({imageUri:imageUri})
          });
    }

    const selectFromGallery = () => {
        setImageOptions(false)
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
            setimageUri(image.path)
            navigation.setParams({imageUri:imageUri})
          })
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => setImageOptions(true)}>
                    {imageUri == null ?
                        <Image
                            source={require('../../../assets/images/user.png')}
                            style={styles.image}
                        /> :
                        <Image
                            source={{ uri: imageUri }}
                            style={styles.image}
                        />
                    }
                </TouchableOpacity>
                <Modal transparent={true} visible={imageOptions}>
                    <View style={styles.imageOptionsbg}>
                        <View style={styles.imageOptions}>
                            <Pressable style={styles.imageOptionsBtn} onPress={takePhotoFromCamera}>
                                <Text style={styles.imageOptionsTxt}>Camera</Text>
                            </Pressable>
                            <Pressable style={styles.imageOptionsBtn} onPress={selectFromGallery}>
                                <Text style={styles.imageOptionsTxt}>Gallery</Text>
                            </Pressable>
                            <Pressable style={styles.imageOptionsBtn} onPress={() => setImageOptions(false)}>
                                <Text style={styles.imageOptionsTxt}>Cancel</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
                <CustomInput value={firstName} 
                    setValue={(firstName)=>{
                        setFirstName(firstName)
                        navigation.setParams({firstName:firstName})
                        }
                    } 
                    placeholder="Enter your first name" 
                />
                <CustomInput value={lastName} 
                    setValue={(lastName)=>{
                        setlastName(lastName)
                        navigation.setParams({lastName:lastName})
                        }
                    } 
                    placeholder="Enter your last name" 
                />
                <CustomInput value={city} 
                    setValue={(city)=>{
                        setcity(city)
                        navigation.setParams({city:city})
                        }
                    }  
                    placeholder="Enter your city" 
                />
                <CustomInput value={state} 
                    setValue={(state)=>{
                        setstate(state)
                        navigation.setParams({state:state})
                        }
                    } 
                    placeholder="Enter your state" 
                />
                <CustomInput value={about} 
                    setValue={(about)=>{
                        setabout(about)
                        navigation.setParams({about:about})
                        }
                    } 
                    placeholder="Write something about yourself" 
                    multiline={true} number={4} 
                />
                <View style={{ alignSelf: 'flex-start', marginVertical: 10 }}>
                    <RadioForm
                        radio_props={radio_props}
                        initial={radio_props[gender]}
                        formHorizontal={true}
                        buttonColor={'grey'}
                        animation={true}
                        onPress={(value) => { setgender(value) 
                            navigation.setParams({gender:gender}) }}
                    />
                </View>
                <CustomButton text="Update" onPress={()=>navigation.navigate('Profile', {about: about, firstName : firstName, lastName: lastName, gender: gender, city: city, state: state, imageUri: imageUri})} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: { justifyContent: 'center', alignItems: 'center', flex: 1, padding: 10 },
    image: {
        height: 150,
        width: 150,
        alignSelf: 'center',
        marginVertical: 20,
        borderRadius: 100
    },
    imageOptionsbg:{backgroundColor:"#000000aa", flex:1},
    imageOptions:{alignItems :'center', justifyContent: 'space-evenly',backgroundColor:"#fff", marginVertical:200, marginHorizontal: 60, padding:30, flex:1, borderRadius:10},
    imageOptionsBtn : {backgroundColor:'#657ed4', padding: 12, borderRadius: 4, width: '90%'},
    imageOptionsTxt: {fontSize: 16,color:'#fff', textTransform: 'uppercase', fontWeight: '500',textAlign: 'center' },
})

export default EditProfileScreen
