import React from 'react'
import ResourceEditor from '../resource/ResourceEditor'

interface ServiceEditorProps {
    service: Service
    onChange: (updatedService: Service) => void
}

const ServiceEditor = ({service, onChange}: ServiceEditorProps) => {
    const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange({
            ...service,
            id: e.target.value
        })
    }

    const handleResourceChange = (updatedResource: Resource, index: number) => {
        const updatedResources = [...service.resources];
        updatedResources[index] = updatedResource;
        onChange({
            ...service,
            resources: updatedResources
        })
    }

    return (
        <div className="service-editor">
            <h2>Edit Service</h2>
            <div className="form-group">
                <label htmlFor="service-id-input">ID:</label>
                <input
                    id="service-id-input"
                    type="text"
                    value={service.id}
                    onChange={handleIdChange}
                />
            </div>

            <div className="resources-section">
                <h3>Resources</h3>
                {service.resources.map((resource, index) => (
                    <div key={resource.id} className="resource-item">
                        <ResourceEditor
                            resource={resource}
                            onChange={(updatedResource) => handleResourceChange(updatedResource, index)}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ServiceEditor