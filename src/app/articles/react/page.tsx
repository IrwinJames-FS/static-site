import { Article, Section, Title, P, Code, B, Link } from "@/components";
import { Metadata } from "next";
import { Library } from "./Library";

const Page = () => (<Article>
	<Section>
		<Title h={1}>Flavors of React</Title>
		<P>React today comes in a wide range of flavors depending on deployment strategies and frameworks being used. Each has different benefits and hopefully this article will point you in the right direction.</P>
		<P>The technologies I will be referencing today will be high level libraries that are able to package and deploy react projects while reducing the necessary boilerplate.</P>
	</Section>
	<Section>
		<Title step={1}>Single Page Applications</Title>
		<P>React at its core was developed to solve this problem. The single page application allows all the applications code to be shipped on the first page load. This creates a slower initial load with improved performance on subsequent page loads.</P>
		<P>While libraries like react-router-dom provides a method to enable client side routing this solution is best for small applications that have a common code base across the application.</P>
		<P>I want to elaborate on that last point. A common code base can be common templats or necessary libraries. For example if you are creating custom components for each page to function properly then a multipage application may be a better solution. Additionally if a application has a lot of logic which is specific to different routes requiring large amounts of JavaScript to be downloaded with each update it my allow for a more peformant application to be built as a multipage application.</P>
		<Title h={4}>Deployment methods</Title>
		<Library tag="singlePage"/>
	</Section>
	<Section>
		<Title step={2}>Progressive Web Applications</Title>
		<P>Progressive Web Applications do not require the application to be built using react however react is just about the perfect tool for this in most scenarios. Much like a single page application this may not always be the answer to your problem however can make you application feel like a native application across a variety of devices. </P>
		<P>With the additional access to service workers a PWA application can be a bit more performant when loading larger single page applications and can even handle push notifications.</P>
		<P>If you want an in depth look into setting up a Progressive Web Application without a React Framework <Link href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps">MDN has a great article</Link></P>
		<Title h={4}>Deployment methods</Title>
		<P>In the npx create-react-app iterations the necessary boilerplate is built into the template</P>
		<Library tag="pwa"/>
		<P>This is not to say you could not use other frameworks however manifests and service workers would need to be created manually.</P>
	</Section>
	<Section>
		<Title step={3}>Multipage Applications</Title>
		<P>With Multipage applications we will typically hear the phrase server side rendering a lot. This is because parsing and compiling the react components on the server side allows us to have the benefits of react without having to load all the resources for the application with each page load. This is a newer concept when developing with react so some react modules do not work with server side rendering.</P>
		<Title h={4}>Deployment methods</Title>
		<Library tag="multiPage"/>
	</Section>
	<Section>
		<Title step={4}>Libraries</Title>
		<P>If you want to build tools for other developers that rely on react such as a UI library not all frameworks are created equal. CRA for instance is not a good choice to build a react library on top of. While its not impossible you will need to reconfigure a lot of things after ejecting the application.</P>
		<Library tag="lib"/>
	</Section>
	<Section>
		<Title step={5}>Local</Title>
		<P>This flavor has very mixed feelings however for indi developers is a great use for react. A few frameworks have built packaging tools that allow for react applications to be deployed locally without the need of a backing server or microservice</P>
		<Library tag="local"/>
		<P>There are a few others that allow you to build local applications within a react environment however due to lack of recent updates I do not recommend these options.</P>
	</Section>
</Article>);

export const metadata: Metadata = {
	title: "Flavors of React",
	description: "Reactjs reaches further then you might imagine",
};
export default Page;