import React, { useState } from 'react';
import { Button, ScrollView, Text, View, Image } from 'react-native';
import axios from 'axios';

export default function TopUpSuccessScreen({ navigation, route }){
    const { orderId } = route.params;

    const [transactionStatus, setTransactionStatus] = useState({});

    React.useEffect(() => {
      _getTransactionStatus();
    })

    const _getTransactionStatus = () =>{ 
        console.log(orderId)
        axios.get(`https://emoneydti.basicteknologi.co.id/index.php/api/snap/transactionstatus?order_id=${orderId}`)
        .then(function (response) {
        // handle success
        console.log(response.data);
        setTransactionStatus(response.data.data)
      })
        .catch(function (error) {
        // handle error
        console.log(error);
      });
    }

    return (
      <View style={{ flex: 1, marginHorizontal: 8 }}>
        <View style={{ flex: 1, alignItems: 'center', paddingTop: 30 }}>
          <Image source={{uri: `data:image/jpeg;base64,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`}} 
           style={{width: 300, height: 290}} />
        </View>
        <View style={{ flex: 2 }}>
          <Text style={{ textAlign: 'center', fontSize: 24, marginBottom: 8, textTransform: 'capitalize', marginTop: 50, fontWeight: 'bold' }}>Top Up {transactionStatus.transaction_status}</Text>
          <Text style={{ textAlign: 'center', fontSize: 24, marginBottom: 8, fontWeight: 'bold' }}>Rp. {transactionStatus.nominal_topup}</Text>
          <View style={{ paddingLeft: 4, paddingRight: 4, paddingTop: 16, paddingBottom: 16, backgroundColor: '#4982C1', marginBottom: 8 }}>
            <Text style={{ color: '#FFFFFF', textAlign: 'center' }}>{transactionStatus.transaction_time}</Text>
            <Text style={{ color: '#FFFFFF', textAlign: 'center', textTransform: 'uppercase' }}>{transactionStatus.bank}</Text>
            <Text style={{ color: '#FFFFFF', textAlign: 'center' }}>VA Number: {transactionStatus.va_number}</Text>
          </View>
          <Button
          title="Back to Home"
          onPress={() => {
            navigation.navigate('MainBottomTab');
          }}
          />
        </View>
      </View>
    );
  }