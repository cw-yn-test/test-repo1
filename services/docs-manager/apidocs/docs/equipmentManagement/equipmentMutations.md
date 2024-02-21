# Equipment Mutations

## createEquipment

Create an [Equipment](./equipmentObjects.md#equipment).

**Inputs**

Input is mandatory for this mutation.

<table>
    <tr>
        <th nowrap>Argument</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>type</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Unique ID representing the equipment type</td>
    </tr>
    <tr>
        <td nowrap><code>name</code></td>
        <td nowrap><code>String!</code></td>
        <td>Equipment name</td>
    </tr>
    <tr>
        <td nowrap><code>organizationId</code></td>
        <td nowrap><code>ID</code></td>
        <td>Unique ID representing the Organization</td>
    </tr>
    <tr>
        <td nowrap><code>frequency</code></td>
        <td nowrap><code>Int</code></td>
        <td>Integer value representing the frequency of the equipment in seconds. Defaults to 1800 if not provided.</td>
    </tr>
    <tr>
        <td nowrap><code>siteId</code></td>
        <td nowrap><code>ID</code></td>
        <td>Reference to a <a href="../locationManagement/objects.html#site">Site</a></td>
    </tr>
    <tr>
        <td nowrap><code>spaceId</code></td>
        <td nowrap><code>ID</code></td>
        <td>Reference to a <code><a href="../locationManagement/objects.html#space">Space</a></code></td>
    </tr>
    <tr>
        <td nowrap><code>customAttribute</code></td>
        <td nowrap><code>JSONObject</code></td>
        <td>Additional information about the equipment</td>
    </tr>
    <tr>
        <td nowrap><code>originatingIOConnectionId</code></td>
        <td nowrap><code>ID</code></td>
        <td>Unique ID representing the <a href="../ioConnectionManagement/ioConnectionInterfaces.html#ioconnection">IO Connection</a></td>
    </tr>
</table>

**Return Fields**

Expects to return [Equipment](./equipmentObjects.md#equipment)

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        mutation createEquipment {
            createEquipment(
                input: {
                    type: "c95b1e56-4dff-47fb-b0f7-538798d5fe9f"
                    name: "My VRV"
                    organizationId: "d1d2c234-3075-42bb-8452-51c00c1ef801"
                    frequency: 6000
                    siteId: "d1d2c234-3075-42bb-8452-51c00c1ef801"
                    spaceId: "d1d2c234-3075-42bb-8452-51c00c1ef801"
                    customAttribute: {
                        model: "12345"
                    }
                }
            ) {
                id
                name
                type {
                    id
                    name
                    connectionType
                }
                reporting
                frequency
                site {
                    id
                }
                space {
                    id
                }
                customAttribute
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
            "createEquipment": {
                "id": "af5c634f-82da-4670-91cd-211093f8f939",
                "name": "My VRV",
                "type": {
                    "id": "c95b1e56-4dff-47fb-b0f7-538798d5fe9f",
                    "name": "VRV",
                    "connectionType": "node"
                },
                "reporting": true,
                "frequency": 6000,
                "site": {
                    "id": "d1d2c234-3075-42bb-8452-51c00c1ef801"
                },
                "space": {
                    "id": "d1d2c234-3075-42bb-8452-51c00c1ef802"
                },
                "customAttribute": {
                    "model": "12345"
                }
                "organization": {
                    "id": "d1d2c234-3075-42bb-8452-51c00c1ef801",
                    "name": "Organization Name",
                }
            }
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## updateEquipment

Update an [Equipment](./equipmentObjects.md#equipment).

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
        <td>Unique ID representing the equipment</td>
    </tr>
    <tr>
        <td nowrap><code>type</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Unique ID representing the equipment type</td>
    </tr>
    <tr>
        <td nowrap><code>name</code></td>
        <td nowrap><code>String</code></td>
        <td>Equipment name</td>
    </tr>
    <tr>
        <td nowrap><code>organizationId</code></td>
        <td nowrap><code>ID</code></td>
        <td>Unique ID representing the Organization</td>
    </tr>
    <tr>
        <td nowrap><code>frequency</code></td>
        <td nowrap><code>Int</code></td>
        <td>Integer value representing the frequency of the equipment in seconds. Defaults to 1800 if not provided.</td>
    </tr>
    <tr>
        <td nowrap><code>siteId</code></td>
        <td nowrap><code>ID</code></td>
        <td>Reference to a <a href="../locationManagement/objects.html#site">Site</a></td>
    </tr>
    <tr>
        <td nowrap><code>spaceId</code></td>
        <td nowrap><code>ID</code></td>
        <td>Reference to a <code><a href="../locationManagement/objects.html#space">Space</a></code></td>
    </tr>
    <tr>
        <td nowrap><code>customAttribute</code></td>
        <td nowrap><code>JSONObject</code></td>
        <td>Additional information about the equipment</td>
    </tr>
</table>

**Return Fields**

Expects to return [Equipment](./equipmentObjects.md#equipment)

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        mutation updateEquipment {
            updateEquipment(
                input: {
                    id: "af5c634f-82da-4670-91cd-211093f8f939"
                    type: "95b1e56-4dff-47fb-b0f7-538798d5fe9f"
                    name: "VRV"
                }
            ) {
                id
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
            "updateEquipment": {
                "id": "af5c634f-82da-4670-91cd-211093f8f939",
                "name": "VRV",
                "reporting": true,
                "frequency": 6000,
                "site": null,
                "space": null,
                "customAttribute": null,
                "organization": null,
            }
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## sendDeviceConfiguration

Send a [Device Configuration](./equipmentObjects.md#deviceconfiguration) to an [Equipment](./equipmentObjects.md#equipment).
Note that the <code>Equipment</code> must be an [EquipmentType](./equipmentTypeInterfaces.md#equipmenttype) with a [ConnectionType](./equipmentTypeEnums.md#connectiontype) of <code>device</code>

**Inputs**

Input is mandatory for this mutation.

<table>
    <tr>
        <th nowrap>Argument</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>deviceId</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Reference to an <a href="./equipmentObjects.html#equipment">Equipment</a> with a <a href="./equipmentTypeEnums.html#connectiontype">connectionType</a> of <code>device</code></td>
    </tr>
    <tr>
        <td nowrap><code>configuration</code></td>
        <td nowrap><code>String!</code></td>
        <td>A configuration blob</td>
    </tr>
    <tr>
        <td nowrap><code>metadata</code></td>
        <td nowrap><code>JSONObject</code></td>
        <td>Any additional information to be included</td>
    </tr>
</table>

**Return Fields**

Expects to return [DeviceConfiguration](./equipmentObjects.md#deviceconfiguration)

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        mutation {
            sendDeviceConfiguration(
                input: {
                    deviceId: "1c2cef6c-56ed-4f42-bf03-26f890f935b9"
                    configuration: "config1"
                    metadata: {
                        fan: "on"
                    }
                }
            ) {
                deviceId
                configuration
                metadata
                transmissionError
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
            "sendDeviceConfiguration": {
                "deviceId": "1c2cef6c-56ed-4f42-bf03-26f890f935b9",
                "configuration": "config1",
                "metadata": {
                    "fan": "on"
                },
                "transmissionError": null,
                "createdBy": {
                    "id": "c3d29cbe-0c67-4723-8e53-f1e2e38364a6"
                },
                "updatedBy": null,
                "createdAt": null,
                "updatedAt": null
            }
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## createDataModel

Create a [DataModel](./equipmentObjects.md#datamodel).

**Inputs**

Input is mandatory for this mutation.

<table>
    <tr>
        <th nowrap>Argument</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>name</code></td>
        <td nowrap><code>String!</code></td>
        <td>The name of the data model</td>
    </tr>
    <tr>
        <td nowrap><code>description</code></td>
        <td nowrap><code>String</code></td>
        <td>The description of the data model</td>
    </tr>
    </tr>
        <td nowrap><code>languages</code></td>
        <td nowrap><code>[Language!]</code></td>
        <td>Set of supported languages. Used as keys in multi-lingual fields in the data point such as displayName and description</td>
    </tr>
    <tr>
        <td nowrap><code>locked</code></td>
        <td nowrap><code>Boolean!</code></td>
        <td>Whether or not new data points can be auto-discovered and added when new data is posted</td>
    </tr>
    <tr>
        <td nowrap><code>dataPoints</code></td>
        <td nowrap><code>[<a href="#datapointsinput">dataPointsInput</a>!]!</code></td>
        <td>Data points which have been auto-discovered from posted data</td>
    </tr>
</table>

<span id="datapointsinput">dataPointsInput</span>

<table>
    <tr>
        <th nowrap>Field</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>dataPointName</code></td>
        <td nowrap><code>String!</code></td>
        <td>Unique machine readable name of the data point</td>
    </tr>
    <tr>
        <td nowrap><code>displayName</code></td>
        <td nowrap><code>String</code></td>
        <td>Human-readable name of the data point. Will override default value if it finds the passed in <code>locale</code></td>
    </tr>
    <tr>
        <td nowrap><code>description</code></td>
        <td nowrap><code>String</code></td>
        <td>Human-readable descriptions & definitions of the data point. Will override default value if it finds the passed in <code>locale</code></td>
    </tr>
    <tr>
        <td nowrap><code>type</code></td>
        <td nowrap><code><a href="./equipmentEnums.html#datatype">DataType</a>!</code></td>
        <td>Type of the data point value.</td>
    </tr>
    <tr>
        <td nowrap><code>unit</code></td>
        <td nowrap><code>String</code></td>
        <td>Physical unit of the data point. Ex: °F, °C, Pascals, Volts, Amps, kWh, VAR, etc</td>
    </tr>
    <tr>
        <td nowrap><code>max</code></td>
        <td nowrap><code>Float</code></td>
        <td>Upper limit of the data point range for numeric points</td>
    </tr>
    <tr>
        <td nowrap><code>min</code></td>
        <td nowrap><code>Float</code></td>
        <td>Lower limit of the data point range for numeric points</td>
    </tr>
    <tr>
        <td nowrap><code>decimalPlaces</code></td>
        <td nowrap><code>Int</code></td>
        <td>Number of decimal places</td>
    </tr>
    <tr>
        <td nowrap><code>haystackTags</code></td>
        <td nowrap><code>JSONObject</code></td>
        <td>Haystack tags of individual points</td>
    </tr>
    <tr>
        <td nowrap><code>locale</code></td>
        <td nowrap><code>JSONObject</code></td>
        <td>Locale of the data point including all languages, enum, unit, etc.</td>
    </tr>
    <tr>
        <td nowrap><code>isTimeseries</code></td>
        <td nowrap><code>Boolean</code></td>
        <td>Whether or not it is recorded as time series data</td>
    </tr>
    <tr>
        <td nowrap><code>hisInterpolate</code></td>
        <td nowrap><code><a href="./equipmentEnums.html#hisinterpolatevalue">HisInterpolateValue</a></code></td>
        <td>A haystack tag explaining how to interpolate between two observations</td>
    </tr>
    <tr>
        <td nowrap><code>hierarchy</code></td>
        <td nowrap><code>String</code></td>
        <td>Hierarchy of the data point. Ex: OutdoorUnit/Compressor/Inverter/CoolingFinTemp</td>
    </tr>
</table>

**Return Fields**

Expects to return [DataModel](./equipmentObjects.md#datamodel)!

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        mutation {
            createDataModel(
                input: {
                    name: "My Data Model"
                    description: "descrip"
                    languages: [en, ja]
                    locked: false
                    dataPoints: [
                        {
                            dataPointName: "temp"
                            displayName: "Temperature"
                            description: "temp descrip"
                            locale: { ja: { name: "温度", description: "温度詳細" } }
                            type: float
                            max: 55
                            min: 110
                            unit: "F"
                            haystackTags: {
                                ahu: null
                            }
                            hisInterpolate: COV
                            decimalPlaces: 10
                            isTimeseries: true
                        }
                        {
                            dataPointName: "errorCode"
                            displayName: "Error"
                            description: "Error Descrip"
                            locale: { ja: { name: "エラー" } }
                            type: string
                            isTimeseries: true
                        }
                    ]
                }
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
        "createDataModel": {
            "id": "4afb7eb1-ecd9-4295-a220-ead1e1034872",
            "name": "My Data Model",
            "description": "descrip",
            "languages": [
                "en",
                "ja"
            ],
            "locked": false,
            "dataPoints": [
                {
                    "dataPointName": "errorCode",
                    "displayName": "Error",
                    "description": "Error Descrip",
                    "locale": {
                        "ja": {
                            "name": "エラー"
                        }
                    },
                    "type": "string",
                    "max": null,
                    "min": null,
                    "unit": null,
                    "decimalPlaces": null,
                    "haystackTags": null,
                    "hisInterpolate": null,
                    "isTimeseries": true
                },
                {
                    "dataPointName": "temp",
                    "displayName": "Temperature",
                    "description": "temp descrip",
                    "locale": {
                        "ja": {
                            "name": "温度",
                        "description": "温度詳細"
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

## updateDataModel

Update a [DataModel](./equipmentObjects.md#datamodel). This does not update any data points.

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
        <td>Unique ID representing the data model</td>
    </tr>
    <tr>
        <td nowrap><code>name</code></td>
        <td nowrap><code>String!</code></td>
        <td>The name of the data model</td>
    </tr>
    <tr>
        <td nowrap><code>description</code></td>
        <td nowrap><code>String</code></td>
        <td>The description of the data model</td>
    </tr>
    </tr>
        <td nowrap><code>languages</code></td>
        <td nowrap><code>[Language!]</code></td>
        <td>Set of supported languages. Used as keys in multi-lingual fields in the data point such as displayName and description</td>
    </tr>
</table>

**Return Fields**

Expects to return [DataModel](./equipmentObjects.md#datamodel)!

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        mutation {
            updateDataModel(
                input: {
                    id: "8c525ae8-54d3-46fa-9533-1c17bf909de8"
                    name: "My Data Model updated"
                    languages: [en, ja]
                }
            ) {
                id
                name
                locked
            }
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "updateDataModel": {
                "id": "8c525ae8-54d3-46fa-9533-1c17bf909de8",
                "name": "My Data Model updated",
                "locked": false
            }
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## updateDataModelLockStatus

Update the lock status of a [DataModel](./equipmentObjects.md#datamodel).

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
        <td>Unique ID representing the data model</td>
    </tr>
    <tr>
        <td nowrap><code>action</code></td>
        <td nowrap><code><a href="#lockstatusaction">LockStatusAction</a>!</code></td>
        <td>Lock status to change to</td>
    </tr>
</table>

<span id="lockstatusaction">LockStatusAction</span>

<table>
    <tr>
        <th nowrap>Field</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>lock</code></td>
        <td>Lock the data model from auto-discovering and adding new data points when new data is posted</td>
    </tr>
    <tr>
        <td nowrap><code>unlock</code></td>
        <td>Enable the data model to add new data points</td>
    </tr>
</table>

**Return Fields**

Expects to return [LockStatusAction](#lockstatusaction)!

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        mutation {
            updateDataModelLockStatus(
                input: { id: "dd247fc3-ea3b-4b3b-9b68-d8808bf49ea7", action: unlock }
            )
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "updateDataModelLockStatus": "unlock"
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## createDataPoint

Create a [DataPoint](./equipmentObjects.md#datapoint).

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
        <td>Unique ID representing the data model</td>
    </tr>
    <tr>
        <td nowrap><code>dataPoint</code></td>
        <td nowrap><code><a href="#datapointsinput">dataPointsInput</a>!</code></td>
        <td>Data points which have been auto-discovered from posted data</td>
    </tr>
</table>

**Return Fields**

Expects to return <code>ID!</code>

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        mutation {
            createDataPoint(
                input: {
                    id: "4afb7eb1-ecd9-4295-a220-ead1e1034872"
                    dataPoint: {
                        dataPointName: "fanOn"
                        displayName: "Fan On"
                        type: boolean
                        description: "fanOn descrip"
                        haystackTags: {
                            ahu: null
                        }
                        hisInterpolate: COV
                        isTimeseries: true
                    }
                }
            )
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "createDataPoint": "4afb7eb1-ecd9-4295-a220-ead1e1034872"
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## updateDataPoint

Update a [DataPoint](./equipmentObjects.md#datapoint).

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
        <td>Unique ID representing the data model</td>
    </tr>
    <tr>
        <td nowrap><code>dataPoint</code></td>
        <td nowrap><code><a href="#datapointsinput">dataPointsInput</a>!</code></td>
        <td>Data points which have been auto-discovered from posted data</td>
    </tr>
</table>

**Return Fields**

Expects to return <code>ID!</code>

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        mutation {
            updateDataPoint(
                input: {
                    id: "4afb7eb1-ecd9-4295-a220-ead1e1034872"
                    dataPoint: {
                        dataPointName: "fanOn"
                        description: "Whether fan is on"
                    }
                }
            )
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "updateDataPoint": "4afb7eb1-ecd9-4295-a220-ead1e1034872"
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## deleteDataPoint

Delete a [DataPoint](./equipmentObjects.md#datapoint).

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
        <td>Unique ID representing the data model</td>
    </tr>
    <tr>
        <td nowrap><code>name</code></td>
        <td nowrap><code>String!</code></td>
        <td>Data point to delete</td>
    </tr>
</table>

**Return Fields**

Expects to return <code>ID!</code>

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        mutation {
            deleteDataPoint(
                input: { id: "4afb7eb1-ecd9-4295-a220-ead1e1034872", name: "fanOn" }
            )
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "deleteDataPoint": "4afb7eb1-ecd9-4295-a220-ead1e1034872"
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## createEquipmentAccessUser

Create an [EquipmentAccessUser](./equipmentObjects.md#equipmentaccessuser).

**Inputs**

Input is mandatory for this mutation.

<table>
    <tr>
        <th nowrap>Argument</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>user</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Unique ID representing the user</td>
    </tr>
    <tr>
        <td nowrap><code>equipment</code></td>
        <td nowrap><code>[ID!]</code></td>
        <td>Unique IDs representing the equipments</td>
    </tr>
</table>

**Return Fields**

Expects to return [EquipmentAccessUser](./equipmentObjects.md#equipmentaccessuser)

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        mutation createEquipmentAccessUser {
            createEquipmentAccessUser(
                input: {
                    userId: "31713532-68e7-410f-8575-952df9149c77"
                    equipmentIds: ["93a8a5fc-2723-44b4-a951-b987940c4150"]
                }
            ) {
                user {
                    id
                    username
                }
    	        equipment
            }
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "createEquipmentAccessUser": {
                "user": {
                    "id": "31713532-68e7-410f-8575-952df9149c77",
                    "username": "user"
                },
                "equipment": [
                    "225f725b-7feb-49e8-9302-011530f053cd",
                    "558964ec-3272-4089-973e-f71317d457f7",
                    "6466615e-0c45-4577-8476-33b4a758839a",
                    "7d31998b-190b-4c0c-ba4d-d2c7a8eee8e5",
                    "93a8a5fc-2723-44b4-a951-b987940c4150",
                    "abbbdbf2-51ef-471e-bdbe-a9243796cebc",
                    "c6ed24cc-257a-4c2b-b833-9e38779dc67e",
                    "e1a8c26d-a83c-4ecf-8952-77cada50cf0f",
                    "eb5cfdb4-d9f1-440d-8305-3a0e943a813d"
                ]
            }
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## updateEquipmentAccessUser

Update an [EquipmentAccessUser](./equipmentObjects.md#equipmentaccessuser).

**Inputs**

Input is mandatory for this mutation.

<table>
    <tr>
        <th nowrap>Argument</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>userId</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Unique ID representing the user</td>
    </tr>
    <tr>
        <td nowrap><code>addEquipment</code></td>
        <td nowrap><code>[ID!]</code></td>
        <td>Unique IDs representing the equipments</td>
    </tr>
    <tr>
        <td nowrap><code>removeEquipment</code></td>
        <td nowrap><code>[ID!]</code></td>
        <td>Unique IDs representing the equipments</td>
    </tr>
</table>

**Return Fields**

Expects to return [EquipmentAccessUser](./equipmentObjects.md#equipmentaccessuser)

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        mutation updateEquipmentAccessUser {
            updateEquipmentAccessUser(
                input: {
                    userId: "31713532-68e7-410f-8575-952df9149c77"
                    addEquipment: ["93a8a5fc-2723-44b4-a951-b987940c4150"]
                    removeEquipment: ["efb5cfdb4-d9f1-440d-8305-3a0e943a813f"]
                }
            ) {
                user {
                    id
                    username
                }
    		    addedEquipment
                removedEquipment
            }
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "updateEquipmentAccessUser": {
                "user": {
                    "id": "31713532-68e7-410f-8575-952df9149c77",
                    "username": "user"
                },
                "addedEquipment": [
                    "93a8a5fc-2723-44b4-a951-b987940c4150"
                ],
                "removedEquipment": [
                    "efb5cfdb4-d9f1-440d-8305-3a0e943a813f"
                ]
            }
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"
