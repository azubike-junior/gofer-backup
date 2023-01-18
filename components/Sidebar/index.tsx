import Image from "next/image";

export default function Sidebar() {
  return (
    <div className="w-310 bg-darkGreen border-r-2 border-borderAsh pt-8 px-8 h-screen fixed top-0 left-0">
      {/* <div className="">
        <Image src={logo2} alt="logo" />
        <div className="mt-16 grid gap-10 text-white">
          {Menu && Menu.map((item, index) => (
           <Dropdown key={index} item={item}/>
          ))}
        </div>
      </div> */}
    </div>
  );
}
