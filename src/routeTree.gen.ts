/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const StartBookingLazyImport = createFileRoute('/startBooking')()
const OpenlearningBookingLazyImport = createFileRoute('/openlearningBooking')()
const MineBookingerLazyImport = createFileRoute('/mineBookinger')()
const KlasselokaleBookingLazyImport = createFileRoute('/klasselokaleBooking')()
const GruppelokaleBookingLazyImport = createFileRoute('/gruppelokaleBooking')()
const FrontpageLazyImport = createFileRoute('/frontpage')()
const DiverseBookingLazyImport = createFileRoute('/diverseBooking')()
const BekrftBookingLazyImport = createFileRoute('/bekræftBooking')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const StartBookingLazyRoute = StartBookingLazyImport.update({
  id: '/startBooking',
  path: '/startBooking',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/startBooking.lazy').then((d) => d.Route))

const OpenlearningBookingLazyRoute = OpenlearningBookingLazyImport.update({
  id: '/openlearningBooking',
  path: '/openlearningBooking',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/openlearningBooking.lazy').then((d) => d.Route),
)

const MineBookingerLazyRoute = MineBookingerLazyImport.update({
  id: '/mineBookinger',
  path: '/mineBookinger',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/mineBookinger.lazy').then((d) => d.Route))

const KlasselokaleBookingLazyRoute = KlasselokaleBookingLazyImport.update({
  id: '/klasselokaleBooking',
  path: '/klasselokaleBooking',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/klasselokaleBooking.lazy').then((d) => d.Route),
)

const GruppelokaleBookingLazyRoute = GruppelokaleBookingLazyImport.update({
  id: '/gruppelokaleBooking',
  path: '/gruppelokaleBooking',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/gruppelokaleBooking.lazy').then((d) => d.Route),
)

const FrontpageLazyRoute = FrontpageLazyImport.update({
  id: '/frontpage',
  path: '/frontpage',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/frontpage.lazy').then((d) => d.Route))

const DiverseBookingLazyRoute = DiverseBookingLazyImport.update({
  id: '/diverseBooking',
  path: '/diverseBooking',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/diverseBooking.lazy').then((d) => d.Route),
)

const BekrftBookingLazyRoute = BekrftBookingLazyImport.update({
  id: '/bekræftBooking',
  path: '/bekræftBooking',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/bekræftBooking.lazy').then((d) => d.Route),
)

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/bekræftBooking': {
      id: '/bekræftBooking'
      path: '/bekræftBooking'
      fullPath: '/bekræftBooking'
      preLoaderRoute: typeof BekrftBookingLazyImport
      parentRoute: typeof rootRoute
    }
    '/diverseBooking': {
      id: '/diverseBooking'
      path: '/diverseBooking'
      fullPath: '/diverseBooking'
      preLoaderRoute: typeof DiverseBookingLazyImport
      parentRoute: typeof rootRoute
    }
    '/frontpage': {
      id: '/frontpage'
      path: '/frontpage'
      fullPath: '/frontpage'
      preLoaderRoute: typeof FrontpageLazyImport
      parentRoute: typeof rootRoute
    }
    '/gruppelokaleBooking': {
      id: '/gruppelokaleBooking'
      path: '/gruppelokaleBooking'
      fullPath: '/gruppelokaleBooking'
      preLoaderRoute: typeof GruppelokaleBookingLazyImport
      parentRoute: typeof rootRoute
    }
    '/klasselokaleBooking': {
      id: '/klasselokaleBooking'
      path: '/klasselokaleBooking'
      fullPath: '/klasselokaleBooking'
      preLoaderRoute: typeof KlasselokaleBookingLazyImport
      parentRoute: typeof rootRoute
    }
    '/mineBookinger': {
      id: '/mineBookinger'
      path: '/mineBookinger'
      fullPath: '/mineBookinger'
      preLoaderRoute: typeof MineBookingerLazyImport
      parentRoute: typeof rootRoute
    }
    '/openlearningBooking': {
      id: '/openlearningBooking'
      path: '/openlearningBooking'
      fullPath: '/openlearningBooking'
      preLoaderRoute: typeof OpenlearningBookingLazyImport
      parentRoute: typeof rootRoute
    }
    '/startBooking': {
      id: '/startBooking'
      path: '/startBooking'
      fullPath: '/startBooking'
      preLoaderRoute: typeof StartBookingLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/bekræftBooking': typeof BekrftBookingLazyRoute
  '/diverseBooking': typeof DiverseBookingLazyRoute
  '/frontpage': typeof FrontpageLazyRoute
  '/gruppelokaleBooking': typeof GruppelokaleBookingLazyRoute
  '/klasselokaleBooking': typeof KlasselokaleBookingLazyRoute
  '/mineBookinger': typeof MineBookingerLazyRoute
  '/openlearningBooking': typeof OpenlearningBookingLazyRoute
  '/startBooking': typeof StartBookingLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/bekræftBooking': typeof BekrftBookingLazyRoute
  '/diverseBooking': typeof DiverseBookingLazyRoute
  '/frontpage': typeof FrontpageLazyRoute
  '/gruppelokaleBooking': typeof GruppelokaleBookingLazyRoute
  '/klasselokaleBooking': typeof KlasselokaleBookingLazyRoute
  '/mineBookinger': typeof MineBookingerLazyRoute
  '/openlearningBooking': typeof OpenlearningBookingLazyRoute
  '/startBooking': typeof StartBookingLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/bekræftBooking': typeof BekrftBookingLazyRoute
  '/diverseBooking': typeof DiverseBookingLazyRoute
  '/frontpage': typeof FrontpageLazyRoute
  '/gruppelokaleBooking': typeof GruppelokaleBookingLazyRoute
  '/klasselokaleBooking': typeof KlasselokaleBookingLazyRoute
  '/mineBookinger': typeof MineBookingerLazyRoute
  '/openlearningBooking': typeof OpenlearningBookingLazyRoute
  '/startBooking': typeof StartBookingLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/bekræftBooking'
    | '/diverseBooking'
    | '/frontpage'
    | '/gruppelokaleBooking'
    | '/klasselokaleBooking'
    | '/mineBookinger'
    | '/openlearningBooking'
    | '/startBooking'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/bekræftBooking'
    | '/diverseBooking'
    | '/frontpage'
    | '/gruppelokaleBooking'
    | '/klasselokaleBooking'
    | '/mineBookinger'
    | '/openlearningBooking'
    | '/startBooking'
  id:
    | '__root__'
    | '/'
    | '/bekræftBooking'
    | '/diverseBooking'
    | '/frontpage'
    | '/gruppelokaleBooking'
    | '/klasselokaleBooking'
    | '/mineBookinger'
    | '/openlearningBooking'
    | '/startBooking'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  BekrftBookingLazyRoute: typeof BekrftBookingLazyRoute
  DiverseBookingLazyRoute: typeof DiverseBookingLazyRoute
  FrontpageLazyRoute: typeof FrontpageLazyRoute
  GruppelokaleBookingLazyRoute: typeof GruppelokaleBookingLazyRoute
  KlasselokaleBookingLazyRoute: typeof KlasselokaleBookingLazyRoute
  MineBookingerLazyRoute: typeof MineBookingerLazyRoute
  OpenlearningBookingLazyRoute: typeof OpenlearningBookingLazyRoute
  StartBookingLazyRoute: typeof StartBookingLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  BekrftBookingLazyRoute: BekrftBookingLazyRoute,
  DiverseBookingLazyRoute: DiverseBookingLazyRoute,
  FrontpageLazyRoute: FrontpageLazyRoute,
  GruppelokaleBookingLazyRoute: GruppelokaleBookingLazyRoute,
  KlasselokaleBookingLazyRoute: KlasselokaleBookingLazyRoute,
  MineBookingerLazyRoute: MineBookingerLazyRoute,
  OpenlearningBookingLazyRoute: OpenlearningBookingLazyRoute,
  StartBookingLazyRoute: StartBookingLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/bekræftBooking",
        "/diverseBooking",
        "/frontpage",
        "/gruppelokaleBooking",
        "/klasselokaleBooking",
        "/mineBookinger",
        "/openlearningBooking",
        "/startBooking"
      ]
    },
    "/": {
      "filePath": "index.lazy.jsx"
    },
    "/bekræftBooking": {
      "filePath": "bekræftBooking.lazy.jsx"
    },
    "/diverseBooking": {
      "filePath": "diverseBooking.lazy.jsx"
    },
    "/frontpage": {
      "filePath": "frontpage.lazy.jsx"
    },
    "/gruppelokaleBooking": {
      "filePath": "gruppelokaleBooking.lazy.jsx"
    },
    "/klasselokaleBooking": {
      "filePath": "klasselokaleBooking.lazy.jsx"
    },
    "/mineBookinger": {
      "filePath": "mineBookinger.lazy.jsx"
    },
    "/openlearningBooking": {
      "filePath": "openlearningBooking.lazy.jsx"
    },
    "/startBooking": {
      "filePath": "startBooking.lazy.jsx"
    }
  }
}
ROUTE_MANIFEST_END */
