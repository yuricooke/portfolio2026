export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-950 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-blue-200">
            © {currentYear} Front-End Developer &amp; UI/UX Designer. All rights
            reserved.
          </p>
          <p className="text-blue-200">
            Designed &amp; Built with React and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}


