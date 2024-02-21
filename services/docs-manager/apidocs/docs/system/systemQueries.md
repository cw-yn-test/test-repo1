# System Queries

## systemInfo

Retrieve requested [SystemInfo](../system/systemObjects.md#systeminfo).

**Return Fields**

Expects to return a semantic version String.

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        {
            systemInfo {
                version
            }
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "systemInfo": {
                "version": "1.0.0"
            }
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"
