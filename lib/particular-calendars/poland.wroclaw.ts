import { ProperCycles } from '../constants/cycles';
import { PatronTitle, Title } from '../constants/martyrology-metadata';
import { Precedences } from '../constants/precedences';
import { CalendarDef } from '../models/calendar-def';
import { Inputs } from '../types/calendar-def';

import { Poland } from './poland';

export class Poland_Wroclaw extends CalendarDef {
  ParentCalendar = Poland;

  inputs: Inputs = {
    ceslaus_of_poland_priest: {
      precedence: Precedences.ProperMemorial_SecondPatron_11a,
      dateDef: { month: 7, date: 20 },
    },

    edmund_bojanowski: {
      precedence: Precedences.ProperMemorial_11b,
      dateDef: { month: 8, date: 7 },
    },

    hedwig_of_silesia_religious: {
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      dateDef: { month: 10, date: 16 },
    },

    maria_merkert_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 11, date: 14 },
    },

    dedication_of_the_cathedral_of_wroclaw_poland: {
      precedence: Precedences.ProperFeast_DedicationOfTheCathedralChurch_8b,
      dateDef: { month: 11, date: 16 }
    }
  };
}
