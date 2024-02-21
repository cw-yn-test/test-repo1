# IO Connection Management Queries

## ioConnection

Retrieve requested [IO Connection](ioConnectionInterfaces.md#ioconnection) information.

**Inputs**

Input is mandatory for this query.

<table>
    <tr>
        <th nowrap>Argument</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>id</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Unique ID representing the <a href="ioConnectionInterfaces.html#ioconnection">IO Connection</a></td>
    </tr>
</table>

**Return Fields**

Expects to return [IO Connection](ioConnectionInterfaces.md#ioconnection)

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        {
            ioConnection(input: { id: "24257507-f1d7-4d06-a818-f9684d06b70b" }) {
                id
                name
                connectionCategory
                enabled
                connected
                implementedBy
                needsCertificate
                createdBy {
                    id
                }
                createdAt
                updatedAt
                ... on EmbeddedIoTIoConnection {
                    clientCertificate
                    clientKey
                    publicCertificate
                }
                ... on EdgeDeviceIoConnection {
                    clientCertificate
                    clientKey
                    publicCertificate
                }
                ... on CloudIoConnection {
                    apiVersion
                    config
                    simpleRESTSharedConfig
                }
            }
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "ioConnection": {
                "id": "d0bedc53-5b12-4392-ba61-1d61a6a991f9",
                "name": "IO Connection Name",
                "connectionCategory": "EMBEDDED_IOT",
                "enabled": "true",
                "connected": "true",
                "implementedBy": "simpleREST",
                "needsCertificate": false,
                "createdBy": {
                    "id": "a2979c29-cfc8-4677-8ff0-38b1905b3a96"
                },
                "createdAt": "2020-10-21T23:00:36.913Z",
                "updatedAt": "2020-10-21T23:00:36.913Z",
                "clientCertificate": null,
                "clientKey": null,
                "publicCertificate": null
            }
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"
## ioConnections

Retrieve all requested [IO Connection](ioConnectionInterfaces.md#ioconnection).

**Inputs**

Input is optional for this query.

<table>
    <tr>
        <th nowrap>Argument</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>name</code></td>
        <td nowrap><code>String</code></td>
        <td>Query by name</td>
    </tr>
    <tr>
        <td nowrap><code>page</code></td>
        <td nowrap><code>Int</code></td>
        <td>Which page of the records to return</td>
    </tr>
    <tr>
        <td nowrap><code>rowsPerPage</code></td>
        <td nowrap><code>Int</code></td>
        <td>Records to return per page</td>
    </tr>
    <tr>
        <td nowrap><code>ioConnectionIds</code></td>
        <td nowrap><code>[ID!]</code></td>
        <td>A list of unique ID representing the <a href="ioConnectionInterfaces.html#ioconnection">IO Connection</a></td>
    </tr>
    <tr>
        <td nowrap><code>externalEquipmentIds</code></td>
        <td nowrap><code>[ID!]</code></td>
        <td>A list of unique ID from another system. For example, the equipment ID from GPF Cloud</td>
    </tr>
    <tr>
        <td nowrap><code>externalSiteIds</code></td>
        <td nowrap><code>[ID!]</code></td>
        <td>A list of unique ID from another system. For example, the site ID from GPF Cloud</td>
    </tr>
    <tr>
        <td nowrap><code>associatedOrganizationIds</code></td>
        <td nowrap><code>[ID!]</code></td>
        <td>A list of unique ID representing the <a href="../organizationManagement/objects.html#organization">Organization</a> linked to a site or an equipment created by the IO Connection, regardless of whether the IO Connection has a direct association to that organization</td>
    </tr>
    <tr>
        <td nowrap><code>disableCount</code></td>
        <td nowrap><code>Boolean</code></td>
        <td>Whether or not to include additional pagination information inside <code>extensions</code>. See additional info <a href="/index.html#pagination">here</a></td>
    </tr>
    <tr>
        <td nowrap><code>orderBy</code></td>
        <td nowrap><code>[<a href="./ioConnectionEnums.html#ioconnectionsorderby">IoConnectionsOrderBy</a>]</code></td>
        <td>The sorting order to return search results. The results that are returned will be sorted initially by the first element, followed by subsequent sub-sorting based on the second element, and so forth. Default is <code>[NAME_ASC]</code></td>
    </tr>
</table>

**Return Fields**

Expects to return [ [IoConnection](./ioConnectionInterfaces.md#ioconnection) ]

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        {
            ioConnections (
                input: {
                    name: "Connection"
                }
            ) {
                id
                name
                connectionCategory
                enabled
                connected
                implementedBy
                needsCertificate
                createdBy {
                    id
                }
                createdAt
                updatedAt
                ... on EmbeddedIoTIoConnection {
                    clientCertificate
                    clientKey
                    publicCertificate
                }
                ... on EdgeDeviceIoConnection {
                    clientCertificate
                    clientKey
                    publicCertificate
                }
                ... on CloudIoConnection {
                    apiVersion
                    config
                    simpleRESTSharedConfig
                }
            }
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "ioConnections": [
                {
                    "id": "d0bedc53-5b12-4392-ba61-1d61a6a991f9",
                    "name": "IO Connection Name",
                    "connectionCategory": "EMBEDDED_IOT",
                    "enabled": "true",
                    "connected": "true",
                    "implementedBy": "simpleREST",
                    "needsCertificate": false,
                    "createdBy": {
                        "id": "a2979c29-cfc8-4677-8ff0-38b1905b3a96"
                    },
                    "createdAt": "2020-10-21T23:00:36.913Z",
                    "updatedAt": "2020-10-21T23:00:36.913Z",
                    "clientCertificate": null,
                    "clientKey": null,
                    "publicCertificate": null
                }
            ]
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"