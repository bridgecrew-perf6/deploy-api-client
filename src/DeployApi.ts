/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface DeploymentConfiguration {
  name?: string;
  mapUuid?: string;
  type?: "MANUAL_DEPLOY" | "AUTO_SYNC";
  audienceNames?: string[];
  locales?: string[];
  addLocalePrefixToHrefs?: boolean;
}

export interface DeploymentPublishStartInfo {
  started?: boolean;
  errorMessage?: string;
}

export interface ContentApiNavLink {
  shortDescription?: string;
  title?: string;
  contentHref?: string;
  outputclasses?: string[];
  href?: string;
  id?: string;
  type?: string;
}

export interface FacetResponse {
  path?: ValueWithLabel[];

  /** @format int32 */
  count?: number;
}

export interface HierarchicalFacet {
  id?: string;
  title?: string;

  /** @format int32 */
  count?: number;
}

export interface MapSearchHit {
  title?: string;
  id?: string;
  href?: string;
  shortDescription?: string;
  type?: string;
  outputclasses?: string[];
  breadcrumbs?: ContentApiNavLink[];
  highlights?: string[];
  standardMetadata?: MetadataForResponse;
  customMetadata?: MetadataForResponse;
  explanation?: string;
}

export interface MetadataFieldWithValue {
  humanReadable?: string;
  value?: string;
  values?: ValueWithLabel[];
}

export interface MetadataForResponse {
  taxonomy?: Record<string, MetadataFieldWithValue>;
  date?: Record<string, MetadataFieldWithValue>;
  label?: Record<string, MetadataFieldWithValue>;
  text_single_Line?: Record<string, MetadataFieldWithValue>;
}

export interface SearchResponse {
  /** @format int32 */
  totalResults?: number;
  hits?: MapSearchHit[];
  facets?: FacetResponse[];
  hierarchicalFacets?: HierarchicalFacet[];
}

export interface ValueWithLabel {
  value?: string;
  humanReadable?: string;
}

export interface RawContent {
  content?: string;
}

export interface DeploymentInfo {
  id?: string;
  configuration?: DeploymentConfiguration;
  status?: DeploymentStatus;
}

export interface DeploymentPublishResult {
  /** @format int64 */
  started?: number;

  /** @format int64 */
  finished?: number;
  successful?: boolean;
  warningMessage?: string;
  errorMessage?: string;
}

export interface DeploymentStatus {
  state?: "OK" | "PUBLISHING" | "ERROR";
  currentPublish?: DeploymentPublishResult;
  lastPublish?: DeploymentPublishResult;
}

export interface Deployments {
  deployments?: DeploymentInfo[];
}

export interface DeploymentRootInfoResponse {
  title?: string;
  sitemeta?: Record<string, Record<string, string>>;
  availableLocales?: string[];
}

export interface ContentApiNavTreeElement {
  type?: string;
  title?: string;
  href?: string;
  shortdesc?: string;
  meta?: Record<string, string>[];
  externalLink?: boolean;
  audienceContent?: boolean;
  children?: ContentApiNavTreeElement[];
  sys?: Sys;
  contributeStatus?: string;
  shortDescription?: string;
  outputclasses?: string[];
  topicId?: string;
  id?: string;
}

export interface Sys {
  uuid?: string;
}

export interface ContentApiGroupsResponse {
  groups?: Record<string, ContentApiNavTreeElement>;
  groupsByName?: Record<string, ContentApiNavTreeElement>;
}

export interface ContributeChangeResult {
  linkToPage?: ContentApiNavLink;
  changeLocation?: string;
  changeType?: string;
  sys?: Sys;
  status?: string;
}

export interface ContributeChangeResults {
  /** @format int32 */
  totalResults?: number;
  results?: ContributeChangeResult[];
}

export interface ContributeSummaryAggregate {
  /** @format int32 */
  total?: number;
  statusToCount?: Record<string, number>;
}

export interface AlternateLanguageHRef {
  href?: string;
}

export interface ChunkedSectionResponse {
  title?: string;
  topicId?: string;
  sys?: Sys;
  children?: ChunkedSectionResponse[];
}

