import React, { useEffect } from 'react';
import { Button, Text, View, TextInput, PermissionsAndroid, ActivityIndicator, Image, ScrollView } from 'react-native';
import { useState } from 'react/cjs/react.development';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Geolocation from 'react-native-geolocation-service';
import axios from 'axios';

export default function KonfirmasiBayarScreen({ navigation, route }){
     const { data } = route.params;

    const [merchant, setMerchant] = useState({});
    const [nominalBayar, setNominalBayar] = useState('0');
    const [idUser, setIdUser] = useState();
    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      _getData();
      requestLocationPermission();
    }, []);

    const requestLocationPermission = async () => {
      try {
        const granted  = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
          {
            title: "Aplikasi Emoney Memmbutuhkan Permission",
            message: " Aplikasi ini membutuhkan Lokasi anda ",
            buttonNeutral: "Ask me later",
            buttonNegative: "Cancel",
            buttonPositive: "OK"
          }
        );
        if (granted == PermissionsAndroid.RESULTS.GRANTED) {
          console.log("You can use the location");
          _getUserLocation();
        } else {
          console.log("Location permission denied ");
        }
      } catch (eror){
        console.warn(eror);
      }
    };

    const _getUserLocation = () => {
      Geolocation.getCurrentPosition(
        (position) => {
          console.log(`user latitude: ${position.coords.latitude} user longitude: ${position.coords.longitude}`);
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.latitude);
        },
        (error) => {
          setIsLoading(false);
          console.log(error.code, error.message);
        },
        { enableHighAccuracy: false }
      );
    }

    const _getData = async () => {
      try {
        let id_user = await AsyncStorage.getItem('authtoken')
        if(id_user !== null) {
          setIdUser(id_user);
        }
      } catch(e) {
        // error reading value
        console.log(e);
      }
    }

    const _postBayar = () => {
      axios.post(`https://emoneydti.basicteknologi.co.id/index.php/api/merchant/pay`,{
        id_merchant: data.id_merchant,
        nominal_bayar: nominalBayar,
        id_user: idUser,
        latitude_transaksi: latitude,
        longitude_transaksi: longitude
      })
      .then(function (response) {
        console.log(response.data);
        if(response.data.status == 'true'){
          navigation.navigate('PaySuccessScreen', {
            data: response.data.data
          })
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    if(isLoading){
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator size="large" color="00ff00" />
        </View>
      );
    }
    else
    return (
      <ScrollView>
      <View style={{ paddingHorizontal: 8, marginTop: 16, flex: 1 }}>
        <View style={{ flex: 1, alignItems: 'center', paddingTop: 30 }}>
        <Image source={{uri: `data:image/jpeg;base64,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`}} 
          style={{width: 290, height: 270}} />
        </View>
        <View style={{ flex: 1 }}>
          <TextInput
          placeholder="Nominal Bayar"
          style={{ borderBottomWidth: 1, borderColor: "#8c8c8c", marginBottom: 8 }}
          onChangeText={inputNominal => { setNominalBayar(inputNominal) }}
          defaultValue={nominalBayar}
          />
          <View style={{ paddingLeft: 8, paddingRight: 8, paddingTop: 16, paddingBottom: 16, backgroundColor: '#4982C1' }}>
            <Text style={{ color: '#FFFFFF', textAlign: 'center', marginBottom: 8 }}>Pembayaran Kepada :</Text>
            <Text style={{ color: '#FFFFFF', textAlign: 'center', marginBottom: 8, fontWeight: 'bold' }}>UnklabBakery</Text>
            <Text style={{ color: '#FFFFFF', textAlign: 'center', marginBottom: 8 }}>Airmadidi</Text>
          </View>
          
          <View style={{ marginTop: 16 }}>
          <Button
          title="Bayar"
          onPress={() => {
            _postBayar();
          }}
          />
          </View>
        </View>
      </View>
      </ScrollView>
    );
  }