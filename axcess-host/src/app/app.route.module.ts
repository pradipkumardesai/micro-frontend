import { Routes } from '@angular/router';

import { AxcessShellComponent } from './core/components/axcess-shell/axcess-shell.component';

export const routes: Routes = [
    { path: ":id", component: AxcessShellComponent },
    { path: "**", redirectTo: "/am" }
];