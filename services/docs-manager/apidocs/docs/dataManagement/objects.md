# Data Objects

## TimeSeriesData

Represents time series data

Implements [EquipmentData](./interfaces.md#equipmentdata)

## LastReadings

Represents CoV data

Implements [EquipmentData](./interfaces.md#equipmentdata)

Has these additional fields in addition to the above:

<table>
    <tr>
        <th nowrap>Field</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>pointsObservedAt</code></td>
        <td nowrap><code>JSONObject!</code></td>
        <td>Object with data point as the key and time reported as the value</td>
    </tr>
</table>

## EquipmentDataPageState

Represents posted data from an [Equipment](../equipmentManagement/equipmentObjects.md#EquipmentData)

<table>
    <tr>
        <th nowrap>Field</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>nextPageState</code></td>
        <td nowrap><code>String</code></td>
        <td>A string token, used for querying next page</td>
    </tr>
    <tr>
        <td nowrap><code>currentPageState</code></td>
        <td nowrap><code>String</code></td>
        <td>A string token, used for querying current page</td>
    </tr>
    <tr>
        <td nowrap><code>previousPageState</code></td>
        <td nowrap><code>String</code></td>
        <td>A string token, used for querying previous page</td>
    </tr>
    <tr>
        <td nowrap><code>rows</code></td>
        <td nowrap><code>[<a href="./objects.html#timeseriesdata">TimeSeriesData</a>]</code></td>
        <td>An array of the posted data from an Equipment.</td>
    </tr>
</table>

## EquipmentTimeseriesDataRequest

Represents a timeseries data download request from an [Equipment](../equipmentManagement/equipmentObjects.md#equipment)

<table>
    <tr>
        <th nowrap>Field</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>id</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Unique ID representing the request</td>
    </tr>
    <tr>
        <td nowrap><code>equipment</code></td>
        <td nowrap><code><a href="../equipmentManagement/equipmentObjects.html#equipment">Equipment</a>!</code></td>
        <td>Equipment information</td>
    </tr>
    <tr>
        <td nowrap><code>from</code></td>
        <td nowrap><code>DateTime</code></td>
        <td>UTC date-time string representing the start of the data download being requested</td>
    </tr>
    <tr>
        <td nowrap><code>to</code></td>
        <td nowrap><code>DateTime!</code></td>
        <td>UTC date-time string representing the end of the data download being requested</td>
    </tr>
    <tr>
        <td nowrap><code>points</code></td>
        <td nowrap><code>[String!]!</code></td>
        <td>List of data points being requested</td>
    </tr>
    <tr>
        <td nowrap><code>requestStatus</code></td>
        <td nowrap><code><a href="./enums.html#equipmenttimeseriesdatarequeststatus">EquipmentTimeseriesDataRequestStatus</a>!</code></td>
        <td>The state of the data download request</td>
    </tr>
    <tr>
        <td nowrap><code>downloadFile</code></td>
        <td nowrap><code><a href="../objectManagement/objects.html#fileupload">FileUpload</a></code></td>
        <td>Information of the data file after it is available to download</td>
    </tr>
    <tr>
        <td nowrap><code>createdBy</code></td>
        <td nowrap><code><a href="../userManagement/userObjects.html#user">User</a>!</code></td>
        <td>The creator of the request</td>
    </tr>
    <tr>
        <td nowrap><code>updatedBy</code></td>
        <td nowrap><code><a href="../userManagement/userObjects.html#user">User</a></code></td>
        <td>The last user to update the request</td>
    </tr>
    <tr>
        <td nowrap><code>createdAt</code></td>
        <td nowrap><code>DateTime!</code></td>
        <td>UTC date-time string representing when this entry was created</td>
    </tr>
    <tr>
        <td nowrap><code>updatedAt</code></td>
        <td nowrap><code>DateTime</code></td>
        <td>UTC date-time string representing when this entry was updated</td>
    </tr>
</table>

## DataModelView

Represents a subset of data points for a particular [DataModel](../equipmentManagement/equipmentObjects.md#datamodel)

<table>
    <tr>
        <th nowrap>Field</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>id</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Unique ID representing the data model view</td>
    </tr>
    <tr>
        <td nowrap><code>name</code></td>
        <td nowrap><code>String!</code></td>
        <td>Name of the data model view</td>
    </tr>
    <tr>
        <td nowrap><code>dataModelId</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Unique ID representing the data model</td>
    </tr>
    <tr>
        <td nowrap><code>dataPoints</code></td>
        <td nowrap><code>[String!]!</code></td>
        <td>List of data points</td>
    </tr>
    <tr>
        <td nowrap><code>createdBy</code></td>
        <td nowrap><code><a href="../userManagement/userObjects.html#user">User</a>!</code></td>
        <td>The creator of the configuration</td>
    </tr>
    <tr>
        <td nowrap><code>updatedBy</code></td>
        <td nowrap><code><a href="../userManagement/userObjects.html#user">User</a></code></td>
        <td>The last user to update the configuration</td>
    </tr>
    <tr>
        <td nowrap><code>createdAt</code></td>
        <td nowrap><code>DateTime!</code></td>
        <td>UTC date-time string representing when this entry was created</td>
    </tr>
    <tr>
        <td nowrap><code>updatedAt</code></td>
        <td nowrap><code>DateTime</code></td>
        <td>UTC date-time string representing when this entry was updated</td>
    </tr>
</table>
