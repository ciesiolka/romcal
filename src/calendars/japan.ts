import dayjs from "dayjs";

import { Locales } from "../lib";
import { Titles, Types, LiturgicalColors } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";
import { IRomcalDefaultConfig } from "../models/romcal-config";

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = async (year: number): Promise<Array<IRomcalDateItem>> => {
    const _dates: Array<IRomcalDateItem> = [
        {
            key: "saintPaulMikiAndCompanionsMartyrs",
            type: Types.FEAST,
            moment: dayjs.utc(`${year}-2-6`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "discoveryOfTheHiddenChristians",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-3-17`),
        },
        {
            key: "blessedPeterKibePriestAndCompanionsMartyrs",
            type: Types.MEMORIAL,
            moment: dayjs.utc(`${year}-7-1`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "205BlessedMartyrsOfJapan",
            type: Types.MEMORIAL,
            moment: dayjs.utc(`${year}-9-10`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintThomasRokuzayemonPriestAndCompanionsMartyrs",
            type: Types.MEMORIAL,
            moment: dayjs.utc(`${year}-9-28`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintFrancisXavierPriest",
            type: Types.FEAST,
            moment: dayjs.utc(`${year}-12-3`),
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
