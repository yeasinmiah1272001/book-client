import axios from "axios";
import { useQuery } from "react-query";


const useCarts = () => {

       const { data: cart = [] } = useQuery({
         queryKey: ["books"],
         queryFn: async () => {
           const response = await axios.get("http://localhost:5000");
           return response.data;
         },
       });
       return [cart]
};

export default useCarts;