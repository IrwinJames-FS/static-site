import { Inter } from "next/font/google";
import { ParentElement } from "./types";
import { FaBars } from "react-icons/fa";
import { Link } from "./Link";
import { navLinks } from "@/app/navLinks";

const inter = Inter({ subsets: ["latin"] });

export const Template = ({children}:ParentElement) => (<html lang="en">
<body className={`${inter.className} h-dvh bg-slate-100 flex flex-col justify-start`}>
  <header className="h-32 md:h-16 bg-slate-200 flex flex-col md:flex-row justify-start md:justify-between items-center px-2 shadow md:fixed w-dvw z-50">
	<a href="/static-site" className="flex flex-row gap-2 items-center px-1 rounded-sm hover:shadow-md transition-all hover:bg-slate-300 duration-200 text-center">
	  <h1 className="text-xl font-bold">JASS</h1>
	  Just another Static Site
	</a>
	<nav className="flex flex-col md:flex-row items-stretch">
		{navLinks.map(({title, href}, i)=><Link key={`nv-${i}`} href={href} className={`text-center${i < navLinks.length-1 ? ' md:border-r-2 border-slate-300':''}`}>{title}</Link>)}
	</nav>
  </header>
  <main className="flex-grow md:pt-16">
  {children}
  </main>
  <footer className="h-10 bg-slate-200 flex flex-row items-center px-2">
	<p>&copy; James Irwin 2024</p>
  </footer>
</body>
</html>);