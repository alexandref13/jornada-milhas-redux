import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import server from 'assets/server';
import uuid from 'react-native-uuid';

import { logar } from 'src/services/usuarios';
import { Usuario } from 'src/types/usuario';

type LoginPayload = {
  emailOuCpf: Usuario['cpf'] | Usuario['email'];
  senha: Usuario['senha'];
};

type InitialStateProps = {
  loggedUser: Usuario | undefined;
  users: Usuario[];
};

const initialState: InitialStateProps = {
  loggedUser: undefined,
  users: server.usuarios,
};

const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {
    login: (state, action: PayloadAction<LoginPayload>) => {
      console.log({ STATE: action.payload });

      const userFinded = logar(action.payload.emailOuCpf, action.payload.senha);

      if (!userFinded) throw new Error('Email/CPF ou senha incorretos');

      state.loggedUser = userFinded;
    },

    logout: (state) => {
      state.loggedUser = undefined;
    },

    signIn: (state, action: PayloadAction<Omit<Usuario, 'id'>>) => {
      const id = uuid.v4();
      const newUser = {
        ...action.payload,
        id,
      };

      state.users.push(newUser);
      state.loggedUser = newUser;
    },
  },
});

export const { login, logout, signIn } = userSlice.actions;

export default userSlice.reducer;
