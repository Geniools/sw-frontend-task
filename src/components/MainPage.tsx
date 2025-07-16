import {useEffect, useState} from "react";
import useService from "../hooks/useService.ts";
import ServiceView from "./service/ServiceView.tsx";
import ServiceEditor from "./service/ServiceEditor.tsx";
import apiClient from "../services/api.ts";

const MainPage = () => {
    const [serviceId, setServiceId] = useState<string>("")
    const [editMode, setEditMode] = useState<boolean>(false)
    const {data, isLoading, isError} = useService(serviceId)
    const [editedService, setEditedService] = useState<Service | null>(null)

    useEffect(() => {
        if (data) {
            setEditedService({...data});
        }
    }, [data])

    const handleServiceChange = (updatedService: Service) => {
        setEditedService(updatedService);
    }

    const handleSaveService = () => {
        if (editedService) {
            apiClient.put(serviceId, editedService)
                .then(() => console.log("Successfully updated"))
                .catch(error => console.error("Error updating service:", error));
        }
    }

    return (
        <div>
            <h1>Service Viewer</h1>
            <div>
                <label htmlFor="service-id">Enter the ID of the Service you want to see</label>
                <br/>
                <input id="service-id" type="text" placeholder="Service Id" value={serviceId}
                       onChange={(e) => setServiceId(e.target.value)}
                />
                <br/>
                <button onClick={() => setEditMode(!editMode)}>
                    {editMode ? "View Mode" : "Edit Mode"}
                </button>
            </div>

            {isLoading ? (<p>Loading...</p>) : null}
            {isError ? (<p color="red">Error loading service data.</p>) : null}

            {data && !editMode ? <ServiceView service={data}/> : null}
            {editedService && editMode && (
                <>
                    <ServiceEditor
                        service={editedService}
                        onChange={handleServiceChange}
                    />
                    
                    <button
                        onClick={handleSaveService}
                        className="save-button"
                    >
                        Save All Changes
                    </button>
                </>
            )}
        </div>
    )
}

export default MainPage