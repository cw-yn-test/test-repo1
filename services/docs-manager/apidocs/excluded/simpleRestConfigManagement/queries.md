# Simple REST Configurations Queries

## simpleRestConfig

Retrieve requested [SimpleRestConfig](./objects.md#simplerestconfig) information.

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
        <td>Unique ID representing the <a href="./objects.html#simplerestconfig">SimpleRestConfig</a></td>
    </tr>
</table>

**Return Fields**

Expects to return [SimpleRestConfig](./objects.md#simplerestconfig)

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        {
            simpleRestConfig(input: {id: "5f50d6d0-f910-4c0f-bd66-7ec15277f953"}){
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
                "simpleRestConfig": {
                "id": "5f50d6d0-f910-4c0f-bd66-7ec15277f953",
                "connectionModule": "simpleREST",
                "config": "{json: blob}",
                "pullFreqSec": "3600"
                "createdBy": {
                    "id": "31713532-68e7-410f-8575-952df9149c90",
                    "username": "user1"
                },
                "createdAt": "2020-09-23T20:31:15.154Z",
                "updatedAt": "2019-12-18T23:29:21.043Z"
            }
        }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## simpleRestConfigs

Retrieve all requested [SimpleRestConfig](./objects.md#simplerestConfig).

**Inputs**

Input is optional for this query.

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

Expects to return [ [SimpleRestConfig](./objects.md#simplerestConfig) ]

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        {
            simpleRestConfigs(
                input: {
                    name: "Air as a Service"
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
            "simpleRestConfig": [
                {
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
            ]
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"