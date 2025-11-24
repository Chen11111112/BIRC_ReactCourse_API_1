// useEffect監聽，根據ID顯示單筆資料
import { FormType } from "@/lib/data/practiceData";
import practiceAPI from "@/lib/practiceAPI";
import { useEffect, useState } from "react";

export default function Practice_1() {
    const [data, setData] = useState<FormType>();
    const [id, setId] = useState<number>(1);


    useEffect(() => { 
        const fetchData = async () => {
            const response = await practiceAPI.getPostById(id);
            setData(response);
        }
        fetchData();
    },[id]);

    return(
        <>
            <input
                type="number"
                onChange={(e) => setId(e.target.valueAsNumber)}
            />

                <div>
                    <h2>{data?.title}</h2>
                    <p>{data?.body}</p>
                </div>

        </>

    );
}
