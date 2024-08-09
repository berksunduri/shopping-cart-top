import { StoreItem } from '../components/StoreItem'
import storeItems from '../data/items.json'

export default function Store() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {storeItems.map(item => (
        <StoreItem key={item.id} {...item} />
      ))}
    </div>
  )
}