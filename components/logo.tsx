import Link from "next/link"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function Logo({ className = "", size = "md" }: LogoProps) {
  const textSize = size === "sm" ? "text-base" : size === "lg" ? "text-2xl" : "text-xl"

  return (
    <Link href="/" className={`flex items-center hover:opacity-80 transition-opacity ${className}`}>
      <div className="flex flex-col leading-none">
        <span className={`${textSize} font-bold text-magazine-slate uppercase tracking-tight`}>
          Hrvatska<span className="text-magazine-terracotta">Stranice</span>
        </span>
        <span className="text-[10px] text-magazine-grey uppercase tracking-widest mt-0.5">Klađenje</span>
      </div>
    </Link>
  )
}
