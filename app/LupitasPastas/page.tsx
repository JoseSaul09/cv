'use client';

export default function BergamotaRoutes() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-secundario">
      <h1 className="text-5xl font-bold mb-10 p-8 space-y-16 text-primario">Bergamota Routes</h1>
        <h1 className="text-xl font-semibold text-white">Watch on GitHub</h1>
        <a
            href="https://github.com/JoseSaul09/LupitasPastas" 
            target="_blank"
            rel="noopener noreferrer"
            >
            <button
                className="cursor-pointer w-fit h-fit invert bg-white p-3 rounded-full scale-50 hover:scale-100 hover:invert-0 hover:p-0 flex transition-all mb-5"
            >
                <svg height="98" width="98" xmlns="http://www.w3.org/2000/svg">
                <path
                    fill="#000"
                    d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                ></path>
                </svg>
            </button>
        </a>

      {/* Home Page */}
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl space-y-16 max-w-screen-lg w-full bg-secundario rounded-2xl shadow-2xl p-8 border-2 border-primario mb-10">
        <img src="/img/HomeLupitasPastas.jpg" alt="Descripción 1" className="w-full md:w-1/2 rounded-xl shadow-lg" />
        <div className="space-y-12 max-w-4xl mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-2 text-center">Home Page</h2>
            <p className="text-lg">This is the home page as we want it to look, along with the footer and header, although we are still discussing which sections the client wants to include.</p>
        </div>
      </div>

      {/* Proyectos */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-8 max-w-4xl space-y-16 max-w-screen-lg w-full bg-secundario rounded-2xl shadow-2xl p-8 border-2 border-primario mb-10">
        <img src="/img/ProjectsLupitasPastas.jpg" alt="Descripción 2" className="w-full md:w-1/2 rounded-xl shadow-lg" />
        <div className="space-y-12 max-w-4xl mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-2 text-center">What we can found?</h2>
            <p className="text-lg">Here we have the projects the client offers, showing everything they can do, divided by categories and including the author's name, since some of the projects will involve multiple people working on them.</p>
        </div>
      </div>

      {/* Ejemplos */}
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl space-y-16 max-w-screen-lg w-full bg-secundario rounded-2xl shadow-2xl p-8 border-2 border-primario">
        <img src="/img/Projects2.jpg" alt="Descripción 1" className="w-full md:w-1/2 rounded-xl shadow-lg" />
        <div className="space-y-12 max-w-4xl mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-2 text-center">Projects</h2>
            <p className="text-lg">Within the projects, we include detailed photos of what is offered — for example, these pens featuring different characters.</p>
        </div>
      </div>

      {/* Contact Me */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-8 max-w-4xl space-y-16 max-w-screen-lg w-full bg-secundario rounded-2xl shadow-2xl p-8 border-2 border-primario m-10">
        <img src="/img/ContactLupitas.jpg" alt="Descripción 2" className="w-full md:w-1/2 rounded-xl shadow-lg" />
        <div className="space-y-12 max-w-4xl mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-2 text-center">Contact</h2>
            <p className="text-lg">There will also be a Contact Me section for those interested in requesting a project from Lupita.</p>            
        </div>
      </div>

    </div>
  );
}
