import { Mail, Linkedin, Github, Twitter } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="mb-4 text-blue-950">Let&apos;s Work Together</h2>
        <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
          I&apos;m always interested in hearing about new projects and
          opportunities. Whether you have a question or just want to say hi,
          feel free to reach out!
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <a
            href="mailto:hello@example.com"
            className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all flex flex-col items-center gap-3 group"
          >
            <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center group-hover:bg-teal-500 transition-colors">
              <Mail className="text-teal-500 group-hover:text-white" size={24} />
            </div>
            <span className="text-blue-950">Email</span>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all flex flex-col items-center gap-3 group"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-900 transition-colors">
              <Linkedin
                className="text-blue-900 group-hover:text-white"
                size={24}
              />
            </div>
            <span className="text-blue-950">LinkedIn</span>
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all flex flex-col items-center gap-3 group"
          >
            <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center group-hover:bg-blue-950 transition-colors">
              <Github
                className="text-blue-950 group-hover:text-white"
                size={24}
              />
            </div>
            <span className="text-blue-950">GitHub</span>
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all flex flex-col items-center gap-3 group"
          >
            <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center group-hover:bg-sky-500 transition-colors">
              <Twitter
                className="text-sky-500 group-hover:text-white"
                size={24}
              />
            </div>
            <span className="text-blue-950">Twitter</span>
          </a>
        </div>

        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 max-w-md mx-auto">
          <h3 className="mb-6 text-blue-950">Send a Message</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
            />
            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-3 rounded-lg hover:bg-teal-600 transition-all hover:shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}


