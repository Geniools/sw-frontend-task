import {useQuery} from "@tanstack/react-query";
import apiClient from "../services/api.ts";

const fetchService = async (id: string) => {
    const response = await apiClient.get(`${id}`);
    return response.data;
}

const useService = (id: string): {
    data?: Service,
    isLoading: boolean,
    isError: boolean,
} => {
    const {
        data,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ['service', id],
        queryFn: () => fetchService(id)
    });

    return {
        data,
        isLoading,
        isError,
    };
};

export default useService;