# Location Queries

## site

Retrieve [Site](./objects.md#site) information.

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
        <td>Reference to the Site</td>
    </tr>
</table>

**Return Fields**

Expects to return [ [Site](./objects.md#site) ]

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        query {
            site(
                input: {
                    id: "da0d3c0e-124f-4bf7-b9f1-daaf86d76615"
                }
            ) {
                id
                name
                description
                timezone
                enabled
                area
                primaryFunction
                yearBuilt
                geoAddress
                geoStreet
                geoCity
                geoState
                geoCountry
                geoCoordLat
                geoCoordLon
                createdBy {
                    id
                }
                updatedBy {
                    id
                }
                createdAt
                updatedAt
                uploads {
                    id
                    entityId
                    name
                    mimetype
                    bytes
                }
            }
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "site": {
                "id": "da0d3c0e-124f-4bf7-b9f1-daaf86d76615",
                "name": "Updated Tester",
                "description": "Updated Testing Sites",
                "timezone": "America/Los_Angeles",
                "enabled": true,
                "area": 3200,
                "primaryFunction": "Updated Testing Office",
                "yearBuilt": 2020,
                "geoAddress": "5451 Great America Pkwy Santa Clara, CA 95054",
                "geoStreet": "5451 Great America Parkway",
                "geoCity": "Santa Clara",
                "geoState": "California",
                "geoCountry": "United States",
                "geoCoordLat": 37.41135025024414,
                "geoCoordLon": -121.976806640625,
                "createdBy": {
                    "id": "c3d29cbe-0c67-4723-8e53-f1e2e38364a6"
                },
                "updatedBy": {
                    "id": "c3d29cbe-0c67-4723-8e53-f1e2e38364a6"
                },
                "createdAt": "2020-02-06T01:50:23.283Z",
                "updatedAt": "2020-02-06T01:56:00.856Z",
                "uploads": [
                    {
                        "id": "21552ebd-1c6a-4ae4-837e-12913ae581a9",
                        "entityId": "35a11b3a-b773-46b8-84ea-817a310c098a",
                        "name": "pichon.png",
                        "mimetype": "image/png",
                        "bytes": 202143
                    }
                ]
            }
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## sites

Retrieve list of requested [Site](./objects.md#site) information.

**Inputs**

Input is optional for this query.

<table>
    <tr>
        <th nowrap>Argument</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
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
        <td nowrap><code>name</code></td>
        <td nowrap><code>String</code></td>
        <td>Name of the Site. Also supports partial matching</td>
    </tr>
    <tr>
        <td nowrap><code>geoAddress</code></td>
        <td nowrap><code>String</code></td>
        <td>Address of Site. Also supports partial matching</td>
    </tr>
    <tr>
        <td nowrap><code>organizationIds</code></td>
        <td nowrap><code>[ID!]</code></td>
        <td>A list of unique ID representing the <a href="../organizationManagement/objects.html#organization">Organization</a></td>
    </tr>
    <tr>
        <td nowrap><code>equipmentIds</code></td>
        <td nowrap><code>[ID!]</code></td>
        <td>A list of unique ID representing the <a href="../equipmentManagement/equipmentObjects.html#equipment">Equipment</a></td>
    </tr>
    <tr>
        <td nowrap><code>ioConnectionIds</code></td>
        <td nowrap><code>[ID!]</code></td>
        <td>A list of unique ID representing the <a href="ioConnectionInterfaces.html#ioconnection">IO Connection</a></td>
    </tr>
    <tr>
        <td nowrap><code>externalEquipmentIds</code></td>
        <td nowrap><code>[ID!]</code></td>
        <td>A list of unique ID from another system. For example, the equipment ID from GPF Cloud.</td>
    </tr>
    <tr>
        <td nowrap><code>externalSiteIds</code></td>
        <td nowrap><code>[ID!]</code></td>
        <td>A list of unique ID from another system. For example, the site ID from GPF Cloud.</td>
    </tr>
    <tr>
        <td nowrap><code>disableCount</code></td>
        <td nowrap><code>Boolean</code></td>
        <td>Whether or not to include additional pagination information inside <code>extensions</code>. See additional info <a href="/index.html#pagination">here</a></td>
    </tr>
    <tr>
        <td nowrap><code>orderBy</code></td>
        <td nowrap><code>[<a href="./enums.html#sitesorderby">SitesOrderBy</a>]</code></td>
        <td>The sorting order to return search results. The results that are returned will be sorted initially by the first element, followed by subsequent sub-sorting based on the second element, and so forth. Default is <code>[NAME_ASC]</code></td>
    </tr>
</table>

**Return Fields**

Expects to return [ [Site](./objects.md#site) ]

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        query {
            sites(
                input: {
                    page: 1,
                    rowsPerPage: 100
                }
            ) {
                id
                name
                description
                timezone
                enabled
                area
                primaryFunction
                yearBuilt
                geoAddress
                geoStreet
                geoCity
                geoState
                geoCountry
                geoCoordLat
                geoCoordLon
                createdBy {
                    id
                }
                updatedBy {
                    id
                }
                createdAt
                updatedAt
                uploads {
                    id
                    entityId
                    name
                    mimetype
                    bytes
                }
            }
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "sites": [
                {
                    "id": "da0d3c0e-124f-4bf7-b9f1-daaf86d76615",
                    "name": "Updated Tester",
                    "description": "Updated Testing Sites",
                    "timezone": "America/Los_Angeles",
                    "enabled": true,
                    "area": 3200,
                    "primaryFunction": "Updated Testing Office",
                    "yearBuilt": 2020,
                    "geoAddress": "5451 Great America Pkwy Santa Clara, CA 95054",
                    "geoStreet": "5451 Great America Parkway",
                    "geoCity": "Santa Clara",
                    "geoState": "California",
                    "geoCountry": "United States",
                    "geoCoordLat": 37.41135025024414,
                    "geoCoordLon": -121.976806640625,
                    "createdBy": {
                        "id": "c3d29cbe-0c67-4723-8e53-f1e2e38364a6"
                    },
                    "updatedBy": {
                        "id": "c3d29cbe-0c67-4723-8e53-f1e2e38364a6"
                    },
                    "createdAt": "2020-02-06T01:50:23.283Z",
                    "updatedAt": "2020-02-06T01:56:00.856Z",
                    "uploads": [
                        {
                            "id": "21552ebd-1c6a-4ae4-837e-12913ae581a9",
                            "entityId": "35a11b3a-b773-46b8-84ea-817a310c098a",
                            "name": "pichon.png",
                            "mimetype": "image/png",
                            "bytes": 202143
                        }
                    ]
                }
            ]
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## space

Retrieve [Space](./objects.md#space) information.

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
        <td>Reference to the Space</td>
    </tr>
    <tr>
        <td nowrap><code>siteId</code></td>
        <td nowrap><code>ID!</code></td>
        <td>This refers to the site/building this space is part of</td>
    </tr>
</table>

**Return Fields**

Expects to return [ [Space](./objects.md#space) ]

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        query {
            space(
                input: {
                    id: "da0d3c0e-124f-4bf7-b9f1-daaf86d76616"
                    siteId: "da0d3c0e-124f-4bf7-b9f1-daaf86d76615"
                }
            ) {
                id
                name
                description
                type
                enabled
                site { id }
                parentSpace { id }
                area 
                volume
                createdBy {
                    id
                }
                updatedBy {
                    id
                }
                createdAt
                updatedAt
            }
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "space": {
                "id": "da0d3c0e-124f-4bf7-b9f1-daaf86d76616",
                "name": "Space Name",
                "description": "Space Description",
                "type": "Floor",
                "enabled": true,
                "site": { "id": "da0d3c0e-124f-4bf7-b9f1-daaf86d76615" },
                "parentSpace": null,
                "area": 763,
                "volume": 2000,
                "createdBy": {
                    "id": "c3d29cbe-0c67-4723-8e53-f1e2e38364a6"
                },
                "updatedBy": {
                    "id": "c3d29cbe-0c67-4723-8e53-f1e2e38364a6"
                },
                "createdAt": "2020-02-06T01:50:23.283Z",
                "updatedAt": "2020-02-06T01:56:00.856Z"
            }
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## spaces

Retrieve list of requested [Space](./objects.md#space) information.

**Inputs**

Input is mandatory for this query.

<table>
    <tr>
        <th nowrap>Argument</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>siteIds</code></td>
        <td nowrap><code>[ID!]!</code></td>
        <td>A list of unique ID representing the parent site. This refers to the site/building this space is part of. If specified, it will return the children for the specified Sites.</td>
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
        <td nowrap><code>name</code></td>
        <td nowrap><code>String</code></td>
        <td>Name of the space</td>
    </tr>
    <tr>
        <td nowrap><code>parentId</code></td>
        <td nowrap><code>ID</code></td>
        <td>Parent space. If specified, it will return the immediate children for the specified Space. Specify null to return the immediate children of the specified Site.</td>
    </tr>
    <tr>
        <td nowrap><code>spaceIds</code></td>
        <td nowrap><code>[ID!]</code></td>
        <td>A list of unique ID representing the space. </td>
    </tr>
    <tr>
        <td nowrap><code>disableCount</code></td>
        <td nowrap><code>Boolean</code></td>
        <td>Whether or not to include additional pagination information inside <code>extensions</code>. See additional info <a href="/index.html#pagination">here</a></td>
    </tr>
    <tr>
        <td nowrap><code>orderBy</code></td>
        <td nowrap><code>[<a href="./enums.html#spacesorderby">SpacesOrderBy</a>]</code></td>
        <td>The sorting order to return search results. The results that are returned will be sorted initially by the first element, followed by subsequent sub-sorting based on the second element, and so forth. Default is <code>[NAME_ASC]</code></td>
    </tr>
</table>

**Return Fields**

Expects to return [ [Space](./objects.md#space) ]

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        query {
            spaces (input:{ siteIds: ["55f196ac-9433-4af6-bbd4-6f3edcf588be"] }) {
                id
                name
                description,
                type,
                enabled,
                site { id },
                parentSpace { id },
                area,
                createdBy { id },
                updatedBy { id },
                createdAt,
                updatedAt
            }
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "spaces": [
                {
                    "id": "11c444b7-6240-41a8-9d6b-8c2831f0961f",
                    "name": "Mars Meeting Room",
                    "description": "First meeting room in DSV office",
                    "type": null,
                    "enabled": true,
                    "site": {
                        "id": "55f196ac-9433-4af6-bbd4-6f3edcf588be"
                    }
                    "parentSpace": null,
                    "area": 763.8900146484375,
                    "createdBy": {
                    "id": "a2979c29-cfc8-4677-8ff0-38b1905b3a96"
                    },
                    "updatedBy": null,
                    "createdAt": "2020-08-12T22:50:19.254Z",
                    "updatedAt": "2020-08-12T22:50:19.254Z"
                }
            ]
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## linkedSites

Retrieve list of requested [LinkedSite](./objects.md#linkedsite) information.

**Inputs**

Input is optional for this query.

<table>
    <tr>
        <th nowrap>Argument</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>externalIds</code></td>
        <td nowrap><code>[ID!]</code></td>
        <td>A list of unique ID from the external system</td>
    </tr>
    <tr>
        <td nowrap><code>externalName</code></td>
        <td nowrap><code>String</code></td>
        <td>Name from the external system</td>
    </tr>
    <tr>
        <td nowrap><code>ioConnectionIds</code></td>
        <td nowrap><code>[ID!]</td>
        <td>
            A list of the IO Connection which is connected to the external system
        </td>
    </tr>
    <tr>
        <td nowrap><code>siteIds</code></td>
        <td nowrap><code>[ID!]</code></td>
        <td>A list of assigned Dosatsu site ID</td>
    </tr>
    <tr>
        <td nowrap><code>includeRemoved</code></td>
        <td nowrap><code>Boolean</code></td>
        <td>Whether to include soft deleted entires. Default is false.</td>
    </tr>
    <tr>
        <td nowrap><code>skipWithoutSites</code></td>
        <td nowrap><code>Boolean</code></td>
        <td>Whether to only include records with site associations. Default is false.</td>
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
        <td nowrap><code>orderBy</code></td>
        <td nowrap><code>[<a href="./enums.html#linkedsitesorderby">LinkedSitesOrderBy</a>]</code></td>
        <td>The sorting order to return search results. The results that are returned will be sorted initially by the first element, followed by subsequent sub-sorting based on the second element, and so forth. Default is <code>[CREATED_AT_ASC]</code></td>
    </tr>
    <tr>
        <td nowrap><code>disableCount</code></td>
        <td nowrap><code>Boolean</code></td>
        <td>Whether or not to include additional pagination information inside <code>extensions</code>. See additional info <a href="/index.html#pagination">here</a></td>
    </tr>
</table>

**Return Fields**

Expects to return [ [LinkedSite](./objects.md#linkedsite) ]

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        query {
            linkedSites(
                input: {
                    siteIds: null
                    ioConnectionIds: ["c1dc4af7-6cbf-4930-a4cc-f38e9fb8c7e7"]
                    includeRemoved: false
                    skipWithoutSites: false
                    externalName: null
                    externalIds: null
                    rowsPerPage: null
                    page: null
                    orderBy: [siteId]
                }
            ) {
                id
                externalId
                externalName
                ioConnection {
                    id
                    name
                    connectionCategory
                }
                site {
                    id
                    name
                }
                customAttribute
                removed
            }
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "linkedSites": [
                {
                    "id": "cd9b0eb7-0b80-4e6b-afb7-c2da92c77ccf",
                    "externalId": "dd165223-cda3-4372-9681-59582b48ea3c",
                    "externalName": "GPF Cloud Linked System",
                    "ioConnection": {
                        "id": "c1dc4af7-6cbf-4930-a4cc-f38e9fb8c7e7",
                        "name": "GPF Cloud",
                        "connectionCategory": "EMBEDDED_IOT"
                    },
                    "site": {
                        "id": "8ecc9e63-b53c-49e2-81ba-98f77dbc0fea",
                        "name": "GPF Cloud -> dd165223-cda3-4372-9681-59582b48ea3c"
                    },
                    "customAttribute": {},
                    "removed": false
                },
                {
                    "id": "f27ca66e-3adf-47ac-b7d9-3c6ae0e7e400",
                    "externalId": "c6c4f402-37a5-4386-bc89-ae82476f07e7",
                    "externalName": "GPF Cloud Linked System 2",
                    "ioConnection": {
                        "id": "c1dc4af7-6cbf-4930-a4cc-f38e9fb8c7e7",
                        "name": "GPF Cloud",
                        "connectionCategory": "EMBEDDED_IOT"
                    },
                    "site": null,
                    "customAttribute": {},
                    "removed": false
                }
            ]
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## address

Retrieve [Address](./objects.md#address) information.

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
        <td>Reference to the Address</td>
    </tr>
</table>

**Return Fields**

Expects to return [Address](./objects.md#address)

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        query {
            address(
                input: {
                    id: "38ac9a0d-df77-4237-a3d3-9c5ba78e8f69"
                }
            ) {
                address
                id
                formattedAddress
                city
                country
                latitude
                longitude
                state
                street
                timezone
                zipcode
            }
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "address":  {
                "address": "5350 Great America Pkwy, Santa Clara, CA 95054",
                "id": "38ac9a0d-df77-4237-a3d3-9c5ba78e8f69",
                "formattedAddress": "5350 Great America Pkwy, Santa Clara, CA 95054, USA",
                "city": "Santa Clara",
                "country": "United States",
                "latitude": 37.409523,
                "longitude": -121.97814,
                "state": "California",
                "street": "5350 Great America Parkway",
                "timezone": "America/Los_Angeles",
                "zipcode": "95054"
            }
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## addresses

Retrieve list of requested [Address](./objects.md#address) information.

**Inputs**

Input is optional for this query.

<table>
    <tr>
        <th nowrap>Argument</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
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
        <td nowrap><code>address</code></td>
        <td nowrap><code>String</code></td>
        <td>Address. Also supports partial matching</td>
    </tr>
    <tr>
        <td nowrap><code>disableCount</code></td>
        <td nowrap><code>Boolean</code></td>
        <td>Whether or not to include additional pagination information inside <code>extensions</code>. See additional info <a href="/index.html#pagination">here</a></td>
    </tr>
    <tr>
        <td nowrap><code>orderBy</code></td>
        <td nowrap><code>[<a href="./enums.html#addressesorderby">AddressesOrderBy</a>]</code></td>
        <td>The sorting order to return search results. The results that are returned will be sorted initially by the first element, followed by subsequent sub-sorting based on the second element, and so forth. Default is <code>[ADDRESS_ASC]</code></td>
    </tr>
</table>

**Return Fields**

Expects to return [ [Address](./objects.md#address) ]

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        query {
            addresses(
                input: {
                    address: "Great America Pkwy"
                    page: 1,
                    rowsPerPage: 10
                }
            ) {
                address
                id
                formattedAddress
                city
                country
                latitude
                longitude
                state
                street
                timezone
                zipcode
            }
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "addresses": [
                {
                    "address": "5350 Great America Pkwy, Santa Clara, CA 95054",
                    "id": "38ac9a0d-df77-4237-a3d3-9c5ba78e8f69",
                    "formattedAddress": "5350 Great America Pkwy, Santa Clara, CA 95054, USA",
                    "city": "Santa Clara",
                    "country": "United States",
                    "latitude": 37.409523,
                    "longitude": -121.97814,
                    "state": "California",
                    "street": "5350 Great America Parkway",
                    "timezone": "America/Los_Angeles",
                    "zipcode": "95054"
                }
            ]
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"