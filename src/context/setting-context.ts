import { createContext } from "react";

export interface SettingContextData {
    eyes: number;
    mouth: number;
    color: number;
}

export const SettingContext = createContext<SettingContextData>({
        eyes: 1,
        mouth: 1,
        color: 2
})