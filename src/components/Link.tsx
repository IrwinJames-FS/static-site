import { AnchorHTMLAttributes, FC } from "react";

export const Link: FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({className, href, ...props}) => <a {...{
	className: className ?? `text-blue-500 hover:text-blue-700 duration-200 hover:bg-slate-300 p-1 rounded`,
	...props
}}/>