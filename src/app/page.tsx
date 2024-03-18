import { Code, Link, P, Section, Title } from "@/components";
import { navLinks } from "./navLinks";


export default function Home() {
  return (<>
    <Section>
      <h1 className="text-xl font-bold">Just Another Static Site</h1>
      <p>I thought it would be fun to deploy this site on github pages.</p>
    </Section>
    <nav className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
      {navLinks.map(({title, caption, href}, i) => (<Section key={`article-${i}`}>
      <Link className="cursor-pointer flex flex-col justify-center items-stretch" {...{href}}>
          <h2 className="text-lg font-bold">{title}</h2>
          <p>{caption}</p>
        </Link>
      </Section>))}
    </nav>
    </>);
}

