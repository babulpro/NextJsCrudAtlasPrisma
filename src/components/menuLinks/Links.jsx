import Link from "next/link"
import NavLink from "../menu/navLink/navLink"
 


const links=[
    {
        title:"homepage",
        path:"/"
    },
    {
        title:"about",
        path:"/about"
    },
    {
        title:"contact",
        path:"/contact"
    },
    {
        title:"blog",
        path:"/blog"
    },
    {
        title:"crud",
        path:"/crud"
    }

]
const Links =()=>{

    const session = true;
    const isAdmin = true;

    return(
        <div>
              <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
         
             {links.map((value,index)=>{
                return(
                    <NavLink items={value} key={value.title}/>
                )
             })}

             { session ? (
              <>
                {isAdmin && <NavLink items={{title:"admin",path:"/admin"}}/>}              
              <button className="hover:text-red-700 hover:animate-bounce">Logout</button>
              </> 
              ) : (
                <NavLink items={{title:"login",path:"/login"}}/>
              )
             }
         
         {/* submenu */}
        {/* <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li> */}

        {/* <li><a>Item 3</a></li> */}

      </ul>
    </div>
    <Link href={"/"} className="btn btn-ghost text-xl ">BabulPro</Link>
     
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">

    {links.map((value,index)=>{
                return(
                    <NavLink items={value} key={value.title}/>
                )
             })}
             { session ? (
              <>
                {isAdmin && <NavLink items={{title:"admin",path:"/admin"}}/>}              
              <button className="hover:text-red-700">Logout</button>
              </> 
              ) : (
                <NavLink items={{title:"login",path:"/login"}}/>
              )
             }
         
         
        
      {/* <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li> */}

    </ul>
  </div>
  {/* <div className="navbar-end">

    <a className="btn">Button</a>
    
  </div> */}
</div>
        </div>
    )
}

export default Links