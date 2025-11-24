// 單純GET請求並顯示多筆資料
import { FormType } from "@/lib/data/practiceData";
import practiceAPI from "@/lib/practiceAPI";
import { useEffect, useState } from "react";

export default function Practice_1() {
    const [data, setData] = useState<FormType[]>([]);


    useEffect(() => {
        const fetchData = async () => {
            const response = await practiceAPI.getPost();
            setData(response);
        }
        fetchData();
    },[]);

    return(
        <>
            {data.map((item) => (
                <div key={item.id}>
                    <h2>{item.title}</h2>
                </div>
            ))}
        </>

    );
}
