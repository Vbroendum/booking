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
const KlasseLazyImport = createFileRoute('/klasse')()
const InfopageklasseLokaleLazyImport = createFileRoute(
  '/infopageklasseLokale',
)()
const FrontpageLazyImport = createFileRoute('/frontpage')()
const AboutLazyImport = createFileRoute('/about')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const StartBookingLazyRoute = StartBookingLazyImport.update({
  id: '/startBooking',
  path: '/startBooking',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/startBooking.lazy').then((d) => d.Route))

const KlasseLazyRoute = KlasseLazyImport.update({
  id: '/klasse',
  path: '/klasse',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/klasse.lazy').then((d) => d.Route))

const InfopageklasseLokaleLazyRoute = InfopageklasseLokaleLazyImport.update({
  id: '/infopageklasseLokale',
  path: '/infopageklasseLokale',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/infopageklasseLokale.lazy').then((d) => d.Route),
)

const FrontpageLazyRoute = FrontpageLazyImport.update({
  id: '/frontpage',
  path: '/frontpage',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/frontpage.lazy').then((d) => d.Route))

const AboutLazyRoute = AboutLazyImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

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
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/frontpage': {
      id: '/frontpage'
      path: '/frontpage'
      fullPath: '/frontpage'
      preLoaderRoute: typeof FrontpageLazyImport
      parentRoute: typeof rootRoute
    }
    '/infopageklasseLokale': {
      id: '/infopageklasseLokale'
      path: '/infopageklasseLokale'
      fullPath: '/infopageklasseLokale'
      preLoaderRoute: typeof InfopageklasseLokaleLazyImport
      parentRoute: typeof rootRoute
    }
    '/klasse': {
      id: '/klasse'
      path: '/klasse'
      fullPath: '/klasse'
      preLoaderRoute: typeof KlasseLazyImport
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
  '/about': typeof AboutLazyRoute
  '/frontpage': typeof FrontpageLazyRoute
  '/infopageklasseLokale': typeof InfopageklasseLokaleLazyRoute
  '/klasse': typeof KlasseLazyRoute
  '/startBooking': typeof StartBookingLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/about': typeof AboutLazyRoute
  '/frontpage': typeof FrontpageLazyRoute
  '/infopageklasseLokale': typeof InfopageklasseLokaleLazyRoute
  '/klasse': typeof KlasseLazyRoute
  '/startBooking': typeof StartBookingLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/about': typeof AboutLazyRoute
  '/frontpage': typeof FrontpageLazyRoute
  '/infopageklasseLokale': typeof InfopageklasseLokaleLazyRoute
  '/klasse': typeof KlasseLazyRoute
  '/startBooking': typeof StartBookingLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/about'
    | '/frontpage'
    | '/infopageklasseLokale'
    | '/klasse'
    | '/startBooking'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/about'
    | '/frontpage'
    | '/infopageklasseLokale'
    | '/klasse'
    | '/startBooking'
  id:
    | '__root__'
    | '/'
    | '/about'
    | '/frontpage'
    | '/infopageklasseLokale'
    | '/klasse'
    | '/startBooking'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  AboutLazyRoute: typeof AboutLazyRoute
  FrontpageLazyRoute: typeof FrontpageLazyRoute
  InfopageklasseLokaleLazyRoute: typeof InfopageklasseLokaleLazyRoute
  KlasseLazyRoute: typeof KlasseLazyRoute
  StartBookingLazyRoute: typeof StartBookingLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  AboutLazyRoute: AboutLazyRoute,
  FrontpageLazyRoute: FrontpageLazyRoute,
  InfopageklasseLokaleLazyRoute: InfopageklasseLokaleLazyRoute,
  KlasseLazyRoute: KlasseLazyRoute,
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
        "/about",
        "/frontpage",
        "/infopageklasseLokale",
        "/klasse",
        "/startBooking"
      ]
    },
    "/": {
      "filePath": "index.lazy.jsx"
    },
    "/about": {
      "filePath": "about.lazy.jsx"
    },
    "/frontpage": {
      "filePath": "frontpage.lazy.jsx"
    },
    "/infopageklasseLokale": {
      "filePath": "infopageklasseLokale.lazy.jsx"
    },
    "/klasse": {
      "filePath": "klasse.lazy.jsx"
    },
    "/startBooking": {
      "filePath": "startBooking.lazy.jsx"
    }
  }
}
ROUTE_MANIFEST_END */
