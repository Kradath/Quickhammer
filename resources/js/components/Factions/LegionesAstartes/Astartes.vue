<template>
  <main>
    <component :is="currentComponent" />
  </main>
</template>
<script>
import NotFound from "../../NotFound.vue";
import SaturninePraetor from "./HighCommand/SaturninePraetor.vue";
import CataphractiiPraetor from "./HighCommand/CataphractiiPraetor.vue";
import TartarosPraetor from "./HighCommand/TartarosPraetor.vue";
import Praetor from "./HighCommand/Praetor.vue";
import PraetorJP from "./HighCommand/PraetorJP.vue";
import TacticalSquad from "./Troops/TacticalSquad.vue";
import DespoilerSquad from "./Troops/DespoilerSquad.vue";
import BreacherSquad from "./Troops/BreacherSquad.vue";
import AssaultSquad from "./Troops/AssaultSquad.vue";

import Centurion from "./Command/Centurion.vue";
import CenturionJP from "./Command/CenturionJP.vue";
import CataphractiiCenturion from "./Command/CataphractiiCenturion.vue";
import TartarosCenturion from "./Command/TartarosCenturion.vue";
import DamoclesCommandRhino from "./Command/CommandRhino.vue";
import Chaplain from "./Command/Chaplain.vue";
import Esoterist from "./Command/Esoterist.vue";
import Herald from "./Command/Herald.vue";
import Champion from "./Command/Champion.vue";
import Librarian from "./Command/Librarian.vue";
import MasterOfSignals from "./Command/MasterOfSignals.vue";
import Moritat from "./Command/Moritat.vue";
import Optae from "./Command/Optae.vue";
import OptaeJP from "./Command/OptaeJP.vue";
import Overseer from "./Command/Overseer.vue";
import Praevian from "./Command/Praevian.vue";
import SiegeBreaker from "./Command/SiegeBreaker.vue";
import Vigilator from "./Command/Vigilator.vue";
import PraetorianCS from "./Retunes/PraetorianCS.vue";
import PraetorianCSJP from "./Retunes/PraetorianCSJP.vue";
import CenturionCS from "./Retunes/CenturionCS.vue";
import AugurC from "./Retunes/AugurC.vue";
import CataphractiiCS from "./Retunes/CataphractiiCS.vue";
import TartarosCS from "./Retunes/TartCS.vue";
import TSS from "./Support/TSS.vue";
import HSS from "./Support/HSS.vue";
import RapierBattery from "./Support/RapierBattery.vue";
import Apothecary from "./Support/Apothecary.vue";
import Techmarine from "./Support/Techmarine.vue";
import DeathstormDP from "./Support/DeathstormDP.vue";
import AraknaeQAP from "./Support/AraknaeQAP.vue";
import Rhino from "./Transports/Rhino.vue";
import DropPod from "./Transports/DropPod.vue";
import Termite from "./Transports/Termite.vue";
import LandRaider from "./HeavyTransports/LandRaider.vue";
import Spartan from "./HeavyTransports/Spartan.vue";
import DreadDP from "./HeavyTransports/DreadDP.vue";
import Dreadclaw from "./HeavyTransports/Dreadclaw.vue";
import Kharybdis from "./HeavyTransports/Kharybd.vue";
import LandRaiderExp from "./Recon/LandRaiderExplorator.vue";
import ReconSquad from "./Recon/ReconSquad.vue";
import Sabre from "./Recon/Sabre.vue";
import Outrider from "./Recon/Outrider.vue";
import Tarantula from "./Recon/Tarantula.vue";
import LandSpeeder from "./FastAttack/LandSpeeder.vue";
import Scimitar from "./FastAttack/Scimitar.vue";
import Javelin from "./FastAttack/Javelin.vue";
import FireRaptor from "./FastAttack/FireRaptor.vue";
import StormEagle from "./FastAttack/StormEagle.vue";
import Xiphon from "./FastAttack/Xiphon.vue";
import VetTacticalSquad from "./Elites/VetTacticalSquad.vue";
import VetAssaultSquad from "./Elites/VetAssaultSquad.vue";
import SeekerSquad from "./Elites/SeekerSquad.vue";
import CataphractiiSquad from "./HeavyAssault/CataphractiiSquad.vue";
import TartarosSquad from "./HeavyAssault/TartarosSquad.vue";
import SaturnineSquad from "./HeavyAssault/SaturnineSquad.vue";
import Contemptor from "./WarEngines/Contemptor.vue";
import Deredeo from "./WarEngines/Deredeo.vue";
import Leviathan from "./WarEngines/Leviathan.vue";
import Saturnine from "./WarEngines/Saturnine.vue";
import Vindicator from "./Armour/Vindicator.vue";
import Predator from "./Armour/Predator.vue";
import Sicaran from "./Armour/Sicaran.vue";
import SicaranVenator from "./Armour/SicaranVenator.vue";
import Kratos from "./Armour/Kratos.vue";
import Scorpius from "./Armour/Scorpius.vue";
import Arquitor from "./Armour/Arquitor.vue";
import Cerberus from "./LoW/Cerberus.vue";
import Typhon from "./LoW/Typhon.vue";
import Glaive from "./LoW/Glaive.vue";
import Fellblade from "./LoW/Fellblade.vue";
import Falchion from "./LoW/Falchion.vue";
import Thunderhawk from "./LoW/Thunderhawk.vue";
import Sokar from "./LoW/Sokar.vue";
import Mastodon from "./LoW/Mastodon.vue";
// alpha legion
import Lernaean from "./LegionUnits/AL/LernaeanTerminators.vue";
import Headhunter from "./LegionUnits/AL/Headhunter.vue";
import Saboteur from "./LegionUnits/AL/Saboteur.vue";
import Autilon from "./LegionUnits/AL/Autilon.vue";
import Effrit from "./LegionUnits/AL/Effrit.vue";
import ArmillusDynat from "./LegionUnits/AL/ArmillusDynat.vue";
import Exodus from "./LegionUnits/AL/Exodus.vue";
import Omegon from "./LegionUnits/AL/Omegon.vue";
import ALinductii from "./LegionUnits/AL/ALinductii.vue";

