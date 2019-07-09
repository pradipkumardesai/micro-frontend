/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, ContentChildren, QueryList, Directive, TemplateRef, ContentChild, ViewChild, Output, EventEmitter, } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
;
var /** @type {?} */ nextId = 0;
/**
 * This directive should be used to wrap tab titles that need to contain HTML markup or other directives.
 */
var WizardTabTitle = /** @class */ (function () {
    function WizardTabTitle(templateRef) {
        this.templateRef = templateRef;
    }
    WizardTabTitle.decorators = [
        { type: Directive, args: [{ selector: 'ng-template[wizardTabTitle]' },] },
    ];
    /** @nocollapse */
    WizardTabTitle.ctorParameters = function () { return [
        { type: TemplateRef, },
    ]; };
    return WizardTabTitle;
}());
export { WizardTabTitle };
function WizardTabTitle_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    WizardTabTitle.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    WizardTabTitle.ctorParameters;
    /** @type {?} */
    WizardTabTitle.prototype.templateRef;
}
/**
 * This directive must be used to wrap content to be displayed in a tab.
 */
var WizardTabContent = /** @class */ (function () {
    function WizardTabContent(templateRef) {
        this.templateRef = templateRef;
    }
    WizardTabContent.decorators = [
        { type: Directive, args: [{ selector: 'ng-template[wizardTabContent]' },] },
    ];
    /** @nocollapse */
    WizardTabContent.ctorParameters = function () { return [
        { type: TemplateRef, },
    ]; };
    return WizardTabContent;
}());
export { WizardTabContent };
function WizardTabContent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    WizardTabContent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    WizardTabContent.ctorParameters;
    /** @type {?} */
    WizardTabContent.prototype.templateRef;
}
/**
 * A directive representing an individual tab.
 */
var WizardTab = /** @class */ (function () {
    function WizardTab() {
        /**
         * Unique tab identifier. Must be unique for the entire document for proper accessibility support.
         */
        this.id = "wizard-tab-" + nextId++;
        this.complete = false;
    }
    WizardTab.decorators = [
        { type: Directive, args: [{ selector: 'wizard-tab' },] },
    ];
    /** @nocollapse */
    WizardTab.ctorParameters = function () { return []; };
    WizardTab.propDecorators = {
        "id": [{ type: Input },],
        "title": [{ type: Input },],
        "complete": [{ type: Input },],
        "contentTpl": [{ type: ContentChild, args: [WizardTabContent,] },],
        "titleTpl": [{ type: ContentChild, args: [WizardTabTitle,] },],
    };
    return WizardTab;
}());
export { WizardTab };
function WizardTab_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    WizardTab.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    WizardTab.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    WizardTab.propDecorators;
    /**
     * Unique tab identifier. Must be unique for the entire document for proper accessibility support.
     * @type {?}
     */
    WizardTab.prototype.id;
    /**
     * Simple (string only) title. Use the "NgbTabTitle" directive for more complex use-cases.
     * @type {?}
     */
    WizardTab.prototype.title;
    /**
     * boolean flag for checking the wizard state complete.
     * @type {?}
     */
    WizardTab.prototype.complete;
    /** @type {?} */
    WizardTab.prototype.contentTpl;
    /** @type {?} */
    WizardTab.prototype.titleTpl;
}
/**
 * The payload of the change event fired right before the tab change
 * @record
 */
export function WizardChangeEvent() { }
function WizardChangeEvent_tsickle_Closure_declarations() {
    /**
     * Id of the currently active tab
     * @type {?}
     */
    WizardChangeEvent.prototype.activeId;
    /**
     * Id of the newly selected tab
     * @type {?|undefined}
     */
    WizardChangeEvent.prototype.nextId;
    /**
     * Function that will prevent tab switch if called
     * @type {?|undefined}
     */
    WizardChangeEvent.prototype.preventDefault;
}
/**
 * A component that makes it easy to create tabbed interface.
 */
