import { create } from 'zustand'

interface IMobileMenu {
	isOpen: boolean
	setIsOpen: (state: boolean) => void
}

export const useMobileMenu = create<IMobileMenu>((set) => ({
	isOpen: false,
	setIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}))
