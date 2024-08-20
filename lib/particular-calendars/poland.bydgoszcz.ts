import { PatronTitle } from '../constants/martyrology-metadata';
import { Precedences } from '../constants/precedences';
import { CalendarDef } from '../models/calendar-def';
import { Inputs } from '../types/calendar-def';

import { Poland } from './poland';

export class Poland_Bydgoszcz extends CalendarDef {
  ParentCalendar = Poland;

  inputs: Inputs = {
    francis_dachtera_anthony_swiadek_and_companions: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 6, date: 12 },
      martyrology: ['francis_dachtera_priest', 'anthony_swiadek_priest'],
    },

    michael_kozal_bishop: {
      precedence: Precedences.ProperMemorial_SecondPatron_11a,
      titles: { append: [PatronTitle.CopatronOfTheDiocese] },
    },

    dedication_of_the_cathedral_of_bydgoszcz_poland: {
      precedence: Precedences.ProperFeast_DedicationOfTheCathedralChurch_8b,
      dateDef: { month: 8, date: 31 },
    },

    nativity_of_the_blessed_virgin_mary: {
      customLocaleId:
        'nativity_of_the_blessed_virgin_mary_mother_of_beautiful_love',
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      titles: { append: [PatronTitle.PatronOfTheDiocese] },
    },
  };
}
