# Data Mutations

## requestEquipmentTimeseriesData

Create a [EquipmentTimeseriesDataRequest](./objects.md#equipmenttimeseriesdatarequest)

**Inputs**

Input is mandatory for this mutation.

<table>
    <tr>
        <th nowrap>Argument</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>equipmentId</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Unique ID representing the <a href="../equipmentManagement/equipmentObjects.html#equipment">Equipment</a></td>
    </tr>
    <tr>
        <td nowrap><code>from</code></td>
        <td nowrap><code>DateTime</code></td>
        <td>UTC date-time string representing the start of the data download to request. Will default to first available data-time data if not specified.</td>
    </tr>
    <tr>
        <td nowrap><code>to</code></td>
        <td nowrap><code>DateTime!</code></td>
        <td>UTC date-time string representing the end of the data download to request.</td>
    </tr>
    <tr>
        <td nowrap><code>points</code></td>
        <td nowrap><code>[String!]!</code></td>
        <td>List of data points to request.</td>
    </tr>
</table>

**Return Fields**

Expects to return [EquipmentTimeseriesDataRequest](./objects.md#equipmenttimeseriesdatarequest)

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        mutation requestEquipmentTimeseriesData {
            requestEquipmentTimeseriesData (
                input: {
                    equipmentId: "8064f6d2-393e-4fc7-b137-8bf9180d76e3"
                    from: "2020-11-12T00:18:38.981Z"
                    to: "2020-11-13T00:16:38.981Z"
                    points: [
                        "humidity",
                        "temperature",
                        "pressure"
                    ]
                }
            ) {
                id
                equipment {
                    id
                    name
                }
                from
                to
                points
                requestStatus
                downloadFile {
                    id
                    bytes
                }
                createdBy {
                    id
                    username
                }
                updatedBy {
                    id
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
            "requestEquipmentTimeseriesData": {
                "id": "8e717bcb-7c01-4d8f-9dfc-4adcc09b1d1e",
                "equipment": {
                    "id": "8064f6d2-393e-4fc7-b137-8bf9180d76e3",
                    "name": "Test Eq 1"
                },
                "from": "2020-11-24T23:27:36.420Z",
                "to": "2020-11-24T23:27:36.420Z",
                "points": [
                    "humidity",
                    "temperature",
                    "pressure"
                ],
                "requestStatus": "PENDING",
                "downloadFile": null,
                "createdBy": {
                    "id": "ab42c2bc-e7b7-4130-af2d-1aafa70dcd3b",
                    "username": "User1"
                },
                "updatedBy": {
                    "id": "ab42c2bc-e7b7-4130-af2d-1aafa70dcd3b",
                    "username": "User1"
                },
                "createdAt": "2020-11-12T00:17:38.981Z",
                "updatedAt": null
            }
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## cancelEquipmentTimeseriesDataRequest

Cancel a [EquipmentTimeseriesDataRequest](./objects.md#equipmenttimeseriesdatarequest)

**Inputs**

Input is mandatory for this mutation.

<table>
    <tr>
        <th nowrap>Argument</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>id</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Unique ID representing the <a href="./objects.html#equipmenttimeseriesdatarequest">EquipmentTimeseriesDataRequest</a></td>
    </tr>
</table>

**Return Fields**

Expects to return [EquipmentTimeseriesDataRequest](./objects.md#equipmenttimeseriesdatarequest)

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        mutation cancelEquipmentTimeseriesDataRequest {
            cancelEquipmentTimeseriesDataRequest (
                input: { id: "8d5084a7-33f6-44c1-923d-16dbe4b68b40" }
            ) {
                id
                equipment {
                    id
                    name
                }
                from
                to
                points
                requestStatus
                downloadFile {
                    id
                    bytes
                }
                createdBy {
                    id
                    username
                }
                updatedBy {
                    id
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
            "cancelEquipmentTimeseriesDataRequest": {
                "id": "8d5084a7-33f6-44c1-923d-16dbe4b68b40",
                "equipment": {
                    "id": "8064f6d2-393e-4fc7-b137-8bf9180d76e3",
                    "name": "Test Eq 1"
                },
                "from": "2020-11-13T00:17:38.979Z",
                "to": "2020-11-13T00:17:38.979Z",
                "points": [
                    "humidity",
                    "temperature",
                    "pressure"
                ],
                "requestStatus": "CANCELED",
                "downloadFile": null,
                "createdBy": {
                    "id": "ab42c2bc-e7b7-4130-af2d-1aafa70dcd3b",
                    "username": "User1"
                },
                "updatedBy": {
                    "id": "96596a07-5221-416b-8dbc-aa95ed3bb528",
                    "username": "User2"
                },
                "createdAt": "2020-11-12T00:17:38.981Z",
                "updatedAt": "2020-11-13T00:17:38.981Z"
            }
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## deleteEquipmentTimeseriesDataRequest

Delete a [EquipmentTimeseriesDataRequest](./objects.md#equipmenttimeseriesdatarequest)

**Inputs**

Input is mandatory for this mutation.

<table>
    <tr>
        <th nowrap>Argument</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>id</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Unique ID representing the <a href="./objects.html#equipmenttimeseriesdatarequest">EquipmentTimeseriesDataRequest</a></td>
    </tr>
</table>

**Return Fields**

Expects to return [EquipmentTimeseriesDataRequest](./objects.md#equipmenttimeseriesdatarequest)

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        mutation deleteEquipmentTimeseriesDataRequest {
            deleteEquipmentTimeseriesDataRequest (
                input: { id: "8d5084a7-33f6-44c1-923d-16dbe4b68b40" }
            ) {
                id
                equipment {
                    id
                    name
                }
                from
                to
                points
                requestStatus
                downloadFile {
                    id
                    bytes
                }
                createdBy {
                    id
                    username
                }
                updatedBy {
                    id
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
            "deleteEquipmentTimeseriesDataRequest": {
                "id": "8d5084a7-33f6-44c1-923d-16dbe4b68b40",
                "equipment": {
                    "id": "8064f6d2-393e-4fc7-b137-8bf9180d76e3",
                    "name": "Test Eq 1"
                },
                "from": "2020-11-13T00:17:38.979Z",
                "to": "2020-11-13T00:17:38.979Z",
                "points": [
                    "humidity",
                    "temperature",
                    "pressure"
                ],
                "requestStatus": "DONE",
                "downloadFile": {
                    "id": "1d220cc6-ce16-4e6f-8142-d0bad722d4c3",
                    "bytes": 370,
                },
                "createdBy": {
                    "id": "ab42c2bc-e7b7-4130-af2d-1aafa70dcd3b",
                    "username": "User1"
                },
                "updatedBy": {
                    "id": "96596a07-5221-416b-8dbc-aa95ed3bb528",
                    "username": "User2"
                },
                "createdAt": "2020-11-12T00:17:38.981Z",
                "updatedAt": "2020-11-13T00:17:38.981Z"
            }
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## retryEquipmentTimeseriesDataRequest

Retry a [EquipmentTimeseriesDataRequest](./objects.md#equipmenttimeseriesdatarequest)

**Inputs**

Input is mandatory for this mutation.

<table>
    <tr>
        <th nowrap>Argument</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>id</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Unique ID representing the <a href="./objects.html#equipmenttimeseriesdatarequest">EquipmentTimeseriesDataRequest</a></td>
    </tr>
</table>

**Return Fields**

Expects to return [EquipmentTimeseriesDataRequest](./objects.md#equipmenttimeseriesdatarequest)

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        mutation retryEquipmentTimeseriesDataRequest {
            retryEquipmentTimeseriesDataRequest (
                input: { id: "8d5084a7-33f6-44c1-923d-16dbe4b68b40" }
            ) {
                id
                equipment {
                    id
                    name
                }
                from
                to
                points
                requestStatus
                downloadFile {
                    id
                    bytes
                }
                createdBy {
                    id
                    username
                }
                updatedBy {
                    id
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
            "retryEquipmentTimeseriesDataRequest": {
                "id": "8d5084a7-33f6-44c1-923d-16dbe4b68b40",
                "equipment": {
                    "id": "8064f6d2-393e-4fc7-b137-8bf9180d76e3",
                    "name": "Test Eq 1"
                },
                "from": "2020-11-13T00:17:38.979Z",
                "to": "2020-11-13T00:17:38.979Z",
                "points": [
                    "humidity",
                    "temperature",
                    "pressure"
                ],
                "requestStatus": "PENDING",
                "downloadFile": null,
                "createdBy": {
                    "id": "ab42c2bc-e7b7-4130-af2d-1aafa70dcd3b",
                    "username": "User1"
                },
                "updatedBy": {
                    "id": "96596a07-5221-416b-8dbc-aa95ed3bb528",
                    "username": "User2"
                },
                "createdAt": "2020-11-12T00:17:38.981Z",
                "updatedAt": "2020-11-13T00:17:38.981Z"
            }
        }
    }
    ```


!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## createDataModelView

Create a [DataModelView](./objects.md#datamodelview)

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
        <td>Name of the data model view</a></td>
    </tr>
    <tr>
        <td nowrap><code>dataModelId</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Unique ID representing the <a href="../equipmentManagement/equipmentObjects.html#datamodel">DataModel</a></td>
    </tr>
    <tr>
        <td nowrap><code>dataPoints</code></td>
        <td nowrap><code>[String!]!</code></td>
        <td>List of data points</td>
    </tr>
</table>

**Return Fields**

Expects to return [DataModelView](./objects.md#datamodelview)

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        mutation {
            createDataModelView(
                input: {
                    name: "My Data Model Data Model View 2"
                    dataModelId: "6e9490c8-297b-491a-8783-9c8d9b0a1554"
                    dataPoints: ["fanOn"]
                }
            ) {
                id
                name
                dataModelId
                dataPoints
            }
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "createDataModelView": {
                "id": "fec54d4d-5419-4cff-b6b5-c68b5b874425",
                "name": "My Data Model Data Model View 2",
                "dataModelId": "6e9490c8-297b-491a-8783-9c8d9b0a1554",
                "dataPoints": [
                    "fanOn"
                ]
            }
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## updateDataModelView

Update a [DataModelView](./objects.md#datamodelview)

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
        <td>Unique ID representing the data model view</td>
    </tr>
    <tr>
        <td nowrap><code>name</code></td>
        <td nowrap><code>String</code></td>
        <td>Name of the data model view</a></td>
    </tr>
    <tr>
        <td nowrap><code>dataModelId</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Unique ID representing the <a href="../equipmentManagement/equipmentObjects.html#datamodel">DataModel</a></td>
    </tr>
    <tr>
        <td nowrap><code>dataPoints</code></td>
        <td nowrap><code>[String!]!</code></td>
        <td>List of data points</td>
    </tr>
</table>

**Return Fields**

Expects to return [DataModelView](./objects.md#datamodelview)

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        mutation {
            updateDataModelView(
                input: {
                    id: "fec54d4d-5419-4cff-b6b5-c68b5b874425"
                    name: "My Data Model Data Model View 2",
                    dataModelId: "6e9490c8-297b-491a-8783-9c8d9b0a1554"
                    dataPoints: ["fanOn", "CO2"]
                }
            ) {
                id
                name
                dataModelId
                dataPoints
            }
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "updateDataModelView": {
                "id": "fec54d4d-5419-4cff-b6b5-c68b5b874425",
                "name": "My Data Model Data Model View 2",
                "dataModelId": "6e9490c8-297b-491a-8783-9c8d9b0a1554",
                "dataPoints": [
                    "fanOn",
                    "CO2"
                ]
            }
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## deleteDataModelView

Delete a [DataModelView](./objects.md#datamodelview)

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
        <td>Unique ID representing the data model view</td>
    </tr>
</table>

**Return Fields**

Expects to return <code>ID</code>

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        mutation {
            deleteDataModelView(input: { id: "fec54d4d-5419-4cff-b6b5-c68b5b874425" })
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "deleteDataModelView": "fec54d4d-5419-4cff-b6b5-c68b5b874425"
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"
