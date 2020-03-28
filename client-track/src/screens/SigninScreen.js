import React, { useState, useContext } from 'react'
import Spacer from '../components/Spacer'
import { StyleSheet, View } from 'react-native'
import { Input, Text, Button } from 'react-native-elements'
import { Feather } from '@expo/vector-icons'
import { Context as AuthContext } from '../context/AuthProvider'


const showIcon = (iconName) => (
  <Feather name={iconName} style={styles.icon} />
)

const SigninScreen = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { logIn, state } = useContext(AuthContext)

  const handleLogIn = () => {
    logIn({username, password}, () => console.log('callback'))
  }
  console.log(state)
  return (
    <View style={styles.container}>
      <Spacer>
        <Text h2 style={styles.text}>Sign in</Text>
      </Spacer>
      <Spacer>
        <Input label="Username" style={{margin: 50}}
        value={username} onChangeText={setUsername} leftIcon={showIcon('user')}/>
      </Spacer>
      <Spacer>
        <Input secureTextEntry label="Password" style={{margin: 50}}
        value={password} onChangeText={setPassword} leftIcon={showIcon('lock')}/>
      </Spacer>
      {state.errorText ? <Text style={styles.error}>{state.errorText}</Text>: null}
      <Spacer>
        <Button title="Sign in" style={{margin: 50}} onPress={handleLogIn} />
      </Spacer>
    </View>
  )
}

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 150,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  text: {
    color: '#000'
  },
  icon: {
    color: '#000',
    fontSize: 16,
    marginRight: 8
  },
  error: {
    color: 'red',
    marginLeft: 16
  }
})

export default SigninScreen
