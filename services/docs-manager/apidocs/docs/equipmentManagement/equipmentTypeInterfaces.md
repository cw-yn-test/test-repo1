# Equipment Type Interfaces

## EquipmentType

Represents different equipment types connected to Dosatsu.

**Implemented By:**

-   [Device](./equipmentTypeObjects.md#device)
-   [Node](./equipmentTypeObjects.md#node)

### Fields

<table>
    <tr>
        <th nowrap>Field</th>
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
        <td>Name of the equipment type</td>
    </tr>
    <tr>
        <td nowrap><code>description</code></td>
        <td nowrap><code>String</code></td>
        <td>Information about the equipment type</td>
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
        <td nowrap><code>dataModel</code></td>
        <td nowrap><code><a href="./equipmentObjects.html#datamodel">DataModel</a></code></td>
        <td>The data model of the equipment type</td>
    </tr>
    <tr>
        <td nowrap><code>frequency</code></td>
        <td nowrap><code>Int</code></td>
        <td>Integer value representing the default <code>reporting frequency</code> for <a href="./equipmentTypeObjects.html#device">device</a> and <a href="./equipmentTypeObjects.html#node">node</a> equipment type,
        and <code>data pulling frequency</code>.</td>
    </tr>
    <tr>
        <td nowrap><code>createdBy</code></td>
        <td nowrap><code><a href="../userManagement/userObjects.html#user">User</a>!</code></td>
        <td>User who created the entry</td>
    </tr>
    <tr>
        <td nowrap><code>updatedBy</code></td>
        <td nowrap><code><a href="../userManagement/userObjects.html#user">User</a></code></td>
        <td>The last user who updated the record</td>
    </tr>
    <tr>
        <td nowrap><code>createdAt</code></td>
        <td nowrap><code>DateTime</code></td>
        <td>Timestamp when the record was created</td>
    </tr>
    <tr>
        <td nowrap><code>updatedAt</code></td>
        <td nowrap><code>DateTime</code></td>
        <td>Timestamp when the record was last updated</td>
    </tr>
</table>
