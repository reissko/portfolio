import Image from "next/image";

export default function Resume() {
  return (
    <>
      <div className="flex justify-center">
        <Image src="/public/resume.pdf" alt="resume" width={800} height={600} className="m-10 border-2 border-green-600" />
      </div>
    </>
  );
}