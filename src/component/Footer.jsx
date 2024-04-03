const Footer = () => {
  const navItems = [
    { id: 1, text: "Home" },
    { id: 3, text: "Skills" },
    { id: 4, text: "Works" },
    { id: 5, text: "Contact" },
  ];
  return (
    <footer className="bg-black border-t border-t-gray-600 shadow">
      <div className="w-full  mx-auto max-w-screen-xl p-4 md:flex  md:items-center md:justify-between">
        <p className="text-sm text-gray-400 text-center md:text-start dark:text-gray-400">
          © 2024 Muhammed Anas. All Rights Reserved.
        </p>
        <ul className="flex flex-wrap justify-center md:justify-between items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-500 sm:mt-0">
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
