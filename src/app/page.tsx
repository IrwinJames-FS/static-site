export default function Home() {
  return (<>
    <header className="h-16 bg-slate-200 flex flex-row justify-center md:justify-between items-center px-2 shadow fixed w-dvw">
      <a href="/" className="flex flex-row gap-2 items-center px-1 rounded-sm hover:shadow-md transition-all hover:bg-slate-300 duration-200">
        <h1 className="text-xl font-bold">JASS</h1>
        Just another Static Site
      </a>
    </header>
    <main className="flex-grow">
      <article className="m-4 p-4 shadow">
        <h3 className="text-lg">Nextjs</h3>
        <p>Nextjs to me is the wonderful evolution of react. with the ability to define fully functional server and client interactions within a workspace makes buildint SSR application seamless and a very easily managed stack.</p>
        
      </article>
    </main>
    <footer className="h-10 bg-slate-200 flex flex-row items-center px-2">
      <p>&copy; James Irwin 2024</p>
    </footer>
  </>);
}
