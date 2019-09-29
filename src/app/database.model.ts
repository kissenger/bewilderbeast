import { Injectable } from '@angular/core';

/**
 *
 * static data required for initialisation of components
 *
 */

@Injectable()
export class DatabaseData {

  public dData = [
    { name: 'Ivy',
      description: 'ivy is Aron\'s favourite dragon. it is big and cuddly, if a little stupid ivy is Aron\'s favourite'
      + 'dragon. it is big and cuddly, if a little stupid ivy is Aron\'s favourite dragon. it is big and cuddly, if a little'
      +  'tupid ivy is Aron\'s favourite dragon. it is big and cuddly, if a little stupid',
      source: 'Aron',
      size: 'enormous',
      colour: 'blue, ocassionally with white mottling',
      temperament: 'ferocious',
      type: 'psychic',
      speed: 'really really fast',
      attackPower: 'badass' },

    { name: 'Bewildbeast',
      description: 'aron smells of mouldy old cheese',
      source: 'How to train your dragon 2'  },

    { name: 'Flightmare',
      description: 'aron smells of peaches',
      source: 'How to train your dragon episodes' },

    { name: 'Comon orgarden',
      description: 'aron loves sausages',
      source: 'How to train your dragon 2' },

    { name: 'Monsteres nightmare',
      description: 'aron is very cuddle',
      source: 'How to train your dragon 2' },

    { name: 'Antipodean opaleye',
      description: 'aron loves pasta!!',
      source: 'Fantastic beats and where to find them' },

    { name: 'Chinese fireball',
      description: 'aron has ten toes',
      source: 'Fantastic beats and where to find them' },

    { name: 'Common welsh green',
      description: 'aron likes to eat his bogies',
      source: 'Fantastic beats and where to find them' },

    { name: 'Hebridean black',
      description: 'aron\s likes onesies',
      source: 'Fantastic beats and where to find them' },

    { name: 'Hungarian horntail',
      description: 'aron says bthththththth',
      source: 'Fantastic beats and where to find them' },

    { name: 'Norwegian ridgback',
      description: 'aron loves daddy!!',
      source: 'Fantastic beats and where to find them' },

      { name: 'Peruvian vipertooth',
      description: 'aron loves daddy!!',
      source: 'Fantastic beats and where to find them' },

      { name: 'Romanian longhorn.',
      description: 'aron loves daddy!!',
      source: 'Fantastic beats and where to find them' },

      { name: 'Swedish short-snout',
      description: 'aron loves daddy!!',
      source: 'Fantastic beats and where to find them' },

      { name: 'Ukrainian ironbelly',
      description: 'aron loves daddy!!',
      source: 'Fantastic beats and where to find them' },

      { name: 'Fire-drake',
      description: 'aron loves daddy!!',
      source: '' },

      { name: '',
      description: 'aron loves daddy!!',
      source: '' },

      { name: '',
      description: 'aron loves daddy!!',
      source: '' },

      { name: '',
      description: 'aron loves daddy!!',
      source: '' }

  ];

  loadDB() {
    return this.dData;
  }
}
