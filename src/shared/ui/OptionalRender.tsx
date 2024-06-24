import { ReactNode } from 'react';

const OptionalRender = (props: { condition: boolean; children: ReactNode }) => {
  const { condition, children } = props;
  return condition ? children : null;
};

export default OptionalRender;
