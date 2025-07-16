import React from 'react'

interface OwnerEditorProps {
    owner: Owner
    onChange: (updatedOwner: Owner) => void;
}

const OwnerEditor = ({owner, onChange}: OwnerEditorProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        onChange({
            ...owner,
            [name]: name === 'level' ? parseInt(value, 10) : value,
        })
    }

    return (
        <div className="owner-editor">
            <h4>Edit Owner</h4>
            <div className="form-group">
                <label htmlFor="owner-id-input">ID:</label>
                <input id="owner-id-input" type="text" name="id" value={owner.id} onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="owner-name-input">Name:</label>
                <input id="owner-name-input" type="text" name="name" value={owner.name} onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="owner-accountNumber-input">Account Number:</label>
                <input id="owner-accountNumber-input" type="text" name="accountNumber" value={owner.accountNumber}
                       onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="owner-level-input">Level:</label>
                <input id="owner-level-input" type="number" name="level" value={owner.level}
                       onChange={handleChange}/>
            </div>
        </div>
    )
}

export default OwnerEditor