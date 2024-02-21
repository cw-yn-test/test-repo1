# Data Consumer Mutations

## parse

Parse Device Data and write the result as time-series.

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
        <td nowrap><code>ID</code></td>
        <td>Unique ID representing the IOConnection</td>
    </tr>
    <tr>
        <td nowrap><code>channel</code></td>
        <td nowrap><code>String</code></td>
        <td>Name of the channel (if available).</td>
    </tr>
    <tr>
        <td nowrap><code>externalId</code></td>
        <td nowrap><code>ID</code></td>
        <td>External ID of the equipment to which this payload belongs.</td>
    </tr>
    <tr>
        <td nowrap><code>payload</code></td>
        <td nowrap><code>JSON!</code></td>
        <td>The data posted by the device</td>
    </tr>
    <tr>
        <td nowrap><code>parseOnly</code></td>
        <td nowrap><code>Boolean</code></td>
        <td>true if not to write the results but just parse.</td>
    </tr>
</table>

**Return Fields**

Expects to return JSONObject

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        mutation parse {
            parse (
                input: {
                    ioConnectionId: "8064f6d2-393e-4fc7-b137-8bf9180d76e3"
                    parseOnly: true,
                    payload: {
                        category_name: "Allergen Count"
                    }
                }
            )
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "parse": {
            "timeseriesMap": {
                "d663f46a-b0cd-4690-bfef-ce1ad8a36143": {
                    "Mon Jun 21 2021 10:35:30 GMT-0700 (Pacific Daylight Time)": {
                        "category_name": "Allergen Count"
                    }
                }
            }
            }
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## reprocessParseError

Submit a request to re-process failed payloads.

**Inputs**

Input is optional for this mutation. If no input is specified, all existing parse errors will be reprocessed.

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
        <td nowrap><code>createdAt</code></td>
        <td nowrap><code>DateTime</code></td>
        <td>
            UTC date-time string representing when this entry was created
        </td>
    </tr>
    <tr>
        <td nowrap><code>messageId</code></td>
        <td nowrap><code>ID</code></td>
        <td>
            Unique ID representing the parse error record, if specified other inputs are ignored.
        </td>
    </tr>
    <tr>
        <td nowrap><code>runInstantly</code></td>
        <td nowrap><code>Boolean</code></td>
        <td>
            true if to return only after completion, false to return immediately while running the job in the background
        </td>
    </tr>
</table>

**Return Fields**

Expects to return <code>lastLoggerRequestId</code>

**Example**

!!! example "Sample Input, reprocess all errors from specific IO Connection"

    === "GraphQL"
        ```
        mutation {
            reprocessParseError (
                input: {
                    ioConnectionId: "becbf844-5c4a-41d9-b347-fd0902c0f249"
                }
            )
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "reprocessParseError": "a2826723-8c2e-49d6-8cda-3893f16ab9ba"
        }
    }
    ```

!!! example "Sample Input, reprocess specific error by messageId"

    === "GraphQL"
        ```
        mutation {
            reprocessParseError (
                input: {
                    messageId: "54590445-e42a-4147-9fb9-328bd0eeab53"
                }
            )
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "reprocessParseError": "a2826723-8c2e-49d6-8cda-3893f16ab9ba"
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## deleteParseError

Submit a request to delete [ParseErrors](../dataManagement/objects.md#parseerrors).

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
        <td nowrap><code>ID</code></td>
        <td>
            Reference to the IO Connection posting the payload
        </td>
    </tr>
    <tr>
        <td nowrap><code>messageId</code></td>
        <td nowrap><code>ID</code></td>
        <td>
            Unique ID representing the parse error record
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
        <td nowrap><code>runInstantly</code></td>
        <td nowrap><code>Boolean</code></td>
        <td>
            true if to return only after completion, false to return immediately while running the job in the background
        </td>
    </tr>
</table>

**Return Fields**

Expects to return <code>null</code>

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        mutation {
            deleteParseError (
                input: {
                    messageId: "54590445-e42a-4147-9fb9-328bd0eeab53"
                }
            )
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "deleteParseError": null
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"
