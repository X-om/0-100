import { RecoilRoot, useRecoilValue } from "recoil"
// import { jobAtom, messagingAtom, networkAtom, notificationAtom, totalNotifiactionCountSelector } from "./store/atoms/atom";
import { useMemo } from "react";
// import AsyncDumbWay from "./components/AsyncDumbWay";
import AsyncSmartWay from "./components/AsyncSmartWay";

function App() {
  return (
    <div>
      <RecoilRoot>
          {/* <MainApp/> */}
          {/* <AsyncDumbWay/> */}
          <AsyncSmartWay/>
      </RecoilRoot>
    </div>
  )
}

// function MainApp(){

//     const networkCount = useRecoilValue(networkAtom);
//     const jobsCount = useRecoilValue(jobAtom);
//     const messagingCount = useRecoilValue(messagingAtom);
//     const notificationCount = useRecoilValue(notificationAtom);

//     // const totalNotificationCount = useMemo(()=>{
//     //     return networkCount + jobsCount + messagingCount + notificationCount;
//     // }, [networkCount,jobsCount,messagingCount,notificationCount]);

//     return (
//       <div>
//         <button>Home</button>
//         <button>Network ({(networkCount >= 100) ? "99+" : networkCount})</button>
//         <button>Jobs ({(jobsCount >= 100) ? "99+" : jobsCount})</button>
//         <button>Messaging ({(messagingCount >= 100) ? "99+" : messagingCount})</button>
//         <button>Notifications ({(notificationCount >= 100) ? "99+" : notificationCount})</button>
//         <Button/>
//       </div>
//     )
// }

// function Button(){
//   const totalNotificationCount = useRecoilValue(totalNotifiactionCountSelector);

//   return (
//     <div>
//       <button>Me ({totalNotificationCount})</button>
//     </div>
//   )
// }

export default App
