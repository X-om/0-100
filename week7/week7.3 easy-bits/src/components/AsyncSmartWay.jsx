import { useRecoilValue } from "recoil";
import { notificationAtom, totoalNotificationSelector } from "../store/atoms/asyncAtomSmart";

export default function AsyncSmartWay(){
    return (
        <div>
            <MainAsyncSmartWay/>        
        </div>
    )    
}

function MainAsyncSmartWay(){
    const notification = useRecoilValue(notificationAtom);
    const totalNotificationCount = useRecoilValue(totoalNotificationSelector);

    return (
        <div>
            <button>Home</button>
            <button>Network ({(notification.networkCount >= 100) ? "99+" : notification.networkCount})</button>
            <button>Jobs ({(notification.jobsCount >= 100) ? "99+" : notification.jobsCount})</button>
            <button>Messaging ({(notification.messagingCount >= 100) ? "99+" : notification.messagingCount})</button>
            <button>Notifications ({(notification.notificationCount >= 100) ? "99+" : notification.notificationCount})</button>

            <button>Me ({totalNotificationCount})</button>
        </div>
    )
}