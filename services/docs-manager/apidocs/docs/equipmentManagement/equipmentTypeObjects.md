# Equipment Type Objects

## Device

An edge device or other equipment that can upload data directly to Dosatsu

Implements [EquipmentType](./equipmentTypeInterfaces.md#equipmenttype)

<table>
    <tr>
        <th nowrap>Field</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>id</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Unique ID representing the <a href="./equipmentTypeInterfaces.html#equipmenttype">equipment type</a></td>
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
        <td>Connection classification. Must be the value <code>device</code>.</td>
    </tr>
    <tr>
        <td nowrap><code>dataModel</code></td>
        <td nowrap><code><a href="./equipmentObjects.html#datamodel">DataModel</a></code></td>
        <td>The data model of the equipment type</td>
    </tr>
    <tr>
        <td nowrap><code>frequency</code></td>
        <td nowrap><code>Int</code></td>
        <td>Integer value representing the default <code>reporting frequency</code> of the equipment type</td>
    </tr>
    <tr>
        <td nowrap><code>createdBy</code></td>
        <td nowrap><code><a href="../userManagement/userObjects.html#user">User</a>!</code></td>
        <td>The user who created the entry</td>
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

## Node

Physical HVAC equipment or other IOT devices that do not upload data directly to Dosatsu

Implements [EquipmentType](./equipmentTypeInterfaces.md#equipmenttype)

<table>
    <tr>
        <th nowrap>Field</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>id</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Unique ID representing the <a href="./equipmentTypeInterfaces.html#equipmenttype">equipment type</a></td>
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
        <td>Connection classification. Must be the value <code>node</code>.</td>
    </tr>
    <tr>
        <td nowrap><code>dataModel</code></td>
        <td nowrap><code><a href="./equipmentObjects.html#datamodel">DataModel</a></code></td>
        <td>The data model of the equipment type</td>
    </tr>
    <tr>
        <td nowrap><code>frequency</code></td>
        <td nowrap><code>Int</code></td>
        <td>Integer value representing the default <code>reporting frequency</code> of the equipment type</td>
    </tr>
    <tr>
        <td nowrap><code>createdBy</code></td>
        <td nowrap><code><a href="../userManagement/userObjects.html#user">User</a>!</code></td>
        <td>The user who created the entry</td>
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

## Config
**Note: `Virtual` type is deprecated. Please use IO Connection CLOUD instead.**
Configuration definitions for a simpleREST [ConnectionConfig](#connectionconfig)

<table>
    <tr>
        <th nowrap>Field</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>accessRequest</code></td>
        <td nowrap><code><a href="#request">Request</a></code></td>
        <td>Instructions for retrieving an accessToken (or similar authorization keys) that periodically expires</td>
    </tr>
    <tr>
        <td nowrap><code>dataRequestSimple</code></td>
        <td nowrap><code>[ <a href="#request">Request</a>! ]</code></td>
        <td>Defines REST interface & URIs for simple data retrievals</td>
    </tr>
</table>

## Request
**Note: `Virtual` type is deprecated. Please use IO Connection CLOUD instead.**
Request definitions for a simpleREST <a href="#config">Config</a>

Most fields support variable substitution using a key-value store of virtual equipment’s custom attributes. For example: clientID: `${custom.clientID}` will replace `${custom.clientID}` with the value of `clientID` in the virtual equipment’s key-value store.

<table>
    <tr>
        <th nowrap>Field</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
        <th nowrap>Example</th>
    </tr>
    <tr>
        <td nowrap><code>httpMethod</code></td>
        <td nowrap><code><a href="./equipmentTypeEnums.html#connectionconfighttp">ConnectionConfigHttp</a>!</code></td>
        <td>Which HTTP method to use</td>
    </tr>
    <tr>
        <td nowrap><code>url</code></td>
        <td nowrap><code>String!</code></td>
        <td>Where to make the request</td>
    </tr>
    <tr>
        <td nowrap><code>headers</code></td>
        <td nowrap><code>JSONObject</code></td>
        <td>Any necessary header information</td>
        <td>
        ```
        {
            grant_type: refresh_token,
            refresh_token: '5b063c56b05b21b9698b52b8|6d3c1be8128bef65755107a4e097733f',
            clientID: '${custom.clientID}',
            clientSecret: '${custom.clientSecret}'
        }
        ```
        </td>
    </tr>
    <tr>
        <td nowrap><code>queryParams</code></td>
        <td nowrap><code>JSONObject</code></td>
        <td>Any necessary query parameters</td>
        <td>
        ```
        {
            access_token: '${accessCode}',
            device_id: '${custom.device_id}',
            module_id: '${custom.module_id}',
            scale: 'max',
            type: 'temperature,humidity,co2,pressure,noise',
            limit: 1,
            date_begin: '${currentTimeUTC}'
        }
        ```
        <br/>
        In this example, the value of <b>${accessCode}</b> was retrieved from a prior REST call to <b>accessRequest</b> , and the system clock supplies <b>${currentTimeUTC}</b> .
        </td>
    </tr>
    <tr>
        <td nowrap><code>body</code></td>
        <td nowrap><code>ObjectOrString</code></td>
        <td>Any necessary body information</td>
    </tr>
    <tr>
        <td nowrap><code>responseFields</code></td>
        <td nowrap><code><a href="#responsefields">ResponseFields</a></code></td>
        <td>Information on how to extract access token and expiration info. Required for <b>accessRequest</b> in <a href="#config">Config</a></td>
    </tr>
</table>

## ResponseFields

Response Field definitions for <a href="#request">Request</a>

Many APIs have expiring authentication tokens which needs to be refreshed prior to making calls.
These definitions provide information on how to extract the access token and expiry information from the payload.
We assume the payload is in JSON format.

<table>
    <tr>
        <th nowrap>Field</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
        <th nowrap>Example</th>
    </tr>
    <tr>
        <td nowrap><code>accessToken</code></td>
        <td nowrap><code>String!</code></td>
        <td>JSON path to the token</td>
        <td>$custom.accessToken=$body</td>
    </tr>
    <tr>
        <td nowrap><code>expiry</code></td>
        <td nowrap><code>String</code></td>
        <td>JSON path to access token expiration information. (Future Implementation)</td>
        <td>$.expire_in</td>
    </tr>
</table>