//iron hands
import Immortal from "./LegionUnits/IH/Immortals.vue";
import Gorgon from "./LegionUnits/IH/Gorgon.vue";
import Meduson from "./LegionUnits/IH/Meduson.vue";
import IFather from "./LegionUnits/IH/IFather.vue";
import Morlock from "./LegionUnits/IH/Morlock.vue";
import IFatherInAA from "./LegionUnits/IH/IFatherInAA.vue";
import Manus from "./LegionUnits/IH/Manus.vue";
import IHinductii from "./LegionUnits/IH/IHinductii.vue";

//death guard
import Mort from "./LegionUnits/DG/Mort.vue";
import DGinductii from "./LegionUnits/DG/DGinductii.vue";
import Typhus from "./LegionUnits/DG/Typhon.vue";
import Deathshroud from "./LegionUnits/DG/Deathshroud.vue";
import Gravewarden from "./LegionUnits/DG/Gravewarden.vue";
import MortusPoisoner from "./LegionUnits/DG/MortusPoisoner.vue";

//sons of horus
import Horus from "./LegionUnits/SH/Horus.vue";
import HorusAsc from "./LegionUnits/SH/HorusAsc.vue";
import Aba from "./LegionUnits/SH/Aba.vue";
import LittleHorus from "./LegionUnits/SH/LittleHorus.vue";
import Tybalt from "./LegionUnits/SH/Tybalt.vue";
import Vheren from "./LegionUnits/SH/Vheren.vue";
import Loken from "./LegionUnits/SH/Loken.vue";
import Malog from "./LegionUnits/SH/Malog.vue";
import DarkEm from "./LegionUnits/SH/DarkEm.vue";
import Justaerin from "./LegionUnits/SH/Justaerin.vue";
import Reaver from "./LegionUnits/SH/Reaver.vue";
import DarkEmTerm from "./LegionUnits/SH/DarkEmTerm.vue";
import ReaverAg from "./LegionUnits/SH/ReaverAg.vue";
import Chieftain from "./LegionUnits/SH/Chieftain.vue";
import SHinductii from "./LegionUnits/SH/SHinductii.vue";

