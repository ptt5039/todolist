(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, ".register-wrapper {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 100vh;\n}\n  \n.register-wrapper h1{\n    font-size: 100px;\n    font-weight: 100;\n    text-align: center;\n    color: rgba(175, 47, 47, 0.15);\n    -webkit-text-rendering: optimizeLegibility;\n    -moz-text-rendering: optimizeLegibility;\n    text-rendering: optimizeLegibility;\n}\n  \n.register-wrapper input {\n    display: block;\n    width: 100%;\n    padding: 16px;\n    border: none;\n    background: rgba(0, 0, 0, 0.003);\n    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);\n    margin: 0 0 16px 0;\n    font-size: 20px;\n    border-left: 2px solid transparent;\n}\n  \n.register-wrapper input::-webkit-input-placeholder {\n    font-style: italic;\n    font-weight: 300;\n    color: rgba(0, 0, 0, 0.5);\n}\n  \n.register-wrapper button {\n    display: block;\n    background-color: rgba(175, 47, 47, 0.15);\n    width: 100%;\n    padding: 16px;\n    font-size: 20px;\n    cursor: pointer;\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);\n    margin-bottom: 64px;\n}\n  \n.sign-in-wrapper {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 100vh;\n}\n  \n.sign-in-wrapper h1{\n    font-size: 100px;\n    font-weight: 100;\n    text-align: center;\n    color: rgba(175, 47, 47, 0.15);\n    -webkit-text-rendering: optimizeLegibility;\n    -moz-text-rendering: optimizeLegibility;\n    text-rendering: optimizeLegibility;\n}\n  \n.sign-in-wrapper input {\n    display: block;\n    width: 100%;\n    padding: 16px;\n    border: none;\n    background: rgba(0, 0, 0, 0.003);\n    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);\n    margin: 0 0 16px 0;\n    font-size: 20px;\n    border-left: 2px solid transparent;\n}\n  \n.sign-in-wrapper input::-webkit-input-placeholder {\n    font-style: italic;\n    font-weight: 300;\n    color: rgba(0, 0, 0, 0.5);\n}\n  \n.sign-in-wrapper button {\n    display: block;\n    background-color: rgba(175, 47, 47, 0.15);\n    width: 100%;\n    padding: 16px;\n    font-size: 20px;\n    cursor: pointer;\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);\n    margin-bottom: 64px;\n}\n  \n.todoapp {\n\tbackground: #fff;\n\tmargin: 150px 50px 40px 50px;\n\tposition: relative;\n\tbox-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),\n\t            0 25px 50px 0 rgba(0, 0, 0, 0.1);\n}\n  \n.todoapp .input input::-webkit-input-placeholder {\n\tfont-style: italic;\n\tfont-weight: 300;\n\tcolor: #e6e6e6;\n}\n  \n.todoapp .input h1 {\n\tposition: absolute;\n\twidth: 100%;\n\tmargin: -150px 40%;\n\tfont-size: 100px;\n\tfont-weight: 100;\n\tcolor: rgba(175, 47, 47, 0.15);\n\t-webkit-text-rendering: optimizeLegibility;\n\t-moz-text-rendering: optimizeLegibility;\n\ttext-rendering: optimizeLegibility;\n}\n  \n.new-todo,\n.edit {\n\tposition: relative;\n\tmargin: 0;\n\twidth: 100%;\n\tfont-size: 24px;\n\tfont-family: inherit;\n\tfont-weight: inherit;\n\tline-height: 1.4em;\n\tborder: 0;\n\tcolor: inherit;\n\tpadding: 6px;\n\tborder: 1px solid #999;\n\tbox-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);\n\tbox-sizing: border-box;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n  \n.new-todo {\n\tpadding: 16px 16px 16px 60px;\n\tborder: none;\n\tbackground: rgba(0, 0, 0, 0.003);\n\tbox-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);\n}\n  \n.main {\n\tposition: relative;\n\tz-index: 2;\n\tborder-top: 1px solid #e6e6e6;\n}\n  \n.todo-list {\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none;\n}\n  \n.todo-list li {\n\tposition: relative;\n\tfont-size: 24px;\n\tborder-bottom: 1px solid #ededed;\n}\n  \n.todo-list li:last-child {\n\tborder-bottom: none;\n}\n  \n.todo-list li.editing {\n\tborder-bottom: none;\n\tpadding: 0;\n}\n  \n.todo-list li.editing .edit {\n\tdisplay: block;\n\twidth: 506px;\n\tpadding: 12px 16px;\n\tmargin: 0 0 0 43px;\n}\n  \n.todo-list li.editing .view {\n\tdisplay: none;\n}\n  \n.todo-list li .toggle {\n\ttext-align: center;\n\twidth: 40px;\n\t/* auto, since non-WebKit browsers doesn't support input styling */\n\theight: auto;\n\tposition: absolute;\n\ttop: 0;\n\tbottom: 0;\n\tmargin: auto 0;\n\tborder: none; /* Mobile Safari */\n\t-webkit-appearance: none;\n\t-moz-appearance: none;\n\t     appearance: none;\n}\n  \n.todo-list li .toggle:after {\n\tcontent: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#ededed\" stroke-width=\"3\"/></svg>');\n}\n  \n.todo-list li .toggle:checked:after {\n\tcontent: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#bddad5\" stroke-width=\"3\"/><path fill=\"#5dc2af\" d=\"M72 25L42 71 27 56l-4 4 20 20 34-52z\"/></svg>');\n}\n  \n.todo-list li label {\n\tword-break: break-all;\n\tpadding: 15px 60px 15px 15px;\n\tmargin-left: 45px;\n\tdisplay: block;\n\tline-height: 1.2;\n\ttransition: color 0.4s;\n}\n  \n.todo-list li.completed label {\n\tcolor: #d9d9d9;\n\ttext-decoration: line-through;\n}\n  \n.todo-list li .destroy {\n\tdisplay: none;\n\tposition: absolute;\n\ttop: 0;\n\tright: 10px;\n\tbottom: 0;\n\twidth: 40px;\n\theight: 40px;\n\tmargin: auto 0;\n\tfont-size: 30px;\n\tcolor: #cc9a9a;\n\tmargin-bottom: 11px;\n\ttransition: color 0.2s ease-out;\n}\n  \n.todo-list li .destroy:hover {\n\tcolor: #af5b5e;\n}\n  \n.todo-list li .destroy:after {\n\tcontent: '×';\n}\n  \n.todo-list li:hover .destroy {\n\tdisplay: block;\n}\n  \n.todo-list li .edit {\n\tdisplay: none;\n}\n  \n.todo-list li.editing:last-child {\n\tmargin-bottom: 1px;\n}\n  \n.footer {\n\tcolor: #777;\n\tpadding: 10px 15px;\n\theight: 50px;\n\ttext-align: center;\n\tborder-top: 1px solid #e6e6e6;\n}\n  \n.footer:before {\n\tcontent: '';\n\tposition: absolute;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\theight: 50px;\n\toverflow: hidden;\n\tbox-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),\n\t            0 8px 0 -3px #f6f6f6,\n\t            0 9px 1px -3px rgba(0, 0, 0, 0.2),\n\t            0 16px 0 -6px #f6f6f6,\n\t            0 17px 2px -6px rgba(0, 0, 0, 0.2);\n}\n  \n.todo-count {\n\tfloat: left;\n\ttext-align: left;\n}\n  \n.todo-count strong {\n\tfont-weight: 300;\n}\n  \n.sign-out {\n\tdisplay: block;\n\tposition: relative;\n\tbackground-color: rgba(175, 47, 47, 0.15);\n\tpadding: 14px 100px;\n\tmargin:auto;\n\tfont-size: 20px;\n\tcursor: pointer;\n\tborder: 0;\n\tcolor: inherit;\n\tbox-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);\n}\n  \n.todo-list button {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tbackground: none;\n\tfont-size: 100%;\n\tvertical-align: baseline;\n\tfont-family: inherit;\n\tfont-weight: inherit;\n\tcolor: inherit;\n\t-webkit-appearance: none;\n\t-moz-appearance: none;\n\t     appearance: none;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n  \n.profile {\n    background: #fff;\n    margin: 50px 50px 40px 50px;\n    position: relative;\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),\n                0 25px 50px 0 rgba(0, 0, 0, 0.1);\n}\n  \n.profile .input{\n    margin: 10px;\n}\n  \n.profile .input h1 {\n\tposition: relative;\n\twidth: 100%;\n\tfont-size: 100px;\n\tfont-weight: 100;\n\tcolor: rgba(175, 47, 47, 0.15);\n\t-webkit-text-rendering: optimizeLegibility;\n\t-moz-text-rendering: optimizeLegibility;\n\ttext-rendering: optimizeLegibility;\n}\n  \n.profile button {\n    cursor: pointer;\n\tmargin: 10px;\n\tpadding: 5px;\n\tborder: 0;\n\tbackground: none;\n\tfont-size: 100%;\n\tvertical-align: baseline;\n\tfont-family: inherit;\n\tfont-weight: inherit;\n\tcolor: inherit;\n\t-webkit-appearance: none;\n\t-moz-appearance: none;\n\t     appearance: none;\n\t-webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    background-color: rgba(175, 47, 47, 0.15);\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);\n}\n  \n.creator-display {\n\tmargin-left: 50px;\n}\n  \n.nav {\n    float: right;\n    margin-top: -50px;\n}\n  \n.nav button {\n    cursor: pointer;\n\tmargin: 10px;\n\tpadding: 5px;\n\tborder: 0;\n\tbackground: none;\n\tfont-size: 100%;\n\tvertical-align: baseline;\n\tfont-family: inherit;\n\tfont-weight: inherit;\n\tcolor: inherit;\n\t-webkit-appearance: none;\n\t-moz-appearance: none;\n\t     appearance: none;\n\t-webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    background-color: rgba(175, 47, 47, 0.15);\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);\n}\n  \n.nav p {\n    margin: 15px 5px;\n    text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,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d3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMTAwdmg7XG59XG4gIFxuLnJlZ2lzdGVyLXdyYXBwZXIgaDF7XG4gICAgZm9udC1zaXplOiAxMDBweDtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogcmdiYSgxNzUsIDQ3LCA0NywgMC4xNSk7XG4gICAgLXdlYmtpdC10ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICAgIC1tb3otdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xufVxuICBcbi5yZWdpc3Rlci13cmFwcGVyIGlucHV0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDAzKTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIC0ycHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wMyk7XG4gICAgbWFyZ2luOiAwIDAgMTZweCAwO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuICBcbi5yZWdpc3Rlci13cmFwcGVyIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuICBcbi5yZWdpc3Rlci13cmFwcGVyIGJ1dHRvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzUsIDQ3LCA0NywgMC4xNSk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAyNXB4IDUwcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgbWFyZ2luLWJvdHRvbTogNjRweDtcbn1cblxuLnNpZ24taW4td3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMTAwdmg7XG59XG4gIFxuLnNpZ24taW4td3JhcHBlciBoMXtcbiAgICBmb250LXNpemU6IDEwMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiByZ2JhKDE3NSwgNDcsIDQ3LCAwLjE1KTtcbiAgICAtd2Via2l0LXRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gICAgLW1vei10ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG59XG4gIFxuLnNpZ24taW4td3JhcHBlciBpbnB1dCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAwMyk7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDMpO1xuICAgIG1hcmdpbjogMCAwIDE2cHggMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbiAgXG4uc2lnbi1pbi13cmFwcGVyIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuICBcbi5zaWduLWluLXdyYXBwZXIgYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3NSwgNDcsIDQ3LCAwLjE1KTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDI1cHggNTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBtYXJnaW4tYm90dG9tOiA2NHB4O1xufVxuXG4udG9kb2FwcCB7XG5cdGJhY2tncm91bmQ6ICNmZmY7XG5cdG1hcmdpbjogMTUwcHggNTBweCA0MHB4IDUwcHg7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0Ym94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLFxuXHQgICAgICAgICAgICAwIDI1cHggNTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLnRvZG9hcHAgLmlucHV0IGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcblx0Zm9udC1zdHlsZTogaXRhbGljO1xuXHRmb250LXdlaWdodDogMzAwO1xuXHRjb2xvcjogI2U2ZTZlNjtcbn1cblxuLnRvZG9hcHAgLmlucHV0IGgxIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR3aWR0aDogMTAwJTtcblx0bWFyZ2luOiAtMTUwcHggNDAlO1xuXHRmb250LXNpemU6IDEwMHB4O1xuXHRmb250LXdlaWdodDogMTAwO1xuXHRjb2xvcjogcmdiYSgxNzUsIDQ3LCA0NywgMC4xNSk7XG5cdC13ZWJraXQtdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcblx0LW1vei10ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuXHR0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xufVxuXG4ubmV3LXRvZG8sXG4uZWRpdCB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0bWFyZ2luOiAwO1xuXHR3aWR0aDogMTAwJTtcblx0Zm9udC1zaXplOiAyNHB4O1xuXHRmb250LWZhbWlseTogaW5oZXJpdDtcblx0Zm9udC13ZWlnaHQ6IGluaGVyaXQ7XG5cdGxpbmUtaGVpZ2h0OiAxLjRlbTtcblx0Ym9yZGVyOiAwO1xuXHRjb2xvcjogaW5oZXJpdDtcblx0cGFkZGluZzogNnB4O1xuXHRib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xuXHRib3gtc2hhZG93OiBpbnNldCAwIC0xcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHQtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcblx0LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuLm5ldy10b2RvIHtcblx0cGFkZGluZzogMTZweCAxNnB4IDE2cHggNjBweDtcblx0Ym9yZGVyOiBub25lO1xuXHRiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDAzKTtcblx0Ym94LXNoYWRvdzogaW5zZXQgMCAtMnB4IDFweCByZ2JhKDAsMCwwLDAuMDMpO1xufVxuXG4ubWFpbiB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ei1pbmRleDogMjtcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNlNmU2ZTY7XG59XG5cbi50b2RvLWxpc3Qge1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi50b2RvLWxpc3QgbGkge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGZvbnQtc2l6ZTogMjRweDtcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZGVkZWQ7XG59XG5cbi50b2RvLWxpc3QgbGk6bGFzdC1jaGlsZCB7XG5cdGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi50b2RvLWxpc3QgbGkuZWRpdGluZyB7XG5cdGJvcmRlci1ib3R0b206IG5vbmU7XG5cdHBhZGRpbmc6IDA7XG59XG5cbi50b2RvLWxpc3QgbGkuZWRpdGluZyAuZWRpdCB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHR3aWR0aDogNTA2cHg7XG5cdHBhZGRpbmc6IDEycHggMTZweDtcblx0bWFyZ2luOiAwIDAgMCA0M3B4O1xufVxuXG4udG9kby1saXN0IGxpLmVkaXRpbmcgLnZpZXcge1xuXHRkaXNwbGF5OiBub25lO1xufVxuXG4udG9kby1saXN0IGxpIC50b2dnbGUge1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdHdpZHRoOiA0MHB4O1xuXHQvKiBhdXRvLCBzaW5jZSBub24tV2ViS2l0IGJyb3dzZXJzIGRvZXNuJ3Qgc3VwcG9ydCBpbnB1dCBzdHlsaW5nICovXG5cdGhlaWdodDogYXV0bztcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDA7XG5cdGJvdHRvbTogMDtcblx0bWFyZ2luOiBhdXRvIDA7XG5cdGJvcmRlcjogbm9uZTsgLyogTW9iaWxlIFNhZmFyaSAqL1xuXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG5cdGFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbi50b2RvLWxpc3QgbGkgLnRvZ2dsZTphZnRlciB7XG5cdGNvbnRlbnQ6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCI0MFwiIGhlaWdodD1cIjQwXCIgdmlld0JveD1cIi0xMCAtMTggMTAwIDEzNVwiPjxjaXJjbGUgY3g9XCI1MFwiIGN5PVwiNTBcIiByPVwiNTBcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiNlZGVkZWRcIiBzdHJva2Utd2lkdGg9XCIzXCIvPjwvc3ZnPicpO1xufVxuXG4udG9kby1saXN0IGxpIC50b2dnbGU6Y2hlY2tlZDphZnRlciB7XG5cdGNvbnRlbnQ6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCI0MFwiIGhlaWdodD1cIjQwXCIgdmlld0JveD1cIi0xMCAtMTggMTAwIDEzNVwiPjxjaXJjbGUgY3g9XCI1MFwiIGN5PVwiNTBcIiByPVwiNTBcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiNiZGRhZDVcIiBzdHJva2Utd2lkdGg9XCIzXCIvPjxwYXRoIGZpbGw9XCIjNWRjMmFmXCIgZD1cIk03MiAyNUw0MiA3MSAyNyA1NmwtNCA0IDIwIDIwIDM0LTUyelwiLz48L3N2Zz4nKTtcbn1cblxuLnRvZG8tbGlzdCBsaSBsYWJlbCB7XG5cdHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcblx0cGFkZGluZzogMTVweCA2MHB4IDE1cHggMTVweDtcblx0bWFyZ2luLWxlZnQ6IDQ1cHg7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRsaW5lLWhlaWdodDogMS4yO1xuXHR0cmFuc2l0aW9uOiBjb2xvciAwLjRzO1xufVxuXG4udG9kby1saXN0IGxpLmNvbXBsZXRlZCBsYWJlbCB7XG5cdGNvbG9yOiAjZDlkOWQ5O1xuXHR0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cblxuLnRvZG8tbGlzdCBsaSAuZGVzdHJveSB7XG5cdGRpc3BsYXk6IG5vbmU7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAwO1xuXHRyaWdodDogMTBweDtcblx0Ym90dG9tOiAwO1xuXHR3aWR0aDogNDBweDtcblx0aGVpZ2h0OiA0MHB4O1xuXHRtYXJnaW46IGF1dG8gMDtcblx0Zm9udC1zaXplOiAzMHB4O1xuXHRjb2xvcjogI2NjOWE5YTtcblx0bWFyZ2luLWJvdHRvbTogMTFweDtcblx0dHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLW91dDtcbn1cblxuLnRvZG8tbGlzdCBsaSAuZGVzdHJveTpob3ZlciB7XG5cdGNvbG9yOiAjYWY1YjVlO1xufVxuXG4udG9kby1saXN0IGxpIC5kZXN0cm95OmFmdGVyIHtcblx0Y29udGVudDogJ8OXJztcbn1cblxuLnRvZG8tbGlzdCBsaTpob3ZlciAuZGVzdHJveSB7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuXG4udG9kby1saXN0IGxpIC5lZGl0IHtcblx0ZGlzcGxheTogbm9uZTtcbn1cblxuLnRvZG8tbGlzdCBsaS5lZGl0aW5nOmxhc3QtY2hpbGQge1xuXHRtYXJnaW4tYm90dG9tOiAxcHg7XG59XG5cbi5mb290ZXIge1xuXHRjb2xvcjogIzc3Nztcblx0cGFkZGluZzogMTBweCAxNXB4O1xuXHRoZWlnaHQ6IDUwcHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNlNmU2ZTY7XG59XG5cbi5mb290ZXI6YmVmb3JlIHtcblx0Y29udGVudDogJyc7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0cmlnaHQ6IDA7XG5cdGJvdHRvbTogMDtcblx0bGVmdDogMDtcblx0aGVpZ2h0OiA1MHB4O1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHRib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuXHQgICAgICAgICAgICAwIDhweCAwIC0zcHggI2Y2ZjZmNixcblx0ICAgICAgICAgICAgMCA5cHggMXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuXHQgICAgICAgICAgICAwIDE2cHggMCAtNnB4ICNmNmY2ZjYsXG5cdCAgICAgICAgICAgIDAgMTdweCAycHggLTZweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi50b2RvLWNvdW50IHtcblx0ZmxvYXQ6IGxlZnQ7XG5cdHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi50b2RvLWNvdW50IHN0cm9uZyB7XG5cdGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5zaWduLW91dCB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc1LCA0NywgNDcsIDAuMTUpO1xuXHRwYWRkaW5nOiAxNHB4IDEwMHB4O1xuXHRtYXJnaW46YXV0bztcblx0Zm9udC1zaXplOiAyMHB4O1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdGJvcmRlcjogMDtcblx0Y29sb3I6IGluaGVyaXQ7XG5cdGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAyNXB4IDUwcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi50b2RvLWxpc3QgYnV0dG9uIHtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xuXHRib3JkZXI6IDA7XG5cdGJhY2tncm91bmQ6IG5vbmU7XG5cdGZvbnQtc2l6ZTogMTAwJTtcblx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuXHRmb250LWZhbWlseTogaW5oZXJpdDtcblx0Zm9udC13ZWlnaHQ6IGluaGVyaXQ7XG5cdGNvbG9yOiBpbmhlcml0O1xuXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG5cdGFwcGVhcmFuY2U6IG5vbmU7XG5cdC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuXHQtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG4ucHJvZmlsZSB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBtYXJnaW46IDUwcHggNTBweCA0MHB4IDUwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSxcbiAgICAgICAgICAgICAgICAwIDI1cHggNTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbi5wcm9maWxlIC5pbnB1dHtcbiAgICBtYXJnaW46IDEwcHg7XG59XG5cbi5wcm9maWxlIC5pbnB1dCBoMSB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0d2lkdGg6IDEwMCU7XG5cdGZvbnQtc2l6ZTogMTAwcHg7XG5cdGZvbnQtd2VpZ2h0OiAxMDA7XG5cdGNvbG9yOiByZ2JhKDE3NSwgNDcsIDQ3LCAwLjE1KTtcblx0LXdlYmtpdC10ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuXHQtbW96LXRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG5cdHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG59XG5cbi5wcm9maWxlIGJ1dHRvbiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXHRtYXJnaW46IDEwcHg7XG5cdHBhZGRpbmc6IDVweDtcblx0Ym9yZGVyOiAwO1xuXHRiYWNrZ3JvdW5kOiBub25lO1xuXHRmb250LXNpemU6IDEwMCU7XG5cdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcblx0Zm9udC1mYW1pbHk6IGluaGVyaXQ7XG5cdGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuXHRjb2xvcjogaW5oZXJpdDtcblx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuXHRhcHBlYXJhbmNlOiBub25lO1xuXHQtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc1LCA0NywgNDcsIDAuMTUpO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAyNXB4IDUwcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5jcmVhdG9yLWRpc3BsYXkge1xuXHRtYXJnaW4tbGVmdDogNTBweDtcbn1cblxuLm5hdiB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi10b3A6IC01MHB4O1xufVxuXG4ubmF2IGJ1dHRvbiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXHRtYXJnaW46IDEwcHg7XG5cdHBhZGRpbmc6IDVweDtcblx0Ym9yZGVyOiAwO1xuXHRiYWNrZ3JvdW5kOiBub25lO1xuXHRmb250LXNpemU6IDEwMCU7XG5cdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcblx0Zm9udC1mYW1pbHk6IGluaGVyaXQ7XG5cdGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuXHRjb2xvcjogaW5oZXJpdDtcblx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuXHRhcHBlYXJhbmNlOiBub25lO1xuXHQtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc1LCA0NywgNDcsIDAuMTUpO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAyNXB4IDUwcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5uYXYgcCB7XG4gICAgbWFyZ2luOiAxNXB4IDVweDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn0iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\example\todolist\website\src\styles.css */"./src/styles.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map