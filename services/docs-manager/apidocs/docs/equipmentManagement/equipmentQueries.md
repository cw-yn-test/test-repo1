# Equipment Queries

## equipment

Retrieve requested [EquipmentInterface](./equipmentInterfaces.md#equipmentinterface) information.

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
        <td>Unique ID representing the <a href="./equipmentObjects.html#equipment">equipment</a></td>
    </tr>
    <tr>
        <td nowrap><code>omitInitialCall</code></td>
        <td nowrap><code>Boolean</code></td>
        <td>Optimization for certain queries like timeSeries, lastConfiguration, and groups. Note that this may throw an exception if the query asks for fields outside of these. Defaults to false.</td>
    </tr>
</table>

**Return Fields**

Expects to return [EquipmentInterface](./equipmentInterfaces.md#equipmentinterface)

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        {
            equipment(input: { id: "edde9524-7e9e-4c93-b2e0-cc99a291deb0" }) {
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
                lastConfiguration {
                    deviceId
                    configuration
                    metadata
                }
                reporting
                lastReportedAt
                expectedAt
                frequency
                site {
                    id
                }
                space {
                    id
                }
                customAttribute
                createdBy {
                    id
                }
                createdAt
                updatedAt
                latestReadings(
                    input: {
                        until: "2019-06-21T17:32:28.000Z"
                        attributes: ["temp", "pressure"]
                    }
                ) {
                    observedAt
                    equipmentId
                    pointsObservedAt
                    rawData
                }
                clientCertificate
                clientKey
                publicCertificate
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
                organization {
                    id
                    name
                }
                ... on Equipment {
                    groups(
                        input: {
                            projectId: "516c3c6a-c30b-4af4-90fb-1533690b6227"
                            name: "DSV"
                        }
                    ) {
                        id
                        name
                    }
                }
            }
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "equipment": {
                "id": "edde9524-7e9e-4c93-b2e0-cc99a291deb0",
                "type": {
                    "id": "c95b1e56-4dff-47fb-b0f7-538798d5fe9f",
                    "name": "VRV",
                    "description": "My VRV",
                    "modelNumber": "VRV-123",
                    "manufacturer": "DSV",
                    "connectionType": "device",
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
                "lastConfiguration": {
                    "deviceId": "edde9524-7e9e-4c93-b2e0-cc99a291deb0",
                    "configuration": "blob",
                    "metadata": {
                        "key1": "value1"
                    }
                },
                "reporting": true,
                "lastReportedAt": "2020-03-02T17:58:27.432Z",
                "expectedAt": "2020-03-02T18:58:27.432Z",
                "frequency": 6000,
                "site": {
                    "id": "0d0d3b97-a771-48a7-8ca3-2c3c350cb07c"
                },
                "space": null,
                "customAttribute": null,
                "createdBy": {
                    "id": "c3d29cbe-0c67-4723-8e53-f1e2e38364a6"
                },
                "createdAt": "2020-03-02T18:20:21.581Z",
                "updatedAt": "2020-03-02T18:46:43.946Z",
                "latestReadings": {
                    "observedAt": "2019-07-21T17:32:28.000Z",
                    "equipmentId": "edde9524-7e9e-4c93-b2e0-cc99a291deb0",
                    "pointsObservedAt": {
                        "pressure": "2019-09-21T17:32:28.000Z",
                        "temp": "2019-09-21T17:32:28.000Z"
                    },
                    "rawData": {
                        "pressure": "1200.12",
                        "temp": "23.45"
                    }
                },
                "clientCertificate": "certificate data",
                "clientKey": "certificate data",
                "publicCertificate: "certificate data",
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
                "organization": {
                    "id": "d1d2c234-3075-42bb-8452-51c00c1ef801",
                    "name": "Organization Name",
                },
                "groups": [
                    {
                        "id": "de55dcab-c60f-4895-af39-806a8087e863",
                        "name": "DSV"
                    }
                ]
            }
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## equipments

Retrieve all requested user [EquipmentInterface](./equipmentInterfaces.md#equipmentinterface).

**Inputs**

Input is optional for this query.

<table>
    <tr>
        <th nowrap>Argument</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>typeIds</code></td>
        <td nowrap><code>[ID!]</code></td>
        <td>A list of unique ID representing the <a href="./equipmentTypeInterfaces.html#equipmenttype">equipment type</a></td>
    </tr>
    <tr>
        <td nowrap><code>name</code></td>
        <td nowrap><code>String</code></td>
        <td>Name of the equipment</td>
    </tr>
    <tr>
        <td nowrap><code>originatingIOConnectionIds</code></td>
        <td nowrap><code>[ID!]</code></td>
        <td>A list of unique ID representing the <a href="../ioConnectionManagement/ioConnectionInterfaces.html#ioconnection">IO Connection</a></td>
    </tr>
    <tr>
        <td nowrap><code>siteIds</code></td>
        <td nowrap><code>[ID!]</code></td>
        <td>A list of unique ID representing the <a href="../locationManagement/objects.html#site">Site</a></td>
    </tr>
    <tr>
        <td nowrap><code>spaceIds</code></td>
        <td nowrap><code>[ID!]</code></td>
        <td>A list of unique ID representing the <a href="../locationManagement/objects.html#space">Space</a></td>
    </tr>
    <tr>
        <td nowrap><code>organizationIds</code></td>
        <td nowrap><code>[ID!]</code></td>
        <td>A list of unique ID representing the <a href="../organizationManagement/objects.html#organization">Organization</a> that has a direct association with the equipment</td>
    </tr>
    <tr>
        <td nowrap><code>associatedSiteOrganizationId</code></td>
        <td nowrap><code>ID</code></td>
        <td>Unique ID of the <a href="../organizationManagement/objects.html#organization">Organization</a> linked to the sites where the equipment is located, regardless of whether the equipment has a direct association to that organization<br /><strong>Note: This argument has been deprecated. Please use <code>associatedSiteOrganizationIds</code> argument instead</strong></td>
    </tr>
    <tr>
        <td nowrap><code>associatedSiteOrganizationIds</code></td>
        <td nowrap><code>[ID!]</code></td>
        <td>A list of unique ID of the <a href="../organizationManagement/objects.html#organization">Organization</a> linked to the sites where the equipment is located, regardless of whether the equipment has a direct association to that organization</td>
    </tr>
    <tr>
        <td nowrap><code>projectIds</code></td>
        <td nowrap><code>[ID!]</code></td>
        <td>A list of unique ID representing a <a href="../projectManagement/objects.html#project">Project</a></td>
    </tr>
    <tr>
        <td nowrap><code>groupIds</code></td>
        <td nowrap><code>[ID!]</code></td>
        <td>A list of unique ID representing a <a href="../projectManagement/interfaces.html#accessgroup">AccessGroup</a></td>
    </tr>
    <tr>
        <td nowrap><code>reporting</code></td>
        <td nowrap><code>Boolean</code></td>
        <td>Whether or not an equipment is reporting data. If not specified, equipments with either status will be returned.</td>
    </tr>
    <tr>
        <td nowrap><code>equipmentIds</code></td>
        <td nowrap><code>[ID!]</code></td>
        <td>A list of unique equipment to search for.</td>
    </tr>
    <tr>
        <td nowrap><code>dataModelIds</code></td>
        <td nowrap><code>[ID!]</code></td>
        <td>A list of unique ID representing a <a href="./equipmentObjects.html#datamodel">DataModel</a></td>
    </tr>
    <tr>
        <td nowrap><code>externalIds</code></td>
        <td nowrap><code>[ID!]</code></td>
        <td>A list of unique ID from another system. For example, the equipment ID from GPF Cloud.</td>
    </tr>
    <tr>
        <td nowrap><code>namespace</code></td>
        <td nowrap><code>String</code></td>
        <td>Namespace for another system. For example, the equipment from GPF Cloud.</td>
    </tr>
    <tr>
        <td nowrap><code>externalSiteIds</code></td>
        <td nowrap><code>[ID!]</code></td>
        <td>A list of unique ID from another system. For example, the site ID from GPF Cloud.</td>
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
        <td nowrap><code>[<a href="./equipmentEnums.html#equipmentsorderby">EquipmentsOrderBy</a>]</code></td>
        <td>The sorting order to return search results. The results that are returned will be sorted initially by the first element, followed by subsequent sub-sorting based on the second element, and so forth. Default is <code>[NAME_ASC]</code></td>
    </tr>
</table>

**Return Fields**

Expects to return [ [EquipmentInterface](./equipmentInterfaces.md#equipmentinterface) ]

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        {
            equipments {
                id
                lastConfiguration {
                    deviceId
                    configuration
                    metadata
                }
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
                lastReportedAt
                expectedAt
                frequency
                site {
                    id
                }
                space {
                    id
                }
                customAttribute
                createdBy {
                    id
                }
                createdAt
                updatedAt
                latestReadings {
                    observedAt
                    equipmentId
                    rawData
                }
                clientCertificate
                clientKey
                publicCertificate
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
                organization {
                    id
                    name
                }
                ... on Equipment {
                    groups(
                        input: {
                            projectId: "516c3c6a-c30b-4af4-90fb-1533690b6227"
                            name: "DSV"
                        }
                    ) {
                        id
                        name
                    }
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
                "lastConfiguration": {
                    "deviceId": "edde9524-7e9e-4c93-b2e0-cc99a291deb0",
                    "configuration": "blob",
                    "metadata": {
                        "key1": "value1"
                    }
                },
                "type": {
                    "id": "c95b1e56-4dff-47fb-b0f7-538798d5fe9f",
                    "name": "VRV",
                    "description": "My VRV",
                    "modelNumber": "VRV-123",
                    "manufacturer": "DSV",
                    "connectionType": "device",
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
                "lastReportedAt": "2020-03-02T18:57:26.432Z",
                "expectedAt": "2020-03-02T18:58:27.432Z",
                "frequency": 6000,
                "site": {
                    "id": "0d0d3b97-a771-48a7-8ca3-2c3c350cb07c"
                },
                "space": null,
                "customAttribute": null,
                "createdBy": {
                    "id": "c3d29cbe-0c67-4723-8e53-f1e2e38364a6"
                },
                "createdAt": "2020-03-02T18:20:21.581Z",
                "updatedAt": "2020-03-02T18:46:43.946Z",
                "latestReadings": {
                    "observedAt": "2019-07-31T17:32:28.000Z",
                    "equipmentId": "edde9524-7e9e-4c93-b2e0-cc99a291deb0",
                    "rawData": {
                        "pressure": "1200.12",
                        "temp": "25"
                    }
                },
                "clientCertificate": "certificate data",
                "clientKey": "certificate data",
                "publicCertificate: "certificate data",
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
                "organization": {
                    "id": "d1d2c234-3075-42bb-8452-51c00c1ef801",
                    "name": "Organization Name",
                },
                "groups": [
                    {
                        "id": "de55dcab-c60f-4895-af39-806a8087e863",
                        "name": "DSV"
                    }
                ]
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
                "lastReportedAt": "2020-03-02T18:57:26.432Z",
                "expectedAt": "2020-03-02T18:58:27.432Z",
                "frequency": null,
                "site": {
                    "id": "0d0d3b97-a771-48a7-8ca3-2c3c350cb07c"
                },
                "space": null,
                "customAttribute": null,
                "createdBy": {
                    "id": "c3d29cbe-0c67-4723-8e53-f1e2e38364a6"
                },
                "createdAt": "2020-03-02T18:32:53.648Z",
                "updatedAt": "2020-03-02T18:32:53.648Z",
                "latestReadings": null,
                "clientCertificate": null,
                "clientKey": null,
                "publicCertificate: null,
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
                "organization": {
                    "id": "d1d2c234-3075-42bb-8452-51c00c1ef801",
                    "name": "Organization Name",
                },
                "groups": []
            }
            ]
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## dataModel

Retrieve request [DataModel](./equipmentObjects.md#datamodel).

**Inputs**

Input is optional for this query.

<table>
    <tr>
        <th nowrap>Argument</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>id</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Unique ID representing the <a href="./equipmentObjects.html#datamodel">data model</a></td>
    </tr>
    <tr>
        <td nowrap><code>locale</code></td>
        <td nowrap><code>String</code></td>
        <td>Preferred language for data point names and descriptions</a></td>
    </tr>
</table>

**Return Fields**

Expects to return [DataModel](./equipmentObjects.md#datamodel)

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        {
            dataModel(
                input: { id: "bfa9e05a-b24e-4e70-94c7-f5891d7b2b8d", locale: "ja" }
            ) {
                id
                name
                description
                languages
                locked
                dataPoints {
                    dataPointName
                    displayName
                    description
                    locale
                    type
                    max
                    min
                    unit
                    decimalPlaces
                    haystackTags
                    hisInterpolate
                    isTimeseries
                }
            }
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "dataModel": {
                "id": "bfa9e05a-b24e-4e70-94c7-f5891d7b2b8d",
                "name": "データモデル",
                "description": "詳細",
                "languages": ["en", "ja"],
                "locked": false,
                "dataPoints": [
                    {
                        "dataPointName": "temp",
                        "displayName": "温度",
                        "description": "温度",
                        "locale": {
                            "ja": {
                                "name": "温度",
                                "description": "温度"
                            }
                        },
                        "type": "float",
                        "max": 55,
                        "min": 110,
                        "unit": "F",
                        "decimalPlaces": 10,
                        "haystackTags": {
                            "ahu": null
                        },
                        "hisInterpolate": "COV",
                        "isTimeseries": true
                    }
                ]
            }
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## dataModels

Retrieve all requested [DataModels](./equipmentObjects.md#datamodel)

**Inputs**

Input is optional for this query.

<table>
    <tr>
        <th nowrap>Argument</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>locale</code></td>
        <td nowrap><code>String</code></td>
        <td>Preferred language for data point names and descriptions</a></td>
    </tr>
    <tr>
        <td nowrap><code>name</code></td>
        <td nowrap><code>String</code></td>
        <td>Name of the data model</td>
    </tr>
    <tr>
        <td nowrap><code>equipmentIds</code></td>
        <td nowrap><code>[ID!]</code></td>
        <td>Unique IDs representing <a href="../equipmentManagement/objects.html#equipment">Equipment</a>. If this input is passed in, all other inputs except locale will be ignored.</td>
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
        <td nowrap><code>[<a href="./equipmentEnums.html#datamodelsorderby">DataModelsOrderBy</a>]</code></td>
        <td>The sorting order to return search results. The results that are returned will be sorted initially by the first element, followed by subsequent sub-sorting based on the second element, and so forth. Default is <code>[NAME_ASC]</code></td>
    </tr>
</table>

**Return Fields**

Expects to return [DataModel](./equipmentObjects.md#datamodel)

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        {
            dataModels(input: { rowsPerPage: 2 }) {
                id
                name
                dataPoints {
                    dataPointName
                    type
                }
            }
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "dataModels": [
                {
                    "id": "8f9d2e2e-36ed-43e5-9346-4c791470b364",
                    "name": "data model 1",
                    "dataPoints": [
                        {
                            "dataPointName": "CO.conc",
                            "type": "float"
                        },
                        {
                            "dataPointName": "CO.conca",
                            "type": "float"
                        },
                        {
                            "dataPointName": "CO.concat",
                            "type": "float"
                        }
                    ]
                },
                {
                    "id": "3c798791-b832-412c-8eaa-33fa6cfd642c",
                    "name": "data model 2",
                    "dataPoints": [
                        {
                            "dataPointName": "CO.conc",
                            "type": "float"
                        }
                    ]
                }
            ]
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## equipmentAccessUsers

Retrieve requested [Equipment](./equipmentObjects.md#equipment) information.

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
        <td nowrap><code>ID!</code></td>
        <td>Unique ID representing the <a href="./equipmentObjects.html#equipment">equipment</a></td>
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

Expects to return a list of users: [ [User](../userManagement/userObjects.md#user) ]

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        {
            equipmentAccessUsers(input: { equipmentId: "edde9524-7e9e-4c93-b2e0-cc99a291deb0" }) {
                id
                username
                firstName
                lastName
                email
            }
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "equipmentAccessUsers": [
            {
                "id": "6c6026e9-08fa-4038-b923-6a399395a21f",
                "username": "qatester24",
                "firstName": "Bob",
                "lastName": "Smith",
                "email": "bob.smith@email.com"
            },
            {
                "id": "77feb4f7-b687-4d9b-adbb-b412ae1c4541",
                "username": "username1",
                "firstName": "Will",
                "lastName": "Kane",
                "email": "will.kane@email.com"
            },
            {
                "id": "63447ea6-119a-49ee-a9fe-d71ee79a67f9",
                "username": "username2",
                "firstName": "James",
                "lastName": "Chow",
                "email": "james.chow@email.com"
            }
            ]
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"