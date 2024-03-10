import { B, Link, P } from "@/components"
import { FC, ReactNode } from "react"

/**
 * This model allows me elaborate on why its a good fit for reacts use case based on the filter
 */
type SrcType = {
	title: string
	href: string
} & Record<string, ReactNode>

const libraries: SrcType[] = [
	{
		title: 'CRA',
		href: 'https://create-react-app.dev/',
		singlePage: 'CRA(create-react-app) is an npx template that can generate a basic single page application in a single cli command.',
		pwa: 'In the final iterations of cra progressive web application boilerplate is built in automatically.'
		
	},
	{
		title: 'Vite',
		href: 'https://vitejs.dev/config/',
		singlePage: 'Vite is a really powerful library for deploying react applications for both single page and multipage applications. It even supports preact. Vite offers an npm create template which allows for building a project with a number of different options.',
		pwa: 'Vite offers a number of options each with a corresponding Service Worker version which is suffixed with -sw in their npm create interface',
		multiPage: 'Vite uses a unique method of routing static or multipage sites. index.html is in the root of the directory rather then public. then any index.html file found within the directory will be treated as a leaf. Pros this allows you to define additional resourcers and change the title and description easily on each page. Con this method has a bit of boiler plate for each page',
		lib: 'Vite is currently my favorite framework for library creation. It does a good job deduping multiple references however does struggle with npm links while in production this may not be an issue development is usually going to be an unpublished however this can be easily addressed by importing all of your external (linked) depenedencies into one file then each file within the application import from the dependency file.'
		
	},
	{
		title: 'Gatsby',
		href: 'https://www.gatsbyjs.com/docs/quick-start/',
		singlePage: 'Gatsby is a great way to build a static or single page application. Their documentation features lots of expamples even showing how to build a fully featured content management system.',
		pwa: 'Out of the box Gatbsy claims to be PWA ready however its barebones packager does not create a manifest or have any pre defined service workers to handle caching. They do offer plugins similar to babel or webpack which provide these features however',
		multiPage: 'Gatsby has a node api that allows you to define which pages need to be created. This allows you to control your routes in a JSON or javascript file instead of the file system. '
	},
	{
		title: 'NextJs',
		href: 'https://vercel.com/new/clone?utm_source=next-site&utm_medium=banner&utm_campaign=home&b=main&s=https%3A%2F%2Fgithub.com%2Fvercel%2Fvercel%2Ftree%2Fmain%2Fexamples%2Fnextjs&showOptionalTeamCreation=false&template=nextjs&teamCreateStatus=hidden',
		singlePage: 'NextJs is a powerful library however can be easily configured to build single page applications. This also leaves developers with the option to move to a multipage or even api based application very easily.',
		multiPage: <>
		<P>This is the tool for multipage react projects in my opinion. With NextJS allows developers to build bot the front end and backend in tandem this framework is great for a full stack developer! Nextjs also uses a Filesystem Application routing method. (You can also choose to use their statically typed routing method as well).</P>
		<P>Using the Application Routing system makes routing feel like a declarative version of basic file serving. With Reserved file names used to define different things like the layout, page, api. These used as filenames are used to compile either client side code or server side code.</P>
		</>
	},
	{
		title: 'Parcel',
		href: 'https://parceljs.org/docs/',
		singlePage: 'Parcel is a really efficient packager boasting about having better build times then other packagers.',
		multiPage: 'Parcel does support multiple pages however the entry point needs to be defined as a pattern. They also have a number of issues related to multiple pages and multidirectory structures. Most looked closed but this library may require some work getting complex file structures to work properly',
		lib: 'Parcel makes it possible to build a library pretty easily, Parcel uses the declarations within your package.json to determine what it needs to do. As such you can tell it to build your library in both esm and cjs quite simply. It even has support for typescript. I did have trouble using this with Mui when creating a UI Library because of @emotion/styled having multiple instances.',
	},
	{
		title: 'NX',
		href: 'https://nx.dev/getting-started/intro',
		singlePage: 'Nx is kindof an all in one packager. This library allows you to manage multiple react projects within one repo.',
		multiPage: 'Nx encourages its developers to create separate react projects for each unique page that being said nx offers a robust cli library and streamlines the process when trying to deploy to a CI pipline',
		lib: 'Nx has cli commands specifically for building libraries and because of the way it allows use of local libraries defined in a Nx monorepo this removes the need for symbolic links between libraries during development. I think my next library will be build using Nx instead of vite.'
	},
	{
		title: 'ESBuild',
		href: 'https://esbuild.github.io/getting-started/#install-esbuild',
		singlePage: 'ESBuild is a really lightweight packager and it does not offer the full set of tools most other frameworks offer. that being said it is highly customizable.',
		lib: 'ESBuild is really nice when building logical packages however I have found it does create few bugs due to the manner it bundles code. For instance imports are sometimes duplicated causing things like instanceof to be inconsistent because a dependent class is declared twice. That being said with how flexible ESBuild is you can configure it to not do this.'
	},
	{
		title: 'NWJS',
		href: 'https://nwjs.io/',
		local: 'NWJS is a chromium based local deployment solution for nwjs projects. It splits tasks between two contexts a background and client context. This allows one context to have access to the full power of node and the other context to behave just like a web browser. While this can build cross platform applications some applications may need to be built from the desired environment.'
	},
	{
		title: 'Electron',
		href: 'https://www.electronforge.io/',
		local: 'Electron is kind of like a more refined version of nwjs it also uses a chromium based application however it offers a more refined manner to communicate with the front and back end. There is also additional support for build cross platform applications from one device. If you come from an iOS or android/java developing environment this may feel similar as you define hooks throughout the applications lifecycle similar to how these environments use overridable methods to expose different parts of the lifecycle'
	}
]

export const Library: FC<{tag: string}> = ({tag}) => {
	return (<ul className="list-disc pl-4">
		{libraries.filter((st)=>tag in st)
		.map(({title, href, ...rest}, i)=>(<li key={`library-${tag}-${i}`}><Link {...{href}}><B>{title}</B></Link> - {rest[tag] as string}</li>))}
	</ul>) 
}