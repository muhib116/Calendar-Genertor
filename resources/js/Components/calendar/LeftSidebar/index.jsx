import calendarContext from "@/context/calendarContext";
import { useContext } from "react";
import CalendarConfig from "./components/CalendarConfig";
import Media from "./components/Media";

export default function LeftSidebar() 
{
    let leftSideComponents = {
        Media,
        CalendarConfig
    }

    const { leftSideComponentName } = useContext(calendarContext)
    let ComponentToRender = leftSideComponents[leftSideComponentName]
    return (
        <ComponentToRender />
    )
}
