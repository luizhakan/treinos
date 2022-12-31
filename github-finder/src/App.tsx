import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-5xl text-center">Github Finder</h1>
      <Outlet />
    </div>
  );
}
