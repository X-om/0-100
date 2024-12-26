// import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil"
// import { notificationAtom, totalNotificationCountSelector } from "../store/atoms/asyncAtomDumb"
// import { useEffect } from "react";
// import axios from "axios";


// export default function AsyncDumbWay(){
//     return <div>
//             <MainAsyncDumbWay/>        
//     </div>
// }

// function MainAsyncDumbWay(){
//     const [notification,setNotification] = useRecoilState(notificationAtom);
//     const totalNotificationCount = useRecoilValue(totalNotificationCountSelector);

//     useEffect(()=>{
//         axios.get('http://localhost:3000/notifications')
//             .then((res) => { 
//                 setNotification(res.data);
//             });
//     },[])

//     return (
//         <div>
//             <button>Home</button>
//             <button>Network ({(notification.networkCount >= 100) ? "99+" : notification.networkCount})</button>
//             <button>Jobs ({(notification.jobsCount >= 100) ? "99+" : notification.jobsCount})</button>
//             <button>Messaging ({(notification.messagingCount >= 100) ? "99+" : notification.messagingCount})</button>
//             <button>Notifications ({(notification.notificationCount >= 100) ? "99+" : notification.notificationCount})</button>

//             <button>Me ({totalNotificationCount})</button>
//         </div>
//     )
// }