import React from "react";
import { useEffect, useState } from "react";
import { ToolsMenu } from "../componants/toolsMenu";
import { SideMenu } from "../componants/sideMenu";
export const Home: React.FC = () => {
    return(
        <section  >
            <ToolsMenu/>
            <SideMenu/>
        </section>
    )
}
