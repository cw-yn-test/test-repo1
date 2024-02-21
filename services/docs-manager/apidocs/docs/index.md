# Introduction

Welcome to the Dosatsu: API Documentation.

Dosatsu exposes a GraphQL API which can be consumed using a client-side GraphQL Framework, or a regular HTTP request.

## GraphQL Basics

GraphQL offers API callers the ability to get the data they specify, and _only_ those they specify. Nothing more.
In a traditional REST API, the client would have to make multiple calls to separate endpoints to get the data they want. With GraphQL, you simply query for all the data up front and receive all the necessary data in **one** API call.

Below outlines the basic mechanism that allows for this to happen:

### Objects

GraphQL objects strictly define the resources, how they relate, and how a client can consume them, often called `schemas`.
This is separate from a database schema, which is for keeping data consistent when entering the database.
GraphQL Schemas sit in front of the application microservices that make database queries (or api calls, etc). It also validates incoming request queries.

Here is an example schema:

<pre>
    <code>
    type Contact {
        id: ID
        name: String
        email: EmailAddress
        phone: String
        time: String
    }
    </code>
</pre>

Here, a `Contact` Object is defined with properties assigned to Scalar Types.

Here is a list of native **Scalar Types:**

- <code>String</code><br/>
- <code>Int</code><br/>
- <code>Float</code><br/>
- <code>Boolean</code><br/>
- <code>ID</code> (similar to a String, but reserved to define IDs which identify an entity)
- <code>DateTime</code> (similar to a String, but reserved to be in an date-time string in UTC format)
- <code>Date</code> (similar to a String, but reserved to be in an Date format)
- <code>JSONObject</code>
- <code>JSON</code> (JSONObject or an Array)
- <code>ObjectOrString</code> (String or JSONObject)
- <code>UnixTimestamp</code> (similar to a Int, but reserved to be in an UnixTimestamp format)
- <code>Void</code> (represents no value being returned)
- <code>EmailAddress</code> (similar to a String, but reserved to be in an EmailAddresses format)
- <code>NonNegativeInt</code> (similar to a Int, but have a value of 0 or more)
- <code>CountryCode</code> (similar to a String, but two-letter codes defined by <a href="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2" target="_blank">ISO 3166-1 alpha-2</a>)
- <code>PhoneNumber</code> (similar to a String, but value conforms to the standard E.164 format as specified in <a href="https://en.wikipedia.org/wiki/E.164" target="_blank">E.164 specification</a>.)
- <code>URL</code> (similar to a String, but value conforms to the standard URL format as specified in <a href="https://www.ietf.org/rfc/rfc3986.txt" target="_blank">RFC3986</a>.)

Objects can also consist of other objects, and not just scalar types.

### Queries and Mutations

Within a GraphQL schema, there are also query and mutation definitions - This is how you do CRUD (create, read, update, delete) operations.

This defines what will be available to clients interacting with the API - similar to REST routes.

#### Queries

Queries define operations that clients can perform to access data that resembles the shape of GraphQL Objects.

!!! info "The following is the syntax for queries"

<pre>
    <code>
    query {
        <b><em>operation name</em></b> {
            <b><em>...field names</em></b>
        }
    }
    </code>
</pre>

A simple equipments query:

<pre>
    <code>
    query {
        equipments {
            id
            name
        }
    }
    </code>
</pre>

#### Mutations

A mutation defines operations clients can perform to mutate data (create, update, delete).

Most mutations also return a payload in the shape of a predefined GraphQL `object`.

!!! info "The following is the syntax for mutations"

<pre>
    <code>
    mutation {
        <b><em>operation name</em></b> (input: { <b><em>...inputs</em></b> }) {
            <b><em>...returned field names</em></b>
        }
    }
    </code>
</pre>

A simple mutation to create an equipment:

<pre>
    <code>
    mutation createEquipment {
        createEquipment(
            input: {
                type: "3a3fd47e-8937-4ce1-b1ab-47a8b4f0f58d"
                name: "my device"
            }
        ) {
            id
            name
        }
    }
    </code>
</pre>

### Example Request

In GraphQL, all requests are <b>POST</b> requests.
In the header, you need to set the <b>Content-Type</b> to <code>application/json</code>.
You will also need to set [Authorization](./userAuth.md) to your <code>JWT Token</code>.

