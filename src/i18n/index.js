import { messages as footerMessages } from '@edx/frontend-component-footer';

import arMessages from './messages/no_usadas_ssp/ar.json';
// no need to import en messages-- they are in the defaultMessage field
import es419Messages from './messages/no_usadas_ssp/es_419.json';
import frMessages from './messages/fr.json';
import frcaMessages from './messages/no_usadas_ssp/fr_CA.json';
import ptbrMessages from './messages/no_usadas_ssp/pt_BR.json';
import zhcnMessages from './messages/zh_CN.json';
// Idiomas Personalizadosº SSP
import esMessages from './messages/es.json';
import deMessages from './messages/de_DE.json';
import itITMessages from './messages/it_IT.json';
import plMessages from './messages/pl.json';
import ptPTMessages from './messages/pt_PT.json';
import ruMessages from './messages/ru.json';
import zhcnMessages from './messages/zh_CN.json';
import koKRMessages from './messages/ko_KR.json';
import nbMessages from './messages/nb.json';
import nlNLMessages from './messages/nl_NL.json';
import thMessages from './messages/th.json';


const appMessages = {
  ar: arMessages,
  'es-419': es419Messages,
  fr: frMessages,
  'fr-ca': frcaMessages,
  'pt-br': ptbrMessages,
  'zh-cn': zhcnMessages,
  es: esMessages,
  de: deMessages,
  'it-it': itITMessages,
  pl: plMessages,
  'zh-cn': zhcnMessages,
  'pt-pt': ptPTMessages,
  ru: ruMessages,
  'ko-kr': koKRMessages,
  'nb': nbMessages,
  'nl-nl': nlNLMessages,
  'th': thMessages,
};

export default [
  footerMessages,
  appMessages,
];
