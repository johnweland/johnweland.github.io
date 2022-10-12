const Footer = () => {
  return (
    <>
      <footer className="mx-auto max-w-7xl px-4 lg:px-8 text-neutral-300">
        <div className="p-4 border-t-2 border-neutral-800 text-gray-400 text-center text-xs">
          Copyright &copy; {new Date().getFullYear()} | All Rights Reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
