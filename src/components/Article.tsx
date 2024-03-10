import { FC } from "react";
import { ParentElement } from "./types";

export const Article : FC<ParentElement> = ({children}) => (<article className="m-4 p-4 shadow">{children}</article>);