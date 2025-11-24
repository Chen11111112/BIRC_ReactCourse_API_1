// 透過filter過濾並顯示ID為奇數的資料
import { FormType } from "@/lib/data/practiceData";
import practiceAPI from "@/lib/practiceAPI";
import { useEffect, useState } from "react";

export default function Practice_1() {
    const [data, setData] = useState<FormType[]>([]); // ← 改成陣列

    useEffect(() => { 
        const fetchData = async () => {
            const response = await practiceAPI.getPost();
            const filtered = response.filter((item: FormType) => item.id % 2 === 1);
            setData(filtered);
        };
        fetchData();
    }, []);

    return (
        <>
            {data.map((item) => (
                <div key={item.id}>
                    <h2>{item.title}</h2>
                    <p>{item.body}</p>
                </div>
            ))}
        </>
    );
}
