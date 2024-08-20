import { PatronTitle } from '../constants/martyrology-metadata';
import { Precedences } from '../constants/precedences';
import { CalendarDef } from '../models/calendar-def';
import { Inputs } from '../types/calendar-def';

import { Poland } from './poland';

export class Poland_MilitaryOrdinariate extends CalendarDef {
  ParentCalendar = Poland;

  inputs: Inputs = {
    dedication_of_the_cathedral_of_militariate_ordinariate_in_warsaw_poland: {
      precedence: Precedences.ProperFeast_DedicationOfTheCathedralChurch_8b,
      dateDef: { month: 3, date: 12 },
    },

    our_lady_queen_of_poland: {
      customLocaleId: 'our_lady_queen_of_poland_hetman_of_polish_solider',
    },

    ladislaus_miegon_and_companions: {
      martyrology: ['ladislaus_miegon_priest', 'companions_martyrs'],
      dateDef: { month: 6, date: 12 },
      precedence: Precedences.OptionalMemorial_12,
    },

    wenceslaus_i_of_bohemia_martyr: {
      precedence: Precedences.OptionalMemorial_12,
    },

    michael_sopocko_priest: {
      dateDef: { month: 9, date: 28 },
      precedence: Precedences.OptionalMemorial_12,
    },
  };
}
