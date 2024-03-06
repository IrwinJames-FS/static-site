import { FC } from "react";
/**
 * Just a convenience. because each section has a specific format this will not accept children
 */
interface TitleProps {
	step: number
	title: string
}
export const Title: FC<TitleProps> = ({step, title}) => (<h3 className="text-lg"><span className="font-bold">{step}.</span> {title}</h3>)