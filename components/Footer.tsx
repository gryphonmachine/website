export const Footer = () => {
  return (
    <div className="px-4 py-2 pb-16 mt-10 rounded-lg flex flex-col md:flex-row items-center justify-center text-center">
      <div className="text-gray-400">
        © {new Date().getFullYear()}. Made with ❤️ by 6070: Gryphon Machine
      </div>
    </div>
  );
};
