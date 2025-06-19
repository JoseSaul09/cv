import Image from "next/image";
import JS from '../src/img/JS.svg';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Home() {
  return (
    <main className="min-h-screen bg-secundario flex flex-col items-center justify-center px-4 py-10 space-y-14">
      <div className="max-w-xl w-full bg-recuadros rounded-2xl shadow-2xl p-8 text-center ">
        <div className="w-32 h-32 mx-auto mb-4 border-4 border-indigo-500 rounded-full overflow-hidden relative">
          <Image
            src="/img/Perfil.jpg"
            alt="Tu Nombre"
            fill
            className="object-cover"
          />
        </div>
        <h1 className="text-3xl font-bold text-gray-800">Hi, I'm Saúl Aviña</h1>
        <p className="text-gray-600 mt-2">
          Computer engineer, web developer, and video game enthusiast.
        </p>
      </div>
      <div className="mt-6 flex justify-center gap-24">        
        {/* Links personales */}
        <div className="flex items-center gap-4">
          <div className="social-button">
            <a href="https://www.instagram.com/saul_avina.05/" className="inline-block">
              <button className="relative w-12 h-12 rounded-full group">
                <div
                  className="floater w-full h-full absolute top-0 left-0 bg-violet-400 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"
                ></div>
                <div
                  className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-violet-400 rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <path
                      className="group-hover:fill-[#171543] fill-white duration-300"
                      d="M21.94 6.46809C21.8884 5.2991 21.6994 4.49551 21.4285 3.79911C21.1492 3.05994 20.7194 2.39818 20.1564 1.84802C19.6062 1.28932 18.9401 0.855163 18.2094 0.580194C17.5091 0.309437 16.7096 0.120336 15.5407 0.0688497C14.363 0.0128932 13.9891 0 11.0022 0C8.01527 0 7.64141 0.0128932 6.46808 0.064466C5.29914 0.116039 4.49551 0.305225 3.79932 0.57581C3.05994 0.855163 2.39818 1.28494 1.84802 1.84802C1.28932 2.39813 0.855377 3.06428 0.580193 3.7949C0.309437 4.49551 0.120379 5.2948 0.0688496 6.4637C0.0129362 7.64141 0 8.01527 0 11.0022C0 13.9891 0.0129362 14.363 0.0644659 15.5363C0.116039 16.7053 0.305225 17.5089 0.576025 18.2053C0.855377 18.9444 1.28932 19.6062 1.84802 20.1564C2.39818 20.7151 3.06432 21.1492 3.79494 21.4242C4.49547 21.6949 5.29476 21.884 6.46391 21.9355C7.63702 21.9873 8.0111 22 10.998 22C13.9849 22 14.3588 21.9873 15.5321 21.9355C16.7011 21.884 17.5047 21.695 18.2009 21.4242C18.9321 21.1415 19.5961 20.7091 20.1505 20.1548C20.7048 19.6005 21.1373 18.9365 21.42 18.2053C21.6906 17.5047 21.8798 16.7052 21.9314 15.5363C21.9829 14.363 21.9958 13.9891 21.9958 11.0022C21.9958 8.01527 21.9914 7.64137 21.94 6.46809ZM19.9588 15.4503C19.9114 16.5248 19.731 17.105 19.5805 17.4918C19.2109 18.4502 18.4502 19.2109 17.4918 19.5805C17.105 19.731 16.5206 19.9114 15.4503 19.9586C14.29 20.0103 13.942 20.023 11.0066 20.023C8.07118 20.023 7.71881 20.0103 6.56259 19.9586C5.48816 19.9114 4.90796 19.731 4.52117 19.5805C4.04425 19.4043 3.61014 19.1249 3.25772 18.7596C2.89242 18.4029 2.61306 17.9731 2.43677 17.4961C2.28635 17.1094 2.10589 16.5248 2.05874 15.4547C2.007 14.2943 1.99428 13.9461 1.99428 11.0107C1.99428 8.07535 2.007 7.72298 2.05874 6.56698C2.10589 5.49254 2.28635 4.91235 2.43677 4.52555C2.61306 4.04842 2.89241 3.61439 3.26211 3.26189C3.61865 2.89658 4.04842 2.61723 4.52555 2.44115C4.91235 2.29073 5.49692 2.11023 6.56697 2.06291C7.72736 2.01134 8.07556 1.99844 11.0107 1.99844C13.9505 1.99844 14.2985 2.01134 15.4547 2.06291C16.5292 2.11027 17.1093 2.29069 17.4961 2.44111C17.9731 2.61723 18.4072 2.89658 18.7596 3.26189C19.1249 3.61865 19.4042 4.04842 19.5805 4.52555C19.731 4.91235 19.9114 5.49671 19.9587 6.56698C20.0103 7.72736 20.0232 8.07535 20.0232 11.0107C20.0232 13.9461 20.0104 14.29 19.9588 15.4503Z"
                    ></path>
                    <path
                      className="group-hover:fill-[#171543] fill-white duration-300"
                      d="M11.0026 5.35054C7.88252 5.35054 5.35107 7.88182 5.35107 11.0021C5.35107 14.1223 7.88252 16.6536 11.0026 16.6536C14.1227 16.6536 16.6541 14.1223 16.6541 11.0021C16.6541 7.88182 14.1227 5.35054 11.0026 5.35054ZM11.0026 14.668C8.97844 14.668 7.33654 13.0264 7.33654 11.0021C7.33654 8.97774 8.97844 7.33609 11.0025 7.33609C13.0269 7.33609 14.6685 8.97774 14.6685 11.0021C14.6685 13.0264 13.0268 14.668 11.0026 14.668ZM18.1971 5.12706C18.1971 5.85569 17.6063 6.44646 16.8775 6.44646C16.1489 6.44646 15.5581 5.85569 15.5581 5.12706C15.5581 4.39833 16.1489 3.80774 16.8775 3.80774C17.6063 3.80774 18.1971 4.39829 18.1971 5.12706Z"
                    ></path>
                  </svg>
                </div>
              </button>
            </a>
          </div>
          <div className="social-button">
            <a href="https://github.com/JoseSaul09" className="inline-block">
              <button className="relative w-12 h-12 rounded-full group">
                <div
                  className="floater w-full h-full absolute top-0 left-0 bg-black rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"
                ></div>
                <div
                  className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-black rounded-full"
                >
                  <svg
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="group-hover:fill-[#171543] fill-white duration-300"
                      d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.17 6.839 9.481.5.092.683-.217.683-.481 0-.237-.009-.866-.013-1.699-2.782.603-3.37-1.338-3.37-1.338-.454-1.15-1.11-1.458-1.11-1.458-.906-.619.069-.606.069-.606 1.002.071 1.527 1.03 1.527 1.03.89 1.529 2.34 1.087 2.911.831.091-.645.348-1.087.634-1.338-2.22-.252-4.555-1.11-4.555-4.94 0-1.09.39-1.986 1.028-2.682-.103-.252-.446-1.268.098-2.642 0 0 .837-.268 2.75 1.024a9.563 9.563 0 012.496-.335 9.58 9.58 0 012.496.335c1.913-1.292 2.75-1.024 2.75-1.024.544 1.374.202 2.39.1 2.642.64.696 1.027 1.592 1.027 2.682 0 3.839-2.338 4.685-4.567 4.933.358.309.678.916.678 1.847 0 1.334-.012 2.412-.012 2.74 0 .267.18.577.688.481A12.01 12.01 0 0022 12c0-5.523-4.477-10-10-10z"
                      fill="#FFFFFF"
                    ></path>
                  </svg>
                </div>
              </button>
            </a>
          </div>
          <div className="social-button">
            <a href="https://www.linkedin.com/in/avina-quintero-jose-saul-586168346?" className="inline-block">
              <button className="relative w-12 h-12 rounded-full group">
                <div
                  className="floater w-full h-full absolute top-0 left-0 bg-blue-500 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"
                ></div>
                <div
                  className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-blue-500 rounded-full"
                >
                  <svg
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="group-hover:fill-[#171543] fill-white duration-300"
                      d="M20,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M8.5,19H6V10h2.5V19z M7.3,9 h-0.1C6.4,9,6,8.6,6,8.1V7.9c0-0.5,0.4-0.9,0.9-0.9h0.1C7.6,7,8,7.4,8,7.9v0.1C8,8.6,7.6,9,7.3,9z M19,19h-2.5v-4.9 c0-1.2-0.4-2-1.4-2c-0.8,0-1.3,0.6-1.5,1.2h-0.1V19H10V10h2.3v1.3h0C12.7,10.7,14,9.9,15.5,9.9c2.1,0,3.5,1.4,3.5,3.8V19z"
                      fill="#FFFFFF"
                    ></path>
                  </svg>
                </div>
              </button>
            </a>
          </div>
          <div className="social-button">
            <a href="mailto:joseavinaquintero09@gmail.com" className="inline-block">
              <button className="relative w-12 h-12 rounded-full group">
                <div
                  className="floater w-full h-full absolute top-0 left-0 bg-red-400 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"
                ></div>
                <div
                  className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-red-400 rounded-full"
                >
                  <svg
                    height="32"
                    width="32"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="group-hover:fill-[#171543] fill-white duration-300"
                      d="M28 5H4c-1.104 0-2 .896-2 2v18c0 1.104.896 2 2 2h24c1.104 0 2-.896 2-2V7c0-1.104-.896-2-2-2zm0 4.879L16 18 4 9.879V7l12 8 12-8v2.879zM4 23V11.885l11.446 7.63c.269.18.594.274.921.274s.652-.094.92-.274L28 11.885V23H4z"
                      fill="#FFFFFF"
                    ></path>
                  </svg>
                </div>
              </button>
            </a>
          </div>
        </div>
        </div>

        {/* Curriculum */}
        <div className="flex items-center justify-center">
          <div className="relative group">
            <a href="./Curriculum">
              <button
                className="relative inline-block p-px font-semibold leading-6 text-white bg-neutral-900 shadow-2xl cursor-pointer rounded-2xl shadow-pink-900 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-pink-600"
              >
                <span
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-800 via-pink-800 to-pink-600 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                ></span>
                <span className="relative z-10 block px-6 py-3 rounded-2xl bg-neutral-950">
                  <div className="relative z-10 flex items-center space-x-3">
                    <span
                      className="transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-pink-300">Curriculum</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-7 h-7 transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-pink-300"
                    >
                      <path
                        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                      ></path>
                    </svg>
                  </div>
                </span>
              </button>
            </a>
          </div>
        </div>
        
      {/* Acerca de mi */}
      <div className="max-w-screen-lg w-full bg-secundario rounded-2xl shadow-2xl p-8 border-2 border-primario">
        <h1 className="flex items-center justify-center text-3xl font-bold text-gray-800 items-center p-2 py-10">About Me</h1>
        <div className="grid grid-cols-2 gap-4 bg-header-color rounded-2xl shadow-2xl p-8">
          <div className="flex items-center justify-center font-bold text-primario p-4 relative w-full h-full">
            <Image
              src="/img/Perfil.jpg"
              alt="Descripción"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <section id="about" className="py-20 bg-gray-100">
            <div className="flex flex-col items-center justify-center text-gray-800 p-4">
              <h2 className="text-2xl p-6 font-bold">Jose Saul Aviña Quintero</h2>
              <p className="text-justify font-bold">Hi! 👋, I am a Computer Engineer with experience in NextJS, TypeScript, React, among other things.</p>
              <p className="text-justify font-bold">I also have skills programming in languages like C++, Python, and JavaScript. Additionally, I have worked with databases using PostgreSQL 🐘, MySQL, and a bit with Firebase 🔥.</p>
              <p className="text-justify font-bold">I enjoy working with databases 🗃️, creating websites 🌐, and I have a future plan to program my own video game 🎮. I have faced several challenges along my learning journey, but I always try to stay updated and keep studying to achieve my goals.</p>
              <p className="text-justify font-bold">Currently, I am still studying my Computer Engineering degree 🎓 at CUCEI, where I continue learning from my mistakes and improving every day.</p>
            </div>
          </section>
        </div>
      </div> 

      {/* Lenguajes y tecnologias que uso */}
      <div className="max-w-screen-lg w-full bg-secundario rounded-2xl shadow-2xl p-8 border-2 border-primario">
        <div>
          <h1 className="flex justify-center text-3xl font-bold text-gray-800 p-10">
            Languages / Technologies
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-primario font-bold">
            {/* Python */}            
            <div className="flex flex-col gap-6 justify-center items-center">
              <label className="text-gray-400 cursor-pointer">
                <input type="hover" className="hidden peer" />
                <div
                  className="group flex flex-col gap-4 w-32 h-40 bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-4 shadow-xl border-2 border-transparent transition-all duration-300 ease-in-out hover:border-yellow-200 hover:shadow-yellow-200/20 peer-checked:border-yellow-200 peer-checked:from-yellow-200/50 peer-checked:to-gray-900 peer-checked:translate-y-[-0.5rem]"
                >
                  <div className="relative">
                    <div
                      className="w-12 h-12 mx-auto bg-yellow-400/20 rounded-lg border-2 border-yellow-400/40 group-hover:border-yellow-400 group-hover:bg-yellow-400/30 peer-checked:border-yellow-400 peer-checked:bg-yellow-400/30 transition-all duration-300"
                    >
                      <img src="/icons/python.svg" alt="Python" className="w-12 h-12 mb-2" />
                      <div className="flex flex-col gap-1 p-2">
                        
                      </div>
                    </div>

                    <div
                      className="absolute top-0 right-6 w-3 h-3 rounded-full bg-gray-600 group-hover:bg-red-400 group-hover:animate-pulse peer-checked:bg-indigo-400 peer-checked:animate-pulse transition-all duration-300"
                    ></div>
                  </div>

                  <div className="text-center">
                    <p
                      className="font-medium text-sm group-hover:text-yellow-200 peer-checked:text-yellow-200 transition-colors duration-300"
                    >
                      Python
                    </p>
                  </div>

                  <div
                    className="h-1 w-0 bg-yellow-200 rounded-full mx-auto group-hover:w-full peer-checked:w-full transition-all duration-300"
                  ></div>

                </div>
              </label>
            </div>

            {/* React */}            
            <div className="flex flex-col gap-6 justify-center items-center">
              <label className="text-gray-400 cursor-pointer">
                <input type="hover" className="hidden peer" />
                <div
                  className="group flex flex-col gap-4 w-32 h-40 bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-4 shadow-xl border-2 border-transparent transition-all duration-300 ease-in-out hover:border-cyan-500 hover:shadow-cyan-500/20 peer-checked:border-cyan-500 peer-checked:from-cyan-900/50 peer-checked:to-gray-900 peer-checked:translate-y-[-0.5rem]"
                >
                  <div className="relative">
                    <div
                      className="w-12 h-12 mx-auto bg-cyan-500/20 rounded-lg border-2 border-cyan-500/40 group-hover:border-cyan-400 group-hover:bg-cyan-500/30 peer-checked:border-cyan-400 peer-checked:bg-cyan-500/30 transition-all duration-300"
                    >
                      <img src="/icons/react.svg" alt="React" className="w-12 h-12 mb-2" />
                      <div className="flex flex-col gap-1 p-2">
                        
                      </div>
                    </div>

                    <div
                      className="absolute top-0 right-6 w-3 h-3 rounded-full bg-gray-600 group-hover:bg-red-400 group-hover:animate-pulse peer-checked:bg-indigo-400 peer-checked:animate-pulse transition-all duration-300"
                    ></div>
                  </div>

                  <div className="text-center">
                    <p
                      className="font-medium text-sm group-hover:text-cyan-400 peer-checked:text-cyan-400 transition-colors duration-300"
                    >
                      React
                    </p>
                  </div>

                  <div
                    className="h-1 w-0 bg-cyan-500 rounded-full mx-auto group-hover:w-full peer-checked:w-full transition-all duration-300"
                  ></div>

                </div>
              </label>
            </div>

            {/* PostgreSQL */}            
            <div className="flex flex-col gap-6 justify-center items-center">
              <label className="text-gray-400 cursor-pointer">
                <input type="hover" className="hidden peer" />
                <div
                  className="group flex flex-col gap-4 w-32 h-40 bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-4 shadow-xl border-2 border-transparent transition-all duration-300 ease-in-out hover:border-blue-500 hover:shadow-blue-500/20 peer-checked:border-blue-500 peer-checked:from-blue-900/50 peer-checked:to-gray-900 peer-checked:translate-y-[-0.5rem]"
                >
                  <div className="relative">
                    <div
                      className="w-12 h-12 mx-auto bg-blue-500/20 rounded-lg border-2 border-blue-500/40 group-hover:border-blue-400 group-hover:bg-blue-500/30 peer-checked:border-blue-400 peer-checked:bg-blue-500/30 transition-all duration-300"
                    >
                      <img src="/icons/postgresql.svg" alt="PostgreSQL" className="w-12 h-12 mb-2" />
                      <div className="flex flex-col gap-1 p-2">
                        
                      </div>
                    </div>

                    <div
                      className="absolute top-0 right-6 w-3 h-3 rounded-full bg-gray-600 group-hover:bg-red-400 group-hover:animate-pulse peer-checked:bg-indigo-400 peer-checked:animate-pulse transition-all duration-300"
                    ></div>
                  </div>

                  <div className="text-center">
                    <p
                      className="font-medium text-sm group-hover:text-blue-400 peer-checked:text-blue-400 transition-colors duration-300"
                    >
                      PostgreSQL
                    </p>
                  </div>

                  <div
                    className="h-1 w-0 bg-blue-500 rounded-full mx-auto group-hover:w-full peer-checked:w-full transition-all duration-300"
                  ></div>

                </div>
              </label>
            </div>

            {/* Firebase */}            
            <div className="flex flex-col gap-6 justify-center items-center">
              <label className="text-gray-400 cursor-pointer">
                <input type="hover" className="hidden peer" />
                <div
                  className="group flex flex-col gap-4 w-32 h-40 bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-4 shadow-xl border-2 border-transparent transition-all duration-300 ease-in-out hover:border-red-500 hover:shadow-red-500/20 peer-checked:border-red-500 peer-checked:from-red-900/50 peer-checked:to-gray-900 peer-checked:translate-y-[-0.5rem]"
                >
                  <div className="relative">
                    <div
                      className="w-12 h-12 mx-auto bg-red-500/20 rounded-lg border-2 border-red-500/40 group-hover:border-red-400 group-hover:bg-red-500/30 peer-checked:border-red-400 peer-checked:bg-red-500/30 transition-all duration-300"
                    >
                      <img src="/icons/firebase.svg" alt="Firebase" className="w-12 h-12 mb-2" />
                      <div className="flex flex-col gap-1 p-2">
                        
                      </div>
                    </div>

                    <div
                      className="absolute top-0 right-6 w-3 h-3 rounded-full bg-gray-600 group-hover:bg-red-400 group-hover:animate-pulse peer-checked:bg-indigo-400 peer-checked:animate-pulse transition-all duration-300"
                    ></div>
                  </div>

                  <div className="text-center">
                    <p
                      className="font-medium text-sm group-hover:text-red-400 peer-checked:text-red-400 transition-colors duration-300"
                    >
                      Firebase
                    </p>
                  </div>

                  <div
                    className="h-1 w-0 bg-red-500 rounded-full mx-auto group-hover:w-full peer-checked:w-full transition-all duration-300"
                  ></div>

                </div>
              </label>
            </div>
            {/* C++ */}    
            <div className="flex flex-col gap-6 justify-center items-center">
              <label className="text-gray-400 cursor-pointer">
                <input type="hover" className="hidden peer" />
                <div
                  className="group flex flex-col gap-4 w-32 h-40 bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-4 shadow-xl border-2 border-transparent transition-all duration-300 ease-in-out hover:border-blue-500 hover:shadow-blue-500/20 peer-checked:border-blue-500 peer-checked:from-blue-900/50 peer-checked:to-gray-900 peer-checked:translate-y-[-0.5rem]"
                >
                  <div className="relative">
                    <div
                      className="w-12 h-12 mx-auto bg-blue-500/20 rounded-lg border-2 border-blue-500/40 group-hover:border-blue-400 group-hover:bg-blue-500/30 peer-checked:border-blue-400 peer-checked:bg-blue-500/30 transition-all duration-300"
                    >
                      <img src="/icons/cpp.svg" alt="C++" className="w-12 h-12 mb-2" />
                      <div className="flex flex-col gap-1 p-2">
                        
                      </div>
                    </div>

                    <div
                      className="absolute top-0 right-6 w-3 h-3 rounded-full bg-gray-600 group-hover:bg-red-400 group-hover:animate-pulse peer-checked:bg-indigo-400 peer-checked:animate-pulse transition-all duration-300"
                    ></div>
                  </div>

                  <div className="text-center">
                    <p
                      className="font-medium text-sm group-hover:text-blue-400 peer-checked:text-blue-400 transition-colors duration-300"
                    >
                      C++
                    </p>
                  </div>

                  <div
                    className="h-1 w-0 bg-blue-500 rounded-full mx-auto group-hover:w-full peer-checked:w-full transition-all duration-300"
                  ></div>

                </div>
              </label>
            </div>
            {/* Javascript */}
            <div className="flex flex-col gap-6 justify-center items-center">
              <label className="text-gray-400 cursor-pointer">
                <input type="hover" className="hidden peer" />
                <div
                  className="group flex flex-col gap-4 w-32 h-40 bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-4 shadow-xl border-2 border-transparent transition-all duration-300 ease-in-out hover:border-yellow-500 hover:shadow-yellow-500/20 peer-checked:border-yellow-500 peer-checked:from-yellow-900/50 peer-checked:to-gray-900 peer-checked:translate-y-[-0.5rem]"
                >
                  <div className="relative">
                    <div
                      className="w-12 h-12 mx-auto bg-yellow-500/20 rounded-lg border-2 border-yellow-500/40 group-hover:border-yellow-400 group-hover:bg-yellow-500/30 peer-checked:border-yellow-400 peer-checked:bg-yellow-500/30 transition-all duration-300"
                    >
                      <img src="/icons/javascript.svg" alt="Javascript" className="w-12 h-12 mb-2" />
                      <div className="flex flex-col gap-1 p-2">
                        
                      </div>
                    </div>

                    <div
                      className="absolute top-0 right-6 w-3 h-3 rounded-full bg-gray-600 group-hover:bg-red-400 group-hover:animate-pulse peer-checked:bg-indigo-400 peer-checked:animate-pulse transition-all duration-300"
                    ></div>
                  </div>

                  <div className="text-center">
                    <p
                      className="font-medium text-sm group-hover:text-yellow-400 peer-checked:text-yellow-400 transition-colors duration-300"
                    >
                      Javascript
                    </p>
                  </div>

                  <div
                    className="h-1 w-0 bg-yellow-500 rounded-full mx-auto group-hover:w-full peer-checked:w-full transition-all duration-300"
                  ></div>

                </div>
              </label>
            </div>

          </div>
        </div>
      </div>

      {/* Proyectos ----------------------------------------------------------------------------------------------------------------------------------------*/}

      <div className="max-w-screen-lg w-full bg-secundario rounded-2xl shadow-2xl p-8 border-2 border-primario">
        <h1 className="flex items-center justify-center text-3xl font-bold text-gray-800 items-center p-2">Projects</h1>
        <div className="grid grid-cols-2 gap-4 p-8 ">          
          {/* Bergamota Routes */}
          <a
            href="/BergamotaRoutes"
            className="group relative block max-w-screen-md mx-auto h-64 sm:h-80 lg:h-96"
          >
            <span className="absolute inset-0 border-2 border-dashed border-black"></span>

            <div className="relative flex h-full w-full transform items-end border-2 border-black bg-gris transition-transform group-hover:scale-105 py-10">
              <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                <img src="/img/Register1.gif" alt="Descripción 2" className="w-full h-full object-cover rounded-xl shadow-lg" />
                <h2 className="mt-4 text-xl font-medium sm:text-2xl font-bold text-primario">Bergamota Routes</h2>
              </div>

              <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                <h3 className="mt-4 text-xl font-medium sm:text-1xl font-bold text-primario py-5">Bergamota Routes</h3>
                <p className="mt-4 text-sm sm:text-base text-primario py-5">
                  Bergamota Routes is a school project I participated in, which is a route optimization website that aims to improve delivery times for couriers from Amazon, Mercado Libre, and others.
                </p>
                <p className="mt-3 font-bold text-primario py-5">Read more</p>
              </div>
            </div>
          </a>
          {/* Lupita´s Pasta */}
          <a
            href="/LupitasPastas"
            className="group relative block max-w-screen-md mx-auto h-64 sm:h-80 lg:h-96"
          >
            <span className="absolute inset-0 border-2 border-dashed border-black"></span>

            <div className="relative flex h-full w-full transform items-end border-2 border-black bg-rosa transition-transform group-hover:scale-105 py-10">
              <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                <img src="/img/ProjectsLupitasPastas.jpg" alt="Descripción 2" className="w-full h-full object-cover rounded-xl shadow-lg" />
                <h2 className="mt-4 text-xl font-medium sm:text-2xl font-bold text-primario">Lupita´s Pasta</h2>
              </div>

              <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                <h3 className="mt-4 text-xl font-medium sm:text-1xl font-bold text-primario py-5">Lupita´s Pasta</h3>
                <p className="mt-4 text-sm sm:text-base text-primario py-5">
                  Lupita's Pasta is a website that showcases French pasta crafts and handmade creations. It also allows you to contact the person in charge to place an order if you're interested in any of the crafts.
                </p>
                <p className="mt-3 font-bold text-primario py-5">Read more</p>
              </div>
            </div>
          </a>
        </div>
      </div>

    </main>
  );
}
