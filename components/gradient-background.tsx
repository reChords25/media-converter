"use client";

export default function GradientBackground() {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-white dark:bg-neutral-950">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="absolute -left-100 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]" />
      <div className="absolute left-80 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-sky-400 opacity-20 blur-[100px]" />
      <div className="animation-delay-1000 absolute bottom-1/4 left-0 right-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-violet-400 opacity-20 blur-[100px]" />
      <div className="animation-delay-2000 absolute bottom-0 left-1/3 right-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-rose-400 opacity-20 blur-[100px]" />
    </div>
  );
}
