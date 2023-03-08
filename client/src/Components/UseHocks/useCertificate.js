import  { useEffect, useState } from 'react';

const useCertificate = () => {
    const [Certificate, setCertificate]= useState([]);

    useEffect(()=>{
        fetch("Certificate.json")
        .then(res =>res.json())
        .then(data => setCertificate(data))
    },[])
    return [Certificate, setCertificate];
};

export default useCertificate;