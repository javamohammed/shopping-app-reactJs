import React from 'react'
import Brand from "../components/ui/Brand";
import Menu from "../components/ui/sidebar/Menu";
import MenuFooter from "../components/ui/sidebar/MenuFooter";
export default function LeftBar() {
    return (
        <aside className="left-sidebar bg-sidebar">
          <div id="sidebar" className="sidebar sidebar-with-footer">
            <Brand/>
            <Menu/>
            <hr className="separator" />
            <MenuFooter/>
          </div>
        </aside>
    )
}
