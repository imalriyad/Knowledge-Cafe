import profile from "../assets/profile.png";
const Header = () => {
  return (
    <header className="flex items-center justify-between mb-6">
      <h1 className="md:text-4xl text-2xl font-bold">Knowledge Cafe</h1>
      <img src={profile} className="w-[50px]" alt="" />
    </header>
  );
};

export default Header;