export interface ContentApiContentResponse {
  content?: string;
  breadcrumbs?: ContentApiNavLink[];
  binaryUrl?: string;
  standardMetadata?: MetadataForResponse;
  customMetadata?: MetadataForResponse;
  headers?: Header[];
  alternateLanguages?: Record<string, AlternateLanguageHRef>;
  sys?: Sys;
  versions?: Version[];
  children?: ContentApiNavLink[];
  shortDescription?: string;
  title?: string;
  next?: ContentApiNavLink;
  outputclasses?: string[];
  audienceContent?: boolean;
  relatedLinks?: ContentApiNavLink[];
  topicId?: string;
  previous?: ContentApiNavLink;
  redirect?: RedirectResponse;
  href?: string;
  parent?: ContentApiNavLink;
  id?: string;
  type?: string;
  chunked_sections?: ChunkedSectionResponse[];
}

export interface Header {
  title?: string;
  id?: string;
}

export interface RedirectResponse {
  href?: string;
  audience?: string;
}

export interface Version {
  title?: string;
  href?: string;
  id?: string;
  containedTopicHref?: string;
}

export interface ContentForPrintResponse {
  content?: string;

  /** @format int32 */
  totalPages?: number;
}

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || "http://dev-deploy.heretto.com/v3",
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.instance.defaults.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      formData.append(
        key,
        property instanceof Blob
          ? property
          : typeof property === "object" && property !== null
          ? JSON.stringify(property)
          : `${property}`,
      );
      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = (format && this.format) || void 0;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      requestParams.headers.common = { Accept: "*/*" };
      requestParams.headers.post = {};
      requestParams.headers.put = {};

      body = this.createFormData(body as Record<string, unknown>);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title Deploy Api
 * @version v3
 * @baseUrl http://dev-deploy.heretto.com/v3
 */
