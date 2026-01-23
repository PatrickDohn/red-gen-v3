

export const WebFooter = () => {
  return (
    <footer className="w-full border-t border-gray-200 bg-white py-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col">
          <span className="text-xl font-bold tracking-tight text-gray-900">
            Resume<span className="text-blue-600">Creator</span>
          </span>
          <p className="text-sm text-gray-500">
            Building professional futures, one page at a time.
          </p>
        </div>

        <div className="flex gap-8 text-sm text-gray-600 font-medium">
          <a href="#" className="hover:text-blue-600 transition-colors">Privacy</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Terms</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Support</a>
        </div>

        <div className="text-sm text-gray-400">
          © {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
};