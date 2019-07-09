import { Component, ViewEncapsulation, Input, Output, EventEmitter, Pipe, Injectable, NgModule } from '@angular/core';
import { NgbDropdownConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var WkMultiselectComponent = /** @class */ (function () {
    function WkMultiselectComponent(config) {
        // Multiselect model items
        this.items = [];
        // emit event Multiselect model items when item is selected
        this.selectedItems = new EventEmitter();
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
        { type: Component, args: [{
                    selector: 'wk-multiselect',
                    template: "\n                <div ngbDropdown class=\"d-inline-block\">\n                  <button class=\"dropbtn btn btn-default\" id=\"dropdownBasic1\" ngbDropdownToggle>\n                    Toggle dropdown ({{changed()}})\n                    <span class=\"commonglyphs commonglyphs-arrow-down\"></span>\n                  </button>\n                  <div ngbDropdownMenu aria-labelledby=\"dropdownConfig\" class=\"dropdowncontent\" >\n                    <input type=\"text\" placeholder=\"Search...\" id=\"myInput\" [(ngModel)]=\"search\" />\n                    <label class=\"cursor\" style=\"width:100%;\">\n                      <input type=\"checkbox\" (change)=\"selectAll();\" [(ngModel)]=\"selectedAll\">  Select all\n                    </label>\n                    <div class=\"scolldiv\">\n                      <div *ngFor=\"let user of items | FilterPipe: 'name' :search\">\n                        <label style=\"width:100%;\">\n                          <input type=\"checkbox\" (change)=\"checkIfAllSelected()\" [(ngModel)]=\"user.checked\">\n                          <span [innerHTML]=\"user.name | highlight:search\"></span>\n                        </label>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n  ",
                    styles: [
                        "\n      wk-multiselect .dropbtn {\n        padding: 8px;\n        font-size: 16px;\n        border: none;\n        cursor: pointer;\n        width: 200px;\n        border: 1px solid #ddd;\n        border-bottom: 1px solid #ddd;\n      }\n      wk-multiselect #myInput {\n        background-position: 14px 12px;\n        background-repeat: no-repeat;\n        font-size: 16px;\n        padding: 2px 20px 2px 13px;\n        width: 235px;\n        border: none;\n      }\n      wk-multiselect .dropdown {\n        position: relative;\n      }\n      wk-multiselect .dropdown-toggle::after {\n        float: right;\n        margin: 5px;\n        display:none;\n\n      }\n      wk-multiselect .dropdowncontent {\n        position: absolute;\n        z-index: 1;\n        border-radius: 0 !important;\n        border-bottom: 1px solid #ddd;\n        padding: 0;\n      }\n      wk-multiselect .scolldiv {\n        overflow: auto;\n        max-height: 200px;\n        cursor: pointer;\n      }\n      wk-multiselect .scolldiv p:hover {\n        background-color: #efefef;\n      }\n      wk-multiselect p {\n        padding: 1px 5px;\n        text-decoration: none;\n        display: block;\n        cursor: pointer;\n      }\n      wk-multiselect .cursor {\n        cursor: pointer;\n      }\n      wk-multiselect .dropdowncontent .cursor {\n        border-bottom: 2px solid #ddd;\n        border-top: 2px solid #ddd;\n      }\n      wk-multiselect p {\n        margin-bottom: 0rem;\n      }\n      wk-multiselect label {\n        padding: 2px 5px;\n        cursor: pointer;\n        margin: 0rem;\n      }\n      wk-multiselect label .highlight {\n        font-weight: bold;\n        padding: 0px;\n      }\n      wk-multiselect .searchicon {\n        margin: -1px 8px 0px -24px;\n      }\n      wk-multiselect .dropdowm-menu {\n        padding: 0 !important;\n      }\n      @media screen and (max-width: 768px) {\n        .dropdowm-menu {\n          border-radius: 0;\n        }\n      }\n      ::-webkit-scrollbar-track {\n        -webkit-box-shadow: inset 0 0 0px rgba(255, 255, 255, 1);\n        border-radius: 3px;\n      }\n      ::-webkit-scrollbar-thumb {\n        border-radius: 3px;\n        -webkit-box-shadow: inset 0 0 3px rgba(255, 255, 255, 1);\n      }\n      .dropdowm-menu {\n        padding: 0 !important;\n      }\n      .left-inner-addon {\n        position: relative;\n      }\n      .left-inner-addon input {\n        padding-left: 30px;\n      }\n      .left-inner-addon i {\n        position: absolute;\n        padding: 10px 12px;\n        pointer-events: none;\n      }\n      .right-inner-addon {\n        position: relative;\n      }\n      .right-inner-addon input {\n        padding-right: 30px;\n      }\n      .right-inner-addon i {\n        position: absolute;\n        right: 0px;\n        padding: 0px 16px;\n        pointer-events: none;\n      }\n      ::-webkit-scrollbar-track {\n        -webkit-box-shadow: inset 0 0 0px rgba(255, 255, 255, 1);\n        border-radius: 3px;\n      }\n      \n      ::-webkit-scrollbar-thumb {\n        border-radius: 3px;\n        -webkit-box-shadow: inset 0 0 3px rgba(255, 255, 255, 1);\n      }\n      \n      /* width */\n      ::-webkit-scrollbar {\n        width: 10px;\n      }\n      /* Track */\n      ::-webkit-scrollbar-track {\n        box-shadow: inset 0 0 5px grey;\n        border-radius: 10px;\n      }\n      /* Handle */\n      ::-webkit-scrollbar-thumb {\n        background: gray;\n        border-radius: 10px;\n      }\n      /* Handle on hover */\n      ::-webkit-scrollbar-thumb:hover {\n        background: gray;\n      }\n      input[type=\"checkbox\"] {\n        cursor: pointer !important;\n      }\n      ::-webkit-input-placeholder {\n        font-style: italic !important;\n      }\n      :-moz-placeholder {\n        font-style: italic !important;\n      }\n      ::-moz-placeholder {\n        font-style: italic !important;\n      }\n      :-ms-input-placeholder {\n        font-style: italic !important;\n      }    \n    "
                    ],
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    WkMultiselectComponent.ctorParameters = function () { return [
        { type: NgbDropdownConfig }
    ]; };
    WkMultiselectComponent.propDecorators = {
        items: [{ type: Input }],
        selectedItems: [{ type: Output }]
    };
    return WkMultiselectComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var HighlightPipe = /** @class */ (function () {
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
        { type: Pipe, args: [{ name: 'highlight' },] },
    ];
    return HighlightPipe;
}());
var FilterPipe = /** @class */ (function () {
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
        { type: Pipe, args: [{
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
var WindowRef = /** @class */ (function () {
    function WindowRef() {
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: /**
         * @return {?}
         */
        function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    WindowRef.decorators = [
        { type: Injectable },
    ];
    return WindowRef;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var WkMultiselectModule = /** @class */ (function () {
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
        { type: NgModule, args: [{
                    imports: [
                        CommonModule, FormsModule, NgbModule.forRoot()
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

export { WkMultiselectComponent, WkMultiselectModule, WindowRef as ɵc, FilterPipe as ɵb, HighlightPipe as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2stbXVsdGlzZWxlY3QuanMubWFwIiwic291cmNlcyI6WyJuZzovL3drLW11bHRpc2VsZWN0L2xpYi93ay1tdWx0aXNlbGVjdC5jb21wb25lbnQudHMiLCJuZzovL3drLW11bHRpc2VsZWN0L2xpYi93ay1tdWx0aXNlbGVjdC5waXBlLnRzIiwibmc6Ly93ay1tdWx0aXNlbGVjdC9saWIvV2luZG93UmVmLnByb3ZpZGVyLnRzIiwibmc6Ly93ay1tdWx0aXNlbGVjdC9saWIvd2stbXVsdGlzZWxlY3QubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24sIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdiRHJvcGRvd25Db25maWcgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2tNdWx0aXNlbGVjdE1vZGVsIHtcbiAgdmFsdWU6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBjaGVja2VkPzogYm9vbGVhbjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnd2stbXVsdGlzZWxlY3QnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICAgICAgICAgIDxkaXYgbmdiRHJvcGRvd24gY2xhc3M9XCJkLWlubGluZS1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRyb3BidG4gYnRuIGJ0bi1kZWZhdWx0XCIgaWQ9XCJkcm9wZG93bkJhc2ljMVwiIG5nYkRyb3Bkb3duVG9nZ2xlPlxuICAgICAgICAgICAgICAgICAgICBUb2dnbGUgZHJvcGRvd24gKHt7Y2hhbmdlZCgpfX0pXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29tbW9uZ2x5cGhzIGNvbW1vbmdseXBocy1hcnJvdy1kb3duXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8ZGl2IG5nYkRyb3Bkb3duTWVudSBhcmlhLWxhYmVsbGVkYnk9XCJkcm9wZG93bkNvbmZpZ1wiIGNsYXNzPVwiZHJvcGRvd25jb250ZW50XCIgPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaC4uLlwiIGlkPVwibXlJbnB1dFwiIFsobmdNb2RlbCldPVwic2VhcmNoXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY3Vyc29yXCIgc3R5bGU9XCJ3aWR0aDoxMDAlO1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAoY2hhbmdlKT1cInNlbGVjdEFsbCgpO1wiIFsobmdNb2RlbCldPVwic2VsZWN0ZWRBbGxcIj4gIFNlbGVjdCBhbGxcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNjb2xsZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgdXNlciBvZiBpdGVtcyB8IEZpbHRlclBpcGU6ICduYW1lJyA6c2VhcmNoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9XCJ3aWR0aDoxMDAlO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgKGNoYW5nZSk9XCJjaGVja0lmQWxsU2VsZWN0ZWQoKVwiIFsobmdNb2RlbCldPVwidXNlci5jaGVja2VkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIFtpbm5lckhUTUxdPVwidXNlci5uYW1lIHwgaGlnaGxpZ2h0OnNlYXJjaFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIHdrLW11bHRpc2VsZWN0IC5kcm9wYnRuIHtcbiAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICAgICAgfVxuICAgICAgd2stbXVsdGlzZWxlY3QgI215SW5wdXQge1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxNHB4IDEycHg7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgcGFkZGluZzogMnB4IDIwcHggMnB4IDEzcHg7XG4gICAgICAgIHdpZHRoOiAyMzVweDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgfVxuICAgICAgd2stbXVsdGlzZWxlY3QgLmRyb3Bkb3duIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuICAgICAgd2stbXVsdGlzZWxlY3QgLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICBkaXNwbGF5Om5vbmU7XG5cbiAgICAgIH1cbiAgICAgIHdrLW11bHRpc2VsZWN0IC5kcm9wZG93bmNvbnRlbnQge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG4gICAgICB3ay1tdWx0aXNlbGVjdCAuc2NvbGxkaXYge1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICAgIHdrLW11bHRpc2VsZWN0IC5zY29sbGRpdiBwOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcbiAgICAgIH1cbiAgICAgIHdrLW11bHRpc2VsZWN0IHAge1xuICAgICAgICBwYWRkaW5nOiAxcHggNXB4O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgICB3ay1tdWx0aXNlbGVjdCAuY3Vyc29yIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgICAgd2stbXVsdGlzZWxlY3QgLmRyb3Bkb3duY29udGVudCAuY3Vyc29yIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkZGQ7XG4gICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZGRkO1xuICAgICAgfVxuICAgICAgd2stbXVsdGlzZWxlY3QgcCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDByZW07XG4gICAgICB9XG4gICAgICB3ay1tdWx0aXNlbGVjdCBsYWJlbCB7XG4gICAgICAgIHBhZGRpbmc6IDJweCA1cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgbWFyZ2luOiAwcmVtO1xuICAgICAgfVxuICAgICAgd2stbXVsdGlzZWxlY3QgbGFiZWwgLmhpZ2hsaWdodCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICB9XG4gICAgICB3ay1tdWx0aXNlbGVjdCAuc2VhcmNoaWNvbiB7XG4gICAgICAgIG1hcmdpbjogLTFweCA4cHggMHB4IC0yNHB4O1xuICAgICAgfVxuICAgICAgd2stbXVsdGlzZWxlY3QgLmRyb3Bkb3dtLW1lbnUge1xuICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAuZHJvcGRvd20tbWVudSB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICB9XG4gICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAzcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgICAgIH1cbiAgICAgIC5kcm9wZG93bS1tZW51IHtcbiAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgLmxlZnQtaW5uZXItYWRkb24ge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG4gICAgICAubGVmdC1pbm5lci1hZGRvbiBpbnB1dCB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICAgIH1cbiAgICAgIC5sZWZ0LWlubmVyLWFkZG9uIGkge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTJweDtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICB9XG4gICAgICAucmlnaHQtaW5uZXItYWRkb24ge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG4gICAgICAucmlnaHQtaW5uZXItYWRkb24gaW5wdXQge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgICAgfVxuICAgICAgLnJpZ2h0LWlubmVyLWFkZG9uIGkge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgIHBhZGRpbmc6IDBweCAxNnB4O1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIH1cbiAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgfVxuICAgICAgXG4gICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAzcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLyogd2lkdGggKi9cbiAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgIH1cbiAgICAgIC8qIFRyYWNrICovXG4gICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCBncmV5O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgfVxuICAgICAgLyogSGFuZGxlICovXG4gICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgYmFja2dyb3VuZDogZ3JheTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIH1cbiAgICAgIC8qIEhhbmRsZSBvbiBob3ZlciAqL1xuICAgICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IGdyYXk7XG4gICAgICB9XG4gICAgICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYyAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgOi1tb3otcGxhY2Vob2xkZXIge1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWMgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIDo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYyAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYyAhaW1wb3J0YW50O1xuICAgICAgfSAgICBcbiAgICBgXG4gIF0sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgV2tNdWx0aXNlbGVjdENvbXBvbmVudCB7XG5cbiAgc2VhcmNoOiBhbnk7XG4gIGNvdW50OiBudW1iZXI7XG4gIC8vIE11bHRpc2VsZWN0IG1vZGVsIGl0ZW1zXG4gIEBJbnB1dCgpIGl0ZW1zOiBBcnJheTxXa011bHRpc2VsZWN0TW9kZWw+ID0gW107XG4gIC8vIGVtaXQgZXZlbnQgTXVsdGlzZWxlY3QgbW9kZWwgaXRlbXMgd2hlbiBpdGVtIGlzIHNlbGVjdGVkXG4gIEBPdXRwdXQoKSBzZWxlY3RlZEl0ZW1zID0gbmV3IEV2ZW50RW1pdHRlcjxXa011bHRpc2VsZWN0TW9kZWxbXT4oKTtcbiAgc2VsZWN0ZWRBbGw6IGFueTtcbiAgY29uc3RydWN0b3IoY29uZmlnOiBOZ2JEcm9wZG93bkNvbmZpZykge1xuICAgIGNvbmZpZy5hdXRvQ2xvc2UgPSBmYWxzZTtcbiAgfVxuICBzZWxlY3RBbGwoKSB7XG4gICAgLy8gY2hlY2sgd2hldGhlciBpdGVtcyBhcmUgY2hlY2tlZCBhcmUgbm90XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLml0ZW1zW2ldLmNoZWNrZWQgPSB0aGlzLnNlbGVjdGVkQWxsO1xuICAgIH1cbiAgfVxuICBjaGVja0lmQWxsU2VsZWN0ZWQoKSB7XG4gICAgLy8gY2hlY2sgd2hldGhlciBldmVyeSBpdGVtIGlzIGNoZWNrZWQgYXJlIG5vdFxuICAgIHRoaXMuc2VsZWN0ZWRBbGwgPSB0aGlzLml0ZW1zLmV2ZXJ5KGZ1bmN0aW9uIChpdGVtOiBhbnkpIHtcbiAgICAgIHJldHVybiBpdGVtLmNoZWNrZWQgPT09IHRydWU7XG4gICAgfSk7XG4gIH1cbiAgY2hhbmdlZCgpIHtcbiAgICAvLyBzZXRzIHRoZSBjb3VudCB0byAwXG4gICAgdGhpcy5jb3VudCA9IDA7XG4gICAgdGhpcy5pdGVtcy5tYXAoaXRlbSA9PiB7XG4gICAgICBpZiAoaXRlbS5jaGVja2VkKSB7XG4gICAgICAgIHRoaXMuY291bnQgPSB0aGlzLmNvdW50ICsgMTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBnZXQgdGhlIGNvdW50IG9mIHNlbGVjdGVkIGl0ZW1zXG4gICAgLy8gZW1pdHMgZXZlbnQgd2l0aCB0aGUgY2hlY2tlZCBpdGVtc1xuICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5lbWl0KHRoaXMuaXRlbXMuZmlsdGVyKHggPT4geC5jaGVja2VkID09PSB0cnVlKSk7XG4gICAgcmV0dXJuIHRoaXMuY291bnQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGVUcmFuc2Zvcm0sIFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoeyBuYW1lOiAnaGlnaGxpZ2h0JyB9KVxuZXhwb3J0IGNsYXNzIEhpZ2hsaWdodFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHRleHQ6IHN0cmluZywgc2VhcmNoKTogc3RyaW5nIHtcbiAgICAvLyBjaGVjayBpZiBzZWFyY2ggdGV4dCBpcyBwYXNzZWQgb3Igbm90LCBpZiBwYXNzZWRcbiAgICAvL3JlcGxhY2Ugc2VhcmNoIHRleHQgd2l0aCBnaXZlbiByZWd1bGFyIGV4cHJlc3Npb25cbiAgICBpZiAoc2VhcmNoKSB7XG4gICAgICB2YXIgcGF0dGVybiA9IHNlYXJjaC5yZXBsYWNlKC9bXFwtXFxbXFxdXFwvXFx7XFx9XFwoXFwpXFwqXFwrXFw/XFwuXFxcXFxcXlxcJFxcfF0vZywgXCJcXFxcJCZcIik7XG4gICAgICAvLyBzcGxpdCBwYXR0ZXJuIHdpdGggZW1wdHkgc3BhY2VzIGFuZCBmaWx0ZXIgdGhlIHRleHQgd2l0aCBsZW5ndGggZ3JlYXRlciB0aGFuIHplcm9cbiAgICAgIC8vIGFuZCBqb2luIHRoZSB0ZXh0IHdpdGggcGlwZVxuICAgICAgcGF0dGVybiA9IHBhdHRlcm4uc3BsaXQoJyAnKS5maWx0ZXIoKHQpID0+IHtcbiAgICAgICAgcmV0dXJuIHQubGVuZ3RoID4gMDtcbiAgICAgIH0pLmpvaW4oJ3wnKTtcbiAgICAgIHZhciByZWdleCA9IG5ldyBSZWdFeHAocGF0dGVybiwgJ2dpJyk7XG4gICAgICAvLyBhcHBlbmQgdGhlIG1hdGNoIHRleHQgdG8gbGFiZWwgdGFnXG4gICAgICByZXR1cm4gc2VhcmNoID8gdGV4dC5yZXBsYWNlKHJlZ2V4LCAobWF0Y2gpID0+IGA8bGFiZWwgY2xhc3M9XCJoaWdobGlnaHRcIj4ke21hdGNofTwvbGFiZWw+YCkgOiB0ZXh0O1xuICAgIH1cbiAgICByZXR1cm4gdGV4dDtcbiAgfVxufVxuXG5AUGlwZSh7XG4gIG5hbWU6ICdGaWx0ZXJQaXBlJyxcbn0pXG5leHBvcnQgY2xhc3MgRmlsdGVyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oaXRlbXM6IGFueVtdLCBmaWVsZDogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogYW55W10ge1xuICAgIC8vIGNoZWNrIGlmIHZhbHVlIGlzIHByZXNlbnQgb3Igbm90XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAvLyByZXR1cm5zIGVtcHR5IGFycmF5IGlmIGl0ZW1zIGFyZSBlbXB0eVxuICAgICAgaWYgKCFpdGVtcykgeyByZXR1cm4gW107IH1cbiAgICAgIHZhciByZSA9IG5ldyBSZWdFeHAodmFsdWUsICdnaScpO1xuICAgICAgLy8gcmV0dXJucyBmaWx0ZXJlZCBpdGVtcyB3aXRoIHJlZ3VsYXIgZXhwcmVzc2lvbiByZSBhbmQgc2VhcmNoaW5nIHRoZSB0ZXh0XG4gICAgICByZXR1cm4gaXRlbXMuZmlsdGVyKGl0ID0+IGl0W2ZpZWxkXS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UocmUsIFwiPG1hcms+XCIgKyB2YWx1ZS50b0xvY2FsZUxvd2VyQ2FzZSgpICsgXCI8L21hcms+XCIpLmluZGV4T2YodmFsdWUudG9Mb3dlckNhc2UoKSkgPiAtMSk7XG4gICAgfVxuICAgIHJldHVybiBpdGVtcztcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5mdW5jdGlvbiBfd2luZG93KCkgOiBhbnkge1xuICAgLy8gcmV0dXJuIHRoZSBnbG9iYWwgbmF0aXZlIGJyb3dzZXIgd2luZG93IG9iamVjdFxuICAgcmV0dXJuIHdpbmRvdztcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFdpbmRvd1JlZiB7XG4gICBnZXQgbmF0aXZlV2luZG93KCkgOiBhbnkge1xuICAgICAgcmV0dXJuIF93aW5kb3coKTtcbiAgIH1cbn0iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRmlsdGVyUGlwZSwgSGlnaGxpZ2h0UGlwZSB9IGZyb20gJy4vd2stbXVsdGlzZWxlY3QucGlwZSc7XG5pbXBvcnQgeyBXa011bHRpc2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi93ay1tdWx0aXNlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnLi9XaW5kb3dSZWYucHJvdmlkZXInO1xuaW1wb3J0IHsgTmdiTW9kdWxlIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgTmdiTW9kdWxlLmZvclJvb3QoKVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtXa011bHRpc2VsZWN0Q29tcG9uZW50LCBGaWx0ZXJQaXBlLCBIaWdobGlnaHRQaXBlXSxcbiAgZXhwb3J0czogW1drTXVsdGlzZWxlY3RDb21wb25lbnRdXG59KVxuXG5leHBvcnQgY2xhc3MgV2tNdWx0aXNlbGVjdE1vZHVsZSB7XG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFdrTXVsdGlzZWxlY3RNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgV2luZG93UmVmXG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7SUEwTUUsZ0NBQVksTUFBeUI7O3FCQUpPLEVBQUU7OzZCQUVwQixJQUFJLFlBQVksRUFBd0I7UUFHaEUsTUFBTSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7S0FDMUI7Ozs7SUFDRCwwQ0FBUzs7O0lBQVQ7O1FBRUUsS0FBSyxxQkFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJ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