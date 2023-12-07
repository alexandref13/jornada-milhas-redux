import { DrawerScreenProps } from '@react-navigation/drawer';
import { RootStackParamList } from 'src/routes';
import { TipoViagem } from 'src/types/viagem';

export type Filtros = {
  tipo?: TipoViagem;
  pessoas: 1 | 2 | 3;
  origem: string;
  destino: string;
  filtrarPorUsuario: 'cidade' | 'estado' | 'todas';
  dataIda?: string;
  dataVolta?: string;
};

export type HomeProps = DrawerScreenProps<RootStackParamList, 'Home'>;
