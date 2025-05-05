import styles from "./Header.module.css";

export default function Header() {
  return (
    <>
      <div className="flex items-center justify-center w-full h-16 sticky top-0">
        <div className="flex justify-between items-center w-1/2 h-full px-4 bg-black border-3 border-cyan-500">
          <h1 className="text-3xl font-bold ">Reiss Oliveros</h1>
          <a href="/resume" className={styles.link}>Resume</a>
          <a href="/projects" className={styles.link}>Projects</a>
          <a href="/contact" className="link">Contact</a>
        </div>
      </div>
      <div className="w-full h-16 border-2 border-gray-600"></div>
      <div className="w-full h-16 border-2 border-gray-600"></div>
      <div className="w-full h-16 border-2 border-gray-600"></div>
      <div className="w-full h-16 border-2 border-gray-600"></div>
      <div className="w-full h-16 border-2 border-gray-600"></div>
      <div className="w-full h-16 border-2 border-gray-600"></div>
      <div className="w-full h-16 border-2 border-gray-600"></div>
      <div className="w-full h-16 border-2 border-gray-600"></div>
      <div className="w-full h-16 border-2 border-gray-600"></div>
      <div className="w-full h-16 border-2 border-gray-600"></div>
      <div className="w-full h-16 border-2 border-gray-600"></div>
    </>
  );
}