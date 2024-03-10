import { AnchorHTMLAttributes, FC } from "react";

export const Link: FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({className, ...props}) => <a {...{
	className: `text-blue-500 hover:text-blue-700 duration-200 hover:bg-slate-300 p-1 relative rounded${className ? ` ${className}`:''}`,
	...props
}}/>