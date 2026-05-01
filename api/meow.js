export const config={runtime:"edge"};

const _=x=>atob(x),
$=_("aHR0cHM6Ly9uaW1hLmZlcmkyMDIwLmly").replace(/\/$/,""),
S=new Set(
_("aG9zdCxjb25uZWN0aW9uLGtlZXAtYWxpdmUscHJveHktYXV0aGVudGljYXRlLHByb3h5LWF1dGhvcml6YXRpb24sdGUsdHJhaWxlcix0cmFuc2Zlci1lbmNvZGluZyx1cGdyYWRlLGZvcndhcmRlZCx4LWZvcndhcmRlZC1ob3N0LHgtZm9yd2FyZGVkLXByb3RvLHgtZm9yd2FyZGVkLXBvcnQ=").split(",")
);

export default async q=>{
if(!$)return new Response(_("TWlzY29uZmlndXJlZDogVEFSR0VUX0RPTUFJTiBpcyBub3Qgc2V0"),{status:500});
try{
let u=q.url,i=u.indexOf("/",8),t=i<0?$+"/":$+u.slice(i),h=new Headers(),p=0;

for(let[e,v]of q.headers)
S.has(e)||e.startsWith(_("eC12ZXJjZWwt"))
?0
:e===_("eC1yZWFsLWlw")
?p=v
:e===_("eC1mb3J3YXJkZWQtZm9y")&&!p
?p=v
:h.set(e,v);

p&&h.set(_("eC1mb3J3YXJkZWQtZm9y"),p);

let m=q.method,b=m!==_("R0VU")&m!==_("SEVBRA");

return await fetch(t,{
method:m,
headers:h,
body:b?q.body:void 0,
duplex:"half",
redirect:_("bWFudWFs")
});
}catch(e){
console.error(_("ZXJy"),e);
return new Response(_("QmFkIEdhdGV3YXk6IFR1bm5lbCBGYWlsZWQ="),{status:502});
}
};
