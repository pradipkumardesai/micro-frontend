/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
/**
 * @record
 */
export function WkMultiselectModel() { }
function WkMultiselectModel_tsickle_Closure_declarations() {
    /** @type {?} */
    WkMultiselectModel.prototype.value;
    /** @type {?} */
    WkMultiselectModel.prototype.name;
    /** @type {?|undefined} */
    WkMultiselectModel.prototype.checked;
}
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
export { WkMultiselectComponent };
function WkMultiselectComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    WkMultiselectComponent.prototype.search;
    /** @type {?} */
    WkMultiselectComponent.prototype.count;
    /** @type {?} */
    WkMultiselectComponent.prototype.items;
    /** @type {?} */
    WkMultiselectComponent.prototype.selectedItems;
    /** @type {?} */
    WkMultiselectComponent.prototype.selectedAll;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2stbXVsdGlzZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vd2stbXVsdGlzZWxlY3QvIiwic291cmNlcyI6WyJsaWIvd2stbXVsdGlzZWxlY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7Ozs7Ozs7Ozs7OztJQXlNN0QsZ0NBQVksTUFBeUI7O3FCQUpPLEVBQUU7OzZCQUVwQixJQUFJLFlBQVksRUFBd0I7UUFHaEUsTUFBTSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7S0FDMUI7Ozs7SUFDRCwwQ0FBUzs7O0lBQVQ7O1FBRUUsR0FBRyxDQUFDLENBQUMscUJBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUMzQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQzFDO0tBQ0Y7Ozs7SUFDRCxtREFBa0I7OztJQUFsQjs7UUFFRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsSUFBUztZQUNyRCxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUM7U0FDOUIsQ0FBQyxDQUFDO0tBQ0o7Ozs7SUFDRCx3Q0FBTzs7O0lBQVA7UUFBQSxpQkFZQzs7UUFWQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUEsSUFBSTtZQUNqQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDakIsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQzthQUM3QjtTQUNGLENBQUMsQ0FBQzs7O1FBR0gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsT0FBTyxLQUFLLElBQUksRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDLENBQUM7UUFDcEUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7S0FDbkI7O2dCQTVORixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFLHl3Q0FxQlQ7b0JBQ0QsTUFBTSxFQUFFO3dCQUNOLDQ3SEEySkM7cUJBQ0Y7b0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3RDOzs7O2dCQS9MUSxpQkFBaUI7Ozt3QkFxTXZCLEtBQUs7Z0NBRUwsTUFBTTs7aUNBeE1UOztTQWlNYSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nYkRyb3Bkb3duQ29uZmlnIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFdrTXVsdGlzZWxlY3RNb2RlbCB7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgY2hlY2tlZD86IGJvb2xlYW47XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3drLW11bHRpc2VsZWN0JyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgICAgICAgICA8ZGl2IG5nYkRyb3Bkb3duIGNsYXNzPVwiZC1pbmxpbmUtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkcm9wYnRuIGJ0biBidG4tZGVmYXVsdFwiIGlkPVwiZHJvcGRvd25CYXNpYzFcIiBuZ2JEcm9wZG93blRvZ2dsZT5cbiAgICAgICAgICAgICAgICAgICAgVG9nZ2xlIGRyb3Bkb3duICh7e2NoYW5nZWQoKX19KVxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbW1vbmdseXBocyBjb21tb25nbHlwaHMtYXJyb3ctZG93blwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPGRpdiBuZ2JEcm9wZG93bk1lbnUgYXJpYS1sYWJlbGxlZGJ5PVwiZHJvcGRvd25Db25maWdcIiBjbGFzcz1cImRyb3Bkb3duY29udGVudFwiID5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2guLi5cIiBpZD1cIm15SW5wdXRcIiBbKG5nTW9kZWwpXT1cInNlYXJjaFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImN1cnNvclwiIHN0eWxlPVwid2lkdGg6MTAwJTtcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgKGNoYW5nZSk9XCJzZWxlY3RBbGwoKTtcIiBbKG5nTW9kZWwpXT1cInNlbGVjdGVkQWxsXCI+ICBTZWxlY3QgYWxsXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzY29sbGRpdlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IHVzZXIgb2YgaXRlbXMgfCBGaWx0ZXJQaXBlOiAnbmFtZScgOnNlYXJjaFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPVwid2lkdGg6MTAwJTtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIChjaGFuZ2UpPVwiY2hlY2tJZkFsbFNlbGVjdGVkKClcIiBbKG5nTW9kZWwpXT1cInVzZXIuY2hlY2tlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cInVzZXIubmFtZSB8IGhpZ2hsaWdodDpzZWFyY2hcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICB3ay1tdWx0aXNlbGVjdCAuZHJvcGJ0biB7XG4gICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgICAgIH1cbiAgICAgIHdrLW11bHRpc2VsZWN0ICNteUlucHV0IHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTRweCAxMnB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIHBhZGRpbmc6IDJweCAyMHB4IDJweCAxM3B4O1xuICAgICAgICB3aWR0aDogMjM1cHg7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIH1cbiAgICAgIHdrLW11bHRpc2VsZWN0IC5kcm9wZG93biB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cbiAgICAgIHdrLW11bHRpc2VsZWN0IC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgZGlzcGxheTpub25lO1xuXG4gICAgICB9XG4gICAgICB3ay1tdWx0aXNlbGVjdCAuZHJvcGRvd25jb250ZW50IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuICAgICAgd2stbXVsdGlzZWxlY3QgLnNjb2xsZGl2IHtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgICB3ay1tdWx0aXNlbGVjdCAuc2NvbGxkaXYgcDpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG4gICAgICB9XG4gICAgICB3ay1tdWx0aXNlbGVjdCBwIHtcbiAgICAgICAgcGFkZGluZzogMXB4IDVweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgICAgd2stbXVsdGlzZWxlY3QgLmN1cnNvciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICAgIHdrLW11bHRpc2VsZWN0IC5kcm9wZG93bmNvbnRlbnQgLmN1cnNvciB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGRkO1xuICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgI2RkZDtcbiAgICAgIH1cbiAgICAgIHdrLW11bHRpc2VsZWN0IHAge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcmVtO1xuICAgICAgfVxuICAgICAgd2stbXVsdGlzZWxlY3QgbGFiZWwge1xuICAgICAgICBwYWRkaW5nOiAycHggNXB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIG1hcmdpbjogMHJlbTtcbiAgICAgIH1cbiAgICAgIHdrLW11bHRpc2VsZWN0IGxhYmVsIC5oaWdobGlnaHQge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgfVxuICAgICAgd2stbXVsdGlzZWxlY3QgLnNlYXJjaGljb24ge1xuICAgICAgICBtYXJnaW46IC0xcHggOHB4IDBweCAtMjRweDtcbiAgICAgIH1cbiAgICAgIHdrLW11bHRpc2VsZWN0IC5kcm9wZG93bS1tZW51IHtcbiAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgLmRyb3Bkb3dtLW1lbnUge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgfVxuICAgICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgM3B4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gICAgICB9XG4gICAgICAuZHJvcGRvd20tbWVudSB7XG4gICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIC5sZWZ0LWlubmVyLWFkZG9uIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuICAgICAgLmxlZnQtaW5uZXItYWRkb24gaW5wdXQge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgICB9XG4gICAgICAubGVmdC1pbm5lci1hZGRvbiBpIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgfVxuICAgICAgLnJpZ2h0LWlubmVyLWFkZG9uIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuICAgICAgLnJpZ2h0LWlubmVyLWFkZG9uIGlucHV0IHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgICAgIH1cbiAgICAgIC5yaWdodC1pbm5lci1hZGRvbiBpIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMHB4O1xuICAgICAgICBwYWRkaW5nOiAwcHggMTZweDtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICB9XG4gICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgM3B4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8qIHdpZHRoICovXG4gICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICB9XG4gICAgICAvKiBUcmFjayAqL1xuICAgICAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggZ3JleTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIH1cbiAgICAgIC8qIEhhbmRsZSAqL1xuICAgICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgIGJhY2tncm91bmQ6IGdyYXk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICB9XG4gICAgICAvKiBIYW5kbGUgb24gaG92ZXIgKi9cbiAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiBncmF5O1xuICAgICAgfVxuICAgICAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICA6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWMgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIDotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICA6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWMgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWMgIWltcG9ydGFudDtcbiAgICAgIH0gICAgXG4gICAgYFxuICBdLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFdrTXVsdGlzZWxlY3RDb21wb25lbnQge1xuXG4gIHNlYXJjaDogYW55O1xuICBjb3VudDogbnVtYmVyO1xuICAvLyBNdWx0aXNlbGVjdCBtb2RlbCBpdGVtc1xuICBASW5wdXQoKSBpdGVtczogQXJyYXk8V2tNdWx0aXNlbGVjdE1vZGVsPiA9IFtdO1xuICAvLyBlbWl0IGV2ZW50IE11bHRpc2VsZWN0IG1vZGVsIGl0ZW1zIHdoZW4gaXRlbSBpcyBzZWxlY3RlZFxuICBAT3V0cHV0KCkgc2VsZWN0ZWRJdGVtcyA9IG5ldyBFdmVudEVtaXR0ZXI8V2tNdWx0aXNlbGVjdE1vZGVsW10+KCk7XG4gIHNlbGVjdGVkQWxsOiBhbnk7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogTmdiRHJvcGRvd25Db25maWcpIHtcbiAgICBjb25maWcuYXV0b0Nsb3NlID0gZmFsc2U7XG4gIH1cbiAgc2VsZWN0QWxsKCkge1xuICAgIC8vIGNoZWNrIHdoZXRoZXIgaXRlbXMgYXJlIGNoZWNrZWQgYXJlIG5vdFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5pdGVtc1tpXS5jaGVja2VkID0gdGhpcy5zZWxlY3RlZEFsbDtcbiAgICB9XG4gIH1cbiAgY2hlY2tJZkFsbFNlbGVjdGVkKCkge1xuICAgIC8vIGNoZWNrIHdoZXRoZXIgZXZlcnkgaXRlbSBpcyBjaGVja2VkIGFyZSBub3RcbiAgICB0aGlzLnNlbGVjdGVkQWxsID0gdGhpcy5pdGVtcy5ldmVyeShmdW5jdGlvbiAoaXRlbTogYW55KSB7XG4gICAgICByZXR1cm4gaXRlbS5jaGVja2VkID09PSB0cnVlO1xuICAgIH0pO1xuICB9XG4gIGNoYW5nZWQoKSB7XG4gICAgLy8gc2V0cyB0aGUgY291bnQgdG8gMFxuICAgIHRoaXMuY291bnQgPSAwO1xuICAgIHRoaXMuaXRlbXMubWFwKGl0ZW0gPT4ge1xuICAgICAgaWYgKGl0ZW0uY2hlY2tlZCkge1xuICAgICAgICB0aGlzLmNvdW50ID0gdGhpcy5jb3VudCArIDE7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gZ2V0IHRoZSBjb3VudCBvZiBzZWxlY3RlZCBpdGVtc1xuICAgIC8vIGVtaXRzIGV2ZW50IHdpdGggdGhlIGNoZWNrZWQgaXRlbXNcbiAgICB0aGlzLnNlbGVjdGVkSXRlbXMuZW1pdCh0aGlzLml0ZW1zLmZpbHRlcih4ID0+IHguY2hlY2tlZCA9PT0gdHJ1ZSkpO1xuICAgIHJldHVybiB0aGlzLmNvdW50O1xuICB9XG59XG4iXX0=