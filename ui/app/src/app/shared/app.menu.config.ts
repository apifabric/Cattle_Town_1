import { MenuRootItem } from 'ontimize-web-ngx';

import { AmusementParkCardComponent } from './AmusementPark-card/AmusementPark-card.component';

import { CattleRideCardComponent } from './CattleRide-card/CattleRide-card.component';

import { CowCardComponent } from './Cow-card/Cow-card.component';

import { CowRideParticipationCardComponent } from './CowRideParticipation-card/CowRideParticipation-card.component';

import { FoodStallCardComponent } from './FoodStall-card/FoodStall-card.component';

import { GamblingAttractionCardComponent } from './GamblingAttraction-card/GamblingAttraction-card.component';

import { MedicalTreatmentCardComponent } from './MedicalTreatment-card/MedicalTreatment-card.component';

import { ParkVisitorCardComponent } from './ParkVisitor-card/ParkVisitor-card.component';

import { PurchaseCardComponent } from './Purchase-card/Purchase-card.component';

import { RideCardComponent } from './Ride-card/Ride-card.component';

import { StaffCardComponent } from './Staff-card/Staff-card.component';

import { TicketCardComponent } from './Ticket-card/Ticket-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'AmusementPark', name: 'AMUSEMENTPARK', icon: 'view_list', route: '/main/AmusementPark' }
    
        ,{ id: 'CattleRide', name: 'CATTLERIDE', icon: 'view_list', route: '/main/CattleRide' }
    
        ,{ id: 'Cow', name: 'COW', icon: 'view_list', route: '/main/Cow' }
    
        ,{ id: 'CowRideParticipation', name: 'COWRIDEPARTICIPATION', icon: 'view_list', route: '/main/CowRideParticipation' }
    
        ,{ id: 'FoodStall', name: 'FOODSTALL', icon: 'view_list', route: '/main/FoodStall' }
    
        ,{ id: 'GamblingAttraction', name: 'GAMBLINGATTRACTION', icon: 'view_list', route: '/main/GamblingAttraction' }
    
        ,{ id: 'MedicalTreatment', name: 'MEDICALTREATMENT', icon: 'view_list', route: '/main/MedicalTreatment' }
    
        ,{ id: 'ParkVisitor', name: 'PARKVISITOR', icon: 'view_list', route: '/main/ParkVisitor' }
    
        ,{ id: 'Purchase', name: 'PURCHASE', icon: 'view_list', route: '/main/Purchase' }
    
        ,{ id: 'Ride', name: 'RIDE', icon: 'view_list', route: '/main/Ride' }
    
        ,{ id: 'Staff', name: 'STAFF', icon: 'view_list', route: '/main/Staff' }
    
        ,{ id: 'Ticket', name: 'TICKET', icon: 'view_list', route: '/main/Ticket' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    AmusementParkCardComponent

    ,CattleRideCardComponent

    ,CowCardComponent

    ,CowRideParticipationCardComponent

    ,FoodStallCardComponent

    ,GamblingAttractionCardComponent

    ,MedicalTreatmentCardComponent

    ,ParkVisitorCardComponent

    ,PurchaseCardComponent

    ,RideCardComponent

    ,StaffCardComponent

    ,TicketCardComponent

];