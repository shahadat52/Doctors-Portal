import { useEffect, useState } from "react";

export const useToken = email => {
    const [token, setToken] = useState('');
    useEffect(() => {
        if (email) {
            fetch(`https://doctors-portal-server-omega-smoky.vercel.app/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.accessToken) {
                        localStorage.setItem('accessToken', data.accessToken);
                        setToken(data.accessToken);
                    }
                })
        }
    }, [email]);
    return [token];
}




    // import { useEffect, useState } from "react";

    // export const useToken = email => {
    //     const [token, setToken] = useState('');

    //     useEffect(() => {
    //         let isMounted = true;

    //         if (email) {
    //             fetch(`https://doctors-portal-server-omega-smoky.vercel.app/jwt?email=${email}`)
    //                 .then(res => res.json())
    //                 .then(data => {
    //                     if (isMounted && data.accessToken) {
    //                         localStorage.setItem("accessToken", data.accessToken);
    //                         if (data.accessToken !== token) {
    //                             setToken(data.accessToken);
    //                         }
    //                     }
    //                 })
    //                 .catch(error => {
    //                     console.log(error);
    //                 });
    //         }

    //         return () => {
    //             isMounted = false; // Update the mount status on unmount
    //         };
    //     }, [email, token]); // Include 'token' as a dependency

    //     return [token];
    // };