//imperial fists
import Dorn from "./LegionUnits/IF/Dorn.vue";
import Sigismund from "./LegionUnits/IF/Sigismund.vue";
import Fafnir from "./LegionUnits/IF/Fafnir.vue";
import Evander from "./LegionUnits/IF/Evander.vue";
import Camba from "./LegionUnits/IF/Camba.vue";
import Alexis from "./LegionUnits/IF/Alexis.vue";
import Templar from "./LegionUnits/IF/Templar.vue";
import Phalanx from "./LegionUnits/IF/Phalanx.vue";
import Huscarl from "./LegionUnits/IF/Huscarl.vue";
import IFinductii from "./LegionUnits/IF/IFinduct.vue";
import Aetos from "./LegionUnits/IF/Aetos.vue";

//iron Warriors
import Pertu from "./LegionUnits/IW/Pertu.vue";
import Warsmith from "./LegionUnits/IW/Warsmith.vue";
import Tyrants from "./LegionUnits/IW/Tyrants.vue";
import IronCircle from "./LegionUnits/IW/IronCircle.vue";
import Dominator from "./LegionUnits/IW/Dominator.vue";
import WarsmithAA from "./LegionUnits/IW/WarsmithAA.vue";
import Narik from "./LegionUnits/IW/Narik.vue";
import Havocs from "./LegionUnits/IW/Havocs.vue";
import IWinductii from "./LegionUnits/IW/IWinduct.vue";

//Dark Angels
import Lion from "./LegionUnits/DA/Lion.vue";
import Corswain from "./LegionUnits/DA/Corswain.vue";
import Marduk from "./LegionUnits/DA/Marduk.vue";
import DeathwingCD from "./LegionUnits/DA/DeathwingCD.vue";
import Interemptors from "./LegionUnits/DA/Interemptors.vue";
import ISknights from "./LegionUnits/DA/ISknights.vue";
import DeathwingTACD from "./LegionUnits/DA/DeathwingTACD.vue";
import ISknightsOrder from "./LegionUnits/DA/ISknightsOrder.vue";
import Excindio from "./LegionUnits/DA/Excindio.vue";
import Firewing from "./LegionUnits/DA/Firewing.vue";
import DAinductii from "./LegionUnits/DA/DAinductii.vue";

//Salamanders
import Vulkan from "./LegionUnits/S/Vulkan.vue";
import Firedrake from "./LegionUnits/S/Firedrake.vue";
import Cassian from "./LegionUnits/S/Cassian.vue";
import Pyroclast from "./LegionUnits/S/Pyroclast.vue";
import Adherent from "./LegionUnits/S/Adherent.vue";
import Sanctifier from "./LegionUnits/S/Sanctifier.vue";
import Sinduct from "./LegionUnits/S/Sinduct.vue";

//Night Lords
import Konrad from "./LegionUnits/NL/Konrad.vue";
import Sevatar from "./LegionUnits/NL/Sevatar.vue";
import Contekar from "./LegionUnits/NL/Contekar.vue";
import Raptors from "./LegionUnits/NL/Raptors.vue";
import Terror from "./LegionUnits/NL/Terror.vue";
import Atramentar from "./LegionUnits/NL/Atramentar.vue";
import NLinduct from "./LegionUnits/NL/NLinduct.vue";

//World Eaters
import Angron from "./LegionUnits/WE/Angron.vue";
import AngronT from "./LegionUnits/WE/AngronT.vue";
import Kharn from "./LegionUnits/WE/Kharn.vue";
import Lotara from "./LegionUnits/WE/Lotara.vue";
import RedButch from "./LegionUnits/WE/RedButch.vue";
import Rampager from "./LegionUnits/WE/Rampager.vue";
import RHDestroyerM from "./LegionUnits/WE/RHDestroyerM.vue";
import RHDestroyerA from "./LegionUnits/WE/RHDestroyerA.vue";
import WEinduct from "./LegionUnits/WE/WEinduct.vue";

