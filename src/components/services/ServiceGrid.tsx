import Image from 'next/image';
import {services,groups} from '@/data/services';
import ContactButton from '../common/ContactButton';
import Reveal from '../common/Reveal';
export const groupIds=['repairs-diagnostics','wiring-connections','fans-lighting','home-installations'];
export default function ServiceGrid({detailed=false}:{detailed?:boolean}){
 return <>{groups.map((group,index)=><section className={detailed?'service-group':'home-service-group'} id={groupIds[index]} key={group}>
 <div className="group-heading"><span>0{index+1}</span><h3>{group}</h3></div>
 <div className="service-grid">{services.filter(s=>s.group===index).map((s,i)=><Reveal key={s.title} className="service-card" delay={i%3*65}>
 <div className="service-photo"><Image src={s.image} alt={s.imageAlt} fill sizes="(max-width: 560px) 100vw, (max-width: 1000px) 50vw, 33vw"/><span className="service-photo-icon"><s.icon size={23} strokeWidth={1.7}/></span></div>
 <article className="service-card-content"><h4>{s.title}</h4><p>{detailed?s.detail:s.summary}</p><div className="service-actions"><ContactButton kind="call" service={s.title} compact/><ContactButton kind="whatsapp" service={s.title} compact/></div></article>
 </Reveal>)}</div></section>)}</>;
}
