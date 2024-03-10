import { FC, ReactElement, ReactNode } from "react";
/**
 * Just a convenience. because each section has a specific format this will not accept children
 */
interface TitleProps {
	h?: 1 | 2 | 3 | 4 | 5 | 6 
	step?: number
	title?: string
	children?: ReactNode
}
export const Title: FC<TitleProps> = ({h=3, step=0, title, children}) => {
	const H = `h${h}` as keyof JSX.IntrinsicElements ;
	const fs = fontSize(h);
	return (<H className={`${fs} font-bold`}>{step > 0 && <span className="font-bold">{step}.</span>} {title ?? children}</H>)
}

const fontSize = (n:number) => {
	switch (n) {
		case 5: return 'text-lg';
		case 4: return 'text-xl';
		case 3: return 'text-2xl';
		case 2: return 'text-3xl';
		case 1: return 'text-4xl';
		default: return 'text-base';
	}
}