import axios, { all } from "axios";
import { atom, selector } from "recoil";

export const notificationAtom = atom({
    key : "notificationAtom",
    default : selector({
        key : "notificationAtomSelector",
        get : async ()=>{
            const res = await axios.get('http://localhost:3000/notifications')
            return res.data;
        }
    })
});

export const totoalNotificationSelector = selector({
    key : "totoalNotificationSelector",
    get : ({get})=>{
        const allNotifiactions = get(notificationAtom);
        return allNotifiactions.networkCount +
        allNotifiactions.jobsCount +
        allNotifiactions.messagingCount + 
        allNotifiactions.notificationCount
    }
})