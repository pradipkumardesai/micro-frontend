import { PipeTransform } from '@angular/core';
export declare class HighlightPipe implements PipeTransform {
    transform(text: string, search: any): string;
}
export declare class FilterPipe implements PipeTransform {
    transform(items: any[], field: string, value: string): any[];
}
