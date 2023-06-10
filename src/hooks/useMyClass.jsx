
import { useQuery } from '@tanstack/react-query'
import useAuthContext from './useAuthContext';
import useAxiosSecure from './useAxiosSecure';


const useMyClass = () => {
const {user, loading} = useAuthContext();
  const token = localStorage.getItem('jwt-access-token');  
const [axiosSecure] = useAxiosSecure()

const {  refetch, data: instructorClass = [] } = useQuery({
  queryKey: ['instructorClass', user?.email],
   enabled: !!user?.email && !!localStorage.getItem("jwt-access-token"),
  
    queryFn: async () => {
    if(user?.email){
      const res = await axiosSecure.get(`/instructorClass?email=${user?.email}`)
      console.log('res from axios', res)
      return res.data;
    }
  },
  })

  return [instructorClass,  refetch]
}

export default useMyClass;