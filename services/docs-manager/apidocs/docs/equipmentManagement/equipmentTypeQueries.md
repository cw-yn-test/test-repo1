# Equipment Management Queries

## equipmentType

Retrieve requested [EquipmentType](./equipmentTypeInterfaces.md#equipmenttype) information.

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
        <td>Unique ID representing the <a href="./equipmentTypeInterfaces.html#equipmenttype">equipment type</a></td>
    </tr>
</table>

**Return Fields**

Expects to return [EquipmentType](./equipmentTypeInterfaces.md#equipmenttype)

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        {
            equipmentType(input: { id: "24257507-f1d7-4d06-a818-f9684d06b70b" }) {
                id
                name
                description
                modelNumber
                manufacturer
                connectionType
                dataModel {
                    id
                    locked
                    dataPoints {
                        dataPointName
                        displayName
                        description
                        type
                        unit
                        max
                        min
                        decimalPlaces
                        locale
                        hierarchy
                        isTimeseries
                    }
                }
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
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "equipmentType": {
                "id": "24257507-f1d7-4d06-a818-f9684d06b70b",
                "name": "VRV",
                "description": "My VRV",
                "modelNumber": "VRV-123",
                "manufacturer": "Daikin",
                "connectionType": "device",
                "dataModel": {
                    "id": "935a7a0a-d103-4a72-9c75-0d84495e352b",
                    "locked": false,
                    "dataPoints": [
                        {
                            "dataPointName": "CO2",
                            "displayName": "CO2 concentration",
                            "description": "Indicates the CO2 concentration.",
                            "type": "float",
                            "unit": "ppm",
                            "max": 6000,
                            "min": 0,
                            "decimalPlaces": 5,
                            "locale": null,
                            "hierarchy": null,
                            "isTimeseries": true
                        },
                        {
                            "dataPointName": "CO",
                            "displayName": "CO concentration",
                            "description": "Indicates the CO concentration.",
                            "type": "float",
                            "unit": "ppm",
                            "max": 6000,
                            "min": 0,
                            "decimalPlaces": 5,
                            "locale": null,
                            "hierarchy": null,
                            "isTimeseries": true
                        },
                        {
                            "dataPointName": "ConnectionStatus",
                            "displayName": "Connection Status",
                            "description": "Indicates the connection status.",
                            "type": "float",
                            "unit": null,
                            "max": 2,
                            "min": 0,
                            "decimalPlaces": 5,
                            "locale": {"en": {"enum": {0: "Disconnected", 1: "Connected", 2: "No status"}}},
                            "hierarchy": null,
                            "isTimeseries": true,
                        }
                    ]
                },
                "frequency": 6000,
                "createdBy": {
                    "id": "c3d29cbe-0c67-4723-8e53-f1e2e38364a6"
                },
                "updatedBy": null,
                "createdAt": "2020-03-26T21:57:58.232Z",
                "updatedAt": "2020-03-26T21:57:58.232Z"
            }
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## equipmentTypes

Retrieve all requested user [Equipment Types](./equipmentTypeInterfaces.md#equipmenttype).

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
        <td nowrap><code>disableCount</code></td>
        <td nowrap><code>Boolean</code></td>
        <td>Whether or not to include additional pagination information inside <code>extensions</code>. See additional info <a href="/index.html#pagination">here</a></td>
    </tr>
    <tr>
        <td nowrap><code>orderBy</code></td>
        <td nowrap><code>[<a href="./equipmentTypeEnums.html#equipmenttypesorderby">EquipmentTypesOrderBy</a>]</code></td>
        <td>The sorting order to return search results. The results that are returned will be sorted initially by the first element, followed by subsequent sub-sorting based on the second element, and so forth. Default is <code>[NAME_ASC]</code></td>
    </tr>
</table>

**Return Fields**

Expects to return [ [EquipmentType](./equipmentTypeInterfaces.md#equipmenttype) ]

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        {
            equipmentTypes(
                input: {
                    name: "VRV"
                }
            ) {
                id
                name
                description
                modelNumber
                manufacturer
                connectionType
                dataModel {
                    id
                    locked
                    dataPoints {
                        dataPointName
                        displayName
                        description
                        type
                        unit
                        max
                        min
                        decimalPlaces
                        locale
                        hierarchy
                        isTimeseries
                    }
                }
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
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "equipmentTypes": [
                {
                    "id": "c100d7f0-8956-40f3-a8b6-85ead4c2733f",
                    "name": "VRV",
                    "description": "My VRV",
                    "modelNumber": "VRV-123",
                    "manufacturer": "Daikin",
                    "connectionType": "device",
                    "dataModel": {
                        "id": "935a7a0a-d103-4a72-9c75-0d84495e352b",
                        "locked": false,
                        "dataPoints": [
                            {
                                "dataPointName": "CO2",
                                "displayName": "CO2 concentration",
                                "description": "Indicates the CO2 concentration.",
                                "type": "float",
                                "unit": "ppm",
                                "max": 6000,
                                "min": 0,
                                "decimalPlaces": 5,
                                "locale": null,
                                "hierarchy": null,
                                "isTimeseries": true
                            },
                            {
                                "dataPointName": "CO",
                                "displayName": "CO concentration",
                                "description": "Indicates the CO concentration.",
                                "type": "float",
                                "unit": "ppm",
                                "max": 6000,
                                "min": 0,
                                "decimalPlaces": 5,
                                "locale": null,
                                "hierarchy": null,
                                "isTimeseries": true
                            },
                            {
                                "dataPointName": "ConnectionStatus",
                                "displayName": "Connection Status",
                                "description": "Indicates the connection status.",
                                "type": "float",
                                "unit": null,
                                "max": 2,
                                "min": 0,
                                "decimalPlaces": 5,
                                "locale": {"en": {"enum": {0: "Disconnected", 1: "Connected", 2: "No status"}}},
                                "hierarchy": null,
                                "isTimeseries": true,
                            }
                        ]
                    },
                    "frequency": 6000,
                    "createdBy": {
                        "id": "c3d29cbe-0c67-4723-8e53-f1e2e38364a6"
                    },
                    "updatedBy": null,
                    "createdAt": "2020-03-26T21:57:58.232Z",
                    "updatedAt": "2020-03-26T21:57:58.232Z"
                },
                {
                    "id": "11d54e0b-64a1-4d87-a0d4-722aa79caec3",
                    "name": "device",
                    "description": "My device",
                    "modelNumber": "device",
                    "manufacturer": "Daikin",
                    "connectionType": "device",
                    "dataModel": {
                        "id": "835a7a0a-d103-4a72-9c75-0d84495e352b",
                        "locked": true,
                        "dataPoints": [
                            {
                                "dataPointName": "CO2",
                                "displayName": "CO2 concentration",
                                "description": "Indicates the CO2 concentration.",
                                "type": "float",
                                "unit": "ppm",
                                "max": 6000,
                                "min": 0,
                                "decimalPlaces": 5,
                                "locale": null,
                                "hierarchy": null,
                                "isTimeseries": true
                            },
                            {
                                "dataPointName": "CO",
                                "displayName": "CO concentration",
                                "description": "Indicates the CO concentration.",
                                "type": "float",
                                "unit": "ppm",
                                "max": 6000,
                                "min": 0,
                                "decimalPlaces": 5,
                                "locale": null,
                                "hierarchy": null,
                                "isTimeseries": true
                            },
                            {
                                "dataPointName": "ConnectionStatus",
                                "displayName": "Connection Status",
                                "description": "Indicates the connection status.",
                                "type": "float",
                                "unit": null,
                                "max": 2,
                                "min": 0,
                                "decimalPlaces": 5,
                                "locale": {"en": {"enum": {0: "Disconnected", 1: "Connected", 2: "No status"}}},
                                "hierarchy": null,
                                "isTimeseries": true,
                            }
                        ]
                    },
                    "frequency": 6000,
                    "createdBy": {
                        "id": "c3d29cbe-0c67-4723-8e53-f1e2e38364a6"
                    },
                    "updatedBy": null,
                    "createdAt": "2020-04-13T16:57:22.257Z",
                    "updatedAt": "2020-04-13T16:57:22.257Z",
                }
            ]
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"