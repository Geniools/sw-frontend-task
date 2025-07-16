export {};

declare global {
    type Owner = {
        id: string;
        name: string;
        accountNumber: string;
        level: number;
    }

    type Resource = {
        id: string;
        owners: Owner[];
    }

    type Service = {
        id: string;
        resources: Resource[];
    }
}