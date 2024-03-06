import { Link, P, Section, Title } from "@/components";


export default function Home() {
  return (<>
    <header className="h-16 bg-slate-200 flex flex-row justify-center md:justify-between items-center px-2 shadow fixed w-dvw">
      <a href="/" className="flex flex-row gap-2 items-center px-1 rounded-sm hover:shadow-md transition-all hover:bg-slate-300 duration-200">
        <h1 className="text-xl font-bold">JASS</h1>
        Just another Static Site
      </a>
    </header>
    <main className="flex-grow pt-16">
      <article className="m-4 p-4 shadow">
        <h3 className="text-lg">Nextjs</h3>
        <P>Nextjs to me is the wonderful evolution of react. with the ability to define fully functional server and client interactions within a workspace makes buildint SSR application seamless and a very easily managed stack. However lots of its benefit is lost on a static site. Anyways heres how I did it.</P>
        <Section>
          <Title step={1} title="Build the static site structure"/>
          <P>Nextjs has a really cool navigation convention that allows you to declare api and ui "leafs" side by side. Also routes can be nested like a normal file server so coming from something like express it feels like half the job of routing is done for you.</P>
          <Link href="https://nextjs.org/docs/app/building-your-application/routing">Nextjs Routing Documentation</Link>
        </Section>
        
        <Section>
          <Title step={2} title="Create a layout"/>
          <P>Initially I wanted to build in mui. while adding in a their app cache doesnt seem like to much I figured remove complications.</P>
          <P>Ultimately Nextjs supports tailwind out of the box so prototyping is easy. But for more complex or polished project you might want to check out MUI or rather @emotion. It provides some great optimizations for server side rendering if someone like the styled-components behavior.</P>
          <Link href="https://mui.com/material-ui/integrations/nextjs/">MUI's Nextjs integration guid</Link>
        </Section>

        <Section>
          <Title step={3} title="Create an upstream"/>
          <P>To put it simply make an online repo. While your there head over to pages and set it to use git actions rather then a branch</P>
        </Section>

        <Section>
          <Title step={4} title="Configure your nextjs action"/>
          <P>I am not going to review the action line by line but review the changes that had to be made</P>
          <P>Their actions are a little outdated</P>
          <ul className="list-decimal pl-4">
            <li>
              <b>Remove the setup pages step from nextjs.yml</b>
              <P>This step creates an invalid next.config.js that contains invalid keys</P>
            </li>
            <li>
              <b>Remove the Static HTML export step</b>
              <P>This step uses a legacy cli command that is no longer supported</P>
            </li>
            <li>
              <b>Update next.config.js</b>
              <P>add <code>baseUrl:"/&lt;Site Name&gt;"</code> and <code>output: "export"</code></P>
            </li>
            <li>
              <b>Push Changes</b>
              <P>Any changes to the main branch will start this action which compiles your next server then exports the static pages and files.</P>
            </li>
          </ul>
        </Section>
      </article>
    </main>
    <footer className="h-10 bg-slate-200 flex flex-row items-center px-2">
      <p>&copy; James Irwin 2024</p>
    </footer>
  </>);
}

