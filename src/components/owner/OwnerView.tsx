interface OwnerViewProps {
    owner: Owner;
}

const OwnerView = ({owner}: OwnerViewProps) => {
    return (
        <div>
            <ul>
                <li>Id: {owner.id}</li>
                <li>Name: {owner.name}</li>
                <li>Account Number: {owner.accountNumber}</li>
                <li>Level: {owner.level}</li>
            </ul>
        </div>
    )
}

export default OwnerView