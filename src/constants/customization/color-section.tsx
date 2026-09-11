export const staticColorsList = [
  { id: crypto.randomUUID(), bgColor: '#495963' },
  { id: crypto.randomUUID(), bgColor: '#547980' },
  { id: crypto.randomUUID(), bgColor: '#93b7be' },
  { id: crypto.randomUUID(), bgColor: '#348aa7' },
  { id: crypto.randomUUID(), bgColor: '#355c7d' },
  { id: crypto.randomUUID(), bgColor: '#386fa4' },
  { id: crypto.randomUUID(), bgColor: '#6798c0' },
  { id: crypto.randomUUID(), bgColor: '#59a5d8' },
  { id: crypto.randomUUID(), bgColor: '#84d2f6' },
  { id: crypto.randomUUID(), bgColor: '#432371' },
  { id: crypto.randomUUID(), bgColor: '#672d50' },
  { id: crypto.randomUUID(), bgColor: '#c06c84' },
  { id: crypto.randomUUID(), bgColor: '#c7417b' },
  { id: crypto.randomUUID(), bgColor: '#f45b69' },
  {
    id: crypto.randomUUID(),
    bgColor:
      'conic-gradient(from 90deg, violet, indigo, blue, green, yellow, orange, red, violet)',
  },
]

export const applingAccentColorOptions = [
  /*
  applyAccentColor: {
    name: true, ok
    dates: false, ok
    icons: false,
    headings: true, ok
    jobTitle: true, ok
    linkIcons: false, ok
    headingLine: true, ok
    entrySubtitle: false, ok
    dotsBarsBubbles: false, ok
  },
  */

  { id: crypto.randomUUID(), name: 'Name', value: 'name' }, // ok
  { id: crypto.randomUUID(), name: 'Job title', value: 'jobTitle' }, // ok
  { id: crypto.randomUUID(), name: 'Headings', value: 'headings' }, // ok
  { id: crypto.randomUUID(), name: 'Headings line', value: 'headingsLine' }, // ok
  { id: crypto.randomUUID(), name: 'Header icons', value: 'icon' },
  {
    id: crypto.randomUUID(),
    name: 'Dots/bars/bubbles',
    value: 'dotsBarsBubbles',
  }, // ok
  { id: crypto.randomUUID(), name: 'Dates', value: 'dates' }, // ok
  { id: crypto.randomUUID(), name: 'Entry subtitle', value: 'entrySubtitle' }, // ok
  { id: crypto.randomUUID(), name: 'Link icons', value: 'linkIcons' }, // ok
] as const