export class DeployApi<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  bookmarks = {
    /**
     * No description
     *
     * @tags Bookmarks
     * @name Bookmarks
     * @request GET:/bookmarks
     */
    bookmarks: (query: { token: string }, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/bookmarks`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Bookmarks
     * @name UpdateBookmarks
     * @request PUT:/bookmarks
     */
    updateBookmarks: (query: { token: string }, data: string, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/bookmarks`,
        method: "PUT",
        query: query,
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Bookmarks
     * @name CreateBookmarks
     * @request POST:/bookmarks
     */
    createBookmarks: (query: { token: string }, data: string, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/bookmarks`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  deployments = {
    /**
     * No description
     *
     * @tags Deployments
     * @name GetDeployments
     * @summary Get all deployments from an organization
     * @request GET:/org/{oid}/deployments
     */
    getDeployments: (oid: string, params: RequestParams = {}) =>
      this.request<Deployments, any>({
        path: `/org/${oid}/deployments`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Deployments
     * @name CreateDeployment
     * @summary Create a new deployment within organization
     * @request POST:/org/{oid}/deployments
     */
    createDeployment: (oid: string, data: DeploymentConfiguration, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/org/${oid}/deployments`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Deployments
     * @name UpdateDeployment
     * @summary Edit a deployment
     * @request POST:/org/{oid}/deployments/{deploymentId}
     */
    updateDeployment: (oid: string, deploymentId: string, data: DeploymentConfiguration, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/org/${oid}/deployments/${deploymentId}`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Deployments
     * @name CreateDeployment1
     * @summary Delete a deployment
     * @request DELETE:/org/{oid}/deployments/{deploymentId}
     */
    createDeployment1: (oid: string, deploymentId: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/org/${oid}/deployments/${deploymentId}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Deployments
     * @name StartPublish
     * @summary Publish a  deployment
     * @request POST:/org/{oid}/deployments/{deploymentId}/services/publish
     */
    startPublish: (oid: string, deploymentId: string, params: RequestParams = {}) =>
      this.request<DeploymentPublishStartInfo, any>({
        path: `/org/${oid}/deployments/${deploymentId}/services/publish`,
        method: "POST",
        ...params,
      }),
  };
  content = {
    /**
     * No description
     *
     * @tags Content
     * @name MapRootInfo
     * @summary Get deployment's metadata
     * @request GET:/org/{oid}/deployments/{deploymentId}
     */
    mapRootInfo: (
      oid: string,
      deploymentId: string,
      query: { token: string; audience?: string; edit?: string },
      params: RequestParams = {},
    ) =>
      this.request<DeploymentRootInfoResponse, any>({
        path: `/org/${oid}/deployments/${deploymentId}`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Content
     * @name MapSearch
     * @summary Search for a text within the whole deployment for a set language
     * @request POST:/org/{oid}/deployments/{deploymentId}/search
     */
    mapSearch: (
      oid: string,
      deploymentId: string,
      query: { token: string; audience?: string },
      data: string,
      params: RequestParams = {},
    ) =>
      this.request<SearchResponse, any>({
        path: `/org/${oid}/deployments/${deploymentId}/search`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Content
     * @name RawContent
     * @request GET:/org/{oid}/fileset/{fileSetId}/object/{uuid}
     */
    rawContent: (
      oid: string,
      fileSetId: string,
      uuid: string,
      query?: { token?: string },
      params: RequestParams = {},
    ) =>
      this.request<RawContent, any>({
        path: `/org/${oid}/fileset/${fileSetId}/object/${uuid}`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Content
     * @name Structure
     * @summary Get deployment structure
     * @request GET:/org/{oid}/deployments/{deploymentId}/structure
     */
    structure: (
      oid: string,
      deploymentId: string,
      query: {
        token: string;
        full?: string;
        "for-path"?: string;
        "for-id"?: string;
        audience?: string;
        edit?: string;
        depth?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ContentApiNavTreeElement, any>({
        path: `/org/${oid}/deployments/${deploymentId}/structure`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Content
     * @name Groups
     * @summary Get groups of a file within the deployment
     * @request GET:/org/{oid}/deployments/{deploymentId}/groups
     */
    groups: (
      oid: string,
      deploymentId: string,
      query: { token: string; "for-path"?: string; "for-id"?: string; audience?: string },
      params: RequestParams = {},
    ) =>
      this.request<ContentApiGroupsResponse, any>({
        path: `/org/${oid}/deployments/${deploymentId}/groups`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Content
     * @name GetContributeChanges
     * @request GET:/org/{oid}/deployments/{deploymentId}/contribute/summary/changes
     */
    getContributeChanges: (
      oid: string,
      deploymentId: string,
      query?: {
        token?: string;
        audience?: string;
        "for-path"?: string;
        status?: string;
        startOffset?: number;
        endOffset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ContributeChangeResults, any>({
        path: `/org/${oid}/deployments/${deploymentId}/contribute/summary/changes`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Content
     * @name GetContributeChangesAggregate
     * @request GET:/org/{oid}/deployments/{deploymentId}/contribute/summary/aggregate
     */
    getContributeChangesAggregate: (
      oid: string,
      deploymentId: string,
      query?: {
        token?: string;
        audience?: string;
        "for-path"?: string;
        status?: string;
        startOffset?: number;
        endOffset?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ContributeSummaryAggregate, any>({
        path: `/org/${oid}/deployments/${deploymentId}/contribute/summary/aggregate`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Content
     * @name Content
     * @summary Get file content for a given path/uuid within the deployment
     * @request GET:/org/{oid}/deployments/{deploymentId}/content
     */
    content: (
      oid: string,
      deploymentId: string,
      query: {
        token: string;
        "for-path"?: string;
        "for-resourceid"?: string;
        "resourceid-versionId"?: string;
        "for-id"?: string;
        audience?: string;
        "include-metadata"?: string;
        view?: string;
        "element-id"?: string;
        edit?: string;
        "add-headers"?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<ContentApiContentResponse, any>({
        path: `/org/${oid}/deployments/${deploymentId}/content`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Content
     * @name ContentForPrint
     * @summary Get print-version of the file content for a given path/uuid within the deployment
     * @request GET:/org/{oid}/deployments/{deploymentId}/contentForPrint
     */
    contentForPrint: (
      oid: string,
      deploymentId: string,
      query: {
        token: string;
        "for-path": string;
        "for-resourceid"?: string;
        "resourceid-versionId"?: string;
        "for-id"?: string;
        audience?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ContentForPrintResponse, any>({
        path: `/org/${oid}/deployments/${deploymentId}/contentForPrint`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  binaryFiles = {
    /**
     * No description
     *
     * @tags Binary Files
     * @name LocalBinaryFile
     * @request GET:/org/{oid}/fileset/{fileSetId}/object/{uuid}/content
     */
    localBinaryFile: (
      oid: string,
      fileSetId: string,
      uuid: string,
      query: { jwt: string; responseContentDisposition?: string },
      params: RequestParams = {},
    ) =>
      this.request<File, any>({
        path: `/org/${oid}/fileset/${fileSetId}/object/${uuid}/content`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
}
