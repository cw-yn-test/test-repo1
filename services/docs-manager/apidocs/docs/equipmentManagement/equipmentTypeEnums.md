# Equipment Type Enums

## ConnectionType

[Equipment Type](./equipmentTypeInterfaces.md#equipmenttype) connections

<table>
    <tr>
        <th nowrap>Name</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>device</code></td>
        <td>An edge device or other equipment that can upload data directly to Dosatsu.</td>
    </tr>
    <tr>
        <td nowrap><code>node</code></td>
        <td>Physical HVAC equipment or other IOT devices that do not upload data directly to Dosatsu.</td>
    </tr>
</table>

## ConnectionModule

**Note: `Virtual` type is deprecated. Please use IO Connection CLOUD instead.**
Supported connections for [ConnectionConfig](./equipmentTypeObjects.md#connectionconfig)

<table>
    <tr>
        <th nowrap>Name</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>simpleREST</code></td>
        <td>REST API to connect to</td>
    </tr>
</table>

## ConnectionConfigHttp

**Note: `Virtual` type is deprecated. Please use IO Connection CLOUD instead.**
Supported HTTP methods for [Request](./equipmentTypeObjects.md#request)

<table>
    <tr>
        <th nowrap>Name</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>GET</code></td>
        <td>An HTTP GET request</td>
    </tr>
    <tr>
        <td nowrap><code>POST</code></td>
        <td>An HTTP POST request</td>
    </tr>
</table>

## EquipmentTypesOrderBy

The supported orderBy values for searching for [EquipmentType](./equipmentTypeInterfaces.md#equipmenttype)s 

<table>
    <tr>
        <th nowrap>Name</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>FREQUENCY_ASC</code></td>
        <td>Sort in ascending order by the equipment types's frequency</td>
    </tr>
    <tr>
        <td nowrap><code>FREQUENCY_DESC</code></td>
        <td>Sort in descending order by the equipment types's frequency</td>
    </tr>
    <tr>
        <td nowrap><code>MODEL_ASC</code></td>
        <td>Sort in ascending order by the equipment types's model</td>
    </tr>
    <tr>
        <td nowrap><code>MODEL_DESC</code></td>
        <td>Sort in descending order by the equipment types's model</td>
    </tr>
    <tr>
        <td nowrap><code>NAME_ASC</code></td>
        <td>Sort in ascending order by the equipment types's name</td>
    </tr>
    <tr>
        <td nowrap><code>NAME_DESC</code></td>
        <td>Sort in descending order by the equipment types's name</td>
    </tr>
    <tr>
        <td nowrap><code>MANUFACTURER_ASC</code></td>
        <td>Sort in ascending order by the equipment types's manufacturer</td>
    </tr>
    <tr>
        <td nowrap><code>MANUFACTURER_DESC</code></td>
        <td>Sort in descending order by the equipment types's manufacturer</td>
    </tr>
    <tr>
        <td nowrap><code>CONNECTION_TYPE_ASC</code></td>
        <td>Sort in ascending order by the equipment types's <a href="#connectiontype">Connection Type</a></td>
    </tr>
    <tr>
        <td nowrap><code>CONNECTION_TYPE_DESC</code></td>
        <td>Sort in descending order by the equipment types's <a href="#connectiontype">Connection Type</a></td>
    </tr>
    <tr>
        <td nowrap><code>CREATED_AT_ASC</code></td>
        <td>Sort in ascending order by the time the equipment types was created</td>
    </tr>
    <tr>
        <td nowrap><code>CREATED_AT_DESC</code></td>
        <td>ort in descending order by the time the equipment types was created</td>
    </tr>
    <tr>
        <td nowrap><code>UPDATED_AT_ASC</code></td>
        <td>Sort in ascending order by the time the equipment types was most recently updated</td>
    </tr>
    <tr>
        <td nowrap><code>UPDATED_AT_DESC</code></td>
        <td>Sort in descending order by the time the equipment types was most recently updated</td>
    </tr>
</table>
