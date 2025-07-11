import type { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

/** 導演的型別 */
export type Director = {
  __typename?: "Director";
  age: Scalars["Int"]["output"];
  gender: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
};

/** 電影的型別 */
export type Movie = {
  __typename?: "Movie";
  detail: MovieDetail;
  director: Director;
  genre: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  img: Scalars["String"]["output"];
  releaseYear: Scalars["Int"]["output"];
  title: Scalars["String"]["output"];
};

/** 電影詳細資訊的型別 */
export type MovieDetail = {
  __typename?: "MovieDetail";
  boxOffice: Scalars["String"]["output"];
  duration: Scalars["Int"]["output"];
};

export type Mutation = {
  __typename?: "Mutation";
  /** 新增電影 */
  addMovie: Movie;
};

export type MutationAddMovieArgs = {
  directorName: Scalars["String"]["input"];
  genre: Scalars["String"]["input"];
  releaseYear: Scalars["Int"]["input"];
  title: Scalars["String"]["input"];
};

export type Query = {
  __typename?: "Query";
  /** 取得所有電影類型 */
  allGenres: Array<Maybe<Scalars["String"]["output"]>>;
  /** 取得所有電影 */
  allMovies: Array<Maybe<Movie>>;
  /** 取得電影細節 */
  movieDetail: MovieDetail;
};

export type QueryMovieDetailArgs = {
  id: Scalars["ID"]["input"];
};

export type GetMoviesQueryVariables = Exact<{ [key: string]: never }>;

export type GetMoviesQuery = {
  __typename?: "Query";
  allMovies: Array<{
    __typename?: "Movie";
    genre: string;
    id: string;
    releaseYear: number;
    title: string;
    img: string;
    director: {
      __typename?: "Director";
      name: string;
      age: number;
      gender: string;
    };
  } | null>;
};

export type GetAllGenresQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllGenresQuery = {
  __typename?: "Query";
  allGenres: Array<string | null>;
};

export type GetMovieDetailQueryVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type GetMovieDetailQuery = {
  __typename?: "Query";
  movieDetail: {
    __typename?: "MovieDetail";
    boxOffice: string;
    duration: number;
  };
};

export type AddMovieMutationVariables = Exact<{
  title: Scalars["String"]["input"];
  releaseYear: Scalars["Int"]["input"];
  genre: Scalars["String"]["input"];
  directorName: Scalars["String"]["input"];
}>;

export type AddMovieMutation = {
  __typename?: "Mutation";
  addMovie: {
    __typename?: "Movie";
    id: string;
    title: string;
    releaseYear: number;
    genre: string;
    director: { __typename?: "Director"; name: string };
  };
};

export const GetMoviesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetMovies" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "allMovies" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "director" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "age" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "gender" },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "genre" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "releaseYear" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "img" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetMoviesQuery, GetMoviesQueryVariables>;
export const GetAllGenresDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetAllGenres" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "allGenres" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetAllGenresQuery, GetAllGenresQueryVariables>;
export const GetMovieDetailDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getMovieDetail" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "movieDetail" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "boxOffice" } },
                { kind: "Field", name: { kind: "Name", value: "duration" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetMovieDetailQuery, GetMovieDetailQueryVariables>;
export const AddMovieDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "AddMovie" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "title" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "releaseYear" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "genre" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "directorName" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "addMovie" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "title" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "title" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "releaseYear" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "releaseYear" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "genre" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "genre" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "directorName" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "directorName" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "releaseYear" } },
                { kind: "Field", name: { kind: "Name", value: "genre" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "director" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AddMovieMutation, AddMovieMutationVariables>;
