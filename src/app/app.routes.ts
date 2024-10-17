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
                path: 'busqueda-cirugia',
                loadComponent: () => import('./business/busqueda-cirugia/busqueda-cirugia.component')

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