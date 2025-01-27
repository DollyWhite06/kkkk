import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ChangedPasswordComponent } from './changed-password/changed-password.component';
import { CreatePetComponent } from './create-pet/create-pet.component';
import { CreateSpaceComponent } from './create-space/create-space.component';
import { HelloComponent } from './hello/hello.component';
import { profileComponent } from './profile/profile.component';
import { WelcomeBackComponent } from './welcome-back/welcome-back.component';
import { ActivateComponent } from './activate/activate.component';
import { ChangedComponent } from './changed/changed.component';
import { CoolComponent } from './cool/cool.component';


import { NombreDelComponenteComponent } from './nombre-del-componente/nombre-del-componente.component';
import { HomeComponent } from './home/home.component';
import { SolarisComponent } from './solaris/solaris.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ProductosComponent } from './productos/productos.component';

export const routes: Routes = [
    {path: 'act', component: ActivateComponent},
    {path: 'changed', component: ChangedComponent},
    {path: 'chanPass', component: ChangedPasswordComponent},
    {path: 'cool', component: CoolComponent},
    {path: 'creaPet', component: CreatePetComponent},
    {path: 'creaSpa', component: CreateSpaceComponent},
    {path: 'hello', component: HelloComponent},
    {path: 'profile', component: profileComponent},
    {path: 'register', component: WelcomeComponent},
    {path: 'login', component: WelcomeBackComponent},

    
    {path: 'pruebas', component: NombreDelComponenteComponent},
    {path: 'productos', component: ProductosComponent},
    {path: 'solaris', component: SolarisComponent},
    {path: 'home', component: HomeComponent},
    {path: 'contacto', component: ContactoComponent},

];
