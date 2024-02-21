# Equipment Interfaces

## EquipmentInterface

Represents different equipment connected to Dosatsu.

**Implemented By:**

-   [Equipment](./equipmentObjects.md#equipment)

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
        <td nowrap><code>expectedAt</code></td>
        <td nowrap><code>DateTime</code></td>
        <td>UTC date-time string representing when an equipment is expected to report data next.</td>
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
        <td nowrap><code><a href="./equipmentObjects.html#timeseries">TimeSeries</a></code></td>
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
        <td nowrap><code><a href="./equipmentObjects.html#deviceconfiguration">DeviceConfiguration</a></code></td>
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
        <td nowrap><code>dataModel</code></td>
        <td nowrap><code><a href="./equipmentObjects.html#datamodel">DataModel</a></code></td>
        <td>The data model of the entity including equipment, space, site, etc.</td>
    </tr>
    <tr>
        <td nowrap><code>organization</code></td>
        <td nowrap><code><a href="../organizationManagement/objects.html#organization">Organization</a></code></td>
        <td>The organization this equipment belongs to.</td>
    </tr>
    <tr>
        <td nowrap><code>externalId</code></td>
        <td nowrap><code>ID</code></td>
        <td>Unique ID from another system. For example, the equipment ID from GPF Cloud.</td>
    </tr>
</table>