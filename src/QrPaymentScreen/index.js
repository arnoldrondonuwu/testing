import * as React from 'react';
import react from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { RNCamera } from 'react-native-camera';
import axios from 'axios';
  
export default  class QrPaymentScreen extends react.Component {
    render() {
      return (
        <View style={styles.container}>
          <RNCamera
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            captureAudio={false}
            barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
            onBarCodeRead={( barcodes) => {
              console.log(barcodes);
              if(barcodes.type == 'QR_CODE'){
                console.log(barcodes.data);
                axios.get(`https://emoneydti.basicteknologi.co.id/index.php/api/merchant/?kode_merchant=${barcodes.data}`)
                .then((response) => {
                  //handle success
                  console.log(response);
                  if(response.data.status == 'true'){
                    this.props.navigation.navigate('KonfirmasiBayarScreen', {
                      data: response.data.data
                    })
                  }
                })
                .catch(function (error){
                  //Handle error
                  console.log(error);
                });
              }
            }}
          >

          </RNCamera>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'black',
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    capture: {
      flex: 0,
      backgroundColor: '#fff',
      borderRadius: 5,
      padding: 15,
      paddingHorizontal: 20,
      alignSelf: 'center',
      margin: 20,
    },
  });