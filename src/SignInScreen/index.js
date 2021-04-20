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
          <Image source={{uri: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5A9Cpoitdcodu6epGHvK8d4nbSz0JinpdHQ&usqp=CAU`}} 
           style={{width: 110, height: 95, marginBottom: 5}} />
          <Text style={{ textAlign: 'center', marginBottom: 30, fontSize: 24, color: `#000000`,  fontWeight: 'bold', }}>U-payment</Text>
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