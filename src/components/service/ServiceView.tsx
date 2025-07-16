import ResourceView from "../resource/ResourceView.tsx";

interface ServiceViewProps {
    service: Service;
}

const ServiceView = ({service}: ServiceViewProps) => {
    return (
        <div className="service-container">
            <div className="service-header">
                <h2>Service ID: {service.id}</h2>
            </div>

            <div className="resources-container">
                <h3>Resources</h3>
                {service.resources.map((resource) => (
                    <ResourceView key={resource.id} resource={resource}/>
                ))}
            </div>
        </div>
    )
}

export default ServiceView