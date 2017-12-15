import { Routes, RouterModule} from '@angular/router';

import { BookComponent } from './book/book.component';
import { BookEditComponent } from './book/bookedit.component';

const appRouting : Routes = [
    {path:'BookEdit/:id',component:BookEditComponent},
    {path: 'BookList',component:BookComponent},
    {path:'',pathMatch:'full',component:BookComponent}
];

export const routing = RouterModule.forRoot(appRouting);