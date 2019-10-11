import { Injectable } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';

/**
 *
 * static data required for initialisation of components
 *
 */

@Injectable()
export class Dragons {

  public database = [

    {
      name: 'Ivy',
      description: 'Ivy is very good at camoflage it has a thin round body and it tucks it head underneath it\'s body to make it   '
      + 'look like a lime leaf. Ivy eats insects and nano- and micro-dragons.  It stuns its prey with its tail which injects a '
      + 'fluid that makes it prey go to sleep.  It can change  colour and shape to look like any leaf, even a palm leaf!',
      source: 'Aron',
      size: 'Quite small',
      colour: 'Various colours depending on environment',
      temperament: 'Kindly',
      type: 'Grass',
      speed: 'Medium',
      attackPower: 'Not very powerful'
    },

    {
      name: 'Bewilderbeast',
      description: 'This humongous dragon is usually the leader of millions of dragons, and the place it lives is usually hidden from '
      + 'dragon hunters.  It can shoot sharp ice and it looks a bit like a dark blue and grey woolly mamouth! ',
      source: 'How to train your dragon 2',
      size: 'Enormous',
      colour: 'Grey and dark blue',
      temperament: 'Kingly',
      type: 'Ice and rock',
      speed: 'Medium',
      attackPower: 'Very very powerful'
    },

    {
      name: 'Flightmare',
      description: 'This dragon is usually owned by very powerful people like kings and queens, and it is most likely to be used in '
      + 'battle because it shoots a type of acid that freezes it enemy for quite a long time.  It usually lives by a source of '
      + 'psy-liquid and its prey is fish and smaller dragons than itself.',
      source: 'How to train your dragon episodes',
      size: 'Medium',
      colour: 'Bright blue and it glows in the dark',
      temperament: 'Shy',
      type: 'Crystal',
      speed: 'Pretty fast',
      attackPower: 'Quite strong'
    },

    {
      name: 'Common or Garden',
      description: 'A good dragon for beginners.  Often used as a pet, it is not very good at hunting or fighting.  Usually found '
      + 'around greenery, particularly ferns.  Eats srubs and berries.  Can usually be caught with only a small net due to its '
      + 'poor fighting ability.',
      source: 'How to train your dragon 2',
      size: 'Similar to Ivy',
      colour: 'Deep emerald or brown',
      temperament: 'Quite friendly but a little stupid!',
      type: 'Grass and normal',
      speed: 'Slow',
      attackPower: 'Extremely weak (do not use in battle)'
    },

    {
      name: 'Monsteres nightmare',
      description: 'aron is very cuddle',
      source: 'How to train your dragon 2'
    },

    {
      name: 'Antipodean opaleye',
      description: 'aron loves pasta!!',
      source: 'Fantastic beats and where to find them'
    },

    {
      name: 'Chinese fireball',
      description: 'aron has ten toes',
      source: 'Fantastic beats and where to find them'
    },

    {
      name: 'Common welsh green',
      description: 'aron likes to eat his bogies',
      source: 'Fantastic beats and where to find them'
    },

    {
      name: 'Hebridean black',
      description: 'aron\s likes onesies',
      source: 'Fantastic beats and where to find them'
    },

    {
      name: 'Hungarian horntail',
      description: 'aron says bthththththth',
      source: 'Fantastic beats and where to find them'
    },

    {
      name: 'Norwegian ridgback',
      description: 'aron loves daddy!!',
      source: 'Fantastic beats and where to find them'
    },

    {
      name: 'Peruvian vipertooth',
      description: 'aron loves daddy!!',
      source: 'Fantastic beats and where to find them'
    },

    {
      name: 'Romanian longhorn.',
      description: 'aron loves daddy!!',
      source: 'Fantastic beats and where to find them'
    },

    {
      name: 'Swedish short-snout',
      description: 'aron loves daddy!!',
      source: 'Fantastic beats and where to find them'
    },

    {
      name: 'Ukrainian ironbelly',
      description: 'aron loves daddy!!',
      source: 'Fantastic beats and where to find them'
    },

    {
      name: 'Fire-drake',
      description: 'aron loves daddy!!',
      source: ''
    }

  ];
}
