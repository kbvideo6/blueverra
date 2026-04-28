import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-16 md:mt-24 border-t border-blue-950/10 py-12 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 max-w-[1180px]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2 mb-6 md:mb-0">
            <span className="font-serif text-[1.4rem] leading-none tracking-tight text-[#001736]">Blueverra</span>
            <p className="text-[0.8rem] text-[#4d5b6a] max-w-sm">
              An educational initiative by seaNOVA dedicated to raising awareness about our environment and technological footprint.
            </p>
          </div>
          <div className="flex gap-6 uppercase text-[0.75rem] font-bold tracking-widest text-[#4d5b6a]">
             <Link href="/" className="hover:text-[#001736] transition-colors">Home</Link>
             <Link href="/take-action" className="hover:text-[#001736] transition-colors">Action</Link>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-blue-950/10 text-center text-[#4d5b6a] text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} seaNOVA. All rights reserved. <span className="mx-2 opacity-20">|</span> design and dev by <a href="https://artstudio-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:text-[#001736] font-bold underline underline-offset-4 decoration-[#5fa8d3]/30 transition-all">chathu.</a></p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#001736] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#001736] transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
