
## createParserConfiguration

Create a [ParserConfiguration](./objects.md#parserconfiguration).

**Inputs**

Input is mandatory for this mutation.

<table>
    <tr>
        <th nowrap>Argument</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>ioConnectionId</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Unique ID representing an <a href="../ioConnectionManagement/ioConnectionInterfaces.html#ioconnection">IO Connection</a></td>
    </tr>
    <tr>
        <td nowrap><code>channel</code></td>
        <td nowrap><code>String</code></td>
        <td>Most ioConnections do not need this field and can leave it blank. Some ioConnections have ways of pull different data records & formats that need to be sent through different parsers. For example, a connection to Infinite Uptime’s cloud (a 3rd party IoT sensor company) has one set of credentials for API calls, but different methods to pull equipment records, historical availability, equipment metadata, vibration data, and FFT data. Each of those are in JSON, but have different schemas and require different parsers. The Infinite Uptime ioConnection can have one channel per expected response format, and configure a different parser for each channel. This pattern is common for external clouds including EcoBee.</td>
    </tr>
    <tr>
        <td nowrap><code>customParser</code></td>
        <td nowrap><code><a href="./enums.html#parser">Parser</a></code></td>
        <td>Custom Parser</td>
    </tr>
    <tr>
        <td nowrap><code>namespace</code></td>
        <td nowrap><code>String</code></td>
        <td>The namespace portion of an ID from an external system. A standard pattern for assigning unique ids of records that come from diverse sources is namespace + remote_id <-> local_id. The use of namespaces prevents conflicts when merging records. For example: Daikin Applied Americas and Goodman external databases might both have records with id of 1, which would conflict unless we use separate namespaces. Ideally, each namespace in our system will be unique - such as daikinapplied.com/chiller & Goodman.com/AC. Domain names with trailing directories are good candidates for being globally unique and somewhat human readable (these do not need to resolve to URLs).<br />
        In most cases, it is safe to leave this field blank, and it will default to the UUID of the data connection record. This behavior ensures that each newly-seen equipment inside a particular data stream will resolve to a newly-created equipment record.<br />
        In cases where data for one equipment is arriving from more than one source, (such as a pre-existing data warehouse for historical data and live posts for new data), you will want to configure each source to use the same namespace so both sets records can be filed under the same equipment.
        See wikipedia entries for “Namespace”, “Digital Object Identifier”, “Uniform Resource Name”, or “XML Namespace” for additional background.</td>
    </tr>
    <tr>
        <td nowrap><code>config</code></td>
        <td nowrap><code>JSONObject!</code></td>
        <td>Configuration.</td>
    </tr>
</table>

**Return Fields**

Expects to return [ParserConfiguration](./objects.md#parserconfiguration)

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        mutation createParserConfiguration {
            createParserConfiguration(
                input: {
                    ioConnectionId: "2e6cc1a4-5ecd-4c01-be53-797bae6f86d9"
                    customParser: "DefaultParser",
                    namespace: "Daikin_VRV",
                    config: {
                        attributes: null,
                        autoDiscoverAttributes: true,
                        paths: null,
                        serviceConfig: {
                            pathToParse: "$[*].data",
                            parseEachItem: true
                        }
                    }
                }
            ) {
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
            "createParserConfiguration": {
                "ioConnectionId": "2e6cc1a4-5ecd-4c01-be53-797bae6f86d9",
                "customParser": "DefaultParser",
                "namespace": "Daikin_VRV",
                "config": {
                    "attributes": null,
                    "autoDiscoverAttributes": true,
                    "paths": null,
                    "serviceConfig": {
                        "pathToParse": "$[*].data",
                        "parseEachItem": true
                    }
                }
            }
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## updateParserConfiguration

Update a [ParserConfiguration](./objects.md#parserconfiguration).

**Inputs**

Input is mandatory for this mutation.

<table>
    <tr>
        <td nowrap><code>ioConnectionId</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Unique ID representing an <a href="../ioConnectionManagement/ioConnectionInterfaces.html#ioconnection">IO Connection</a></td>
    </tr>
    <tr>
        <td nowrap><code>channel</code></td>
        <td nowrap><code>String</code></td>
        <td>Most ioConnections do not need this field and can leave it blank. Some ioConnections have ways of pull different data records & formats that need to be sent through different parsers. For example, a connection to Infinite Uptime’s cloud (a 3rd party IoT sensor company) has one set of credentials for API calls, but different methods to pull equipment records, historical availability, equipment metadata, vibration data, and FFT data. Each of those are in JSON, but have different schemas and require different parsers. The Infinite Uptime ioConnection can have one channel per expected response format, and configure a different parser for each channel. This pattern is common for external clouds including EcoBee.</td>
    </tr>
    <tr>
        <td nowrap><code>customParser</code></td>
        <td nowrap><code><a href="./enums.html#parser">Parser</a></code></td>
        <td>Custom Parser</td>
    </tr>
    <tr>
        <td nowrap><code>namespace</code></td>
        <td nowrap><code>String</code></td>
        <td>The namespace portion of an ID from an external system. A standard pattern for assigning unique ids of records that come from diverse sources is namespace + remote_id <-> local_id. The use of namespaces prevents conflicts when merging records. For example: Daikin Applied Americas and Goodman external databases might both have records with id of 1, which would conflict unless we use separate namespaces. Ideally, each namespace in our system will be unique - such as daikinapplied.com/chiller & Goodman.com/AC. Domain names with trailing directories are good candidates for being globally unique and somewhat human readable (these do not need to resolve to URLs).<br />
        In most cases, it is safe to leave this field blank, and it will default to the UUID of the data connection record. This behavior ensures that each newly-seen equipment inside a particular data stream will resolve to a newly-created equipment record.<br />
        In cases where data for one equipment is arriving from more than one source, (such as a pre-existing data warehouse for historical data and live posts for new data), you will want to configure each source to use the same namespace so both sets records can be filed under the same equipment.
        See wikipedia entries for “Namespace”, “Digital Object Identifier”, “Uniform Resource Name”, or “XML Namespace” for additional background.</td>
    </tr>
    <tr>
        <td nowrap><code>config</code></td>
        <td nowrap><code>JSONObject</code></td>
        <td>Configuration.</td>
    </tr>
</table>

**Return Fields**

Expects to return [ParserConfiguration](./objects.md#parserconfiguration)

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        mutation updateParserConfiguration {
            updateParserConfiguration(
                input: {
                    ioConnectionId: "1e6cc1a4-5ecd-4c01-be53-797bae6f86d8"
                    config: {
                        attributes: null,
                        autoDiscoverAttributes: true,
                        paths: null,
                        serviceConfig: {
                            pathToParse: "$[*].data",
                            parseEachItem: true
                        }
                    }
                }
            ) {
                ioConnectionId
                config
            }
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "updateParserConfiguration": {
                "ioConnectionId": "2e6cc1a4-5ecd-4c01-be53-797bae6f86d9",
                "config": {
                    "attributes": null,
                    "autoDiscoverAttributes": true,
                    "paths": null,
                    "serviceConfig": {
                        "pathToParse": "$[*].data",
                        "parseEachItem": true
                    }
                }
            }
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"
