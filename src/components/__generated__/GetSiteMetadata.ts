/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetSiteMetadata
// ====================================================

export interface GetSiteMetadata_site_siteMetadata {
  __typename: "SiteSiteMetadata";
  title: string | null;
  description: string | null;
  author: string | null;
}

export interface GetSiteMetadata_site {
  __typename: "Site";
  siteMetadata: GetSiteMetadata_site_siteMetadata | null;
}

export interface GetSiteMetadata {
  site: GetSiteMetadata_site | null;
}
