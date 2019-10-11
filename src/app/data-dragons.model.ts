import { Injectable } from '@angular/core';
// import { forEach } from '@angular/router/src/utils/collection';

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
      source: 'How to train your dragon books',
      size: 'Similar to Ivy',
      colour: 'Deep emerald or brown',
      temperament: 'Quite friendly but a little stupid!',
      type: 'Grass and normal',
      speed: 'Slow',
      attackPower: 'Extremely weak (do not use in battle)'
    },

    {
      name: 'Monstrous nightmare',
      description: 'This dragon, like the flightmare, is owned by kings and queens.  They are used as pets, and in battle. '
      + 'They breathe fire and has extremely sharp claws and teeth.  Monstrous nightmares are carnivores, so they eat '
      + 'any kind of meat; they are not fussy eaters!',
      source: 'How to train your dragon books',
      size: 'Roughly twice the size of a Common or Garden',
      colour: 'Deep scarlett or purple',
      temperament: 'Ferocious in battle',
      type: 'Fire and phychic',
      speed: 'Medium',
      attackPower: 'Pretty strong'
    },

    {
      name: 'Antipodean Opaleye',
      description: 'The Antipodean Opaleye It can be seen over snowy mountains and swamps.  It eats mountain goats and '
      + 'other types of deer and wild boar.  It can sometimes be agressive against humans when protecting babies or, if it is '
      + 'a king or queen, its colony of dragons.',
      source: 'Fantastic beats and where to find them',
      size: 'Extremely big',
      colour: 'Clue in the name, usually opal',
      temperament: 'Quite aggressive',
      type: 'Flying and phychic',
      speed: 'Pretty fast',
      attackPower: 'Extremely powerful'
    },

    {
      name: 'Chinese Fireball',
      description: 'This dragon (as in the name) you are most likely to find in China.  They are called Chinese Fireballs because '
      + 'they can belch very hot balls of fire and/or magma.  The live in volcanoes and help lots of fire-types make them erupt. '
      + 'When they are helping volcanoes erupt, they help with the flow of magna, not the big clumps of ash or fire.',
      source: 'Fantastic beats and where to find them',
      size: 'Roughly the size of two Monstorous nightmares, or four Common or Gardens',
      colour: 'Bright red, easily spotted around trees',
      temperament: 'Good pets, but not very bright',
      type: 'Fire',
      speed: 'About the speed of a mouse darting around your house',
      attackPower: 'Fairly powerful when in large groups. Not very powerful on their own.'
    },

    {
      name: 'Common Welsh Green',
      description: 'These grass-type dragons you will find in Wales, usually hiding in trees or around long grasses or ferns. '
      + 'These dragons are gentle and are usually kept in zoos - they are an endangered species because of hunting.  People hunt  '
      + 'them for their hide, which is excellent camouflage',
      source: 'Fantastic beats and where to find them',
      size: 'Pretty big',
      colour: 'Lots and lots of different shades of green - well camouflaged in trees, ferns and grasses.',
      temperament: 'Quite gentle, good pets if you have quite a big house and garden',
      type: 'Grass',
      speed: 'Not very quick',
      attackPower: 'About as powerful as a bunny rabbit, as they only eat grass.'      
    },

    {
      name: 'Hebridean Black',
      description: 'This dragon has purple eyes and is an obvious psychic type - it is also a rock type due to its sooty-black hide. '
      + 'The Hebridean Black is so big it can destroy ships with its mighty jaws.  Often found curling around small rocky islands '
      + 'in the sea.  It eats large sea mammals such as large seals and whales of any shape or size.',
      source: 'Fantastic beats and where to find them',
      size: 'Monstrously big',
      colour: 'Sooty-black with deep purple eyes',
      temperament: 'Ferocious',
      type: 'Psychic and rock',
      speed: 'Very slow',
      attackPower: 'Extremenly powerful' 
    },

    {
      name: 'Hungarian Horntail',
      description: 'On the end of this dragon\'s tail is a spikey ball of rock, which the Hungarian Horntail uses to kill its prey of '
      + 'small fish.  It is related to the Norweigen Ridgeback and is the same in a lot of ways, but the Hungarian Horntail does not '
      + 'make a good pet due to its ferocious ways.',
      source: 'Fantastic beats and where to find them',
      size: 'As small as a large rat',
      colour: 'Pitch black',
      temperament: 'Not quite ferocious',
      type: 'Rock and fighting',
      speed: 'As fast as a mouse running away from a hungry cat',
      attackPower: 'Reasonable powerful for its small size'       
    },

    {
      name: 'Norwegian Ridgeback',
      description: 'The Norwegian Ridgeback is a close relative of the Hungarian Horntail, and is a good pet if you have children. '
      + 'Their favourite food is small fish.  The Norweigian Ridgeback is light grey and does not have a spikey ball at the end of '
      + 'it\'s tail, unlike the Hungarian Horntail',
      source: 'Fantastic beats and where to find them',
      size: 'About the same size as a Hungarian Horntail',
      colour: 'Light grey',
      temperament: 'Friendly, a good pet for children',
      type: 'Rock and normal',
      speed: 'About the speed of a mouse not being chased by a hungry cat',
      attackPower: 'Relatively gentle'        
    },

    {
      name: 'Peruvian Vipertooth',
      source: 'Fantastic beats and where to find them'
    },

    {
      name: 'Romanian Longhorn',
      source: 'Fantastic beats and where to find them'
    },

    {
      name: 'Swedish Short-Snout',
      source: 'Fantastic beats and where to find them'
    },

    {
      name: 'Ukrainian Ironbelly',
      source: 'Fantastic beats and where to find them'
    },

    {
      name: 'Fire-drake'
    }

  ];
}
