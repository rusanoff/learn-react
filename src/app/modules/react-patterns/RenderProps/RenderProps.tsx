import React from 'react';

interface RenderPropsWrapperProps {
  children?: (count: number, setCount: (count: number) => void) => React.ReactNode;
}

const RenderPropsWrapper: React.FC<RenderPropsWrapperProps> = ({ children }) => {
  const [count, setCount] = React.useState<number>(0);

  return (
    <div>
      { children ? children(count, setCount) : null }
    </div>
  )
};

export const RenderPropsExample: React.FC = () => {
  return (
    <div>
      <RenderPropsWrapper>
        {
          (count, setCount) => (
            <div onClick={() => setCount(count + 1)}>
              { count }
            </div>
          )
        }
      </RenderPropsWrapper>
      <RenderPropsWrapper>
        {
          (count, setCount) => (
            <a href="/" onClick={(e: React.MouseEvent<HTMLAnchorElement>) => { e.preventDefault(); setCount(count + 1) }} >
              { count }
            </a>
          )
        }
      </RenderPropsWrapper>
    </div>
  );
};
