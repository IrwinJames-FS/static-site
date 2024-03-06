import { FC } from "react";
import { ParentElement } from "./types";

export const Section: FC<ParentElement> = ({children}) => (<section className="m-4 p-4 rounded bg-slate-200 shadow">{children}</section>)