(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{651:function(t,e,n){var content=n(653);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("222f419b",content,!0,{sourceMap:!1})},652:function(t,e,n){"use strict";n(651)},653:function(t,e,n){(e=n(16)(!1)).push([t.i,".fab-button[data-v-7567a084]{position:fixed;bottom:0;right:0}",""]),t.exports=e},654:function(t,e,n){"use strict";n.r(e);var o={props:{onClick:Function}},r=(n(652),n(29)),l=n(26),c=n.n(l),d=n(142),f=n(172),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn",{staticClass:"ma-8 fab-button",attrs:{large:"",fab:"",dark:"",color:"teal"},on:{click:function(e){return e.stopPropagation(),t.onClick(e)}}},[n("v-icon",{attrs:{dark:""}},[t._v(" mdi-plus ")])],1)}),[],!1,null,"7567a084",null);e.default=component.exports;c()(component,{VBtn:d.a,VIcon:f.a})},655:function(t,e,n){"use strict";n.r(e);var o={props:{value:String,hint:String,placeholder:String,name:String,icon:String},data:function(){return{modal:!1,time:null}},watch:{value:function(t){this.time=t},time:function(t){this.$emit("input",t)}}},r=n(29),l=n(26),c=n.n(l),d=n(142),f=n(639),h=n(641),m=n(79),v=n(710),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{ref:"dialog",attrs:{"return-value":t.time,persistent:"",width:"300px",transition:"scroll-y-transition"},on:{"update:returnValue":function(e){t.time=e},"update:return-value":function(e){t.time=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[n("v-text-field",t._g(t._b({attrs:{dense:"",outlined:"",clearable:"",name:t.name,placeholder:t.value?t.value:t.placeholder,"persistent-hint":"",hint:t.hint,"prepend-inner-icon":t.icon,readonly:""},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}},"v-text-field",r,!1),o))]}}]),model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[t._v(" "),t.modal?n("v-time-picker",{attrs:{"full-width":"",format:"24hr"},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}},[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.modal=!1}}},[t._v("cancel")]),t._v(" "),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.dialog.save(t.time)}}},[t._v("ok")])],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VDialog:f.a,VSpacer:h.a,VTextField:m.a,VTimePicker:v.a})},657:function(t,e,n){"use strict";n(6),n(8),n(87),n(9),n(34),n(14),n(15),n(7),n(186),n(54),n(10),n(51);var o=n(1),r=n(4),l=n(96),c=n(116);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(r.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(o){o&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},666:function(t,e,n){var content=n(667);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("5e62c9d0",content,!0,{sourceMap:!1})},667:function(t,e,n){(e=n(16)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]),e.push([t.i,".theme--light.v-radio--is-disabled label{color:rgba(0,0,0,.38)}.theme--light.v-radio--is-disabled .v-icon{color:rgba(0,0,0,.26)!important}.theme--dark.v-radio--is-disabled label{color:hsla(0,0%,100%,.5)}.theme--dark.v-radio--is-disabled .v-icon{color:hsla(0,0%,100%,.3)!important}.v-radio{align-items:center;display:flex;height:auto;outline:none}.v-radio--is-disabled{pointer-events:none;cursor:default}.v-input--radio-group.v-input--radio-group--row .v-radio{margin-right:16px}",""]),t.exports=e},668:function(t,e,n){var content=n(669);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("2e2bc7da",content,!0,{sourceMap:!1})},669:function(t,e,n){(e=n(16)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]),e.push([t.i,'.theme--light.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:rgba(0,0,0,.26)!important}.theme--dark.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:hsla(0,0%,100%,.3)!important}.v-input--selection-controls{margin-top:16px;padding-top:4px}.v-input--selection-controls>.v-input__append-outer,.v-input--selection-controls>.v-input__prepend-outer{margin-top:0;margin-bottom:0}.v-input--selection-controls:not(.v-input--hide-details)>.v-input__slot{margin-bottom:12px}.v-input--selection-controls .v-input__slot,.v-input--selection-controls .v-radio{cursor:pointer}.v-input--selection-controls .v-input__slot>.v-label,.v-input--selection-controls .v-radio>.v-label{align-items:center;display:inline-flex;flex:1 1 auto;height:auto}.v-input--selection-controls__input{color:inherit;display:inline-flex;flex:0 0 auto;height:24px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);transition-property:transform;width:24px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input .v-icon{width:100%}.v-application--is-ltr .v-input--selection-controls__input{margin-right:8px}.v-application--is-rtl .v-input--selection-controls__input{margin-left:8px}.v-input--selection-controls__input input[role=checkbox],.v-input--selection-controls__input input[role=radio],.v-input--selection-controls__input input[role=switch]{position:absolute;opacity:0;width:100%;height:100%;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input+.v-label{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__ripple{border-radius:50%;cursor:pointer;height:34px;position:absolute;transition:inherit;width:34px;left:-12px;top:calc(50% - 24px);margin:7px}.v-input--selection-controls__ripple:before{border-radius:inherit;bottom:0;content:"";position:absolute;opacity:.2;left:0;right:0;top:0;transform-origin:center center;transform:scale(.2);transition:inherit}.v-input--selection-controls__ripple>.v-ripple__container{transform:scale(1.2)}.v-input--selection-controls.v-input--dense .v-input--selection-controls__ripple{width:28px;height:28px;left:-9px}.v-input--selection-controls.v-input--dense:not(.v-input--switch) .v-input--selection-controls__ripple{top:calc(50% - 21px)}.v-input--selection-controls.v-input{flex:0 1 auto}.v-input--selection-controls.v-input--is-focused .v-input--selection-controls__ripple:before,.v-input--selection-controls .v-radio--is-focused .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2)}.v-input--selection-controls .v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2);transition:none}',""]),t.exports=e},670:function(t,e,n){var content=n(671);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("999cb8a8",content,!0,{sourceMap:!1})},671:function(t,e,n){(e=n(16)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]),e.push([t.i,".v-input--radio-group legend.v-label{cursor:text;font-size:14px;height:auto}.v-input--radio-group__input{border:none;cursor:default;display:flex;width:100%}.v-input--radio-group--column .v-input--radio-group__input>.v-label{padding-bottom:8px}.v-input--radio-group--row .v-input--radio-group__input>.v-label{padding-right:8px}.v-input--radio-group--row legend{align-self:center;display:inline-block}.v-input--radio-group--row .v-input--radio-group__input{flex-direction:row;flex-wrap:wrap}.v-input--radio-group--column legend{padding-bottom:8px}.v-input--radio-group--column .v-radio:not(:last-child):not(:only-child){margin-bottom:8px}.v-input--radio-group--column .v-input--radio-group__input{flex-direction:column}",""]),t.exports=e},688:function(t,e,n){"use strict";n.r(e);n(30);var o={props:{title:{type:String,default:"Office"},value:{type:Object,default:function(){return{id:null,name:"",opening_time:"",closing_time:"",building:"",is_branch:!1,country:"",province:"",city:"",postal_code:"",street:""}}},show:Boolean,onClick:Function},data:function(){return{dialog:!1,office:{id:this.$props.value.id,name:this.$props.value.name,opening_time:this.$props.value.opening_time,closing_time:this.$props.value.closing_time,building:this.$props.value.building,is_branch:this.$props.value.is_branch,country:this.$props.value.country,province:this.$props.value.province,city:this.$props.value.city,postal_code:this.$props.value.postal_code,street:this.$props.value.street}}},computed:{loading:function(){return this.$store.state.loading.office}},watch:{office:{handler:function(t){this.$emit("input",t)},deep:!0},dialog:function(t){this.$emit("show",t)},show:function(t){this.dialog=t,this.office=this.$helper.deepCopy(this.$props.value)}}},r=n(29),l=n(26),c=n.n(l),d=n(636),f=n(649),h=n(657),m=(n(6),n(8),n(9),n(14),n(15),n(7),n(10),n(1)),v=(n(666),n(175)),_=n(32),y=n(75),x=n(96),k=n(18),w=n(115),O=n(239),$=n(12),C=(n(80),n(23),n(31),n(240)),V=n(4);function j(t){t.preventDefault()}var S=Object(V.a)(y.a,O.a,C.a).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,input=this.internalValue;return this.isMultiple?!!Array.isArray(input)&&input.some((function(n){return t.valueComparator(n,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,input):Boolean(input):this.valueComparator(input,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var label=y.a.options.methods.genLabel.call(this);return label?(label.data.on={click:j},label):label},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:j},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,input=this.internalValue;if(this.isMultiple){Array.isArray(input)||(input=[]);var n=input.length;(input=input.filter((function(n){return!t.valueComparator(n,e)}))).length===n&&input.push(e)}else input=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(input,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(input,e)?null:e:!input;this.validate(!0,input),this.internalValue=input,this.hasColor=input}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}}),P=n(0),B=n(35);function D(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function I(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?D(Object(source),!0).forEach((function(e){Object(m.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):D(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var E=Object(V.a)(x.a,k.a,O.a,Object(w.a)("radioGroup"),$.a).extend().extend({name:"v-radio",inheritAttrs:!1,props:{disabled:Boolean,id:String,label:String,name:String,offIcon:{type:String,default:"$radioOff"},onIcon:{type:String,default:"$radioOn"},readonly:Boolean,value:{default:null}},data:function(){return{isFocused:!1}},computed:{classes:function(){return I(I({"v-radio--is-disabled":this.isDisabled,"v-radio--is-focused":this.isFocused},this.themeClasses),this.groupClasses)},computedColor:function(){return S.options.computed.computedColor.call(this)},computedIcon:function(){return this.isActive?this.onIcon:this.offIcon},computedId:function(){return y.a.options.computed.computedId.call(this)},hasLabel:y.a.options.computed.hasLabel,hasState:function(){return(this.radioGroup||{}).hasState},isDisabled:function(){return this.disabled||!!this.radioGroup&&this.radioGroup.isDisabled},isReadonly:function(){return this.readonly||!!this.radioGroup&&this.radioGroup.isReadonly},computedName:function(){return this.name||!this.radioGroup?this.name:this.radioGroup.name||"radio-".concat(this.radioGroup._uid)},rippleState:function(){return S.options.computed.rippleState.call(this)},validationState:function(){return(this.radioGroup||{}).validationState||this.computedColor}},methods:{genInput:function(t){return S.options.methods.genInput.call(this,"radio",t)},genLabel:function(){return this.hasLabel?this.$createElement(v.a,{on:{click:j},attrs:{for:this.computedId},props:{color:this.validationState,focused:this.hasState}},Object(P.s)(this,"label")||this.label):null},genRadio:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(_.a,this.setTextColor(this.validationState,{props:{dense:this.radioGroup&&this.radioGroup.dense}}),this.computedIcon),this.genInput(I({name:this.computedName,value:this.value},this.attrs$)),this.genRipple(this.setTextColor(this.rippleState))])},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onChange:function(){this.isDisabled||this.isReadonly||this.isActive||this.toggle()},onKeydown:function(){}},render:function(t){return t("div",{staticClass:"v-radio",class:this.classes,on:Object(B.c)({click:this.onChange},this.listeners$)},[this.genRadio(),this.genLabel()])}}),T=(n(20),n(668),n(670),n(157));function A(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function F(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?A(Object(source),!0).forEach((function(e){Object(m.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):A(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var G=Object(V.a)(C.a,T.a,y.a).extend({name:"v-radio-group",provide:function(){return{radioGroup:this}},props:{column:{type:Boolean,default:!0},height:{type:[Number,String],default:"auto"},name:String,row:Boolean,value:null},computed:{classes:function(){return F(F({},y.a.options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--radio-group":!0,"v-input--radio-group--column":this.column&&!this.row,"v-input--radio-group--row":this.row})}},methods:{genDefaultSlot:function(){return this.$createElement("div",{staticClass:"v-input--radio-group__input",attrs:{id:this.id,role:"radiogroup","aria-labelledby":this.computedId}},y.a.options.methods.genDefaultSlot.call(this))},genInputSlot:function(){var t=y.a.options.methods.genInputSlot.call(this);return delete t.data.on.click,t},genLabel:function(){var label=y.a.options.methods.genLabel.call(this);return label?(label.data.attrs.id=this.computedId,delete label.data.attrs.for,label.tag="legend",label):null},onClick:T.a.options.methods.onClick}}),R=n(637),M=n(79),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("base-modal",{attrs:{loading:t.loading},scopedSlots:t._u([{key:"title",fn:function(){return[t._v(t._s(t.title))]},proxy:!0},{key:"actions",fn:function(){return[t._t("default")]},proxy:!0}],null,!0),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),[n("v-form",{ref:"form"},[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{rules:t.$rules.officeName(),dense:"",outlined:"",clearable:"",name:"name",placeholder:"Name","persistent-hint":"",hint:"The name of the office","prepend-inner-icon":"mdi-office-building-outline"},model:{value:t.office.name,callback:function(e){t.$set(t.office,"name",e)},expression:"office.name"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6"}},[n("time-picker",{attrs:{name:"opening_time",placeholder:"Opening Time",hint:"The open hour of office",icon:"mdi-progress-clock"},model:{value:t.office.opening_time,callback:function(e){t.$set(t.office,"opening_time",e)},expression:"office.opening_time"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6"}},[n("time-picker",{attrs:{name:"closing_time",placeholder:"Closing Time",hint:"The closing hour of office",icon:"mdi-clock-check-outline"},model:{value:t.office.closing_time,callback:function(e){t.$set(t.office,"closing_time",e)},expression:"office.closing_time"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{dense:"",outlined:"",clearable:"",name:"building",placeholder:"Building","persistent-hint":"",hint:"The type of the building","prepend-inner-icon":"mdi-warehouse"},model:{value:t.office.building,callback:function(e){t.$set(t.office,"building",e)},expression:"office.building"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6"}},[n("v-text-field",{attrs:{rules:t.$rules.country(),dense:"",outlined:"",clearable:"","hide-details":"",name:"country",placeholder:"Country","prepend-inner-icon":"mdi-flag-outline"},model:{value:t.office.country,callback:function(e){t.$set(t.office,"country",e)},expression:"office.country"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6"}},[n("v-text-field",{attrs:{rules:t.$rules.province(),dense:"",outlined:"",clearable:"","hide-details":"",name:"province",placeholder:"Province","prepend-inner-icon":"mdi-terrain"},model:{value:t.office.province,callback:function(e){t.$set(t.office,"province",e)},expression:"office.province"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6"}},[n("v-text-field",{attrs:{rules:t.$rules.city(),dense:"",outlined:"",clearable:"","hide-details":"",name:"city",placeholder:"City","prepend-inner-icon":"mdi-city-variant-outline"},model:{value:t.office.city,callback:function(e){t.$set(t.office,"city",e)},expression:"office.city"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6"}},[n("v-text-field",{attrs:{rules:t.$rules.postalCode(),dense:"",outlined:"",clearable:"","hide-details":"",name:"postal_code",placeholder:"Postal Code","prepend-inner-icon":"mdi-post-outline"},model:{value:t.office.postal_code,callback:function(e){t.$set(t.office,"postal_code",e)},expression:"office.postal_code"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{rules:t.$rules.street(),dense:"",outlined:"",clearable:"","hide-details":"",name:"street",placeholder:"Street","prepend-inner-icon":"mdi-road-variant"},model:{value:t.office.street,callback:function(e){t.$set(t.office,"street",e)},expression:"office.street"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-container",{staticClass:"py-0"},[n("v-radio-group",{attrs:{row:""},model:{value:t.office.is_branch,callback:function(e){t.$set(t.office,"is_branch",e)},expression:"office.is_branch"}},[n("v-radio",{attrs:{label:"Head Office",value:!1}}),t._v(" "),n("v-radio",{attrs:{label:"Branch Office",value:!0}})],1)],1)],1)],1)],1)]],2)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{TimePicker:n(655).default,BaseModal:n(446).default}),c()(component,{VCol:d.a,VContainer:f.a,VForm:h.a,VRadio:E,VRadioGroup:G,VRow:R.a,VTextField:M.a})},690:function(t,e,n){"use strict";n.r(e);n(30);var o={props:{title:{type:String,default:"Office"},value:{type:Object,default:function(){return{id:null,name:"",code:"",chairman_id:null,office_id:null}}},show:Boolean,onClick:Function},data:function(){return{dialog:!1,department:{id:this.$props.value.id,name:this.$props.value.name,code:this.$props.value.code,chairman_id:this.$props.value.chairman_id,office_id:this.$props.value.office_id}}},computed:{loading:function(){return this.$store.state.loading.department},users:function(){return this.$store.state.user.all},offices:function(){return this.$store.state.company.offices}},watch:{department:{handler:function(t){this.$emit("input",t)},deep:!0},dialog:function(t){this.$store.dispatch("user/index"),this.$emit("show",t)},show:function(t){this.dialog=t,this.department=this.$helper.deepCopy(this.$props.value)}}},r=n(29),l=n(26),c=n.n(l),d=n(636),f=n(637),h=n(626),m=n(79),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("base-modal",{attrs:{loading:t.loading},scopedSlots:t._u([{key:"title",fn:function(){return[t._v(t._s(t.title))]},proxy:!0},{key:"actions",fn:function(){return[t._t("default")]},proxy:!0}],null,!0),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6"}},[n("v-text-field",{attrs:{rules:t.$rules.officeName(),dense:"",outlined:"",clearable:"",name:"name",placeholder:"Name","persistent-hint":"",hint:"The name of the department","prepend-inner-icon":"mdi-alpha-n-box-outline"},model:{value:t.department.name,callback:function(e){t.$set(t.department,"name",e)},expression:"department.name"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6"}},[n("v-text-field",{attrs:{rules:t.$rules.officeName(),dense:"",outlined:"",clearable:"",name:"code",placeholder:"Code","persistent-hint":"",hint:"The code of the department","prepend-inner-icon":"mdi-code-greater-than"},model:{value:t.department.code,callback:function(e){t.$set(t.department,"code",e)},expression:"department.code"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6"}},[n("v-select",{attrs:{rules:t.$rules.chairman(),dense:"",outlined:"","hide-details":"",items:t.users,"item-value":"id","item-text":"employee.full_name",name:"chairman_id",placeholder:"Chairman","prepend-inner-icon":"mdi-account-tie-outline"},scopedSlots:t._u([{key:"item",fn:function(t){var e=t.item;return[n("item-text-container",{attrs:{sub:e.email,main:e.employee.full_name}})]}}]),model:{value:t.department.chairman_id,callback:function(e){t.$set(t.department,"chairman_id",e)},expression:"department.chairman_id"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6"}},[n("v-select",{attrs:{rules:t.$rules.officeId(),dense:"",outlined:"","hide-details":"",items:t.offices,"item-value":"id","item-text":"name",name:"office_id",placeholder:"Office","prepend-inner-icon":"mdi-office-building-outline"},scopedSlots:t._u([{key:"item",fn:function(t){var e=t.item;return[n("item-text-container",{attrs:{sub:e.is_branch?"Branch":"Head",main:e.name}})]}}]),model:{value:t.department.office_id,callback:function(e){t.$set(t.department,"office_id",e)},expression:"department.office_id"}})],1)],1)]],2)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{ItemTextContainer:n(452).default,BaseModal:n(446).default}),c()(component,{VCol:d.a,VRow:f.a,VSelect:h.a,VTextField:m.a})},701:function(t,e,n){"use strict";n.r(e);var o=n(1),r=(n(50),n(13)),l={data:function(){return{title:"",tabs:0,mode:"store",modal:{office:!1,department:!1},headers:{office:[{text:"Office",value:"name"},{text:"Opening time",value:"opening_time"},{text:"Closing time",value:"closing_time"},{text:"Building",value:"building"},{text:"Branch Office",value:"is_branch"},{text:"Address",value:"address.full_address"},{text:"Actions",value:"actions",sortable:!1}],department:[{text:"Department",value:"name"},{text:"Code",value:"code"},{text:"Chairman",value:"chairman.employee.full_name"},{text:"Office",value:"office.name"},{text:"Actions",value:"actions",sortable:!1}]},office:{},department:{}}},computed:{is_admin:function(){return this.$auth.user.is_admin},offices:function(){return this.$store.state.company.offices},departments:function(){return this.$store.state.company.departments}},mounted:function(){this.$store.dispatch("company/index")},methods:{onEdit:function(t){this.mode="update",this[this.tabs?"office":"department"]=this.$helper[this.tabs?"toOffice":"toDepartment"](t),this.title="Edit ".concat(this.tabs?"Office":"Department"),this.modal[this.tabs?"office":"department"]=!0},onCreate:function(){this.mode="create",this[this.tabs?"office":"department"]=this.$helper[this.tabs?"defaultOffice":"defaultDepartment"](),this.title="New ".concat(this.tabs?"Office":"Department"),this.modal[this.tabs?"office":"department"]=!0},onClick:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.$store.dispatch("company/"+e.mode,Object(o.a)({type:t},t,e[t]));case 2:case"end":return n.stop()}}),n)})))()},onDelete:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n.$store.dispatch("company/delete",{type:t,id:e});case 2:case"end":return o.stop()}}),o)})))()}},head:function(){return{title:"Company"}}},c=n(29),d=n(26),f=n.n(d),h=n(142),m=n(217),v=n(181),_=n(649),y=n(700),x=n(172),k=n(699),w=n(711),O=n(709),$=n(696),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-card",{attrs:{flat:""}},[n("v-tabs",{attrs:{"background-color":"teal",color:"white","center-active":""},model:{value:t.tabs,callback:function(e){t.tabs=e},expression:"tabs"}},[n("v-tab",{key:"department"},[t._v(" department ")]),t._v(" "),n("v-tab",{key:"office"},[t._v(" office ")])],1)],1),t._v(" "),n("v-tabs-items",{staticClass:"mt-8",model:{value:t.tabs,callback:function(e){t.tabs=e},expression:"tabs"}},[n("v-tab-item",[n("v-data-table",{attrs:{headers:t.headers.department,items:t.departments,"items-per-page":5},scopedSlots:t._u([{key:"item.actions",fn:function(e){var o=e.item;return[t.is_admin?n("v-btn",{staticClass:"ma-1",attrs:{color:"warning",small:"",icon:"",outlined:""},on:{click:function(e){return e.stopPropagation(),t.onEdit(o)}}},[n("v-icon",{attrs:{small:""}},[t._v("mdi-pencil")])],1):t._e(),t._v(" "),t.is_admin?n("v-btn",{staticClass:"ma-1",attrs:{color:"error",small:"",icon:"",outlined:""},on:{click:function(e){return e.stopPropagation(),t.onDelete("department",o.id)}}},[n("v-icon",{attrs:{small:""}},[t._v("mdi-delete")])],1):t._e()]}}],null,!0)})],1),t._v(" "),n("v-tab-item",[n("v-data-table",{attrs:{headers:t.headers.office,items:t.offices,"items-per-page":5},scopedSlots:t._u([{key:"item.is_branch",fn:function(e){var o=e.item;return[n("v-chip",{attrs:{dark:"",color:o.is_branch?"orange":"green"}},[t._v("\n            "+t._s(o.is_branch?"Branch Office":"Head Office")+"\n          ")])]}},{key:"item.actions",fn:function(e){var o=e.item;return[t.is_admin?n("v-btn",{staticClass:"ma-1",attrs:{color:"warning",small:"",icon:"",outlined:""},on:{click:function(e){return e.stopPropagation(),t.onEdit(o)}}},[n("v-icon",{attrs:{small:""}},[t._v("mdi-pencil")])],1):t._e(),t._v(" "),t.is_admin?n("v-btn",{staticClass:"ma-1",attrs:{color:"error",small:"",icon:"",outlined:""},on:{click:function(e){return e.stopPropagation(),t.onDelete("office",o.id)}}},[n("v-icon",{attrs:{small:""}},[t._v("mdi-delete")])],1):t._e()]}}],null,!0)})],1)],1),t._v(" "),n("fab-button",{attrs:{onClick:t.onCreate}}),t._v(" "),n("office-modal",{attrs:{title:t.title,show:t.modal.office},on:{show:function(e){t.modal.office=e}},model:{value:t.office,callback:function(e){t.office=e},expression:"office"}},[n("v-btn",{attrs:{block:"",color:"teal",dark:""},on:{click:function(e){return e.stopPropagation(),t.onClick("office")}}},[t._v("\n      "+t._s(t.mode)+"\n    ")])],1),t._v(" "),n("department-modal",{attrs:{title:t.title,show:t.modal.department},on:{show:function(e){t.modal.department=e}},model:{value:t.department,callback:function(e){t.department=e},expression:"department"}},[n("v-btn",{attrs:{block:"",color:"teal",dark:""},on:{click:function(e){return e.stopPropagation(),t.onClick("department")}}},[t._v("\n      "+t._s(t.mode)+"\n    ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{FabButton:n(654).default,OfficeModal:n(688).default,DepartmentModal:n(690).default}),f()(component,{VBtn:h.a,VCard:m.a,VChip:v.a,VContainer:_.a,VDataTable:y.a,VIcon:x.a,VTab:k.a,VTabItem:w.a,VTabs:O.a,VTabsItems:$.a})}}]);