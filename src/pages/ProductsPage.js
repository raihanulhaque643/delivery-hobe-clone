import React from 'react'
import { useLocation } from 'react-router';

const ProductsPage = () => {

    function useQuery() {
        return new URLSearchParams(useLocation().search);
      }

    let query = useQuery();

    return (
        <div>
            product page {query.get('category')}
        </div>
    )
}

export default ProductsPage
