import { PatronTitle } from "../constants/martyrology-metadata";
import { Precedences } from "../constants/precedences";
import { CalendarDef } from "../models/calendar-def";
import { Inputs } from "../types/calendar-def";

import { Poland } from "./poland";

export class Poland_BielskoZywiec extends CalendarDef {
  ParentCalendar = Poland;

  inputs: Inputs = {
    john_nepomucene_priest: {
      dateDef: { month: 5, day: 21 },
      precedence: Precedences.ProperMemorial_11b,
    },

    john_sarkander_priest: {
      precedence: Precedences.ProperMemorial_11b,
    },

    boniface_of_mainz_bishop: {
      precedence: Precedences.OptionalMemorial_12,
    },

    margaret_lucia_szewczyk_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 5 },
    },

    michael_tomaszek_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 6, date: 7 },
    },

    maximilian_mary_raymund_kolbe_priest: {
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      titles: { append: [PatronTitle.PatronOfTheDiocese] },
    },

    melchior_grodziecki_priest: {
      precedence: Precedences.ProperMemorial_11b,
    },

    dedication_of_the_cathedral_of_bielsko_biala_poland: {
      precedence: Precedences.ProperFeast_DedicationOfTheCathedralChurch_8b,
      dateDef: { month: 9, date: 24 },
    },

    john_of_kanty_priest: {
      precedence: Precedences.ProperMemorial_SecondPatron_11a,
      titles: { append: [PatronTitle.CopatronOfTheDiocese] },
    },

    celine_borzecka_religious: {
      precedence: Precedences.OptionalMemorial_12,
      dateDef: { month: 10, date: 26 },
    },
  };
}
