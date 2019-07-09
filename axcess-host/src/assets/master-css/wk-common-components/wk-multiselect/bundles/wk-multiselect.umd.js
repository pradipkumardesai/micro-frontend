(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@ng-bootstrap/ng-bootstrap'), require('@angular/common'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('wk-multiselect', ['exports', '@angular/core', '@ng-bootstrap/ng-bootstrap', '@angular/common', '@angular/forms'], factory) :
    (factory((global['wk-multiselect'] = {}),global.ng.core,null,global.ng.common,global.ng.forms));
}(this, (function (exports,core,ngBootstrap,common,forms) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var WkMultiselectComponent = (function () {
        function WkMultiselectComponent(config) {
            // Multiselect model items
            this.items = [];
            // emit event Multiselect model items when item is selected
            this.selectedItems = new core.EventEmitter();
            config.autoClose = false;
        }
        /**
         * @return {?}
         */
        WkMultiselectComponent.prototype.selectAll = /**
         * @return {?}
         */
            function () {
                // check whether items are checked are not
                for (var /** @type {?} */ i = 0; i < this.items.length; i++) {
                    this.items[i].checked = this.selectedAll;
                }
            };
        /**
         * @return {?}
         */
        WkMultiselectComponent.prototype.checkIfAllSelected = /**
         * @return {?}
         */
            function () {
                // check whether every item is checked are not
                this.selectedAll = this.items.every(function (item) {
                    return item.checked === true;
                });
            };
        /**
         * @return {?}
         */
        WkMultiselectComponent.prototype.changed = /**
         * @return {?}
         */
            function () {
                var _this = this;
                // sets the count to 0
                this.count = 0;
                this.items.map(function (item) {
                    if (item.checked) {
                        _this.count = _this.count + 1;
                    }
                });
                // get the count of selected items
                // emits event with the checked items
                this.selectedItems.emit(this.items.filter(function (x) { return x.checked === true; }));
                return this.count;
            };
        WkMultiselectComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'wk-multiselect',
                        template: "\n                <div ngbDropdown class=\"d-inline-block\">\n                  <button class=\"dropbtn btn btn-default\" id=\"dropdownBasic1\" ngbDropdownToggle>\n                    Toggle dropdown ({{changed()}})\n                    <span class=\"commonglyphs commonglyphs-arrow-down\"></span>\n                  </button>\n                  <div ngbDropdownMenu aria-labelledby=\"dropdownConfig\" class=\"dropdowncontent\" >\n                    <input type=\"text\" placeholder=\"Search...\" id=\"myInput\" [(ngModel)]=\"search\" />\n                    <label class=\"cursor\" style=\"width:100%;\">\n                      <input type=\"checkbox\" (change)=\"selectAll();\" [(ngModel)]=\"selectedAll\">  Select all\n                    </label>\n                    <div class=\"scolldiv\">\n                      <div *ngFor=\"let user of items | FilterPipe: 'name' :search\">\n                        <label style=\"width:100%;\">\n                          <input type=\"checkbox\" (change)=\"checkIfAllSelected()\" [(ngModel)]=\"user.checked\">\n                          <span [innerHTML]=\"user.name | highlight:search\"></span>\n                        </label>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n  ",
                        styles: [
                            "\n      wk-multiselect .dropbtn {\n        padding: 8px;\n        font-size: 16px;\n        border: none;\n        cursor: pointer;\n        width: 200px;\n        border: 1px solid #ddd;\n        border-bottom: 1px solid #ddd;\n      }\n      wk-multiselect #myInput {\n        background-position: 14px 12px;\n        background-repeat: no-repeat;\n        font-size: 16px;\n        padding: 2px 20px 2px 13px;\n        width: 235px;\n        border: none;\n      }\n      wk-multiselect .dropdown {\n        position: relative;\n      }\n      wk-multiselect .dropdown-toggle::after {\n        float: right;\n        margin: 5px;\n        display:none;\n\n      }\n      wk-multiselect .dropdowncontent {\n        position: absolute;\n        z-index: 1;\n        border-radius: 0 !important;\n        border-bottom: 1px solid #ddd;\n        padding: 0;\n      }\n      wk-multiselect .scolldiv {\n        overflow: auto;\n        max-height: 200px;\n        cursor: pointer;\n      }\n      wk-multiselect .scolldiv p:hover {\n        background-color: #efefef;\n      }\n      wk-multiselect p {\n        padding: 1px 5px;\n        text-decoration: none;\n        display: block;\n        cursor: pointer;\n      }\n      wk-multiselect .cursor {\n        cursor: pointer;\n      }\n      wk-multiselect .dropdowncontent .cursor {\n        border-bottom: 2px solid #ddd;\n        border-top: 2px solid #ddd;\n      }\n      wk-multiselect p {\n        margin-bottom: 0rem;\n      }\n      wk-multiselect label {\n        padding: 2px 5px;\n        cursor: pointer;\n        margin: 0rem;\n      }\n      wk-multiselect label .highlight {\n        font-weight: bold;\n        padding: 0px;\n      }\n      wk-multiselect .searchicon {\n        margin: -1px 8px 0px -24px;\n      }\n      wk-multiselect .dropdowm-menu {\n        padding: 0 !important;\n      }\n      @media screen and (max-width: 768px) {\n        .dropdowm-menu {\n          border-radius: 0;\n        }\n      }\n      ::-webkit-scrollbar-track {\n        -webkit-box-shadow: inset 0 0 0px rgba(255, 255, 255, 1);\n        border-radius: 3px;\n      }\n      ::-webkit-scrollbar-thumb {\n        border-radius: 3px;\n        -webkit-box-shadow: inset 0 0 3px rgba(255, 255, 255, 1);\n      }\n      .dropdowm-menu {\n        padding: 0 !important;\n      }\n      .left-inner-addon {\n        position: relative;\n      }\n      .left-inner-addon input {\n        padding-left: 30px;\n      }\n      .left-inner-addon i {\n        position: absolute;\n        padding: 10px 12px;\n        pointer-events: none;\n      }\n      .right-inner-addon {\n        position: relative;\n      }\n      .right-inner-addon input {\n        padding-right: 30px;\n      }\n      .right-inner-addon i {\n        position: absolute;\n        right: 0px;\n        padding: 0px 16px;\n        pointer-events: none;\n      }\n      ::-webkit-scrollbar-track {\n        -webkit-box-shadow: inset 0 0 0px rgba(255, 255, 255, 1);\n        border-radius: 3px;\n      }\n      \n      ::-webkit-scrollbar-thumb {\n        border-radius: 3px;\n        -webkit-box-shadow: inset 0 0 3px rgba(255, 255, 255, 1);\n      }\n      \n      /* width */\n      ::-webkit-scrollbar {\n        width: 10px;\n      }\n      /* Track */\n      ::-webkit-scrollbar-track {\n        box-shadow: inset 0 0 5px grey;\n        border-radius: 10px;\n      }\n      /* Handle */\n      ::-webkit-scrollbar-thumb {\n        background: gray;\n        border-radius: 10px;\n      }\n      /* Handle on hover */\n      ::-webkit-scrollbar-thumb:hover {\n        background: gray;\n      }\n      input[type=\"checkbox\"] {\n        cursor: pointer !important;\n      }\n      ::-webkit-input-placeholder {\n        font-style: italic !important;\n      }\n      :-moz-placeholder {\n        font-style: italic !important;\n      }\n      ::-moz-placeholder {\n        font-style: italic !important;\n      }\n      :-ms-input-placeholder {\n        font-style: italic !important;\n      }    \n    "
                        ],
                        encapsulation: core.ViewEncapsulation.None
                    },] },
        ];
        /** @nocollapse */
        WkMultiselectComponent.ctorParameters = function () {
            return [
                { type: ngBootstrap.NgbDropdownConfig }
            ];
        };
        WkMultiselectComponent.propDecorators = {
            items: [{ type: core.Input }],
            selectedItems: [{ type: core.Output }]
        };
        return WkMultiselectComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var HighlightPipe = (function () {
        function HighlightPipe() {
        }
        /**
         * @param {?} text
         * @param {?} search
         * @return {?}
         */
        HighlightPipe.prototype.transform = /**
         * @param {?} text
         * @param {?} search
         * @return {?}
         */
            function (text, search) {
                // check if search text is passed or not, if passed
                //replace search text with given regular expression
                if (search) {
                    var /** @type {?} */ pattern = search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
                    // split pattern with empty spaces and filter the text with length greater than zero
                    // and join the text with pipe
                    pattern = pattern.split(' ').filter(function (t) {
                        return t.length > 0;
                    }).join('|');
                    var /** @type {?} */ regex = new RegExp(pattern, 'gi');
                    // append the match text to label tag
                    return search ? text.replace(regex, function (match) { return "<label class=\"highlight\">" + match + "</label>"; }) : text;
                }
                return text;
            };
        HighlightPipe.decorators = [
            { type: core.Pipe, args: [{ name: 'highlight' },] },
        ];
        return HighlightPipe;
    }());
    var FilterPipe = (function () {
        function FilterPipe() {
        }
        /**
         * @param {?} items
         * @param {?} field
         * @param {?} value
         * @return {?}
         */
        FilterPipe.prototype.transform = /**
         * @param {?} items
         * @param {?} field
         * @param {?} value
         * @return {?}
         */
            function (items, field, value) {
                // check if value is present or not
                if (value) {
                    // returns empty array if items are empty
                    if (!items) {
                        return [];
                    }
                    var /** @type {?} */ re = new RegExp(value, 'gi');
                    // returns filtered items with regular expression re and searching the text
                    return items.filter(function (it) { return it[field].toLowerCase().replace(re, "<mark>" + value.toLocaleLowerCase() + "</mark>").indexOf(value.toLowerCase()) > -1; });
                }
                return items;
            };
        FilterPipe.decorators = [
            { type: core.Pipe, args: [{
                        name: 'FilterPipe',
                    },] },
        ];
        return FilterPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @return {?}
     */
    function _window() {
        // return the global native browser window object
        return window;
    }
    var WindowRef = (function () {
        function WindowRef() {
        }
        Object.defineProperty(WindowRef.prototype, "nativeWindow", {
            get: /**
             * @return {?}
             */ function () {
                return _window();
            },
            enumerable: true,
            configurable: true
        });
        WindowRef.decorators = [
            { type: core.Injectable },
        ];
        return WindowRef;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var WkMultiselectModule = (function () {
        function WkMultiselectModule() {
        }
        /**
         * @return {?}
         */
        WkMultiselectModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: WkMultiselectModule,
                    providers: [
                        WindowRef
                    ]
                };
            };
        WkMultiselectModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule, forms.FormsModule, ngBootstrap.NgbModule.forRoot()
                        ],
                        declarations: [WkMultiselectComponent, FilterPipe, HighlightPipe],
                        exports: [WkMultiselectComponent]
                    },] },
        ];
        return WkMultiselectModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.WkMultiselectComponent = WkMultiselectComponent;
    exports.WkMultiselectModule = WkMultiselectModule;
    exports.ɵc = WindowRef;
    exports.ɵb = FilterPipe;
    exports.ɵa = HighlightPipe;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2stbXVsdGlzZWxlY3QudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly93ay1tdWx0aXNlbGVjdC9saWIvd2stbXVsdGlzZWxlY3QuY29tcG9uZW50LnRzIiwibmc6Ly93ay1tdWx0aXNlbGVjdC9saWIvd2stbXVsdGlzZWxlY3QucGlwZS50cyIsIm5nOi8vd2stbXVsdGlzZWxlY3QvbGliL1dpbmRvd1JlZi5wcm92aWRlci50cyIsIm5nOi8vd2stbXVsdGlzZWxlY3QvbGliL3drLW11bHRpc2VsZWN0Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nYkRyb3Bkb3duQ29uZmlnIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFdrTXVsdGlzZWxlY3RNb2RlbCB7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgY2hlY2tlZD86IGJvb2xlYW47XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3drLW11bHRpc2VsZWN0JyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgICAgICAgICA8ZGl2IG5nYkRyb3Bkb3duIGNsYXNzPVwiZC1pbmxpbmUtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkcm9wYnRuIGJ0biBidG4tZGVmYXVsdFwiIGlkPVwiZHJvcGRvd25CYXNpYzFcIiBuZ2JEcm9wZG93blRvZ2dsZT5cbiAgICAgICAgICAgICAgICAgICAgVG9nZ2xlIGRyb3Bkb3duICh7e2NoYW5nZWQoKX19KVxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbW1vbmdseXBocyBjb21tb25nbHlwaHMtYXJyb3ctZG93blwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPGRpdiBuZ2JEcm9wZG93bk1lbnUgYXJpYS1sYWJlbGxlZGJ5PVwiZHJvcGRvd25Db25maWdcIiBjbGFzcz1cImRyb3Bkb3duY29udGVudFwiID5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2guLi5cIiBpZD1cIm15SW5wdXRcIiBbKG5nTW9kZWwpXT1cInNlYXJjaFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImN1cnNvclwiIHN0eWxlPVwid2lkdGg6MTAwJTtcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgKGNoYW5nZSk9XCJzZWxlY3RBbGwoKTtcIiBbKG5nTW9kZWwpXT1cInNlbGVjdGVkQWxsXCI+ICBTZWxlY3QgYWxsXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzY29sbGRpdlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IHVzZXIgb2YgaXRlbXMgfCBGaWx0ZXJQaXBlOiAnbmFtZScgOnNlYXJjaFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPVwid2lkdGg6MTAwJTtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIChjaGFuZ2UpPVwiY2hlY2tJZkFsbFNlbGVjdGVkKClcIiBbKG5nTW9kZWwpXT1cInVzZXIuY2hlY2tlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cInVzZXIubmFtZSB8IGhpZ2hsaWdodDpzZWFyY2hcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICB3ay1tdWx0aXNlbGVjdCAuZHJvcGJ0biB7XG4gICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgICAgIH1cbiAgICAgIHdrLW11bHRpc2VsZWN0ICNteUlucHV0IHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTRweCAxMnB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIHBhZGRpbmc6IDJweCAyMHB4IDJweCAxM3B4O1xuICAgICAgICB3aWR0aDogMjM1cHg7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIH1cbiAgICAgIHdrLW11bHRpc2VsZWN0IC5kcm9wZG93biB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cbiAgICAgIHdrLW11bHRpc2VsZWN0IC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgZGlzcGxheTpub25lO1xuXG4gICAgICB9XG4gICAgICB3ay1tdWx0aXNlbGVjdCAuZHJvcGRvd25jb250ZW50IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuICAgICAgd2stbXVsdGlzZWxlY3QgLnNjb2xsZGl2IHtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgICB3ay1tdWx0aXNlbGVjdCAuc2NvbGxkaXYgcDpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG4gICAgICB9XG4gICAgICB3ay1tdWx0aXNlbGVjdCBwIHtcbiAgICAgICAgcGFkZGluZzogMXB4IDVweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgICAgd2stbXVsdGlzZWxlY3QgLmN1cnNvciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICAgIHdrLW11bHRpc2VsZWN0IC5kcm9wZG93bmNvbnRlbnQgLmN1cnNvciB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGRkO1xuICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgI2RkZDtcbiAgICAgIH1cbiAgICAgIHdrLW11bHRpc2VsZWN0IHAge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcmVtO1xuICAgICAgfVxuICAgICAgd2stbXVsdGlzZWxlY3QgbGFiZWwge1xuICAgICAgICBwYWRkaW5nOiAycHggNXB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIG1hcmdpbjogMHJlbTtcbiAgICAgIH1cbiAgICAgIHdrLW11bHRpc2VsZWN0IGxhYmVsIC5oaWdobGlnaHQge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgfVxuICAgICAgd2stbXVsdGlzZWxlY3QgLnNlYXJjaGljb24ge1xuICAgICAgICBtYXJnaW46IC0xcHggOHB4IDBweCAtMjRweDtcbiAgICAgIH1cbiAgICAgIHdrLW11bHRpc2VsZWN0IC5kcm9wZG93bS1tZW51IHtcbiAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgLmRyb3Bkb3dtLW1lbnUge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgfVxuICAgICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgM3B4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gICAgICB9XG4gICAgICAuZHJvcGRvd20tbWVudSB7XG4gICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIC5sZWZ0LWlubmVyLWFkZG9uIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuICAgICAgLmxlZnQtaW5uZXItYWRkb24gaW5wdXQge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgICB9XG4gICAgICAubGVmdC1pbm5lci1hZGRvbiBpIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgfVxuICAgICAgLnJpZ2h0LWlubmVyLWFkZG9uIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuICAgICAgLnJpZ2h0LWlubmVyLWFkZG9uIGlucHV0IHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgICAgIH1cbiAgICAgIC5yaWdodC1pbm5lci1hZGRvbiBpIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMHB4O1xuICAgICAgICBwYWRkaW5nOiAwcHggMTZweDtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICB9XG4gICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgM3B4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8qIHdpZHRoICovXG4gICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICB9XG4gICAgICAvKiBUcmFjayAqL1xuICAgICAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggZ3JleTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIH1cbiAgICAgIC8qIEhhbmRsZSAqL1xuICAgICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgIGJhY2tncm91bmQ6IGdyYXk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICB9XG4gICAgICAvKiBIYW5kbGUgb24gaG92ZXIgKi9cbiAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiBncmF5O1xuICAgICAgfVxuICAgICAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICA6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWMgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIDotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICA6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWMgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWMgIWltcG9ydGFudDtcbiAgICAgIH0gICAgXG4gICAgYFxuICBdLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFdrTXVsdGlzZWxlY3RDb21wb25lbnQge1xuXG4gIHNlYXJjaDogYW55O1xuICBjb3VudDogbnVtYmVyO1xuICAvLyBNdWx0aXNlbGVjdCBtb2RlbCBpdGVtc1xuICBASW5wdXQoKSBpdGVtczogQXJyYXk8V2tNdWx0aXNlbGVjdE1vZGVsPiA9IFtdO1xuICAvLyBlbWl0IGV2ZW50IE11bHRpc2VsZWN0IG1vZGVsIGl0ZW1zIHdoZW4gaXRlbSBpcyBzZWxlY3RlZFxuICBAT3V0cHV0KCkgc2VsZWN0ZWRJdGVtcyA9IG5ldyBFdmVudEVtaXR0ZXI8V2tNdWx0aXNlbGVjdE1vZGVsW10+KCk7XG4gIHNlbGVjdGVkQWxsOiBhbnk7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogTmdiRHJvcGRvd25Db25maWcpIHtcbiAgICBjb25maWcuYXV0b0Nsb3NlID0gZmFsc2U7XG4gIH1cbiAgc2VsZWN0QWxsKCkge1xuICAgIC8vIGNoZWNrIHdoZXRoZXIgaXRlbXMgYXJlIGNoZWNrZWQgYXJlIG5vdFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5pdGVtc1tpXS5jaGVja2VkID0gdGhpcy5zZWxlY3RlZEFsbDtcbiAgICB9XG4gIH1cbiAgY2hlY2tJZkFsbFNlbGVjdGVkKCkge1xuICAgIC8vIGNoZWNrIHdoZXRoZXIgZXZlcnkgaXRlbSBpcyBjaGVja2VkIGFyZSBub3RcbiAgICB0aGlzLnNlbGVjdGVkQWxsID0gdGhpcy5pdGVtcy5ldmVyeShmdW5jdGlvbiAoaXRlbTogYW55KSB7XG4gICAgICByZXR1cm4gaXRlbS5jaGVja2VkID09PSB0cnVlO1xuICAgIH0pO1xuICB9XG4gIGNoYW5nZWQoKSB7XG4gICAgLy8gc2V0cyB0aGUgY291bnQgdG8gMFxuICAgIHRoaXMuY291bnQgPSAwO1xuICAgIHRoaXMuaXRlbXMubWFwKGl0ZW0gPT4ge1xuICAgICAgaWYgKGl0ZW0uY2hlY2tlZCkge1xuICAgICAgICB0aGlzLmNvdW50ID0gdGhpcy5jb3VudCArIDE7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gZ2V0IHRoZSBjb3VudCBvZiBzZWxlY3RlZCBpdGVtc1xuICAgIC8vIGVtaXRzIGV2ZW50IHdpdGggdGhlIGNoZWNrZWQgaXRlbXNcbiAgICB0aGlzLnNlbGVjdGVkSXRlbXMuZW1pdCh0aGlzLml0ZW1zLmZpbHRlcih4ID0+IHguY2hlY2tlZCA9PT0gdHJ1ZSkpO1xuICAgIHJldHVybiB0aGlzLmNvdW50O1xuICB9XG59XG4iLCJpbXBvcnQgeyBQaXBlVHJhbnNmb3JtLCBQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHsgbmFtZTogJ2hpZ2hsaWdodCcgfSlcbmV4cG9ydCBjbGFzcyBIaWdobGlnaHRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybSh0ZXh0OiBzdHJpbmcsIHNlYXJjaCk6IHN0cmluZyB7XG4gICAgLy8gY2hlY2sgaWYgc2VhcmNoIHRleHQgaXMgcGFzc2VkIG9yIG5vdCwgaWYgcGFzc2VkXG4gICAgLy9yZXBsYWNlIHNlYXJjaCB0ZXh0IHdpdGggZ2l2ZW4gcmVndWxhciBleHByZXNzaW9uXG4gICAgaWYgKHNlYXJjaCkge1xuICAgICAgdmFyIHBhdHRlcm4gPSBzZWFyY2gucmVwbGFjZSgvW1xcLVxcW1xcXVxcL1xce1xcfVxcKFxcKVxcKlxcK1xcP1xcLlxcXFxcXF5cXCRcXHxdL2csIFwiXFxcXCQmXCIpO1xuICAgICAgLy8gc3BsaXQgcGF0dGVybiB3aXRoIGVtcHR5IHNwYWNlcyBhbmQgZmlsdGVyIHRoZSB0ZXh0IHdpdGggbGVuZ3RoIGdyZWF0ZXIgdGhhbiB6ZXJvXG4gICAgICAvLyBhbmQgam9pbiB0aGUgdGV4dCB3aXRoIHBpcGVcbiAgICAgIHBhdHRlcm4gPSBwYXR0ZXJuLnNwbGl0KCcgJykuZmlsdGVyKCh0KSA9PiB7XG4gICAgICAgIHJldHVybiB0Lmxlbmd0aCA+IDA7XG4gICAgICB9KS5qb2luKCd8Jyk7XG4gICAgICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKHBhdHRlcm4sICdnaScpO1xuICAgICAgLy8gYXBwZW5kIHRoZSBtYXRjaCB0ZXh0IHRvIGxhYmVsIHRhZ1xuICAgICAgcmV0dXJuIHNlYXJjaCA/IHRleHQucmVwbGFjZShyZWdleCwgKG1hdGNoKSA9PiBgPGxhYmVsIGNsYXNzPVwiaGlnaGxpZ2h0XCI+JHttYXRjaH08L2xhYmVsPmApIDogdGV4dDtcbiAgICB9XG4gICAgcmV0dXJuIHRleHQ7XG4gIH1cbn1cblxuQFBpcGUoe1xuICBuYW1lOiAnRmlsdGVyUGlwZScsXG59KVxuZXhwb3J0IGNsYXNzIEZpbHRlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGl0ZW1zOiBhbnlbXSwgZmllbGQ6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IGFueVtdIHtcbiAgICAvLyBjaGVjayBpZiB2YWx1ZSBpcyBwcmVzZW50IG9yIG5vdFxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLy8gcmV0dXJucyBlbXB0eSBhcnJheSBpZiBpdGVtcyBhcmUgZW1wdHlcbiAgICAgIGlmICghaXRlbXMpIHsgcmV0dXJuIFtdOyB9XG4gICAgICB2YXIgcmUgPSBuZXcgUmVnRXhwKHZhbHVlLCAnZ2knKTtcbiAgICAgIC8vIHJldHVybnMgZmlsdGVyZWQgaXRlbXMgd2l0aCByZWd1bGFyIGV4cHJlc3Npb24gcmUgYW5kIHNlYXJjaGluZyB0aGUgdGV4dFxuICAgICAgcmV0dXJuIGl0ZW1zLmZpbHRlcihpdCA9PiBpdFtmaWVsZF0udG9Mb3dlckNhc2UoKS5yZXBsYWNlKHJlLCBcIjxtYXJrPlwiICsgdmFsdWUudG9Mb2NhbGVMb3dlckNhc2UoKSArIFwiPC9tYXJrPlwiKS5pbmRleE9mKHZhbHVlLnRvTG93ZXJDYXNlKCkpID4gLTEpO1xuICAgIH1cbiAgICByZXR1cm4gaXRlbXM7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZnVuY3Rpb24gX3dpbmRvdygpIDogYW55IHtcbiAgIC8vIHJldHVybiB0aGUgZ2xvYmFsIG5hdGl2ZSBicm93c2VyIHdpbmRvdyBvYmplY3RcbiAgIHJldHVybiB3aW5kb3c7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBXaW5kb3dSZWYge1xuICAgZ2V0IG5hdGl2ZVdpbmRvdygpIDogYW55IHtcbiAgICAgIHJldHVybiBfd2luZG93KCk7XG4gICB9XG59IiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEZpbHRlclBpcGUsIEhpZ2hsaWdodFBpcGUgfSBmcm9tICcuL3drLW11bHRpc2VsZWN0LnBpcGUnO1xuaW1wb3J0IHsgV2tNdWx0aXNlbGVjdENvbXBvbmVudCB9IGZyb20gJy4vd2stbXVsdGlzZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCB7IFdpbmRvd1JlZiB9IGZyb20gJy4vV2luZG93UmVmLnByb3ZpZGVyJztcbmltcG9ydCB7IE5nYk1vZHVsZSB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIE5nYk1vZHVsZS5mb3JSb290KClcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbV2tNdWx0aXNlbGVjdENvbXBvbmVudCwgRmlsdGVyUGlwZSwgSGlnaGxpZ2h0UGlwZV0sXG4gIGV4cG9ydHM6IFtXa011bHRpc2VsZWN0Q29tcG9uZW50XVxufSlcblxuZXhwb3J0IGNsYXNzIFdrTXVsdGlzZWxlY3RNb2R1bGUge1xuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBXa011bHRpc2VsZWN0TW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFdpbmRvd1JlZlxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cblxuIl0sIm5hbWVzIjpbIkV2ZW50RW1pdHRlciIsIkNvbXBvbmVudCIsIlZpZXdFbmNhcHN1bGF0aW9uIiwiTmdiRHJvcGRvd25Db25maWciLCJJbnB1dCIsIk91dHB1dCIsIlBpcGUiLCJJbmplY3RhYmxlIiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJGb3Jtc01vZHVsZSIsIk5nYk1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBME1FLGdD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