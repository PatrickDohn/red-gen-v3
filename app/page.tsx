import { Hero115 } from "@/components/Hero";


export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Hero115 heading={"Resume Creator"} description={"Build your Resume"} button={{
        text: "Get Started",
        icon: undefined,
        url: "/edit",
        className: undefined
      }} />
    </div>
  );
}
