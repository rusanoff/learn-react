import React from 'react';

interface HocClassProps {
  isWrapped: boolean;
}

const UnwrappedComponent: React.FC = (props) => {
  return (
    <div>
      <pre>
        { JSON.stringify(props, null, 2) }
      </pre>
    </div>
  );
}
const HighOrderComponentFuncExample = withHighOrderComponentFunc(UnwrappedComponent);
const HighOrderComponentClassExample = withHighOrderComponentClass(UnwrappedComponent);

export const HighOrderComponentExample: React.FC = (props) => {
  return (
    <div>
      <HighOrderComponentFuncExample { ...props }>Example</HighOrderComponentFuncExample>
      <hr/>
      <HighOrderComponentClassExample { ...props }>Example</HighOrderComponentClassExample>
    </div>
  );
};

function withHighOrderComponentFunc<P extends HocClassProps>(WrappedComponent: React.ComponentType<P>) {
  return (props: Omit<P, keyof HocClassProps>) => {
    return (
      <WrappedComponent { ...props as P } isWrapped={true} />
    );
  };
}

function withHighOrderComponentClass<P extends HocClassProps>(WrappedComponent: React.ComponentType<P>) {
  return class extends React.Component<Omit<P, keyof HocClassProps>, {}> {
    render() {
      return (
        <WrappedComponent { ...this.props as P } isWrapped={true} />
      );
    }
  };
}
