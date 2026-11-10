"use client";
import {useEffect,useRef,useState} from 'react';
export default function Reveal({children,className='',delay=0}:{children:React.ReactNode;className?:string;delay?:number}){
 const ref=useRef<HTMLDivElement>(null);const [state,setState]=useState('visible');
 useEffect(()=>{const el=ref.current;if(!el||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
 if(el.getBoundingClientRect().top<window.innerHeight)return;
 setState('pending');const observer=new IntersectionObserver(entries=>{if(entries.some(entry=>entry.isIntersecting)){setState('visible');observer.disconnect()}},{threshold:0.08});observer.observe(el);return()=>observer.disconnect();},[]);
 return <div ref={ref} className={`reveal ${className}`} data-state={state} style={{transitionDelay:`${delay}ms`}}>{children}</div>;
}
