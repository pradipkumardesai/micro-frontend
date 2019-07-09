import { EventEmitter } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
export interface WkMultiselectModel {
    value: string;
    name: string;
    checked?: boolean;
}
export declare class WkMultiselectComponent {
    search: any;
    count: number;
    items: Array<WkMultiselectModel>;
    selectedItems: EventEmitter<WkMultiselectModel[]>;
    selectedAll: any;
    constructor(config: NgbDropdownConfig);
    selectAll(): void;
    checkIfAllSelected(): void;
    changed(): number;
}
