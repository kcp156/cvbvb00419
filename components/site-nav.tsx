

import { NavMain } from "@/components/nav-main"
import BtnSignin from "./btn-signin"


export function SiteNav() {
  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full  shadow dark:shadow-slate-800    bg-black backdrop-blur">
      <div className="  container flex h-16  items-center ">
        <NavMain />
        {/* <MobileNav /> */}
        <div className="flex flex-1 items-center justify-end space-x-4">
          
          {/* <ModeToggle />
            <LoginButton/> */}
       
          <nav className="flex items-center space-x-3">
           
            <BtnSignin/>
          </nav>
        </div>
      </div>
    </header>
  )
}
