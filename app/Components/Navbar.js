export default function Navbar() {
  return (
    <nav className="flex justify-between p-6 bg-black text-white">
      <h1 className="text-xl font-bold">Sreenath TS</h1>

      <div className="space-x-6">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}