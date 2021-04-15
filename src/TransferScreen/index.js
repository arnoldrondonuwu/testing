import * as React from 'react';
import { Button, Text, TextInput, View, Image, ScrollView } from 'react-native';

export default function TransferScreen({ navigation }){
    return (
      <ScrollView>
      <View style={{ flex: 1, marginHorizontal: 8 }}>
        <View style={{ flex: 1, alignItems: 'center', paddingTop: 50 }}>
          <Image source={{uri: `https://a.m.dana.id/danaweb/blog/1599825554-6617.jpg`}} 
           style={{width: 300, height: 290}} />
        </View>
        <View style={{ flex: 2, alignItems: 'center', }}>
          <TextInput
          style={{ marginTop:50 ,borderWidth: 1, borderColor: '#C3C3C3', marginBottom: 16, borderRadius: 11, width:300, height: 40 }}
          placeholder="Nomor Handphone Penerima"
          />
          <Button
          title="                 Periksa Nomor                   "
          onPress={() => {
            navigation.navigate('TransferNominalScreen');
          }}
          />
        </View>
      </View>
      </ScrollView>
    );
  }