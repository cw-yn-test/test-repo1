# Equipment Objects

## Equipment

Represents a registered equipment.

Implements [EquipmentInterface](./equipmentInterfaces.md#equipmentinterface)

<table>
    <tr>
        <th nowrap>Field</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
        <th nowrap>Inputs</th>
    </tr>
    <tr>
        <td nowrap><code>id</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Unique ID representing the equipment</td>
    </tr>
    <tr>
        <td nowrap><code>name</code></td>
        <td nowrap><code>String!</code></td>
        <td>Name of the equipment</td>
    </tr>
    <tr>
        <td nowrap><code>type</code></td>
        <td nowrap><code><a href="./equipmentTypeInterfaces.html#equipmenttype">EquipmentType</a>!</code></td>
        <td>Reference to an <a href="./equipmentTypeInterfaces.html#equipmenttype">EquipmentType</a></td>
    </tr>
    <tr>
        <td nowrap><code>reporting</code></td>
        <td nowrap><code>Boolean</code></td>
        <td>Whether or not an equipment is reporting data</td>
    </tr>
    <tr>
        <td nowrap><code>lastReportedAt</code></td>
        <td nowrap><code>DateTime</code></td>
        <td>UTC date-time string representing when an equipment last reported.</td>
    </tr>
    <tr>
        <td nowrap><code>frequency</code></td>
        <td nowrap><code>Int</code></td>
        <td>Integer value representing the frequency of the equipment in seconds. Defaults to 1800 if not provided.</td>
    </tr>
    <tr>
        <td nowrap><code>site</code></td>
        <td nowrap><code><a href="../locationManagement/objects.html#site">Site</a></code></td>
        <td>Site where equipment is located at</td>
    </tr>
    <tr>
        <td nowrap><code>space</code></td>
        <td nowrap><code><a href="../locationManagement/objects.html#space">Space</a></code></td>
        <td>Space where equipment is located at</td>
    </tr>
    <tr>
        <td nowrap><code>ioConnection</code></td>
        <td nowrap><code><a href="../ioConnectionManagement/ioConnectionObjects.html#site">IoConnection</a></code></td>
        <td>IO Connection where equipment is discovered from</td>
    </tr>
    <tr>
        <td nowrap><code>customAttribute</code></td>
        <td nowrap><code>JSONObject</code></td>
        <td>Additional information about the equipment</td>
    </tr>
    <tr>
        <td nowrap><code>timeSeries</code></td>
        <td nowrap><code><a href="#timeseries">TimeSeries</a></code></td>
        <td>Timeseries data posted to the platform<br /><strong>Note: This field has been deprecated. Please use <code>latestReadings</code> field or <a href="../dataManagement/queries.html#equipmentdata">equipmentData</a> query instead</strong></td>
    </tr>
    <tr>
        <td nowrap><code>latestReadings</code></td>
        <td nowrap><code><a href="../dataManagement/objects.html#lastreadings">LastReadings</a></code></td>
        <td>
            LastReadings type.<br/>
            Latest values of all known points from the specified equipment - often synthesized from several Change-Of-Value (COV) messages.
        </td>
    </tr>
    <tr>
        <td nowrap><code>lastConfiguration</code></td>
        <td nowrap><code><a href="#deviceconfiguration">DeviceConfiguration</a></code></td>
        <td>The last sent configuration</td>
    </tr>
    <tr>
        <td nowrap><code>createdBy</code></td>
        <td nowrap><code><a href="../userManagement/userObjects.html#user">User</a>!</code></td>
        <td>The user who created this equipment</td>
    </tr>
    <tr>
        <td nowrap><code>createdAt</code></td>
        <td nowrap><code>DateTime</code></td>
        <td>UTC date-time string representing when this entry was created.</td>
    </tr>
    <tr>
        <td nowrap><code>updatedAt</code></td>
        <td nowrap><code>DateTime</code></td>
        <td>UTC date-time string representing when this entry was updated.</td>
    </tr>
    <tr>
        <td nowrap><code>clientCertificate</code></td>
        <td nowrap><code>String</code></td>
        <td>A unique equipment certificate. Only issued to a <a href="./equipmentTypeObjects.html#device">Device</a></td>
    </tr>
    <tr>
        <td nowrap><code>clientKey</code></td>
        <td nowrap><code>String</code></td>
        <td>A unique equipment certificate key. Only issued to a <a href="./equipmentTypeObjects.html#device">Device</a></td>
    </tr>
    <tr>
        <td nowrap><code>publicCertificate</code></td>
        <td nowrap><code>String</code></td>
        <td>The root public key certificate.</td>
    </tr>
    <tr>
        <td nowrap><code>groups</code></td>
        <td nowrap><code>[ <a href="../projectManagement/objects.html#accessgroup">AccessGroup</a> ]</code></td>
        <td>List of access groups this equipment belongs to. This field is only accessible by project managers.</td>
        <td>
            <table>
                <tr>
                    <th nowrap>Argument</th>
                    <th nowrap>Type</th>
                    <th nowrap>Description</th>
                </tr>
                <tr>
                    <td><code>projectId</code></td>
                    <td><code>ID!</code></td>
                    <td>Reference to the parent project of the access groups</td>
                </tr>
                <tr>
                    <td><code>name</code></td>
                    <td><code>String</code></td>
                    <td>If specified, returns access groups with partial matching of the group name</td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td nowrap><code>dataModel</code></td>
        <td nowrap><code><a href="#datamodel">DataModel</a></code></td>
        <td>The data model of the equipment</td>
    </tr>
    <tr>
        <td nowrap><code>organization</code></td>
        <td nowrap><code><a href="../organizationManagement/objects.html#organization">Organization</a></code></td>
        <td>The organization that owns the equipment.</td>
    </tr>
    <tr>
        <td nowrap><code>externalId</code></td>
        <td nowrap><code>ID</code></td>
        <td>Unique ID from another system. For example, the equipment ID from GPF Cloud.</td>
    </tr>
</table>

## TimeSeries

Represents information about posted equipment timeseries data.

<table>
    <tr>
        <th nowrap>Field</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
        <th nowrap>Inputs</th>
    </tr>
    <tr>
        <td nowrap><code>latestValues</code></td>
        <td nowrap><code><a href="../dataManagement/objects.html#lastreadings">LastReadings</a></code></td>
        <td>
            LastReadings type.<br/>
            Latest values of all known points from the specified equipment - often synthesized from several Change-Of-Value (COV) messages.
            <br />
            <strong>
                Note: This field has been deprecated. Please use <code>latestReadings</code> field instead
            </strong>
        </td>
        <td>
            <table>
                <tr>
                    <th nowrap>Argument</th>
                    <th nowrap>Type</th>
                    <th nowrap>Description</th>
                </tr>
                <tr>
                    <td><code>until</code></td>
                    <td><code>DateTime</code></td>
                    <td>If specified past timestamp, this API will return all interested data points latest reading until this timestamp provided. If empty or any timestamp greater than now(future), this API will return all interested data points latest reading until now.</td>
                </tr>
                <tr>
                    <td><code>attributes</code></td>
                    <td><code>[String!]</code></td>
                    <td>Whitelist of attributes to include</td>
                </tr>
                <tr>
                    <td><code>dataModelViewId</code></td>
                    <td><code>ID</code></td>
                    <td>Unique ID representing the <a href="../dataManagement/objects.html#datamodelview">DataModelView</a>. If specified, returns latestValues for the subset of data points set in the <a href="../dataManagement/objects.html#datamodelview">DataModelView</a>. Cannot be specified with <code>attributes</code>.</td>
                </tr>
                <tr>
                    <td><code>ignoreTranslation</code></td>
                    <td><code>Boolean</code></td>
                    <td>When true, skip the configured translation for data point values if any configured in the equipment's data model. Translation example: false -> Disconnected, true -> Connected</td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td nowrap><code>historicalData</code></td>
        <td nowrap><code>[<a href="../dataManagement/objects.html#timeseriesdata">TimeSeriesData</a>]</code></td>
        <td>Array of TimeSeriesData type<br /><strong>Note: This field has been deprecated. Please use or <a href="../dataManagement/queries.html#equipmentdata">equipmentData</a> query instead</strong></td>
        <td>
            <table>
                <tr>
                    <th nowrap>Argument</th>
                    <th nowrap>Type</th>
                    <th nowrap>Description</th>
                </tr>
                <tr>
                    <td><code>start</code></td>
                    <td><code>DateTime</code></td>
                    <td>The start date/time</td>
                </tr>
                <tr>
                    <td><code>end</code></td>
                    <td><code>DateTime</code></td>
                    <td>The end date/time</td>
                </tr>
                <tr>
                    <td><code>page</code></td>
                    <td><code>Int</code></td>
                    <td>Pagination number</td>
                </tr>
                <tr>
                    <td><code>rowsPerPage</code></td>
                    <td><code>Int</code></td>
                    <td>How many records per page</td>
                </tr>
                <tr>
                    <td><code>attributes</code></td>
                    <td><code>[String!]</code></td>
                    <td>Whitelist of attributes to include</td>
                </tr>
                <tr>
                    <td><code>dataModelViewId</code></td>
                    <td><code>ID</code></td>
                    <td>Unique ID representing the <a href="../dataManagement/objects.html#datamodelview">DataModelView</a>. If specified, returns historicalData for the subset of data points set in the <a href="../dataManagement/objects.html#datamodelview">DataModelView</a>. Cannot be specified with <code>attributes</code>.</td>
                </tr>
                <tr>
                    <td><code>ignoreTranslation</code></td>
                    <td><code>Boolean</code></td>
                    <td>When true, skip the configured translation for data point values if any configured in the equipment's data model. Translation example: false -> Disconnected, true -> Connected</td>
                </tr>
            </table>
        </td>
    </tr>
</table>

## DeviceConfiguration

Represents a message sent to a [Device](./equipmentTypeObjects.md#device).

<table>
    <tr>
        <th nowrap>Field</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>deviceId</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Reference to an <code>Equipment</code> with a <code>connectionType</code> of <code>device</code></td>
    </tr>
    <tr>
        <td nowrap><code>configuration</code></td>
        <td nowrap><code>String!</code></td>
        <td>A configuration blob</td>
    </tr>
    <tr>
        <td nowrap><code>metadata</code></td>
        <td nowrap><code>JSONObject</code></td>
        <td>Any additional information to be included</td>
    </tr>
    <tr>
        <td nowrap><code>transmissionError</code></td>
        <td nowrap><code>String</code></td>
        <td>Any errors which may have occured during transmission</td>
    </tr>
    <tr>
        <td nowrap><code>createdBy</code></td>
        <td nowrap><code><a href="../userManagement/userObjects.html#user">User</a>!</code></td>
        <td>The user who created this entry</td>
    </tr>
    <tr>
        <td nowrap><code>updatedBy</code></td>
        <td nowrap><code><a href="../userManagement/userObjects.html#user">User</a></code></td>
        <td>The user who last modified this entry</td>
    </tr>
    <tr>
        <td nowrap><code>createdAt</code></td>
        <td nowrap><code>DateTime</code></td>
        <td>UTC date-time string representing when this entry was created</td>
    </tr>
    <tr>
        <td nowrap><code>updatedAt</code></td>
        <td nowrap><code>DateTime</code></td>
        <td>UTC date-time string representing when this entry was updated</td>
    </tr>
</table>

## DataModel

Represents the data model of the entity including equipment, space, site, etc.

<table>
    <tr>
        <th nowrap>Field</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>id</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Unique ID representing the data model</td>
    </tr>
    <tr>
        <td nowrap><code>name</code></td>
        <td nowrap><code>String</code></td>
        <td>The name of the data model</td>
    </tr>
    <tr>
        <td nowrap><code>description</code></td>
        <td nowrap><code>String</code></td>
        <td>The description of the data model</td>
    </tr>
    <tr>
        <td nowrap><code>languages</code></td>
        <td nowrap><code>[Language!]</code></td>
        <td>Set of supported languages. Used as keys in multi-lingual fields in the data point such as displayName and description</td>
    </tr>
    <tr>
        <td nowrap><code>locked</code></td>
        <td nowrap><code>Boolean!</code></td>
        <td>Whether or not new data points can be auto-discovered and added when new data is posted</td>
    </tr>
    <tr>
        <td nowrap><code>dataPoints</code></td>
        <td nowrap><code>[ <a href="#datapoint">DataPoint</a>! ]!</code></td>
        <td>Data points which have been auto-discovered from posted data</td>
    </tr>
</table>

## DataPoint

Represents a single data point within a data model

<table>
    <tr>
        <th nowrap>Field</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>dataPointName</code></td>
        <td nowrap><code>String!</code></td>
        <td>Unique machine readable name of the data point</td>
    </tr>
    <tr>
        <td nowrap><code>displayName</code></td>
        <td nowrap><code>String</code></td>
        <td>Human-readable name of the data point. Will override default value if it finds the passed in <code>locale</code></td>
    </tr>
    <tr>
        <td nowrap><code>description</code></td>
        <td nowrap><code>String</code></td>
        <td>Human-readable descriptions & definitions of the data point. Will override default value if it finds the passed in <code>locale</code></td>
    </tr>
    <tr>
        <td nowrap><code>type</code></td>
        <td nowrap><code>String</code></td>
        <td>Type of the data point value.</td>
    </tr>
    <tr>
        <td nowrap><code>unit</code></td>
        <td nowrap><code>String</code></td>
        <td>Physical unit of the data point. Ex: °F, °C, Pascals, Volts, Amps, kWh, VAR, etc</td>
    </tr>
    <tr>
        <td nowrap><code>max</code></td>
        <td nowrap><code>Float</code></td>
        <td>Upper limit of the data point range for numeric points</td>
    </tr>
    <tr>
        <td nowrap><code>min</code></td>
        <td nowrap><code>Float</code></td>
        <td>Lower limit of the data point range for numeric points</td>
    </tr>
    <tr>
        <td nowrap><code>decimalPlaces</code></td>
        <td nowrap><code>Int</code></td>
        <td>Number of decimal places</td>
    </tr>
    <tr>
        <td nowrap><code>haystackTags</code></td>
        <td nowrap><code>JSONObject</code></td>
        <td>Haystack tags of individual points</td>
    </tr>
    <tr>
        <td nowrap><code>locale</code></td>
        <td nowrap><code>JSONObject</code></td>
        <td>Locale of the data point including all languages, enum, unit, etc.</td>
    </tr>
    <tr>
        <td nowrap><code>isTimeseries</code></td>
        <td nowrap><code>Boolean!</code></td>
        <td>Whether or not it is recorded as time series data</td>
    </tr>
    <tr>
        <td nowrap><code>hisInterpolate</code></td>
        <td nowrap><code><a href="./equipmentEnums.html#hisinterpolatevalue">HisInterpolateValue</a></code></td>
        <td>A haystack tag explaining how to interpolate between two observations</td>
    </tr>
    <tr>
        <td nowrap><code>hierarchy</code></td>
        <td nowrap><code>String</code></td>
        <td>Hierarchy of the data point. Ex: OutdoorUnit/Compressor/Inverter/CoolingFinTemp</td>
    </tr>
</table>

## EquipmentAccessUser

Represents a user and the equipments they have access to.

<table>
    <tr>
        <th nowrap>Field</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>user</code></td>
        <td nowrap><code><a href="../userManagement/userObjects.html#user">User</a>!</code></td>
        <td>The user being asked for</td>
    </tr>
    <tr>
        <td nowrap><code>addedEquipment</code></td>
        <td nowrap><code>[ID!]</code></td>
        <td>Equipment IDs added to the user</td>
    </tr>
    <tr>
        <td nowrap><code>removedEquipment</code></td>
        <td nowrap><code>[ID!]</code></td>
        <td>Equipment IDs removed from the user</td>
    </tr>
</table>
