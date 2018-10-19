import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { BreadcrumsComponent } from './breadcrums/breadcrums.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';


@NgModule({
    declarations: [
        NopagefoundComponent,
        HeaderComponent,
        BreadcrumsComponent,
        SidebarComponent
    ],
    exports: [
        NopagefoundComponent,
        HeaderComponent,
        BreadcrumsComponent,
        SidebarComponent
    ]
})

export class SharedModule { }
