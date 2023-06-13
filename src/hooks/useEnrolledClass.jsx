import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure'
import useAuthContext from './useAuthContext'

const useEnrolledClass = () => {
    const { user, loading } = useAuthContext()
    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure()
    const { refetch, data: enrolledClass = [] } = useQuery({
        queryKey: ['enrolledClass', user?.email],
        enabled: !loading,
    
        queryFn: async () => {
            const res = await axiosSecure(`/enrolledClass?email=${user?.email}`)
            // console.log('res from axios', res)
            return res.data;
        },
    })

    return [enrolledClass, refetch]

}
export default useEnrolledClass;