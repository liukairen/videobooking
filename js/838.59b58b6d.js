"use strict";(self["webpackChunkvue_3_crud"]=self["webpackChunkvue_3_crud"]||[]).push([[838],{6838:function(t,e,l){l.r(e),l.d(e,{default:function(){return m}});var r=l(3396),i=l(9242),s=l(7139);const o={class:"list row"},c={class:"col-md-8"},a={class:"input-group mb-3"},n={class:"input-group-append"},u={class:"col-md-9"},d=(0,r._)("h4",null,"Check List",-1),h={class:"table table-bordered"},_=(0,r._)("thead",null,[(0,r._)("tr",null,[(0,r._)("th",{scope:"col"},"Site ID"),(0,r._)("th",{scope:"col"},"Acc Date"),(0,r._)("th",{scope:"col"},"Acc Time")])],-1);function p(t,e,l,p,v,T){return(0,r.wg)(),(0,r.iD)("div",o,[(0,r._)("div",c,[(0,r._)("div",a,[(0,r.wy)((0,r._)("input",{type:"text",class:"form-control",placeholder:"Search by title","onUpdate:modelValue":e[0]||(e[0]=t=>v.title=t)},null,512),[[i.nr,v.title]]),(0,r._)("div",n,[(0,r._)("button",{class:"btn btn-outline-secondary",type:"button",onClick:e[1]||(e[1]=(...t)=>T.searchTitle&&T.searchTitle(...t))}," Search ")])])]),(0,r._)("div",u,[d,(0,r._)("table",h,[_,(0,r._)("tbody",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(v.tutorials,(t=>((0,r.wg)(),(0,r.iD)("tr",{key:t.title},[(0,r._)("td",null,(0,s.zw)(t.title),1),(0,r._)("td",null,(0,s.zw)(t.accdate),1),(0,r._)("td",null,(0,s.zw)(t.acctime),1)])))),128))])])])])}var v=l(6150),T={name:"tutorials-list",data(){return{tutorials:[],currentTutorial:null,currentIndex:-1,title:""}},methods:{retrieveTutorials(){v.Z.getAll().then((t=>{this.tutorials=t.data,console.log(t.data)})).catch((t=>{console.log(t)}))},refreshList(){this.retrieveTutorials(),this.currentTutorial=null,this.currentIndex=-1},setActiveTutorial(t,e){this.currentTutorial=t,this.currentIndex=t?e:-1},removeAllTutorials(){v.Z.deleteAll().then((t=>{console.log(t.data),this.refreshList()})).catch((t=>{console.log(t)}))},searchTitle(){v.Z.findByTitle(this.title).then((t=>{this.tutorials=t.data,this.setActiveTutorial(null),console.log(t.data)})).catch((t=>{console.log(t)}))}},mounted(){this.retrieveTutorials()}},b=l(89);const g=(0,b.Z)(T,[["render",p]]);var m=g}}]);
//# sourceMappingURL=838.59b58b6d.js.map