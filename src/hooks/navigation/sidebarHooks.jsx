import { useAtomValue, useSetAtom, atom } from 'jotai'
const showSidebar = atom(true)
export function useToggleSidebar () {
    const isSidebarOpen = useAtomValue(showSidebar)
    const toggleSideBar = useSetAtom(showSidebar)
    return [isSidebarOpen, toggleSideBar]
}
