export const Footer = () => {
  return (
    <div className="px-4 py-2 pb-16 mt-10 rounded-lg flex flex-col md:flex-row items-center justify-center text-center">
      <div className="text-gray-400 text-sm uppercase">
        Copyright © {new Date().getFullYear()} ⎯{" "}
        <span className="text-gray-500">Team 6070 Gryphon Machine</span>
      </div>
    </div>
  );
};
