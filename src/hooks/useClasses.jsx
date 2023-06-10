import { useQuery } from "@tanstack/react-query";

const useClasses = () => {

const {data: classes = [], isLoading: loading, refetch} = useQuery({
    queryKey: ['addClasses'],
    queryFn: async() => {
        const res = await fetch('http://localhost:5000/addClasses');
        return res.json();
    }
})

return [classes, loading, refetch]
}

export default useClasses;