## parsers

Retrieve list of all parsers String.

**Inputs**

No input for this query.

**Return Fields**

Expects to return [ [Parser](./enums.md#parser) ]

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

Expects to return [ParserInfo](./objects.md#parserinfo)

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

## parserConfiguration

Retrieve requested [ParserConfiguration](./objects.md#parserconfiguration).

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
        <td nowrap><code>ID</code></td>
        <td>Unique ID representing Parser Configuration</td>
    </tr>
</table>

**Return Fields**

Expects to return [ParserConfiguration](./objects.md#parserconfiguration)

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        {
            parserConfiguration(input: {id: "1f38e21b-9e84-4d97-ad31-9a4b98afdf36"}) {
                id
                ioConnectionId
                config
                channel
                customParser
                namespace
            }
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "parserConfiguration":
                {
                    "id": "1f38e21b-9e84-4d97-ad31-9a4b98afdf36",
                    "ioConnectionId": "1e6cc1a4-5ecd-4c01-be53-797bae6f86d8",
                    "config": {
                        "attributes": [
                            "CO_concentration",
                            "O3_concentration",
                            "NO2_concentration"
                        ],
                        "autoDiscoverAttributes": false,
                        "paths": {
                            "CO_concentration": "$.pollutants.CO.concentration.mugm3.value",
                            "O3_concentration": "$.pollutants.O3.concentration.mugm3.value",
                            "NO2_concentration": "$.pollutants.NO2.concentration.mugm3.value"
                        },
                        "pathToEquipmentId": "$.deviceId",
                        "pathToObservedAt": "$.date",
                        "serviceConfig": {
                            "pathToParse": "$.currently",
                            "parseEachItem": true
                        },
                        "discoveredEquipment": {
                            "type": "42d3ee7b-55d2-4494-8566-e1c04af07d47"
                        }
                    },
                    "channel": "Sample Parser Configuration",
                    "customParser": "DefaultParser",
                    "namespace": null
                }
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## parserConfigurations

Retrieve all requested [ParserConfiguration](./objects.md#parserconfiguration).

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
        <td nowrap><code>ID</code></td>
        <td>Unique ID representing an <a href="../ioConnectionManagement/ioConnectionInterfaces.html#ioconnection">IO Connection</a>. (Note: can only use <code>channel</code> with this input)</td>
    </tr>
    <tr>
        <td nowrap><code>channel</code></td>
        <td nowrap><code>String</code></td>
        <td>Search by exact channel name</td>
    </tr>
    <tr>
        <td nowrap><code>customParser</code></td>
        <td nowrap><code><a href="./enums.html#parser">Parser</a></code></td>
        <td>Search by custom parser name (Note: cannot use <code>id</code> with this input)</td>
    </tr>
    <tr>
        <td nowrap><code>namespace</code></td>
        <td nowrap><code>String</code></td>
        <td>Search by namespace (Note: cannot use <code>id</code> with this input)</td>
    </tr>
    <tr>
        <td nowrap><code>page</code></td>
        <td nowrap><code>Int</code></td>
        <td>Which page of the records to return (Note: cannot use <code>id</code> with this input)</td>
    </tr>
    <tr>
        <td nowrap><code>rowsPerPage</code></td>
        <td nowrap><code>Int</code></td>
        <td>Records to return per page (Note: cannot use <code>id</code> with this input)</td>
    </tr>
    <tr>
        <td nowrap><code>disableCount</code></td>
        <td nowrap><code>Boolean</code></td>
        <td>Whether or not to include additional pagination information inside <code>extensions</code>. See additional info <a href="/index.html#pagination">here</a></td>
    </tr>
</table>

**Return Fields**

Expects to return [ [ParserConfiguration](./objects.md#parserconfiguration) ]

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        {
            parserConfigurations {
                id
                ioConnectionId
                config
                channel
                customParser
                namespace
            }
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "parserConfigurations": [
                {
                    "id": "1f38e21b-9e84-4d97-ad31-9a4b98afdf36",
                    "ioConnectionId": "1e6cc1a4-5ecd-4c01-be53-797bae6f86d8",
                    "config": {
                        "attributes": [
                            "CO_concentration",
                            "O3_concentration",
                            "NO2_concentration"
                        ],
                        "autoDiscoverAttributes": false,
                        "paths": {
                            "CO_concentration": "$.pollutants.CO.concentration.mugm3.value",
                            "O3_concentration": "$.pollutants.O3.concentration.mugm3.value",
                            "NO2_concentration": "$.pollutants.NO2.concentration.mugm3.value"
                        },
                        "pathToEquipmentId": "$.deviceId",
                        "pathToObservedAt": "$.date",
                        "serviceConfig": {
                            "pathToParse": "$.currently",
                            "parseEachItem": true
                        },
                        "discoveredEquipment": {
                            "type": "42d3ee7b-55d2-4494-8566-e1c04af07d47"
                        }
                    },
                    "channel": "Sample Parser Configuration",
                    "customParser": "DefaultParser",
                    "namespace": null
                }
            ]
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"
