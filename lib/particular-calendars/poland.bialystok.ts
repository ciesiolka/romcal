import { ProperCycles } from '../constants/cycles';
import { PatronTitle, Title } from '../constants/martyrology-metadata';
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

    michael_sopocko_priest: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 9, date: 28 }
    }
  };
}
