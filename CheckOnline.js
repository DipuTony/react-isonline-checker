import React, { useEffect, useState } from 'react'

const CheckOnline = () => {
    const [isOnline, setIsOnline] = useState(true)

    useEffect(() => {
        function handleOnlineStatus() {
            setIsOnline(navigator.onLine);
        }

        window.addEventListener("online", handleOnlineStatus);
        window.addEventListener("offline", handleOnlineStatus);

        return () => {
            window.removeEventListener("online", handleOnlineStatus);
            window.removeEventListener("offline", handleOnlineStatus);
        };
    }, []);

    return isOnline;
}
export default CheckOnline;