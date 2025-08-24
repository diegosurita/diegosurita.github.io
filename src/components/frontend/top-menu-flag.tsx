import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import Link from 'next/link'

const menuItemStyles = 'flex gap-2 w-full rounded-lg px-3 py-1.5 data-focus:bg-white/10'

const TopMenuFlag = () => {
  return (
    <div className="relative">
      <Menu as="div">
        <MenuButton>
          <span className="fi fi-us" />
        </MenuButton>

        <MenuItems
          modal={false}
          transition
          anchor="bottom end"
          className="w-52 z-50 relative origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0"
        >
          <MenuItem>
            <Link href="" className={menuItemStyles}>
              <span className="fi fi-us" /> English
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="" className={menuItemStyles}>
              <span className="fi fi-br" /> Português
            </Link>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  )
}

export default TopMenuFlag
