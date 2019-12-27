// Generated by CoffeeScript 1.8.0
(function(){var e,t,n;n={},e="https://mandrillapp.com/api/1.0/",t={1:"OPENED",2:"HEADERS_RECEIVED",3:"LOADING",4:"DONE"},n.Mandrill=function(){function r(e,t){this.apikey=e,this.debug=t!=null?t:!1,this.templates=new n.Templates(this),this.exports=new n.Exports(this),this.users=new n.Users(this),this.rejects=new n.Rejects(this),this.inbound=new n.Inbound(this),this.tags=new n.Tags(this),this.messages=new n.Messages(this),this.whitelists=new n.Whitelists(this),this.ips=new n.Ips(this),this.internal=new n.Internal(this),this.subaccounts=new n.Subaccounts(this),this.urls=new n.Urls(this),this.webhooks=new n.Webhooks(this),this.senders=new n.Senders(this),this.metadata=new n.Metadata(this)}return r.prototype.call=function(n,r,i,s){var o;return r==null&&(r={}),r.key=this.apikey,r=JSON.stringify(r),o=new XMLHttpRequest,o.open("POST",""+e+n+".json"),o.setRequestHeader("Content-Type","application/json"),this.debug&&console.log("Mandrill: Opening request to "+e+n+".json"),o.onreadystatechange=function(e){return function(){var n;e.debug&&console.log("Mandrill: Request state "+t[o.readyState]);if(o.readyState!==4)return;n=JSON.parse(o.responseText),n==null&&(n={status:"error",name:"GeneralError",message:"An unexpected error occurred"});if(o.status!==200)return s?s(n):e.onerror(n);if(i)return i(n)}}(this),o.send(r)},r.prototype.onerror=function(e){throw{name:e.name,message:e.message,toString:function(){return""+e.name+": "+e.message}}},r}(),n.Templates=function(){function e(e){this.master=e}return e.prototype.add=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),e["from_email"]==null&&(e.from_email=null),e["from_name"]==null&&(e.from_name=null),e["subject"]==null&&(e.subject=null),e["code"]==null&&(e.code=null),e["text"]==null&&(e.text=null),e["publish"]==null&&(e.publish=!0),e["labels"]==null&&(e.labels=[]),this.master.call("templates/add",e,t,n)},e.prototype.info=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),this.master.call("templates/info",e,t,n)},e.prototype.update=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),e["from_email"]==null&&(e.from_email=null),e["from_name"]==null&&(e.from_name=null),e["subject"]==null&&(e.subject=null),e["code"]==null&&(e.code=null),e["text"]==null&&(e.text=null),e["publish"]==null&&(e.publish=!0),e["labels"]==null&&(e.labels=null),this.master.call("templates/update",e,t,n)},e.prototype.publish=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),this.master.call("templates/publish",e,t,n)},e.prototype["delete"]=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),this.master.call("templates/delete",e,t,n)},e.prototype.list=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),e["label"]==null&&(e.label=null),this.master.call("templates/list",e,t,n)},e.prototype.timeSeries=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),this.master.call("templates/time-series",e,t,n)},e.prototype.render=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),e["merge_vars"]==null&&(e.merge_vars=null),this.master.call("templates/render",e,t,n)},e}(),n.Exports=function(){function e(e){this.master=e}return e.prototype.info=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),this.master.call("exports/info",e,t,n)},e.prototype.list=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),this.master.call("exports/list",e,t,n)},e.prototype.rejects=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),e["notify_email"]==null&&(e.notify_email=null),this.master.call("exports/rejects",e,t,n)},e.prototype.whitelist=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),e["notify_email"]==null&&(e.notify_email=null),this.master.call("exports/whitelist",e,t,n)},e.prototype.activity=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),e["notify_email"]==null&&(e.notify_email=null),e["date_from"]==null&&(e.date_from=null),e["date_to"]==null&&(e.date_to=null),e["tags"]==null&&(e.tags=null),e["senders"]==null&&(e.senders=null),e["states"]==null&&(e.states=null),e["api_keys"]==null&&(e.api_keys=null),this.master.call("exports/activity",e,t,n)},e}(),n.Users=function(){function e(e){this.master=e}return e.prototype.info=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),this.master.call("users/info",e,t,n)},e.prototype.ping=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),this.master.call("users/ping",e,t,n)},e.prototype.ping2=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),this.master.call("users/ping2",e,t,n)},e.prototype.senders=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),this.master.call("users/senders",e,t,n)},e}(),n.Rejects=function(){function e(e){this.master=e}return e.prototype.add=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),e["comment"]==null&&(e.comment=null),e["subaccount"]==null&&(e.subaccount=null),this.master.call("rejects/add",e,t,n)},e.prototype.list=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),e["email"]==null&&(e.email=null),e["include_expired"]==null&&(e.include_expired=!1),e["subaccount"]==null&&(e.subaccount=null),this.master.call("rejects/list",e,t,n)},e.prototype["delete"]=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),e["subaccount"]==null&&(e.subaccount=null),this.master.call("rejects/delete",e,t,n)},e}(),n.Inbound=function(){function e(e){this.master=e}return e.prototype.domains=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),this.master.call("inbound/domains",e,t,n)},e.prototype.addDomain=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),this.master.call("inbound/add-domain",e,t,n)},e.prototype.checkDomain=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),this.master.call("inbound/check-domain",e,t,n)},e.prototype.deleteDomain=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),this.master.call("inbound/delete-domain",e,t,n)},e.prototype.routes=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),this.master.call("inbound/routes",e,t,n)},e.prototype.addRoute=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),this.master.call("inbound/add-route",e,t,n)},e.prototype.updateRoute=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),e["pattern"]==null&&(e.pattern=null),e["url"]==null&&(e.url=null),this.master.call("inbound/update-route",e,t,n)},e.prototype.deleteRoute=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),this.master.call("inbound/delete-route",e,t,n)},e.prototype.sendRaw=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),e["to"]==null&&(e.to=null),e["mail_from"]==null&&(e.mail_from=null),e["helo"]==null&&(e.helo=null),e["client_address"]==null&&(e.client_address=null),this.master.call("inbound/send-raw",e,t,n)},e}(),n.Tags=function(){function e(e){this.master=e}return e.prototype.list=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),this.master.call("tags/list",e,t,n)},e.prototype["delete"]=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),this.master.call("tags/delete",e,t,n)},e.prototype.info=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),this.master.call("tags/info",e,t,n)},e.prototype.timeSeries=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),this.master.call("tags/time-series",e,t,n)},e.prototype.allTimeSeries=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),this.master.call("tags/all-time-series",e,t,n)},e}(),n.Messages=function(){function e(e){this.master=e}return e.prototype.send=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),e["async"]==null&&(e.async=!1),e["ip_pool"]==null&&(e.ip_pool=null),e["send_at"]==null&&(e.send_at=null),this.master.call("messages/send",e,t,n)},e.prototype.sendTemplate=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),e["async"]==null&&(e.async=!1),e["ip_pool"]==null&&(e.ip_pool=null),e["send_at"]==null&&(e.send_at=null),this.master.call("messages/send-template",e,t,n)},e.prototype.search=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),e["query"]==null&&(e.query="*"),e["date_from"]==null&&(e.date_from=null),e["date_to"]==null&&(e.date_to=null),e["tags"]==null&&(e.tags=null),e["senders"]==null&&(e.senders=null),e["api_keys"]==null&&(e.api_keys=null),e["limit"]==null&&(e.limit=100),this.master.call("messages/search",e,t,n)},e.prototype.searchTimeSeries=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),e["query"]==null&&(e.query="*"),e["date_from"]==null&&(e.date_from=null),e["date_to"]==null&&(e.date_to=null),e["tags"]==null&&(e.tags=null),e["senders"]==null&&(e.senders=null),this.master.call("messages/search-time-series",e,t,n)},e.prototype.info=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),this.master.call("messages/info",e,t,n)},e.prototype.content=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),this.master.call("messages/content",e,t,n)},e.prototype.parse=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),this.master.call("messages/parse",e,t,n)},e.prototype.sendRaw=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),e["from_email"]==null&&(e.from_email=null),e["from_name"]==null&&(e.from_name=null),e["to"]==null&&(e.to=null),e["async"]==null&&(e.async=!1),e["ip_pool"]==null&&(e.ip_pool=null),e["send_at"]==null&&(e.send_at=null),e["return_path_domain"]==null&&(e.return_path_domain=null),this.master.call("messages/send-raw",e,t,n)},e.prototype.listScheduled=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),e["to"]==null&&(e.to=null),this.master.call("messages/list-scheduled",e,t,n)},e.prototype.cancelScheduled=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),this.master.call("messages/cancel-scheduled",e,t,n)},e.prototype.reschedule=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),this.master.call("messages/reschedule",e,t,n)},e}(),n.Whitelists=function(){function e(e){this.master=e}return e.prototype.add=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),e["comment"]==null&&(e.comment=null),this.master.call("whitelists/add",e,t,n)},e.prototype.list=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),e["email"]==null&&(e.email=null),this.master.call("whitelists/list",e,t,n)},e.prototype["delete"]=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),this.master.call("whitelists/delete",e,t,n)},e}(),n.Ips=function(){function e(e){this.master=e}return e.prototype.list=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),this.master.call("ips/list",e,t,n)},e.prototype.info=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),this.master.call("ips/info",e,t,n)},e.prototype.provision=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),e["warmup"]==null&&(e.warmup=!1),e["pool"]==null&&(e.pool=null),this.master.call("ips/provision",e,t,n)},e.prototype.startWarmup=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),this.master.call("ips/start-warmup",e,t,n)},e.prototype.cancelWarmup=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),this.master.call("ips/cancel-warmup",e,t,n)},e.prototype.setPool=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),e["create_pool"]==null&&(e.create_pool=!1),this.master.call("ips/set-pool",e,t,n)},e.prototype["delete"]=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),this.master.call("ips/delete",e,t,n)},e.prototype.listPools=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),this.master.call("ips/list-pools",e,t,n)},e.prototype.poolInfo=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),this.master.call("ips/pool-info",e,t,n)},e.prototype.createPool=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),this.master.call("ips/create-pool",e,t,n)},e.prototype.deletePool=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),this.master.call("ips/delete-pool",e,t,n)},e.prototype.checkCustomDns=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),this.master.call("ips/check-custom-dns",e,t,n)},e.prototype.setCustomDns=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),this.master.call("ips/set-custom-dns",e,t,n)},e}(),n.Internal=function(){function e(e){this.master=e}return e}(),n.Subaccounts=function(){function e(e){this.master=e}return e.prototype.list=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),e["q"]==null&&(e.q=null),this.master.call("subaccounts/list",e,t,n)},e.prototype.add=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),e["name"]==null&&(e.name=null),e["notes"]==null&&(e.notes=null),e["custom_quota"]==null&&(e.custom_quota=null),this.master.call("subaccounts/add",e,t,n)},e.prototype.info=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),this.master.call("subaccounts/info",e,t,n)},e.prototype.update=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),e["name"]==null&&(e.name=null),e["notes"]==null&&(e.notes=null),e["custom_quota"]==null&&(e.custom_quota=null),this.master.call("subaccounts/update",e,t,n)},e.prototype["delete"]=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),this.master.call("subaccounts/delete",e,t,n)},e.prototype.pause=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),this.master.call("subaccounts/pause",e,t,n)},e.prototype.resume=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),this.master.call("subaccounts/resume",e,t,n)},e}(),n.Urls=function(){function e(e){this.master=e}return e.prototype.list=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),this.master.call("urls/list",e,t,n)},e.prototype.search=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),this.master.call("urls/search",e,t,n)},e.prototype.timeSeries=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),this.master.call("urls/time-series",e,t,n)},e.prototype.trackingDomains=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),this.master.call("urls/tracking-domains",e,t,n)},e.prototype.addTrackingDomain=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),this.master.call("urls/add-tracking-domain",e,t,n)},e.prototype.checkTrackingDomain=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),this.master.call("urls/check-tracking-domain",e,t,n)},e}(),n.Webhooks=function(){function e(e){this.master=e}return e.prototype.list=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),this.master.call("webhooks/list",e,t,n)},e.prototype.add=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),e["description"]==null&&(e.description=null),e["events"]==null&&(e.events=[]),this.master.call("webhooks/add",e,t,n)},e.prototype.info=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),this.master.call("webhooks/info",e,t,n)},e.prototype.update=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),e["description"]==null&&(e.description=null),e["events"]==null&&(e.events=[]),this.master.call("webhooks/update",e,t,n)},e.prototype["delete"]=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),this.master.call("webhooks/delete",e,t,n)},e}(),n.Senders=function(){function e(e){this.master=e}return e.prototype.list=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),this.master.call("senders/list",e,t,n)},e.prototype.domains=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),this.master.call("senders/domains",e,t,n)},e.prototype.addDomain=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),this.master.call("senders/add-domain",e,t,n)},e.prototype.checkDomain=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),this.master.call("senders/check-domain",e,t,n)},e.prototype.verifyDomain=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),this.master.call("senders/verify-domain",e,t,n)},e.prototype.info=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),this.master.call("senders/info",e,t,n)},e.prototype.timeSeries=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),this.master.call("senders/time-series",e,t,n)},e}(),n.Metadata=function(){function e(e){this.master=e}return e.prototype.list=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),this.master.call("metadata/list",e,t,n)},e.prototype.add=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),e["view_template"]==null&&(e.view_template=null),this.master.call("metadata/add",e,t,n)},e.prototype.update=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),this.master.call("metadata/update",e,t,n)},e.prototype["delete"]=function(e,t,n){return e==null&&(e={}),typeof e=="function"&&(n=t,t=e,e={}),this.master.call("metadata/delete",e,t,n)},e}(),(typeof exports!="undefined"&&exports!==null?exports:this).mandrill=n}).call(this);var JSON;JSON||(JSON={}),function(){"use strict";function f(e){return e<10?"0"+e:e}function quote(e){return escapable.lastIndex=0,escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e];return typeof t=="string"?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var n,r,i,s,o=gap,u,a=t[e];a&&typeof a=="object"&&typeof a.toJSON=="function"&&(a=a.toJSON(e)),typeof rep=="function"&&(a=rep.call(t,e,a));switch(typeof a){case"string":return quote(a);case"number":return isFinite(a)?String(a):"null";case"boolean":case"null":return String(a);case"object":if(!a)return"null";gap+=indent,u=[];if(Object.prototype.toString.apply(a)==="[object Array]"){s=a.length;for(n=0;n<s;n+=1)u[n]=str(n,a)||"null";return i=u.length===0?"[]":gap?"[\n"+gap+u.join(",\n"+gap)+"\n"+o+"]":"["+u.join(",")+"]",gap=o,i}if(rep&&typeof rep=="object"){s=rep.length;for(n=0;n<s;n+=1)typeof rep[n]=="string"&&(r=rep[n],i=str(r,a),i&&u.push(quote(r)+(gap?": ":":")+i))}else for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(i=str(r,a),i&&u.push(quote(r)+(gap?": ":":")+i));return i=u.length===0?"{}":gap?"{\n"+gap+u.join(",\n"+gap)+"\n"+o+"}":"{"+u.join(",")+"}",gap=o,i}}typeof Date.prototype.toJSON!="function"&&(Date.prototype.toJSON=function(e){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(e){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;typeof JSON.stringify!="function"&&(JSON.stringify=function(e,t,n){var r;gap="",indent="";if(typeof n=="number")for(r=0;r<n;r+=1)indent+=" ";else typeof n=="string"&&(indent=n);rep=t;if(!t||typeof t=="function"||typeof t=="object"&&typeof t.length=="number")return str("",{"":e});throw new Error("JSON.stringify")}),typeof JSON.parse!="function"&&(JSON.parse=function(text,reviver){function walk(e,t){var n,r,i=e[t];if(i&&typeof i=="object")for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(r=walk(i,n),r!==undefined?i[n]=r:delete i[n]);return reviver.call(e,t,i)}var j;text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),typeof reviver=="function"?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}();
