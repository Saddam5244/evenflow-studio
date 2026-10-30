'use client';
import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
export default function Navbar(){
 const [open,setOpen]=useState(false); const links=[['About','#about'],['Portfolio','#portfolio'],['Service','#services'],['Blogs','#blogs'],['Contact','#contact']];
 return <header className="nav-wrap"><nav className="container nav"><a className="brand" href="#home">Evenflow <span>Studio</span></a><div className="nav-links">{links.map(([n,h])=><a key={n} href={h}>{n}</a>)}</div><div className="nav-actions"><div className="lang">EN <i/> PL</div><a className="btn btn-small" href="#contact">Launch your MVP <ArrowUpRight size={14}/></a></div><button className="menu-toggle" onClick={()=>setOpen(!open)} aria-label="Toggle menu">{open?<X/>:<Menu/>}</button></nav>{open&&<div className="mobile-menu">{links.map(([n,h])=><a onClick={()=>setOpen(false)} key={n} href={h}>{n}</a>)}<a className="btn" href="#contact">Launch your MVP ↗</a></div>}</header>
}
