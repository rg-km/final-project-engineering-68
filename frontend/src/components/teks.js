import create from 'zustand'

export const useText = create((set) => ({
    name: 'Pridana',
    komentar: 'I am a person who likes to do things and stuff and stuff and stuff',
    setName: (name) => set(() => ({ name })),
    setKomentar: (bio) => set(() => ({ bio }))
}))
