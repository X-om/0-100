import { useIsOnline } from "../hooks/useIsOnline"

export const CustomHooks2 = () => {
    const isOnline = useIsOnline();

    return <>
        <div>
            {isOnline ? <h1>You are online</h1> : <h1>You are offline</h1>}
        </div>
    </>
}