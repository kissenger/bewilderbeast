import { Injectable } from '@angular/core';
// import { forEach } from '@angular/router/src/utils/collection';

/**
 *
 * static data required for initialisation of components
 *
 */

@Injectable()
export class Animals {

  public database = [

    {
      name: 'Unicorns',
      description: 'Unicorns have only one horn  '
      + 'which is why they are called unicorns '
      + 'because uni means one and corn means ..oh, wait...',
      source: 'Everyone knows what a unicorn is...'
    },

    {
      name: 'Rabbit',
      description: 'fluffy thing, big ears ',
      source: 'God'
    }
  ];
}
