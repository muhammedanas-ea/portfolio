const Footer = () => {
  const navItems = [
    { id: 1, text: "Home" },
    { id: 3, text: "Skills" },
    { id: 4, text: "Works" },
    { id: 5, text: "Contact" },
  ];
  return (
    <footer className="bg-black border-t-2 shadow m-4">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-100 sm:text-center dark:text-gray-100">
          © 2024 <a className="hover:underline">Muhammed Anas</a>. All Rights
          Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-300 dark:text-gray-300 sm:mt-0">
          {navItems.map((item) => {
            return (
              <li key={item.id} className="hover:underline me-4 md:me-6">
                {item.text}
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
