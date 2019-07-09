import { QueryList, TemplateRef, AfterContentChecked, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
/**
 * This directive should be used to wrap tab titles that need to contain HTML markup or other directives.
 */
export declare class WizardTabTitle {
    templateRef: TemplateRef<any>;
    constructor(templateRef: TemplateRef<any>);
}
/**
 * This directive must be used to wrap content to be displayed in a tab.
 */
export declare class WizardTabContent {
    templateRef: TemplateRef<any>;
    constructor(templateRef: TemplateRef<any>);
}
/**
 * A directive representing an individual tab.
 */
export declare class WizardTab {
    /**
     * Unique tab identifier. Must be unique for the entire document for proper accessibility support.
     */
    id: string;
    /**
     * Simple (string only) title. Use the "NgbTabTitle" directive for more complex use-cases.
     */
    title: string;
    /**
     * boolean flag for checking the wizard state complete.
     */
    complete: boolean;
    contentTpl: WizardTabContent;
    titleTpl: WizardTabTitle;
    constructor();
}
/**
 * The payload of the change event fired right before the tab change
 */
export interface WizardChangeEvent {
    /**
     * Id of the currently active tab
     */
    activeId: string;
    /**
     * Id of the newly selected tab
     */
    nextId?: string;
    /**
     * Function that will prevent tab switch if called
     */
    preventDefault?: () => void;
}
/**
 * A component that makes it easy to create tabbed interface.
 */
export declare class WizardTabset implements AfterContentChecked {
    private modalService;
    showButtons: boolean;
    tabs: QueryList<WizardTab>;
    /**
     * An identifier of an initially selected (active) tab. Use the "select" method to switch a tab programmatically.
     */
    activeId: string;
    /**
     * The orientation of the nav (horizontal or vertical).
     * The default value is 'horizontal'.
     */
    orientation: 'horizontal' | 'vertical';
    /**
     * A tab change event fired right before the tab selection happens. See WizardChangeEvent for payload details
     */
    wizardChange: EventEmitter<WizardChangeEvent>;
    /**
     * A tab change event fired after next button is clicked. See WizardChangeEvent for payload details
     */
    nextHandler: EventEmitter<WizardChangeEvent>;
    /**
     * A tab change event fired after previous button is clicked. See WizardChangeEvent for payload details
     */
    prevHandler: EventEmitter<WizardChangeEvent>;
    /**
     * A tab change event fired after finish later button is clicked. See WizardChangeEvent for payload details
     */
    finishLaterHandler: EventEmitter<WizardChangeEvent>;
    /**
     * A tab change event fired after finish button is clicked. See WizardChangeEvent for payload details
     */
    submitHandler: EventEmitter<WizardChangeEvent>;
    /**
     * A tab change event fired after cancel button is clicked. See WizardChangeEvent for payload details
     */
    cancelHandler: EventEmitter<WizardChangeEvent>;
    content: TemplateRef<any>;
    constructor(modalService: NgbModal);
    /**
     * Selects the tab with the given id and shows its associated pane.
     * Any other tab that was previously selected becomes unselected and its associated pane is hidden.
     */
    select(tabId: string): void;
    _goToThisStep(step: any): void;
    isLastStep(): boolean;
    isNotFirst(): boolean;
    nextStep(): void;
    prevStep(): void;
    submitStep(): void;
    finishLaterStep(): void;
    cancelStep(): void;
    private getDismissReason(reason);
    ngAfterContentChecked(): void;
    private _getTabById(id);
}
