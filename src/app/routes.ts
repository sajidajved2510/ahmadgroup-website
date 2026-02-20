import type { Route } from "next";

export const routes = {
  ahmadgroup: {
    root: "/" as Route,
    about: "/about" as Route,
    brands: "/brands" as Route,
    projects: "/projects" as Route,
    contact: "/contact" as Route,

    ahmadConcrete: "/company/ahmad-concrete" as Route,
    ahmadTiles: "/company/ahmad-tiles" as Route,
    ahmadBuilders: "/company/ahmad-builders" as Route,
  },

  admin: {
    signin: "/signin" as Route,
    dashboard: "/dashboard" as Route,
    create_blog: "/blog/create" as Route,
  },
} as const;