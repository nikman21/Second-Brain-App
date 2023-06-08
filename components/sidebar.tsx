import Link from 'next/link'
import { Drawer } from '@mui/material';


const drawerWidth = 220;

const Sidebar: React.FC = () => {
  return (
    <Drawer 
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            marginTop:10,
            backgroundColor: "#1f2937",
            
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Link href='/notes' className='block font-black text-white py-6 px-6 hover:bg-gray-700'>
          Notes
        </Link>

        <Link href='/todo' className='block py-6 px-6 font-black text-white hover:bg-gray-700'>
          To-do
        </Link>

        <Link href='/journals' className='block py-6 px-6 font-black text-white hover:bg-gray-700'>
          Journals
        </Link>

      </Drawer>
  )
}

export default Sidebar
