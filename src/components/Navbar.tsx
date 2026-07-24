export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 grid grid-cols-3 items-center bg-background px-10 py-4 border-b border-primary/50">
      <h1 className="text-2xl font-bold text-primary">Cinescope</h1>
      <div className="flex items-center justify-center gap-7">
        <a href="/" className="text-foreground hover:text-primary">
          Home
        </a>
        <a href="/movies" className="text-foreground hover:text-primary">
          Movies
        </a>
        <a href="/about" className="text-foreground hover:text-primary">
          About
        </a>
      </div>

      <div className="flex justify-end">
        <button className="rounded-lg bg-primary px-5 py-2 font-semibold text-white transition hover:bg-primary-dark">
          Get Started
        </button>
      </div>
    </nav>
  );
}