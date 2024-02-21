# Locix Mutations

## matchAnchorsToLocations

Initiates an anchor-finding measurement by calling these two APIs subsequently:

-   PUT https://prodk.api.locix.com/pipeline/r/api/v2/client/sites/<locix_site>
-   POST https://prodk.api.locix.com/pipeline/r/api/v2/client/sites/<locix_site>/action

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
        <td>Reference to the <a href="./objects.html#locixsystem">LocixSystem</a></td>
    </tr>
    <tr>
        <td nowrap><code>predefinedPositions</code></td>
        <td nowrap><code>[[Float!]!]!</code></td>
        <td>A list of predefined anchor positions</td>
    </tr>
    <tr>
        <td nowrap><code>knownAnchorPositions</code></td>
        <td nowrap><code>JSONObject!</code></td>
        <td>A key-value mapping of an anchor ID to a position. Position must match with an item in the <b>predefinedPositions</b> list</td>
    </tr>
</table>

**Return Fields**

Expects to return an `operation started` message upon successfull initiation.

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        mutation {
            matchAnchorsToLocations(
                input: {
                    id: "c5ff90a0-e19c-45c5-91ab-3cb9442e1189"
                    predefinedPositions: [
                        [8.75, 16.36, 11.09]
                        [23.51, 16.28, 11.09]
                        [38.28, 16.28, 11.09]
                        [52.95, 16.28, 11.09]
                    ]
                    knownAnchorPositions: {
                        eb63b360bf4a4d469c4ccd3356412345: [8.75, 16.36, 11.09]
                        c7893702031a411ba9a924000c123458: [38.28, 16.28, 11.09]
                    }
                }
            )
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "matchAnchorsToLocations": "operation started"
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.html#making-plain-http-requests)"