# IO Connection Mutations

## createCloudConnection

Create an [IO Connection](./ioConnectionInterfaces.md#ioconnection).

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
        <td>A name for the IO Connection</td>
    </tr>
    <tr>
        <td nowrap><code>description</code></td>
        <td nowrap><code>String</code></td>
        <td>A description for the IO Connection</td>
    </tr>
    <tr>
        <td nowrap><code>connectionCategory</code></td>
        <td nowrap><code><a href="./ioConnectionEnums.html#connectioncategory">ConnectionCategory</a>!</code></td>
        <td>The connection category</td>
    </tr>
    <tr>
        <td nowrap><code>apiVersion</code></td>
        <td nowrap><code>String</code></td>
        <td>The api version of the cloud connection</td>
    </tr>
    <tr>
        <td nowrap><code>enabled</code></td>
        <td nowrap><code>Boolean</code></td>
        <td>If the IO connection is enabled</td>
    </tr>
    <tr>
        <td nowrap><code>connected</code></td>
        <td nowrap><code>Boolean</code></td>
        <td>If the IO connection is connected. An undefined value means connection status is unknown</td>
    </tr>
    <tr>
        <td nowrap><code>connectivityDetectionMethod</code></td>
        <td nowrap><code>String</code></td>
        <td>Can use fixedFreq, auto or a custom module to detect connectivity status connectivityDetectionConfig json blob can store info needed by  connectivity detection algorithm.</td>
    </tr>
    <tr>
        <td nowrap><code>connectivityDetectionConfig</code></td>
        <td nowrap><code>String</code></td>
        <td>The connectivity detection configuration</td>
    </tr>
    <tr>
        <td nowrap><code>config</code></td>
        <td nowrap><code>String</code></td>
        <td>The configuration specific to this connection type</td>
    </tr>
    <tr>
        <td nowrap><code>implementedBy</code></td>
        <td nowrap><code>String</code></td>
        <td>e.g. MQTT, REST listener, simpleREST pulling, customModule name</td>
    </tr>
    <tr>
        <td nowrap><code>simpleRESTSharedConfig</code></td>
        <td nowrap><code>ID</code></td>
        <td>Leave blank unless this is implemented by simpleRest</td>
    </tr>
    <tr>
        <td nowrap><code>needsCertificate</code></td>
        <td nowrap><code>Boolean</code></td>
        <td>False unless it is a device that posts with a certificate (like MQTT)</td>
    </tr>
    <tr>
        <td nowrap><code>secrets</code></td>
        <td nowrap><code>String</code></td>
        <td>Secrets</td>
    </tr>
    <tr>
        <td nowrap><code>contactEmail</code></td>
        <td nowrap><code>EmailAddress!</code></td>
        <td>Contact email for technical support</td>
    </tr>
    <tr>
        <td nowrap><code>registrationStatus</code></td>
        <td nowrap><code><a href="./ioConnectionEnums.html#registrationstatus">RegistrationStatus</code></td>
        <td>One of the following values: `inProgress`, `active`</td>
    </tr>
    <tr>
        <td nowrap><code>customAttribute</code></td>
        <td nowrap><code>JSONObject</code></td>
        <td>Additional information about the IO Connection</td>
    </tr>
</table>

**Return Fields**

Expects to return [IoConnection](./ioConnectionInterfaces.md#ioconnection)

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        mutation createCloudConnection {
            createCloudConnection(
                input: {
                    name: "IO Connection"
                    connectionCategory: CLOUD
                    apiVersion: "1"
                    config: "{\"dataRequestSimple\":[{\"httpMethod\":\"GET\",\"url\":\"http://request.uri\",\"queryParams\":null,\"headers\":null,\"body\":\"\",\"responseParser\":[]}]}"
                    contactEmail: "contact@dsv.daikin.com"
                }
            ) {
                id
                name
                connectionCategory
                implementedBy
                needsCertificate
                createdBy {
                    id
                }
                ... on CloudConnection {
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
            "createCloudConnection": {
                "id": "d0bedc53-5b12-4392-ba61-1d61a6a991f9",
                "name": "IO Connection Name",
                "connectionCategory": "CLOUD",
                "apiVersion": "1",
                "config": "{\"dataRequestSimple\":[{\"httpMethod\":\"GET\",\"url\":\"http://request.uri\",\"queryParams\":null,\"headers\":null,\"body\":\"\",\"responseParser\":[]}]}",
                "implementedBy": "simpleREST",
                "needsCertificate": false,
                "createdBy": {
                    "id": "a2979c29-cfc8-4677-8ff0-38b1905b3a96"
                },
            }
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## updateCloudConnection

Update an [IO Connection](./ioConnectionInterfaces.md#ioconnection).

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
        <td>Unique ID representing the IO Connection</td>
    </tr>
    <tr>
        <td nowrap><code>name</code></td>
        <td nowrap><code>String</code></td>
        <td>A name for the IO Connection</td>
    </tr>
    <tr>
        <td nowrap><code>description</code></td>
        <td nowrap><code>String</code></td>
        <td>A description for the IO Connection</td>
    </tr>
    <tr>
        <td nowrap><code>connectionCategory</code></td>
        <td nowrap><code><a href="./ioConnectionEnums.html#connectioncategory">ConnectionCategory</a>!</code></td>
        <td>The connection category</td>
    </tr>
    <tr>
        <td nowrap><code>apiVersion</code></td>
        <td nowrap><code>String</code></td>
        <td>The api version of the cloud connection</td>
    </tr>
    <tr>
        <td nowrap><code>enabled</code></td>
        <td nowrap><code>Boolean</code></td>
        <td>If the IO connection is enabled</td>
    </tr>
    <tr>
        <td nowrap><code>connected</code></td>
        <td nowrap><code>Boolean</code></td>
        <td>If the IO connection is connected. An undefined value means connection status is unknown</td>
    </tr>
    <tr>
        <td nowrap><code>connectivityDetectionMethod</code></td>
        <td nowrap><code>String</code></td>
        <td>Can use fixedFreq, auto or a custom module to detect connectivity status connectivityDetectionConfig json blob can store info needed by  connectivity detection algorithm.</td>
    </tr>
    <tr>
        <td nowrap><code>connectivityDetectionConfig</code></td>
        <td nowrap><code>String</code></td>
        <td>The connectivity detection configuration</td>
    </tr>
    <tr>
        <td nowrap><code>config</code></td>
        <td nowrap><code>String</code></td>
        <td>The configuration specific to this connection type</td>
    </tr>
    <tr>
        <td nowrap><code>implementedBy</code></td>
        <td nowrap><code>String</code></td>
        <td>e.g. MQTT, REST listener, simpleREST pulling, customModule name</td>
    </tr>
    <tr>
        <td nowrap><code>simpleRESTSharedConfig</code></td>
        <td nowrap><code>ID</code></td>
        <td>Leave blank unless this is implemented by simpleRest</td>
    </tr>
    <tr>
        <td nowrap><code>needsCertificate</code></td>
        <td nowrap><code>Boolean</code></td>
        <td>False unless it is a device that posts with a certificate (like MQTT)</td>
    </tr>
    <tr>
        <td nowrap><code>secrets</code></td>
        <td nowrap><code>String</code></td>
        <td>Secrets</td>
    </tr>
    <tr>
        <td nowrap><code>contactEmail</code></td>
        <td nowrap><code>EmailAddress</code></td>
        <td>Contact email for technical support</td>
    </tr>
    <tr>
        <td nowrap><code>registrationStatus</code></td>
        <td nowrap><code><a href="./ioConnectionEnums.html#registrationstatus">RegistrationStatus</code></td>
        <td>One of the following values: `inProgress`, `active`</td>
    </tr>
    <tr>
        <td nowrap><code>customAttribute</code></td>
        <td nowrap><code>JSONObject</code></td>
        <td>Additional information about the IO Connection</td>
    </tr>
</table>

**Return Fields**

Expects to return [IoConnection](./ioConnectionInterfaces.md#ioconnection)

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        mutation updateCloudConnection {
            updateCloudConnection(
                input: {
                    id: "af5c634f-82da-4670-91cd-211093f8f939"
                    name: "IO Connection Updated"
                }
            ) {
                id
                name
                connectionCategory
                implementedBy
                needsCertificate
                createdBy {
                    id
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
            "updateCloudConnection": {
                "id": "af5c634f-82da-4670-91cd-211093f8f939",
                "name": "IO Connection Name Updated",
                "connectionCategory": "CLOUD",
                "apiVersion": "1",
                "config": "{\"dataRequestSimple\":[{\"httpMethod\":\"GET\",\"url\":\"http://request.uri\",\"queryParams\":null,\"headers\":null,\"body\":\"\",\"responseParser\":[]}]}",
                "implementedBy": "simpleREST",
                "needsCertificate": false,
                "createdBy": {
                    "id": "a2979c29-cfc8-4677-8ff0-38b1905b3a96"
                },
            }
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## createDirectConnection

Create an [IO Connection](./ioConnectionInterfaces.md#ioconnection).

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
        <td>A name for the IO Connection</td>
    </tr>
    <tr>
        <td nowrap><code>description</code></td>
        <td nowrap><code>String</code></td>
        <td>A description for the IO Connection</td>
    </tr>
    <tr>
        <td nowrap><code>connectionCategory</code></td>
        <td nowrap><code><a href="./ioConnectionEnums.html#connectioncategory">ConnectionCategory</a>!</code></td>
        <td>The connection category</td>
    </tr>
    <tr>
        <td nowrap><code>enabled</code></td>
        <td nowrap><code>Boolean</code></td>
        <td>If the IO connection is enabled</td>
    </tr>
    <tr>
        <td nowrap><code>connected</code></td>
        <td nowrap><code>Boolean</code></td>
        <td>If the IO connection is connected. An undefined value means connection status is unknown</td>
    </tr>
    <tr>
        <td nowrap><code>connectivityDetectionMethod</code></td>
        <td nowrap><code>String</code></td>
        <td>Can use fixedFreq, auto or a custom module to detect connectivity status connectivityDetectionConfig json blob can store info needed by  connectivity detection algorithm.</td>
    </tr>
    <tr>
        <td nowrap><code>connectivityDetectionConfig</code></td>
        <td nowrap><code>String</code></td>
        <td>The connectivity detection configuration</td>
    </tr>
    <tr>
        <td nowrap><code>needsCertificate</code></td>
        <td nowrap><code>Boolean</code></td>
        <td>False unless it is a device that posts with a certificate (like MQTT)</td>
    </tr>
    <tr>
        <td nowrap><code>secrets</code></td>
        <td nowrap><code>String</code></td>
        <td>Secrets</td>
    </tr>
    <tr>
        <td nowrap><code>contactEmail</code></td>
        <td nowrap><code>EmailAddress!</code></td>
        <td>Contact email for technical support</td>
    </tr>
    <tr>
        <td nowrap><code>registrationStatus</code></td>
        <td nowrap><code><a href="./ioConnectionEnums.html#registrationstatus">RegistrationStatus</code></td>
        <td>One of the following values: `inProgress`, `active`</td>
    </tr>
    <tr>
        <td nowrap><code>customAttribute</code></td>
        <td nowrap><code>JSONObject</code></td>
        <td>Additional information about the IO Connection</td>
    </tr>
</table>

**Return Fields**

Expects to return [IoConnection](./ioConnectionInterfaces.md#ioconnection)

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        mutation createDirectConnection {
            createDirectConnection(
                input: {
                    name: "IO Connection"
                    connectionCategory: EMBEDDED_IOT
                    contactEmail: "contact@dsv.daikin.com"
                }
            ) {
                id
                name
                connectionCategory
                implementedBy
                needsCertificate
                createdBy {
                    id
                }
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
            }
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "createDirectConnection": {
                "id": "d0bedc53-5b12-4392-ba61-1d61a6a991f9",
                "name": "IO Connection Name",
                "connectionCategory": "EMBEDDED_IOT",
                "implementedBy": "simpleREST",
                "needsCertificate": false,
                "createdBy": {
                    "id": "a2979c29-cfc8-4677-8ff0-38b1905b3a96"
                },
                "clientCertificate": null,
                "clientKey": null,
                "publicCertificate": null
            }
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## updateDirectConnection

Update an [IO Connection](./ioConnectionInterfaces.md#ioconnection).

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
        <td>ID of the IO Connection</td>
    </tr>
    <tr>
        <td nowrap><code>name</code></td>
        <td nowrap><code>String</code></td>
        <td>A name for the IO Connection</td>
    </tr>
    <tr>
        <td nowrap><code>description</code></td>
        <td nowrap><code>String</code></td>
        <td>A description for the IO Connection</td>
    </tr>
    <tr>
        <td nowrap><code>connectionCategory</code></td>
        <td nowrap><code><a href="./ioConnectionEnums.html#connectioncategory">ConnectionCategory</a>!</code></td>
        <td>The connection category</td>
    </tr>
    <tr>
        <td nowrap><code>enabled</code></td>
        <td nowrap><code>Boolean</code></td>
        <td>If the IO connection is enabled</td>
    </tr>
    <tr>
        <td nowrap><code>connected</code></td>
        <td nowrap><code>Boolean</code></td>
        <td>If the IO connection is connected. An undefined value means connection status is unknown</td>
    </tr>
    <tr>
        <td nowrap><code>connectivityDetectionMethod</code></td>
        <td nowrap><code>String</code></td>
        <td>Can use fixedFreq, auto or a custom module to detect connectivity status connectivityDetectionConfig json blob can store info needed by  connectivity detection algorithm.</td>
    </tr>
    <tr>
        <td nowrap><code>connectivityDetectionConfig</code></td>
        <td nowrap><code>String</code></td>
        <td>The connectivity detection configuration</td>
    </tr>
    <tr>
        <td nowrap><code>needsCertificate</code></td>
        <td nowrap><code>Boolean</code></td>
        <td>False unless it is a device that posts with a certificate (like MQTT)</td>
    </tr>
    <tr>
        <td nowrap><code>secrets</code></td>
        <td nowrap><code>String</code></td>
        <td>Secrets</td>
    </tr>
    <tr>
        <td nowrap><code>contactEmail</code></td>
        <td nowrap><code>EmailAddress!</code></td>
        <td>Contact email for technical support</td>
    </tr>
    <tr>
        <td nowrap><code>registrationStatus</code></td>
        <td nowrap><code><a href="./ioConnectionEnums.html#registrationstatus">RegistrationStatus</code></td>
        <td>One of the following values: `inProgress`, `active`</td>
    </tr>
    <tr>
        <td nowrap><code>customAttribute</code></td>
        <td nowrap><code>JSONObject</code></td>
        <td>Additional information about the IO Connection</td>
    </tr>
</table>

**Return Fields**

Expects to return [IoConnection](./ioConnectionInterfaces.md#ioconnection)

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        mutation updateDirectConnection {
            updateDirectConnection(
                input: {
                    id: "d0bedc53-5b12-4392-ba61-1d61a6a991f9",
                    name: "IO Connection Updated"
                }
            ) {
                id
                name
                connectionCategory
                implementedBy
                needsCertificate
                createdBy {
                    id
                }
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
            }
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "createDirectConnection": {
                "id": "d0bedc53-5b12-4392-ba61-1d61a6a991f9",
                "name": "IO Connection Name Updated",
                "connectionCategory": "EMBEDDED_IOT",
                "implementedBy": "simpleREST",
                "needsCertificate": false,
                "createdBy": {
                    "id": "a2979c29-cfc8-4677-8ff0-38b1905b3a96"
                },
                "clientCertificate": null,
                "clientKey": null,
                "publicCertificate": null
            }
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"
