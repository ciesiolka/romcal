import { PatronTitle } from '../constants/martyrology-metadata';
import { Precedences } from '../constants/precedences';
import { CalendarDef } from '../models/calendar-def';
import { Inputs } from '../types/calendar-def';

import { Poland } from './poland';

export class Poland_Wroclaw extends CalendarDef {
  ParentCalendar = Poland;

  inputs: Inputs = {
    wenceslaus_i_of_bohemia_martyr: {
      precedence: Precedences.OptionalMemorial_12,
    },

    george_matulaitis_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 1, date: 27 },
    },

    boleslawa_mary_lament_virgin: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 1, date: 29 },
    },

    casimir_of_poland: {
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      titles: { append: [PatronTitle.PatronOfTheMetropoly] },
    },

    george_of_lydda_martyr: {
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      titles: { append: [PatronTitle.PatronOfTheArchidiocese] },
      // When it falls between Palm Sunday and the Second Sunday of Easter inclusive,
      // it is transferred to the Monday after the Second Sunday of Easter,
      // unless Sollemnity of Adalbert of Prague is transferred to that day --
      // then it is transferred to the Tuesday.

      /** @todo how to encode that logic in the object? */
      dateDef: { month: 4, date: 24 },
    },

    dedication_of_the_archicathedral_basilica_of_bialystok_poland: {
      dateDef: { month: 5, date: 30 },
      precedence: Precedences.ProperFeast_DedicationOfTheCathedralChurch_8b,
    },

    miecislaus_bohatkiewicz_and_companions: {
      dateDef: { month: 3, date: 12 },
      precedence: Precedences.OptionalMemorial_12,
      martyrology: [
        'miecislaus_bohatkiewicz_priest',
        'henry_hlebowicz_priest',
        'ladislaus_mackowiak_priest',
        'stanislaus_pyrtek_priest',
        'companions_martyrs',
      ],
    },

    wenceslaus_i_of_bohemia_martyr: {
      precedence: Precedences.OptionalMemorial_12,
    },

    michael_sopocko_priest: {
      dateDef: { month: 9, date: 28 },
      precedence: Precedences.OptionalMemorial_12,
    },

    george_popieluszko_priest: {
      dateDef: {month: 10, date: 19 },
      precedence: Precedences.OptionalMemorial_12
    },

    our_lady_of_the_gate_of_dawn: {
      customLocaleId: 'our_lady_of_the_gate_of_dawn_mother_of_mercy',
      dateDef: { month: 11, date: 16 },
      titles: [ PatronTitle.PatronOfTheArchidiocese ],
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a
    }
  };
}
