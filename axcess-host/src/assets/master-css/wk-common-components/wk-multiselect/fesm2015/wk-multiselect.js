import { Component, ViewEncapsulation, Input, Output, EventEmitter, Pipe, Injectable, NgModule } from '@angular/core';
import { NgbDropdownConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class WkMultiselectComponent {
    /**
     * @param {?} config
     */
    constructor(config) {
        // Multiselect model items
        this.items = [];
        // emit event Multiselect model items when item is selected
        this.selectedItems = new EventEmitter();
        config.autoClose = false;
    }
    /**
     * @return {?}
     */
    selectAll() {
        // check whether items are checked are not
        for (let /** @type {?} */ i = 0; i < this.items.length; i++) {
            this.items[i].checked = this.selectedAll;
        }
    }
    /**
     * @return {?}
     */
    checkIfAllSelected() {
        // check whether every item is checked are not
        this.selectedAll = this.items.every(function (item) {
            return item.checked === true;
        });
    }
    /**
     * @return {?}
     */
    changed() {
        // sets the count to 0
        this.count = 0;
        this.items.map(item => {
            if (item.checked) {
                this.count = this.count + 1;
            }
        });
        // get the count of selected items
        // emits event with the checked items
        this.selectedItems.emit(this.items.filter(x => x.checked === true));
        return this.count;
    }
}
WkMultiselectComponent.decorators = [
    { type: Component, args: [{
                selector: 'wk-multiselect',
                template: `
                <div ngbDropdown class="d-inline-block">
                  <button class="dropbtn btn btn-default" id="dropdownBasic1" ngbDropdownToggle>
                    Toggle dropdown ({{changed()}})
                    <span class="commonglyphs commonglyphs-arrow-down"></span>
                  </button>
                  <div ngbDropdownMenu aria-labelledby="dropdownConfig" class="dropdowncontent" >
                    <input type="text" placeholder="Search..." id="myInput" [(ngModel)]="search" />
                    <label class="cursor" style="width:100%;">
                      <input type="checkbox" (change)="selectAll();" [(ngModel)]="selectedAll">  Select all
                    </label>
                    <div class="scolldiv">
                      <div *ngFor="let user of items | FilterPipe: 'name' :search">
                        <label style="width:100%;">
                          <input type="checkbox" (change)="checkIfAllSelected()" [(ngModel)]="user.checked">
                          <span [innerHTML]="user.name | highlight:search"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
  `,
                styles: [
                    `
      wk-multiselect .dropbtn {
        padding: 8px;
        font-size: 16px;
        border: none;
        cursor: pointer;
        width: 200px;
        border: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
      }
      wk-multiselect #myInput {
        background-position: 14px 12px;
        background-repeat: no-repeat;
        font-size: 16px;
        padding: 2px 20px 2px 13px;
        width: 235px;
        border: none;
      }
      wk-multiselect .dropdown {
        position: relative;
      }
      wk-multiselect .dropdown-toggle::after {
        float: right;
        margin: 5px;
        display:none;

      }
      wk-multiselect .dropdowncontent {
        position: absolute;
        z-index: 1;
        border-radius: 0 !important;
        border-bottom: 1px solid #ddd;
        padding: 0;
      }
      wk-multiselect .scolldiv {
        overflow: auto;
        max-height: 200px;
        cursor: pointer;
      }
      wk-multiselect .scolldiv p:hover {
        background-color: #efefef;
      }
      wk-multiselect p {
        padding: 1px 5px;
        text-decoration: none;
        display: block;
        cursor: pointer;
      }
      wk-multiselect .cursor {
        cursor: pointer;
      }
      wk-multiselect .dropdowncontent .cursor {
        border-bottom: 2px solid #ddd;
        border-top: 2px solid #ddd;
      }
      wk-multiselect p {
        margin-bottom: 0rem;
      }
      wk-multiselect label {
        padding: 2px 5px;
        cursor: pointer;
        margin: 0rem;
      }
      wk-multiselect label .highlight {
        font-weight: bold;
        padding: 0px;
      }
      wk-multiselect .searchicon {
        margin: -1px 8px 0px -24px;
      }
      wk-multiselect .dropdowm-menu {
        padding: 0 !important;
      }
      @media screen and (max-width: 768px) {
        .dropdowm-menu {
          border-radius: 0;
        }
      }
      ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 0px rgba(255, 255, 255, 1);
        border-radius: 3px;
      }
      ::-webkit-scrollbar-thumb {
        border-radius: 3px;
        -webkit-box-shadow: inset 0 0 3px rgba(255, 255, 255, 1);
      }
      .dropdowm-menu {
        padding: 0 !important;
      }
      .left-inner-addon {
        position: relative;
      }
      .left-inner-addon input {
        padding-left: 30px;
      }
      .left-inner-addon i {
        position: absolute;
        padding: 10px 12px;
        pointer-events: none;
      }
      .right-inner-addon {
        position: relative;
      }
      .right-inner-addon input {
        padding-right: 30px;
      }
      .right-inner-addon i {
        position: absolute;
        right: 0px;
        padding: 0px 16px;
        pointer-events: none;
      }
      ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 0px rgba(255, 255, 255, 1);
        border-radius: 3px;
      }
      
      ::-webkit-scrollbar-thumb {
        border-radius: 3px;
        -webkit-box-shadow: inset 0 0 3px rgba(255, 255, 255, 1);
      }
      
      /* width */
      ::-webkit-scrollbar {
        width: 10px;
      }
      /* Track */
      ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey;
        border-radius: 10px;
      }
      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: gray;
        border-radius: 10px;
      }
      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: gray;
      }
      input[type="checkbox"] {
        cursor: pointer !important;
      }
      ::-webkit-input-placeholder {
        font-style: italic !important;
      }
      :-moz-placeholder {
        font-style: italic !important;
      }
      ::-moz-placeholder {
        font-style: italic !important;
      }
      :-ms-input-placeholder {
        font-style: italic !important;
      }    
    `
                ],
                encapsulation: ViewEncapsulation.None
            },] },
];
/** @nocollapse */
WkMultiselectComponent.ctorParameters = () => [
    { type: NgbDropdownConfig }
];
WkMultiselectComponent.propDecorators = {
    items: [{ type: Input }],
    selectedItems: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class HighlightPipe {
    /**
     * @param {?} text
     * @param {?} search
     * @return {?}
     */
    transform(text, search) {
        // check if search text is passed or not, if passed
        //replace search text with given regular expression
        if (search) {
            var /** @type {?} */ pattern = search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
            // split pattern with empty spaces and filter the text with length greater than zero
            // and join the text with pipe
            pattern = pattern.split(' ').filter((t) => {
                return t.length > 0;
            }).join('|');
            var /** @type {?} */ regex = new RegExp(pattern, 'gi');
            // append the match text to label tag
            return search ? text.replace(regex, (match) => `<label class="highlight">${match}</label>`) : text;
        }
        return text;
    }
}
HighlightPipe.decorators = [
    { type: Pipe, args: [{ name: 'highlight' },] },
];
class FilterPipe {
    /**
     * @param {?} items
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    transform(items, field, value) {
        // check if value is present or not
        if (value) {
            // returns empty array if items are empty
            if (!items) {
                return [];
            }
            var /** @type {?} */ re = new RegExp(value, 'gi');
            // returns filtered items with regular expression re and searching the text
            return items.filter(it => it[field].toLowerCase().replace(re, "<mark>" + value.toLocaleLowerCase() + "</mark>").indexOf(value.toLowerCase()) > -1);
        }
        return items;
    }
}
FilterPipe.decorators = [
    { type: Pipe, args: [{
                name: 'FilterPipe',
            },] },
];

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
class WindowRef {
    /**
     * @return {?}
     */
    get nativeWindow() {
        return _window();
    }
}
WindowRef.decorators = [
    { type: Injectable },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class WkMultiselectModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: WkMultiselectModule,
            providers: [
                WindowRef
            ]
        };
    }
}
WkMultiselectModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule, FormsModule, NgbModule.forRoot()
                ],
                declarations: [WkMultiselectComponent, FilterPipe, HighlightPipe],
                exports: [WkMultiselectComponent]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { WkMultiselectComponent, WkMultiselectModule, WindowRef as ɵc, FilterPipe as ɵb, HighlightPipe as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2stbXVsdGlzZWxlY3QuanMubWFwIiwic291cmNlcyI6WyJuZzovL3drLW11bHRpc2VsZWN0L2xpYi93ay1tdWx0aXNlbGVjdC5jb21wb25lbnQudHMiLCJuZzovL3drLW11bHRpc2VsZWN0L2xpYi93ay1tdWx0aXNlbGVjdC5waXBlLnRzIiwibmc6Ly93ay1tdWx0aXNlbGVjdC9saWIvV2luZG93UmVmLnByb3ZpZGVyLnRzIiwibmc6Ly93ay1tdWx0aXNlbGVjdC9saWIvd2stbXVsdGlzZWxlY3QubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24sIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdiRHJvcGRvd25Db25maWcgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2tNdWx0aXNlbGVjdE1vZGVsIHtcbiAgdmFsdWU6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBjaGVja2VkPzogYm9vbGVhbjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnd2stbXVsdGlzZWxlY3QnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICAgICAgICAgIDxkaXYgbmdiRHJvcGRvd24gY2xhc3M9XCJkLWlubGluZS1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRyb3BidG4gYnRuIGJ0bi1kZWZhdWx0XCIgaWQ9XCJkcm9wZG93bkJhc2ljMVwiIG5nYkRyb3Bkb3duVG9nZ2xlPlxuICAgICAgICAgICAgICAgICAgICBUb2dnbGUgZHJvcGRvd24gKHt7Y2hhbmdlZCgpfX0pXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29tbW9uZ2x5cGhzIGNvbW1vbmdseXBocy1hcnJvdy1kb3duXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8ZGl2IG5nYkRyb3Bkb3duTWVudSBhcmlhLWxhYmVsbGVkYnk9XCJkcm9wZG93bkNvbmZpZ1wiIGNsYXNzPVwiZHJvcGRvd25jb250ZW50XCIgPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaC4uLlwiIGlkPVwibXlJbnB1dFwiIFsobmdNb2RlbCldPVwic2VhcmNoXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY3Vyc29yXCIgc3R5bGU9XCJ3aWR0aDoxMDAlO1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAoY2hhbmdlKT1cInNlbGVjdEFsbCgpO1wiIFsobmdNb2RlbCldPVwic2VsZWN0ZWRBbGxcIj4gIFNlbGVjdCBhbGxcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNjb2xsZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgdXNlciBvZiBpdGVtcyB8IEZpbHRlclBpcGU6ICduYW1lJyA6c2VhcmNoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9XCJ3aWR0aDoxMDAlO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgKGNoYW5nZSk9XCJjaGVja0lmQWxsU2VsZWN0ZWQoKVwiIFsobmdNb2RlbCldPVwidXNlci5jaGVja2VkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIFtpbm5lckhUTUxdPVwidXNlci5uYW1lIHwgaGlnaGxpZ2h0OnNlYXJjaFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIHdrLW11bHRpc2VsZWN0IC5kcm9wYnRuIHtcbiAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICAgICAgfVxuICAgICAgd2stbXVsdGlzZWxlY3QgI215SW5wdXQge1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxNHB4IDEycHg7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgcGFkZGluZzogMnB4IDIwcHggMnB4IDEzcHg7XG4gICAgICAgIHdpZHRoOiAyMzVweDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgfVxuICAgICAgd2stbXVsdGlzZWxlY3QgLmRyb3Bkb3duIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuICAgICAgd2stbXVsdGlzZWxlY3QgLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICBkaXNwbGF5Om5vbmU7XG5cbiAgICAgIH1cbiAgICAgIHdrLW11bHRpc2VsZWN0IC5kcm9wZG93bmNvbnRlbnQge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG4gICAgICB3ay1tdWx0aXNlbGVjdCAuc2NvbGxkaXYge1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICAgIHdrLW11bHRpc2VsZWN0IC5zY29sbGRpdiBwOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcbiAgICAgIH1cbiAgICAgIHdrLW11bHRpc2VsZWN0IHAge1xuICAgICAgICBwYWRkaW5nOiAxcHggNXB4O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgICB3ay1tdWx0aXNlbGVjdCAuY3Vyc29yIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgICAgd2stbXVsdGlzZWxlY3QgLmRyb3Bkb3duY29udGVudCAuY3Vyc29yIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkZGQ7XG4gICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZGRkO1xuICAgICAgfVxuICAgICAgd2stbXVsdGlzZWxlY3QgcCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDByZW07XG4gICAgICB9XG4gICAgICB3ay1tdWx0aXNlbGVjdCBsYWJlbCB7XG4gICAgICAgIHBhZGRpbmc6IDJweCA1cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgbWFyZ2luOiAwcmVtO1xuICAgICAgfVxuICAgICAgd2stbXVsdGlzZWxlY3QgbGFiZWwgLmhpZ2hsaWdodCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICB9XG4gICAgICB3ay1tdWx0aXNlbGVjdCAuc2VhcmNoaWNvbiB7XG4gICAgICAgIG1hcmdpbjogLTFweCA4cHggMHB4IC0yNHB4O1xuICAgICAgfVxuICAgICAgd2stbXVsdGlzZWxlY3QgLmRyb3Bkb3dtLW1lbnUge1xuICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAuZHJvcGRvd20tbWVudSB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICB9XG4gICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAzcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgICAgIH1cbiAgICAgIC5kcm9wZG93bS1tZW51IHtcbiAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgLmxlZnQtaW5uZXItYWRkb24ge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG4gICAgICAubGVmdC1pbm5lci1hZGRvbiBpbnB1dCB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICAgIH1cbiAgICAgIC5sZWZ0LWlubmVyLWFkZG9uIGkge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTJweDtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICB9XG4gICAgICAucmlnaHQtaW5uZXItYWRkb24ge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG4gICAgICAucmlnaHQtaW5uZXItYWRkb24gaW5wdXQge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgICAgfVxuICAgICAgLnJpZ2h0LWlubmVyLWFkZG9uIGkge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgIHBhZGRpbmc6IDBweCAxNnB4O1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIH1cbiAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgfVxuICAgICAgXG4gICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAzcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLyogd2lkdGggKi9cbiAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgIH1cbiAgICAgIC8qIFRyYWNrICovXG4gICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCBncmV5O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgfVxuICAgICAgLyogSGFuZGxlICovXG4gICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgYmFja2dyb3VuZDogZ3JheTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIH1cbiAgICAgIC8qIEhhbmRsZSBvbiBob3ZlciAqL1xuICAgICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IGdyYXk7XG4gICAgICB9XG4gICAgICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYyAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgOi1tb3otcGxhY2Vob2xkZXIge1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWMgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIDo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYyAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYyAhaW1wb3J0YW50O1xuICAgICAgfSAgICBcbiAgICBgXG4gIF0sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgV2tNdWx0aXNlbGVjdENvbXBvbmVudCB7XG5cbiAgc2VhcmNoOiBhbnk7XG4gIGNvdW50OiBudW1iZXI7XG4gIC8vIE11bHRpc2VsZWN0IG1vZGVsIGl0ZW1zXG4gIEBJbnB1dCgpIGl0ZW1zOiBBcnJheTxXa011bHRpc2VsZWN0TW9kZWw+ID0gW107XG4gIC8vIGVtaXQgZXZlbnQgTXVsdGlzZWxlY3QgbW9kZWwgaXRlbXMgd2hlbiBpdGVtIGlzIHNlbGVjdGVkXG4gIEBPdXRwdXQoKSBzZWxlY3RlZEl0ZW1zID0gbmV3IEV2ZW50RW1pdHRlcjxXa011bHRpc2VsZWN0TW9kZWxbXT4oKTtcbiAgc2VsZWN0ZWRBbGw6IGFueTtcbiAgY29uc3RydWN0b3IoY29uZmlnOiBOZ2JEcm9wZG93bkNvbmZpZykge1xuICAgIGNvbmZpZy5hdXRvQ2xvc2UgPSBmYWxzZTtcbiAgfVxuICBzZWxlY3RBbGwoKSB7XG4gICAgLy8gY2hlY2sgd2hldGhlciBpdGVtcyBhcmUgY2hlY2tlZCBhcmUgbm90XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLml0ZW1zW2ldLmNoZWNrZWQgPSB0aGlzLnNlbGVjdGVkQWxsO1xuICAgIH1cbiAgfVxuICBjaGVja0lmQWxsU2VsZWN0ZWQoKSB7XG4gICAgLy8gY2hlY2sgd2hldGhlciBldmVyeSBpdGVtIGlzIGNoZWNrZWQgYXJlIG5vdFxuICAgIHRoaXMuc2VsZWN0ZWRBbGwgPSB0aGlzLml0ZW1zLmV2ZXJ5KGZ1bmN0aW9uIChpdGVtOiBhbnkpIHtcbiAgICAgIHJldHVybiBpdGVtLmNoZWNrZWQgPT09IHRydWU7XG4gICAgfSk7XG4gIH1cbiAgY2hhbmdlZCgpIHtcbiAgICAvLyBzZXRzIHRoZSBjb3VudCB0byAwXG4gICAgdGhpcy5jb3VudCA9IDA7XG4gICAgdGhpcy5pdGVtcy5tYXAoaXRlbSA9PiB7XG4gICAgICBpZiAoaXRlbS5jaGVja2VkKSB7XG4gICAgICAgIHRoaXMuY291bnQgPSB0aGlzLmNvdW50ICsgMTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBnZXQgdGhlIGNvdW50IG9mIHNlbGVjdGVkIGl0ZW1zXG4gICAgLy8gZW1pdHMgZXZlbnQgd2l0aCB0aGUgY2hlY2tlZCBpdGVtc1xuICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5lbWl0KHRoaXMuaXRlbXMuZmlsdGVyKHggPT4geC5jaGVja2VkID09PSB0cnVlKSk7XG4gICAgcmV0dXJuIHRoaXMuY291bnQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGVUcmFuc2Zvcm0sIFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoeyBuYW1lOiAnaGlnaGxpZ2h0JyB9KVxuZXhwb3J0IGNsYXNzIEhpZ2hsaWdodFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHRleHQ6IHN0cmluZywgc2VhcmNoKTogc3RyaW5nIHtcbiAgICAvLyBjaGVjayBpZiBzZWFyY2ggdGV4dCBpcyBwYXNzZWQgb3Igbm90LCBpZiBwYXNzZWRcbiAgICAvL3JlcGxhY2Ugc2VhcmNoIHRleHQgd2l0aCBnaXZlbiByZWd1bGFyIGV4cHJlc3Npb25cbiAgICBpZiAoc2VhcmNoKSB7XG4gICAgICB2YXIgcGF0dGVybiA9IHNlYXJjaC5yZXBsYWNlKC9bXFwtXFxbXFxdXFwvXFx7XFx9XFwoXFwpXFwqXFwrXFw/XFwuXFxcXFxcXlxcJFxcfF0vZywgXCJcXFxcJCZcIik7XG4gICAgICAvLyBzcGxpdCBwYXR0ZXJuIHdpdGggZW1wdHkgc3BhY2VzIGFuZCBmaWx0ZXIgdGhlIHRleHQgd2l0aCBsZW5ndGggZ3JlYXRlciB0aGFuIHplcm9cbiAgICAgIC8vIGFuZCBqb2luIHRoZSB0ZXh0IHdpdGggcGlwZVxuICAgICAgcGF0dGVybiA9IHBhdHRlcm4uc3BsaXQoJyAnKS5maWx0ZXIoKHQpID0+IHtcbiAgICAgICAgcmV0dXJuIHQubGVuZ3RoID4gMDtcbiAgICAgIH0pLmpvaW4oJ3wnKTtcbiAgICAgIHZhciByZWdleCA9IG5ldyBSZWdFeHAocGF0dGVybiwgJ2dpJyk7XG4gICAgICAvLyBhcHBlbmQgdGhlIG1hdGNoIHRleHQgdG8gbGFiZWwgdGFnXG4gICAgICByZXR1cm4gc2VhcmNoID8gdGV4dC5yZXBsYWNlKHJlZ2V4LCAobWF0Y2gpID0+IGA8bGFiZWwgY2xhc3M9XCJoaWdobGlnaHRcIj4ke21hdGNofTwvbGFiZWw+YCkgOiB0ZXh0O1xuICAgIH1cbiAgICByZXR1cm4gdGV4dDtcbiAgfVxufVxuXG5AUGlwZSh7XG4gIG5hbWU6ICdGaWx0ZXJQaXBlJyxcbn0pXG5leHBvcnQgY2xhc3MgRmlsdGVyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oaXRlbXM6IGFueVtdLCBmaWVsZDogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogYW55W10ge1xuICAgIC8vIGNoZWNrIGlmIHZhbHVlIGlzIHByZXNlbnQgb3Igbm90XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAvLyByZXR1cm5zIGVtcHR5IGFycmF5IGlmIGl0ZW1zIGFyZSBlbXB0eVxuICAgICAgaWYgKCFpdGVtcykgeyByZXR1cm4gW107IH1cbiAgICAgIHZhciByZSA9IG5ldyBSZWdFeHAodmFsdWUsICdnaScpO1xuICAgICAgLy8gcmV0dXJucyBmaWx0ZXJlZCBpdGVtcyB3aXRoIHJlZ3VsYXIgZXhwcmVzc2lvbiByZSBhbmQgc2VhcmNoaW5nIHRoZSB0ZXh0XG4gICAgICByZXR1cm4gaXRlbXMuZmlsdGVyKGl0ID0+IGl0W2ZpZWxkXS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UocmUsIFwiPG1hcms+XCIgKyB2YWx1ZS50b0xvY2FsZUxvd2VyQ2FzZSgpICsgXCI8L21hcms+XCIpLmluZGV4T2YodmFsdWUudG9Mb3dlckNhc2UoKSkgPiAtMSk7XG4gICAgfVxuICAgIHJldHVybiBpdGVtcztcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5mdW5jdGlvbiBfd2luZG93KCkgOiBhbnkge1xuICAgLy8gcmV0dXJuIHRoZSBnbG9iYWwgbmF0aXZlIGJyb3dzZXIgd2luZG93IG9iamVjdFxuICAgcmV0dXJuIHdpbmRvdztcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFdpbmRvd1JlZiB7XG4gICBnZXQgbmF0aXZlV2luZG93KCkgOiBhbnkge1xuICAgICAgcmV0dXJuIF93aW5kb3coKTtcbiAgIH1cbn0iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRmlsdGVyUGlwZSwgSGlnaGxpZ2h0UGlwZSB9IGZyb20gJy4vd2stbXVsdGlzZWxlY3QucGlwZSc7XG5pbXBvcnQgeyBXa011bHRpc2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi93ay1tdWx0aXNlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnLi9XaW5kb3dSZWYucHJvdmlkZXInO1xuaW1wb3J0IHsgTmdiTW9kdWxlIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgTmdiTW9kdWxlLmZvclJvb3QoKVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtXa011bHRpc2VsZWN0Q29tcG9uZW50LCBGaWx0ZXJQaXBlLCBIaWdobGlnaHRQaXBlXSxcbiAgZXhwb3J0czogW1drTXVsdGlzZWxlY3RDb21wb25lbnRdXG59KVxuXG5leHBvcnQgY2xhc3MgV2tNdWx0aXNlbGVjdE1vZHVsZSB7XG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFdrTXVsdGlzZWxlY3RNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgV2luZG93UmVmXG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7SUEwTUUsWUFBWSxNQUF5Qjs7cUJBSk8sRUFBRTs7NkJBRXBCLElBQUksWUFBWSxFQUF3QjtRQUdoRSxNQUFNLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztLQUMxQjs7OztJQUNELFNBQVM7O1FBRVAsS0FBSyxxQkFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMs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