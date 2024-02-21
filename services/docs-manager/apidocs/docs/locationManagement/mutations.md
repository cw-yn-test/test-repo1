# Location Mutations

## createSite

Create a [Site](./objects.md#site)

**Inputs**

Input is mandatory for this query.

<table>
    <tr>
        <th nowrap>Argument</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>name</code></td>
        <td nowrap><code>String!</code></td>
        <td>Site name</td>
    </tr>
    <tr>
        <td nowrap><code>description</code></td>
        <td nowrap><code>String</code></td>
        <td>Site description</td>
    </tr>
    <tr>
        <td nowrap><code>enabled</code></td>
        <td nowrap><code>Boolean</code></td>
        <td>Is the Site enabled</td>
    </tr>
    <tr>
        <td nowrap><code>area</code></td>
        <td nowrap><code>Float</code></td>
        <td>Area of the Site</td>
    </tr>
    <tr>
        <td nowrap><code>primaryFunction</code></td>
        <td nowrap><code>String</code></td>
        <td>Main functionality of the Site</td>
    </tr>
    <tr>
        <td nowrap><code>yearBuilt</code></td>
        <td nowrap><code>NonNegativeInt</code></td>
        <td>Year the Site was built</td>
    </tr>
    <tr>
        <td nowrap><code>geoAddress</code></td>
        <td nowrap><code>String</code></td>
        <td>Address of Site</td>
    </tr>
    <tr>
        <td nowrap><code>organizationId</code></td>
        <td nowrap><code>ID</code></td>
        <td>Unique ID representing the <a href="../organizationManagement/objects.html#organization">Organization</a></td>
    </tr>
</table>

**Return Fields**

Expects to return [Site](./objects.md#site)

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        mutation {
            createSite(
                input: {
                    name: "Tester"
                    description: "Testing Sites"
                    enabled: true
                    area: 3200
                    primaryFunction: "Testing Office"
                    yearBuilt: 2020
                    geoAddress: "5451 Great America Pkwy Santa Clara, CA 95054"
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
            }
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "createSite": {
                "id": "da0d3c0e-124f-4bf7-b9f1-daaf86d76615",
                "name": "Tester",
                "description": "Testing Sites",
                "timezone": "America/Los_Angeles",
                "enabled": true,
                "area": 3200,
                "primaryFunction": "Testing Office",
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
                }
            }
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## updateSite

Update a [Site](./objects.md#site)

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
        <td>Unique Site ID</td>
    </tr>
    <tr>
        <td nowrap><code>name</code></td>
        <td nowrap><code>String</code></td>
        <td>Site name</td>
    </tr>
    <tr>
        <td nowrap><code>description</code></td>
        <td nowrap><code>String</code></td>
        <td>Site description</td>
    </tr>
    <tr>
        <td nowrap><code>enabled</code></td>
        <td nowrap><code>Boolean</code></td>
        <td>Current state of the Site</td>
    </tr>
    <tr>
        <td nowrap><code>area</code></td>
        <td nowrap><code>Float</code></td>
        <td>Area of the Site</td>
    </tr>
    <tr>
        <td nowrap><code>primaryFunction</code></td>
        <td nowrap><code>String</code></td>
        <td>Main functionality of the Site</td>
    </tr>
    <tr>
        <td nowrap><code>yearBuilt</code></td>
        <td nowrap><code>NonNegativeInt</code></td>
        <td>Year the Site was built</td>
    </tr>
    <tr>
        <td nowrap><code>geoAddress</code></td>
        <td nowrap><code>String</code></td>
        <td>Address of Site</td>
    </tr>
    <tr>
        <td nowrap><code>organizationId</code></td>
        <td nowrap><code>ID</code></td>
        <td>Unique ID representing the <a href="../organizationManagement/objects.html#organization">Organization</a>. Specify <code>null</code> to leave the organization</td>
    </tr>
</table>

**Return Fields**

Expects to return [Site](./objects.md#site)

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        mutation {
            updateSite(
                input: {
                    id: "da0d3c0e-124f-4bf7-b9f1-daaf86d76615"
                    name: "Updated Tester"
                    description: "Updated Testing Sites"
                    enabled: true
                    area: 3200
                    primaryFunction: "Updated Testing Office"
                    yearBuilt: 2020
                    geoAddress: "5451 Great America Pkwy Santa Clara, CA 95054"
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
            }
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "updateSite": {
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
                "updatedAt": "2020-02-06T01:56:00.856Z"
            }
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## createSpace

Create a [Space](./objects.md#space)

Spaces have location hierarchy checks. Valid hierarchies:

1. Site -> Floor -> Room
2. Site -> Zone -> Floor -> Room
3. Site -> Floor -> Zone -> Room
4. Site -> Zone -> Room
5. Site -> Room

Space types with a value of `Other` can be placed anywhere within a Site.
You can also pass in `true` to `ignoreSpaceHierarchy` to ignore hierarchy checks.

**Inputs**

Input is mandatory for this query.

<table>
    <tr>
        <th nowrap>Argument</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>siteId</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Unique Site ID</td>
    </tr>
    <tr>
        <td nowrap><code>name</code></td>
        <td nowrap><code>String!</code></td>
        <td>Space name</td>
    </tr>
    <tr>
        <td nowrap><code>description</code></td>
        <td nowrap><code>String</code></td>
        <td>Space description</td>
    </tr>
    <tr>
        <td nowrap><code>spaceId</code></td>
        <td nowrap><code>ID</code></td>
        <td>Direct parent Space, if any</td>
    </tr>
    <tr>
        <td nowrap><code>type</code></td>
        <td nowrap><code><a href="./enums.html#spacetype">SpaceType</a>!</code></td>
        <td>Type of Space</td>
    </tr>
    <tr>
        <td nowrap><code>area</code></td>
        <td nowrap><code>Float</code></td>
        <td>Area of the Space</td>
    </tr>
    <tr>
        <td nowrap><code>volume</code></td>
        <td nowrap><code>Float</code></td>
        <td>Volume of the Site</td>
    </tr>
    <tr>
        <td nowrap><code>enabled</code></td>
        <td nowrap><code>Boolean</code></td>
        <td>Is the Space enabled. Defaults to <code>true</code></td>
    </tr>
    <tr>
        <td nowrap><code>ignoreSpaceHierarchy</code></td>
        <td nowrap><code>Boolean</code></td>
        <td>Whether to ignore space hierarchy checks. Default is false</td>
    </tr>
</table>

**Return Fields**

Expects to return [Space](./objects.md#space)

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        mutation createSpace {
            createSpace(
                input: {
                    siteId: "587be068-c4e7-4220-ab90-6563447dec3c"
                    spaceId: "2b57e6e8-d849-4b3b-9792-3be37771d48d"
                    description: "Tom's workspace"
                    name: "Tom's Desk"
                    type: Other
                    area: 100
                    enabled: true
                }
            ) {
                id
                name
                description
                enabled
                type
                site {
                    id
                    name
                }
                parentSpace {
                    id
                    name
                    type
                }
                area
                createdBy {
                    username
                }
            }
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "createSpace": {
                "id": "93a6e129-75c4-47d4-a31a-ae377d29fbbe",
                "name": "Tom's Desk",
                "description": "Tom's workspace",
                "enabled": true,
                "type": "Other",
                "site": {
                    "id": "587be068-c4e7-4220-ab90-6563447dec3c",
                    "name": "DSV"
                },
                "parentSpace": {
                    "id": "2b57e6e8-d849-4b3b-9792-3be37771d48d",
                    "name": "Tom's Room",
                    "type": "Room"
                },
                "area": 100,
                "createdBy": {
                    "username": "user"
                }
            }
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## updateSpace

Update a [Space](./objects.md#space)

Spaces have location hierarchy checks. Valid hierarchies:

1. Site -> Floor -> Room
2. Site -> Zone -> Floor -> Room
3. Site -> Floor -> Zone -> Room
4. Site -> Zone -> Room
5. Site -> Room

Space types with a value of `Other` can be placed anywhere within a Site.
You can also pass in `true` to `ignoreSpaceHierarchy` to ignore hierarchy checks.

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
        <td>Unique ID of the space</td>
    </tr>
    <tr>
        <td nowrap><code>siteId</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Unique Site ID</td>
    </tr>
    <tr>
        <td nowrap><code>name</code></td>
        <td nowrap><code>String!</code></td>
        <td>Space name</td>
    </tr>
    <tr>
        <td nowrap><code>description</code></td>
        <td nowrap><code>String</code></td>
        <td>Space description</td>
    </tr>
    <tr>
        <td nowrap><code>spaceId</code></td>
        <td nowrap><code>ID</code></td>
        <td>Direct parent Space, if any</td>
    </tr>
    <tr>
        <td nowrap><code>type</code></td>
        <td nowrap><code><a href="./enums.html#spacetype">SpaceType</a>!</code></td>
        <td>Type of Space</td>
    </tr>
    <tr>
        <td nowrap><code>area</code></td>
        <td nowrap><code>Float</code></td>
        <td>Area of the Space</td>
    </tr>
    <tr>
        <td nowrap><code>volume</code></td>
        <td nowrap><code>Float</code></td>
        <td>Volume of the Site</td>
    </tr>
    <tr>
        <td nowrap><code>enabled</code></td>
        <td nowrap><code>Boolean</code></td>
        <td>Is the Space enabled. Defaults to <code>true</code></td>
    </tr>
    <tr>
        <td nowrap><code>ignoreSpaceHierarchy</code></td>
        <td nowrap><code>Boolean</code></td>
        <td>Whether to ignore space hierarchy checks. Default is false</td>
    </tr>
</table>

**Return Fields**

Expects to return [Space](./objects.md#space)

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        mutation updateSpace {
            updateSpace(
                input: {
                    id: "8d6eb0b9-729b-4310-a47a-a143a78e1b35"
                    siteId: "587be068-c4e7-4220-ab90-6563447dec3c"
                    spaceId: "2b57e6e8-d849-4b3b-9792-3be37771d48d"
                    description: "My Kitchen"
                    name: "Kitchen"
                    type: Other
                    area: 983
                    enabled: true
                }
            ) {
                id
                name
                description
                enabled
                type
                site {
                    id
                    name
                }
                parentSpace {
                    id
                    name
                }
                area
                createdBy {
                    username
                }
                updatedBy {
                    username
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
            "updateSpace": {
                "id": "8d6eb0b9-729b-4310-a47a-a143a78e1b35",
                "name": "Kitchen",
                "description": "My Kitchen",
                "enabled": true,
                "type": "Other",
                "site": {
                    "id": "587be068-c4e7-4220-ab90-6563447dec3c",
                    "name": "DSV"
                },
                "parentSpace": {
                    "id": "2b57e6e8-d849-4b3b-9792-3be37771d48d",
                    "name": "West Hall"
                },
                "area": 983,
                "createdBy": {
                    "username": "user"
                },
                "updatedBy": {
                    "username": "user"
                },
                "createdAt": "2020-07-02T13:56:52.868Z",
                "updatedAt": "2020-07-07T09:52:23.913Z"
            }
        }
    }
    ```

## deleteSpace

Delete a [Space](./objects.md#space)

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
        <td>ID of the space</td>
    </tr>
    <tr>
        <td nowrap><code>siteId</code></td>
        <td nowrap><code>ID!</code></td>
        <td>This refers to the site/building this space is part of</td>
    </tr>
</table>

**Return Fields**

Expects to return [Space](./objects.md#space)

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        mutation deleteSpace {
            deleteSpace(
                input: {
                    id: "8d6eb0b9-729b-4310-a47a-a143a78e1b35"
                    siteId: "587be068-c4e7-4220-ab90-6563447dec3c"
                }
            ) {
                id
                name
                description
                enabled
                type
                site {
                    id
                    name
                }
                parentSpace {
                    id
                    name
                }
                area
                createdBy {
                    username
                }
                updatedBy {
                    username
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
            "deleteSpace": {
                "id": "8d6eb0b9-729b-4310-a47a-a143a78e1b35",
                "name": "Kitchen",
                "description": "My Kitchen",
                "enabled": true,
                "type": "Other",
                "site": {
                    "id": "587be068-c4e7-4220-ab90-6563447dec3c",
                    "name": "DSV"
                },
                "parentSpace": {
                    "id": "2b57e6e8-d849-4b3b-9792-3be37771d48d",
                    "name": "West Hall"
                },
                "area": 983,
                "createdBy": {
                    "username": "user"
                },
                "updatedBy": {
                    "username": "user"
                },
                "createdAt": "2020-07-02T13:56:52.868Z",
                "updatedAt": "2020-07-07T09:52:23.913Z"
            }
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## createAddress

Create a [Address](./objects.md#address)

**Note:** We can create an [Address](./objects.md#address) and assign it to a [Site](./objects.md#site) and/or [Organization](../organizationManagement/objects.md#organization).

**Inputs**

Input is mandatory for this query.

<table>
    <tr>
        <th nowrap>Argument</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>address</code></td>
        <td nowrap><code>String!</code></td>
        <td>Address</td>
    </tr>
</table>

**Return Fields**

Expects to return [Address](./objects.md#address)

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        mutation {
            createAddress(
                input: {
                    address: "5451 great america pkwy"
                }
            ) {
                id
                address
                formattedAddress
                street
                city
                state
                zipcode
                timezone
                country
                longitude
                latitude
            }
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "createAddress": {
                "id": "da0d3c0e-124f-4bf7-b9f1-daaf86d76616",
                "address": "5451 great america pkwy",
                "formattedAddress": "5451 5451 Great America Parkway, Santa Clara, CA 95054",
                "street": "5451 Great America Parkway",
                "city": "Santa Clara",
                "state": "California",
                "country": "United States",
                "longitude": 37.41135025024414,
                "latitude": -121.976806640625
            }
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## updateAddress

Update a [Address](./objects.md#address)

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
        <td>Unique Address ID</td>
    </tr>
    <tr>
        <td nowrap><code>address</code></td>
        <td nowrap><code>String!</code></td>
        <td>Address</td>
    </tr>
</table>

**Return Fields**

Expects to return [Address](./objects.md#address)

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        mutation {
            updateAddress(
                input: {
                    id: "da0d3c0e-124f-4bf7-b9f1-daaf86d76616"
                    address: "5452 great america pkwy"
                }
            ) {
                id
                address
                formattedAddress
                street
                city
                state
                zipcode
                timezone
                country
                longitude
                latitude
            }
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "updateAddress": {
                "id": "da0d3c0e-124f-4bf7-b9f1-daaf86d76616",
                "address": "5452 great america pkwy",
                "formattedAddress": "5452 Great America Parkway, Santa Clara, CA 95054",
                "street": "5452 Great America Parkway",
                "city": "Santa Clara",
                "state": "California",
                "country": "United States",
                "longitude": 37.41135025024414,
                "latitude": -121.976806640625
            }
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"
