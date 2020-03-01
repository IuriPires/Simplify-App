import React, { useState } from 'react';
import { Text, StyleSheet, View, ImageBackground } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import LinearGradient from 'react-native-linear-gradient';
import BackImg from '../../assets/images/Login/tela_login.png';
import { Container } from './styles';
import SimpleInput from '../../components/SimpleInput';

// import { Container } from './styles';

const styles = StyleSheet.create({
  linearGradient: {
    height: 45,
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 12,
    maxWidth: 268,
    top: 50,
    left: 35,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  mainView: {
    top: 300,
  },
  checkboxView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
const login = form => {
  const payload = {
    userCpf: form.cpf,
    userPassword: form.password,
  };
};

function Main({ navigation }) {
  const [isChecked, setChecked] = useState(false);
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <ImageBackground
        resizeMode="cover"
        source={BackImg}
        style={{ height: '100%', width: '100%' }}
      >
        <Container>
          <View style={styles.mainView}>
            <View style={{ marginBottom: 12 }}>
              <Text
                style={{ fontSize: 55, color: '#0154C6', fontWeight: 'bold' }}
              >
                Olá
              </Text>
              <Text>Agora as coisas estão mais</Text>
              <Text>
                {' '}
                <Text style={{ color: '#0154C6' }}>Simplify :)</Text> para nós
                da TradeUp
              </Text>
            </View>
            <View>
              <SimpleInput
                value={cpf}
                labelText="CPF"
                onValueChange={setCpf}
                placeholder="Informe o CPF"
              />
              <SimpleInput
                labelText="Senha"
                value={password}
                onValueChange={setPassword}
                placeholder="Informe a senha"
              />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <CheckBox
                value={isChecked}
                onValueChange={setChecked}
                tintColors={{ true: '#0154C6', false: '#0154C6' }}
              />
              <Text>Lembrar minha senha</Text>
            </View>
            <View clickable onClick={login({ cpf, password })}>
              <LinearGradient
                colors={['#FFB202', '#FF4577']}
                style={styles.linearGradient}
              >
                <Text style={styles.buttonText}>Entrar</Text>
              </LinearGradient>
            </View>
            <View style={{ marginTop: 55 }}>
              <Text
                onPress={() => navigation.navigate('ResetPassoword')}
                style={{ color: '#0154C6', textAlign: 'center' }}
              >
                Esqueceu a senha?
              </Text>
            </View>
          </View>
        </Container>
      </ImageBackground>
    </>
  );
}

Main.navigationOptions = {
  header: null,
};

export default Main;
