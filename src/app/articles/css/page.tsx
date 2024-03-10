import { Article, Section, Title, P, Code } from "@/components";
import { Metadata } from "next";
import { FaBars } from "react-icons/fa";

const Page = () => (<Article>
	<Section>
		<h1 className="text-xl font-bold">CSS :has Support!</h1>
		<p>With all major browsers now supporting the :has selector the world of cascading style sheets will change forever. :has allows for complext styling states in which parents or siblings are reliant upon single or multiple html elements</p>
		<p>I will use raw CSS in my examples however with the potential complexity :has can add to a stylesheet I would recommend using css preprocessor so you can more easily modularize the styles</p>
		
	</Section>
	<Section>
		<p>Example:</p>
		<div className="expandable">
			<label><FaBars/><input type="checkbox" className="hidden"/></label>
			<ul>
				<li>A List can be a powerful thing</li>
				<li>It can be a menu</li>
				<li>A popup</li>
				<li>A row handler</li>
				<li>And well a list!</li>
			</ul>
		</div>
	</Section>
	<Section>
		<Title>Dont use a bazooka for a fly</Title>
		<p>Often times as developers especially react developers we are quick to design statefull components to accomplish basic styling problems. The convention of hiding and displaying components being one of them. </p>
		<p>This goes both way CSS will not always be a viable method to handle complex UI interactions however the :has operator gives us a bit more power in our css toolkit.</p>
	</Section>
	<Section>
		<Title step={1}>The html markup</Title>
		<P>The html markup needs to be carefull planned out to be able to take advantage of the :has selector</P>
		<Code>
{`
<div class="expandable">
	<label>
		<i class="fa fa-bars"></i>
		<input type="checkbox" class="hidden"/>
	</label>
	<ul>
		<li>A List can be a powerful thing</li>
		<li>It can be a menu</li>
		<li>A popup</li>
		<li>A row handler</li>
		<li>And well a list!</li>
	</ul>
</div>
`}
		</Code>
		<P>Using the has operator we can set styling rules that will only apply to the &lt;ul&gt; tag when the input is checked</P>
	</Section>
	<Section>
		<Title step={2}>The CSS</Title>
		<Code>
{`
.expandable ul {
	height: 0;
	transition: 1s;
	overflow: hidden;
}

.expandable label:has(input:checked) + ul {
	height: 10rem;
}
`}
		</Code>
		<P>Its really that simple. To break it down the first rule is saying the ul is hidden. I wanted there to be some animation later so instead of using display:none I set the height to 0 and overflow to hidden.</P>
		<P>The second declaration uses the has selector to check if the label has an input that is checked and if so it then selects the ul which is expected to be its next sibling. And finally the height is updated to 10rem.</P>
	</Section>
	<Section>
		<Title>Wrapping Up</Title>
		<P>In this very simple example the power of :has should be apparent whether it be dependent on an input value or maybe a more discreet value allowing developers the ability to reduce the markup and offload restyling to css more efficiently</P>
		<Code>
{`
.some-responsive-selector element:has(.toggle-btn[class*="expanded"]) + .container {
	//...
}
`}
		</Code>
		<P>Using attribute selectors with wildcards we can how tie all of our css animations to a common class on a common element.</P>
	</Section>
</Article>);

export const metadata: Metadata = {
	title: "CSS :has Support!",
	description: "The :has Selector has gained support by all major browsers",
};
export default Page;