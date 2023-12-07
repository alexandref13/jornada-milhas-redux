import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { logar } from 'src/services/usuarios';
import { Usuario } from 'src/types/usuario';

type LoginPayload = {
  emailOuCpf: Usuario['cpf'] | Usuario['email'];
  senha: Usuario['senha'];
};

type InitialStateProps = {
  loggedUser: Usuario | undefined;
};

const initialState: InitialStateProps = {
  loggedUser: undefined,
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
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
