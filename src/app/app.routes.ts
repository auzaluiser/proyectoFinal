import { Routes } from '@angular/router';
import { DetalleproductoComponent } from './pages/detalleproducto/detalleproducto.component';
import { ListaproductoComponent } from './pages/listaproducto/listaproducto.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AddproductoComponent } from './pages/addproducto/addproducto.component';
import { UpdproductoComponent } from './pages/updproducto/updproducto.component';

export const routes: Routes = [
    { path: 'listarproductos', component: ListaproductoComponent },
    { path: 'addproductos', component: AddproductoComponent },
    { path: 'producto/:id', component: DetalleproductoComponent },
    { path: 'updproductos/:id', component: UpdproductoComponent },
    { path: '**', component: InicioComponent },
];
