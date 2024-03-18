import { Metadata } from "next";
import { Section, Title, Link, P, Code, Article } from "@/components";

const Deploy = () => (<Article>
  <Section>
	<Title h={3}>Deploying to heroku</Title>
	<Link href="https://repair-shop-25d7090139e6.herokuapp.com">Repair Shop</Link>
	<P>Deploying to heroku had me going through flips in my head. I ran into a number of different problems. The first being was migrating my file structure, Then getting my environment variables to work. and finally fixing a build bug.</P>
	<P>A couple things if you are viewing the site from heare. Please review excersize 2.9s feedback for login information</P>
	<P>After I finished the project I realized I took it a bit to far.</P>
  </Section>
  <Section>
	<Title h={4}>File Structure</Title>
	<P>Initially I created a git repo with a /api and /bench directory. In one of the videos you show deploying directly from the api directory. I then refactored the api and later I learned that I needed to revert back. Anyways a forced push later I was back on track.</P>
  </Section>
  <Section>
	<Title h={4}>Environment Variables</Title>
	<P>One issue that I could not find a particularly clean solution to was environment variables. When trying to build on heroku I have one environment file whereas on local REACT_APP variables are not automatically trickled to the react project. Now I am sure there is a method to elegantly provide a common env file to both the server and client locally however the simpler solution was to give react its own env file. I also tweaked the env file for the server to exist in the root of both projects. This emulates the behavior heroku uses.</P>
  </Section>
  <Section>
	<Title h={4}>Build Scripts</Title>
	<P>The build scripts were the final obstacles I had to get past. In the lessons we defined an api-build script which calls npm build --prefix api. This is good but no build script exists on the api so heroku does not like this script. Thinking I was being clever I changed this to npm start --prefix api. However this was foolish because I have a built in start script. I missed the part in the heroku deploy process that says it will automatically call the start script to launch the server which resulted in two npm start commands. Heroku does not like this one bit and the result is heroku will hang. Luckily the heroku cli is wonderful and it works like a charm. I was able to shut down the erroneous deployment and then updated my postbuild script to not build the api and everything spun up rather nicely.</P>
  </Section>
</Article>);

export const metadata: Metadata = {
	title: "Deploy a Nextjs Site to heroku",
	description: "Its a common pipeline",
  };
export default Deploy;