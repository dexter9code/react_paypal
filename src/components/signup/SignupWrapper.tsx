import { ReactNode } from "react";

type SignupWrapperProps = {
  title: string;
  children: ReactNode;
};

const SignupWrapper = ({ title, children }: SignupWrapperProps) => {
  return (
    <>
      <h2>{title}</h2>
      <div
        style={{
          display: "grid",
          gap: "1rem .5rem",
          justifyContent: "flex-start",
        }}
      >
        {children}
      </div>
    </>
  );
};

export default SignupWrapper;
