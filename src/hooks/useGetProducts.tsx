import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { API_SECRET_KEY, API_URL } from '@/config/config';
import { IProduct } from '@/types/IProduct.interface';

function useGetProducts() {
  return useQuery<IProduct[] | undefined>(['products'], async () => {
    const { data } = await axios.get(
      `${API_URL}/products/best-selling-products-by-subcategory`,
      {
        headers: {
          secretKey: API_SECRET_KEY,
        },
      }
    );
    return data;
  });
}

export default useGetProducts;