GraphQL will always return a `200` response.
In the case of a successful response, it will return the payload in an object with the property `data`.
In the case of an error, it will return information in the `error` property.

Here is a sample call querying for [equipments](./equipmentManagement/equipmentQueries.md#equipments):

!!! info "HTTP Method, Headers and Body"

 <table>
<th nowrap>Method</th>
<th nowrap>Header</th>
<th></th>
<th nowrap>Body</th>
<tr>
<td nowrap><code>POST</code></td>
<td nowrap>Content-Type</br>Authorization</td>
<td nowrap><code>application/json</code><br/><code>JWT TOKEN</code></td>
<td><em>Please refer to Sample Input below</em></td>
</tr>
</table>

!!! example "Sample Input"

    === "GraphQL"
        ```
        {
            equipments {
                id
                type {
                    id
                    name
                    description
                    modelNumber
                    manufacturer
                    connectionType
                    frequency
                    createdBy {
                        id
                    }
                    updatedBy {
                        id
                    }
                    createdAt
                    updatedAt
                }
                name
                reporting
                frequency
                site {
                    id
                }
                space {
                    id
                }
                customAttribute
                createdAt
                updatedAt
                timeSeries {
                    latestValues {
                        observedAt
                        equipmentId
                        rawData
                    }
                    historicalData(
                        input: {
                        start: "2019-06-21T17:32:28.000Z"
                        end: "2020-07-21T17:32:28.000Z"
                        page: 1
                        rowsPerPage: 100
                        }
                    ) {
                        observedAt
                        equipmentId
                        rawData
                    }
                }
                organization {
                    id
                    name
                }
            }
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "equipments": [
                {
                    "id": "edde9524-7e9e-4c93-b2e0-cc99a291deb0",
                    "type": {
                        "id": "c95b1e56-4dff-47fb-b0f7-538798d5fe9f",
                        "name": "VRV",
                        "description": "My VRV",
                        "modelNumber": "VRV-123",
                        "manufacturer": "DSV",
                        "connectionType": "node",
                        "frequency": 6000,
                        "createdBy": {
                            "id": "c3d29cbe-0c67-4723-8e53-f1e2e38364a6"
                        },
                        "updatedBy": {
                            "id": "c3d29cbe-0c67-4723-8e53-f1e2e38364a6"
                        },
                        "createdAt": "2020-03-02T17:58:27.432Z",
                        "updatedAt": "2020-03-02T17:58:27.432Z"
                    },
                    "name": "VRV",
                    "reporting": true,
                    "frequency": 6000,
                    "site": {
                        "id": "0d0d3b97-a771-48a7-8ca3-2c3c350cb07c"
                    },
                    "space": null,
                    "customAttribute": null,
                    "createdAt": "2020-03-02T18:20:21.581Z",
                    "updatedAt": "2020-03-02T18:46:43.946Z",
                    "timeSeries": {
                        "latestValues": {
                            "observedAt": "2019-07-31T17:32:28.000Z",
                            "equipmentId": "edde9524-7e9e-4c93-b2e0-cc99a291deb0",
                            "rawData": {
                                "pressure": "1200.12",
                                "temp": "25"
                            }
                        },
                        "historicalData": [
                            {
                                "observedAt": "2019-07-31T17:32:28.000Z",
                                "equipmentId": "edde9524-7e9e-4c93-b2e0-cc99a291deb0",
                                "rawData": {
                                    "pressure": "1200.12",
                                    "temp": "25"
                                }
                            },
                            {
                                "observedAt": "2019-07-30T17:32:28.000Z",
                                "equipmentId": "edde9524-7e9e-4c93-b2e0-cc99a291deb0",
                                "rawData": {
                                    "pressure": "1280.12",
                                    "temp": "35"
                                }
                            }
                        ]
                    }
                    "organization": {
                        "id": "d1d2c234-3075-42bb-8452-51c00c1ef801",
                        "name": "Organization Name",
                    }
                },
                {
                    "id": "c47a9d7d-6e39-4bb4-83fe-23271c1e2c54",
                    "type": {
                        "id": "c95b1e56-4dff-47fb-b0f7-538798d5fe9f",
                        "name": "VRV",
                        "description": "My VRV",
                        "modelNumber": "VRV-123",
                        "manufacturer": "DSV",
                        "connectionType": "node",
                        "frequency": 6000,
                        "createdBy": {
                            "id": "c3d29cbe-0c67-4723-8e53-f1e2e38364a6"
                        },
                        "updatedBy": {
                            "id": "c3d29cbe-0c67-4723-8e53-f1e2e38364a6"
                        },
                        "createdAt": "2020-03-02T17:58:27.432Z",
                        "updatedAt": "2020-03-02T17:58:27.432Z"
                    },
                    "name": "VRV 2",
                    "reporting": null,
                    "frequency": null,
                    "site": {
                        "id": "0d0d3b97-a771-48a7-8ca3-2c3c350cb07c"
                    },
                    "space": null,
                    "customAttribute": null,
                    "createdAt": "2020-03-02T18:32:53.648Z",
                    "updatedAt": "2020-03-02T18:32:53.648Z",
                    "timeSeries": {
                        "latestValues": null,
                        "historicalData": null
                    }
                    "organization": {
                        "id": "d1d2c234-3075-42bb-8452-51c00c1ef801",
                        "name": "Organization Name",
                    }
                }
            ]
        }
    }
    ```

#### Making Plain HTTP Requests

There are many libraries and frameworks that format your API requests, but to use plain HTTP, you would simply send a JSON object with a `query` key with a value of the stringified graphql query.

<table>
    <th nowrap>Method</th>
    <th nowrap>Header</th>
    <th></th>
    <th nowrap>Body</th>
    <tr>
        <td nowrap><code>POST</code></td>
        <td nowrap>Content-Type</br>Authorization</td>
        <td nowrap><code>application/json</code><br/><code>JWT TOKEN</code></td>
        <td><em>Please refer to Sample Input below</em></td>
    </tr>
</table>

!!! example "Sample Input"
    ```
    {
        "query": "{ equipments( input: { rowsPerPage: 5 } ) { id name } }"
    }
    ```

!!! success "Sample Output"
    ```
    {
        "data": {
            "equipments": [
                {
                    "id": "6fc2b192-6e0d-4643-b712-e93845befc32",
                    "name": "Equipment A"
                },
                {
                    "id": "44db4337-f527-4ea1-b748-5ffcbb33a927",
                    "name": "Node 1"
                },
                {
                    "id": "5fbf9ff0-5e81-4cff-bb46-6cb947cc3e46",
                    "name": "Equipment B"
                },
                {
                    "id": "56c54463-663d-49ae-bb93-288344868c5c",
                    "name": "Equipment C"
                },
                {
                    "id": "25ee9940-97aa-409c-8240-6d4dd1baac86",
                    "name": "Node 2"
                }
            ]
        }
    }
    ```

For more information, please visit the [GraphQL Org documentation](https://graphql.org/graphql-js/graphql-clients/)

### Interfaces

An <a href="https://spec.graphql.org/June2018/#sec-Interfaces" target="_blank">interface</a> is an abstract type that includes a certain set of fields which other objects can inherit from.

For example, an [EquipmentType](./equipmentManagement/equipmentTypeInterfaces.md) is an interface for [Node](./equipmentManagement/equipmentTypeObjects.md#node), and [Device](./equipmentManagement/equipmentTypeObjects.md#device). It has the following base fields:

```
id
name
description
modelNumber
manufacturer
connectionType
frequency
createdBy
updatedBy
createdAt
updatedAt
```

**Note: `Virtual` type is deprecated. Please use IO Connection CLOUD instead.**
The `Virtual` type  inherits all of these fields, but has an extra field `connectionConfig` which instructs the platform on how to pull data from another cloud.

When querying for `types` which implements an `interface`, you can ask for fields per `type`:

```
{
    equipmentTypes {
        id
        name
        description
        modelNumber
        manufacturer
        connectionType
        frequency
        createdBy {
            id
        }
        updatedBy {
            id
        }
        createdAt
        updatedAt
        ... on Virtual {
            connectionConfig {
                connectionModule
                config {
                    dataRequestSimple {
                        httpMethod
                        url
                        queryParams
                        headers
                    }
                    accessRequest {
                        httpMethod
                        url
                        queryParams
                        headers
                    }
                }
            }
        }
    }
}
```

### Other GraphQL Types

- <a href="https://spec.graphql.org/June2018/#sec-Enums" target="_blank">Enums</a> represent possible sets of values for a field.
- A <a href="https://spec.graphql.org/June2018/#sec-Unions" target="_blank">union</a> is a type of object representing many objects.
- <a href="https://spec.graphql.org/June2018/#sec-Input-Objects" target="_blank">Input Objects</a> define `arguments` for queries, mutations, and certain fields.

### Errors

Calls to GraphQL always return a `200` status code - even if there are errors.
An exception to this rule if the GraphQL API is completely unavailable (i.e. network issues which return `500`).
In the case of a GraphQL error, an array of `errors`.
Here is a sample error asking for an equipment with an invalid ID:

```
{
  "errors": [
    {
      "message": "Equipment ID foo is invalid.",
      "locations": [
        {
          "line": 2,
          "column": 3
        }
      ],
      "path": [
        "equipment"
      ],
      "extensions": {
        "code": "NOT_FOUND_EQUIPMENT_ID",
        "status": 404
      }
    }
  ],
  "data": {
    "equipment": null
  }
}
```

Here, you are given an intelligible `message` which, depending on the context, can be shown to your users.
`locations` and `path` tell you where in your query/mutation the error occurred.
`extensions` will give you an error `code` in the form of a string, and a `status` code equivalent to HTTP status codes.
`data` here is a null value, but you can always have partial data with errors.

GraphQL is strictly typed, meaning it does validation before it makes any internal/external API queries.
For example, if you ask for a field name foo in a query to retrieve an equipment type, the payload will return the following:

```
{
  "error": {
    "errors": [
      {
        "message": "Cannot query field \"foo\" on type \"EquipmentType\".",
        "locations": [
          {
            "line": 3,
            "column": 5
          }
        ],
        "extensions": {
          "code": "GRAPHQL_VALIDATION_FAILED"
        }
      }
    ]
  }
}
```

It is similar to the run-time error above, but validation errors don't have a `path` property, or a `status` code error.

### Extensions

GraphQL payloads can also include an `extensions` object which can include more information about the payload.
For example, the error payload above includes an error code in the `code` property.

#### Pagination

Some queries in our API includes pagination information inside the `extensions` object.
Queries with available pagination information will also have a boolean input called `disableCount`.
These queries will have a `pagination` object inside `extensions` with these properties:

<table>
    <tr>
        <th nowrap>Property</th>
        <th nowrap>Description</th>
        <th nowrap>Appears when <code>disableCount</code> is</th>
    </tr>
    <tr>
        <td nowrap><code>page</code></td>
        <td nowrap>The requested page number</td>
        <td><code>true</code> and <code>false</code></td>
    </tr>
    <tr>
        <td nowrap><code>rowsPerPage</code></td>
        <td nowrap>The requested number of rows per page</td>
        <td><code>true</code> and <code>false</code></td>
    </tr>
    <tr>
        <td nowrap><code>totalPages</code></td>
        <td nowrap>Total number of pages</td>
        <td><code>false</code></td>
    </tr>
    <tr>
        <td nowrap><code>totalRows</code></td>
        <td nowrap>Total number of rows before pagination</td>
        <td><code>false</code></td>
    </tr>
</table>

Since pagination requires some overhead, the default value is `true`, and it is recommended to only use this option when needed.

** Sample Query **
```
{
  sites(input: { disableCount: false }) {
    id
  }
}
```

** Sample Payload **
```
{
  "data": {
    "sites": [
      {
        "id": "08892d44-c010-48bc-b5e3-85188ddcb95d"
      },
      {
        "id": "8ecc9e63-b53c-49e2-81ba-98f77dbc0fea"
      }
    ]
  },
  "extensions": {
    "pagination": {
      "page": 1,
      "rowsPerPage": 10,
      "totalPages": 1,
      "totalRows": 2
    }
  }
}
```

### Resources

#### Migrating From REST

Github as a great <a href="https://developer.github.com/v4/guides/migrating-from-rest/" target="_blank">overview</a> on this topic.

#### GraphQL.org

This is just the tip of the iceberg. You can learn more <a href="https://graphql.org/learn/" target="_blank">here</a>.
