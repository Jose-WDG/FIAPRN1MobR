import type {DrawerNavigationProp} from '@react-navigation/drawer';
type Contact = {
  name: string;
  url: string;
};

type Membro = {
  id: number;
  nome: string;
  imagemUrl: string;
  technologies: string[];
  biography: string;
  recentWork: string;
  contacts: Contact[];
};
export type ILoggedDrawer = {
  Dashboard: undefined;
  Maps: undefined;
  Membros: undefined;
};

export type LoggedDrawerRouteProps = DrawerNavigationProp<ILoggedDrawer>;
