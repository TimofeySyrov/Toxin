!function(){"use strict";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var n=function(){function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.body=e.querySelector(".js-nav-menu"),this.navItems=this.body.querySelectorAll(".js-nav-menu__item"),this._init()}var i,r;return i=n,(r=[{key:"_init",value:function(){this._initNavItems(),this._bindEventListeners()}},{key:"_bindEventListeners",value:function(){window.addEventListener("click",this._handleWindowClick.bind(this))}},{key:"_handleWindowClick",value:function(t){var n,i,r=t.target;null!=(n=this.itemsWithSubmenu.filter((function(e){return e.contains(r)})),i=1,function(e){if(Array.isArray(e))return e}(n)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var i,r,a=[],o=!0,u=!1;try{for(n=n.call(e);!(o=(i=n.next()).done)&&(a.push(i.value),!t||a.length!==t);o=!0);}catch(e){u=!0,r=e}finally{try{o||null==n.return||n.return()}finally{if(u)throw r}}return a}}(n,i)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?e(t,n):void 0}}(n,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0]||this.itemsWithSubmenu.forEach((function(e){e.classList.contains("nav-menu__item_active")&&e.classList.remove("nav-menu__item_active")}))}},{key:"_initNavItems",value:function(){var e=this;this._findNavItemsWithSubmenu(),this.itemsWithSubmenu.forEach((function(t){return e._addEventListenerForItem(t)}))}},{key:"_findNavItemsWithSubmenu",value:function(){var e=this;this.itemsWithSubmenu=[],this.navItems.forEach((function(t){t.hasAttribute("data-with-submenu")&&e.itemsWithSubmenu.push(t)}))}},{key:"_addEventListenerForItem",value:function(e){e.addEventListener("click",this._handleNavItemClick.bind(this))}},{key:"_handleNavItemClick",value:function(e){e.currentTarget.classList.toggle("nav-menu__item_active")}}])&&t(i.prototype,r),n}();function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var r=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.body=t.querySelector(".js-header"),this._findDOMElements(),this._init(),this._bindEventListeners()}var t,r;return t=e,(r=[{key:"_findDOMElements",value:function(){this.headerNavMenuBody=this.body.querySelector(".js-header__nav-menu"),this.menuButton=this.body.querySelector(".js-header__menu-button"),this.menuContainer=this.body.querySelector(".js-header__nav-container")}},{key:"_init",value:function(){this.headerNavMenu=new n(this.headerNavMenuBody)}},{key:"_bindEventListeners",value:function(){window.addEventListener("click",this._handleWindowClick.bind(this)),this.menuButton.addEventListener("click",this._handleMenuButtonClick.bind(this))}},{key:"_handleWindowClick",value:function(e){var t=e.target,n=t===this.menuButton;this.menuContainer.contains(t)||n||this.menuContainer.classList.remove("header__nav-container_active")}},{key:"_handleMenuButtonClick",value:function(){this.menuContainer.classList.toggle("header__nav-container_active")}}])&&i(t.prototype,r),e}();function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._initComponents()}var t,n;return t=e,(n=[{key:"_initComponents",value:function(){var e=this,t=this._getDOMElements().header;this.headers=[],t.forEach((function(t){return e.headers.push(new r(t))}))}},{key:"_getDOMElements",value:function(){return{header:document.querySelectorAll(".js-header-item")}}}])&&a(t.prototype,n),e}())}();