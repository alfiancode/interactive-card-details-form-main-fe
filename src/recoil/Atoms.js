import { atom } from "recoil";

// make recoil state
export const cardState = atom({
    key: 'cardState',
    default: 
        {
            CardNumber : "0000 0000 0000 0000",
            CVV : "000",
            ExpirationDateYY : "00",
            ExpirationDateMM : "00",
            CardholderName : "Cardholder Name",
        }

            
    
});