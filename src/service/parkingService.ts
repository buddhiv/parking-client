import WebService from "./webService";

const ParkingService = {
    fetchParkingSlots: async () => {
        return WebService.request('/park/view/all', 'GET', {}, true, {});
    },
    fetchUserParking: async (userId: string) => {
        return WebService.request(`/park/view/${userId}`, 'GET', {}, true, {});
    }
};

export default ParkingService;