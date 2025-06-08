import React from "react";
import { useEffect, useState } from "react";
import { ToolsMenu } from "../componants/toolsMenu";
import { SideMenu } from "../componants/sideMenu";
import { Footer } from "../componants/footer";
export const Home: React.FC = () => {
    return(
        <section  >
            <ToolsMenu/>
            <SideMenu/>
            <Footer/>
        </section>
    )
}
