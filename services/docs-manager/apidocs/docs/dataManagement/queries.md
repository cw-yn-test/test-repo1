# Data Queries

## equipmentData

Retrieve requested [TimeSeriesData](../dataManagement/objects.md#timeseriesdata) information.

**Inputs**

Input is mandatory for this query.

<table>
    <tr>
        <th nowrap>Argument</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>equipmentId</code></td>
        <td nowrap><code>ID</code></td>
        <td>Unique ID representing the equipment</td>
    </tr>
    <tr>
        <td nowrap><code>start</code></td>
        <td nowrap><code>DateTime</code></td>
        <td>Start date and time to query</td>
    </tr>
    <tr>
        <td nowrap><code>end</code></td>
        <td nowrap><code>DateTime</code></td>
        <td>End date and time to query</td>
    </tr>
    <tr>
        <td nowrap><code>rowsPerPage</code></td>
        <td nowrap><code>Int</code></td>
        <td>Records to return per page</td>
    </tr>
    <tr>
        <td nowrap><code>attributes</code></td>
        <td nowrap><code>[String!]</code></td>
        <td>Attributes to return</td>
    </tr>
    <tr>
        <td nowrap><code>pageState</code></td>
        <td nowrap><code>String</code></td>
        <td>Page state to start from, use either pageState or previousPageState value from previous responses, based on whether to paginate to next or previous page.</td>
    </tr>
    <tr>
        <td nowrap><code>dataModelViewId</code></td>
        <td nowrap><code>ID</code></td>
        <td>Unique ID representing the <a href="../dataManagement/objects.html#datamodelview">DataModelView</a>. If specified, returns equipmentData for the subset of data points set in the <a href="../dataManagement/objects.html#datamodelview">DataModelView</a>. Cannot be specified with <code>attributes</code>.</td>
    </tr>
    <tr>
        <td nowrap><code>ignoreTranslation</code></td>
        <td nowrap><code>Boolean</code></td>
        <td>When true, skip the configured translation for data point values if any configured in the equipment's data model. Translation example: false -> Disconnected, true -> Connected</td>
    </tr>
</table>

**Return Fields**

Expects to return [ [EquipmentData](../dataManagement/objects.md#equipmentdata) ]

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        {
            equipmentData(
                input: {
                    equipmentId: "edde9524-7e9e-4c93-b2e0-cc99a291deb0"
                    start: "2019-06-21T17:32:28.000Z",
                    end: "2020-07-21T17:32:28.000Z",
                    pageState: null,
                    rowsPerPage: 100,
                    attributes: ["pressure"]
                }
            ) {
                rows {
                    equipmentId
                    rawData
                    observedAt
                }
                nextPageState
                previousPageState
            }
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "equipmentData":
                "nextPageState": "B2020-04-02T08:59:59.999Z",
                "previousPageState": null,
                "rows": [
                    {
                        "equipmentId": "edde9524-7e9e-4c93-b2e0-cc99a291deb0",
                        "rawData": {
                            "pressure": "1200.12"
                        },
                        "observedAt": "2019-07-21T17:32:28.000Z"
                    },
                    {
                        "equipmentId": "edde9524-7e9e-4c93-b2e0-cc99a291deb0",
                        "rawData": {
                            "pressure": 1000.51
                        },
                        "observedAt": "2019-07-21T16:30:12.000Z"
                    },
                    {
                        "equipmentId": "edde9524-7e9e-4c93-b2e0-cc99a291deb0",
                        "rawData": {
                            "pressure": 1353.65
                        },
                        "observedAt": "2019-07-21T15:31:45.000Z"
                    }
                ]
            }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## equipmentTimeseriesDataRequest

Retrieve requested [EquipmentTimeseriesDataRequest](./objects.md#equipmenttimeseriesdatarequest) information.

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
        <td>Unique ID representing the <a href="./objects.html#equipmenttimeseriesdatarequest">EquipmentTimeseriesDataRequest</a></td>
    </tr>
</table>

**Return Fields**

Expects to return [EquipmentTimeseriesDataRequest](./objects.md#equipmenttimeseriesdatarequest)

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        {
            equipmentTimeseriesDataRequest(
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
                "equipmentTimeseriesDataRequest": {
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
                        "id": "ab42c2bc-e7b7-4130-af2d-1aafa70dcd3b",
                        "username": "User1"
                    },
                    "createdAt": "2020-11-12T00:17:38.981Z",
                    "updatedAt": "2020-11-13T00:17:38.981Z"
                }
            }
        }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## equipmentTimeseriesDataRequests

Retrieve all [EquipmentTimeseriesDataRequest](./objects.md#equipmenttimeseriesdatarequest) for the requested user.

**Inputs**

Input is optional for this query.

<table>
    <tr>
        <th nowrap>Argument</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>pageState</code></td>
        <td nowrap><code>String</code></td>
        <td>Page state to start from, use either nextPageState or previousPageState value from previous responses, to paginate to next or previous page.</td>
    </tr>
    <tr>
        <td nowrap><code>rowsPerPage</code></td>
        <td nowrap><code>Int</code></td>
        <td>Records to return per page</td>
    </tr>
</table>

**Return Fields**

Expects to return [ [EquipmentTimeseriesDataRequest](./objects.md#equipmenttimeseriesdatarequest) ]

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        {
            equipmentTimeseriesDataRequests (
                input: {
                    page: 1,
                    rowsPerPage: 2,
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
            "equipmentTimeseriesDataRequests": {
                [
                    {
                        "id": "8e717bcb-7c01-4d8f-9dfc-4adcc09b1d1e",
                        "equipment": {
                            "id": "8064f6d2-393e-4fc7-b137-8bf9180d76e3",
                            "name": "Test Eq 1"
                        },
                        "from": "2020-11-12T00:17:38.979Z",
                        "to": "2020-11-13T00:17:38.979Z",
                        "points": [
                            "humidity",
                            "temperature",
                            "pressure"
                        ],
                        "requestStatus": "PROCESSING",
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
                    },
                    {
                        "id": "06b697f3-a948-478c-802f-8c62ded19078",
                        "equipment": {
                            "id": "1733e0cb-3964-4c2d-bf47-2ced967aa62a",
                            "name": "Test Eq 2"
                        },
                        "from": "2020-11-14T00:37:48.338Z",
                        "to": "2020-11-15T00:17:38.979Z",
                        "points": [
                            "humidity",
                            "temperature"
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
                            "id": "90ef507f-00fc-4ca0-86ee-064fffe93191",
                            "username": "User2"
                        },
                        "createdAt": "2020-11-14T00:17:38.981Z",
                        "updatedAt": "2020-11-15T00:17:38.981Z"
                    }
                ]
            }
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## parsers

Retrieve list of all parsers String.

**Inputs**

No input for this query.

**Return Fields**

Expects to return [String]

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        {
            parsers
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "parsers": [
                "BesideParser",
                "DefaultParser",
                "DoSCurrentDataPointValuesParser",
                "DoSHistoricalDataPointValuesParser",
                "DoSPlantParser",
                "EcobeeThermostatParser",
                "IEISGridFormat",
                "MotiliLacklandAFB",
                "RiptideIEParser",
                "TICEnvironmentalParser",
                "VRVImpParser"
            ]
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## parserInfo

Retrieve detailed information including available configuration of the specified parser.

**Inputs**

Input is required for this query.

<table>
    <tr>
        <th nowrap>Argument</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>name</code></td>
        <td nowrap><code>String</code></td>
        <td>Name of the parser to get details</td>
    </tr>
</table>

**Return Fields**

Expects to return [ [ParserInfo](./objects.md#parserinfo) ]

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        {
            parserInfo(input: {name: "DefaultParser"}) {
                name
                description
                availableConfig
            }
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "parserInfo": {
                "name": "DefaultParser",
                "description": "Default Parser for JSON payloads",
                "availableConfig": {
                    "autoDiscoverAttributes": "either true or false, true by default",
                    "attributes": "Array of attributes if autoDiscoverAttributes is set to false",
                    "pathToObservedAt": "json path pointing to the observedAt timestamp, for ex. $.t",
                    "pathToEquipmentId": "json path pointing to the external id of the equipment, for ex. $.networkRef",
                    "pathToEquipmentName": "json path pointing to the name of the equipment, for ex. $.sensor_name",
                    "paths": "map of data point name and their json paths for ex. {category: \"$.category_name\", intensity: \"$.log_intensity\"}",
                    "serviceConfig": {
                        "pathToParse": "json path if to parse only specific part of the payload",
                        "parseEachItem": "true if to consider the payload as an array and process each entry. false by default",
                        "publishToAMQP": "false if not to publish the resulting timeseries data to AMQP. default is true",
                        "postProcessor": "name of post processor if the parsed data needs to be further processed, for example BesideParser",
                        "discoveredEquipment": {
                            "type": "type of the discovered equipment including its id, name, etc"
                        }
                    }
                }
            }
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## dataModelView

Retrieve requested [DataModelView](./objects.md#datamodelview) information.

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
        <td>Unique ID representing the <a href="./objects.html#datamodelview">data model view</a></td>
    </tr>
</table>

**Return Fields**

Expects to return [DataModelView](./objects.md#datamodelview)

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        {
            dataModelView(input: { id: "db578f15-c43a-41f6-9b9a-f5080995acec" }) {
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
            "dataModelView": {
                "id": "db578f15-c43a-41f6-9b9a-f5080995acec",
                "name": "My Data Model Data Model View",
                "dataModelId": "6e9490c8-297b-491a-8783-9c8d9b0a1554",
                "dataPoints": [
                    "CO2"
                ]
            }
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## dataModelViews

Retrieve all requested [DataModelViews](./objects.md#datamodelview).

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
        <td>Name of the data model view</a></td>
    </tr>
    <tr>
        <td nowrap><code>dataModelId</code></td>
        <td nowrap><code>ID</code></td>
        <td>Unique ID representing the <a href="../equipmentManagement/equipmentObjects.html#datamodel">DataModel</a></td>
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
</table>

**Return Fields**

Expects to return [ [DataModelView](./objects.md#datamodelview) ]

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        {
            dataModelViews(
                input: { dataModelId: "6e9490c8-297b-491a-8783-9c8d9b0a1554" }
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
            "dataModelViews": [
                {
                    "id": "db578f15-c43a-41f6-9b9a-f5080995acec",
                    "name": "My Data Model Data Model View",
                    "dataModelId": "6e9490c8-297b-491a-8783-9c8d9b0a1554",
                    "dataPoints": [
                        "CO2"
                    ]
                },
                {
                    "id": "fec54d4d-5419-4cff-b6b5-c68b5b874425",
                    "name": "My Data Model Data Model View 2",
                    "dataModelId": "6e9490c8-297b-491a-8783-9c8d9b0a1554",
                    "dataPoints": [
                        "fanOn"
                    ]
                }
            ]
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"