// TODO: Will replace with actual api data
export const bgImages = [
  {
    id: crypto.randomUUID(),
    imageUrl:
      'https://images.unsplash.com/photo-1562564055-71e051d33c19?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3wxMDE4ODN8MHwxfHNlYXJjaHwxMHx8cmVzdW1lfGVufDB8fHx8MTc4NzYwOTQ4MHww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=200',
  },
  {
    id: crypto.randomUUID(),
    imageUrl:
      'https://images.unsplash.com/photo-1529480653440-0e5fd1af911c?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjEwMTg4M30',
  },
  {
    id: crypto.randomUUID(),
    imageUrl:
      'https://images.unsplash.com/photo-1493881633443-6cd495b95401?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjEwMTg4M30',
  },
  {
    id: crypto.randomUUID(),
    imageUrl:
      'https://images.unsplash.com/photo-1545005313-3e77ea8b030e?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjEwMTg4M30',
  },
  {
    id: crypto.randomUUID(),
    imageUrl:
      'https://images.unsplash.com/photo-1529480653440-0e5fd1af911c?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjEwMTg4M30',
  },
  {
    id: crypto.randomUUID(),
    imageUrl:
      'https://images.unsplash.com/photo-1493881633443-6cd495b95401?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjEwMTg4M30',
  },
  {
    id: crypto.randomUUID(),
    imageUrl:
      'https://images.unsplash.com/photo-1545005313-3e77ea8b030e?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjEwMTg4M30',
  },
  {
    id: crypto.randomUUID(),
    imageUrl:
      'https://images.unsplash.com/photo-1574093390315-5b900df0ca3a?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjEwMTg4M30',
  },
  {
    id: crypto.randomUUID(),
    imageUrl:
      'https://images.unsplash.com/photo-1542045272572-e55b8b5e79b2?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjEwMTg4M30',
  },
  {
    id: crypto.randomUUID(),
    imageUrl:
      'https://images.unsplash.com/photo-1553526777-5ffa3b3248d8?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjEwMTg4M30',
  },
  {
    id: crypto.randomUUID(),
    imageUrl:
      'https://images.unsplash.com/photo-1470290449668-02dd93d9420a?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjEwMTg4M30',
  },
  {
    id: crypto.randomUUID(),
    imageUrl:
      'https://images.unsplash.com/photo-1506143925201-0252c51780b0?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjEwMTg4M30',
  },
  {
    id: crypto.randomUUID(),
    imageUrl:
      'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjEwMTg4M30',
  },
  {
    id: crypto.randomUUID(),
    imageUrl:
      'https://images.unsplash.com/photo-1514575619841-1a3d949d3277?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjEwMTg4M30',
  },
  {
    id: crypto.randomUUID(),
    imageUrl:
      'https://images.unsplash.com/photo-1553532434-5ab5b6b84993?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjEwMTg4M30',
  },
  {
    id: crypto.randomUUID(),
    imageUrl:
      'https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjEwMTg4M30',
  },
  {
    id: crypto.randomUUID(),
    imageUrl:
      'https://images.unsplash.com/photo-1527903789995-dc8ad2ad6de0?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjEwMTg4M30',
  },
  {
    id: crypto.randomUUID(),
    imageUrl:
      'https://images.unsplash.com/photo-1511933801659-156d99ebea3e?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjEwMTg4M30',
  },
  {
    id: crypto.randomUUID(),
    imageUrl:
      'https://images.unsplash.com/photo-1551992534-4b76b66cb9f3?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjEwMTg4M30',
  },
  {
    id: crypto.randomUUID(),
    imageUrl:
      'https://images.unsplash.com/photo-1550537687-c91072c4792d?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjEwMTg4M30',
  },
  {
    id: crypto.randomUUID(),
    imageUrl:
      'https://images.unsplash.com/photo-1506463108611-88834e9f6169?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjEwMTg4M30',
  },
  {
    id: crypto.randomUUID(),
    imageUrl:
      'https://images.unsplash.com/photo-1552262158-1e8fde9b93c8?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjEwMTg4M30',
  },
  {
    id: crypto.randomUUID(),
    imageUrl:
      'https://images.unsplash.com/photo-1477989745051-7e02b67bf1b9?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjEwMTg4M30',
  },
  {
    id: crypto.randomUUID(),
    imageUrl:
      'https://images.unsplash.com/photo-1487266659293-c4762f375955?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjEwMTg4M30',
  },
  {
    id: crypto.randomUUID(),
    imageUrl:
      'https://images.unsplash.com/photo-1464639351491-a172c2aa2911?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjEwMTg4M30',
  },
  {
    id: crypto.randomUUID(),
    imageUrl:
      'https://images.unsplash.com/photo-1548700819-892a76eed325?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjEwMTg4M30',
  },
  {
    id: crypto.randomUUID(),
    imageUrl:
      'https://images.unsplash.com/photo-1446071103084-c257b5f70672?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjEwMTg4M30',
  },
  {
    id: crypto.randomUUID(),
    imageUrl:
      'https://images.unsplash.com/photo-1500278093317-e419829d57f3?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjEwMTg4M30',
  },
  {
    id: crypto.randomUUID(),
    imageUrl:
      'https://images.unsplash.com/photo-1559762717-99c81ac85459?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjEwMTg4M30',
  },
  {
    id: crypto.randomUUID(),
    imageUrl:
      'https://images.unsplash.com/photo-1516705132691-90229160e57d?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjEwMTg4M30',
  },
  {
    id: crypto.randomUUID(),
    imageUrl:
      'https://images.unsplash.com/photo-1512772452758-275f069da6bf?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjEwMTg4M30',
  },
  {
    id: crypto.randomUUID(),
    imageUrl:
      'https://images.unsplash.com/photo-1506463108611-88834e9f6169?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjEwMTg4M30',
  },
  {
    id: crypto.randomUUID(),
    imageUrl:
      'https://images.unsplash.com/photo-1568160277762-0224a391b5a5?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjEwMTg4M30',
  },
  {
    id: crypto.randomUUID(),
    imageUrl:
      'https://images.unsplash.com/photo-1493100935637-0308094a5bef?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjEwMTg4M30',
  },
  {
    id: crypto.randomUUID(),
    imageUrl:
      'https://images.unsplash.com/photo-1485717176797-ee010b5cd338?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjEwMTg4M30',
  },
  {
    id: crypto.randomUUID(),
    imageUrl:
      'https://images.unsplash.com/photo-1465245592687-30477a9e0627?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjEwMTg4M30',
  },
  {
    id: crypto.randomUUID(),
    imageUrl:
      'https://images.unsplash.com/photo-1574093390315-5b900df0ca3a?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjEwMTg4M30',
  },
  {
    id: crypto.randomUUID(),
    imageUrl:
      'https://images.unsplash.com/photo-1574093390315-5b900df0ca3a?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjEwMTg4M30',
  },
  {
    id: crypto.randomUUID(),
    imageUrl:
      'https://images.unsplash.com/photo-1561394818-699dc5ac3e9e?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjEwMTg4M30',
  },
  {
    id: crypto.randomUUID(),
    imageUrl:
      'https://images.unsplash.com/photo-1519123439617-f3693cc27f4d?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjEwMTg4M30',
  },
  {
    id: crypto.randomUUID(),
    imageUrl:
      'https://images.unsplash.com/photo-1539722602166-58d4a1e3b524?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjEwMTg4M30',
  },
  {
    id: crypto.randomUUID(),
    imageUrl:
      'https://images.unsplash.com/photo-1487837647815-bbc1f30cd0d2?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjEwMTg4M30',
  },
  {
    id: crypto.randomUUID(),
    imageUrl:
      'https://images.unsplash.com/photo-1490367605959-06955305859b?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjEwMTg4M30',
  },
  {
    id: crypto.randomUUID(),
    imageUrl:
      'https://images.unsplash.com/photo-1510674485131-dc88d96369b4?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjEwMTg4M30',
  },
  {
    id: crypto.randomUUID(),
    imageUrl:
      'https://images.unsplash.com/photo-1518966377293-74c63a1ec149?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjEwMTg4M30',
  },
]
