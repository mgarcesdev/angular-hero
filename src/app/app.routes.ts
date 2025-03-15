import { Routes } from '@angular/router';
import { DragonballSuperPageComponent } from './pages/dragonball-super/dragonball-super-page.component';
import { DragonballPageComponent } from './pages/dragonball/dragonball-page.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HeroPageComponent,
  },
  { path: 'hero', component: HeroPageComponent },

  {
    path: 'dragonball',
    component: DragonballPageComponent,
  },
  {
    path: 'dragonball-super',
    component: DragonballSuperPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
