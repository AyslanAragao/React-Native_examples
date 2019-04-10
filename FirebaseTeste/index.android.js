import firebase from 'firebase';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class FirebaseTeste extends Component {

  constructor(props) {
    super(props)

    this.state = {
      pontuacao: 0
    }
  }

  componentWillMount() {
    var config = {
      apiKey: "AIzaSyCEC9hCmBmrTj5v0T4TjDkkmraXR0qWVVk",
      authDomain: "configuracaofirebasereac-a2af9.firebaseapp.com",
      databaseURL: "https://configuracaofirebasereac-a2af9.firebaseio.com",
      projectId: "configuracaofirebasereac-a2af9",
      storageBucket: "configuracaofirebasereac-a2af9.appspot.com",
      messagingSenderId: "7674184009"
    };
    firebase.initializeApp(config);
  }

  salvarDados() {
    //var database = firebase.database();
    //database.ref("pontuacao").set("100"); //Incluir
    //database.ref("pontuacao").set("200"); //Atualizar
    //database.ref("pontuacao").remove();   //Remover

    var funcionarios = firebase.database().ref("funcionarios");
    //funcionarios.child("001").child("nome").set("Josue"); //informando o dado unico
    //funcionarios.push().child("nome").set("Josue");       //o dado unico eh gerado automatico
    funcionarios.push().set(                                //inserido o objeto todo
      {
        nome: "josue",
        idade: "78",
        altura: "1,54",
        peso: "45Kg"
      }
    );
  }

  listarDados() {
    var pontuacao = firebase.database().ref("pontuacao");
    pontuacao.on('value', (snapshot) => {
      var pontos = snapshot.val();
      this.setState({ pontuacao: pontos });
    })
  }

  cadastrarUsuario() {
    var email = "ayslan@josue.com";
    var senha = "naoseiqualehasenha";
    var usuario = firebase.auth();

    usuario.createUserWithEmailAndPassword(
      email,
      senha
    ).catch((erro) => { //erro.code ou erro.message
      var mensagem = "";
      if (erro.code === "auth/weak-password")
        mensagem = "Password tem que ter no minimo 6 carateres.";
      alert(mensagem);
    });

  }

  verificarUsuarioLogado() {
    var usuario = firebase.auth();
    usuario.onAuthStateChanged(
      (usuarioAtual) => {
        if (usuarioAtual) {
          alert("Usuario logado");
        } else {
          alert("Usuario Não Logado");
        }
      })
    /*var usuarioAtual = usuario.currentUser;
    if (usuarioAtual) {
      alert("Usuario logado");
    } else {
      alert("Usuario Não Logado");
    }*/
  }

  deslogarUsuario() {
    const usuario = firebase.auth();
    usuario.signOut();
  }

  logarUsuario() {
    var email = "ayslan@josue.com";
    var senha = "naoseiqualehasenh";
    var usuario = firebase.auth();

    usuario.signInWithEmailAndPassword(
      email,
      senha
    ).catch((erro) => {
      alert(erro.message);
    })
  }

  render() {
    let { pontuacao } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          App com Firebase
        </Text>
        <Button
          onPress={() => { this.cadastrarUsuario() }}
          title="Cadastrar Usuario"
          accessibilityLabel="Cadastrar Usuario"
          color="#841584" />

        <Button
          onPress={() => { this.verificarUsuarioLogado() }}
          title="Verificar Usuario"
          accessibilityLabel="Verificar Usuario"
          color="#841584" />

        <Button
          onPress={() => { this.deslogarUsuario() }}
          title="Deslogar Usuario"
          accessibilityLabel="Deslogar Usuario"
          color="#841584" />

        <Button
          onPress={() => { this.logarUsuario() }}
          title="Logar Usuario"
          accessibilityLabel="Logar Usuario"
          color="#841584" />

        <Text>{pontuacao}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('FirebaseTeste', () => FirebaseTeste);
