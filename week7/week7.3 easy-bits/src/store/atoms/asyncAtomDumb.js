// import { atom, selector } from "recoil";

// export const notificationAtom = atom({
//     key : "notificationAtom",
//     default : {
//         networkCount : 0,
//         jobsCount : 0,
//         messagingCount : 0,
//         notificationCount : 0
//     }
// });

// export const totalNotificationCountSelector = selector({
//     key : "totalNotificationCountSelector",
//     get : ({get})=> { 
//         const allNotifications = get(notificationAtom);
//         return allNotifications.networkCount 
//         + allNotifications.jobsCount 
//         + allNotifications.messagingCount 
//         + allNotifications.notificationCount
        
//     }
// })