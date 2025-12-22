import { Mail, MessageCircle } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="mb-4 text-blue-950 text-3xl leading-tight title">
          &lt;Get in Touch /&gt;
        </h2>
        <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
          I&apos;m always interested in hearing about new projects and
          opportunities. Whether you have a question or just want to say hi,
          feel free to reach out!
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="mailto:yuricooke@gmail.com"
            className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-teal-300 hover:shadow-lg transition-all flex flex-col items-center gap-4 group min-w-[200px]"
          >
            <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center group-hover:bg-teal-500 transition-colors">
              <Mail className="text-teal-500 group-hover:text-white" size={28} />
            </div>
            <span className="text-blue-950 font-semibold text-lg">Email</span>
            <span className="text-gray-600 text-sm">yuricooke@gmail.com</span>
          </a>

          <a
            href="https://wa.me/34678646990"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-green-400 hover:shadow-lg transition-all flex flex-col items-center gap-4 group min-w-[200px]"
          >
            <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-500 transition-colors">
              <MessageCircle className="text-green-500 group-hover:text-white" size={28} />
            </div>
            <span className="text-blue-950 font-semibold text-lg">WhatsApp</span>
            <span className="text-gray-600 text-sm">+34 678 64 69 90</span>
          </a>
        </div>
      </div>
    </section>
  );
}


