import { createContext } from "react";

export interface SettingContextData {
    eyes: number;
    mouth: number;
    color: number;
}

export interface SettingData extends SettingContextData {
    changeEyes: (eyes: number) => void;
    changeMouth: (mouth: number) => void;
    changeColor: (color: number) => void;
} 

export const SettingContext = createContext<SettingData>({
        eyes: 1,
        mouth: 1,
        color: 2,
        changeEyes: () => {},
        changeMouth: () => {},
        changeColor: () => {},
})

