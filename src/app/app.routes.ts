import { Routes } from '@angular/router';
export const routes: Routes = [

    {
        path:'',
        loadComponent: () => import('./shared/components/layout/layout.component'),
        children: [
            {
                path: 'dashboard',
                loadComponent: () => import('./business/dashboard/dashboard.component')
            },
            {
                path: 'registro_clinic',
                loadComponent: () => import('./business/archivo-clinic/archivo-clinic.component')
            },
            {
<<<<<<< HEAD
                path: 'registro_cirugias',
                loadComponent: () => import('./business/registro-cirugias/registro-cirugias.component')
=======
                path: 'busqueda-cirugia',
                loadComponent: () => import('./business/busqueda-cirugia/busqueda-cirugia.component')
>>>>>>> d90a12e (logro:se genera componente de busqueda y rutas)
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch:'full'
            }
        ]
    },
    {
        path: '**',
        redirectTo:'dashboard'
    }

   
];