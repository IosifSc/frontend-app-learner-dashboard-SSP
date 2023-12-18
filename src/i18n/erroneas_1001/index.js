import { messages as footerMessages } from '@edx/frontend-component-footer';
import { messages as headerMessages } from '@edx/frontend-component-header';
import { messages as paragonMessages } from '@edx/paragon';

import arMessages from './messages/no_usadas_ssp/ar.json';
// no need to import en messages-- they are in the defaultMessage field
import csMessages from './messages/no_usadas_ssp/cs.json';
import deMessages from './messages/de_DE.json';
import es419Messages from './messages/no_usadas_ssp/es_419.json';
import esARMessages from './messages/no_usadas_ssp/es_AR.json';
import esESMessages from './messages/es_ES.json';
import faIRMessages from './messages/no_usadas_ssp/fa_IR.json';
import frMessages from './messages/fr.json';
import frCAMessages from './messages/no_usadas_ssp/fr_CA.json';
import frFRMessages from './messages/no_usadas_ssp/fr_FR.json';
import hiMessages from './messages/no_usadas_ssp/hi.json';
import itITMessages from './messages/it_IT.json';
import plMessages from './messages/pl.json';
import ptPTMessages from './messages/pt_PT.json';
import ruMessages from './messages/ru.json';
import trTRMessages from './messages/no_usadas_ssp/tr_TR.json';
import ukMessages from './messages/no_usadas_ssp/uk.json';
import zhcnMessages from './messages/zh_CN.json';
// Añadido por Anova los idiomas pertinentes
import koKRMessages from './messages/ko_KR.json';
import nbMessages from './messages/nb.json';
import nlNLMessages from './messages/nl_NL.json';
import thMessages from './messages/th.json';


const appMessages = {
  ar: arMessages,
  de: deMessages,
  'es-419': es419Messages,
  fr: frMessages,
  'fr-ca': frCAMessages,
  'fr-fr': frFRMessages,
  'it-it': itITMessages,
  pl: plMessages,
  'tr-tr': trTRMessages,
  'zh-cn': zhcnMessages,
  'pt-pt': ptPTMessages,
  uk: ukMessages,
  ru: ruMessages,
  hi: hiMessages,
  cs: csMessages,
  'es-AR': esARMessages,
  'es-ES': esESMessages,
  'fa-IR': faIRMessages,
  'ko-kr': koKRMessages,
  'nb': nbMessages,
  'nl-nl': nlNLMessages,
  'th': thMessages,
};

export default [
  headerMessages,
  footerMessages,
  paragonMessages,
  appMessages,
];
