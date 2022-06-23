export type LoggedUserType = {
  id: string;
  name: string;
  email: string;
};
export type RoleType = {};
export type LoginType = {
  loggedUser?: LoggedUserType;
  accessToken?: string;
  refreshToken?: string;
  roles?: RoleType[];
};

export type ProviderPropsType = {
  children: import('react').ReactElement;
  initialLogin?: LoginType;
};
export type ProviderType = import('react').FC<ProviderPropsType>;
export type AppContextValueType = {
  setLogin: (login: LoginType) => void;
  login: LoginType;
};
