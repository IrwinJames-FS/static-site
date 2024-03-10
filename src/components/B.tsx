import { FC } from "react";
import { ParentElement } from "./types";

export const B : FC<ParentElement> = ({children}) => (<p className="font-bold inline bg-inherit">{children}</p>);