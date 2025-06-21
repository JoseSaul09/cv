"use client";

export default function Curriculum() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-10 bg-secundario text-texto py-8">
      <h1 className="text-3xl font-bold mb-6 py-8">Mi CV</h1>
      <iframe
        src="/CV_JoseSaulAviñaQuintero.pdf"
        className="w-full h-[90vh] border-2 rounded-lg"
      />
    </div>
  );
}
