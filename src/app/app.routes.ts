import { Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { errorContext } from 'rxjs/internal/util/errorContext';
import { ErrorComponent } from './components/error/error.component';
import { FemmeComponent } from './components/femme/femme.component';
import { HommeComponent } from './components/homme/homme.component';
import { HermesFComponent } from './components/hermes-f/hermes-f.component';
import { ChanelFComponent } from './components/chanel-f/chanel-f.component';
import { LuisvittonFComponent } from './components/luisvitton-f/luisvitton-f.component';
import { PradaFComponent } from './components/prada-f/prada-f.component';
import { CelineFComponent } from './components/celine-f/celine-f.component';
import { PolaineFComponent } from './components/polaine-f/polaine-f.component';
import { HermesHComponent } from './components/hermes-h/hermes-h.component';
import { ChanelHComponent } from './components/chanel-h/chanel-h.component';
import { LuisvittonHComponent } from './components/luisvitton-h/luisvitton-h.component';
import { PradaHComponent } from './components/prada-h/prada-h.component';
import { CelineHComponent } from './components/celine-h/celine-h.component';
import { PolaineHComponent } from './components/polaine-h/polaine-h.component';

export const routes: Routes = [
    {path:'accueil',title:'accueil',component:AccueilComponent},
    {path:'femme',title:'femme',component:FemmeComponent},
    {path:'homme',title:'homme',component:HommeComponent},
    {path:'hermes.f',title:'hermes-f',component:HermesFComponent},
    {path:'chanel.f',title:'chanel-f',component:ChanelFComponent},
    {path: 'louis-vuitton.f', title: 'louis-vuitton-f', component: LuisvittonFComponent },
    {path: 'prada.f', title: 'prada-f', component: PradaFComponent },
    {path: 'celine.f', title: 'celine-f', component: CelineFComponent },
    {path: 'polene.f', title: 'polene-f', component: PolaineFComponent },
    {path: 'hermes.h', title: 'hermes-h', component: HermesHComponent },
    {path: 'chanel.h', title: 'chanel-h', component: ChanelHComponent },
    {path: 'louis-vuitton.h', title: 'louis-vuitton-h', component: LuisvittonHComponent },
    {path: 'prada.h', title: 'prada-h', component: PradaHComponent },
    {path: 'celine.h', title: 'celine-h', component: CelineHComponent },
    {path: 'polene.h', title: 'polene-h', component: PolaineHComponent },
    {path:'',redirectTo:'accueil',pathMatch:'full'},
    {path:'**',title:'error',component:ErrorComponent}
];
