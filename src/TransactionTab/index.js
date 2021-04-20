import React, { useEffect, useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

export default function TransactionTab({ navigation }) {
    
    const [transaksi, setTransaksi] = useState(['{id_transaction: 1}', '{id_transaction: 2}', '{id_transaction: 3}']);

    useEffect(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        console.log('focus');
        getData();
      });

      return unsubscribe;
    }, []);

    const getData = async () =>{
      try {
          const value = await AsyncStorage.getItem('authtoken')
          _getDashboardData(value)
      } catch(e) {
        // error reading value
      }
    }
     
   const _getDashboardData = (idUser) => {
      console.log(`idUser: ${idUser}`)
      // Make 
      axios.get(`https://emoneydti.basicteknologi.co.id/index.php/api/transaction?id_user=${idUser}`)
      .then(function (response) {
      // handle success
      console.log(response.data);
      setTransaksi(response.data.data)

    })
      .catch(function (error) {
      // handle error
      console.log(error);
    })
      .then(function () {
      // always executed
    });
  }

    const renderItem = ({item}) => {
      console.log(item);
      return (
        <View style={{ padding: 8, flex: 1, flexDirection: 'row', backgroundColor: '#FFFFFF', marginBottom: 8, borderRadius: 4 }}>
          <View style={{ width: 50, textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}>
          <Ionicons name="add-outline" size={20} color="#000000" />
          </View>
          <View style={{ flex: 1, position: 'relative' }}>
            <Text style={{ marginBottom: 8 }}>Rp. {item.nominal_transaksi}</Text>
            <Text style={{ position: 'absolute', right: 0 }}>{item.waktu_transaksi}</Text>
          </View>
        </View>
      );
    }

    return (
      <View style={{ flex: 3, marginHorizontal: 8, marginTop: 8 }}>
          <FlatList
          data={transaksi}
          renderItem={renderItem}
          keyExtractor={item => item.id_transaction}
          />
      </View>
    );
  }