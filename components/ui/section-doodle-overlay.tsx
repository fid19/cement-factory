import { cn } from "@/lib/utils"

type DoodleVariant = "waves" | "blueprint" | "rings" | "zigzag" | "crosshatch"
type DoodlePlacement =
  | "top-right"
  | "top-left"
  | "bottom-right"
  | "bottom-left"
  | "center"

type SectionDoodleOverlayProps = {
  className?: string
  variant?: DoodleVariant
  placement?: DoodlePlacement
}

const placementClasses: Record<DoodlePlacement, string> = {
  "top-right": "right-0 top-0 translate-x-1/5 -translate-y-1/5",
  "top-left": "left-0 top-0 -translate-x-1/5 -translate-y-1/5",
  "bottom-right": "right-0 bottom-0 translate-x-1/5 translate-y-1/5",
  "bottom-left": "left-0 bottom-0 -translate-x-1/5 translate-y-1/5",
  center: "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
}

export function SectionDoodleOverlay({
  className,
  variant = "waves",
  placement = "top-right",
}: SectionDoodleOverlayProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute z-0 h-72 w-72 opacity-35 sm:h-96 sm:w-96",
        placementClasses[placement],
        className
      )}
    >
      <svg
        viewBox="0 0 400 400"
        fill="none"
        className="doodle-slow-drift h-full w-full"
      >
        {variant === "waves" && (
          <g
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            className="doodle-stroke-shift"
          >
            <path d="M28 92c30-20 58-20 88 0s58 20 88 0 58-20 88 0 58 20 80 0" />
            <path d="M28 140c30-20 58-20 88 0s58 20 88 0 58-20 88 0 58 20 80 0" />
            <path d="M28 188c30-20 58-20 88 0s58 20 88 0 58-20 88 0 58 20 80 0" />
            <path d="M28 236c30-20 58-20 88 0s58 20 88 0 58-20 88 0 58 20 80 0" />
          </g>
        )}

        {variant === "blueprint" && (
          <g
            stroke="currentColor"
            strokeWidth="1.1"
            className="doodle-stroke-shift"
          >
            <path d="M56 68h208v208H56z" />
            <path d="M112 68v208M168 68v208M56 124h208M56 180h208" />
            <circle cx="304" cy="120" r="52" />
            <circle cx="304" cy="120" r="20" />
            <path d="M280 248c26 10 52 10 76 0M276 276c28 12 56 12 84 0" />
          </g>
        )}

        {variant === "rings" && (
          <g
            stroke="currentColor"
            strokeWidth="1.1"
            strokeLinecap="round"
            className="doodle-soft-float"
          >
            <circle cx="138" cy="140" r="96" />
            <circle cx="138" cy="140" r="64" />
            <circle cx="138" cy="140" r="34" />
            <path d="M248 72c42 10 72 40 84 82M232 242c44 26 96 20 132-10" />
            <path d="M226 286c42-6 82 4 116 34" />
          </g>
        )}

        {variant === "zigzag" && (
          <g
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            className="doodle-stroke-shift"
          >
            <path d="M20 116h90l26-30 32 62 40-78 34 58h128" />
            <path d="M20 170h118l28-40 26 74 34-84 42 66h102" />
            <path d="M20 232h86l38-48 30 64 36-74 44 58h116" />
            <path d="M20 290h112l24-42 36 74 38-84 34 52h106" />
          </g>
        )}

        {variant === "crosshatch" && (
          <g
            stroke="currentColor"
            strokeWidth="1.05"
            className="doodle-soft-float"
          >
            <path d="M44 74h312M44 118h312M44 162h312M44 206h312M44 250h312M44 294h312" />
            <path d="M74 44v312M128 44v312M182 44v312M236 44v312M290 44v312M344 44v312" />
            <path d="M52 344l88-88M144 344l88-88M236 344l88-88" />
          </g>
        )}
      </svg>
    </div>
  )
}
