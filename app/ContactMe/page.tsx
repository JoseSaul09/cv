import React from "react";
import { Mail, Linkedin, Github, Phone, MessageCircle } from "lucide-react";

export default function ContactMe() {
  return (
    <section className="bg-secundario min-h-screen py-16 px-6 md:px-20 text-texto">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-primario mb-6">Contáctame</h2>

        <p className="text-primario mb-10 font-bold">
          ¿Tienes alguna idea o propuesta? Aquí tienes mis medios de contacto directos:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center max-w-screen-lg w-full bg-secundario rounded-2xl shadow-2xl p-8 border-2 border-primario mb-10">
          <a
            href="mailto:joseavinaquintero09@gmail.com"
            className="bg-primario hover:bg-secundario transition-colors w-full flex items-center gap-3 px-5 py-3 rounded-xl shadow text-left"
          >
            <Mail className="text-rosa" />
            <div>
              <p className="font-semibold">Correo</p>
              <p className="text-sm text-auxiliar break-all">joseavinaquintero09@gmail.com</p>
            </div>
          </a>

          <a
            href="https://wa.me/3311304439"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primario hover:bg-secundario transition-colors w-full flex items-center gap-3 px-5 py-3 rounded-xl shadow text-left"
          >
            <Phone className="text-rosa" />
            <div>
              <p className="font-semibold">WhatsApp</p>
              <p className="text-sm text-auxiliar">+52 331 130 4439</p>
            </div>
          </a>

          <a
            href="https://github.com/JoseSaul09"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primario hover:bg-secundario transition-colors w-full flex items-center gap-3 px-5 py-3 rounded-xl shadow text-left"
          >
            <Github className="text-rosa" />
            <div>
              <p className="font-semibold">GitHub</p>
              <p className="text-sm text-auxiliar">https://github.com/JoseSaul09</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/avina-quintero-jose-saul-586168346?"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primario hover:bg-secundario transition-colors w-full flex items-center gap-3 px-5 py-3 rounded-xl shadow text-left"
          >
            <Linkedin className="text-rosa" />
            <div>
              <p className="font-semibold">LinkedIn</p>
              <p className="text-sm text-auxiliar">https://www.linkedin.com/in/avina-quintero-jose-saul</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}