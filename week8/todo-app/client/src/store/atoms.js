import axios from "axios";
import { atom, selector } from "recoil";


export const userInfoAtom = atom({
    key : "userInfoAtom",
    default : selector({
        key : "userInfoSelector",
        get : async () => {
            const response = await axios.get('http://192.168.250.206:3000/api/v1/user/getinfo',{
                headers : {
                    Authorization : `Bearer ${localStorage.getItem('token')}`
                }
            });
            console.log(response.data);
            return response.data
        }
    })
})


export const balanceAtom = atom({
    key: 'balanceAtom',
    default: selector({
        key: 'balanceSelector',
        get: async () => {
            try {
                const response = await axios.get('http://192.168.250.206:3000/api/v1/account/balance', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                console.log(response.data)
                const final = response.data.balance.balance
                return final.toFixed(2);
            } catch (error) {
                throw error;
            }
        }
    })
});