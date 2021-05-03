import * as React from 'react';
import { Button, Text, TextInput, TouchableOpacity, View, Image} from 'react-native';


import {AuthContext} from '../Context';

export default function SignInScreen({ navigation }) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
  
    const { signIn } = React.useContext(AuthContext);
  
    return (
      <View style={{ marginHorizontal: 8, flex: 1, alignItems: 'center',  }}> 
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <Image source={{uri: `https://lh3.googleusercontent.com/wdyC-caSEV7OfDYFK0rGGXKu_nW24Zqww3jsWyJSEMNVweteDq2XVC5oDhX7nAiS5oSnPLsgVN2vO8ClQx86VlfD53dKCZlbeI7FrZKVy8qhcExJzS_dHplfl1xS4tsZ3561YzS6W1E3Fb5mq0fucVnAML0EvQ35Qso6ajkwKJxRn8DsyDnRVCUeuHBsmgCSL0s2x2_oBodg39BExKVc0CEUxpjcTvZUOYCw8WBoM45770atnj0AMCviCVYqYpXkDkDC0oXsaTBvvXqwNfEqa3EKsSW1yvUpVWp_pw2GLIs_WCxvr3Eyq9An6dckIqy3fVSA1ZhdppSqa2tm5eIlKbCOvmT5PAmKMkLt2NXM1k6lsmBVzqW7VuDuiLDWVVO8-bIzBOIzcgRr4XTVXeWaXD13_zPI26Y24cv8o-IA6vEh5lgeLefvGjUf1FFtUaVhjMDXHhgh1uFwlJoltyshpGCoCebDfJa6mwHKcw_lrIFBVsXULEE1yvgOApn8o39i6-rU4hFdmgHFPZuOJl4m7e-QJVVMELH4pJCV82n2Eep5WerAly-tjc0BVuQRuHx6_hIMZgXrTHHM_NbOZzWlFDUYo7RmDwsW3ouORLVSuTxJLcdQRBSi9Ydq_L4RcgHEv9OsvTI57nBm_qdA5c_6YbZ_PF0u5lJTe_-61v1MJbqoCyo3AdULK0Q8L65V2Ln2CJcaV7tRTg79N9XXzCfCRqf_=s500-no?authuser=0`}} 
           style={{width: 110, height: 110, marginBottom: 5}} />
          <Text style={{ textAlign: 'center', marginBottom: 1, fontSize: 24, color: `#000000`,  fontWeight: 'bold', }}></Text>
        </View>
        <View style={{ flex: 1 }}>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            style={{
              borderColor: '#C3C3C3',
              width: 300,
              height: 40,
              borderWidth: 1,
              borderRadius: 11,
              marginBottom: 16,

            }}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={{
              borderColor: '#C3C3C3',
              width: 300,
              height: 40,
              borderWidth: 1,
              borderRadius: 11,
              marginBottom: 24
            }}
          />
          <Button title="Login" onPress={() => signIn({ email, password })} />
          <TouchableOpacity style={{ marginTop: 32,  }} onPress={() => { navigation.navigate('Registration') }}>
            <Text style={{ textAlign: 'center', alignItems: 'center' }}>Create Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }