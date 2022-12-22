import calendarContext from "@/context/calendarContext";
import { useContext } from "react";
import CalendarConfig from "./components/CalendarConfig";
import Media from "./components/Media";
import TextConfig from "@/Components/calendar/LeftSidebar/components/TextConfig.jsx";

export default function LeftSidebar() 
{
    let leftSideComponents = {
        Media,
        CalendarConfig,
        TextConfig
    }

    const { leftSideComponentName } = useContext(calendarContext)
    let ComponentToRender = leftSideComponents[leftSideComponentName]
    return (
        <ComponentToRender />
    )
}
