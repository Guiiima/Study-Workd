import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/dashboard/dashboard.routes').then((m) => m.dashboardRoutes),
  },
  {
    path: 'groups',
    loadChildren: () =>
      import('./features/groups/groups.routes').then((m) => m.groupsRoutes),
  },
  {
    path: 'decks',
    loadChildren: () =>
      import('./features/decks/decks.routes').then((m) => m.decksRoutes),
  },
  {
    path: 'flashcards',
    loadChildren: () =>
      import('./features/flashcards/flashcards.routes').then((m) => m.flashcardsRoutes),
  },
  {
    path: 'study',
    loadChildren: () =>
      import('./features/study/study.routes').then((m) => m.studyRoutes),
  },
  {
    path: 'statistics',
    loadChildren: () =>
      import('./features/statistics/statistics.routes').then((m) => m.statisticsRoutes),
  },
];
