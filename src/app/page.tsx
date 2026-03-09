export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-slate-100 bg-white/95 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-xl font-semibold text-slate-900">
            Logo
          </a>
          <div className="flex items-center gap-8">
            <a
              href="#services"
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            >
              Services
            </a>
            <a
              href="#apropos"
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            >
              À propos
            </a>
            <a
              href="#contact"
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
            >
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-24 text-center md:py-32">
        <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
          Votre titre principal{" "}
          <span className="text-blue-600">accrocheur</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
          Une courte description de votre offre ou de votre entreprise. Mettez
          en valeur votre proposition de valeur de manière claire et
          professionnelle.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="w-full rounded-lg bg-blue-600 px-8 py-3 text-center font-medium text-white transition hover:bg-blue-700 sm:w-auto"
          >
            Commencer
          </a>
          <a
            href="#services"
            className="w-full rounded-lg border border-slate-300 px-8 py-3 text-center font-medium text-slate-700 transition hover:border-blue-600 hover:text-blue-600 sm:w-auto"
          >
            En savoir plus
          </a>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="border-t border-slate-100 bg-slate-50/50 py-24"
      >
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold text-slate-900">
            Nos services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
            Découvrez ce que nous pouvons faire pour vous.
          </p>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Service 1",
                description:
                  "Description concise de votre premier service ou avantage.",
                icon: "01",
              },
              {
                title: "Service 2",
                description:
                  "Description concise de votre deuxième service ou avantage.",
                icon: "02",
              },
              {
                title: "Service 3",
                description:
                  "Description concise de votre troisième service ou avantage.",
                icon: "03",
              },
            ].map((service) => (
              <div
                key={service.icon}
                className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition hover:border-blue-200 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-lg font-bold text-blue-600">
                  {service.icon}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-3 text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* À propos */}
      <section id="apropos" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">
                À propos de nous
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                Présentez votre entreprise ou votre projet. Expliquez votre
                mission, vos valeurs et ce qui vous différencie. Gardez un ton
                professionnel et rassurant.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                Vous pouvez ajouter une deuxième section de texte pour développer
                davantage votre histoire ou vos objectifs.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex h-64 w-full max-w-md items-center justify-center rounded-xl bg-blue-50 text-4xl font-bold text-blue-200">
                Image / Visuel
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="border-t border-slate-100 bg-blue-600 py-24"
      >
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white">
            Prêt à commencer ?
          </h2>
          <p className="mt-4 text-lg text-blue-100">
            Contactez-nous dès aujourd&apos;hui pour en savoir plus.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:contact@exemple.com"
              className="w-full rounded-lg bg-white px-8 py-3 text-center font-medium text-blue-600 transition hover:bg-blue-50 sm:w-auto"
            >
              Nous contacter
            </a>
            <a
              href="tel:+33123456789"
              className="w-full rounded-lg border-2 border-white px-8 py-3 text-center font-medium text-white transition hover:bg-white/10 sm:w-auto"
            >
              Appeler
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Votre entreprise. Tous droits
              réservés.
            </p>
            <div className="flex gap-8">
              <a
                href="#"
                className="text-sm text-slate-500 transition hover:text-blue-600"
              >
                Mentions légales
              </a>
              <a
                href="#"
                className="text-sm text-slate-500 transition hover:text-blue-600"
              >
                Confidentialité
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
