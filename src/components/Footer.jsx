const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="mb-4">
          © {new Date().getFullYear()} Temesgen Nemie. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
