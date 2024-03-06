import { Code, Link, P, Section, Title } from "@/components";


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
        <Section>
          <h3 className="text-xl font-bold">Nextjs</h3>
          <P>Nextjs to me is the wonderful evolution of react. with the ability to define fully functional server and client interactions within a workspace is great! Anyways heres how I did it.</P>
        </Section>
        
        
        <Section>
          <Title step={1} title="Build the static site structure"/>
          <P>Nextjs has a really cool navigation convention that allows you to declare api and ui &#34;leafs&#34; side by side. Also routes can be nested like a normal file server so coming from something like express it feels like half the job of routing is done for you. (For this site this is unecessary because its a single page)</P>
          <Link href="https://nextjs.org/docs/app/building-your-application/routing">Nextjs Routing Documentation</Link>
        </Section>
        
        <Section>
          <Title step={2} title="Create a layout"/>
          <P>Initially I wanted to build this using mui, however I decided to keep things simple.</P>
          <P>Ultimately Nextjs supports tailwind out of the box so prototyping is easy. But for more complex or polished project you might want to check out MUI or rather @emotion. It provides some great optimizations for server side rendering if someone likes styled-components.</P>
          <P>To build this page I created a the following components:</P>
          <ul className="list-disc pl-8">
            <li>Code</li>
            <li>Link</li>
            <li>P</li>
            <li>Section</li>
            <li>Title</li>
          </ul>
          <P>Currently the header and footer is set on the page however if the same header and footer is used site wide it can easily be moved to the layout file. Because the topbar and footer are only used once and contains no state I did not see the need to make a reusable component for them. </P>
          <Link href="https://mui.com/material-ui/integrations/nextjs/">MUI&#39;s Nextjs integration guid</Link>
        </Section>

        <Section>
          <Title step={3} title="Create an upstream"/>
          <P>To put it simply make an online repo. While your there head over to the settings page and enable pages and set it to use git actions rather then a branch</P>
        </Section>

        <Section>
          <Title step={4} title="Configure your nextjs action"/>
          <P>I am not going to review the action line by line but review the changes that had to be made</P>
          <P>Their actions are a little outdated</P>
          <ul className="list-decimal pl-4">
            <li>
              <b>Remove the setup pages step from nextjs.yml</b>
              <Code>
{`- name: Setup Pages
    uses: actions/configure-pages@v4
    with:
      # Automatically inject basePath in your Next.js configuration file and disable
      # server side image optimization (https://nextjs.org/docs/api-reference/next/image#unoptimized).
      #
      # You may remove this line if you want to manage the configuration yourself.
      static_site_generator: next`}
              </Code>
              <P>This step creates an invalid next.config.js that contains invalid keys</P>
            </li>
            <li>
              <b>Remove the Static HTML export step</b>
              <Code>
{`- name: Static HTML export with Next.js
    run: \$\{\{ steps.detect-package-manager.outputs.runner \}\} next export`}
              </Code>
              <P>This step uses a legacy cli command that is no longer supported</P>
            </li>
          </ul>
        </Section>
        <Section>
          <Title step={5} title="Update next.config.js"/>
          <Code>
{`module.exports = {
  baseUrl: "/<Site Name>",
  output: "export"
}`}
          </Code>
          <ul className="list-disc pl-4">
            <li>Changing the baseUrl instructs the next application where its located on the server. (Warning local development will change to {`http://localhost:3000/<Repo Name>`}</li>
            <li>Adding the export flag will build the nextjs application and export the static pages</li>
          </ul>
        </Section>
        <Section>
          <Title step={6} title="Push Changes"/>
          <P>Now when the main branch is pushed to the nextjs action will run which will compile the site and upload it to the site pages.</P>
        </Section>
      </article>
    </main>
    <footer className="h-10 bg-slate-200 flex flex-row items-center px-2">
      <p>&copy; James Irwin 2024</p>
    </footer>
  </>);
}

