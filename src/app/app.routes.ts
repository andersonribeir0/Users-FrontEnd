import { Routes } from '@angular/router'
import { UsersComponent } from './users/users.component'
import { EditUserComponent } from './users/edit-user/edit-user.component'

export const ROUTES: Routes = [
    {path: 'users', component: UsersComponent},
    {path: 'users/add', component: EditUserComponent},
    {path: 'users/edit', component: EditUserComponent},
    {path: '', redirectTo: '/users', pathMatch: 'full'}
]