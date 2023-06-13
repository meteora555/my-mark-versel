import { currencyLocale, currencySettings } from "../consts/currencyLocale";

export const priceFormatter = (price: number | string) => {
    return price.toLocaleString(currencyLocale, currencySettings);
};

export const priceFormatterAnimated = (number: number) => {
    return Number(number.toFixed(0)).toLocaleString(
        currencyLocale,
        currencySettings
    );
};
