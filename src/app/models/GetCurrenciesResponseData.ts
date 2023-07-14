import Currency from "./Currency"

export default interface GetCurrenciesResponseData {
    meta: {
        last_updated_at: string
    }
    data: {
        [key: string]: Currency
    }
}