import { Article, Section, Title, P, Code, Link } from "@/components";
import { Metadata } from "next";
import { FaBars } from "react-icons/fa";

const Page = () => (<Article>
	<Section>
		<Title h={2}>Ark Watch</Title>
		<Link href="http://arkwatch.us">Arkwatch.us</Link>
		<P>If you didnt know I am a huge Ark Survival Evolved (ASE) fan. Since the release of Ark Survival Ascended (ASA) I have been practically obsessed. ASA is a remake of ASE built on studio wildcards new rendering engine that was developed for their new game Ark 2. In this game you are a human on an island populated by dinosaurs mythical creatures and other prehistoric animals. You can tame most of these beasts and many have unique abilities or uses to improve your quality of life throughout the game. I enjoy playing on their Player vs Player servers where myself and my friends have a tribe and a pretty built up base. The biggest trouble is we all work fulltime jobs and have other commitments and other players plan their attacks based on how frequently tribes sign in. We started thinking it would be great if we could monitor our server remotely. Enter Ark Watch, Initially I built ark watch using nwjs and react but this had some serious draw backs because the software only operated while the computer was awake. I then decided to deploy a server to solve this issue. I had another obstacle however. I have a virtual machine I can use however it does not support installation of databases. I did not want to resort to spinning up a third party database primarily because the financial burden it might create so I instead decided to roll my own storage option (I know the tech debt here is astronomic). Anyways the storage method needed to be light weight and have the ability to serialize data in a time incremented fashion. I only have 1gb of ram to work with so I needed to be able to read this file in chunks to avoid excessive memory load and I needed the ability to do this all quickly.</P>
	</Section>
	<Section>
		<Title h={4} step={1}>Stack</Title>
		<P>The stack is very simple. its an express server that uses express-cron to schedule lookups. The front end is built using react with an mui component library with literally 0 styling.</P>
	</Section>
	<Section>
		<Title h={4} step={2}>Storage</Title>
		<P>The storage system is storing to a .watch file (just a text file with a pretty extension). To reduce memory load instead of using nodes fs api I am using the readline api and using the file as an input stream subsequently I am using a temporary file as an output stream. The biggest drawback is each hour for a few miliseconds I am doubling the size of data being stored. each line is encoded like a buffer that is iterated over in pairs except for the first entry which is always the time the data was written.</P>
	</Section>
	<Section>
		<Title h={4} step={3}>Logic</Title>
		<P>Every 10 seconds arkwatch polls ark&39;s servers and stores the population of each server in a special object. at the top of each hour this object is cleared out and the population is averaged and stored to the .watch file. When a user signs in the react application polls arkwatches servers every 10 seconds and receives the data from the last time Ark&39;s servers were polled (In theory this should always be new info but cron jobs dont always fire every 10 seconds which results in occasional duplicate info). When a user clicks the graph icon by a server population they can see up to 3 months of population information for that server and population trends. This make scouting and monitoring servers very easy.</P>
	</Section>
	<Section>
		<Title h={4} step={4}>Bugs</Title>
		<P>Currently the site needs a lot of work to be mobile ready. The grid in itself is to elaborate to be displayed properly on a mobile device.</P>
		<P>The VPS I am using does not like long lived ssh commands so I must utilize the nohup command to keep the site live.</P>
		<P>In Dark mode some text becomes invisible because it is not updating with the rest of the theme. (This has to do with recharts not updating when the theme changes)</P>
		<P>The charts can be difficult to read. This is because the multitude of information available. Recharts has some methods to simplify the view however I am hesitant because removing to much data may result un useless data especially since the biggest use case is determining what hours are the lowest population.</P>
	</Section>
	<Section>
		<Title h={4} step={5}>Upcoming updates</Title>
		<ul className="list-disc pl-8">
			<li>Monetization. This site has gained quite a bit of popularity in the ark community. I have between 100-200 active users at any given moment. Because of this popularity I am trying to get approval to advertise through google (yes I know their are a lot of ad publishing companies out there, many however utilize unethical practices). While google is not perfect it is the lesser of the evils in this situation. I tried to reach out to Studio Wildcard and Snail Games to see if they would be interested in advertising their other games or advertising their server solutions but no response as of yet.</li>
			<li>Unofficial Support. Currently I am only supporting official servers because they all using a naming convention that allows me to extrapolate quite a bit of information but official servers are not held to such a standard.</li>
			<li>Server forums. I find a lot of servers tend to develop their own community which usually uses discord to communicate. However its often the case that newer players are not invited to the discord. A community page would allow new players to interact with veteran players without access to the discord server.</li>
			<li>Discord bot. I had a discord bot running from a raspberry pi which did essentially the same thing arkwatch does for ASE. I would like to add in this functionality to ark watch so users can access its data directly from discord.</li>
			<li>Native Apps. If I am able to make this into a profitable project I would like to release iphone and android apps that users can set notification rules on their favorite servers so the app can notify them when populations change or spike</li>
		</ul>
	</Section>
</Article>);

export const metadata: Metadata = {
	title: "Ark watch!",
	description: "Ark watch is live... kind of",
};
export default Page;