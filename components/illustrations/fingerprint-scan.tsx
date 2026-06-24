import { cn } from "@/lib/utils"
import Image from "next/image"

export const FingerprintScanIllustration = () => {
  return (
    <div className="relative aspect-square max-w-64">
      <div className="relative flex aspect-square justify-center mask-radial-from-0% mask-radial-to-75%">
        <Image
          src="/gallery/fingerprint-scan.png"
          alt="Fingerprint scanner"
          className="size-full scale-110 object-cover"
          width={224}
          height={224}
        />
      </div>
      <div className="absolute inset-22 m-auto aspect-3/4 translate-x-1.5 -translate-y-9.5 border border-white/5 bg-linear-to-b from-foreground/5 via-transparent to-foreground/5">
        <CardDecorator className="border-primary" />
        <div className="animate-scan absolute inset-0 z-10">
          <div className="absolute inset-x-0 m-auto h-2 w-2/3 bg-indigo-500 blur-lg" />
        </div>
      </div>
    </div>
  )
}

export const CardDecorator = ({ className }: { className?: string }) => (
  <>
    <span
      className={cn(
        "animate-breathing absolute -top-px -left-px block size-2.5 rounded-tl border-t-[1.5px] border-l-[1.5px] border-white",
        className
      )}
    ></span>
    <span
      className={cn(
        "animate-breathing absolute -top-px -right-px block size-2.5 rounded-tr border-t-[1.5px] border-r-[1.5px] border-white",
        className
      )}
    ></span>
    <span
      className={cn(
        "animate-breathing absolute -bottom-px -left-px block size-2.5 rounded-bl border-b-[1.5px] border-l-[1.5px] border-white",
        className
      )}
    ></span>
    <span
      className={cn(
        "animate-breathing absolute -right-px -bottom-px block size-2.5 rounded-br border-r-[1.5px] border-b-[1.5px] border-white",
        className
      )}
    ></span>
  </>
)

export default FingerprintScanIllustration
