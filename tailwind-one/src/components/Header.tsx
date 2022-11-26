import logo from "../assets/logo.jpg";

export default function Header() {
  return (
    <div className="flex py-12 px-4 flex-row items-center bg-transparent text-white w-full h-16 border-indigo-900 border-solid border-b">
      <div className="flex flex-row items-center">
        <img
          src={logo}
          className=" h-20 w-20 mr-4 z-0 rounded-full transition duration-1000 opacity-50 hover:opacity-100"
          alt="logo"
        />
        <h1 className="text-4xl font-bold h-full transition duration-1000 opacity-50 hover:opacity-100">
          |
        </h1>
        <span className="ml-2 text-xl font-extrabold transition duration-1000 opacity-50 hover:opacity-100">
          Luiz Hakan
        </span>
      </div>
      <div className="flex ml-72 mr-auto">
        <nav>
          <ul className="flex">
            <li className="mr-14 hover:bg-gray-900 py-2 rounded-full">
              <a href="#">Home</a>
            </li>
            <li className="mr-14 hover:bg-gray-900 py-2 rounded-full">
              <a href="#">About</a>
            </li>
            <li className="hover:bg-gray-900 py-2 rounded-full">
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
