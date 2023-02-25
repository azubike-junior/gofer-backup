import Image from "next/image";

interface BtnProp {
  child: any;
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: any;
  icon?: any;
  active?: boolean;
}

export default function Button({
  child,
  type = "button",
  onClick,
  className,
  icon,
  active,
}: BtnProp) {
  return (
    <button className={className} onClick={onClick}>
      <div className="flex justify-center items-center">
        {icon && (
          <Image
            src={icon}
            width={30}
            height={30}
            alt="notify"
            className="pr-3"
          />
        )}{" "}
        {child}
      </div>
    </button>
  );
}
