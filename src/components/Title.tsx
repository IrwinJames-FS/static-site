import { FC, ReactNode } from "react";
/**
 * Just a convenience. because each section has a specific format this will not accept children
 */
interface TitleProps {
	step?: number
	title?: string
	children?: ReactNode
}
export const Title: FC<TitleProps> = ({step=0, title, children}) => (<h3 className="text-lg font-bold">{step > 0 && <span className="font-bold">{step}.</span>} {title ?? children}</h3>)