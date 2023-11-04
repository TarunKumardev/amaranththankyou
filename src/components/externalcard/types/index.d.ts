export interface IExtenrnalComponentMap {
    name: (props: { data: IinternalData }) => JSX.Element;
    icon: () => JSX.Element;
    email: (props: { data: IinternalData }) => JSX.Element;
    delete: (props: { data: IinternalData }) => JSX.Element;
    edit: (props: { data: IinternalData }) => JSX.Element;
  }