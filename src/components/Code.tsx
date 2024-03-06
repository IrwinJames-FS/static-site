import { FC } from "react";
import { ParentElement } from "./types";


export const Code: FC<ParentElement> = ({children}) => (<code>
	<pre className="bg-slate-500 text-white p-1 font-mono">{children}</pre>
</code>);