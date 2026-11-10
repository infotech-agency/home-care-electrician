"use client";
import {Phone,ArrowUpRight} from 'lucide-react';
import {business} from '@/data/business';
import WhatsAppIcon from './WhatsAppIcon';
import {useState,useEffect,useRef} from 'react';
export default function ContactButton({kind='call',service,compact=false}:{kind?:'call'|'whatsapp';service?:string;compact?:boolean}){
 const [open,setOpen]=useState(false);const trigger=useRef<HTMLAnchorElement>(null);const dialog=useRef<HTMLDivElement>(null);
 useEffect(()=>{if(!open)return;const handleKey=(e:KeyboardEvent)=>{if(e.key==='Escape')setOpen(false);if(e.key==='Tab'){const nodes=dialog.current?.querySelectorAll<HTMLElement>('a,button');if(!nodes?.length)return;const first=nodes[0],last=nodes[nodes.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}};document.addEventListener('keydown',handleKey);return()=>{document.removeEventListener('keydown',handleKey);trigger.current?.focus()};},[open]);
 const whatsapp=kind==='whatsapp';
 const message=`Hello, I need ${service||'an electrician home visit service'}. Please share the details.`;
 const href=whatsapp?`https://wa.me/${business.phone.replace(/\D/g,'')}?text=${encodeURIComponent(message)}`:`tel:${business.phone}`;
 return <><a ref={trigger} className={`button ${whatsapp?'button-outline button-whatsapp':'button-primary'} ${compact?'compact':''}`} href={business.contactReady?href:'#contact-notice'} onClick={e=>{if(!business.contactReady){e.preventDefault();setOpen(true)}}}>
 {whatsapp?<WhatsAppIcon size={18}/>:<Phone size={18}/>} {whatsapp?(service?'WhatsApp':'WhatsApp us'):'Call now'} {!compact&&<ArrowUpRight size={17}/>}</a>
 {open&&<div className="modal-backdrop" onClick={()=>setOpen(false)}><div ref={dialog} role="dialog" aria-modal="true" aria-labelledby="notice-title" className="notice" onClick={e=>e.stopPropagation()}><span className="eyebrow">Website preview</span><h2 id="notice-title">Contact number coming soon.</h2><p>The displayed number is a placeholder. Calls and WhatsApp enquiries will be enabled when the business number is added.</p><a className="text-link" href={business.profile} target="_blank" rel="noreferrer">View Google Business Profile <ArrowUpRight size={16}/></a><button className="button button-primary" autoFocus onClick={()=>setOpen(false)}>Got it</button></div></div>}</>;
}
