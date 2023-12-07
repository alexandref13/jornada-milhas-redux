import { View, ScrollView } from 'react-native';
import { PerfilProps } from './types';
import Icon from '@expo/vector-icons/MaterialIcons';

import styles from './styles';
import { Button, Card, Divider, TextInput, Title } from 'react-native-paper';
import DatePicker from 'src/components/DatePicker';
import { useState } from 'react';
import GenderPicker from 'src/components/GenderPicker';
import useSnackbar from 'src/contexts/Snackbar';
import theme from 'src/config/theme';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';

export default function Perfil({ navigation }: PerfilProps) {
  const loggedUser = useSelector((state: RootState) => state.user.loggedUser);

  const [nome, setNome] = useState(loggedUser?.nome);
  const [dataNascimento, setDataNascimento] = useState(
    loggedUser?.dataNascimento,
  );
  const [genero, setGenero] = useState(loggedUser?.genero);
  const [cpf, setCpf] = useState(loggedUser?.cpf);
  const [telefone, setTelefone] = useState(loggedUser?.telefone);
  const [cidade, setCidade] = useState(loggedUser?.cidade);
  const [estado, setEstado] = useState(loggedUser?.estado);
  const [email, setEmail] = useState(loggedUser?.email);
  const [confirmarEmail, setConfirmarEmail] = useState(loggedUser?.email);
  const [senha, setSenha] = useState(loggedUser?.senha);
  const [confirmarSenha, setConfirmarSenha] = useState(loggedUser?.senha);
  const { criarMensagem } = useSnackbar();

  const handleSubmit = () => {
    // const novosDados: Usuario = {
    //   id: loggedUser?.id,
    //   nome,
    //   dataNascimento,
    //   genero,
    //   cpf,
    //   telefone,
    //   cidade,
    //   estado,
    //   email,
    //   senha,
    // };
    // mudarDadosUsuario(novosDados);
    // setloggedUser(novosDados);
    criarMensagem.sucesso('Dados alterados com sucesso!');
    navigation.navigate('Home');
  };

  const handleExcluir = () => {
    // excluirUsuario(loggedUser.id);
    // setloggedUser(undefined);
    criarMensagem.sucesso('Conta excluida com sucesso!');
    navigation.navigate('Home');
  };

  return (
    <ScrollView>
      <View style={styles.header}>
        <Icon name="account-circle" size={30} color="white" />
        <Title style={styles.headerTitulo}> Meu Perfil </Title>
      </View>
      <View style={styles.container}>
        <Card style={styles.card}>
          <View style={styles.tituloContainer}>
            <Title style={styles.ola}> Olá, {loggedUser?.nome}! </Title>
            <Button
              mode="contained"
              buttonColor={theme.colors.error}
              onPress={handleExcluir}
            >
              Excluir conta
            </Button>
          </View>
          <View style={styles.secao}>
            <Title style={styles.secaoTitulo}> Dados pessoais </Title>
            <TextInput
              value={nome}
              onChangeText={setNome}
              mode="outlined"
              label="Nome completo"
            />
            <DatePicker
              value={dataNascimento}
              onChangeText={setDataNascimento}
              mode="outlined"
              label="Data de nascimento"
            />
            <GenderPicker value={genero} onChange={setGenero} />
            <TextInput
              mode="outlined"
              label="cpf"
              value={cpf}
              onChangeText={setCpf}
            />
            <TextInput
              mode="outlined"
              label="telefone"
              value={telefone}
              onChangeText={setTelefone}
            />
            <TextInput
              mode="outlined"
              label="cidade"
              value={cidade}
              onChangeText={setCidade}
            />
            <TextInput
              mode="outlined"
              label="estado"
              value={estado}
              onChangeText={setEstado}
            />
            <Divider style={styles.secaoDivider} />
          </View>
          <View style={styles.secao}>
            <Title style={styles.secaoTitulo}> Dados de acesso </Title>
            <TextInput
              mode="outlined"
              label="Email"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              mode="outlined"
              label="Confirmar email"
              value={confirmarEmail}
              onChangeText={setConfirmarEmail}
            />
            <TextInput
              mode="outlined"
              label="Senha"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry
            />
            <TextInput
              mode="outlined"
              label="Confirmar senha"
              value={confirmarSenha}
              onChangeText={setConfirmarSenha}
              secureTextEntry
            />
          </View>
          <Button
            mode="contained"
            style={styles.atualizar}
            onPress={handleSubmit}
          >
            Atualizar
          </Button>
        </Card>
      </View>
    </ScrollView>
  );
}