var WizardTabset = /** @class */ (function () {
    function WizardTabset(modalService) {
        this.modalService = modalService;
        /**
         * A tab change event fired right before the tab selection happens. See WizardChangeEvent for payload details
         */
        this.wizardChange = new EventEmitter();
        /**
         * A tab change event fired after next button is clicked. See WizardChangeEvent for payload details
         */
        this.nextHandler = new EventEmitter();
        /**
         * A tab change event fired after previous button is clicked. See WizardChangeEvent for payload details
         */
        this.prevHandler = new EventEmitter();
        /**
         * A tab change event fired after finish later button is clicked. See WizardChangeEvent for payload details
         */
        this.finishLaterHandler = new EventEmitter();
        /**
         * A tab change event fired after finish button is clicked. See WizardChangeEvent for payload details
         */
        this.submitHandler = new EventEmitter();
        /**
         * A tab change event fired after cancel button is clicked. See WizardChangeEvent for payload details
         */
        this.cancelHandler = new EventEmitter();
    }
    /**
     * Selects the tab with the given id and shows its associated pane.
     * Any other tab that was previously selected becomes unselected and its associated pane is hidden.
     */
    /**
     * Selects the tab with the given id and shows its associated pane.
     * Any other tab that was previously selected becomes unselected and its associated pane is hidden.
     * @param {?} tabId
     * @return {?}
     */
    WizardTabset.prototype.select = /**
     * Selects the tab with the given id and shows its associated pane.
     * Any other tab that was previously selected becomes unselected and its associated pane is hidden.
     * @param {?} tabId
     * @return {?}
     */
    function (tabId) {
        var /** @type {?} */ selectedTab = this._getTabById(tabId);
        if (selectedTab && this.activeId !== selectedTab.id) {
            var /** @type {?} */ defaultPrevented_1 = false;
            this.wizardChange.emit({ activeId: this.activeId, nextId: selectedTab.id, preventDefault: function () { defaultPrevented_1 = true; } });
            if (!defaultPrevented_1) {
                this.activeId = selectedTab.id;
            }
        }
    };
    /**
     * @param {?} step
     * @return {?}
     */
    WizardTabset.prototype._goToThisStep = /**
     * @param {?} step
     * @return {?}
     */
    function (step) {
        var /** @type {?} */ to = "wizard-tab-" + ((+step.match(/\d+/g)[0]) + 1);
        while (to !== this.activeId) {
            this.prevStep();
        }
        if (to === this.activeId) {
            this.prevStep();
        }
    };
    // checks whether the step is in last tab or not
    /**
     * @return {?}
     */
    WizardTabset.prototype.isLastStep = /**
     * @return {?}
     */
    function () {
        if (!this.tabs) {
            return false;
        }
        return this.activeId === this.tabs.last.id;
    };
    // checks whether the step is not in first tab
    /**
     * @return {?}
     */
    WizardTabset.prototype.isNotFirst = /**
     * @return {?}
     */
    function () {
        if (!this.tabs) {
            return false;
        }
        return this.activeId !== this.tabs.first.id;
    };
    // event handler moving the step to next tab
    /**
     * @return {?}
     */
    WizardTabset.prototype.nextStep = /**
     * @return {?}
     */
    function () {
        this._getTabById(this.activeId).complete = true;
        this.select("wizard-tab-" + ((+this.activeId.match(/\d+/g)[0]) + 1));
        this.nextHandler.emit({
            activeId: this.activeId
        });
    };
    // event handler moving the step to previous tab
    /**
     * @return {?}
     */
    WizardTabset.prototype.prevStep = /**
     * @return {?}
     */
    function () {
        this.select("wizard-tab-" + ((+this.activeId.match(/\d+/g)[0]) - 1));
        this._getTabById(this.activeId).complete = false;
        this.prevHandler.emit({
            activeId: this.activeId
        });
    };
    // event handler for submitting with the active tab
    /**
     * @return {?}
     */
    WizardTabset.prototype.submitStep = /**
     * @return {?}
     */
    function () {
        this.submitHandler.emit({
            activeId: this.activeId
        });
    };
    // event handler for finishing with the active tab
    /**
     * @return {?}
     */
    WizardTabset.prototype.finishLaterStep = /**
     * @return {?}
     */
    function () {
        this.finishLaterHandler.emit({
            activeId: this.activeId
        });
    };
    // when cancel wizard is clicked, modal is poped with the confirmation to reset the wizard
    /**
     * @return {?}
     */
    WizardTabset.prototype.cancelStep = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.modalService.open(this.content, { centered: true }).result.then(function (result) {
            _this.select(_this.tabs.first.id);
            _this.tabs.forEach(function (tab) {
                tab.complete = false;
            });
            _this.cancelHandler.emit({
                activeId: _this.activeId
            });
        }, function (reason) {
            _this.getDismissReason(reason);
        });
    };
    /**
     * @param {?} reason
     * @return {?}
     */
    WizardTabset.prototype.getDismissReason = /**
     * @param {?} reason
     * @return {?}
     */
    function (reason) {
        this.cancelHandler.emit({
            activeId: this.activeId
        });
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    /**
     * @return {?}
     */
    WizardTabset.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        // auto-correct activeId that might have been set incorrectly as input
        var /** @type {?} */ activeTab = this._getTabById(this.activeId);
        this.activeId = activeTab ? activeTab.id : (this.tabs.length ? this.tabs.first.id : null);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    WizardTabset.prototype._getTabById = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        var /** @type {?} */ tabsWithId = this.tabs.filter(function (tab) { return tab.id === id; });
        return tabsWithId.length ? tabsWithId[0] : null;
    };
    WizardTabset.decorators = [
        { type: Component, args: [{
                    selector: 'wizard-tabset',
                    exportAs: 'wizardTabset',
                    styles: ["\n    .wizard {\n      margin: 0;\n      padding: 0;\n      list-style: none;\n    }\n    .wizard-wrap-horizontal .wizard {\n      display: table;\n      width: 75%;\n      margin: 0 auto;\n      margin-bottom: 10px;\n    }\n    .wizard-wrap-horizontal .wizard .wizard-item {\n      display: table-cell;\n      list-style-type: none;\n      position: relative;\n      vertical-align: top;\n    }\n    .wizard-wrap-vertical {\n      display: table;\n      width: 100%;\n      position: relative;\n      margin-bottom: 20px;\n    }\n    .wizard-wrap-vertical .wizard {\n      display: table-cell;\n      vertical-align: middle;\n      width: 100px;\n    }\n    .wizard-wrap-vertical .wizard .wizard-item {\n      display: inline-block;\n      list-style-type: none;\n      position: relative;\n    }\n    .wizard-wrap-vertical .wizard-content {\n      display: table-cell;\n    }\n    .wizard-vertical .wizard-item {\n      width: 100px;\n    }\n    .wizard .wizard-item .wizard-link {\n      display: block;\n      position: relative;\n      cursor: text;\n    }\n    .wizard-vertical .wizard-item .wizard-link {\n      padding-bottom: 2rem;\n    }\n    .wizard-vertical .wizard-item:first-child .wizard-link {\n      padding-top: 2rem;\n    }\n    .wizard .wizard-item .wizard-link:after {\n      content: \"\";\n      position: absolute;\n      background-color: #ededed;\n    }\n    .wizard-horizontal .wizard-item .wizard-link:after {\n      width: 100%;\n      height: 1px;\n      left: 0;\n      top: 16px;\n    }\n    .wizard-vertical .wizard-item .wizard-link:after {\n      width: 1px;\n      height: 100%;\n      left: 16px;\n      top: 0px;\n    }\n    .wizard .wizard-item .wizard-link:hover {\n      text-decoration: none;\n    }\n    .wizard .wizard-item .wizard-link .wizard-count-wrap {\n      text-align: center;\n      margin-bottom: 8px;\n    }\n    .wizard .wizard-item .wizard-link .wizard-title-text-wrap {\n      color: #3f3f3f;\n      text-align: center;\n    }\n    .wizard-vertical .wizard-item .wizard-link .wizard-count-wrap, .wizard-vertical .wizard-item .wizard-link .wizard-title-text-wrap {\n      display: inline-block;\n      margin-bottom: 0;\n      margin-right: 8px;\n\n    }\n    .wizard .wizard-item .wizard-link .wizard-count-wrap .wizard-count {\n      color: #474747;\n      background: #ededed;\n      width: 32px;\n      height: 32px;\n      display: inline-block;\n      border: 1px solid #ededed;\n      line-height: 30px;\n      border-radius: 50%;\n      position: relative;\n      text-align: center;\n      z-index: 99;\n    }\n    .wizard .wizard-item .wizard-link.active .wizard-count-wrap .wizard-count {\n      background: #007ac3;\n      color: #fff;\n    }\n    .wizard .wizard-item .wizard-link.complete .wizard-count-wrap .wizard-count {\n      color: #fff;\n      background: #85bc20;\n    }\n    .wizard-content {\n      background-color: #ededed;\n      width: 100%;\n      min-height: 400px;\n      margin-bottom: 20px;\n    }\n    .wizard-content .wizard-pane {\n      padding: 20px;\n    }\n    .wizard-title-text-wrap {\n      position: relative;\n      z-index: 99;\n    }\n    @media (max-width: 350px) {\n      .wizard-vertical .wizard-item {\n        width: 70px;\n      }\n    }\n    .wk-wizard-finish-later,\n.wk-wizard-cancel {\n  padding-left: 0.75rem !important;\n  position: unset !important;\n}\n\n.wk-wizard-prev-step {\n  position: relative;\n  padding-left: 50px;\n  &[disabled] {\n    cursor: not-allowed;\n    background-color: #dadada !important;\n    color: black !important;\n    border-color: #dadada !important;\n    .coomonglyphs {\n      background-color: rgba(255, 255, 255, .2);\n      border-color: rgba(255, 255, 255, .2);\n    }\n    &:hover {\n      background-color: #bfbfbf !important;\n      border-color: #bfbfbf !important;\n    }\n  }\n  .commonglyphs {\n    position: absolute;\n    left: -1px;\n    top: -1px;\n    padding: 0.375rem 0.75rem;\n    background-color: rgba(255, 255, 255, .2);\n    border-color: rgba(255, 255, 255, .2);\n    height: 35px;\n  }\n}\n  "],
                    template: "\n  <div [class]=\"'wizard-wrap-' + orientation\">\n      <ul [class]=\"'wizard wizard-' + orientation\">\n          <li class=\"wizard-item\" *ngFor=\"let tab of tabs; let i = index;\">\n              <a [id]=\"tab.id\" class=\"wizard-link\" (click)=\"$event.preventDefault();\" [class.complete]=\"tab.complete\" [class.active]=\"tab.id === activeId\" href>\n                  <div class=\"wizard-count-wrap\">\n                      <span class=\"wizard-count\" *ngIf=\"!tab.complete\">{{i + 1}}</span>\n                      <span class=\"wizard-count\" *ngIf=\"tab.complete\" (click)=\"_goToThisStep(tab.id)\">\n                          <span class=\"commonglyphs commonglyphs-check\"></span>\n                      </span>\n                  </div>\n                  <div class=\"wizard-title-text-wrap\">\n                      <span class=\"wizard-title-text\">\n                          {{tab.title}}\n                          <ng-template [ngTemplateOutlet]=\"tab.titleTpl?.templateRef\"></ng-template>\n                      </span>\n                  </div>\n              </a>\n          </li>\n      </ul>\n      <div class=\"wizard-content\">\n          <ng-template ngFor let-tab [ngForOf]=\"tabs\">\n              <div class=\"wizard-pane {{tab.id === activeId ? 'active' : null}}\" *ngIf=\"tab.id === activeId\">\n                  <ng-template [ngTemplateOutlet]=\"tab.contentTpl.templateRef\"></ng-template>\n              </div>\n          </ng-template>\n      </div>\n  </div>\n  <div class=\"text-right\" *ngIf=\"showButtons\">\n      <button type=\"button\" class=\"btn btn-default cancel-step\" [disabled]=\"!isNotFirst()\" (click)=\"cancelStep()\">Cancel</button>\n      <button type=\"button\" class=\"btn btn-default\" [disabled]=\"!isNotFirst()\" (click)=\"finishLaterStep()\">Finish Later</button>\n      <button type=\"button\" class=\"btn btn-default prev-step\" [disabled]=\"!isNotFirst()\" (click)=\"prevStep()\">\n          <span class=\"commonglyphs commonglyphs-arrow-left\"></span>Previous\n      </button>\n      <button type=\"button\" class=\"btn btn-primary next-step\" *ngIf=\"!isLastStep()\" (click)=\"nextStep()\">\n          Next\n          <span class=\"commonglyphs commonglyphs-arrow-right\"></span>\n      </button>\n      <button type=\"button\" class=\"btn btn-primary submit-step\" *ngIf=\"isLastStep()\" (click)=\"submitStep()\">Finish</button>\n  </div>\n  <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n      <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Wizard</h4>\n          <span class=\"commonglyphs commonglyphs-close pull-right modal-close\" aria-label=\"Close\" (click)=\"d('Cross click')\"></span>\n      </div>\n      <div class=\"modal-body\">\n          <p>Your data will be lost, do you still want to cancel?</p>\n      </div>\n      <div class=\"modal-footer\">\n          <button class=\"btn btn-secondary\" type=\"button\" (click)=\"d('Close click')\">No</button>\n          <button class=\"btn btn-primary\" type=\"button\" (click)=\"c('Close click')\">Yes</button>\n      </div>\n  </ng-template>\n  "
                },] },
    ];
    /** @nocollapse */
    WizardTabset.ctorParameters = function () { return [
        { type: NgbModal, },
    ]; };
    WizardTabset.propDecorators = {
        "showButtons": [{ type: Input },],
        "tabs": [{ type: ContentChildren, args: [WizardTab,] },],
        "activeId": [{ type: Input },],
        "orientation": [{ type: Input },],
        "wizardChange": [{ type: Output },],
        "nextHandler": [{ type: Output },],
        "prevHandler": [{ type: Output },],
        "finishLaterHandler": [{ type: Output },],
        "submitHandler": [{ type: Output },],
        "cancelHandler": [{ type: Output },],
        "content": [{ type: ViewChild, args: ['content',] },],
    };
    return WizardTabset;
}());
export { WizardTabset };
function WizardTabset_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    WizardTabset.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    WizardTabset.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    WizardTabset.propDecorators;
    /** @type {?} */
    WizardTabset.prototype.showButtons;
    /** @type {?} */
    WizardTabset.prototype.tabs;
    /**
     * An identifier of an initially selected (active) tab. Use the "select" method to switch a tab programmatically.
     * @type {?}
     */
    WizardTabset.prototype.activeId;
    /**
     * The orientation of the nav (horizontal or vertical).
     * The default value is 'horizontal'.
     * @type {?}
     */
    WizardTabset.prototype.orientation;
    /**
     * A tab change event fired right before the tab selection happens. See WizardChangeEvent for payload details
     * @type {?}
     */
    WizardTabset.prototype.wizardChange;
    /**
     * A tab change event fired after next button is clicked. See WizardChangeEvent for payload details
     * @type {?}
     */
    WizardTabset.prototype.nextHandler;
    /**
     * A tab change event fired after previous button is clicked. See WizardChangeEvent for payload details
     * @type {?}
     */
    WizardTabset.prototype.prevHandler;
    /**
     * A tab change event fired after finish later button is clicked. See WizardChangeEvent for payload details
     * @type {?}
     */
    WizardTabset.prototype.finishLaterHandler;
    /**
     * A tab change event fired after finish button is clicked. See WizardChangeEvent for payload details
     * @type {?}
     */
    WizardTabset.prototype.submitHandler;
    /**
     * A tab change event fired after cancel button is clicked. See WizardChangeEvent for payload details
     * @type {?}
     */
    WizardTabset.prototype.cancelHandler;
    /** @type {?} */
    WizardTabset.prototype.content;
    /** @type {?} */
    WizardTabset.prototype.modalService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2std2l6YXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3drLXdpemFyZC8iLCJzb3VyY2VzIjpbImxpYi93ay13aXphcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxlQUFlLEVBQ2YsU0FBUyxFQUNULFNBQVMsRUFDVCxXQUFXLEVBQ1gsWUFBWSxFQUNaLFNBQVMsRUFFVCxNQUFNLEVBQ04sWUFBWSxHQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUFBLENBQUM7QUFFNUUscUJBQUksTUFBTSxHQUFHLENBQUMsQ0FBQzs7Ozs7SUFPYix3QkFBbUIsV0FBNkI7UUFBN0IsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO0tBQUs7O2dCQUZ0RCxTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsNkJBQTZCLEVBQUU7Ozs7Z0JBZHBELFdBQVc7O3lCQU5iOztTQXFCYSxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7O0lBU3pCLDBCQUFtQixXQUE2QjtRQUE3QixnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7S0FBSzs7Z0JBRnRELFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSwrQkFBK0IsRUFBRTs7OztnQkF0QnRELFdBQVc7OzJCQU5iOztTQTZCYSxnQkFBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7SUEwQjNCOzs7O2tCQWRzQixnQkFBYyxNQUFNLEVBQUk7UUFlNUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7S0FDdkI7O2dCQXJCRixTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFOzs7Ozt1QkFLbEMsS0FBSzswQkFJTCxLQUFLOzZCQUlMLEtBQUs7K0JBR0wsWUFBWSxTQUFDLGdCQUFnQjs2QkFDN0IsWUFBWSxTQUFDLGNBQWM7O29CQXJEOUI7O1NBcUNhLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXlUcEIsc0JBQW9CLFlBQXNCO1FBQXRCLGlCQUFZLEdBQVosWUFBWSxDQUFVOzs7OzRCQTlCakIsSUFBSSxZQUFZLEVBQXFCOzs7OzJCQUt0QyxJQUFJLFlBQVksRUFBcUI7Ozs7MkJBS3JDLElBQUksWUFBWSxFQUFxQjs7OztrQ0FLOUIsSUFBSSxZQUFZLEVBQXFCOzs7OzZCQUsxQyxJQUFJLFlBQVksRUFBcUI7Ozs7NkJBS3JDLElBQUksWUFBWSxFQUFxQjtLQUtoQjtJQUUvQzs7O09BR0c7Ozs7Ozs7SUFDSCw2QkFBTTs7Ozs7O0lBQU4sVUFBTyxLQUFhO1FBQ2xCLHFCQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3BELHFCQUFJLGtCQUFnQixHQUFHLEtBQUssQ0FBQztZQUU3QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FDcEIsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUFDLEVBQUUsRUFBRSxjQUFjLEVBQUUsY0FBUSxrQkFBZ0IsR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUUzRyxFQUFFLENBQUMsQ0FBQyxDQUFDLGtCQUFnQixDQUFDLENBQUMsQ0FBQztnQkFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUMsRUFBRSxDQUFDO2FBQ2hDO1NBQ0Y7S0FDRjs7Ozs7SUFDRCxvQ0FBYTs7OztJQUFiLFVBQWMsSUFBSTtRQUNoQixxQkFBSSxFQUFFLEdBQUcsaUJBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUUsQ0FBQztRQUV0RCxPQUFPLEVBQUUsS0FBSyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDNUIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ2pCO1FBRUQsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNqQjtLQUNGO0lBQ0QsZ0RBQWdEOzs7O0lBQ2hELGlDQUFVOzs7SUFBVjtRQUNFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDZixNQUFNLENBQUMsS0FBSyxDQUFDO1NBQ2Q7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7S0FDNUM7SUFDRCw4Q0FBOEM7Ozs7SUFDOUMsaUNBQVU7OztJQUFWO1FBQ0UsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNmLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDZDtRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztLQUM3QztJQUNELDRDQUE0Qzs7OztJQUM1QywrQkFBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hELElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFFLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztZQUNwQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDeEIsQ0FBQyxDQUFDO0tBQ0o7SUFDRCxnREFBZ0Q7Ozs7SUFDaEQsK0JBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBYyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUUsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFDcEIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQ3hCLENBQUMsQ0FBQztLQUNKO0lBQ0QsbURBQW1EOzs7O0lBQ25ELGlDQUFVOzs7SUFBVjtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO1lBQ3RCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtTQUN4QixDQUFDLENBQUM7S0FDSjtJQUNELGtEQUFrRDs7OztJQUNsRCxzQ0FBZTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDO1lBQzNCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtTQUN4QixDQUFDLENBQUM7S0FDSjtJQUNELDBGQUEwRjs7OztJQUMxRixpQ0FBVTs7O0lBQVY7UUFBQSxpQkFZQztRQVhDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBTTtZQUMxRSxLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2hDLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRztnQkFDbkIsR0FBRyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7YUFDdEIsQ0FBQyxDQUFDO1lBQ0gsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7Z0JBQ3RCLFFBQVEsRUFBRSxLQUFJLENBQUMsUUFBUTthQUN4QixDQUFDLENBQUM7U0FDSixFQUFFLFVBQUMsTUFBTTtZQUNSLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMvQixDQUFDLENBQUM7S0FDSjs7Ozs7SUFFTyx1Q0FBZ0I7Ozs7Y0FBQyxNQUFXO1FBQ2xDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO1lBQ3RCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtTQUN4QixDQUFDLENBQUM7UUFDSCxFQUFFLENBQUMsQ0FBQyxNQUFNLEtBQUssbUJBQW1CLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN2QyxNQUFNLENBQUMsaUJBQWlCLENBQUM7U0FDMUI7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLG1CQUFtQixDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDekQsTUFBTSxDQUFDLDJCQUEyQixDQUFDO1NBQ3BDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsV0FBUyxNQUFRLENBQUM7U0FDMUI7Ozs7O0lBR0gsNENBQXFCOzs7SUFBckI7O1FBRUUscUJBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzNGOzs7OztJQUVPLGtDQUFXOzs7O2NBQUMsRUFBVTtRQUM1QixxQkFBSSxVQUFVLEdBQWdCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQWIsQ0FBYSxDQUFDLENBQUM7UUFDckUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDOzs7Z0JBdlhuRCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFFBQVEsRUFBRSxjQUFjO29CQUN4QixNQUFNLEVBQUUsQ0FBQyxtK0hBNkpSLENBQUM7b0JBQ0YsUUFBUSxFQUFFLHVpR0FxRFQ7aUJBQ0Y7Ozs7Z0JBN1JRLFFBQVE7OztnQ0FnU2QsS0FBSzt5QkFHTCxlQUFlLFNBQUMsU0FBUzs2QkFLekIsS0FBSztnQ0FNTCxLQUFLO2lDQUtMLE1BQU07Z0NBS04sTUFBTTtnQ0FLTixNQUFNO3VDQUtOLE1BQU07a0NBS04sTUFBTTtrQ0FLTixNQUFNOzRCQUVOLFNBQVMsU0FBQyxTQUFTOzt1QkEzVnRCOztTQTJTYSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBRdWVyeUxpc3QsXG4gIERpcmVjdGl2ZSxcbiAgVGVtcGxhdGVSZWYsXG4gIENvbnRlbnRDaGlsZCxcbiAgVmlld0NoaWxkLFxuICBBZnRlckNvbnRlbnRDaGVja2VkLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2JNb2RhbCwgTW9kYWxEaXNtaXNzUmVhc29ucyB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJzs7XG5cbmxldCBuZXh0SWQgPSAwO1xuXG4vKipcbiAqIFRoaXMgZGlyZWN0aXZlIHNob3VsZCBiZSB1c2VkIHRvIHdyYXAgdGFiIHRpdGxlcyB0aGF0IG5lZWQgdG8gY29udGFpbiBIVE1MIG1hcmt1cCBvciBvdGhlciBkaXJlY3RpdmVzLlxuICovXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICduZy10ZW1wbGF0ZVt3aXphcmRUYWJUaXRsZV0nIH0pXG5leHBvcnQgY2xhc3MgV2l6YXJkVGFiVGl0bGUge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4pIHsgfVxufVxuXG4vKipcbiAqIFRoaXMgZGlyZWN0aXZlIG11c3QgYmUgdXNlZCB0byB3cmFwIGNvbnRlbnQgdG8gYmUgZGlzcGxheWVkIGluIGEgdGFiLlxuICovXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICduZy10ZW1wbGF0ZVt3aXphcmRUYWJDb250ZW50XScgfSlcbmV4cG9ydCBjbGFzcyBXaXphcmRUYWJDb250ZW50IHtcbiAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+KSB7IH1cbn1cblxuLyoqXG4gKiBBIGRpcmVjdGl2ZSByZXByZXNlbnRpbmcgYW4gaW5kaXZpZHVhbCB0YWIuXG4gKi9cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ3dpemFyZC10YWInIH0pXG5leHBvcnQgY2xhc3MgV2l6YXJkVGFiIHtcbiAgLyoqXG4gICAqIFVuaXF1ZSB0YWIgaWRlbnRpZmllci4gTXVzdCBiZSB1bmlxdWUgZm9yIHRoZSBlbnRpcmUgZG9jdW1lbnQgZm9yIHByb3BlciBhY2Nlc3NpYmlsaXR5IHN1cHBvcnQuXG4gICAqL1xuICBASW5wdXQoKSBpZDogc3RyaW5nID0gYHdpemFyZC10YWItJHtuZXh0SWQrK31gO1xuICAvKipcbiAgICogU2ltcGxlIChzdHJpbmcgb25seSkgdGl0bGUuIFVzZSB0aGUgXCJOZ2JUYWJUaXRsZVwiIGRpcmVjdGl2ZSBmb3IgbW9yZSBjb21wbGV4IHVzZS1jYXNlcy5cbiAgICovXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBib29sZWFuIGZsYWcgZm9yIGNoZWNraW5nIHRoZSB3aXphcmQgc3RhdGUgY29tcGxldGUuXG4gICAqL1xuICBASW5wdXQoKSBjb21wbGV0ZTogYm9vbGVhbjtcblxuXG4gIEBDb250ZW50Q2hpbGQoV2l6YXJkVGFiQ29udGVudCkgY29udGVudFRwbDogV2l6YXJkVGFiQ29udGVudDtcbiAgQENvbnRlbnRDaGlsZChXaXphcmRUYWJUaXRsZSkgdGl0bGVUcGw6IFdpemFyZFRhYlRpdGxlO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY29tcGxldGUgPSBmYWxzZTtcbiAgfVxufVxuXG4vKipcbiAqIFRoZSBwYXlsb2FkIG9mIHRoZSBjaGFuZ2UgZXZlbnQgZmlyZWQgcmlnaHQgYmVmb3JlIHRoZSB0YWIgY2hhbmdlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgV2l6YXJkQ2hhbmdlRXZlbnQge1xuICAvKipcbiAgICogSWQgb2YgdGhlIGN1cnJlbnRseSBhY3RpdmUgdGFiXG4gICAqL1xuICBhY3RpdmVJZDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBJZCBvZiB0aGUgbmV3bHkgc2VsZWN0ZWQgdGFiXG4gICAqL1xuICBuZXh0SWQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHRoYXQgd2lsbCBwcmV2ZW50IHRhYiBzd2l0Y2ggaWYgY2FsbGVkXG4gICAqL1xuICBwcmV2ZW50RGVmYXVsdD86ICgpID0+IHZvaWQ7XG59XG5cbi8qKlxuICogQSBjb21wb25lbnQgdGhhdCBtYWtlcyBpdCBlYXN5IHRvIGNyZWF0ZSB0YWJiZWQgaW50ZXJmYWNlLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd3aXphcmQtdGFic2V0JyxcbiAgZXhwb3J0QXM6ICd3aXphcmRUYWJzZXQnLFxuICBzdHlsZXM6IFtgXG4gICAgLndpemFyZCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICB9XG4gICAgLndpemFyZC13cmFwLWhvcml6b250YWwgLndpemFyZCB7XG4gICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgIHdpZHRoOiA3NSU7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuICAgIC53aXphcmQtd3JhcC1ob3Jpem9udGFsIC53aXphcmQgLndpemFyZC1pdGVtIHtcbiAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIH1cbiAgICAud2l6YXJkLXdyYXAtdmVydGljYWwge1xuICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuICAgIC53aXphcmQtd3JhcC12ZXJ0aWNhbCAud2l6YXJkIHtcbiAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgd2lkdGg6IDEwMHB4O1xuICAgIH1cbiAgICAud2l6YXJkLXdyYXAtdmVydGljYWwgLndpemFyZCAud2l6YXJkLWl0ZW0ge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cbiAgICAud2l6YXJkLXdyYXAtdmVydGljYWwgLndpemFyZC1jb250ZW50IHtcbiAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgfVxuICAgIC53aXphcmQtdmVydGljYWwgLndpemFyZC1pdGVtIHtcbiAgICAgIHdpZHRoOiAxMDBweDtcbiAgICB9XG4gICAgLndpemFyZCAud2l6YXJkLWl0ZW0gLndpemFyZC1saW5rIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgY3Vyc29yOiB0ZXh0O1xuICAgIH1cbiAgICAud2l6YXJkLXZlcnRpY2FsIC53aXphcmQtaXRlbSAud2l6YXJkLWxpbmsge1xuICAgICAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gICAgfVxuICAgIC53aXphcmQtdmVydGljYWwgLndpemFyZC1pdGVtOmZpcnN0LWNoaWxkIC53aXphcmQtbGluayB7XG4gICAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgICB9XG4gICAgLndpemFyZCAud2l6YXJkLWl0ZW0gLndpemFyZC1saW5rOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGVkO1xuICAgIH1cbiAgICAud2l6YXJkLWhvcml6b250YWwgLndpemFyZC1pdGVtIC53aXphcmQtbGluazphZnRlciB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMXB4O1xuICAgICAgbGVmdDogMDtcbiAgICAgIHRvcDogMTZweDtcbiAgICB9XG4gICAgLndpemFyZC12ZXJ0aWNhbCAud2l6YXJkLWl0ZW0gLndpemFyZC1saW5rOmFmdGVyIHtcbiAgICAgIHdpZHRoOiAxcHg7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBsZWZ0OiAxNnB4O1xuICAgICAgdG9wOiAwcHg7XG4gICAgfVxuICAgIC53aXphcmQgLndpemFyZC1pdGVtIC53aXphcmQtbGluazpob3ZlciB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxuICAgIC53aXphcmQgLndpemFyZC1pdGVtIC53aXphcmQtbGluayAud2l6YXJkLWNvdW50LXdyYXAge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIH1cbiAgICAud2l6YXJkIC53aXphcmQtaXRlbSAud2l6YXJkLWxpbmsgLndpemFyZC10aXRsZS10ZXh0LXdyYXAge1xuICAgICAgY29sb3I6ICMzZjNmM2Y7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC53aXphcmQtdmVydGljYWwgLndpemFyZC1pdGVtIC53aXphcmQtbGluayAud2l6YXJkLWNvdW50LXdyYXAsIC53aXphcmQtdmVydGljYWwgLndpemFyZC1pdGVtIC53aXphcmQtbGluayAud2l6YXJkLXRpdGxlLXRleHQtd3JhcCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG5cbiAgICB9XG4gICAgLndpemFyZCAud2l6YXJkLWl0ZW0gLndpemFyZC1saW5rIC53aXphcmQtY291bnQtd3JhcCAud2l6YXJkLWNvdW50IHtcbiAgICAgIGNvbG9yOiAjNDc0NzQ3O1xuICAgICAgYmFja2dyb3VuZDogI2VkZWRlZDtcbiAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VkZWRlZDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgei1pbmRleDogOTk7XG4gICAgfVxuICAgIC53aXphcmQgLndpemFyZC1pdGVtIC53aXphcmQtbGluay5hY3RpdmUgLndpemFyZC1jb3VudC13cmFwIC53aXphcmQtY291bnQge1xuICAgICAgYmFja2dyb3VuZDogIzAwN2FjMztcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cbiAgICAud2l6YXJkIC53aXphcmQtaXRlbSAud2l6YXJkLWxpbmsuY29tcGxldGUgLndpemFyZC1jb3VudC13cmFwIC53aXphcmQtY291bnQge1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBiYWNrZ3JvdW5kOiAjODViYzIwO1xuICAgIH1cbiAgICAud2l6YXJkLWNvbnRlbnQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWluLWhlaWdodDogNDAwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cbiAgICAud2l6YXJkLWNvbnRlbnQgLndpemFyZC1wYW5lIHtcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgfVxuICAgIC53aXphcmQtdGl0bGUtdGV4dC13cmFwIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHotaW5kZXg6IDk5O1xuICAgIH1cbiAgICBAbWVkaWEgKG1heC13aWR0aDogMzUwcHgpIHtcbiAgICAgIC53aXphcmQtdmVydGljYWwgLndpemFyZC1pdGVtIHtcbiAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICB9XG4gICAgfVxuICAgIC53ay13aXphcmQtZmluaXNoLWxhdGVyLFxuLndrLXdpemFyZC1jYW5jZWwge1xuICBwYWRkaW5nLWxlZnQ6IDAuNzVyZW0gIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG5cbi53ay13aXphcmQtcHJldi1zdGVwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gICZbZGlzYWJsZWRdIHtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYWRhZGEgIWltcG9ydGFudDtcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgICBib3JkZXItY29sb3I6ICNkYWRhZGEgIWltcG9ydGFudDtcbiAgICAuY29vbW9uZ2x5cGhzIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjIpO1xuICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4yKTtcbiAgICB9XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmZiZmJmICFpbXBvcnRhbnQ7XG4gICAgICBib3JkZXItY29sb3I6ICNiZmJmYmYgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbiAgLmNvbW1vbmdseXBocyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IC0xcHg7XG4gICAgdG9wOiAtMXB4O1xuICAgIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMik7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4yKTtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gIH1cbn1cbiAgYF0sXG4gIHRlbXBsYXRlOiBgXG4gIDxkaXYgW2NsYXNzXT1cIid3aXphcmQtd3JhcC0nICsgb3JpZW50YXRpb25cIj5cbiAgICAgIDx1bCBbY2xhc3NdPVwiJ3dpemFyZCB3aXphcmQtJyArIG9yaWVudGF0aW9uXCI+XG4gICAgICAgICAgPGxpIGNsYXNzPVwid2l6YXJkLWl0ZW1cIiAqbmdGb3I9XCJsZXQgdGFiIG9mIHRhYnM7IGxldCBpID0gaW5kZXg7XCI+XG4gICAgICAgICAgICAgIDxhIFtpZF09XCJ0YWIuaWRcIiBjbGFzcz1cIndpemFyZC1saW5rXCIgKGNsaWNrKT1cIiRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1wiIFtjbGFzcy5jb21wbGV0ZV09XCJ0YWIuY29tcGxldGVcIiBbY2xhc3MuYWN0aXZlXT1cInRhYi5pZCA9PT0gYWN0aXZlSWRcIiBocmVmPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndpemFyZC1jb3VudC13cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ3aXphcmQtY291bnRcIiAqbmdJZj1cIiF0YWIuY29tcGxldGVcIj57e2kgKyAxfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ3aXphcmQtY291bnRcIiAqbmdJZj1cInRhYi5jb21wbGV0ZVwiIChjbGljayk9XCJfZ29Ub1RoaXNTdGVwKHRhYi5pZClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb21tb25nbHlwaHMgY29tbW9uZ2x5cGhzLWNoZWNrXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndpemFyZC10aXRsZS10ZXh0LXdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIndpemFyZC10aXRsZS10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt7dGFiLnRpdGxlfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRhYi50aXRsZVRwbD8udGVtcGxhdGVSZWZcIj48L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8ZGl2IGNsYXNzPVwid2l6YXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICA8bmctdGVtcGxhdGUgbmdGb3IgbGV0LXRhYiBbbmdGb3JPZl09XCJ0YWJzXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aXphcmQtcGFuZSB7e3RhYi5pZCA9PT0gYWN0aXZlSWQgPyAnYWN0aXZlJyA6IG51bGx9fVwiICpuZ0lmPVwidGFiLmlkID09PSBhY3RpdmVJZFwiPlxuICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRhYi5jb250ZW50VHBsLnRlbXBsYXRlUmVmXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInRleHQtcmlnaHRcIiAqbmdJZj1cInNob3dCdXR0b25zXCI+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBjYW5jZWwtc3RlcFwiIFtkaXNhYmxlZF09XCIhaXNOb3RGaXJzdCgpXCIgKGNsaWNrKT1cImNhbmNlbFN0ZXAoKVwiPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiBbZGlzYWJsZWRdPVwiIWlzTm90Rmlyc3QoKVwiIChjbGljayk9XCJmaW5pc2hMYXRlclN0ZXAoKVwiPkZpbmlzaCBMYXRlcjwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgcHJldi1zdGVwXCIgW2Rpc2FibGVkXT1cIiFpc05vdEZpcnN0KClcIiAoY2xpY2spPVwicHJldlN0ZXAoKVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29tbW9uZ2x5cGhzIGNvbW1vbmdseXBocy1hcnJvdy1sZWZ0XCI+PC9zcGFuPlByZXZpb3VzXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IG5leHQtc3RlcFwiICpuZ0lmPVwiIWlzTGFzdFN0ZXAoKVwiIChjbGljayk9XCJuZXh0U3RlcCgpXCI+XG4gICAgICAgICAgTmV4dFxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29tbW9uZ2x5cGhzIGNvbW1vbmdseXBocy1hcnJvdy1yaWdodFwiPjwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgc3VibWl0LXN0ZXBcIiAqbmdJZj1cImlzTGFzdFN0ZXAoKVwiIChjbGljayk9XCJzdWJtaXRTdGVwKClcIj5GaW5pc2g8L2J1dHRvbj5cbiAgPC9kaXY+XG4gIDxuZy10ZW1wbGF0ZSAjY29udGVudCBsZXQtYz1cImNsb3NlXCIgbGV0LWQ9XCJkaXNtaXNzXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgPGg0IGNsYXNzPVwibW9kYWwtdGl0bGVcIj5XaXphcmQ8L2g0PlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29tbW9uZ2x5cGhzIGNvbW1vbmdseXBocy1jbG9zZSBwdWxsLXJpZ2h0IG1vZGFsLWNsb3NlXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCIgKGNsaWNrKT1cImQoJ0Nyb3NzIGNsaWNrJylcIj48L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgPHA+WW91ciBkYXRhIHdpbGwgYmUgbG9zdCwgZG8geW91IHN0aWxsIHdhbnQgdG8gY2FuY2VsPzwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeVwiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiZCgnQ2xvc2UgY2xpY2snKVwiPk5vPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiYygnQ2xvc2UgY2xpY2snKVwiPlllczwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gIDwvbmctdGVtcGxhdGU+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgV2l6YXJkVGFic2V0IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XG5cbiAgQElucHV0KClcbiAgc2hvd0J1dHRvbnM6IGJvb2xlYW47XG5cbiAgQENvbnRlbnRDaGlsZHJlbihXaXphcmRUYWIpIHRhYnM6IFF1ZXJ5TGlzdDxXaXphcmRUYWI+O1xuXG4gIC8qKlxuICAgKiBBbiBpZGVudGlmaWVyIG9mIGFuIGluaXRpYWxseSBzZWxlY3RlZCAoYWN0aXZlKSB0YWIuIFVzZSB0aGUgXCJzZWxlY3RcIiBtZXRob2QgdG8gc3dpdGNoIGEgdGFiIHByb2dyYW1tYXRpY2FsbHkuXG4gICAqL1xuICBASW5wdXQoKSBhY3RpdmVJZDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgb3JpZW50YXRpb24gb2YgdGhlIG5hdiAoaG9yaXpvbnRhbCBvciB2ZXJ0aWNhbCkuXG4gICAqIFRoZSBkZWZhdWx0IHZhbHVlIGlzICdob3Jpem9udGFsJy5cbiAgICovXG4gIEBJbnB1dCgpIG9yaWVudGF0aW9uOiAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnO1xuXG4gIC8qKlxuICAgKiBBIHRhYiBjaGFuZ2UgZXZlbnQgZmlyZWQgcmlnaHQgYmVmb3JlIHRoZSB0YWIgc2VsZWN0aW9uIGhhcHBlbnMuIFNlZSBXaXphcmRDaGFuZ2VFdmVudCBmb3IgcGF5bG9hZCBkZXRhaWxzXG4gICAqL1xuICBAT3V0cHV0KCkgd2l6YXJkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxXaXphcmRDaGFuZ2VFdmVudD4oKTtcblxuICAvKipcbiAgICogQSB0YWIgY2hhbmdlIGV2ZW50IGZpcmVkIGFmdGVyIG5leHQgYnV0dG9uIGlzIGNsaWNrZWQuIFNlZSBXaXphcmRDaGFuZ2VFdmVudCBmb3IgcGF5bG9hZCBkZXRhaWxzXG4gICAqL1xuICBAT3V0cHV0KCkgbmV4dEhhbmRsZXIgPSBuZXcgRXZlbnRFbWl0dGVyPFdpemFyZENoYW5nZUV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBBIHRhYiBjaGFuZ2UgZXZlbnQgZmlyZWQgYWZ0ZXIgcHJldmlvdXMgYnV0dG9uIGlzIGNsaWNrZWQuIFNlZSBXaXphcmRDaGFuZ2VFdmVudCBmb3IgcGF5bG9hZCBkZXRhaWxzXG4gICAqL1xuICBAT3V0cHV0KCkgcHJldkhhbmRsZXIgPSBuZXcgRXZlbnRFbWl0dGVyPFdpemFyZENoYW5nZUV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBBIHRhYiBjaGFuZ2UgZXZlbnQgZmlyZWQgYWZ0ZXIgZmluaXNoIGxhdGVyIGJ1dHRvbiBpcyBjbGlja2VkLiBTZWUgV2l6YXJkQ2hhbmdlRXZlbnQgZm9yIHBheWxvYWQgZGV0YWlsc1xuICAgKi9cbiAgQE91dHB1dCgpIGZpbmlzaExhdGVySGFuZGxlciA9IG5ldyBFdmVudEVtaXR0ZXI8V2l6YXJkQ2hhbmdlRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIEEgdGFiIGNoYW5nZSBldmVudCBmaXJlZCBhZnRlciBmaW5pc2ggYnV0dG9uIGlzIGNsaWNrZWQuIFNlZSBXaXphcmRDaGFuZ2VFdmVudCBmb3IgcGF5bG9hZCBkZXRhaWxzXG4gICAqL1xuICBAT3V0cHV0KCkgc3VibWl0SGFuZGxlciA9IG5ldyBFdmVudEVtaXR0ZXI8V2l6YXJkQ2hhbmdlRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIEEgdGFiIGNoYW5nZSBldmVudCBmaXJlZCBhZnRlciBjYW5jZWwgYnV0dG9uIGlzIGNsaWNrZWQuIFNlZSBXaXphcmRDaGFuZ2VFdmVudCBmb3IgcGF5bG9hZCBkZXRhaWxzXG4gICAqL1xuICBAT3V0cHV0KCkgY2FuY2VsSGFuZGxlciA9IG5ldyBFdmVudEVtaXR0ZXI8V2l6YXJkQ2hhbmdlRXZlbnQ+KCk7XG5cbiAgQFZpZXdDaGlsZCgnY29udGVudCcpXG4gIGNvbnRlbnQ6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE5nYk1vZGFsKSB7IH1cblxuICAvKipcbiAgICogU2VsZWN0cyB0aGUgdGFiIHdpdGggdGhlIGdpdmVuIGlkIGFuZCBzaG93cyBpdHMgYXNzb2NpYXRlZCBwYW5lLlxuICAgKiBBbnkgb3RoZXIgdGFiIHRoYXQgd2FzIHByZXZpb3VzbHkgc2VsZWN0ZWQgYmVjb21lcyB1bnNlbGVjdGVkIGFuZCBpdHMgYXNzb2NpYXRlZCBwYW5lIGlzIGhpZGRlbi5cbiAgICovXG4gIHNlbGVjdCh0YWJJZDogc3RyaW5nKSB7XG4gICAgbGV0IHNlbGVjdGVkVGFiID0gdGhpcy5fZ2V0VGFiQnlJZCh0YWJJZCk7XG4gICAgaWYgKHNlbGVjdGVkVGFiICYmIHRoaXMuYWN0aXZlSWQgIT09IHNlbGVjdGVkVGFiLmlkKSB7XG4gICAgICBsZXQgZGVmYXVsdFByZXZlbnRlZCA9IGZhbHNlO1xuXG4gICAgICB0aGlzLndpemFyZENoYW5nZS5lbWl0KFxuICAgICAgICB7IGFjdGl2ZUlkOiB0aGlzLmFjdGl2ZUlkLCBuZXh0SWQ6IHNlbGVjdGVkVGFiLmlkLCBwcmV2ZW50RGVmYXVsdDogKCkgPT4geyBkZWZhdWx0UHJldmVudGVkID0gdHJ1ZTsgfSB9KTtcblxuICAgICAgaWYgKCFkZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlSWQgPSBzZWxlY3RlZFRhYi5pZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgX2dvVG9UaGlzU3RlcChzdGVwKSB7XG4gICAgbGV0IHRvID0gYHdpemFyZC10YWItJHsoK3N0ZXAubWF0Y2goL1xcZCsvZylbMF0pICsgMX1gO1xuXG4gICAgd2hpbGUgKHRvICE9PSB0aGlzLmFjdGl2ZUlkKSB7XG4gICAgICB0aGlzLnByZXZTdGVwKCk7XG4gICAgfVxuXG4gICAgaWYgKHRvID09PSB0aGlzLmFjdGl2ZUlkKSB7XG4gICAgICB0aGlzLnByZXZTdGVwKCk7XG4gICAgfVxuICB9XG4gIC8vIGNoZWNrcyB3aGV0aGVyIHRoZSBzdGVwIGlzIGluIGxhc3QgdGFiIG9yIG5vdFxuICBpc0xhc3RTdGVwKCkge1xuICAgIGlmICghdGhpcy50YWJzKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmFjdGl2ZUlkID09PSB0aGlzLnRhYnMubGFzdC5pZDtcbiAgfVxuICAvLyBjaGVja3Mgd2hldGhlciB0aGUgc3RlcCBpcyBub3QgaW4gZmlyc3QgdGFiXG4gIGlzTm90Rmlyc3QoKSB7XG4gICAgaWYgKCF0aGlzLnRhYnMpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlSWQgIT09IHRoaXMudGFicy5maXJzdC5pZDtcbiAgfVxuICAvLyBldmVudCBoYW5kbGVyIG1vdmluZyB0aGUgc3RlcCB0byBuZXh0IHRhYlxuICBuZXh0U3RlcCgpIHtcbiAgICB0aGlzLl9nZXRUYWJCeUlkKHRoaXMuYWN0aXZlSWQpLmNvbXBsZXRlID0gdHJ1ZTtcbiAgICB0aGlzLnNlbGVjdChgd2l6YXJkLXRhYi0keygrdGhpcy5hY3RpdmVJZC5tYXRjaCgvXFxkKy9nKVswXSkgKyAxfWApO1xuICAgIHRoaXMubmV4dEhhbmRsZXIuZW1pdCh7XG4gICAgICBhY3RpdmVJZDogdGhpcy5hY3RpdmVJZFxuICAgIH0pO1xuICB9XG4gIC8vIGV2ZW50IGhhbmRsZXIgbW92aW5nIHRoZSBzdGVwIHRvIHByZXZpb3VzIHRhYlxuICBwcmV2U3RlcCgpIHtcbiAgICB0aGlzLnNlbGVjdChgd2l6YXJkLXRhYi0keygrdGhpcy5hY3RpdmVJZC5tYXRjaCgvXFxkKy9nKVswXSkgLSAxfWApO1xuICAgIHRoaXMuX2dldFRhYkJ5SWQodGhpcy5hY3RpdmVJZCkuY29tcGxldGUgPSBmYWxzZTtcbiAgICB0aGlzLnByZXZIYW5kbGVyLmVtaXQoe1xuICAgICAgYWN0aXZlSWQ6IHRoaXMuYWN0aXZlSWRcbiAgICB9KTtcbiAgfVxuICAvLyBldmVudCBoYW5kbGVyIGZvciBzdWJtaXR0aW5nIHdpdGggdGhlIGFjdGl2ZSB0YWJcbiAgc3VibWl0U3RlcCgpIHtcbiAgICB0aGlzLnN1Ym1pdEhhbmRsZXIuZW1pdCh7XG4gICAgICBhY3RpdmVJZDogdGhpcy5hY3RpdmVJZFxuICAgIH0pO1xuICB9XG4gIC8vIGV2ZW50IGhhbmRsZXIgZm9yIGZpbmlzaGluZyB3aXRoIHRoZSBhY3RpdmUgdGFiXG4gIGZpbmlzaExhdGVyU3RlcCgpIHtcbiAgICB0aGlzLmZpbmlzaExhdGVySGFuZGxlci5lbWl0KHtcbiAgICAgIGFjdGl2ZUlkOiB0aGlzLmFjdGl2ZUlkXG4gICAgfSk7XG4gIH1cbiAgLy8gd2hlbiBjYW5jZWwgd2l6YXJkIGlzIGNsaWNrZWQsIG1vZGFsIGlzIHBvcGVkIHdpdGggdGhlIGNvbmZpcm1hdGlvbiB0byByZXNldCB0aGUgd2l6YXJkXG4gIGNhbmNlbFN0ZXAoKSB7XG4gICAgdGhpcy5tb2RhbFNlcnZpY2Uub3Blbih0aGlzLmNvbnRlbnQsIHsgY2VudGVyZWQ6IHRydWUgfSkucmVzdWx0LnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgdGhpcy5zZWxlY3QodGhpcy50YWJzLmZpcnN0LmlkKTtcbiAgICAgIHRoaXMudGFicy5mb3JFYWNoKHRhYiA9PiB7XG4gICAgICAgIHRhYi5jb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmNhbmNlbEhhbmRsZXIuZW1pdCh7XG4gICAgICAgIGFjdGl2ZUlkOiB0aGlzLmFjdGl2ZUlkXG4gICAgICB9KTtcbiAgICB9LCAocmVhc29uKSA9PiB7XG4gICAgICB0aGlzLmdldERpc21pc3NSZWFzb24ocmVhc29uKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RGlzbWlzc1JlYXNvbihyZWFzb246IGFueSk6IHN0cmluZyB7XG4gICAgdGhpcy5jYW5jZWxIYW5kbGVyLmVtaXQoe1xuICAgICAgYWN0aXZlSWQ6IHRoaXMuYWN0aXZlSWRcbiAgICB9KTtcbiAgICBpZiAocmVhc29uID09PSBNb2RhbERpc21pc3NSZWFzb25zLkVTQykge1xuICAgICAgcmV0dXJuICdieSBwcmVzc2luZyBFU0MnO1xuICAgIH0gZWxzZSBpZiAocmVhc29uID09PSBNb2RhbERpc21pc3NSZWFzb25zLkJBQ0tEUk9QX0NMSUNLKSB7XG4gICAgICByZXR1cm4gJ2J5IGNsaWNraW5nIG9uIGEgYmFja2Ryb3AnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYHdpdGg6ICR7cmVhc29ufWA7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCkge1xuICAgIC8vIGF1dG8tY29ycmVjdCBhY3RpdmVJZCB0aGF0IG1pZ2h0IGhhdmUgYmVlbiBzZXQgaW5jb3JyZWN0bHkgYXMgaW5wdXRcbiAgICBsZXQgYWN0aXZlVGFiID0gdGhpcy5fZ2V0VGFiQnlJZCh0aGlzLmFjdGl2ZUlkKTtcbiAgICB0aGlzLmFjdGl2ZUlkID0gYWN0aXZlVGFiID8gYWN0aXZlVGFiLmlkIDogKHRoaXMudGFicy5sZW5ndGggPyB0aGlzLnRhYnMuZmlyc3QuaWQgOiBudWxsKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFRhYkJ5SWQoaWQ6IHN0cmluZyk6IFdpemFyZFRhYiB7XG4gICAgbGV0IHRhYnNXaXRoSWQ6IFdpemFyZFRhYltdID0gdGhpcy50YWJzLmZpbHRlcih0YWIgPT4gdGFiLmlkID09PSBpZCk7XG4gICAgcmV0dXJuIHRhYnNXaXRoSWQubGVuZ3RoID8gdGFic1dpdGhJZFswXSA6IG51bGw7XG4gIH1cbn1cbiJdfQ==