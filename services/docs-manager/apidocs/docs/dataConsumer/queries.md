# Data Consumer Queries

## parseError

Retrieve requested [ParseError](../dataManagement/objects.md#parseerror) information.

**Inputs**

Input is mandatory for this query.

<table>
    <tr>
        <th nowrap>Argument</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>messageId</code></td>
        <td nowrap><code>ID!</code></td>
        <td>
            Unique ID representing the parse error record.
        </td>
    </tr>
</table>

**Return Fields**

Expects to return [ParseError](../dataManagement/objects.md#parseerror)

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        {
            parseError (
                input: {
                    messageId: "54590445-e42a-4147-9fb9-328bd0eeab53"
                }
            ) {
                ioConnection {
                    id
                }
                createdAt
                messageId
                channel
                parserConfiguration {
                    id
                }
                errorCode
                errorMessage
                payload
                lastLoggerRequestId
                messageArrivedAt
                reprocessingAttempts
            }
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "parseError": {
                "ioConnection": {
                    "id": "becbf844-5c4a-41d9-b347-fd0902c0f249"
                },
                "createdAt": "2022-08-05T09:03:02.088Z",
                "messageId": "54590445-e42a-4147-9fb9-328bd0eeab53",
                "channel": "channel2",
                "parserConfiguration": {
                    "id": "afdb13af-6b0f-4f59-9888-5d2039849156"
                },
                "errorCode": "INVALID_DEVICE_PAYLOAD",
                "errorMessage": "{\"errorCode\":\"INVALID_DEVICE_PAYLOAD\",\"type\":\"http://daikinlab.com/api_doc/public/index.html#Errors\",\"resourceKey\":\"error.schema.payload.invalid\",\"httpStatus\":400}",
                "payload": "{\"category_name\":\"Allergen Count\",\"category_color\":\"blue\",\"parameter_name\":\"Alternaria Mold\",\"log_value\":24,\"particle_category\":\"1\",\"env_index\":4,\"log_unit\":\"particles\",\"log_intensity\":\"Moderate\",\"t\":\"2019-06-11T00:00\",\"networkRef\":\"111-000-111\",\"test\":\"test-for-parse-error-2\"}",
                "lastLoggerRequestId": "f7fa90cb-1761-4ba0-b28c-c779c10f1990",
                "messageArrivedAt": "2022-08-05T07:17:44.547Z",
                "reprocessingAttempts": 4
            }
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## parseErrors

Retrieve all requested [ParseErrors](../dataManagement/objects.md#parseerrors) information. This query cannot return details including the <code>payload</code> and <code>errorMessage</code>, so please execute [parseError](./queries.md#parseerror) to get it.

**Inputs**

Input is optional for this query.

<table>
    <tr>
        <th nowrap>Argument</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>ioConnectionId</code></td>
        <td nowrap><code>ID</code></td>
        <td>
            Reference to the IO Connection posting the payload
        </td>
    </tr>
    <tr>
        <td nowrap><code>channel</code></td>
        <td nowrap><code>String</code></td>
        <td>
            Channel for which the parser was configured
        </td>
    </tr>
    <tr>
        <td nowrap><code>errorCode</code></td>
        <td nowrap><code>String</code></td>
        <td>
            Specific Error Code
        </td>
    </tr>
    <tr>
        <td nowrap><code>parserConfigurationId</code></td>
        <td nowrap><code>ID</code></td>
        <td>
            Reference to the parser configuration at the time of failure
        </td>
    </tr>
    <tr>
        <td nowrap><code>pageState</code></td>
        <td nowrap><code>String</code></td>
        <td>
            Page state to start from, returned from previous call. First page, if none specified
        </td>
    </tr>
    <tr>
        <td nowrap><code>rows</code></td>
        <td nowrap><code>Int</code></td>
        <td>
            Rows per page
        </td>
    </tr>
</table>

**Return Fields**

Expects to return [ [ParseErrors](../dataManagement/objects.md#parseerrors) ]

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        {
            parseErrors (
                input: {
                    ioConnectionId: "becbf844-5c4a-41d9-b347-fd0902c0f249",
                    channel: "channel2",
                    parserConfigurationId: "afdb13af-6b0f-4f59-9888-5d2039849156"
                }
            ) {
                pageState
                rows {
                    ioConnection {
                        id
                    }
                    messageId
                    channel
                    parserConfiguration {
                        id
                    }
                    errorCode
                    lastLoggerRequestId
                    messageArrivedAt
                    reprocessingAttempts
                }
            }
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "parseErrors": {
                "pageState": null,
                "rows": [
                    {
                        "ioConnection": {
                            "id": "becbf844-5c4a-41d9-b347-fd0902c0f249"
                        },
                        "messageId": "aaba3d9c-d1cb-4cf6-9a83-0033c4b77352",
                        "channel": "channel2",
                        "parserConfiguration": {
                            "id": "afdb13af-6b0f-4f59-9888-5d2039849156"
                        },
                        "errorCode": "INVALID_DEVICE_PAYLOAD",
                        "lastLoggerRequestId": "f7fa90cb-1761-4ba0-b28c-c779c10f1990",
                        "messageArrivedAt": "2022-08-05T07:40:51.865Z",
                        "reprocessingAttempts": 3
                    }
                ]
            }
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"
