import { Component, Input, ContentChildren, Directive, TemplateRef, ContentChild, ViewChild, Output, EventEmitter, NgModule } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
let /** @type {?} */ nextId = 0;
/**
 * This directive should be used to wrap tab titles that need to contain HTML markup or other directives.
 */
class WizardTabTitle {
    /**
     * @param {?} templateRef
     */
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
WizardTabTitle.decorators = [
    { type: Directive, args: [{ selector: 'ng-template[wizardTabTitle]' },] },
];
/** @nocollapse */
WizardTabTitle.ctorParameters = () => [
    { type: TemplateRef, },
];
/**
 * This directive must be used to wrap content to be displayed in a tab.
 */
class WizardTabContent {
    /**
     * @param {?} templateRef
     */
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
WizardTabContent.decorators = [
    { type: Directive, args: [{ selector: 'ng-template[wizardTabContent]' },] },
];
/** @nocollapse */
WizardTabContent.ctorParameters = () => [
    { type: TemplateRef, },
];
/**
 * A directive representing an individual tab.
 */
class WizardTab {
    constructor() {
        /**
         * Unique tab identifier. Must be unique for the entire document for proper accessibility support.
         */
        this.id = `wizard-tab-${nextId++}`;
        this.complete = false;
    }
}
WizardTab.decorators = [
    { type: Directive, args: [{ selector: 'wizard-tab' },] },
];
/** @nocollapse */
WizardTab.ctorParameters = () => [];
WizardTab.propDecorators = {
    "id": [{ type: Input },],
    "title": [{ type: Input },],
    "complete": [{ type: Input },],
    "contentTpl": [{ type: ContentChild, args: [WizardTabContent,] },],
    "titleTpl": [{ type: ContentChild, args: [WizardTabTitle,] },],
};
/**
 * A component that makes it easy to create tabbed interface.
 */
class WizardTabset {
    /**
     * @param {?} modalService
     */
    constructor(modalService) {
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
     * @param {?} tabId
     * @return {?}
     */
    select(tabId) {
        let /** @type {?} */ selectedTab = this._getTabById(tabId);
        if (selectedTab && this.activeId !== selectedTab.id) {
            let /** @type {?} */ defaultPrevented = false;
            this.wizardChange.emit({ activeId: this.activeId, nextId: selectedTab.id, preventDefault: () => { defaultPrevented = true; } });
            if (!defaultPrevented) {
                this.activeId = selectedTab.id;
            }
        }
    }
    /**
     * @param {?} step
     * @return {?}
     */
    _goToThisStep(step) {
        let /** @type {?} */ to = `wizard-tab-${(+step.match(/\d+/g)[0]) + 1}`;
        while (to !== this.activeId) {
            this.prevStep();
        }
        if (to === this.activeId) {
            this.prevStep();
        }
    }
    /**
     * @return {?}
     */
    isLastStep() {
        if (!this.tabs) {
            return false;
        }
        return this.activeId === this.tabs.last.id;
    }
    /**
     * @return {?}
     */
    isNotFirst() {
        if (!this.tabs) {
            return false;
        }
        return this.activeId !== this.tabs.first.id;
    }
    /**
     * @return {?}
     */
    nextStep() {
        this._getTabById(this.activeId).complete = true;
        this.select(`wizard-tab-${(+this.activeId.match(/\d+/g)[0]) + 1}`);
        this.nextHandler.emit({
            activeId: this.activeId
        });
    }
    /**
     * @return {?}
     */
    prevStep() {
        this.select(`wizard-tab-${(+this.activeId.match(/\d+/g)[0]) - 1}`);
        this._getTabById(this.activeId).complete = false;
        this.prevHandler.emit({
            activeId: this.activeId
        });
    }
    /**
     * @return {?}
     */
    submitStep() {
        this.submitHandler.emit({
            activeId: this.activeId
        });
    }
    /**
     * @return {?}
     */
    finishLaterStep() {
        this.finishLaterHandler.emit({
            activeId: this.activeId
        });
    }
    /**
     * @return {?}
     */
    cancelStep() {
        this.modalService.open(this.content, { centered: true }).result.then((result) => {
            this.select(this.tabs.first.id);
            this.tabs.forEach(tab => {
                tab.complete = false;
            });
            this.cancelHandler.emit({
                activeId: this.activeId
            });
        }, (reason) => {
            this.getDismissReason(reason);
        });
    }
    /**
     * @param {?} reason
     * @return {?}
     */
    getDismissReason(reason) {
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
            return `with: ${reason}`;
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        // auto-correct activeId that might have been set incorrectly as input
        let /** @type {?} */ activeTab = this._getTabById(this.activeId);
        this.activeId = activeTab ? activeTab.id : (this.tabs.length ? this.tabs.first.id : null);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    _getTabById(id) {
        let /** @type {?} */ tabsWithId = this.tabs.filter(tab => tab.id === id);
        return tabsWithId.length ? tabsWithId[0] : null;
    }
}
WizardTabset.decorators = [
    { type: Component, args: [{
                selector: 'wizard-tabset',
                exportAs: 'wizardTabset',
                styles: [`
    .wizard {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    .wizard-wrap-horizontal .wizard {
      display: table;
      width: 75%;
      margin: 0 auto;
      margin-bottom: 10px;
    }
    .wizard-wrap-horizontal .wizard .wizard-item {
      display: table-cell;
      list-style-type: none;
      position: relative;
      vertical-align: top;
    }
    .wizard-wrap-vertical {
      display: table;
      width: 100%;
      position: relative;
      margin-bottom: 20px;
    }
    .wizard-wrap-vertical .wizard {
      display: table-cell;
      vertical-align: middle;
      width: 100px;
    }
    .wizard-wrap-vertical .wizard .wizard-item {
      display: inline-block;
      list-style-type: none;
      position: relative;
    }
    .wizard-wrap-vertical .wizard-content {
      display: table-cell;
    }
    .wizard-vertical .wizard-item {
      width: 100px;
    }
    .wizard .wizard-item .wizard-link {
      display: block;
      position: relative;
      cursor: text;
    }
    .wizard-vertical .wizard-item .wizard-link {
      padding-bottom: 2rem;
    }
    .wizard-vertical .wizard-item:first-child .wizard-link {
      padding-top: 2rem;
    }
    .wizard .wizard-item .wizard-link:after {
      content: "";
      position: absolute;
      background-color: #ededed;
    }
    .wizard-horizontal .wizard-item .wizard-link:after {
      width: 100%;
      height: 1px;
      left: 0;
      top: 16px;
    }
    .wizard-vertical .wizard-item .wizard-link:after {
      width: 1px;
      height: 100%;
      left: 16px;
      top: 0px;
    }
    .wizard .wizard-item .wizard-link:hover {
      text-decoration: none;
    }
    .wizard .wizard-item .wizard-link .wizard-count-wrap {
      text-align: center;
      margin-bottom: 8px;
    }
    .wizard .wizard-item .wizard-link .wizard-title-text-wrap {
      color: #3f3f3f;
      text-align: center;
    }
    .wizard-vertical .wizard-item .wizard-link .wizard-count-wrap, .wizard-vertical .wizard-item .wizard-link .wizard-title-text-wrap {
      display: inline-block;
      margin-bottom: 0;
      margin-right: 8px;

    }
    .wizard .wizard-item .wizard-link .wizard-count-wrap .wizard-count {
      color: #474747;
      background: #ededed;
      width: 32px;
      height: 32px;
      display: inline-block;
      border: 1px solid #ededed;
      line-height: 30px;
      border-radius: 50%;
      position: relative;
      text-align: center;
      z-index: 99;
    }
    .wizard .wizard-item .wizard-link.active .wizard-count-wrap .wizard-count {
      background: #007ac3;
      color: #fff;
    }
    .wizard .wizard-item .wizard-link.complete .wizard-count-wrap .wizard-count {
      color: #fff;
      background: #85bc20;
    }
    .wizard-content {
      background-color: #ededed;
      width: 100%;
      min-height: 400px;
      margin-bottom: 20px;
    }
    .wizard-content .wizard-pane {
      padding: 20px;
    }
    .wizard-title-text-wrap {
      position: relative;
      z-index: 99;
    }
    @media (max-width: 350px) {
      .wizard-vertical .wizard-item {
        width: 70px;
      }
    }
    .wk-wizard-finish-later,
.wk-wizard-cancel {
  padding-left: 0.75rem !important;
  position: unset !important;
}

.wk-wizard-prev-step {
  position: relative;
  padding-left: 50px;
  &[disabled] {
    cursor: not-allowed;
    background-color: #dadada !important;
    color: black !important;
    border-color: #dadada !important;
    .coomonglyphs {
      background-color: rgba(255, 255, 255, .2);
      border-color: rgba(255, 255, 255, .2);
    }
    &:hover {
      background-color: #bfbfbf !important;
      border-color: #bfbfbf !important;
    }
  }
  .commonglyphs {
    position: absolute;
    left: -1px;
    top: -1px;
    padding: 0.375rem 0.75rem;
    background-color: rgba(255, 255, 255, .2);
    border-color: rgba(255, 255, 255, .2);
    height: 35px;
  }
}
  `],
                template: `
  <div [class]="'wizard-wrap-' + orientation">
      <ul [class]="'wizard wizard-' + orientation">
          <li class="wizard-item" *ngFor="let tab of tabs; let i = index;">
              <a [id]="tab.id" class="wizard-link" (click)="$event.preventDefault();" [class.complete]="tab.complete" [class.active]="tab.id === activeId" href>
                  <div class="wizard-count-wrap">
                      <span class="wizard-count" *ngIf="!tab.complete">{{i + 1}}</span>
                      <span class="wizard-count" *ngIf="tab.complete" (click)="_goToThisStep(tab.id)">
                          <span class="commonglyphs commonglyphs-check"></span>
                      </span>
                  </div>
                  <div class="wizard-title-text-wrap">
                      <span class="wizard-title-text">
                          {{tab.title}}
                          <ng-template [ngTemplateOutlet]="tab.titleTpl?.templateRef"></ng-template>
                      </span>
                  </div>
              </a>
          </li>
      </ul>
      <div class="wizard-content">
          <ng-template ngFor let-tab [ngForOf]="tabs">
              <div class="wizard-pane {{tab.id === activeId ? 'active' : null}}" *ngIf="tab.id === activeId">
                  <ng-template [ngTemplateOutlet]="tab.contentTpl.templateRef"></ng-template>
              </div>
          </ng-template>
      </div>
  </div>
  <div class="text-right" *ngIf="showButtons">
      <button type="button" class="btn btn-default cancel-step" [disabled]="!isNotFirst()" (click)="cancelStep()">Cancel</button>
      <button type="button" class="btn btn-default" [disabled]="!isNotFirst()" (click)="finishLaterStep()">Finish Later</button>
      <button type="button" class="btn btn-default prev-step" [disabled]="!isNotFirst()" (click)="prevStep()">
          <span class="commonglyphs commonglyphs-arrow-left"></span>Previous
      </button>
      <button type="button" class="btn btn-primary next-step" *ngIf="!isLastStep()" (click)="nextStep()">
          Next
          <span class="commonglyphs commonglyphs-arrow-right"></span>
      </button>
      <button type="button" class="btn btn-primary submit-step" *ngIf="isLastStep()" (click)="submitStep()">Finish</button>
  </div>
  <ng-template #content let-c="close" let-d="dismiss">
      <div class="modal-header">
          <h4 class="modal-title">Wizard</h4>
          <span class="commonglyphs commonglyphs-close pull-right modal-close" aria-label="Close" (click)="d('Cross click')"></span>
      </div>
      <div class="modal-body">
          <p>Your data will be lost, do you still want to cancel?</p>
      </div>
      <div class="modal-footer">
          <button class="btn btn-secondary" type="button" (click)="d('Close click')">No</button>
          <button class="btn btn-primary" type="button" (click)="c('Close click')">Yes</button>
      </div>
  </ng-template>
  `
            },] },
];
/** @nocollapse */
WizardTabset.ctorParameters = () => [
    { type: NgbModal, },
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ WIZARD_TABSET_DIRECTIVES = [
    WizardTabset,
    WizardTab,
    WizardTabContent,
    WizardTabTitle
];
class WizardTabsetModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: WizardTabsetModule
        };
    }
}
WizardTabsetModule.decorators = [
    { type: NgModule, args: [{
                declarations: WIZARD_TABSET_DIRECTIVES,
                exports: WIZARD_TABSET_DIRECTIVES,
                imports: [
                    CommonModule,
                    NgbModalModule.forRoot()
                ]
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

export { WizardTabTitle, WizardTabContent, WizardTab, WizardTabset, WizardTabsetModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2std2l6YXJkLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly93ay13aXphcmQvbGliL3drLXdpemFyZC5jb21wb25lbnQudHMiLCJuZzovL3drLXdpemFyZC9saWIvd2std2l6YXJkLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIFF1ZXJ5TGlzdCxcbiAgRGlyZWN0aXZlLFxuICBUZW1wbGF0ZVJlZixcbiAgQ29udGVudENoaWxkLFxuICBWaWV3Q2hpbGQsXG4gIEFmdGVyQ29udGVudENoZWNrZWQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nYk1vZGFsLCBNb2RhbERpc21pc3NSZWFzb25zIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnOztcblxubGV0IG5leHRJZCA9IDA7XG5cbi8qKlxuICogVGhpcyBkaXJlY3RpdmUgc2hvdWxkIGJlIHVzZWQgdG8gd3JhcCB0YWIgdGl0bGVzIHRoYXQgbmVlZCB0byBjb250YWluIEhUTUwgbWFya3VwIG9yIG90aGVyIGRpcmVjdGl2ZXMuXG4gKi9cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ25nLXRlbXBsYXRlW3dpemFyZFRhYlRpdGxlXScgfSlcbmV4cG9ydCBjbGFzcyBXaXphcmRUYWJUaXRsZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PikgeyB9XG59XG5cbi8qKlxuICogVGhpcyBkaXJlY3RpdmUgbXVzdCBiZSB1c2VkIHRvIHdyYXAgY29udGVudCB0byBiZSBkaXNwbGF5ZWQgaW4gYSB0YWIuXG4gKi9cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ25nLXRlbXBsYXRlW3dpemFyZFRhYkNvbnRlbnRdJyB9KVxuZXhwb3J0IGNsYXNzIFdpemFyZFRhYkNvbnRlbnQge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4pIHsgfVxufVxuXG4vKipcbiAqIEEgZGlyZWN0aXZlIHJlcHJlc2VudGluZyBhbiBpbmRpdmlkdWFsIHRhYi5cbiAqL1xuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnd2l6YXJkLXRhYicgfSlcbmV4cG9ydCBjbGFzcyBXaXphcmRUYWIge1xuICAvKipcbiAgICogVW5pcXVlIHRhYiBpZGVudGlmaWVyLiBNdXN0IGJlIHVuaXF1ZSBmb3IgdGhlIGVudGlyZSBkb2N1bWVudCBmb3IgcHJvcGVyIGFjY2Vzc2liaWxpdHkgc3VwcG9ydC5cbiAgICovXG4gIEBJbnB1dCgpIGlkOiBzdHJpbmcgPSBgd2l6YXJkLXRhYi0ke25leHRJZCsrfWA7XG4gIC8qKlxuICAgKiBTaW1wbGUgKHN0cmluZyBvbmx5KSB0aXRsZS4gVXNlIHRoZSBcIk5nYlRhYlRpdGxlXCIgZGlyZWN0aXZlIGZvciBtb3JlIGNvbXBsZXggdXNlLWNhc2VzLlxuICAgKi9cbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgLyoqXG4gICAqIGJvb2xlYW4gZmxhZyBmb3IgY2hlY2tpbmcgdGhlIHdpemFyZCBzdGF0ZSBjb21wbGV0ZS5cbiAgICovXG4gIEBJbnB1dCgpIGNvbXBsZXRlOiBib29sZWFuO1xuXG5cbiAgQENvbnRlbnRDaGlsZChXaXphcmRUYWJDb250ZW50KSBjb250ZW50VHBsOiBXaXphcmRUYWJDb250ZW50O1xuICBAQ29udGVudENoaWxkKFdpemFyZFRhYlRpdGxlKSB0aXRsZVRwbDogV2l6YXJkVGFiVGl0bGU7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jb21wbGV0ZSA9IGZhbHNlO1xuICB9XG59XG5cbi8qKlxuICogVGhlIHBheWxvYWQgb2YgdGhlIGNoYW5nZSBldmVudCBmaXJlZCByaWdodCBiZWZvcmUgdGhlIHRhYiBjaGFuZ2VcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBXaXphcmRDaGFuZ2VFdmVudCB7XG4gIC8qKlxuICAgKiBJZCBvZiB0aGUgY3VycmVudGx5IGFjdGl2ZSB0YWJcbiAgICovXG4gIGFjdGl2ZUlkOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIElkIG9mIHRoZSBuZXdseSBzZWxlY3RlZCB0YWJcbiAgICovXG4gIG5leHRJZD86IHN0cmluZztcblxuICAvKipcbiAgICogRnVuY3Rpb24gdGhhdCB3aWxsIHByZXZlbnQgdGFiIHN3aXRjaCBpZiBjYWxsZWRcbiAgICovXG4gIHByZXZlbnREZWZhdWx0PzogKCkgPT4gdm9pZDtcbn1cblxuLyoqXG4gKiBBIGNvbXBvbmVudCB0aGF0IG1ha2VzIGl0IGVhc3kgdG8gY3JlYXRlIHRhYmJlZCBpbnRlcmZhY2UuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3dpemFyZC10YWJzZXQnLFxuICBleHBvcnRBczogJ3dpemFyZFRhYnNldCcsXG4gIHN0eWxlczogW2BcbiAgICAud2l6YXJkIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIH1cbiAgICAud2l6YXJkLXdyYXAtaG9yaXpvbnRhbCAud2l6YXJkIHtcbiAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgd2lkdGg6IDc1JTtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG4gICAgLndpemFyZC13cmFwLWhvcml6b250YWwgLndpemFyZCAud2l6YXJkLWl0ZW0ge1xuICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgfVxuICAgIC53aXphcmQtd3JhcC12ZXJ0aWNhbCB7XG4gICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG4gICAgLndpemFyZC13cmFwLXZlcnRpY2FsIC53aXphcmQge1xuICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICB3aWR0aDogMTAwcHg7XG4gICAgfVxuICAgIC53aXphcmQtd3JhcC12ZXJ0aWNhbCAud2l6YXJkIC53aXphcmQtaXRlbSB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICAgIC53aXphcmQtd3JhcC12ZXJ0aWNhbCAud2l6YXJkLWNvbnRlbnQge1xuICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICB9XG4gICAgLndpemFyZC12ZXJ0aWNhbCAud2l6YXJkLWl0ZW0ge1xuICAgICAgd2lkdGg6IDEwMHB4O1xuICAgIH1cbiAgICAud2l6YXJkIC53aXphcmQtaXRlbSAud2l6YXJkLWxpbmsge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBjdXJzb3I6IHRleHQ7XG4gICAgfVxuICAgIC53aXphcmQtdmVydGljYWwgLndpemFyZC1pdGVtIC53aXphcmQtbGluayB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbiAgICB9XG4gICAgLndpemFyZC12ZXJ0aWNhbCAud2l6YXJkLWl0ZW06Zmlyc3QtY2hpbGQgLndpemFyZC1saW5rIHtcbiAgICAgIHBhZGRpbmctdG9wOiAycmVtO1xuICAgIH1cbiAgICAud2l6YXJkIC53aXphcmQtaXRlbSAud2l6YXJkLWxpbms6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZGVkZWQ7XG4gICAgfVxuICAgIC53aXphcmQtaG9yaXpvbnRhbCAud2l6YXJkLWl0ZW0gLndpemFyZC1saW5rOmFmdGVyIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgdG9wOiAxNnB4O1xuICAgIH1cbiAgICAud2l6YXJkLXZlcnRpY2FsIC53aXphcmQtaXRlbSAud2l6YXJkLWxpbms6YWZ0ZXIge1xuICAgICAgd2lkdGg6IDFweDtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGxlZnQ6IDE2cHg7XG4gICAgICB0b3A6IDBweDtcbiAgICB9XG4gICAgLndpemFyZCAud2l6YXJkLWl0ZW0gLndpemFyZC1saW5rOmhvdmVyIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG4gICAgLndpemFyZCAud2l6YXJkLWl0ZW0gLndpemFyZC1saW5rIC53aXphcmQtY291bnQtd3JhcCB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgfVxuICAgIC53aXphcmQgLndpemFyZC1pdGVtIC53aXphcmQtbGluayAud2l6YXJkLXRpdGxlLXRleHQtd3JhcCB7XG4gICAgICBjb2xvcjogIzNmM2YzZjtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLndpemFyZC12ZXJ0aWNhbCAud2l6YXJkLWl0ZW0gLndpemFyZC1saW5rIC53aXphcmQtY291bnQtd3JhcCwgLndpemFyZC12ZXJ0aWNhbCAud2l6YXJkLWl0ZW0gLndpemFyZC1saW5rIC53aXphcmQtdGl0bGUtdGV4dC13cmFwIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcblxuICAgIH1cbiAgICAud2l6YXJkIC53aXphcmQtaXRlbSAud2l6YXJkLWxpbmsgLndpemFyZC1jb3VudC13cmFwIC53aXphcmQtY291bnQge1xuICAgICAgY29sb3I6ICM0NzQ3NDc7XG4gICAgICBiYWNrZ3JvdW5kOiAjZWRlZGVkO1xuICAgICAgd2lkdGg6IDMycHg7XG4gICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWRlZGVkO1xuICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB6LWluZGV4OiA5OTtcbiAgICB9XG4gICAgLndpemFyZCAud2l6YXJkLWl0ZW0gLndpemFyZC1saW5rLmFjdGl2ZSAud2l6YXJkLWNvdW50LXdyYXAgLndpemFyZC1jb3VudCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjMDA3YWMzO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuICAgIC53aXphcmQgLndpemFyZC1pdGVtIC53aXphcmQtbGluay5jb21wbGV0ZSAud2l6YXJkLWNvdW50LXdyYXAgLndpemFyZC1jb3VudCB7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGJhY2tncm91bmQ6ICM4NWJjMjA7XG4gICAgfVxuICAgIC53aXphcmQtY29udGVudCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGVkO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuICAgIC53aXphcmQtY29udGVudCAud2l6YXJkLXBhbmUge1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICB9XG4gICAgLndpemFyZC10aXRsZS10ZXh0LXdyYXAge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgei1pbmRleDogOTk7XG4gICAgfVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNTBweCkge1xuICAgICAgLndpemFyZC12ZXJ0aWNhbCAud2l6YXJkLWl0ZW0ge1xuICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgIH1cbiAgICB9XG4gICAgLndrLXdpemFyZC1maW5pc2gtbGF0ZXIsXG4ud2std2l6YXJkLWNhbmNlbCB7XG4gIHBhZGRpbmctbGVmdDogMC43NXJlbSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogdW5zZXQgIWltcG9ydGFudDtcbn1cblxuLndrLXdpemFyZC1wcmV2LXN0ZXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogNTBweDtcbiAgJltkaXNhYmxlZF0ge1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RhZGFkYSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1jb2xvcjogI2RhZGFkYSAhaW1wb3J0YW50O1xuICAgIC5jb29tb25nbHlwaHMge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMik7XG4gICAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjIpO1xuICAgIH1cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiZmJmYmYgIWltcG9ydGFudDtcbiAgICAgIGJvcmRlci1jb2xvcjogI2JmYmZiZiAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuICAuY29tbW9uZ2x5cGhzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogLTFweDtcbiAgICB0b3A6IC0xcHg7XG4gICAgcGFkZGluZzogMC4zNzVyZW0gMC43NXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4yKTtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjIpO1xuICAgIGhlaWdodDogMzVweDtcbiAgfVxufVxuICBgXSxcbiAgdGVtcGxhdGU6IGBcbiAgPGRpdiBbY2xhc3NdPVwiJ3dpemFyZC13cmFwLScgKyBvcmllbnRhdGlvblwiPlxuICAgICAgPHVsIFtjbGFzc109XCInd2l6YXJkIHdpemFyZC0nICsgb3JpZW50YXRpb25cIj5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJ3aXphcmQtaXRlbVwiICpuZ0Zvcj1cImxldCB0YWIgb2YgdGFiczsgbGV0IGkgPSBpbmRleDtcIj5cbiAgICAgICAgICAgICAgPGEgW2lkXT1cInRhYi5pZFwiIGNsYXNzPVwid2l6YXJkLWxpbmtcIiAoY2xpY2spPVwiJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XCIgW2NsYXNzLmNvbXBsZXRlXT1cInRhYi5jb21wbGV0ZVwiIFtjbGFzcy5hY3RpdmVdPVwidGFiLmlkID09PSBhY3RpdmVJZFwiIGhyZWY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2l6YXJkLWNvdW50LXdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIndpemFyZC1jb3VudFwiICpuZ0lmPVwiIXRhYi5jb21wbGV0ZVwiPnt7aSArIDF9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIndpemFyZC1jb3VudFwiICpuZ0lmPVwidGFiLmNvbXBsZXRlXCIgKGNsaWNrKT1cIl9nb1RvVGhpc1N0ZXAodGFiLmlkKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbW1vbmdseXBocyBjb21tb25nbHlwaHMtY2hlY2tcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2l6YXJkLXRpdGxlLXRleHQtd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwid2l6YXJkLXRpdGxlLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3t0YWIudGl0bGV9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwidGFiLnRpdGxlVHBsPy50ZW1wbGF0ZVJlZlwiPjwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICAgIDxkaXYgY2xhc3M9XCJ3aXphcmQtY29udGVudFwiPlxuICAgICAgICAgIDxuZy10ZW1wbGF0ZSBuZ0ZvciBsZXQtdGFiIFtuZ0Zvck9mXT1cInRhYnNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndpemFyZC1wYW5lIHt7dGFiLmlkID09PSBhY3RpdmVJZCA/ICdhY3RpdmUnIDogbnVsbH19XCIgKm5nSWY9XCJ0YWIuaWQgPT09IGFjdGl2ZUlkXCI+XG4gICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwidGFiLmNvbnRlbnRUcGwudGVtcGxhdGVSZWZcIj48L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwidGV4dC1yaWdodFwiICpuZ0lmPVwic2hvd0J1dHRvbnNcIj5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGNhbmNlbC1zdGVwXCIgW2Rpc2FibGVkXT1cIiFpc05vdEZpcnN0KClcIiAoY2xpY2spPVwiY2FuY2VsU3RlcCgpXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIFtkaXNhYmxlZF09XCIhaXNOb3RGaXJzdCgpXCIgKGNsaWNrKT1cImZpbmlzaExhdGVyU3RlcCgpXCI+RmluaXNoIExhdGVyPC9idXR0b24+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBwcmV2LXN0ZXBcIiBbZGlzYWJsZWRdPVwiIWlzTm90Rmlyc3QoKVwiIChjbGljayk9XCJwcmV2U3RlcCgpXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb21tb25nbHlwaHMgY29tbW9uZ2x5cGhzLWFycm93LWxlZnRcIj48L3NwYW4+UHJldmlvdXNcbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgbmV4dC1zdGVwXCIgKm5nSWY9XCIhaXNMYXN0U3RlcCgpXCIgKGNsaWNrKT1cIm5leHRTdGVwKClcIj5cbiAgICAgICAgICBOZXh0XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb21tb25nbHlwaHMgY29tbW9uZ2x5cGhzLWFycm93LXJpZ2h0XCI+PC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBzdWJtaXQtc3RlcFwiICpuZ0lmPVwiaXNMYXN0U3RlcCgpXCIgKGNsaWNrKT1cInN1Ym1pdFN0ZXAoKVwiPkZpbmlzaDwvYnV0dG9uPlxuICA8L2Rpdj5cbiAgPG5nLXRlbXBsYXRlICNjb250ZW50IGxldC1jPVwiY2xvc2VcIiBsZXQtZD1cImRpc21pc3NcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICA8aDQgY2xhc3M9XCJtb2RhbC10aXRsZVwiPldpemFyZDwvaDQ+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb21tb25nbHlwaHMgY29tbW9uZ2x5cGhzLWNsb3NlIHB1bGwtcmlnaHQgbW9kYWwtY2xvc2VcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIiAoY2xpY2spPVwiZCgnQ3Jvc3MgY2xpY2snKVwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cbiAgICAgICAgICA8cD5Zb3VyIGRhdGEgd2lsbCBiZSBsb3N0LCBkbyB5b3Ugc3RpbGwgd2FudCB0byBjYW5jZWw/PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5XCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJkKCdDbG9zZSBjbGljaycpXCI+Tm88L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJjKCdDbG9zZSBjbGljaycpXCI+WWVzPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgPC9uZy10ZW1wbGF0ZT5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBXaXphcmRUYWJzZXQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkIHtcblxuICBASW5wdXQoKVxuICBzaG93QnV0dG9uczogYm9vbGVhbjtcblxuICBAQ29udGVudENoaWxkcmVuKFdpemFyZFRhYikgdGFiczogUXVlcnlMaXN0PFdpemFyZFRhYj47XG5cbiAgLyoqXG4gICAqIEFuIGlkZW50aWZpZXIgb2YgYW4gaW5pdGlhbGx5IHNlbGVjdGVkIChhY3RpdmUpIHRhYi4gVXNlIHRoZSBcInNlbGVjdFwiIG1ldGhvZCB0byBzd2l0Y2ggYSB0YWIgcHJvZ3JhbW1hdGljYWxseS5cbiAgICovXG4gIEBJbnB1dCgpIGFjdGl2ZUlkOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBvcmllbnRhdGlvbiBvZiB0aGUgbmF2IChob3Jpem9udGFsIG9yIHZlcnRpY2FsKS5cbiAgICogVGhlIGRlZmF1bHQgdmFsdWUgaXMgJ2hvcml6b250YWwnLlxuICAgKi9cbiAgQElucHV0KCkgb3JpZW50YXRpb246ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCc7XG5cbiAgLyoqXG4gICAqIEEgdGFiIGNoYW5nZSBldmVudCBmaXJlZCByaWdodCBiZWZvcmUgdGhlIHRhYiBzZWxlY3Rpb24gaGFwcGVucy4gU2VlIFdpemFyZENoYW5nZUV2ZW50IGZvciBwYXlsb2FkIGRldGFpbHNcbiAgICovXG4gIEBPdXRwdXQoKSB3aXphcmRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFdpemFyZENoYW5nZUV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBBIHRhYiBjaGFuZ2UgZXZlbnQgZmlyZWQgYWZ0ZXIgbmV4dCBidXR0b24gaXMgY2xpY2tlZC4gU2VlIFdpemFyZENoYW5nZUV2ZW50IGZvciBwYXlsb2FkIGRldGFpbHNcbiAgICovXG4gIEBPdXRwdXQoKSBuZXh0SGFuZGxlciA9IG5ldyBFdmVudEVtaXR0ZXI8V2l6YXJkQ2hhbmdlRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIEEgdGFiIGNoYW5nZSBldmVudCBmaXJlZCBhZnRlciBwcmV2aW91cyBidXR0b24gaXMgY2xpY2tlZC4gU2VlIFdpemFyZENoYW5nZUV2ZW50IGZvciBwYXlsb2FkIGRldGFpbHNcbiAgICovXG4gIEBPdXRwdXQoKSBwcmV2SGFuZGxlciA9IG5ldyBFdmVudEVtaXR0ZXI8V2l6YXJkQ2hhbmdlRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIEEgdGFiIGNoYW5nZSBldmVudCBmaXJlZCBhZnRlciBmaW5pc2ggbGF0ZXIgYnV0dG9uIGlzIGNsaWNrZWQuIFNlZSBXaXphcmRDaGFuZ2VFdmVudCBmb3IgcGF5bG9hZCBkZXRhaWxzXG4gICAqL1xuICBAT3V0cHV0KCkgZmluaXNoTGF0ZXJIYW5kbGVyID0gbmV3IEV2ZW50RW1pdHRlcjxXaXphcmRDaGFuZ2VFdmVudD4oKTtcblxuICAvKipcbiAgICogQSB0YWIgY2hhbmdlIGV2ZW50IGZpcmVkIGFmdGVyIGZpbmlzaCBidXR0b24gaXMgY2xpY2tlZC4gU2VlIFdpemFyZENoYW5nZUV2ZW50IGZvciBwYXlsb2FkIGRldGFpbHNcbiAgICovXG4gIEBPdXRwdXQoKSBzdWJtaXRIYW5kbGVyID0gbmV3IEV2ZW50RW1pdHRlcjxXaXphcmRDaGFuZ2VFdmVudD4oKTtcblxuICAvKipcbiAgICogQSB0YWIgY2hhbmdlIGV2ZW50IGZpcmVkIGFmdGVyIGNhbmNlbCBidXR0b24gaXMgY2xpY2tlZC4gU2VlIFdpemFyZENoYW5nZUV2ZW50IGZvciBwYXlsb2FkIGRldGFpbHNcbiAgICovXG4gIEBPdXRwdXQoKSBjYW5jZWxIYW5kbGVyID0gbmV3IEV2ZW50RW1pdHRlcjxXaXphcmRDaGFuZ2VFdmVudD4oKTtcblxuICBAVmlld0NoaWxkKCdjb250ZW50JylcbiAgY29udGVudDogVGVtcGxhdGVSZWY8YW55PjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZGFsU2VydmljZTogTmdiTW9kYWwpIHsgfVxuXG4gIC8qKlxuICAgKiBTZWxlY3RzIHRoZSB0YWIgd2l0aCB0aGUgZ2l2ZW4gaWQgYW5kIHNob3dzIGl0cyBhc3NvY2lhdGVkIHBhbmUuXG4gICAqIEFueSBvdGhlciB0YWIgdGhhdCB3YXMgcHJldmlvdXNseSBzZWxlY3RlZCBiZWNvbWVzIHVuc2VsZWN0ZWQgYW5kIGl0cyBhc3NvY2lhdGVkIHBhbmUgaXMgaGlkZGVuLlxuICAgKi9cbiAgc2VsZWN0KHRhYklkOiBzdHJpbmcpIHtcbiAgICBsZXQgc2VsZWN0ZWRUYWIgPSB0aGlzLl9nZXRUYWJCeUlkKHRhYklkKTtcbiAgICBpZiAoc2VsZWN0ZWRUYWIgJiYgdGhpcy5hY3RpdmVJZCAhPT0gc2VsZWN0ZWRUYWIuaWQpIHtcbiAgICAgIGxldCBkZWZhdWx0UHJldmVudGVkID0gZmFsc2U7XG5cbiAgICAgIHRoaXMud2l6YXJkQ2hhbmdlLmVtaXQoXG4gICAgICAgIHsgYWN0aXZlSWQ6IHRoaXMuYWN0aXZlSWQsIG5leHRJZDogc2VsZWN0ZWRUYWIuaWQsIHByZXZlbnREZWZhdWx0OiAoKSA9PiB7IGRlZmF1bHRQcmV2ZW50ZWQgPSB0cnVlOyB9IH0pO1xuXG4gICAgICBpZiAoIWRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVJZCA9IHNlbGVjdGVkVGFiLmlkO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBfZ29Ub1RoaXNTdGVwKHN0ZXApIHtcbiAgICBsZXQgdG8gPSBgd2l6YXJkLXRhYi0keygrc3RlcC5tYXRjaCgvXFxkKy9nKVswXSkgKyAxfWA7XG5cbiAgICB3aGlsZSAodG8gIT09IHRoaXMuYWN0aXZlSWQpIHtcbiAgICAgIHRoaXMucHJldlN0ZXAoKTtcbiAgICB9XG5cbiAgICBpZiAodG8gPT09IHRoaXMuYWN0aXZlSWQpIHtcbiAgICAgIHRoaXMucHJldlN0ZXAoKTtcbiAgICB9XG4gIH1cbiAgLy8gY2hlY2tzIHdoZXRoZXIgdGhlIHN0ZXAgaXMgaW4gbGFzdCB0YWIgb3Igbm90XG4gIGlzTGFzdFN0ZXAoKSB7XG4gICAgaWYgKCF0aGlzLnRhYnMpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlSWQgPT09IHRoaXMudGFicy5sYXN0LmlkO1xuICB9XG4gIC8vIGNoZWNrcyB3aGV0aGVyIHRoZSBzdGVwIGlzIG5vdCBpbiBmaXJzdCB0YWJcbiAgaXNOb3RGaXJzdCgpIHtcbiAgICBpZiAoIXRoaXMudGFicykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5hY3RpdmVJZCAhPT0gdGhpcy50YWJzLmZpcnN0LmlkO1xuICB9XG4gIC8vIGV2ZW50IGhhbmRsZXIgbW92aW5nIHRoZSBzdGVwIHRvIG5leHQgdGFiXG4gIG5leHRTdGVwKCkge1xuICAgIHRoaXMuX2dldFRhYkJ5SWQodGhpcy5hY3RpdmVJZCkuY29tcGxldGUgPSB0cnVlO1xuICAgIHRoaXMuc2VsZWN0KGB3aXphcmQtdGFiLSR7KCt0aGlzLmFjdGl2ZUlkLm1hdGNoKC9cXGQrL2cpWzBdKSArIDF9YCk7XG4gICAgdGhpcy5uZXh0SGFuZGxlci5lbWl0KHtcbiAgICAgIGFjdGl2ZUlkOiB0aGlzLmFjdGl2ZUlkXG4gICAgfSk7XG4gIH1cbiAgLy8gZXZlbnQgaGFuZGxlciBtb3ZpbmcgdGhlIHN0ZXAgdG8gcHJldmlvdXMgdGFiXG4gIHByZXZTdGVwKCkge1xuICAgIHRoaXMuc2VsZWN0KGB3aXphcmQtdGFiLSR7KCt0aGlzLmFjdGl2ZUlkLm1hdGNoKC9cXGQrL2cpWzBdKSAtIDF9YCk7XG4gICAgdGhpcy5fZ2V0VGFiQnlJZCh0aGlzLmFjdGl2ZUlkKS5jb21wbGV0ZSA9IGZhbHNlO1xuICAgIHRoaXMucHJldkhhbmRsZXIuZW1pdCh7XG4gICAgICBhY3RpdmVJZDogdGhpcy5hY3RpdmVJZFxuICAgIH0pO1xuICB9XG4gIC8vIGV2ZW50IGhhbmRsZXIgZm9yIHN1Ym1pdHRpbmcgd2l0aCB0aGUgYWN0aXZlIHRhYlxuICBzdWJtaXRTdGVwKCkge1xuICAgIHRoaXMuc3VibWl0SGFuZGxlci5lbWl0KHtcbiAgICAgIGFjdGl2ZUlkOiB0aGlzLmFjdGl2ZUlkXG4gICAgfSk7XG4gIH1cbiAgLy8gZXZlbnQgaGFuZGxlciBmb3IgZmluaXNoaW5nIHdpdGggdGhlIGFjdGl2ZSB0YWJcbiAgZmluaXNoTGF0ZXJTdGVwKCkge1xuICAgIHRoaXMuZmluaXNoTGF0ZXJIYW5kbGVyLmVtaXQoe1xuICAgICAgYWN0aXZlSWQ6IHRoaXMuYWN0aXZlSWRcbiAgICB9KTtcbiAgfVxuICAvLyB3aGVuIGNhbmNlbCB3aXphcmQgaXMgY2xpY2tlZCwgbW9kYWwgaXMgcG9wZWQgd2l0aCB0aGUgY29uZmlybWF0aW9uIHRvIHJlc2V0IHRoZSB3aXphcmRcbiAgY2FuY2VsU3RlcCgpIHtcbiAgICB0aGlzLm1vZGFsU2VydmljZS5vcGVuKHRoaXMuY29udGVudCwgeyBjZW50ZXJlZDogdHJ1ZSB9KS5yZXN1bHQudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICB0aGlzLnNlbGVjdCh0aGlzLnRhYnMuZmlyc3QuaWQpO1xuICAgICAgdGhpcy50YWJzLmZvckVhY2godGFiID0+IHtcbiAgICAgICAgdGFiLmNvbXBsZXRlID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuY2FuY2VsSGFuZGxlci5lbWl0KHtcbiAgICAgICAgYWN0aXZlSWQ6IHRoaXMuYWN0aXZlSWRcbiAgICAgIH0pO1xuICAgIH0sIChyZWFzb24pID0+IHtcbiAgICAgIHRoaXMuZ2V0RGlzbWlzc1JlYXNvbihyZWFzb24pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXREaXNtaXNzUmVhc29uKHJlYXNvbjogYW55KTogc3RyaW5nIHtcbiAgICB0aGlzLmNhbmNlbEhhbmRsZXIuZW1pdCh7XG4gICAgICBhY3RpdmVJZDogdGhpcy5hY3RpdmVJZFxuICAgIH0pO1xuICAgIGlmIChyZWFzb24gPT09IE1vZGFsRGlzbWlzc1JlYXNvbnMuRVNDKSB7XG4gICAgICByZXR1cm4gJ2J5IHByZXNzaW5nIEVTQyc7XG4gICAgfSBlbHNlIGlmIChyZWFzb24gPT09IE1vZGFsRGlzbWlzc1JlYXNvbnMuQkFDS0RST1BfQ0xJQ0spIHtcbiAgICAgIHJldHVybiAnYnkgY2xpY2tpbmcgb24gYSBiYWNrZHJvcCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBgd2l0aDogJHtyZWFzb259YDtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7XG4gICAgLy8gYXV0by1jb3JyZWN0IGFjdGl2ZUlkIHRoYXQgbWlnaHQgaGF2ZSBiZWVuIHNldCBpbmNvcnJlY3RseSBhcyBpbnB1dFxuICAgIGxldCBhY3RpdmVUYWIgPSB0aGlzLl9nZXRUYWJCeUlkKHRoaXMuYWN0aXZlSWQpO1xuICAgIHRoaXMuYWN0aXZlSWQgPSBhY3RpdmVUYWIgPyBhY3RpdmVUYWIuaWQgOiAodGhpcy50YWJzLmxlbmd0aCA/IHRoaXMudGFicy5maXJzdC5pZCA6IG51bGwpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0VGFiQnlJZChpZDogc3RyaW5nKTogV2l6YXJkVGFiIHtcbiAgICBsZXQgdGFic1dpdGhJZDogV2l6YXJkVGFiW10gPSB0aGlzLnRhYnMuZmlsdGVyKHRhYiA9PiB0YWIuaWQgPT09IGlkKTtcbiAgICByZXR1cm4gdGFic1dpdGhJZC5sZW5ndGggPyB0YWJzV2l0aElkWzBdIDogbnVsbDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IE5nYk1vZGFsTW9kdWxlIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuXG5pbXBvcnQgeyBXaXphcmRUYWJzZXQsIFdpemFyZFRhYiwgV2l6YXJkVGFiQ29udGVudCwgV2l6YXJkVGFiVGl0bGUgfSBmcm9tICcuL3drLXdpemFyZC5jb21wb25lbnQnO1xuXG5cbmNvbnN0IFdJWkFSRF9UQUJTRVRfRElSRUNUSVZFUyA9IFtcbiAgV2l6YXJkVGFic2V0LCBcbiAgV2l6YXJkVGFiLCBcbiAgV2l6YXJkVGFiQ29udGVudCwgXG4gIFdpemFyZFRhYlRpdGxlXG5dO1xuXG5ATmdNb2R1bGUoeyBcbiAgZGVjbGFyYXRpb25zOiBXSVpBUkRfVEFCU0VUX0RJUkVDVElWRVMsIFxuICBleHBvcnRzOiBXSVpBUkRfVEFCU0VUX0RJUkVDVElWRVMsIFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE5nYk1vZGFsTW9kdWxlLmZvclJvb3QoKVxuICBdIFxufSlcbmV4cG9ydCBjbGFzcyBXaXphcmRUYWJzZXRNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHsgXG4gICAgcmV0dXJuIHsgXG4gICAgICBuZ01vZHVsZTogV2l6YXJkVGFic2V0TW9kdWxlIFxuICAgIH07IFxuICB9XG59Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsQUFlQSxxQkFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDOzs7O0FBTWY7Ozs7SUFDRSxZQUFtQixXQUE2QjtRQUE3QixnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7S0FBSzs7O1lBRnRELFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSw2QkFBNkIsRUFBRTs7OztZQWRwRCxXQUFXOzs7OztBQXVCYjs7OztJQUNFLFlBQW1CLFdBQTZCO1FBQTdCLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtLQUFLOzs7WUFGdEQsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLCtCQUErQixFQUFFOzs7O1lBdEJ0RCxXQUFXOzs7OztBQStCYjtJQWtCRTs7OztrQkFkc0IsY0FBYyxNQUFNLEVBQUUsRUFBRTtRQWU1QyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztLQUN2Qjs7O1lBckJGLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUU7Ozs7O21CQUtsQyxLQUFLO3NCQUlMLEtBQUs7eUJBSUwsS0FBSzsyQkFHTCxZQUFZLFNBQUMsZ0JBQWdCO3lCQUM3QixZQUFZLFNBQUMsY0FBYzs7Ozs7QUFzUDlCOzs7O0lBbURFLFlBQW9CLFlBQXNCO1FBQXRCLGlCQUFZLEdBQVosWUFBWSxDQUFVOzs7OzRCQTlCakIsSUFBSSxZQUFZLEVBQXFCOzs7OzJCQUt0QyxJQUFJLFlBQVksRUFBcUI7Ozs7MkJBS3JDLElBQUksWUFBWSxFQUFxQjs7OztrQ0FLOUIsSUFBSSxZQUFZLEVBQXFCOzs7OzZCQUsxQyxJQUFJLFlBQVksRUFBcUI7Ozs7NkJBS3JDLElBQUksWUFBWSxFQUFxQjtLQUtoQjs7Ozs7OztJQU0vQyxNQUFNLENBQUMsS0FBYTtRQUNsQixxQkFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQyxJQUFJLFdBQVcsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLFdBQVcsQ0FBQyxFQUFFLEVBQUU7WUFDbkQscUJBQUksZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1lBRTdCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUNwQixFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsRUFBRSxFQUFFLGNBQWMsRUFBRSxRQUFRLGdCQUFnQixHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBRTNHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUMsRUFBRSxDQUFDO2FBQ2hDO1NBQ0Y7S0FDRjs7Ozs7SUFDRCxhQUFhLENBQUMsSUFBSTtRQUNoQixxQkFBSSxFQUFFLEdBQUcsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUV0RCxPQUFPLEVBQUUsS0FBSyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQzNCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNqQjtRQUVELElBQUksRUFBRSxLQUFLLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ2pCO0tBQ0Y7Ozs7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDZCxPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsT0FBTyxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztLQUM1Qzs7OztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNkLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO0tBQzdDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO1lBQ3BCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtTQUN4QixDQUFDLENBQUM7S0FDSjs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztZQUNwQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDeEIsQ0FBQyxDQUFDO0tBQ0o7Ozs7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7WUFDdEIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQ3hCLENBQUMsQ0FBQztLQUNKOzs7O0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUM7WUFDM0IsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQ3hCLENBQUMsQ0FBQztLQUNKOzs7O0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTTtZQUMxRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUc7Z0JBQ25CLEdBQUcsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2FBQ3RCLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO2dCQUN0QixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7YUFDeEIsQ0FBQyxDQUFDO1NBQ0osRUFBRSxDQUFDLE1BQU07WUFDUixJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDL0IsQ0FBQyxDQUFDO0tBQ0o7Ozs7O0lBRU8sZ0JBQWdCLENBQUMsTUFBVztRQUNsQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztZQUN0QixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDeEIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxNQUFNLEtBQUssbUJBQW1CLENBQUMsR0FBRyxFQUFFO1lBQ3RDLE9BQU8saUJBQWlCLENBQUM7U0FDMUI7YUFBTSxJQUFJLE1BQU0sS0FBSyxtQkFBbUIsQ0FBQyxjQUFjLEVBQUU7WUFDeEQsT0FBTywyQkFBMkIsQ0FBQztTQUNwQzthQUFNO1lBQ0wsT0FBTyxTQUFTLE1BQU0sRUFBRSxDQUFDO1NBQzFCOzs7OztJQUdILHFCQUFxQjs7UUFFbkIscUJBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxHQUFHLFNBQVMsQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0tBQzNGOzs7OztJQUVPLFdBQVcsQ0FBQyxFQUFVO1FBQzVCLHFCQUFJLFVBQVUsR0FBZ0IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDckUsT0FBTyxVQUFVLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7Ozs7WUF2WG5ELFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLE1BQU0sRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNkpSLENBQUM7Z0JBQ0YsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXFEVDthQUNGOzs7O1lBN1JRLFFBQVE7Ozs0QkFnU2QsS0FBSztxQkFHTCxlQUFlLFNBQUMsU0FBUzt5QkFLekIsS0FBSzs0QkFNTCxLQUFLOzZCQUtMLE1BQU07NEJBS04sTUFBTTs0QkFLTixNQUFNO21DQUtOLE1BQU07OEJBS04sTUFBTTs4QkFLTixNQUFNO3dCQUVOLFNBQVMsU0FBQyxTQUFTOzs7Ozs7O0FDM1Z0QixBQVFBLHVCQUFNLHdCQUF3QixHQUFHO0lBQy9CLFlBQVk7SUFDWixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGNBQWM7Q0FDZixDQUFDO0FBVUY7Ozs7SUFDRSxPQUFPLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLGtCQUFrQjtTQUM3QixDQUFDO0tBQ0g7OztZQWJGLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsd0JBQXdCO2dCQUN0QyxPQUFPLEVBQUUsd0JBQXdCO2dCQUNqQyxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixjQUFjLENBQUMsT0FBTyxFQUFFO2lCQUN6QjthQUNGOzs7Ozs7Ozs7Ozs7Ozs7In0=