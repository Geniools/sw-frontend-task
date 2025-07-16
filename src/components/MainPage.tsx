import {useState} from "react";
import useService from "../hooks/useService.ts";
import ServiceView from "./service/ServiceView.tsx";

const MainPage = () => {
    const [serviceId, setServiceId] = useState<string>("")
    const {data, isLoading, isError} = useService(serviceId)

    return (
        <div>
            <h1>Service Viewer</h1>
            <input type="text" value={serviceId} onChange={(e) => setServiceId(e.target.value)}/>

            {isLoading ? (<p>Loading...</p>) : null}
            {isError ? (<p>Error loading service data.</p>) : null}

            {data ? <ServiceView service={data}/> : null}
        </div>
    )
}

export default MainPage