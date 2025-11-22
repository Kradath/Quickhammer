import { createRouter, createWebHistory } from "vue-router";
import Main from '../components/Main.vue';
import CoreRules from '../components/CoreRules.vue';
import SpecialRules from '../components/SpecialRules.vue';

import UnitTypes from '../components/UnitTypes.vue';
import Weapon from '../components/Weapon.vue';
import RangeWeapon from '../components/RangeWeapon.vue';
import MeleeWeapon from '../components/MeleeWeapon.vue';
import Factions from '../components/Factions.vue';
import Legiones from '../components/Legiones.vue';

import UnitList from '../components/UnitList.vue';
import Traits from '../components/Traits.vue';
import Wargear from '../components/Wargear.vue';



const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/core-rules',
        component: CoreRules
    },
    {
        path: '/special-rules',
        component: SpecialRules

    },

    {
        path: '/unit-types',
        component: UnitTypes

    },
    {
        path: '/weapon',
        component: Weapon

    },
    {
        path: '/weapon/range',
        component: RangeWeapon

    },
    {
        path: '/weapon/melee',
        component: MeleeWeapon

    },
    {
        path: '/factions',
        component: Factions

    },
    {
        path: '/traits',
        component: Traits

    },
    {
        path: '/wargear',
        component: Wargear

    },
    {
        path: '/factions/legiones-astartes',
        component: Legiones

    },

    {
        path: '/factions/legiones-astartes/unit-list',
        component: UnitList

    },
    {
        path: '/factions/legiones-astartes/unit-list/:unit',
        component: () => import('../components/Factions/LegionesAstartes/Astartes.vue'),

    },
    { 
        path: '/:catchAll(.*)', name: 'NotFound', 
        component: () => import('../components/NotFound.vue') 
    },



]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() { return { top: 0 }; }
})

export default router
