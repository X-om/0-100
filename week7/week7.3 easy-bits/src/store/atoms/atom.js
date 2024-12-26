// import { atom, selector } from "recoil";

// export const networkAtom = atom({
//     key : "networkAtom",
//     default : 1
// });

// export const jobAtom = atom({
//     key : "jobAtom",
//     default : 0
// });

// export const messagingAtom = atom({
//     key : "messagingAtom",
//     default : 1
// });

// export const notificationAtom = atom({
//     key : "notificationAtom",
//     default : 123
// });

// export const totalNotifiactionCountSelector = selector({
//     key : "totalNotifiactionCountSelector",
//     get : ({get})=>{
//         const networkCount = get(networkAtom);
//         const jobsCount = get(jobAtom);
//         const messagingCount = get(messagingAtom);
//         const notificationCount = get(notificationAtom);

//         return networkCount + jobsCount + messagingCount + notificationCount;
//     }
// })