import { useQuery } from '@tanstack/react-query'
import useAuthContext from './useAuthContext'
import useAxiosSecure from './useAxiosSecure'

const useSelectedClass = () => {
    const { user, loading } = useAuthContext()
    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure()
    const { refetch, data: selectedClass = [] } = useQuery({
        queryKey: ['selectedClass', user?.email],
        enabled: !loading,
    
        queryFn: async () => {
            const res = await axiosSecure(`/selectedClass?email=${user?.email}`)
            // console.log('res from axios', res)
            return res.data;
        },
    })

    return [selectedClass, refetch]

}
export default useSelectedClass;