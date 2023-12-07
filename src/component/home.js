import React, { useEffect, useState } from 'react';
import Headers from './header';
import List from './list';
import "../styles/home.css"
import axios from 'axios';
export default function Home() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://mocki.io/v1/c1b8d087-971c-472f-870c-47185f710c17')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
    return (
        <div className="Main_container">
            <Headers />
            <List datalist={data} />
        </div>
    );
}
