import type { IndexedDBProps } from 'react-indexed-db-hook'

export const DBConfig: IndexedDBProps = {
  name: 'resumeDB',
  version: 2,
  objectStoresMeta: [
    {
      store: 'userAvatar',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'avatar', keypath: 'avatar', options: { unique: false } },
      ],
    },
  ],
}
