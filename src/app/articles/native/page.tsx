import { Metadata } from "next";
import { Section, Title, Link, P, Code, Article } from "@/components";

const Native = () => (<Article>
	<Section>
		<Title h={3}>Building a React Native Application</Title>
		<P>If you are here for a tutorial on how to make the next great react native application then I apologize you have come to the wrong place. This article is to discuss the obstacles I faced when writing for react native.</P>
		<P>I am experienced with both React and SwiftUI. That being said I have never developed for android so it may be the missing piece of the puzzle however I think my complaints are merely the nature of the beast when writing an application for multiple platforms at once.</P>
		<br/>
		<P>Before I begin I would like to preface this with I love the react native environment and the below comments are merely observations.</P>
	</Section>
	<Section>
		<Title step={1} h={4} title="Best and worst of UI"/>
		<P>React native offers a very intuitive UI system that allows you to build for multiple platforms typically with a singular code base. That being said this comes with a large amount of pitfalls. I think my biggest short coming to adopting react native is I am trying to apply paradigms from both react and swiftUI.</P>
		<P>React&#39;s power comes from both the ability to write in logic with the markup and being able to have full access to the css. SwiftUI on the otherhand while it mimicks a scripting language what can be done within the render block itself if quite limited. Things like animations utilize published and observed variables to react accordingly.</P>
		<P>Because both of these environments use different nuances to accomplish the same goal I spent to much time trying to use one of these methods however react native handles styling and animation a little bit differently from both. This is to allow for it to work out the proper way to accomplish the desired actions on any platform. One of my mentors used to tell me not to optimize because of the compiler. I thought he was refering to optimizing code was unecessary because once compiled it would do the same thing and thought this was short sighted because there are so many ways to accomplish the same task. I think I may have misunderstood him. I think what he meant was do not optimize your code to make it easier on the compiler and my current experience exemplifies why that rings true. I am trying to adjust my code to get react native to play nice with swift but I am overlooking the effect it will have on the other platforms not to mention how the compiler might mishandle the code if its done in a swiftly way. But If I write the code in a react native way the compiler should be able to interperet the code with less conflicts.</P>
	</Section>
	<Section>
		<Title step={2} h={4} title="Uncertain user agent"/>
		<P>In many circumstances this will not become an issue unless an api is secured using the useragent. This can be found on a number of api&#39;s that only intend to work with a server. Take Ark watch for example studio wildcards api will not accept a connection from client side javascript. I assume this is implemented because the api is used as kind of a nameserver to connect game clients to the respective game server as such the only machines accessing this api should be instances of the game or server hosts.</P>
		<P>React native emulates the javascript written on whichever platform you are building for so either a shim will be necessary on platforms that provides invalid user agents.</P>
		<P>This also leads to another complication when it comes to cookies. Some environments dont give direct access to a cookie store while some do not allow the setting of third party cookies. While building for multiple platforms keeping in mind how these technologies implementations are different play a part in how the users will receive or fetch data from an api.</P>
	</Section>
	<Section>
		<Title step={3} h={4} title="Debugging on the edge"/>
		<P>Debugging with react native can be a little bit more complex. Now multiple developer tools have been built to assist with this but when developing for iOS or android you do not get the same granularity as a web application. While coding within react native. In Xcode, androidStudios, netBeans, eclipse and most other IDE&#39;s breakpoints can be set and the IDE contains dev tools to inspect objects and states without the inclusion of a lot of code to bloat the code base. With react native this appears to need 3rd party libraries to make possible. I will admit I havent gone down this rabbit hole quite yet but so far I am not a huge fan of the way debugging is handled.</P>
	</Section>
	<Section>
		<Title h={3} title="Now for the positives"/>
		<P>Once you have adopted a workflow react native makes prototyping across platforms really easy. While platform specific changes might be necessary developing a proof of concept couldnt be easier.</P>
	</Section>
	<Section>
		<Title step={1} h={4} title="Unified Storage"/>
		<P>Storage options like secureStore allow for users to design platform agnostic models to store user information client side. For me this is a god send. Not only because this differenciates between the different storage apis available on different platforms but because it uses good practices for each respective platform. SecureStore is intended for storing authentication info but with the ability to incorporate redux or other persistant state management tools into a cross platform application seems like a weight is being lifted off my shoulder when trying to plan out what is need for a cross platform application.</P>
	</Section>
	<Section>
		<Title step={2} h={4} title="Enough with nuance"/>
		<P>I know I griped about this earlier but from a cross platform development perspective being able to remove thee nuances of each language and focus only on the intent and logic of an application makes prototyping extremely simple.</P>
	</Section>
	<Section>
		<Title step={3} h={4} title="Platform specific code"/>
		<P>Initially I was dreading having to write platform specific components however then I found platform.select allows me to eliminate a lot of switch statements I started to think This framework isnt so bad. Then I found out about platform extensions and thought I found a new best friend.</P>
		<P>For example:</P>
		<P>If I make 3 files &#34;Title.jsx&#34;, &#34;Title.ios.jsx&#34;, and &#34;Title.android.jsx&#34; all I have to do is import Title and react native will handle the rest.</P>
		<Code>
{`import Title from "./Title";

const Body = () => (<View>
	<Title>Some title</Title>
</View>)`}
		</Code>
		<P>In the above snippet the Title has the potential to be 3 completely unique components based on the platform the code is being compiled for. For me the potential hidden behind this feature is boundless. Imagin being able to write different graphical algorithms to handle different coordinate origins. for instance SceneKit uses a top down coordinate system. WebGL makes origin the center of your graph. And I have heard (havent had the pleasure of testing this myself) android uses a bottom up coordinate system. If I were writing a cross platform game that used vertex buffers then these vertices on their face would not be compatible to all systems. but if I build my vertices using a world matrix where I assume origin is the center of the page then transforming said vertices using SIMD is an identity function + an offset or - an offset depending on what platform your catering to.</P>
	</Section>
</Article>);

export const metadata: Metadata = {
	title: "Building a react native application",
	description: "The best and worst of all worlds",
  };
export default Native;