//Ultramarines
import Guilliman from "./LegionUnits/U/Guilliman.vue";
import Remus from "./LegionUnits/U/Remus.vue";
import Invictarus from "./LegionUnits/U/Invictarus.vue";
import PreatorianB from "./LegionUnits/U/PreatorianB.vue";
import LocutarusS from "./LegionUnits/U/LocutarusS.vue";
import Fulmentarus from "./LegionUnits/U/Fulmentarus.vue";
import NemesisD from "./LegionUnits/U/NemesisD.vue";
import Uinduct from "./LegionUnits/U/Uinduct.vue";

//Raven Guard
import Corvus from "./LegionUnits/RG/Corvus.vue";
import Nex from "./LegionUnits/RG/Nex.vue";
import Mor from "./LegionUnits/RG/Mor.vue";
import Fury from "./LegionUnits/RG/Fury.vue";
import Delivery from "./LegionUnits/RG/Delivery.vue";
import RGinduct from "./LegionUnits/RG/RGinduct.vue";
export default {
  computed: {
    currentComponent() {
      const unitName = this.$route.params["unit"];
      switch (unitName) {
        case "praetor-with-jp":
          return PraetorJP;
        case "praetor-сta":
          return CataphractiiPraetor;
        case "praetor-tta":
          return TartarosPraetor;
        case "praetor-saturnine-ta":
          return SaturninePraetor;
        case "praetor":
          return Praetor;
        case "centurion":
          return Centurion;
        case "centurion-jp":
          return CenturionJP;
        case "centurion-cta":
          return CataphractiiCenturion;
        case "centurion-tta":
          return TartarosCenturion;
        case "damocles-command-rhino":
          return DamoclesCommandRhino;
        case "chaplain":
          return Chaplain;
        case "esoterist":
          return Esoterist;
        case "herald":
          return Herald;
        case "legion-champion":
          return Champion;
        case "librarian":
          return Librarian;
        case "master-of-signals":
          return MasterOfSignals;
        case "moritat":
          return Moritat;
        case "optae":
          return Optae;
        case "optae-jp":
          return OptaeJP;
        case "overseer":
          return Overseer;
        case "praevian":
          return Praevian;
        case "siege-breaker":
          return SiegeBreaker;
        case "vigilator":
          return Vigilator;
        case "praetorian-command-squad":
          return PraetorianCS;
        case "praetorian-command-squad-with-jump-packs":
          return PraetorianCSJP;
        case "centurion-command-squad":
          return CenturionCS;
        case "augur-command-and-control-squad":
          return AugurC;
        case "cataphractii-terminator-command-squad":
          return CataphractiiCS;
        case "tartaros-terminator-command-squad":
          return TartarosCS;
        case "tactical-support-squad":
          return TSS;
        case "heavy-support-squad":
          return HSS;
        case "rapier-battery":
          return RapierBattery;
        case "apothecary":
          return Apothecary;
        case "techmarine":
          return Techmarine;
        case "deathstorm-drop-pod":
          return DeathstormDP;
        case "araknae-quad-accelerator-platform":
          return AraknaeQAP;
        case "rhino":
          return Rhino;
        case "drop-pod":
          return DropPod;
        case "termite":
          return Termite;
        case "land-raider-carrier":
          return LandRaider;
        case "spartan":
          return Spartan;
        case "dreadnought-drop-pod":
          return DreadDP;
        case "dreadclaw-drop-pod":
          return Dreadclaw;
        case "kharybdis":
          return Kharybdis;
        case "land-raider-explorator":
          return LandRaiderExp;
        case "reconnaissance-squad":
          return ReconSquad;
        case "sabre":
          return Sabre;
        case "outrider-squadron":
          return Outrider;
        case "tarantula-battery":
          return Tarantula;
        case "land-speeder-squadron":
          return LandSpeeder;
        case "scimitar-jetbike-squadron":
          return Scimitar;
        case "javelin-squadron":
          return Javelin;
        case "fire-raptor":
          return FireRaptor;
        case "storm-eagle":
          return StormEagle;
        case "xiphon-interceptor":
          return Xiphon;

        case "tactical-squad":
          return TacticalSquad;
        case "despoiler-squad":
          return DespoilerSquad;
        case "breacher-squad":
          return BreacherSquad;
        case "assault-squad":
          return AssaultSquad;

        case "seeker-squad":
          return SeekerSquad;
        case "veteran-tactical-squad":
          return VetTacticalSquad;
        case "veteran-assault-squad":
          return VetAssaultSquad;

        case "cataphractii-terminator-squad":
          return CataphractiiSquad;
        case "tartaros-terminator-squad":
          return TartarosSquad;
        case "saturnine-terminator-squad":
          return SaturnineSquad;

        case "contemptor-dreadnought":
          return Contemptor;
        case "deredeo-dreadnought":
          return Deredeo;
        case "leviathan-dreadnought":
          return Leviathan;
        case "saturnine-dreadnought":
          return Saturnine;

        case "vindicator-siege-tank":
          return Vindicator;
        case "predator":
          return Predator;
        case "sicaran":
          return Sicaran;
        case "sicaran-venator":
          return SicaranVenator;
        case "kratos-assault-tank":
          return Kratos;
        case "scorpius-missile-tank":
          return Scorpius;
        case "arquitor-bombard":
          return Arquitor;

        case "cerberus-heavy-tank-destroyer":
          return Cerberus;
        case "typhon-heavy-siege-tank":
          return Typhon;
        case "glaive-super-heavy-special-weapons-tank":
          return Glaive;
        case "fellblade-super-heavy-battle-tank":
          return Fellblade;
        case "falchion-super-heavy-tank-destroyer":
          return Falchion;
        case "tunderhawk-gunship":
          return Thunderhawk;
        case "sokar-stormbird":
          return Sokar;
        case "mastodon-super-heavy-assault-transport":
          return Mastodon;

        case "lernaean-terminator-squad":
          return Lernaean;
        case "headhunter-kill-team":
          return Headhunter;
        case "saboteur":
          return Saboteur;
        case "exodus":
          return Exodus;
        case "autilon-skorr":
          return Autilon;
        case "effrit-diruption-cadre":
          return Effrit;
        case "alpharius":
          return Omegon;
        case "armillus-dynat":
          return ArmillusDynat;
        case "alpha-legion-inductii-squad":
          return ALinductii;

        case "medusan-immortals-squad":
          return Immortal;
        case "gorgon-terminator-squad":
          return Gorgon;
        case "morlock-terminator-squad":
          return Morlock;
        case "shadrak-meduson":
          return Meduson;
        case "iron-father":
          return IFather;
        case "iron-father-in-artificer-armour":
          return IFatherInAA;  
        case "ferrus-manus":
          return Manus;
        case "iron-hands-inductii-squad":
          return IHinductii;

        case "death-guard-inductii-squad":
          return DGinductii;
        case "mortarion":
          return Mort;
        case "calas-typhon":
          return Typhus;
        case "deathshroud-terminator-squad":
          return Deathshroud;
        case "grave-warden-terminator-squad":
          return Gravewarden;
        case "mortus-poisoner-squad":
          return MortusPoisoner;
        
        case "horus-lupercal":
          return Horus;
        case "horus-ascended":
          return HorusAsc;
        case "ezekyle-abaddon":
          return Aba;
        case "little-horus-aximand":
          return LittleHorus;
        case "tybalt-marr":
          return Tybalt;
        case "vheren-ashurahaddon":
          return Vheren;
        case "garviel-loken":
          return Loken;
        case "maloghurst-the-twisted":
          return Malog;
        case "dark-emissary":
          return DarkEm;
        case "justaerin-terminator-squad":
          return Justaerin;
        case "reaver-attack-squad":
          return Reaver;
        case "dark-emissary-in-ta":
          return DarkEmTerm;
        case "reaver-aggressor-squad":
          return ReaverAg;
        case "chieftain-squad":
          return Chieftain;
        case "sons-of-horus-inductii-squad":
          return SHinductii;

        case "rogal-dorn":
          return Dorn;
        case "sigismund":
          return Sigismund;
        case "fafnir-raan":
          return Fafnir;
        case "evander-garrius":
          return Evander;
        case "camba-diaz":
          return Camba;
        case "alexis-polux":
          return Alexis;
        case "templar-brethren":
          return Templar;
        case "phalanx-warder-squad":
          return Phalanx;
        case "huscarl-terminator-retinue":
          return Huscarl;
        case "imperial-fists-inductii-squad":
          return IFinductii;
        case "aetos-dios":
          return Aetos;
        
        case "perturabo":
          return Pertu;
        case "warsmith":
          return Warsmith;
        case "tyrant-siege-terminator-squad":
          return Tyrants;
        case "iron-circle-maniple":
          return IronCircle;
        case "dominator-cohort":
          return Dominator;
        case "warsmith-in-artificer-armour":
          return WarsmithAA;
        case "narik-dreygur":
          return Narik;
        case "iron-havocs":
          return Havocs;
        case "iron-warriors-inductii-squad":
          return IWinductii;
        
        case "lion-el-jonson":
          return Lion;
        case "corswain":
          return Corswain;
        case "marduk-sedras":
          return Marduk;
        case "deathwing-companion":
          return DeathwingCD;
        case "dreadwing-intereptors":
          return Interemptors;
        case "inner-circle-knights-cenobium":
          return ISknights;
        case "deathwing-companion-in-ta":
          return DeathwingTACD;
        case "order-of-broken-claws":
          return ISknightsOrder;
        case "excindio-battle-automata":
          return Excindio;
        case "firewing-enigmatus-cabal":
          return Firewing;
        case "dark-angels-inductii":
          return DAinductii;

        case "vulkan":
          return Vulkan;
        case "firedrake-terminator-squad":
          return Firedrake;
        case "cassian-dracos-reborn":
          return Cassian;
        case "pyroclast-squad":
          return Pyroclast;
        case "adherents-squad":
          return Adherent;
        case "sanctifier-squad":
          return Sanctifier;
        case "salamanders-inductii-squad":
          return Sinduct;

        case "konrad-curze":
          return Konrad;
        case "sevatar":
          return Sevatar;
        case "contekar-terminator-squad":
          return Contekar;
        case "night-raptor-squad":
          return Raptors;
        case "terror-squad":
          return Terror;
        case "atramentar-flay-clade":
          return Atramentar;
        case "night-lord-inductii-squad":
          return NLinduct;

        case "angron":
          return Angron;
        case "angron-transfigured":
          return AngronT;
        case "kharn-the-bloody":
          return Kharn;
        case "lotara-sarrin":
          return Lotara;
        case "red-butchers":
          return RedButch;
        case "rampager-squad":
          return Rampager;
        case "red-hand-destroyer-mortalis-squad":
          return RHDestroyerM;
        case "red-hand-destroyer-assault-squad":
          return RHDestroyerA;
        case "world-eaters-inductii-squad":
          return WEinduct;

        case "roboute-guilliman":
          return Guilliman;
        case "remus-ventanus":
          return Remus;
        case "invictarus-suzerain-squad":
          return Invictarus;
        case "praetorian-breacher-squad":
          return PreatorianB;
        case "locutarus-storm-squad":
          return LocutarusS;
        case "fulmentarus-terminator-squad":
          return Fulmentarus;
        case "nemesis-destroyer-squad":
          return NemesisD;
        case "ultramarines-inductii-squad":
          return Uinduct;

        case "corvus-corax":
          return Corvus;
        case "kaedes-nex":
          return Nex;
        case "mor-deythan-squad":
          return Mor;
        case "dark-fury-squad":
          return Fury;
        case "deliverers-squad":
          return Delivery;
        case "raven-guard-inductii-squad":
          return RGinduct;
          
        default:
          return NotFound; 
      }
    },
  },
};
</script>

