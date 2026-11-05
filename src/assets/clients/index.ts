/**
 * Client Logo Asset Registry & Dynamic Loader
 * Imports and registers all official client logo SVGs from src/assets/clients
 * Guarantees asset resolution in both Vite dev and Vercel production environments.
 */

import enlightAcademyLogo from './enlight-academy.svg';
import soojungAcademyLogo from './soojung-academy.svg';
import mamataFertilityLogo from './mamata-fertility.svg';
import cbcLordsLogo from './cbc-lords.svg';
import drRameshGhimireLogo from './dr-ramesh-ghimire.svg';
import gaidakotBasicHospitalLogo from './gaidakot-basic-hospital.svg';
import gaidakotMunicipalHospitalLogo from './gaidakot-municipal-hospital.svg';
import pearlDentalCareLogo from './pearl-dental-care.svg';
import ahtcLogo from './ahtc.svg';
import pushpanjaliHospitalLogo from './pushpanjali-hospital.svg';
import maulakalikaHospitalLogo from './maulakalika-hospital.svg';
import vyccuLogo from './vyccu.svg';
import atharvaSavingLogo from './atharva-saving.svg';
import kkBhandarLogo from './kk-bhandar.svg';
import forbesCollegeLogo from './forbes-college.svg';
import bostonCollegeLogo from './boston-college.svg';

export const CLIENT_LOGOS: Record<string, string> = {
  'enlight-academy': enlightAcademyLogo,
  'soojung-academy': soojungAcademyLogo,
  'mamata-fertility': mamataFertilityLogo,
  'cbc-lords': cbcLordsLogo,
  'dr-ramesh-ghimire': drRameshGhimireLogo,
  'gaidakot-basic-hospital': gaidakotBasicHospitalLogo,
  'gaidakot-municipal-hospital': gaidakotMunicipalHospitalLogo,
  'pearl-dental-care': pearlDentalCareLogo,
  'ahtc': ahtcLogo,
  'pushpanjali-hospital': pushpanjaliHospitalLogo,
  'maulakalika-hospital': maulakalikaHospitalLogo,
  'vyccu': vyccuLogo,
  'atharva-saving': atharvaSavingLogo,
  'kk-bhandar': kkBhandarLogo,
  'forbes-college': forbesCollegeLogo,
  'boston-college': bostonCollegeLogo
};

/**
 * Helper to dynamically retrieve a client logo with fallback
 */
export function getClientLogo(id: string): string {
  if (CLIENT_LOGOS[id]) {
    return CLIENT_LOGOS[id];
  }
  // Fallback to static public path if customized
  return `/assets/clients/${id}.svg`;
}
