import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // close menu on scroll + small shadow on scroll
  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 4);

      // if menu is open and the user scrolls, close it
      if (isMenuOpen && Math.abs(y - lastY) > 2) {
        setIsMenuOpen(false);
      }
      lastY = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMenuOpen]);

useEffect(() => {
  const html = document.documentElement;
  if (isMenuOpen) {
    html.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
  } else {
    html.style.overflow = "";
    document.body.style.overflow = "";
  }
  return () => {
    html.style.overflow = "";
    document.body.style.overflow = "";
  };
}, [isMenuOpen]);


useEffect(() => {
  const onResize = () => {
    if (window.innerWidth >= 768 && isMenuOpen) {
      setIsMenuOpen(false);
    }
  };
  window.addEventListener("resize", onResize);
  window.addEventListener("orientationchange", onResize);
  return () => {
    window.removeEventListener("resize", onResize);
    window.removeEventListener("orientationchange", onResize);
  };
}, [isMenuOpen]);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          href="#hero"
          className="text-xl font-bold text-primary flex items-center"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">My </span>Portfolio
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className=" hover:text-xl hover:text-primary font-medium
                transition-colors duration-100"
            >
              {item.name}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsMenuOpen((v) => !v)}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          className="md:hidden p-2 text-foreground z-50"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile overlay menu */}
        <div
  onClick={() => setIsMenuOpen(false)}
  className={cn(
    "fixed inset-0 z-[100] bg-black/95 flex items-center justify-center",
    "transition-opacity duration-300 md:hidden",
    isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
  )}
  role="dialog"
  aria-modal="true"
  aria-hidden={!isMenuOpen}
>
  <div onClick={(e) => e.stopPropagation()} className="flex flex-col items-center space-y-8 text-xl">
    {navItems.map((item) => (
      <a
        key={item.href}
        href={item.href}
        className="text-white/90 hover:text-primary transition-colors duration-300"
        onClick={() => setIsMenuOpen(false)}   // closes before scrolling to #id
      >
        {item.name}
      </a>
    ))}
    <ThemeToggle className="mt-4 w-14 h-7" />
  </div>
</div>
      </div>
    </nav>
  );
};
