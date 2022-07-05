export type LoggedUserType = {
  id: string;
  name: string;
  email: string;
};
export type RoleType = {
  key: string;
};
export type LoginType = {
  loggedUser?: LoggedUserType;
  accessToken?: string;
  refreshToken?: string;
  roles?: RoleType[];
};

export type ProviderPropsType = {
  children: import('react').ReactNode;
  /**
   * Dados inicais de login, pode ser utilizado para mock,
   * ou para carregamento de dados Default.
   */
  login?: LoginType;
  config?: SetupPropsType;
  /**
   * Conteúdo a ser exibido quando o setup do provider
   * é realizado de forma assíncrona.
   */
  placeholder?: import('react').ReactNode;
};
export type ProviderType = import('react').FC<ProviderPropsType>;
export type AppContextValueType = {
  login: LoginType;
  /**
   * Funções espostas dentro do objeto `private` não devem ser invocadas
   * fora do core.
   */
  private: {
    setLogin: (login: LoginType) => void;
  };
};

export type SetupPropsType = {
  appName?: string;
  eventEmitterDebug?: boolean;
  reactotron?: boolean;
};
