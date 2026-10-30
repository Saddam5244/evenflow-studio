import Image from 'next/image'; 
import { blogs } from '@/data/content'; 
import { ArrowUpRight } from 'lucide-react';
export default function Blogs(){
    return 
    <section id="blogs" className="section blogs">
        <div className="container">
            <div className="blog-head">
                <div><div className="kicker">BLOG / INSIGHTS</div>
                <h2>Notes on Building Better Products.</h2></div>
                <a href="#contact">View All Posts ↗</a></div>
                <div className="blog-grid">
                    {blogs.map(b=><article className="blog-card" key={b.title}>
                        <div className="blog-image">
                            <Image src={b.image} alt="" fill sizes="(max-width: 700px) 100vw, 33vw"/></div>
                            <div className="blog-meta"><span>{b.tag}</span>{b.date}</div><h3>{b.title}</h3><p>{b.desc}</p>
                            <a href="#contact" aria-label={`Read ${b.title}`}><ArrowUpRight/></a></article>)}</div></div></section>}
