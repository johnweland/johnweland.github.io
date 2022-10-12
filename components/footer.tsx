const Footer = () => {
  return (
    <>
      <footer className="mx-auto max-w-7xl px-4 lg:px-8 dark:text-neutral-300">
        <div className="p-4 border-t-2 border-neutral-100 dark:border-neutral-800 text-gray-500 text-center">
          &copy; {new Date().getFullYear()}
        </div>
      </footer>
    </>
  );
};

export default Footer;
