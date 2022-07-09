import React from "react";
import n from './Navbar.module.css'

const Nsvbar = ()=>{
    return <nav className={n.nav}>

<div className={`${n.item} ${n.active}`}><a>Profile</a></div>
<div className={n.item}><a>Messages</a></div>
<div className={n.item}><a>News</a></div>
<div className={n.item}><a>Music</a></div>
<div className={n.item}><a>Setting</a></div>
    </nav>
}

export default Navbar;