import React from 'react'
import { ParallaxCover, ShopPageList } from '../components/shopPage_section'
import { useItems } from '../hooks/useItems'
import Loader from '../components/common/Loader'

function ShopPage() {
  const { loading } = useItems()

  if (loading) {
    return <Loader />
  }

  return (
    <div className='shop_page w-100'>
      <ParallaxCover />
      <ShopPageList />
    </div>
  )
}

export default ShopPage
