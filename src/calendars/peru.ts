import dayjs from "dayjs";

import { Dates, Locales } from "../lib";
import { Types, LiturgicalColors } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";
import { IRomcalDefaultConfig } from "../models/romcal-config";

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = async (year: number): Promise<Array<IRomcalDateItem>> => {
    const _dates: Array<IRomcalDateItem> = [
        {
            key: "findingOfTheHolyCross",
            type: Types.FEAST,
            moment: dayjs.utc(`${year}-5-3`),
        },
        {
            key: "ourLadyHelpOfChristians",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-5-24`),
        },
        {
            key: "saintMarianaDeJesusDeParedesVirgin",
            type: Types.FEAST,
            moment: dayjs.utc(`${year}-5-26`),
        },
        {
            key: "saintFrancisSolanusPriest",
            type: Types.FEAST,
            moment: dayjs.utc(`${year}-7-14`),
        },
        {
            key: "ourLadyOfPeace",
            type: Types.FEAST,
            moment: dayjs.utc(`${year}-7-28`),
        },
        {
            key: "saintRoseOfLima",
            type: Types.SOLEMNITY,
            moment: dayjs.utc(`${year}-8-23`),
        },
        {
            key: "saintJohnMaciasReligious",
            type: Types.FEAST,
            moment: dayjs.utc(`${year}-9-18`),
        },
        {
            key: "ourLadyOfMercy",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-9-24`),
        },
        {
            key: "ourLordOfMiracles",
            type: Types.FEAST,
            moment: dayjs.utc(`${year}-10-28`),
        },
        {
            key: "saintMartinDePorresReligious",
            type: Types.SOLEMNITY,
            moment: dayjs.utc(`${year}-11-3`),
        },
        {
            key: "ourLadyOfGuadalupe",
            type: Types.FEAST,
            moment: dayjs.utc(`${year}-12-12`),
        },
        {
            key: "ourLordJesusChristTheEternalHighPriest",
            type: Types.FEAST,
            moment: ((y: number): dayjs.Dayjs =>
                dayjs.utc(
                    Dates.pentecostSunday(y)
                        .add(4, "day")
                        .toISOString(),
                ))(year),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
    ];

    // Get localized celebration names
    return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
