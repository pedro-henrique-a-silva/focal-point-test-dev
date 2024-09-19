"use client"
import { useRouter } from 'next/navigation'

function useNavigateRoute() {

  const router = useRouter();

  const navigate = (route: string) => {
    router.push(route);
  };


  return { navigate }
}

export default useNavigateRoute