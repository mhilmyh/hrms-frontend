(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{574:function(t,e,n){var content=n(577);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("6f1246a0",content,!0,{sourceMap:!1})},576:function(t,e,n){"use strict";n(574)},577:function(t,e,n){(e=n(17)(!1)).push([t.i,".alert-container[data-v-b250588e]{width:100%}",""]),t.exports=e},578:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{alert:!!this.$store.state.alert.message}},watch:{alert:function(t){!1===t&&this.$store.dispatch("alert/hide")},"$store.state.alert.message":function(t){this.alert=!!t}}},o=(n(576),n(44)),l=n(45),c=n.n(l),v=n(645),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-alert",{staticClass:"alert-container",attrs:{dense:"",dismissible:"",outlined:"",text:"",type:t.$store.state.alert.type},model:{value:t.alert,callback:function(e){t.alert=e},expression:"alert"}},[t._v("\n  "+t._s(t.$store.state.alert.message)+"\n")])}),[],!1,null,"b250588e",null);e.default=component.exports;c()(component,{VAlert:v.a})},579:function(t,e,n){"use strict";n.r(e);var r={props:{skeleton:Boolean,loading:Boolean,value:Boolean,src:String},data:function(){return{dialog:!1}},watch:{value:function(t){this.dialog=t},dialog:function(t){this.$emit("input",t)}}},o=n(44),l=n(45),c=n.n(l),v=n(208),d=n(553),m=n(552),h=n(563),f=n(628),_=n(190),k=n(194),x=n(568),y=n(572),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{persistent:"","max-width":"1000px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"teal lighten-1 white--text"},[n("span",{staticClass:"body-1"},[t._t("title")],2),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){e.stopPropagation(),t.dialog=!1}}},[n("v-icon",[t._v("mdi-close")])],1)],1),t._v(" "),n("v-container",[n("alert-container")],1),t._v(" "),t.skeleton?n("v-skeleton-loader",{attrs:{type:"article, list-item-three-line, list-item-three-line, actions"}}):n("v-container",{attrs:{fluid:""}},[t._t("default"),t._v(" "),t.loading?n("v-progress-linear",{attrs:{indeterminate:"",color:"teal"}}):t._e()],2),t._v(" "),n("v-card-actions",[t._t("actions")],2)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{AlertContainer:n(578).default}),c()(component,{VBtn:v.a,VCard:d.a,VCardActions:m.a,VCardTitle:m.d,VContainer:h.a,VDialog:f.a,VIcon:_.a,VProgressLinear:k.a,VSkeletonLoader:x.a,VSpacer:y.a})},584:function(t,e,n){"use strict";n.r(e);var r={props:{value:String,hint:String,placeholder:String,name:String,icon:String},data:function(){return{modal:!1,time:null}},watch:{value:function(t){this.time=t},time:function(t){this.$emit("input",t)}}},o=n(44),l=n(45),c=n.n(l),v=n(208),d=n(628),m=n(572),h=n(689),f=n(711),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{ref:"dialog",attrs:{"return-value":t.time,persistent:"",width:"290px"},on:{"update:returnValue":function(e){t.time=e},"update:return-value":function(e){t.time=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-text-field",t._g(t._b({attrs:{dense:"",outlined:"",clearable:"",name:t.name,placeholder:t.placeholder,"persistent-hint":"",hint:t.hint,"prepend-inner-icon":t.icon,readonly:""},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}},"v-text-field",o,!1),r))]}}]),model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[t._v(" "),t.modal?n("v-time-picker",{attrs:{"full-width":"",format:"24hr"},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}},[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.modal=!1}}},[t._v("cancel")]),t._v(" "),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.dialog.save(t.time)}}},[t._v("ok")])],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:v.a,VDialog:d.a,VSpacer:m.a,VTextField:h.a,VTimePicker:f.a})},587:function(t,e,n){var content=n(591);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("222f419b",content,!0,{sourceMap:!1})},590:function(t,e,n){"use strict";n(587)},591:function(t,e,n){(e=n(17)(!1)).push([t.i,".fab-button[data-v-7567a084]{position:fixed;bottom:0;right:0}",""]),t.exports=e},609:function(t,e,n){var content=n(610);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("5939d713",content,!0,{sourceMap:!1})},610:function(t,e,n){(e=n(17)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]),e.push([t.i,".v-rating{max-width:100%;white-space:nowrap}.v-rating .v-icon{padding:.5rem;border-radius:50%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none}.v-rating .v-icon:after{display:none}.v-application--is-ltr .v-rating .v-icon{transform:scaleX(1)}.v-application--is-rtl .v-rating .v-icon{transform:scaleX(-1)}.v-rating--readonly .v-icon{pointer-events:none}.v-rating--dense .v-icon{padding:.1rem}",""]),t.exports=e},612:function(t,e,n){"use strict";n.r(e);var r={props:{onClick:Function}},o=(n(590),n(44)),l=n(45),c=n.n(l),v=n(208),d=n(190),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn",{staticClass:"ma-8 fab-button",attrs:{large:"",fab:"",dark:"",color:"teal"},on:{click:function(e){return e.stopPropagation(),t.onClick(e)}}},[n("v-icon",{attrs:{dark:""}},[t._v(" mdi-plus ")])],1)}),[],!1,null,"7567a084",null);e.default=component.exports;c()(component,{VBtn:v.a,VIcon:d.a})},614:function(t,e,n){"use strict";n.r(e);n(25),n(38);var r=n(71),o={props:{title:{type:String,default:"Office"},value:{type:Array,default:function(){return[{desc:"",start_time:"",stop_time:""}]}},show:Boolean},data:function(){return{dialog:!1,activities:this.$props.value}},computed:{loading:function(){return this.$store.state.loading.department},users:function(){return this.$store.state.user.all},offices:function(){return this.$store.state.company.offices}},watch:{activities:{handler:function(t){console.log(t),this.$emit("input",t)},deep:!0},dialog:function(t){this.$emit("show",t)},show:function(t){this.dialog=t}},methods:{push:function(){this.activities.length<20&&(this.activities=[].concat(Object(r.a)(this.activities),[this.$helper.initActivity()]))},pop:function(){this.activities=this.activities.slice(1,-1)}}},l=n(44),c=n(45),v=n.n(c),d=n(208),m=n(565),h=n(555),f=n(566),_=n(689),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("base-modal",{attrs:{loading:t.loading},scopedSlots:t._u([{key:"title",fn:function(){return[t._v(t._s(t.title))]},proxy:!0},{key:"actions",fn:function(){return[t._t("default")]},proxy:!0}],null,!0),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),[t._l(t.activities,(function(e,r){return[n("v-row",{key:r+"-row"},[n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{dense:"",outlined:"",clearable:"",name:"desc_"+r,prefix:"Activity "+(r+1)+". ",placeholder:"Description","persistent-hint":"",hint:"The description of activity","prepend-inner-icon":"mdi-card-text-outline"},model:{value:t.activities[r].desc,callback:function(e){t.$set(t.activities[r],"desc",e)},expression:"activities[index].desc"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6"}},[n("time-picker",{attrs:{name:"start_time_"+r,placeholder:"Start Time",hint:"The time you start doing",icon:"mdi-progress-clock"},model:{value:t.activities[r].start_time,callback:function(e){t.$set(t.activities[r],"start_time",e)},expression:"activities[index].start_time"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6"}},[n("time-picker",{attrs:{name:"stop_time_"+r,placeholder:"Stop Time",hint:"The time you finish",icon:"mdi-clock-check-outline"},model:{value:t.activities[r].stop_time,callback:function(e){t.$set(t.activities[r],"stop_time",e)},expression:"activities[index].stop_time"}})],1)],1),t._v(" "),n("v-divider",{key:r+"-div"})]})),t._v(" "),n("v-row",[n("v-col",{attrs:{cols:"6"}},[n("v-btn",{attrs:{block:"",dark:"",small:"",outlined:"",color:"green"},on:{click:function(e){return e.stopPropagation(),t.push()}}},[t._v("\n            add\n          ")])],1),t._v(" "),n("v-col",{attrs:{cols:"6"}},[n("v-btn",{attrs:{block:"",dark:"",small:"",outlined:"",color:"error"},on:{click:function(e){return e.stopPropagation(),t.pop()}}},[t._v("\n            remove\n          ")])],1)],1)]],2)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{TimePicker:n(584).default,BaseModal:n(579).default}),v()(component,{VBtn:d.a,VCol:m.a,VDivider:h.a,VRow:f.a,VTextField:_.a})},668:function(t,e,n){"use strict";n(67),n(24),n(211),n(609);var r=n(75),o=n(33),l=n(151),c=n(128),v=n(589),d=n(22),m=n(1),h=n(6);e.a=Object(h.a)(o.a,l.a,v.a,c.a,d.a).extend({name:"v-rating",props:{backgroundColor:{type:String,default:"accent"},color:{type:String,default:"primary"},clearable:Boolean,dense:Boolean,emptyIcon:{type:String,default:"$ratingEmpty"},fullIcon:{type:String,default:"$ratingFull"},halfIcon:{type:String,default:"$ratingHalf"},halfIncrements:Boolean,hover:Boolean,length:{type:[Number,String],default:5},readonly:Boolean,size:[Number,String],value:{type:Number,default:0}},data:function(){return{hoverIndex:-1,internalValue:this.value}},computed:{directives:function(){return this.readonly||!this.ripple?[]:[{name:"ripple",value:{circle:!0}}]},iconProps:function(){var t=this.$props,e=t.dark,n=t.large,r=t.light,o=t.medium,small=t.small;return{dark:e,large:n,light:r,medium:o,size:t.size,small:small,xLarge:t.xLarge,xSmall:t.xSmall}},isHovering:function(){return this.hover&&this.hoverIndex>=0}},watch:{internalValue:function(t){t!==this.value&&this.$emit("input",t)},value:function(t){this.internalValue=t}},methods:{createClickFn:function(i){var t=this;return function(e){if(!t.readonly){var n=t.genHoverIndex(e,i);t.clearable&&t.internalValue===n?t.internalValue=0:t.internalValue=n}}},createProps:function(i){var t={index:i,value:this.internalValue,click:this.createClickFn(i),isFilled:Math.floor(this.internalValue)>i,isHovered:Math.floor(this.hoverIndex)>i};return this.halfIncrements&&(t.isHalfHovered=!t.isHovered&&(this.hoverIndex-i)%1>0,t.isHalfFilled=!t.isFilled&&(this.internalValue-i)%1>0),t},genHoverIndex:function(t,i){var e=this.isHalfEvent(t);return this.halfIncrements&&this.$vuetify.rtl&&(e=!e),i+(e?.5:1)},getIconName:function(t){var e=this.isHovering?t.isHovered:t.isFilled,n=this.isHovering?t.isHalfHovered:t.isHalfFilled;return e?this.fullIcon:n?this.halfIcon:this.emptyIcon},getColor:function(t){if(this.isHovering){if(t.isHovered||t.isHalfHovered)return this.color}else if(t.isFilled||t.isHalfFilled)return this.color;return this.backgroundColor},isHalfEvent:function(t){if(this.halfIncrements){var rect=t.target&&t.target.getBoundingClientRect();if(rect&&t.pageX-rect.left<rect.width/2)return!0}return!1},onMouseEnter:function(t,i){var e=this;this.runDelay("open",(function(){e.hoverIndex=e.genHoverIndex(t,i)}))},onMouseLeave:function(){var t=this;this.runDelay("close",(function(){return t.hoverIndex=-1}))},genItem:function(i){var t=this,e=this.createProps(i);if(this.$scopedSlots.item)return this.$scopedSlots.item(e);var n={click:e.click};return this.hover&&(n.mouseenter=function(e){return t.onMouseEnter(e,i)},n.mouseleave=this.onMouseLeave,this.halfIncrements&&(n.mousemove=function(e){return t.onMouseEnter(e,i)})),this.$createElement(r.a,this.setTextColor(this.getColor(e),{attrs:{tabindex:-1},directives:this.directives,props:this.iconProps,on:n}),[this.getIconName(e)])}},render:function(t){var e=this,n=Object(m.h)(Number(this.length)).map((function(i){return e.genItem(i)}));return t("div",{staticClass:"v-rating",class:{"v-rating--readonly":this.readonly,"v-rating--dense":this.dense}},n)}})},688:function(t,e,n){"use strict";n.r(e);n(46);var r=n(5),o={props:{timesheet:Object},methods:{onApprove:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(t),n.next=3,e.$store.dispatch("timesheet/approve",t);case 3:case"end":return n.stop()}}),n)})))()}}},l=n(44),c=n(45),v=n.n(c),d=n(208),m=n(553),h=n(552),f=n(606),_=n(565),k=n(563),x=n(555),y=n(668),V=n(566),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"my-2",attrs:{flat:""}},[n("v-card-title",[t._v("\n    "+t._s(t.timesheet.user.employee.full_name)+"\n  ")]),t._v(" "),n("v-card-subtitle",[t._v("\n    "+t._s(t.$helper.when(t.timesheet.created_at))+"\n  ")]),t._v(" "),n("v-container",[n("v-chip",{staticClass:"mr-2 caption",attrs:{color:t.timesheet.is_approved?"success":"error",small:""}},[t._v("\n      "+t._s(t.timesheet.is_approved?"Approved":"Not Approved")+"\n    ")]),t._v(" "),n("v-chip",{attrs:{dark:"",outlined:"",color:t.timesheet.user.is_login?"green":"grey",small:""}},[n("b",[t._v(t._s(t.timesheet.user.is_login?"Online":"Offlince"))])])],1),t._v(" "),n("v-container",{staticClass:"pa-0 d-flex justify-center"},[n("v-rating",{attrs:{"background-color":"grey",color:"warning",hover:"",length:"10",dense:"",small:"",readonly:"",value:t.timesheet.user.employee.rating}})],1),t._v(" "),n("v-card-text",[n("v-container",{staticClass:"pa-0"},[n("v-row",[n("v-col",[n("b",[t._v("Job Position")])]),t._v(" "),n("v-col",[n("span",[t._v(t._s(t.timesheet.user.employee.job_position))])])],1),t._v(" "),n("v-row",[n("v-col",[n("b",[t._v("Phone")])]),t._v(" "),n("v-col",[n("span",[t._v(t._s(t.timesheet.user.employee.phone))])])],1)],1),t._v(" "),n("v-container",{staticClass:"overflow-y-auto",staticStyle:{"max-height":"256px"}},t._l(t.timesheet.activities,(function(e,r){return n("v-row",{key:r},[n("v-col",{attrs:{cols:"4"}},[t._v(" "+t._s(e.desc)+" ")]),t._v(" "),n("v-col",{attrs:{cols:"4"}},[t._v(" "+t._s(e.start_time)+" ")]),t._v(" "),n("v-col",{attrs:{cols:"4"}},[t._v(" "+t._s(e.stop_time)+" ")]),t._v(" "),n("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"12"}},[n("v-divider")],1)],1)})),1)],1),t._v(" "),n("v-card-actions",[t.timesheet.is_approved?t._e():n("v-btn",{attrs:{block:"",color:"teal",small:"",dark:""},on:{click:function(e){return e.stopPropagation(),t.onApprove(t.timesheet.id)}}},[t._v("\n      approve\n    ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VBtn:d.a,VCard:m.a,VCardActions:h.a,VCardSubtitle:h.b,VCardText:h.c,VCardTitle:h.d,VChip:f.a,VCol:_.a,VContainer:k.a,VDivider:x.a,VRating:y.a,VRow:V.a})},708:function(t,e,n){"use strict";n.r(e);n(46);var r=n(5),o={data:function(){return{tabs:0,modal:!1,activities:[{desc:"",start_time:"",stop_time:""}],headers:[{text:"Employee",value:"user.employee.full_name"},{text:"Approved",value:"is_approved"},{text:"Created",value:"created_at"},{text:"Actions",value:"actions",sortable:!1}]}},computed:{is_admin:function(){return this.$auth.user.is_admin},timesheets:function(){return this.$store.state.timesheet.all},today_timesheets:function(){return this.$store.state.timesheet.today}},mounted:function(){this.$store.dispatch("timesheet/index")},methods:{onClick:function(){this.modal=!0},onSubmit:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("timesheet/create",t.activities);case 2:case"end":return e.stop()}}),e)})))()},onDelete:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.$store.dispatch("timesheet/delete",t);case 2:case"end":return n.stop()}}),n)})))()}},head:function(){return{title:"Timesheet"}}},l=n(44),c=n(45),v=n.n(c),d=n(208),m=n(553),h=n(606),f=n(565),_=n(563),k=n(699),x=n(190),y=n(566),V=n(694),w=n(712),C=n(710),$=n(690),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-card",{attrs:{flat:""}},[n("v-tabs",{attrs:{"background-color":"teal",color:"white","center-active":""},model:{value:t.tabs,callback:function(e){t.tabs=e},expression:"tabs"}},[n("v-tab",{key:"today"},[t._v(" today ")]),t._v(" "),n("v-tab",{key:"hisotries"},[t._v(" hisotries ")])],1)],1),t._v(" "),n("v-tabs-items",{staticClass:"mt-8",model:{value:t.tabs,callback:function(e){t.tabs=e},expression:"tabs"}},[n("v-tab-item",t._l(t.today_timesheets,(function(t,e){return n("v-row",{key:e},[n("v-col",{attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[n("timesheet-container",{attrs:{timesheet:t}})],1)],1)})),1),t._v(" "),n("v-tab-item",[n("v-data-table",{attrs:{headers:t.headers,items:t.timesheets,"items-per-page":5},scopedSlots:t._u([{key:"item.is_approved",fn:function(e){var r=e.item;return[n("v-chip",{attrs:{color:r.is_approved?"success":"error"}},[t._v("\n            "+t._s(r.is_approved?"Done":"Not Yet")+"\n          ")])]}},{key:"item.created_at",fn:function(e){var n=e.item;return[t._v("\n          "+t._s(t.$helper.when(n.created_at))+"\n        ")]}},t.is_admin?{key:"item.actions",fn:function(e){var r=e.item;return[n("v-btn",{staticClass:"ma-1",attrs:{color:"error",small:"",icon:"",outlined:""},on:{click:function(e){return e.stopPropagation(),t.onDelete(r.id)}}},[n("v-icon",{attrs:{small:""}},[t._v("mdi-delete")])],1)]}}:null],null,!0)})],1)],1),t._v(" "),n("timesheet-modal",{attrs:{title:"Daily Timesheet",show:t.modal},on:{show:function(e){t.modal=e}},model:{value:t.activities,callback:function(e){t.activities=e},expression:"activities"}},[n("v-btn",{attrs:{block:"",color:"teal",dark:""},on:{click:function(e){return e.stopPropagation(),t.onSubmit()}}},[t._v(" sumbit ")])],1),t._v(" "),n("fab-button",{attrs:{onClick:t.onClick}})],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{TimesheetContainer:n(688).default,TimesheetModal:n(614).default,FabButton:n(612).default}),v()(component,{VBtn:d.a,VCard:m.a,VChip:h.a,VCol:f.a,VContainer:_.a,VDataTable:k.a,VIcon:x.a,VRow:y.a,VTab:V.a,VTabItem:w.a,VTabs:C.a,VTabsItems:$.a})}}]);