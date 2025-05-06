
export default function Header() {
  return (
    <>
      <div className="flex justify-center items-center w-full h-16 mt-4 sticky top-0">
        <div className="flex items-center justify-evenly bg-black border-2 border-green-600 w-6/10 h-full rounded-full">
          <div className={linkStyles}>
            <a href="/"><b>Home</b></a>
          </div>
          <div className={linkStyles}>
            <a href="/resume"><b>Resume</b></a>
          </div>
          <div className={linkStyles}>
            <a href="/projects"><b>Projects</b></a>
          </div>
          <div className={linkStyles}>
            <a href="/contact"><b>Contact</b></a>
          </div>
          <div className={linkStyles}>
            <a href="/experience"><b>Experience</b></a>
          </div>
        </div>
      </div>
    </>
  );
}

const linkStyles = `
  flex justify-center items-center w-25 h-4/5 text-white rounded-2xl bg-green-600 hover:bg-green-500 hover:text-black hover:animate-pulse
`;