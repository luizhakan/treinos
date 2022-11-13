import React, { createContext } from "react";

interface IExampleContext {
  number: number;
  setNumber: React.Dispatch<React.SetStateAction<number>>;
}

interface IProps {
  children: React.ReactNode;
}

export const ExampleContext = createContext<IExampleContext>({
  number: 0,
  setNumber: () => {
    console.warn("setNumber not ready");
  },
});

export const ExampleProvider = ({ children }: IProps) => {
  const [number, setNumber] = React.useState<number>(0);

  return (
    <div>
      <ExampleContext.Provider value={{ number, setNumber }}>
        {children}
      </ExampleContext.Provider>
    </div>
  );
};
