import React from 'react';
import OwnerEditor from '../owner/OwnerEditor';

interface ResourceEditorProps {
    resource: Resource;
    onChange: (updatedResource: Resource) => void;
}

const ResourceEditor = ({resource, onChange}: ResourceEditorProps) => {
    const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange({
            ...resource,
            id: e.target.value
        })
    }

    const handleOwnerChange = (updatedOwner: Owner, index: number) => {
        const updatedOwners = [...resource.owners];
        updatedOwners[index] = updatedOwner;
        onChange({
            ...resource,
            owners: updatedOwners
        })
    }

    return (
        <div className="resource-editor">
            <h3>Edit Resource</h3>
            <div className="form-group">
                <label htmlFor="resource-id-input">ID:</label>
                <input
                    id="resource-id-input"
                    type="text"
                    value={resource.id}
                    onChange={handleIdChange}
                />
            </div>

            <div className="owners-section">
                <h4>Owners</h4>
                {resource.owners.map((owner, index) => (
                    <div key={owner.id} className="owner-item">
                        <OwnerEditor
                            owner={owner}
                            onChange={(updatedOwner) => handleOwnerChange(updatedOwner, index)}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ResourceEditor