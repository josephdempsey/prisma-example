// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  article: (where?: ArticleWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  article: (where: ArticleWhereUniqueInput) => ArticleNullablePromise;
  articles: (args?: {
    where?: ArticleWhereInput;
    orderBy?: ArticleOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Article>;
  articlesConnection: (args?: {
    where?: ArticleWhereInput;
    orderBy?: ArticleOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => ArticleConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createArticle: (data: ArticleCreateInput) => ArticlePromise;
  updateArticle: (args: {
    data: ArticleUpdateInput;
    where: ArticleWhereUniqueInput;
  }) => ArticlePromise;
  updateManyArticles: (args: {
    data: ArticleUpdateManyMutationInput;
    where?: ArticleWhereInput;
  }) => BatchPayloadPromise;
  upsertArticle: (args: {
    where: ArticleWhereUniqueInput;
    create: ArticleCreateInput;
    update: ArticleUpdateInput;
  }) => ArticlePromise;
  deleteArticle: (where: ArticleWhereUniqueInput) => ArticlePromise;
  deleteManyArticles: (where?: ArticleWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  article: (
    where?: ArticleSubscriptionWhereInput
  ) => ArticleSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type ArticleOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "title_ASC"
  | "title_DESC"
  | "pages_ASC"
  | "pages_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface ArticleCreateInput {
  id?: Maybe<ID_Input>;
  title: String;
  pages: Int;
}

export interface ArticleUpdateInput {
  title?: Maybe<String>;
  pages?: Maybe<Int>;
}

export interface ArticleWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  title?: Maybe<String>;
  title_not?: Maybe<String>;
  title_in?: Maybe<String[] | String>;
  title_not_in?: Maybe<String[] | String>;
  title_lt?: Maybe<String>;
  title_lte?: Maybe<String>;
  title_gt?: Maybe<String>;
  title_gte?: Maybe<String>;
  title_contains?: Maybe<String>;
  title_not_contains?: Maybe<String>;
  title_starts_with?: Maybe<String>;
  title_not_starts_with?: Maybe<String>;
  title_ends_with?: Maybe<String>;
  title_not_ends_with?: Maybe<String>;
  pages?: Maybe<Int>;
  pages_not?: Maybe<Int>;
  pages_in?: Maybe<Int[] | Int>;
  pages_not_in?: Maybe<Int[] | Int>;
  pages_lt?: Maybe<Int>;
  pages_lte?: Maybe<Int>;
  pages_gt?: Maybe<Int>;
  pages_gte?: Maybe<Int>;
  AND?: Maybe<ArticleWhereInput[] | ArticleWhereInput>;
}

export interface ArticleUpdateManyMutationInput {
  title?: Maybe<String>;
  pages?: Maybe<Int>;
}

export interface ArticleSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<ArticleWhereInput>;
  AND?: Maybe<ArticleSubscriptionWhereInput[] | ArticleSubscriptionWhereInput>;
}

export type ArticleWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface NodeNode {
  id: ID_Output;
}

export interface AggregateArticle {
  count: Int;
}

export interface AggregateArticlePromise
  extends Promise<AggregateArticle>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateArticleSubscription
  extends Promise<AsyncIterator<AggregateArticle>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface ArticlePreviousValues {
  id: ID_Output;
  title: String;
  pages: Int;
}

export interface ArticlePreviousValuesPromise
  extends Promise<ArticlePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  pages: () => Promise<Int>;
}

export interface ArticlePreviousValuesSubscription
  extends Promise<AsyncIterator<ArticlePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  pages: () => Promise<AsyncIterator<Int>>;
}

export interface ArticleEdge {
  node: Article;
  cursor: String;
}

export interface ArticleEdgePromise extends Promise<ArticleEdge>, Fragmentable {
  node: <T = ArticlePromise>() => T;
  cursor: () => Promise<String>;
}

export interface ArticleEdgeSubscription
  extends Promise<AsyncIterator<ArticleEdge>>,
    Fragmentable {
  node: <T = ArticleSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface ArticleSubscriptionPayload {
  mutation: MutationType;
  node: Article;
  updatedFields: String[];
  previousValues: ArticlePreviousValues;
}

export interface ArticleSubscriptionPayloadPromise
  extends Promise<ArticleSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = ArticlePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ArticlePreviousValuesPromise>() => T;
}

export interface ArticleSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ArticleSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ArticleSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ArticlePreviousValuesSubscription>() => T;
}

export interface Article {
  id: ID_Output;
  title: String;
  pages: Int;
}

export interface ArticlePromise extends Promise<Article>, Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  pages: () => Promise<Int>;
}

export interface ArticleSubscription
  extends Promise<AsyncIterator<Article>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  pages: () => Promise<AsyncIterator<Int>>;
}

export interface ArticleNullablePromise
  extends Promise<Article | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  pages: () => Promise<Int>;
}

export interface ArticleConnection {
  pageInfo: PageInfo;
  edges: ArticleEdge[];
}

export interface ArticleConnectionPromise
  extends Promise<ArticleConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<ArticleEdge>>() => T;
  aggregate: <T = AggregateArticlePromise>() => T;
}

export interface ArticleConnectionSubscription
  extends Promise<AsyncIterator<ArticleConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ArticleEdgeSubscription>>>() => T;
  aggregate: <T = AggregateArticleSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Article",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  models,
  endpoint: `http://localhost:4466`
});
export const prisma = new Prisma();
