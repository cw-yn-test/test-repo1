# Simple REST Configuration Mutations

## createSimpleRestConfig

Create a [SimpleRestConfig](./objects.md#simplerestconfig)

**Inputs**

Input is mandatory for this query.

<table>
    <tr>
        <th nowrap>Argument</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>connectionModule!</code></td>
        <td nowrap><code>String</code></td>
        <td>Specifies which node module to use for establishing connections. This plugable architecture has the same pattern as parsers.</td>
    </tr>
    <tr>
        <td nowrap><code>config!</code></td>
        <td nowrap><code>String</code></td>
        <td>Simple REST Configuration</td>
    </tr>
    <tr>
        <td nowrap><code>pullFreqSec</code></td>
        <td nowrap><code>String</code></td>
        <td>Pull frequency in seconds</td>
    </tr>
</table>

**Return Fields**

Expects to return [SimpleRestConfig](./objects.md#simplerestconfig)

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        mutation {
            createSimpleRestConfig(
                input: {
                    connectionModule: "simpleREST",
                    config: "{json: blob}",
                    pullFreqSec: "3600",
                }
            ) {
                id
                connectionModule
                config
                pullFreqSec
                createdBy {
                    id
                    username
                    firstName
                    lastName
                    email
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
            "createSimpleRestConfig": {
                "connectionModule": "simpleREST",
                "config": "{json: blob}",
                "pullFreqSec": "3600",
                "createdBy": {
                    "id": "31713532-68e7-410f-8575-952df9149c90",
                    "username": "user1"
                },
                "createdAt": "2020-09-23T20:31:15.154Z",
                "updatedAt": null
            }
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## updateSimpleRestConfig

Update a [SimpleRestConfig](./objects.md#simplerestconfig)

**Inputs**

Input is mandatory for this query.

<table>
    <tr>
        <th nowrap>Argument</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>connectionModule</code></td>
        <td nowrap><code>String</code></td>
        <td>Specifies which node module to use for establishing connections. This plugable architecture has the same pattern as parsers.</td>
    </tr>
    <tr>
        <td nowrap><code>config</code></td>
        <td nowrap><code>String</code></td>
        <td>Simple REST Configuration</td>
    </tr>
    <tr>
        <td nowrap><code>pullFreqSec</code></td>
        <td nowrap><code>String</code></td>
        <td>Pull frequency in seconds</td>
    </tr>
</table>

**Return Fields**

Expects to return [SimpleRestConfig](./objects.md#simplerestconfig)

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        mutation updateSimpleRestConfig {
            updateSimpleRestConfig(
                input: {
                    connectionModule: "simpleREST",
                    config: "{json: blob}",
                    pullFreqSec: "3600"
                }
            ) {
                id
                connectionModule
                config
                pullFreqSec
                createdBy {
                    id
                    username
                    firstName
                    lastName
                    email
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
            "updateSimpleRestConfig": {
                "connectionModule": "simpleREST",
                "config": "{json: blob}",
                "pullFreqSec": "3600"
                "createdBy": {
                    "id": "31713532-68e7-410f-8575-952df9149c90",
                    "username": "user1"
                },
                "createdAt": "2020-09-23T20:31:15.154Z",
                "updatedAt": "2019-12-18T23:29:21.043Z",
            }
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"