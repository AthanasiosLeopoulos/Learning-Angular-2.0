System.register(["angular2/core","./contact.service","angular2/router"],function(t){var e,n,o,r,c=this&&this.__decorate||function(t,e,n,o){var r,c=arguments.length,a=3>c?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(a=(3>c?r(a):c>3?r(e,n,a):r(e,n))||a);return c>3&&a&&Object.defineProperty(e,n,a),a},a=this&&this.__metadata||function(t,e){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(t,e):void 0};return{setters:[function(t){e=t},function(t){n=t},function(t){o=t}],execute:function(){r=function(){function t(t,e){this._contactService=t,this._router=e}return t.prototype.onAddContact=function(t,e,n){var o=Math.floor(100*Math.random()+1).toString(),r={id:o,firstname:t,lastname:e,email:n};this._contactService.insertContact(r),this._router.navigate(["Contacts"])},t=c([e.Component({templateUrl:"../dev/contacts/newcontact.component.html",providers:[n.ContactService]}),a("design:paramtypes",[n.ContactService,o.Router])],t)}(),t("NewContactComponent",r)}}});