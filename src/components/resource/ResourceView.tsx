import OwnerView from "../owner/OwnerView.tsx";

interface ResourceViewProps {
    resource: Resource;
}

const ResourceView = ({resource}: ResourceViewProps) => {
    return (
        <div className="resource-container">
            <div className="resource-header">
                <h4>Resource ID: {resource.id}</h4>
            </div>

            <div className="owners-container">
                <h5>Owners</h5>
                {resource.owners.map((owner) => (
                    <OwnerView key={owner.id} owner={owner}/>
                ))}
            </div>
        </div>
    )
}

export default ResourceView