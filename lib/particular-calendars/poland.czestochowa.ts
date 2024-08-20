import { PatronTitle } from "../constants/martyrology-metadata";
import { Precedences } from "../constants/precedences";
import { CalendarDef } from "../models/calendar-def";
import { Inputs } from "../types/calendar-def";

import { Poland } from "./poland";

export class Poland_Czestochowa extends CalendarDef {
  ParentCalendar = Poland;

  inputs: Inputs = {
    our_lady_queen_of_poland: {
      titles: { append: [PatronTitle.PatronOfTheArchidiocese] },
    },

    maximilian_binkiewicz_louis_gietyngier_and_companions: {
      dateDef: { month: 6, date: 12 },
      martyrology: ['maximilian_binkiewicz_priest', 'louis_gietyngier_priest', 'companions_martyrs']
    },

    our_lady_of_czestochowa: {
      titles: { append: [PatronTitle.PatronOfTheMetropoly]}
    },

    mary_kanuta_and_companions: {
      dateDef: { month: 9, date: 4 },
      martyrology: [mary_kanuta_virgin, 'companions_martyrs'],
      precedence: Precedences.OptionalMemorial_12
    },

    dedication_of_the_archicathedral_basilica_of_czestochowa_poland: {
      dateDef: {month: 10, date: 29},
      precedence: Precedences.ProperFeast_DedicationOfTheCathedralChurch_8b
    }
  };
}
