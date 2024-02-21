# Equipment Type Mutations

## createEquipmentType

Create an [Equipment Type](./equipmentTypeInterfaces.md#equipmenttype).

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
        <td>A unique name</td>
    </tr>
    <tr>
        <td nowrap><code>description</code></td>
        <td nowrap><code>String</code></td>
        <td>Information about this equipment type</td>
    </tr>
    <tr>
        <td nowrap><code>modelNumber</code></td>
        <td nowrap><code>String</code></td>
        <td>Manufacturer model number</td>
    </tr>
    <tr>
        <td nowrap><code>manufacturer</code></td>
        <td nowrap><code>String</code></td>
        <td>Manufacturer of the equipment type</td>
    </tr>
    <tr>
        <td nowrap><code>connectionType</code></td>
        <td nowrap><code><a href="./equipmentTypeEnums.html#connectiontype">ConnectionType</a>!</code></td>
        <td>Connection classification</td>
    </tr>
    <tr>
        <td nowrap><code>frequency</code></td>
        <td nowrap><code>Int</code></td>
        <td>Integer value representing the default reporting frequency of the equipment type.</td>
    </tr>
</table>

**Return Fields**

Expects to return [EquipmentType](./equipmentTypeInterfaces.md#equipmenttype)

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        mutation createEquipmentType {
            createEquipmentType(
                input: {
                    name: "device"
                    description: "My device"
                    modelNumber: "device"
                    manufacturer: "Daikin"
                    connectionType: device
                    frequency: 6000
                }
            ) {
                id
                name
                description
                modelNumber
                manufacturer
                connectionType
                frequency
                createdBy {
                    id
                }
            }
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "createEquipmentType": {
                "id": "b3daf309-2944-45db-b145-58ac298d9d9c",
                "name": "device",
                "description": "My device",
                "modelNumber": "device",
                "manufacturer": "Daikin",
                "connectionType": "device",
                "frequency": 6000,
                "createdBy": {
                    "id": "c3d29cbe-0c67-4723-8e53-f1e2e38364a6"
                }
            }
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## updateEquipmentType

Update an [Equipment Type](./equipmentTypeInterfaces.md#equipmenttype).

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
        <td>Unique ID representing the equipment type</td>
    </tr>
    <tr>
        <td nowrap><code>name</code></td>
        <td nowrap><code>String!</code></td>
        <td>A unique name</td>
    </tr>
    <tr>
        <td nowrap><code>description</code></td>
        <td nowrap><code>String</code></td>
        <td>Information about this equipment type</td>
    </tr>
    <tr>
        <td nowrap><code>modelNumber</code></td>
        <td nowrap><code>String</code></td>
        <td>Manufacturer model number</td>
    </tr>
    <tr>
        <td nowrap><code>manufacturer</code></td>
        <td nowrap><code>String</code></td>
        <td>Manufacturer of the equipment type</td>
    </tr>
    <tr>
        <td nowrap><code>connectionType</code></td>
        <td nowrap><code><a href="./equipmentTypeEnums.html#connectiontype">ConnectionType</a>!</code></td>
        <td>Connection classification</td>
    </tr>
    <tr>
        <td nowrap><code>frequency</code></td>
        <td nowrap><code>Int</code></td>
        <td>Integer value representing the default reporting frequency of the equipment type.</td>
    </tr>
</table>

**Return Fields**

Expects to return [EquipmentType](./equipmentTypeInterfaces.md#equipmenttype)

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        mutation updateEquipmentType {
            updateEquipmentType(
                input: {
                    id: "907340b2-8aa3-4c51-8169-84200a2a6cd4"
                    name: "RTU"
                    description: "My RTU"
                    connectionType: device
                    frequency: 6000
                }
            ) {
                id
                name
                description
                modelNumber
                manufacturer
                connectionType
                frequency
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
            "updateEquipmentType": {
                "id": "907340b2-8aa3-4c51-8169-84200a2a6cd4",
                "name": "RTU",
                "description": "My RTU",
                "modelNumber": "RTU-12345",
                "manufacturer": "Daikin",
                "connectionType": "device",
                "frequency": 6000,
                "createdBy": {
                    "id": "c3d29cbe-0c67-4723-8e53-f1e2e38364a6"
                },
                "updatedBy": {
                    "id": "c3d29cbe-0c67-4723-8e53-f1e2e38364a6"
                },
                "createdAt": "2020-03-05T22:53:53.476Z",
                "updatedAt": "2020-03-05T23:11:46.073Z"
            }
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"