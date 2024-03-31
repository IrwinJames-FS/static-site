import { FC, ReactNode } from "react";
import { ParentElement } from "./types";

export const P: FC<ParentElement> = ({children}) => (<p className="pl-4 my-2 indent-4">{children}</p>);