import AnimatedButton from "@/components/AnimatedButton";

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center">
      {/* Hero - pleine hauteur */}
      <section className="mx-auto flex max-w-6xl flex-col items-center justify-center px-6 py-24 text-center">
        <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
          The feedback cockpit for{" "}
          <span className="text-blue-600">high-performing teams</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
          Stop losing track of your team&apos;s engagement. Spot weak signals and
          prevent turnover before it&apos;s too late—natively integrated into
          Slack and Microsoft Teams.
        </p>
        <AnimatedButton className="mt-10" distance={50} duration={0.8} delay={0.3}>
          <a
            href="mailto:bastien.bachir@gmail.com?subject=QuickFeed%20-%20Request%20Access&body=Hello%20Bastien%2C%20I%20would%20like%20to%20try%20the%20QuickFeed%20cockpit%20for%20my%20team."
            className="inline-flex rounded-lg bg-blue-600 px-8 py-3 font-medium text-white transition-all duration-300 ease-out hover:scale-105 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30"
          >
            Request Early Access
          </a>
        </AnimatedButton>
      </section>
    </div>
  );
}
