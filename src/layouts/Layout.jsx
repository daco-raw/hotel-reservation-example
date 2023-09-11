import { NavBar } from "../components";

// eslint-disable-next-line react/prop-types
export default function LayoutPage({ children }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}
