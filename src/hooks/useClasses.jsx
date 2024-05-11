import { useQuery } from "@tanstack/react-query";
import useAuthContext from "./useAuthContext";

const useClasses = () => {
// const {loading} = useAuthContext();
const {data: classes = [], isLoading: loading, refetch} = useQuery({
    queryKey: ['addClasses'],
    queryFn: async() => {
        const res = await fetch('https://assignment12-server-ten.vercel.app/addClasses');
        return res.json();
    }
})

return [classes, loading, refetch]
}

export default useClasses;