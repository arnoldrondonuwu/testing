import * as React from 'react';
import { Button, Text, View, Image } from 'react-native';

export default function TransferSuccessScreen({ navigation }){
    return (
      <View style={{ paddingHorizontal: 8, marginTop: 1, flex: 1 }}>
        <View style={{ flex: 1, alignItems: 'center', paddingTop: 50 }}>
          <Image source={{uri: `https://a.m.dana.id/danaweb/blog/1599825554-6617.jpg`}} 
           style={{width: 300, height: 290}} />
        </View>
        <View style={{ flex: 2, alignItems: 'center', paddingTop: 150}}>
          <Text style={{ textAlign: 'center', fontSize: 24, marginBottom: 8, fontWeight: 'bold' }}>Transfer Berhasil!</Text>
          <Text style={{ textAlign: 'center', fontSize: 24, marginBottom: 8, fontWeight: 'bold' }}>Rp. 100,000</Text>
          <View style={{ paddingLeft: 8, paddingRight: 8, paddingTop: 16, paddingBottom: 16, backgroundColor: '#4982C1', width:300, height: 100 }}>
            <Text style={{ color: '#FFFFFF', textAlign: 'center', marginBottom: 8 }}>20 Agustus 2020</Text>
            <Text style={{ color: '#FFFFFF', textAlign: 'center', marginBottom: 8, fontWeight: 'bold' }}>Arnold Rondonuwu</Text>
            <Text style={{ color: '#FFFFFF', textAlign: 'center', marginBottom: 8 }}> Jl. Arnold Mononutu, Airmadidi, Minahasa Utara</Text>
          </View>
          
          <View style={{ marginTop: 16 }}>
          <Button
          title="SELESAI"
          onPress={() => {
            navigation.navigate('MainBottomTab')
          }}
          />
          </View>
        </View>
      
      </View>
    );
  }