import React from "react";
import { IGroups } from "../types/type";

export interface IData {
    groups: IGroups[]
    addStudent: Function;
    deleteStudentById: Function;
    addGroup: Function;
    deleteGroupById: Function;
}

export const MyContext = React.createContext<IData>({} as IData);