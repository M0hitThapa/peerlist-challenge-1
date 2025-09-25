import NavbarAnimation from "@/components/animated";

export default function Home() {
  return (
    <div className="relative h-screen bg-[#fafaff]">
      {/* Dashed Gradient (original) */}
      <div className="text-center pt-10">
        <h1 className="text-4xl font-semibold text-shadow-md mb-2">Teams</h1>
        <p className="text-xl font-medium text-neutral-600 mb-5">
          Meet the brains behind this saas
        </p>
      </div>
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #D1D0CF 1px, transparent 1px),
            linear-gradient(to bottom, #D1D0CF 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 0",
          maskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            )
          `,
          WebkitMaskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            )
          `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />
      <div className="flex flex-col items-center h-screen ">
        <NavbarAnimation />
      </div>
    </div>
  );
}
